// Single source of truth for legacy Google Search Console redirect URLs.
// Consumed by generate-static-redirects.mjs (writes the stubs) and
// verify-export.mjs (asserts stubs and destinations exist in the export).

export const siteUrl = 'https://www.gateremotesource.com';
export const outputDir = process.cwd() + '/out';

export const supportedLocales = new Set(['en', 'it', 'pt', 'es', 'ru', 'fr']);

export const redirects = [
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
