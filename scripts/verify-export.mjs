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
for (const locale of supportedLocales) {
  const source = await readFile(`src/i18n/${locale}.ts`, 'utf8');
  const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } });
  const dictionaryModule = { exports: {} };
  vm.runInNewContext(compiled.outputText, { module: dictionaryModule, exports: dictionaryModule.exports }, { timeout: 1000 });
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

// 2. Every sitemap URL exists as HTML and self-canonicalizes.
const sitemap = (await readTextIfExists(path.join(outputDir, 'sitemap.xml'))) ?? '';
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);

if (sitemapUrls.length === 0) {
  problems.push('out/sitemap.xml contains no <loc> entries');
}

for (const url of sitemapUrls) {
  if (!url.startsWith(siteUrl)) {
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
for (const file of await readdir(outputDir, { recursive: true })) {
  if (!file.endsWith('.html')) continue;
  const html = await readFile(path.join(outputDir, file), 'utf8');
  const text = visibleText(html);
  if (/50 retail-style production units|Built for Every Access Environment|Strict QC and on-time delivery worldwide\.|10\+ years in RF remote controls|guaranteed local-control layer/i.test(text)) {
    problems.push(`Unsupported public claim restored in ${file}`);
  }
  for (const script of html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
    const data = JSON.parse(script[1]);
    if (data['@type'] !== 'FAQPage') continue;
    for (const entry of data.mainEntity ?? []) {
      faqCount += 1;
      if (!text.includes(visibleText(entry.name)) || !text.includes(visibleText(entry.acceptedAnswer.text))) {
        problems.push(`FAQ structured data differs from visible copy in ${file}`);
      }
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

console.log(`verify-export: ${sitemapUrls.length} sitemap URLs, ${redirects.length} legacy redirects, ${mediaPaths.size} media assets, ${dictionaries.size} dictionaries and localized OEM pages, ${faqCount} FAQ entries, 12 distinct applications and ${referenceBrands.length} aftermarket brand references — all checks passed.`);
