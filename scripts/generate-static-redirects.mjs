import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { outputDir, redirects, siteUrl, supportedLocales } from './legacy-redirects.mjs';

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function absoluteDestination(destinationPath) {
  return new URL(destinationPath, siteUrl).toString();
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
    <title>Redirecting | GateRemoteSource</title>
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
    const destinationUrl = absoluteDestination(destinationPath);

    for (const outputPath of outputPathsForSource(sourcePath)) {
      outputTargets.set(outputPath, { sourcePath, destinationUrl });
    }
  }

  for (const [outputPath, { sourcePath, destinationUrl }] of outputTargets) {
    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, redirectHtml(sourcePath, destinationUrl), 'utf8');
  }
}

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

console.log(`Generated ${redirects.length} static redirect entries for legacy Google Search Console URLs.`);
console.log(`Set document language on ${localizedHtmlCount} exported HTML files.`);
