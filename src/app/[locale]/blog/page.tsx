import type { Metadata } from 'next';
import BlogIndexClient from '@/components/BlogIndexClient';
import LeadModalProvider from '@/components/LeadModalProvider';
import { type Locale, locales } from '@/i18n';
import { getDictSync } from '@/i18n/dictionaries';
import { siteName } from '@/data/site';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = locales.includes(rawLocale as Locale) ? rawLocale as Locale : 'en';
  const dict = getDictSync(locale);
  const title = `${dict.blog.title} | GateRemoteSource`;
  return {
    title,
    description: dict.blog.subtitle,
    alternates: {
      canonical: `/${locale}/blog`,
    },
    openGraph: {
      type: 'website',
      siteName,
      url: `/${locale}/blog`,
      title,
      description: dict.blog.subtitle,
    },
  };
}

export default function BlogPage() {
  return (
    <LeadModalProvider>
      <BlogIndexClient />
    </LeadModalProvider>
  );
}
