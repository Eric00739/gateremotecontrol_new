import type { MetadataRoute } from 'next';
import { siteUrl } from '@/data/site';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return ['en'].map((locale) => ({ locale }));
}

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: new URL('/en/sitemap.xml', siteUrl).toString(),
  };
}
