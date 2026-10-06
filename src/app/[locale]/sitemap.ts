import { locales } from '@/i18n';
import { buildSitemap } from '@/lib/sitemap';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function sitemap() {
  return buildSitemap();
}
