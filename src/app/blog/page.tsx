import { siteName } from '@/data/site';
import type { Metadata } from 'next';
import BlogIndexClient from '@/components/BlogIndexClient';
import LegacyEnglishShell from '@/components/LegacyEnglishShell';

export const metadata: Metadata = {
  title: `Blog & Compatibility Guides | ${siteName}`,
  robots: { index: false, follow: true },
  alternates: { canonical: '/en/blog' },
};

export default function LegacyBlogPage() {
  return (
    <LegacyEnglishShell>
      <BlogIndexClient />
    </LegacyEnglishShell>
  );
}
