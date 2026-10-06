import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
import ts from 'typescript';
import sharp from 'sharp';
import { outputDir, redirects, siteUrl, supportedLocales } from './legacy-redirects.mjs';

// Build-time assertions for the static export. These encode the invariants the
// release checklist re-checks by hand: every sitemap URL must exist as an
// exported HTML file with a matching canonical, and every legacy redirect must
// have both a working stub and an existing destination.

function pathToHtmlFile(urlPath) {
  const cleanPath = urlPath.split('#')[0].split('?')[0].replace(/\/+$/, '');
  if (cleanPath === '') return path.join(outputDir, 'index.html');
  return path.join(outputDir, `${cleanPath}.html`);
}

function stubPathsForSource(sourcePath) {
  const normalized = sourcePath.replace(/^\/+/, '');
  if (normalized.endsWith('.html')) return [path.join(outputDir, normalized)];
  if (sourcePath.endsWith('/')) return [path.join(outputDir, normalized, 'index.html')];
  return [path.join(outputDir, `${normalized}.html`)];
}

async function readTextIfExists(filePath) {
  try {
    return await readFile(filePath, 'utf8');
  } catch {
    return null;
  }
}

const problems = [];

function visibleText(html) {
  return html
    .replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&(#x[\da-f]+|#\d+|amp|lt|gt|quot|apos);/gi, (entity, code) => {
      if (code.startsWith('#')) {
        return String.fromCodePoint(code[1].toLowerCase() === 'x' ? parseInt(code.slice(2), 16) : Number(code.slice(1)));
      }
      return { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'" }[code.toLowerCase()] ?? entity;
    })
    .replace(/\s+/g, ' ')
    .trim();
}

function dictionaryShape(value) {
  if (Array.isArray(value)) return value.map(dictionaryShape);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.keys(value).sort().map((key) => [key, dictionaryShape(value[key])]));
  }
  return typeof value;
}

const dictionaries = new Map();
const siteSource = await readFile('src/data/site.ts', 'utf8');
const siteCompiled = ts.transpileModule(siteSource, { compilerOptions: { module: ts.ModuleKind.CommonJS } });
const siteModule = { exports: {} };
vm.runInNewContext(siteCompiled.outputText, { module: siteModule, exports: siteModule.exports }, { timeout: 1000 });
const site = siteModule.exports;
if (site.siteUrl !== siteUrl) problems.push('Application and static-export site URLs differ');
for (const locale of supportedLocales) {
  const source = await readFile(`src/i18n/${locale}.ts`, 'utf8');
  const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } });
  const dictionaryModule = { exports: {} };
  vm.runInNewContext(compiled.outputText, {
    module: dictionaryModule,
    exports: dictionaryModule.exports,
    require: (specifier) => {
      if (specifier === '@/data/site') return site;
      throw new Error(`Unexpected dictionary dependency: ${specifier}`);
    },
  }, { timeout: 1000 });
  dictionaries.set(locale, dictionaryModule.exports.default);
}

const baselineShape = JSON.stringify(dictionaryShape(dictionaries.get('en')));
const referenceSource = await readFile('src/data/brandReferences.ts', 'utf8');
const referenceCompiled = ts.transpileModule(referenceSource, { compilerOptions: { module: ts.ModuleKind.CommonJS } });
const referenceModule = { exports: {} };
vm.runInNewContext(referenceCompiled.outputText, { module: referenceModule, exports: referenceModule.exports }, { timeout: 1000 });
const referenceBrands = referenceModule.exports.brandReferences;
if (new Set(referenceBrands.map((brand) => brand.name)).size !== referenceBrands.length) {
  problems.push('Duplicate brand inquiry references');
}

for (const [locale, dictionary] of dictionaries) {
  if (JSON.stringify(dictionaryShape(dictionary)) !== baselineShape) {
    problems.push(`Dictionary key or array shape mismatch: ${locale}`);
  }
  if (!dictionary.leadModal.requestTypes.catalog?.trim()) {
    problems.push(`Missing catalog inquiry label: ${locale}`);
  }
  const oemHtml = (await readTextIfExists(pathToHtmlFile(`/${locale}/oem-odm`))) ?? '';
  const headings = [...oemHtml.matchAll(/<h3\b[^>]*>([\s\S]*?)<\/h3>/gi)].map((match) => visibleText(match[1]));
  const oemText = visibleText(oemHtml);
  const expectedSteps = dictionary.oem.steps;
  if (headings.length !== expectedSteps.length || expectedSteps.some((step, index) => headings[index] !== step.title || !oemText.includes(step.description))) {
    problems.push(`OEM options do not match the selected locale: ${locale}`);
  }

  const homeHtml = (await readTextIfExists(pathToHtmlFile(`/${locale}`))) ?? '';
  const applications = homeHtml.match(/<section\b[^>]*\bid="applications"[^>]*>([\s\S]*?)<\/section>/)?.[1] ?? '';
  const applicationHeadings = [...applications.matchAll(/<h3\b[^>]*>([\s\S]*?)<\/h3>/gi)].map((match) => visibleText(match[1]));
  const applicationImages = [...applications.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/gi)].map((match) => match[1]);
  if (applicationHeadings.length !== 12 || applicationImages.length !== 12 || new Set(applicationImages).size !== 12 ||
      dictionary.applications.names.some((name, index) => visibleText(name) !== applicationHeadings[index]) ||
      dictionary.applications.descriptions.some((description) => !visibleText(applications).includes(visibleText(description))) ||
      visibleText(applications).split(visibleText(dictionary.applications.engineeringLabel)).length - 1 !== 3) {
    problems.push(`Application cards are missing, repeated or incorrectly localized: ${locale}`);
  }
  const productCards = homeHtml.match(/<section\b[^>]*\bid="products"[^>]*>([\s\S]*?)<\/section>/)?.[1] ?? '';
  if (!visibleText(productCards).includes(visibleText(dictionary.product.accessories.title)) || !productCards.includes('/images/generated/car-remotes-640.webp')) {
    problems.push(`Aftermarket car category or image missing: ${locale}`);
  }
  for (const pagePath of ['', '/factory-quality']) {
    const footageHtml = pagePath === '' ? homeHtml : (await readTextIfExists(pathToHtmlFile(`/${locale}${pagePath}`))) ?? '';
    if (!visibleText(footageHtml).includes(visibleText(dictionary.visuals.footageTitle))) {
      problems.push(`Factory footage label missing: ${locale}${pagePath}`);
    }
  }
  for (const pagePath of ['', '/compatibility']) {
    const referenceHtml = pagePath === '' ? homeHtml : (await readTextIfExists(pathToHtmlFile(`/${locale}${pagePath}`))) ?? '';
    const directory = referenceHtml.match(/<div\b[^>]*\bdata-brand-references="directory"[^>]*>([\s\S]*?)<\/section>/)?.[1] ?? '';
    const referenceText = visibleText(directory);
    if (referenceBrands.some((brand) => !referenceText.includes(brand.name)) ||
        ['subtitle', 'independentNote', 'trademarkNote', 'verificationNote'].some((key) => !referenceText.includes(visibleText(dictionary.brandReferences[key])))) {
      problems.push(`Brand directory or independent aftermarket explanation missing: ${locale}${pagePath}`);
    }
  }
  const footer = homeHtml.match(/<footer\b[^>]*>([\s\S]*?)<\/footer>/)?.[1] ?? '';
  const footerText = visibleText(footer);
  if (!footerText.includes(site.companyName) || !footerText.includes(site.siteName) ||
      !footerText.includes(site.siteContact.email) || !footerText.includes(site.siteContact.telephone) ||
      !footerText.includes(site.siteContact.address)) {
    problems.push(`Company identity or existing contact details missing from footer: ${locale}`);
  }
  if (referenceBrands.some((brand) => !footerText.includes(brand.name)) ||
      ['independentNote', 'footerNote'].some((key) => !footerText.includes(visibleText(dictionary.brandReferences[key])))) {
    problems.push(`Footer brand references or aftermarket explanation missing: ${locale}`);
  }
  const brandDisclosure = footer.match(/<details\b([^>]*\bdata-footer-brands[^>]*)>([\s\S]*?)<\/details>/);
  if (!brandDisclosure || /\sopen(?:\s|=|$)/.test(brandDisclosure[1]) ||
      !/<summary\b/.test(brandDisclosure[2]) ||
      referenceBrands.some((brand) => !visibleText(brandDisclosure[2]).includes(brand.name)) ||
      !visibleText(brandDisclosure[2].match(/<summary\b[^>]*>([\s\S]*?)<\/summary>/)?.[1] ?? '').includes(visibleText(dictionary.brandReferences.independentNote))) {
    problems.push(`Footer brands must be expandable, initially closed and retain a visible aftermarket note: ${locale}`);
  }
  for (const brand of referenceBrands.filter((entry) => entry.guideSlug)) {
    const guidePath = `/${locale}/compatibility/${brand.guideSlug}`;
    if (!footer.includes(`href="${guidePath}"`) || !(await readTextIfExists(pathToHtmlFile(guidePath)))) {
      problems.push(`Existing brand guide link changed or broken: ${guidePath}`);
    }
  }
}

let faqCount = 0;

// 1. Core files exist.
for (const file of ['robots.txt', 'sitemap.xml']) {
  if (!(await readTextIfExists(path.join(outputDir, file)))) {
    problems.push(`Missing out/${file}`);
  }
}

function attributes(tag) {
  return Object.fromEntries(
    [...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map((match) => [match[1].toLowerCase(), visibleText(match[2])]),
  );
}

function hasNoindex(html) {
  return [...html.matchAll(/<meta\b[^>]*>/gi)].some((match) => {
    const tag = attributes(match[0]);
    return ['robots', 'googlebot'].includes(tag.name?.toLowerCase()) && /\bnoindex\b/i.test(tag.content);
  });
}

function languageLinks(text, tagName) {
  return new Map(
    [...text.matchAll(new RegExp(`<${tagName}\\b[^>]*>`, 'g'))]
      .map((match) => attributes(match[0]))
      .filter((tag) => tag.rel === 'alternate' && tag.hreflang)
      .map((tag) => [tag.hreflang, tag.href]),
  );
}

// 2. Every sitemap URL exists, is indexable and matches its HTML metadata.
const sitemap = (await readTextIfExists(path.join(outputDir, 'sitemap.xml'))) ?? '';
const sitemapEntries = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((match) => ({
  url: match[1].match(/<loc>([^<]+)<\/loc>/)?.[1],
  lastModified: match[1].match(/<lastmod>([^<]+)<\/lastmod>/)?.[1],
  alternates: languageLinks(match[1], 'xhtml:link'),
}));
const sitemapUrls = sitemapEntries.map((entry) => entry.url).filter(Boolean);
const sitemapUrlSet = new Set(sitemapUrls);
const sitemapByUrl = new Map(sitemapEntries.map((entry) => [entry.url, entry]));

if (sitemapUrls.length === 0) {
  problems.push('out/sitemap.xml contains no <loc> entries');
}
if (sitemapUrlSet.size !== sitemapUrls.length) {
  problems.push('Duplicate sitemap URLs');
}
if (sitemapUrls.length !== sitemapEntries.length) {
  problems.push('Sitemap entry missing <loc>');
}

const rootRobots = (await readTextIfExists(path.join(outputDir, 'robots.txt'))) ?? '';
if (!rootRobots.includes(`Sitemap: ${siteUrl}/sitemap.xml`)) {
  problems.push('Root robots.txt does not advertise the root sitemap');
}
for (const locale of supportedLocales) {
  const alias = await readTextIfExists(path.join(outputDir, locale, 'sitemap.xml'));
  if (alias !== sitemap) problems.push(`Missing or divergent localized sitemap: ${locale}`);
  const robots = (await readTextIfExists(path.join(outputDir, locale, 'robots.txt'))) ?? '';
  for (const targetLocale of supportedLocales) {
    if (!robots.includes(`Sitemap: ${siteUrl}/${targetLocale}/sitemap.xml`)) {
      problems.push(`Localized robots.txt missing sitemap: ${locale} -> ${targetLocale}`);
    }
  }
}

for (const url of sitemapUrls) {
  if (!url.startsWith(`${siteUrl}/`)) {
    problems.push(`Sitemap URL outside ${siteUrl}: ${url}`);
    continue;
  }

  const urlPath = url.slice(siteUrl.length);
  const firstSegment = urlPath.replace(/^\/+/, '').split('/')[0];
  if (!supportedLocales.has(firstSegment)) {
    problems.push(`Sitemap URL outside supported locales: ${url}`);
  }

  const html = await readTextIfExists(pathToHtmlFile(urlPath));
  if (html === null) {
    problems.push(`Sitemap URL has no exported HTML: ${url}`);
    continue;
  }

  const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
  if (canonical !== url) {
    problems.push(`Canonical mismatch for ${url}: canonical is ${canonical ?? 'missing'}`);
  }
  if (hasNoindex(html)) problems.push(`Sitemap URL is noindex: ${url}`);
  if (html.match(/<html\b[^>]*\blang="([^"]+)"/)?.[1] !== firstSegment) {
    problems.push(`Document language mismatch for ${url}`);
  }

  const entry = sitemapByUrl.get(url);
  const htmlAlternates = languageLinks(html, 'link');
  const article = /^\/en\/blog\/[^/]+$/.test(urlPath);
  const expectedAlternates = article ? new Map() : new Map([
    ...[...supportedLocales].map((locale) => [locale, `${siteUrl}/${locale}${urlPath.slice(firstSegment.length + 1)}`]),
    ['x-default', `${siteUrl}/en${urlPath.slice(firstSegment.length + 1)}`],
  ]);
  for (const [label, actual] of [['HTML', htmlAlternates], ['sitemap', entry.alternates]]) {
    if (actual.size !== expectedAlternates.size || [...expectedAlternates].some(([locale, href]) => actual.get(locale) !== href)) {
      problems.push(`${label} hreflang mismatch for ${url}`);
    }
  }
  for (const href of entry.alternates.values()) {
    if (!sitemapUrlSet.has(href)) problems.push(`Hreflang target absent from sitemap: ${href}`);
  }
  if (entry.lastModified && (!/^\d{4}-\d{2}-\d{2}(?:T.*)?$/.test(entry.lastModified) || !Number.isFinite(Date.parse(entry.lastModified)))) {
    problems.push(`Invalid sitemap lastmod for ${url}: ${entry.lastModified}`);
  }
}

// 3. Every localized blog archive links to all indexable articles in initial HTML.
const articlePaths = sitemapUrls
  .map((url) => new URL(url).pathname)
  .filter((urlPath) => /^\/en\/blog\/[^/]+$/.test(urlPath));

if (articlePaths.length > 0) {
  for (const locale of supportedLocales) {
    const html = (await readTextIfExists(pathToHtmlFile(`/${locale}/blog`))) ?? '';
    const archive = html.match(/<section\b[^>]*\bid="blog-guide-archive"[^>]*>([\s\S]*?)<\/section>/)?.[1];
    if (!archive) {
      problems.push(`Missing complete blog archive for ${locale}`);
      continue;
    }

    const linkedPaths = new Set(
      [...archive.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)].map((match) => match[1]),
    );
    for (const articlePath of articlePaths) {
      if (!linkedPaths.has(articlePath)) {
        problems.push(`Blog archive for ${locale} does not link to ${articlePath}`);
      }
    }
  }
}

// Article links must survive the structured-text renderer; edited headings
// retain explicit anchors so existing reading-map and shared URLs still work.
const articleModules = new Map();
for (const name of ['generated-visuals', 'blog', 'blog-content']) {
  const source = await readFile(`src/data/${name}.ts`, 'utf8');
  const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } });
  const articleModule = { exports: {} };
  vm.runInNewContext(compiled.outputText, {
    module: articleModule,
    exports: articleModule.exports,
    require: (specifier) => {
      const dependency = articleModules.get(specifier.replace(/^\.\//, ''));
      if (!dependency) throw new Error(`Unexpected article data dependency: ${specifier}`);
      return dependency;
    },
  }, { timeout: 1000 });
  articleModules.set(name, articleModule.exports);
}
const articleData = articleModules.get('blog-content');
articleData.assertBlogContentIntegrity();
function verifyPublishedDate(html, post, route) {
  const date = post.publishedAt;
  const parsed = new Date(`${date}T00:00:00.000Z`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date ?? '') || Number.isNaN(parsed.getTime()) || parsed.toISOString().slice(0, 10) !== date) {
    problems.push(`Article publication date missing or invalid: ${post.slug}`);
    return;
  }
  const header = html.match(/<section\b[^>]*>(?:(?!<\/section>)[\s\S])*<h1\b(?:(?!<\/section>)[\s\S])*<\/section>/)?.[0] ?? '';
  const times = [...header.matchAll(/<time\b([^>]*)>([\s\S]*?)<\/time>/g)]
    .filter((match) => 'data-blog-published' in attributes(match[1]));
  const text = times.length === 1 ? visibleText(times[0][2]) : '';
  if (times.length !== 1 || attributes(times[0][1]).datetime !== date ||
      !text || Date.parse(`${text} UTC`) !== parsed.getTime()) {
    problems.push(`Article header publication date missing or mismatched: ${route}`);
  }
}

for (const post of articleData.getAllBlogPosts()) {
  verifyPublishedDate((await readTextIfExists(pathToHtmlFile(`/blog/${post.slug}`))) ?? '', post, `/blog/${post.slug}`);
  const headings = post.content.filter((block) => block.type === 'heading');
  const anchorIds = headings.map((block) => block.id);
  if (anchorIds.some((id) => !id || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)) || new Set(anchorIds).size !== anchorIds.length) {
    problems.push(`Missing or duplicate stable article anchors: ${post.slug}`);
  }
  const links = post.content.flatMap((block) => block.type === 'paragraph' ? block.links ?? [] : []);
  if (!links.some((link) => link.href.startsWith('https://'))) {
    problems.push(`Article has no linked technical references: ${post.slug}`);
  }
  for (const block of post.content.filter((entry) => entry.type === 'paragraph')) {
    let cursor = 0;
    for (const link of block.links ?? []) {
      const start = block.text.indexOf(link.text, cursor);
      if (!link.text || start < 0 || !/^(https:\/\/|\/|#)/.test(link.href)) {
        problems.push(`Article link text or URL cannot be rendered: ${post.slug}: ${link.text}`);
      }
      cursor = start + link.text.length;
    }
  }
  for (const locale of supportedLocales) {
    const articleHtml = (await readTextIfExists(pathToHtmlFile(`/${locale}/blog/${post.slug}`))) ?? '';
    verifyPublishedDate(articleHtml, post, `/${locale}/blog/${post.slug}`);
    const canonicalUrl = `${siteUrl}/en/blog/${post.slug}`;
    if (articleHtml.match(/<link rel="canonical" href="([^"]*)"/)?.[1] !== canonicalUrl ||
        (locale !== 'en' && (!hasNoindex(articleHtml) || sitemapUrlSet.has(`${siteUrl}/${locale}/blog/${post.slug}`)))) {
      problems.push(`Untranslated article indexing policy changed: ${locale}/${post.slug}`);
    }
    if (locale === 'en') {
      const structuredArticle = [...articleHtml.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)]
        .map((match) => JSON.parse(match[1]))
        .find((data) => data['@type'] === 'BlogPosting');
      const modifiedTime = [...articleHtml.matchAll(/<meta\b[^>]*>/gi)]
        .map((match) => attributes(match[0]))
        .find((tag) => tag.property === 'article:modified_time')?.content;
      if (!sitemapUrlSet.has(canonicalUrl) || !structuredArticle ||
          sitemapByUrl.get(canonicalUrl)?.lastModified !== undefined ||
          structuredArticle.dateModified !== undefined || modifiedTime !== undefined) {
        problems.push(`Article modification dates must remain omitted: ${post.slug}`);
      }
    }
    const articleBody = articleHtml.match(/<article\b[^>]*>([\s\S]*?)<\/article>/)?.[1] ?? '';
    const renderedLinks = new Set([...articleBody.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)].map((match) => visibleText(match[1])));
    if (anchorIds.some((id) => !articleBody.includes(`id="${id}"`)) ||
        links.filter((link) => link.href.startsWith('https://')).some((link) => !renderedLinks.has(link.href))) {
      problems.push(`Article references or stable anchors missing in export: ${locale}/${post.slug}`);
    }
    if (!articleHtml.includes('href="#rf-question"') || !articleHtml.includes('id="rf-question"') || !articleHtml.includes('id="comments"')) {
      problems.push(`Article RF question link or legacy comments anchor missing: ${locale}/${post.slug}`);
    }
  }
}

// 4. Every legacy redirect has its stub and a real destination.
for (const [sourcePath, destinationPath] of redirects) {
  for (const stubPath of stubPathsForSource(sourcePath)) {
    if (!(await readTextIfExists(stubPath))) {
      problems.push(`Redirect stub missing for ${sourcePath}: ${path.relative(outputDir, stubPath)}`);
    }
  }

  const destinationHtml = await readTextIfExists(pathToHtmlFile(destinationPath));

  if (destinationHtml === null) {
    problems.push(`Redirect destination has no exported HTML: ${sourcePath} -> ${destinationPath}`);
  }
}

// 5. Every local image and responsive candidate in exported HTML is present.
const mediaPaths = new Set();
let brandPageCount = 0;
for (const file of await readdir(outputDir, { recursive: true })) {
  if (!file.endsWith('.html')) continue;
  const html = await readFile(path.join(outputDir, file), 'utf8');
  const pagePath = `/${file.replace(/\.html$/, '').split(path.sep).join('/')}`;
  const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
  if (supportedLocales.has(pagePath.split('/')[1]) && canonical === `${siteUrl}${pagePath}` &&
      !hasNoindex(html) && !sitemapUrlSet.has(canonical)) {
    problems.push(`Indexable canonical page absent from sitemap: ${canonical}`);
  }
  const text = visibleText(html);
  if (html.includes('GateRemoteSource')) {
    problems.push(`Previous site brand remains in ${file}`);
  }
  if (html.includes('<header')) {
    brandPageCount += 1;
    const title = visibleText(html.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? '');
    const footer = html.match(/<footer\b[^>]*>([\s\S]*?)<\/footer>/)?.[1] ?? '';
    const header = html.match(/<header\b[^>]*>([\s\S]*?)<\/header>/)?.[1] ?? '';
    if (/\bGR\b/.test(`${visibleText(header)} ${visibleText(footer)}`)) problems.push(`Previous logo initials restored in ${file}`);
    if (!title.includes(site.siteName) || !visibleText(footer).includes(site.companyName) ||
        !header.includes(`src="${site.siteLogoSmall}"`) || !footer.includes(`src="${site.siteLogoSmall}"`)) {
      problems.push(`Website brand, company or logo missing in ${file}`);
    }
    if (!footer.includes(`href="mailto:${site.siteContact.email}"`) ||
        !footer.includes(`href="https://wa.me/${site.siteContact.whatsAppNumber}"`) ||
        !visibleText(footer).includes(site.siteContact.telephone) ||
        !visibleText(footer).includes(site.siteContact.address) ||
        !header.includes(`href="https://wa.me/${site.siteContact.whatsAppNumber}"`)) {
      problems.push(`Existing contact details or destinations changed in ${file}`);
    }
    const ogSiteName = [...html.matchAll(/<meta\b[^>]*>/gi)]
      .map((match) => attributes(match[0]))
      .find((tag) => tag.property === 'og:site_name')?.content;
    // Legacy entry pages do not all declare Open Graph; declared values must agree.
    if (ogSiteName && ogSiteName !== site.siteName) problems.push(`Open Graph brand mismatch in ${file}`);
  }
  if (/50 retail-style production units|Built for Every Access Environment|Strict QC and on-time delivery worldwide\.|10\+ years in RF remote controls|guaranteed local-control layer/i.test(text)) {
    problems.push(`Unsupported public claim restored in ${file}`);
  }
  const structuredTypes = new Set();
  for (const script of html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
    const data = JSON.parse(script[1]);
    structuredTypes.add(data['@type']);
    if (data['@type'] === 'Organization' && (data.name !== site.siteName || data.legalName !== site.companyName ||
        data['@id'] !== `${site.siteUrl}/#organization` || data.alternateName !== site.companyNameZh ||
        data.url !== site.siteUrl || data.logo !== `${site.siteUrl}${site.siteLogo}` ||
        data.contactPoint?.[0]?.email !== site.siteContact.email || data.contactPoint?.[0]?.telephone !== site.siteContact.telephone)) {
      problems.push(`Organization identity or contact mismatch in ${file}`);
    }
    if (data['@type'] === 'WebSite' && (data.name !== site.siteName || data.url !== site.siteUrl ||
        data['@id'] !== `${site.siteUrl}/#website` ||
        data.publisher?.['@id'] !== `${site.siteUrl}/#organization`)) {
      problems.push(`Website identity mismatch in ${file}`);
    }
    if (data['@type'] === 'BlogPosting' && (data.publisher?.name !== site.siteName ||
        data.publisher?.['@id'] !== `${site.siteUrl}/#organization` || data.publisher?.url !== site.siteUrl ||
        data.publisher?.legalName !== site.companyName || data.publisher?.logo?.url !== `${site.siteUrl}${site.siteLogo}`)) {
      problems.push(`Article publisher identity mismatch in ${file}`);
    }
    if (data['@type'] !== 'FAQPage') continue;
    for (const entry of data.mainEntity ?? []) {
      faqCount += 1;
      if (!text.includes(visibleText(entry.name)) || !text.includes(visibleText(entry.acceptedAnswer.text))) {
        problems.push(`FAQ structured data differs from visible copy in ${file}`);
      }
    }
  }
  if (pagePath === '/index' || supportedLocales.has(pagePath.slice(1))) {
    for (const type of ['Organization', 'WebSite']) {
      if (!structuredTypes.has(type)) problems.push(`Missing ${type} structured data in ${file}`);
    }
  }
  const generatedSourceCount = [...html.matchAll(/data-image-source-label="generated"/g)].length;
  if (generatedSourceCount > 0) {
    problems.push(`Unexpected generated-image badge in ${file}`);
  }
  if (/(?:AI(?:-generated)?\s+(?:illustration|product|application|technical|packaging)|(?:Ilustración|Illustration|Illustrazione|Ilustração)\s+IA|ИИ-иллюстрац|(?:generadas con|générées par|generate con|geradas por)\s+IA|созданы с помощью ИИ)/i.test(html)) {
    problems.push(`Unexpected AI image annotation in ${file}`);
  }
  for (const tag of html.matchAll(/<(?:img|source|video)\b[^>]*>/gi)) {
    for (const attribute of tag[0].matchAll(/\b(?:src|poster|srcset)="([^"]+)"/gi)) {
      for (const candidate of attribute[1].split(',')) {
        const assetPath = candidate.trim().split(/\s+/)[0];
        if (assetPath.startsWith('/images/') || assetPath.startsWith('/videos/')) {
          mediaPaths.add(assetPath);
        }
      }
    }
  }
}
for (const assetPath of mediaPaths) {
  try {
    const asset = await stat(path.join(outputDir, assetPath));
    if (!asset.isFile() || asset.size === 0) problems.push(`Empty media asset: ${assetPath}`);
  } catch {
    problems.push(`Missing media asset: ${assetPath}`);
  }
}

try {
  const logoMetadata = await sharp(path.join(outputDir, site.siteLogo)).metadata();
  const logoStats = await sharp(path.join(outputDir, site.siteLogo)).stats();
  if (!logoMetadata.hasAlpha || logoStats.isOpaque || logoMetadata.width < 112 || logoMetadata.height < 112) {
    problems.push('Organization logo must retain transparency and be at least 112×112');
  }
} catch {
  problems.push('Organization logo is missing or unreadable');
}
try {
  const logoSmall = await sharp(path.join(outputDir, site.siteLogoSmall)).metadata();
  const logoStats = await sharp(path.join(outputDir, site.siteLogoSmall)).stats();
  if (logoSmall.width !== 144 || logoSmall.height !== 144 || !logoSmall.hasAlpha || logoStats.isOpaque) {
    problems.push('Display logo must be a transparent 144×144 image');
  }
} catch {
  problems.push('Display logo is missing or unreadable');
}
try {
  const favicon = await readFile(path.join(outputDir, 'favicon.ico'));
  const count = favicon.length >= 6 ? favicon.readUInt16LE(4) : 0;
  const directorySize = 6 + count * 16;
  if (!count || favicon.length < directorySize || favicon.readUInt16LE(0) !== 0 || favicon.readUInt16LE(2) !== 1) {
    throw new Error('Invalid favicon ICO container');
  }
  const sizes = new Set();
  for (let i = 0; i < count; i += 1) {
    const entry = 6 + i * 16;
    const width = favicon[entry] || 256;
    const height = favicon[entry + 1] || 256;
    const length = favicon.readUInt32LE(entry + 8);
    const offset = favicon.readUInt32LE(entry + 12);
    if (!length || offset < directorySize || offset + length > favicon.length) throw new Error('Truncated favicon frame');
    const frame = await sharp(favicon.subarray(offset, offset + length)).metadata();
    if (width !== height || frame.width !== width || frame.height !== height) throw new Error('Invalid favicon frame dimensions');
    sizes.add(width);
  }
  if ([16, 32, 48].some((size) => !sizes.has(size))) problems.push('Favicon must contain readable 16, 32 and 48 pixel frames');
} catch {
  problems.push('Favicon is missing, truncated or unreadable');
}

// Generated illustrations must remain traceable and ship at every declared size.
const generatedManifestPath = path.join(outputDir, 'images/generated/prompts.json');
const generatedManifestText = await readTextIfExists(generatedManifestPath);
if (generatedManifestText) {
  const manifest = JSON.parse(generatedManifestText);
  const knownGeneratedPaths = new Set();
  const ids = new Set();
  for (const asset of manifest.assets) {
    if (ids.has(asset.id)) problems.push(`Duplicate generated image ID: ${asset.id}`);
    ids.add(asset.id);
    if (!asset.prompt || !/^[a-f0-9]{64}$/.test(asset.sourceSha256)) {
      problems.push(`Missing generated image provenance: ${asset.id}`);
    }
    for (const width of [1280, 640, 320]) {
      const assetPath = `/images/generated/${asset.id}${width === 1280 ? '' : `-${width}`}.webp`;
      knownGeneratedPaths.add(assetPath);
      try {
        const metadata = await sharp(path.join(outputDir, assetPath)).metadata();
        if (metadata.format !== 'webp' || metadata.width !== width || metadata.height !== Math.round(width * 2 / 3)) {
          problems.push(`Incorrect generated image dimensions or format: ${assetPath}`);
        }
      } catch {
        problems.push(`Missing or unreadable generated image: ${assetPath}`);
      }
    }
  }
  for (const assetPath of mediaPaths) {
    if (assetPath.startsWith('/images/generated/') && !knownGeneratedPaths.has(assetPath)) {
      problems.push(`Generated image absent from source manifest: ${assetPath}`);
    }
  }
} else if ([...mediaPaths].some((assetPath) => assetPath.startsWith('/images/generated/'))) {
  problems.push('Generated illustrations have no source manifest');
}

if (problems.length > 0) {
  console.error(`verify-export: ${problems.length} problem(s) found:`);
  for (const problem of problems) console.error(`  - ${problem}`);
  process.exit(1);
}

console.log(`verify-export: ${sitemapUrls.length} sitemap URLs, ${redirects.length} legacy redirects, ${mediaPaths.size} media assets, ${dictionaries.size} dictionaries and localized OEM pages, ${faqCount} FAQ entries, 12 distinct applications, ${referenceBrands.length} aftermarket brand references and ${brandPageCount} pages with consistent company branding — all checks passed.`);
