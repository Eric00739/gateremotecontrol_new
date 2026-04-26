import type { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blog';
import { compatibilityBrands } from '@/data/compatibility';
import { siteUrl } from '@/data/site';
import { locales } from '@/i18n';

const absoluteUrl = (path: string) => new URL(path, siteUrl).toString();

export const dynamic = 'force-static';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    entries.push({
      url: absoluteUrl(`/${locale}`),
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    });

    entries.push({
      url: absoluteUrl(`/${locale}/compatibility`),
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    });

    for (const brand of compatibilityBrands) {
      entries.push({
        url: absoluteUrl(`/${locale}/compatibility/${brand.slug}`),
        lastModified,
        changeFrequency: 'weekly',
        priority: 0.85,
      });
    }

    entries.push({
      url: absoluteUrl(`/${locale}/blog`),
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    });

    for (const post of blogPosts) {
      entries.push({
        url: absoluteUrl(`/${locale}/blog/${post.slug}`),
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }
  }

  return entries;
}
