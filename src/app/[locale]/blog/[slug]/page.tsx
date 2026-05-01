import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CalendarDays, Clock } from 'lucide-react';
import { blogCategories, blogPosts, type BlogPostContentBlock } from '@/data/blog';
import { notFound } from 'next/navigation';
import LeadModalTrigger from '@/components/LeadModalTrigger';
import AuthorBio from '@/components/AuthorBio';
import BlogCommentBox from '@/components/BlogCommentBox';
import { type Locale, locales } from '@/i18n';
import { getDictSync } from '@/i18n/dictionaries';
import { siteName } from '@/data/site';

const emptyBlogSlug = '__no-articles__';

export const dynamicParams = false;

export async function generateStaticParams() {
  if (blogPosts.length === 0) {
    return [{ slug: emptyBlogSlug }];
  }

  return blogPosts.map((post) => ({ slug: post.slug }));
}

function formatDate(date?: string) {
  if (!date) return null;
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date;

  return new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  }).format(parsed);
}

function slugifyHeading(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function renderBlock(block: BlogPostContentBlock, index: number) {
  switch (block.type) {
    case 'heading':
      return (
        <h2
          key={`${block.type}-${index}`}
          id={slugifyHeading(block.text)}
          className="mt-9 break-words border-l-2 border-[#FF8A1F] pl-4 text-xl font-bold leading-snug text-[#0F172A]"
          style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
        >
          {block.text}
        </h2>
      );
    case 'paragraph':
      return (
        <p key={`${block.type}-${index}`} className="mt-5 text-[15px] leading-8 text-[#334155]">
          {block.text}
        </p>
      );
    case 'list':
      return (
        <ul key={`${block.type}-${index}`} className="mt-5 space-y-3 text-[15px] leading-7 text-[#334155]">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF8A1F]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case 'callout':
      return (
        <aside
          key={`${block.type}-${index}`}
          className="mt-8 rounded-lg border border-[#F7C88B] bg-[#FFF7ED] p-5 text-[#334155]"
        >
          {block.title && (
            <h3
              className="mb-2 text-sm font-bold text-[#C45A00]"
              style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
            >
              {block.title}
            </h3>
          )}
          <p className="text-sm leading-7">{block.text}</p>
        </aside>
      );
    case 'quote':
      return (
        <blockquote
          key={`${block.type}-${index}`}
          className="mt-8 border-y border-[#E2E8F0] py-5 text-xl font-bold leading-snug text-[#062748]"
          style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
        >
          {block.text}
        </blockquote>
      );
    case 'image':
      return (
        <figure key={`${block.type}-${index}`} className="mt-9">
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] shadow-sm">
            <Image
              src={block.src}
              alt={block.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 760px"
              className="object-cover"
            />
          </div>
          {block.caption && (
            <figcaption className="mt-3 text-[13px] leading-6 text-[#64748B]">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const { slug, locale: rawLocale } = await params;
  const locale = locales.includes(rawLocale as Locale) ? (rawLocale as Locale) : 'en';
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return { title: 'Article Not Found' };

  const title = `${post.title} | GateRemoteSource`;
  const openGraph: Metadata['openGraph'] = {
    type: 'article',
    siteName,
    url: `/${locale}/blog/${post.slug}`,
    title,
    description: post.excerpt,
  };

  if (post.image) {
    openGraph.images = [post.image];
  }

  return {
    title,
    description: post.excerpt,
    alternates: {
      canonical: `/${locale}/blog/${post.slug}`,
    },
    openGraph,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale: rawLocale } = await params;
  const locale = locales.includes(rawLocale as Locale) ? (rawLocale as Locale) : 'en';
  const dict = getDictSync(locale);
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  const categoryLabels: Record<string, string> = {
    all: dict.blog.categories.all,
    'rf-engineering': 'RF Engineering',
    compatibility: dict.blog.categories.compatibility,
    'rolling-code': dict.blog.categories.rollingCode,
    'oem-odm': dict.blog.categories.oemOdm,
    'buyer-checklist': dict.blog.categories.buyerChecklist,
    troubleshooting: dict.blog.categories.troubleshooting,
  };
  const categoryLabel =
    categoryLabels[post.category] ||
    blogCategories.find((category) => category.key === post.category)?.label ||
    post.category;
  const dateLabel = formatDate(post.publishedAt);
  const articleSections = post.content
    .filter((block): block is Extract<BlogPostContentBlock, { type: 'heading' }> => block.type === 'heading')
    .map((block) => ({ title: block.text, id: slugifyHeading(block.text) }));

  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-[#E2E8F0] bg-white">
        <div className="mx-auto max-w-[1280px] px-4 py-3 sm:px-6 lg:px-8">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#64748B] transition-colors hover:text-[#FF8A1F]"
          >
            <ArrowLeft className="h-4 w-4" /> {dict.blogPost.backLink}
          </Link>
        </div>
      </div>

      <section className="relative overflow-hidden bg-[#062748]">
        <div className="absolute inset-0 tech-grid" />
        <div className="relative mx-auto max-w-[1280px] px-4 py-9 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
          <div className="max-w-3xl">
            <p
              className="mb-3 inline-flex rounded-full bg-[#FF8A1F]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#FF8A1F]"
              style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}
            >
              {categoryLabel}
            </p>
            <h1
              className="break-words text-3xl font-extrabold leading-tight text-[#F7FBFF] [text-wrap:balance] sm:text-4xl lg:text-[44px]"
              style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
            >
              {post.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#9FB4CC] sm:text-sm">
              {post.author && <span>{post.author}</span>}
              {dateLabel && (
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-4 w-4" />
                  {dateLabel}
                </span>
              )}
              {post.readTime && (
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto grid w-full max-w-[1120px] gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:px-8 lg:py-12">
        <article className="min-w-0">
          <p className="break-words border-b border-[#FF8A1F] pb-4 text-base leading-8 text-[#1E293B] sm:text-lg">
            {post.excerpt}
          </p>
          <div>{post.content.map(renderBlock)}</div>
          <BlogCommentBox articleTitle={post.title} />
          <AuthorBio />

          <div className="mt-12 rounded-lg bg-[#062748] p-6">
            <h2
              className="text-lg font-bold text-[#F7FBFF]"
              style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
            >
              {dict.blogPost.needHelp}
            </h2>
            <p className="mt-2 text-sm leading-7 text-[#C7D7E8]">
              {dict.blogPost.needHelpSubtitle}
            </p>
            <LeadModalTrigger
              prefillType="support"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#FF8A1F] px-5 py-2.5 text-sm font-bold text-[#062748] transition-colors hover:bg-[#F97316]"
            >
              {dict.blogPost.contactUs} <ArrowRight className="h-4 w-4" />
            </LeadModalTrigger>
          </div>
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-5">
            {articleSections.length > 0 && (
              <div className="rounded-lg border border-[#E2E8F0] bg-white p-5 shadow-sm">
                <h2
                  className="text-sm font-bold text-[#0F172A]"
                  style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                >
                  Article sections
                </h2>
                <nav className="mt-3 grid gap-2">
                  {articleSections.slice(0, 8).map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="text-xs leading-5 text-[#64748B] transition-colors hover:text-[#FF8A1F]"
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            <div className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-5 shadow-sm">
              <AuthorBio variant="compact" />
            </div>

            <div className="rounded-lg border border-[#E2E8F0] bg-white p-5 shadow-sm">
              <h2
                className="text-sm font-bold text-[#0F172A]"
                style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
              >
                {dict.blog.helpTitle}
              </h2>
              <p className="mt-2 text-xs leading-6 text-[#64748B]">
                {dict.blog.helpSubtitle}
              </p>
              <LeadModalTrigger
                prefillType="support"
                className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-[#FF8A1F] px-4 py-2.5 text-xs font-bold text-[#062748] transition-colors hover:bg-[#F97316]"
              >
                {dict.blog.helpCta}
              </LeadModalTrigger>
              <a
                href="#comments"
                className="mt-2 inline-flex w-full items-center justify-center rounded-lg border border-[#E2E8F0] px-4 py-2.5 text-xs font-bold text-[#64748B] transition-colors hover:border-[#FF8A1F]/50 hover:text-[#FF8A1F]"
              >
                Comments
              </a>
            </div>

            <Link
              href={`/${locale}/blog`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF8A1F] transition-colors hover:text-[#F97316]"
            >
              {dict.blogPost.backLink} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </aside>
      </main>
    </div>
  );
}
