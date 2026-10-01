import { readFile } from 'node:fs/promises';
import path from 'node:path';
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

if (problems.length > 0) {
  console.error(`verify-export: ${problems.length} problem(s) found:`);
  for (const problem of problems) console.error(`  - ${problem}`);
  process.exit(1);
}

console.log(`verify-export: ${sitemapUrls.length} sitemap URLs, ${redirects.length} legacy redirects — all checks passed.`);
