'use client';

import Link from 'next/link';
import { ArrowRight, CalendarDays, Clock, FileText } from 'lucide-react';
import { blogCategories, blogPosts } from '@/data/blog';
import LeadModalTrigger from '@/components/LeadModalTrigger';
import { useDict, useLocale } from '@/i18n';

function formatDate(date?: string) {
  if (!date) return null;
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date;

  return new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  }).format(parsed);
}

export default function BlogIndexClient() {
  const dict = useDict();
  const locale = useLocale();

  const categoryLabels: Record<string, string> = {
    all: dict.blog.categories.all,
    compatibility: dict.blog.categories.compatibility,
    'rolling-code': dict.blog.categories.rollingCode,
    'oem-odm': dict.blog.categories.oemOdm,
    'buyer-checklist': dict.blog.categories.buyerChecklist,
    troubleshooting: dict.blog.categories.troubleshooting,
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-[1280px] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p
              className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6B7F96]"
              style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}
            >
              Editorial
            </p>
            <h1
              className="text-4xl font-extrabold leading-[0.98] text-[#0F172A] sm:text-5xl lg:text-6xl"
              style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
            >
              {dict.blog.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#475569]">
              {dict.blog.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          {blogPosts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {blogPosts.map((post) => {
                const dateLabel = formatDate(post.publishedAt);
                const categoryLabel = categoryLabels[post.category] || post.category;

                return (
                  <Link
                    key={post.slug}
                    href={`/${locale}/blog/${post.slug}`}
                    className="group flex min-h-[300px] flex-col rounded-lg border border-[#E2E8F0] bg-white p-7 shadow-sm shadow-[#0F172A]/5 transition-all hover:-translate-y-0.5 hover:border-[#FF8A1F]/50 hover:shadow-md"
                  >
                    <span
                      className="mb-6 inline-flex max-w-full self-start rounded-full border border-[#FF8A1F]/25 bg-[#FFF7ED] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C45A00]"
                      style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}
                    >
                      {categoryLabel}
                    </span>
                    <h2
                      className="text-2xl font-bold leading-tight text-[#0F172A]"
                      style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                    >
                      {post.title}
                    </h2>
                    <p className="mt-5 flex-1 text-sm leading-7 text-[#475569]">
                      {post.excerpt}
                    </p>
                    <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] text-[#64748B]">
                      {post.author && <span>{post.author}</span>}
                      {dateLabel && (
                        <span className="inline-flex items-center gap-1.5">
                          <CalendarDays className="h-3.5 w-3.5" />
                          {dateLabel}
                        </span>
                      )}
                      {post.readTime && (
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5" />
                          {post.readTime}
                        </span>
                      )}
                    </div>
                    <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#FF8A1F] transition-all group-hover:gap-3">
                      {dict.blog.readMore} <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="mx-auto max-w-2xl rounded-lg border border-dashed border-[#CBD5E1] bg-[#F8FAFC] px-6 py-12 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-white text-[#FF8A1F] shadow-sm">
                <FileText className="h-6 w-6" />
              </div>
              <h2
                className="mt-6 text-2xl font-bold text-[#0F172A]"
                style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
              >
                Articles are being prepared
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[#64748B]">
                The previous placeholder articles have been removed. New technical articles will appear here after your own content is added.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 border-t border-[#E2E8F0] pt-10 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3
                className="text-xl font-bold text-[#0F172A]"
                style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
              >
                {dict.blog.helpTitle}
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-7 text-[#64748B]">
                {dict.blog.helpSubtitle}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {blogCategories
                .filter((category) => category.key !== 'all')
                .slice(0, 4)
                .map((category) => (
                  <span
                    key={category.key}
                    className="rounded-full border border-[#E2E8F0] bg-white px-3 py-1.5 text-[11px] font-semibold text-[#64748B]"
                    style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}
                  >
                    {categoryLabels[category.key] || category.label}
                  </span>
                ))}
            </div>
            <LeadModalTrigger
              prefillType="support"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#FF8A1F] px-6 py-3 text-sm font-bold text-[#062748] transition-colors hover:bg-[#F97316]"
            >
              {dict.blog.helpCta} <ArrowRight className="h-4 w-4" />
            </LeadModalTrigger>
          </div>
        </div>
      </section>
    </div>
  );
}
