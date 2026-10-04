import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
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
  const generatedImageCount = [...html.matchAll(/<img\b[^>]*\bsrc="\/images\/generated\/[^\"]+"/g)].length;
  const generatedSourceCount = [...html.matchAll(/data-image-source-label="generated"/g)].length;
  if (generatedImageCount !== generatedSourceCount) {
    problems.push(`Generated image source-label count mismatch in ${file}: ${generatedImageCount} images, ${generatedSourceCount} labels`);
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

console.log(`verify-export: ${sitemapUrls.length} sitemap URLs, ${redirects.length} legacy redirects, ${mediaPaths.size} media assets — all checks passed.`);
