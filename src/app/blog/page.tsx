import type { Metadata } from 'next';
import BlogIndexClient from './BlogIndexClient';
import { siteName } from '@/data/site';

const pageTitle = 'Blog & Compatibility Guides | GateRemoteSource';
const pageDescription = 'Practical guides for gate remote compatibility, rolling code matching, buyer RF checklists, and OEM remote control development.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    type: 'website',
    siteName,
    url: '/blog',
    title: pageTitle,
    description: pageDescription,
  },
};

export default function BlogPage() {
  return <BlogIndexClient />;
}
