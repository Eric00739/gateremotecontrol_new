import type { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blog';
import { compatibilityBrands } from '@/data/compatibility';
import { siteUrl } from '@/data/site';

const absoluteUrl = (path: string) => new URL(path, siteUrl).toString();

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: absoluteUrl('/'),
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: absoluteUrl('/compatibility'),
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...compatibilityBrands.map((brand) => ({
      url: absoluteUrl(`/compatibility/${brand.slug}`),
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    })),
    {
      url: absoluteUrl('/blog'),
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...blogPosts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
