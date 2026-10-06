import { copyFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { outputDir, siteUrl, supportedLocales } from './legacy-redirects.mjs';

// Next.js metadata routes nested under [locale] are not exported per locale.
// Keep the existing public paths available on static hosting using the root XML.
const sitemapPath = path.join(outputDir, 'sitemap.xml');
const robots = `User-Agent: *\nAllow: /\n\n${[...supportedLocales]
  .map((locale) => `Sitemap: ${siteUrl}/${locale}/sitemap.xml`)
  .join('\n')}\n`;

for (const locale of supportedLocales) {
  const directory = path.join(outputDir, locale);
  await mkdir(directory, { recursive: true });
  await copyFile(sitemapPath, path.join(directory, 'sitemap.xml'));
  await writeFile(path.join(directory, 'robots.txt'), robots, 'utf8');
}

console.log(`Generated sitemap.xml and robots.txt aliases for ${supportedLocales.size} locales.`);
