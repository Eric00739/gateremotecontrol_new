import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { escapeHtml, outputDir, redirects, supportedLocales, toAbsoluteUrl } from './legacy-redirects.mjs';

// Pages requests /en from en.html and /en/ from en/index.html. Those files
// already coexist for the legacy stubs (/it/ and /fr/blog/ stay 200 without
// pulling /it or /fr/blog onto a trailing slash). Emit the same stub for
// every shipped page. Do not flip trailingSlash: that would change the
// canonical URLs themselves.
async function writeTrailingSlashRedirects() {
  const exportedHtmlFiles = await htmlFiles(outputDir);
  const exported = new Set(exportedHtmlFiles);
  let count = 0;

  for (const filePath of exportedHtmlFiles) {
    const relativePath = path.relative(outputDir, filePath);
    if (relativePath === 'index.html' || relativePath === '404.html') continue;

    const pagePath = `/${relativePath.slice(0, -'.html'.length).split(path.sep).join('/')}`;
    const stubPath = path.join(outputDir, relativePath.slice(0, -'.html'.length), 'index.html');
    if (exported.has(stubPath)) {
      throw new Error(`Refusing to overwrite exported page with a trailing-slash redirect: ${path.relative(outputDir, stubPath)}`);
    }

    await mkdir(path.dirname(stubPath), { recursive: true });
    await writeFile(stubPath, redirectHtml(`${pagePath}/`, toAbsoluteUrl(pagePath)), 'utf8');
    count += 1;
  }

  return count;
}

function redirectHtml(sourcePath, destinationUrl) {
  const escapedDestination = escapeHtml(destinationUrl);
  const escapedSource = escapeHtml(sourcePath);

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="refresh" content="0; url=${escapedDestination}">
    <link rel="canonical" href="${escapedDestination}">
    <title>Redirecting</title>
    <script>window.location.replace(${JSON.stringify(destinationUrl)});</script>
  </head>
  <body>
    <p>The page ${escapedSource} has moved to <a href="${escapedDestination}">${escapedDestination}</a>.</p>
  </body>
</html>
`;
}

function outputPathsForSource(sourcePath) {
  const normalized = sourcePath.replace(/^\/+/, '');

  if (normalized.endsWith('.html')) {
    return [path.join(outputDir, normalized)];
  }

  if (sourcePath.endsWith('/')) {
    return [path.join(outputDir, normalized, 'index.html')];
  }

  return [
    path.join(outputDir, `${normalized}.html`),
    path.join(outputDir, normalized, 'index.html'),
  ];
}

async function writeRedirects() {
  // Several redirect sources can map to the same output file (e.g. /blog and
  // /blog.html both land on out/blog.html). Resolve to one deterministic target
  // per path and write sequentially; concurrent writes to the same file raced
  // and could interleave into a corrupted stub.
  const outputTargets = new Map();

  for (const [sourcePath, destinationPath] of redirects) {
    const destinationUrl = toAbsoluteUrl(destinationPath);

    for (const outputPath of outputPathsForSource(sourcePath)) {
      outputTargets.set(outputPath, { sourcePath, destinationUrl });
    }
  }

  for (const [outputPath, { sourcePath, destinationUrl }] of outputTargets) {
    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, redirectHtml(sourcePath, destinationUrl), 'utf8');
  }
}

const trailingSlashCount = await writeTrailingSlashRedirects();
// Legacy sources win when they share an output path, including cases such as
// /blog/ that must land on /en/blog rather than the unprefixed page.
await writeRedirects();

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nestedFiles = await Promise.all(entries.map((entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory() ? htmlFiles(entryPath) : [entryPath];
  }));

  return nestedFiles.flat().filter((filePath) => filePath.endsWith('.html'));
}

async function setStaticDocumentLanguages() {
  const files = await htmlFiles(outputDir);

  await Promise.all(files.map(async (filePath) => {
    const relativePath = path.relative(outputDir, filePath);
    const firstSegment = relativePath.split(path.sep)[0].replace(/\.html$/, '');
    const locale = supportedLocales.has(firstSegment) ? firstSegment : 'en';
    const html = await readFile(filePath, 'utf8');
    const localizedHtml = html.replace(/<html lang="[^"]*"/, `<html lang="${locale}"`);

    if (localizedHtml !== html) {
      await writeFile(filePath, localizedHtml, 'utf8');
    }
  }));

  return files.length;
}

const localizedHtmlCount = await setStaticDocumentLanguages();

console.log(`Generated ${trailingSlashCount} trailing-slash redirects to no-slash pages.`);
console.log(`Generated ${redirects.length} static redirect entries for legacy Google Search Console URLs.`);
console.log(`Set document language on ${localizedHtmlCount} exported HTML files.`);
