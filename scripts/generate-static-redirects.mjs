import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const siteUrl = 'https://www.gateremotesource.com';
const outputDir = path.join(process.cwd(), 'out');

const redirects = [
  ['/it/', '/it'],
  ['/pt/', '/pt'],
  ['/it/blog/', '/it/blog'],
  ['/fr/blog/', '/fr/blog'],
  ['/es/oem/', '/es/oem-odm'],
  ['/fr/oem/', '/fr/oem-odm'],
  ['/de/oem/', '/en/oem-odm'],
  ['/oem.html', '/en/oem-odm'],
  ['/es/catalog/', '/es/request-catalog'],
  ['/de/catalog/', '/en/request-catalog'],
  ['/catalog.html', '/en/request-catalog'],
  ['/de/about/', '/en#contact'],
  ['/it/about/', '/it#contact'],
  ['/pt/about/', '/pt#contact'],
  ['/about.html', '/en#contact'],
  ['/de/contact/', '/en#contact'],
  ['/contact.html', '/en#contact'],
  ['/blog', '/en/blog'],
  ['/blog.html', '/en/blog'],
  ['/compatibility-132', '/en/compatibility'],
  ['/compatibility-83', '/en/compatibility'],
  ['/de/blog/nice-came-hormann-compatibility-guide/', '/en/compatibility'],
  ['/blog-post-avoid-public-mold-trap-pcb-quality.html', '/en/blog/same-shell-hidden-downgrade-remote-manufacturing-quality'],
  ['/blog/how-to-identify-a-compatible-gate-remote', '/en/compatibility'],
  ['/en/blog/how-to-identify-a-compatible-gate-remote', '/en/compatibility'],
  ['/es/blog/how-to-identify-a-compatible-gate-remote', '/es/compatibility'],
  ['/fr/blog/how-to-identify-a-compatible-gate-remote', '/fr/compatibility'],
  ['/it/blog/how-to-identify-a-compatible-gate-remote', '/it/compatibility'],
  ['/pt/blog/how-to-identify-a-compatible-gate-remote', '/pt/compatibility'],
  ['/ru/blog/how-to-identify-a-compatible-gate-remote', '/ru/compatibility'],
  ['/blog/when-oem-remote-control-development-is-needed', '/en/oem-odm'],
  ['/pt/blog/when-oem-remote-control-development-is-needed', '/pt/oem-odm'],
  ['/ru/blog/when-oem-remote-control-development-is-needed', '/ru/oem-odm'],
  ['/blog/rolling-code-vs-fixed-code-remotes', '/en/blog/why-universal-remote-cannot-copy'],
  ['/en/blog/rolling-code-vs-fixed-code-remotes', '/en/blog/why-universal-remote-cannot-copy'],
  ['/es/blog/rolling-code-vs-fixed-code-remotes', '/en/blog/why-universal-remote-cannot-copy'],
  ['/fr/blog/rolling-code-vs-fixed-code-remotes', '/en/blog/why-universal-remote-cannot-copy'],
  ['/it/blog/rolling-code-vs-fixed-code-remotes', '/en/blog/why-universal-remote-cannot-copy'],
  ['/pt/blog/rolling-code-vs-fixed-code-remotes', '/en/blog/why-universal-remote-cannot-copy'],
  ['/ru/blog/rolling-code-vs-fixed-code-remotes', '/en/blog/why-universal-remote-cannot-copy'],
  ['/fr/blog/what-buyers-should-send-before-rf-matching', '/fr/request-catalog'],
  ['/it/blog/what-buyers-should-send-before-rf-matching', '/it/request-catalog'],
  ['/pt/blog/what-buyers-should-send-before-rf-matching', '/pt/request-catalog'],
];

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

async function writeRedirect(sourcePath, destinationPath) {
  const destinationUrl = absoluteDestination(destinationPath);
  const html = redirectHtml(sourcePath, destinationUrl);

  for (const outputPath of outputPathsForSource(sourcePath)) {
    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, html, 'utf8');
  }
}

await Promise.all(redirects.map(([sourcePath, destinationPath]) => writeRedirect(sourcePath, destinationPath)));

console.log(`Generated ${redirects.length} static redirect entries for legacy Google Search Console URLs.`);
