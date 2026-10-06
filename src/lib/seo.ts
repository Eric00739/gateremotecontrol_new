import type { BlogPostContentBlock } from '@/data/blog';
import type { BlogPost } from '@/data/blog-content';
import { companyName, companyNameZh, siteContact, siteLogo, siteName, siteUrl } from '@/data/site';
import { defaultLocale, locales, type Locale } from '@/i18n';

// Record meaningful page changes explicitly; rebuilding does not update dates.
const pageUpdatedAt: Partial<Record<string, string>> = {
  '': '2026-10-06',
  '/compatibility': '2026-10-06',
  '/compatibility/faac': '2026-10-06',
  '/compatibility/nice': '2026-10-06',
  '/compatibility/bft': '2026-10-06',
  '/compatibility/doorhan': '2026-10-06',
  '/compatibility/came': '2026-10-06',
  '/compatibility/liftmaster': '2026-10-06',
  '/oem-odm': '2026-10-06',
  '/factory-quality': '2026-10-06',
  '/request-catalog': '2026-10-06',
  '/blog': '2026-10-06',
};

export function pageLastModified(path: string): string | undefined {
  return pageUpdatedAt[path];
}

export const defaultOgImage = '/images/video/circuit-boards.webp';
export const organizationLogo = siteLogo;

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export function localizedAlternates(path = '') {
  const normalizedPath = path === '/' ? '' : path;

  return {
    ...Object.fromEntries(
      locales.map((locale) => [locale, absoluteUrl(`/${locale}${normalizedPath}`)]),
    ),
    'x-default': absoluteUrl(`/${defaultLocale}${normalizedPath}`),
  };
}

export function jsonLd(data: unknown) {
  return {
    __html: JSON.stringify(data).replace(/</g, '\\u003c'),
  };
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: siteName,
    legalName: companyName,
    alternateName: companyNameZh,
    url: siteUrl,
    logo: absoluteUrl(organizationLogo),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: siteContact.email,
        telephone: siteContact.telephone,
        areaServed: 'Worldwide',
        availableLanguage: ['English', 'Italian', 'Portuguese', 'Spanish', 'Russian', 'French'],
      },
    ],
  };
}

export function websiteJsonLd(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name: siteName,
    url: siteUrl,
    inLanguage: locale,
    publisher: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: siteName,
      url: siteUrl,
    },
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

function contentText(block: BlogPostContentBlock) {
  switch (block.type) {
    case 'heading':
    case 'paragraph':
    case 'quote':
      return block.text;
    case 'callout':
      return `${block.title || ''} ${block.text}`;
    case 'list':
      return block.items.join(' ');
    case 'image':
      return `${block.alt} ${block.caption || ''}`;
  }
}

export function articleWordCount(post: BlogPost) {
  const text = [post.title, post.excerpt, ...post.content.map(contentText)].join(' ');

  return text.split(/\s+/).filter(Boolean).length;
}

export function blogPostingJsonLd({
  post,
  locale,
  categoryLabel,
}: {
  post: BlogPost;
  locale: Locale;
  categoryLabel: string;
}) {
  const url = absoluteUrl(`/${locale}/blog/${post.slug}`);
  const image = post.image ? absoluteUrl(post.image) : absoluteUrl(defaultOgImage);

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.seoTitle || post.title,
    alternativeHeadline: post.title,
    description: post.excerpt,
    image: [image],
    author: {
      '@type': 'Person',
      name: post.author || 'Eric Huang',
      url: absoluteUrl('/en#contact'),
      image: absoluteUrl('/images/eric-huang-avatar.webp'),
      jobTitle: 'RF Remote Control Specialist',
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: siteName,
      legalName: companyName,
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl(organizationLogo),
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    articleSection: categoryLabel,
    wordCount: articleWordCount(post),
    inLanguage: locale,
  };
}
