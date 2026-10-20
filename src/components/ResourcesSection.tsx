'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import ImageSourceLabel from './ImageSourceLabel';
import { blogPosts } from '@/data/blog';
import { defaultLocale, useDict, useLocale } from '@/i18n';

const buyingGuideSlugs = [
  'same-shell-hidden-downgrade-remote-manufacturing-quality',
  'third-party-rf-remote-brand-receiver-pairing',
  'rf-remote-wholesale-price-cost-drivers',
  'why-universal-remote-cannot-copy',
];

export default function ResourcesSection() {
  const dict = useDict();
  const locale = useLocale();
  const displayPosts = blogPosts.filter((post) => buyingGuideSlugs.includes(post.slug));

  if (displayPosts.length === 0) return null;

  return (
    <section id="resources" className="bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[2px] bg-[#FF8A1F]" />
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#9A3F00]" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>
            {dict.resources.sectionLabel}
          </span>
        </div>

        <div className="mb-8 flex items-end justify-between lg:mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0F172A]" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
            {dict.resources.title}
          </h2>
          <Link href={`/${locale}/blog`} className="hidden min-h-11 items-center gap-1.5 text-[12px] font-bold text-[#9A3F00] transition-colors hover:text-[#C2410C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C2410C] sm:inline-flex" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>
            {dict.resources.viewAll} <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Phones: a swipeable row of guides; from sm up, the grid. */}
        <div className="-mx-4 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-3 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4">
          {displayPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/${defaultLocale}/blog/${post.slug}`}
              className="group block w-[80%] flex-shrink-0 snap-start overflow-hidden rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] transition-all hover:border-[#FF8A1F]/40 hover:shadow-sm sm:w-auto"
            >
              {post.image && (
                <div className="relative">
                  <picture className="relative block aspect-[3/2] overflow-hidden">
                    <source srcSet={post.imageSrcSet} sizes="(max-width: 639px) 80vw, (max-width: 1023px) 45vw, 280px" />
                    <Image src={post.thumbnail || post.image} alt={post.imageAlt || post.title} fill loading="lazy" sizes="(max-width: 639px) 80vw, 280px" className="object-cover" />
                  </picture>
                  <ImageSourceLabel label={dict.generatedVisuals.illustrationLabel} small />
                </div>
              )}
              <div className="p-5">
                <h3 lang="en" className="mb-2 text-[14px] font-bold leading-snug text-[#0F172A]" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>{post.title}</h3>
                <p lang="en" className="mb-4 text-sm leading-relaxed text-[#64748B]">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#9A3F00] transition-all group-hover:gap-2" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>
                  {dict.resources.readMore}
                  {locale !== defaultLocale && <span>({dict.blog.englishLabel})</span>}
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <Link href={`/${locale}/blog`} className="mt-4 inline-flex min-h-11 items-center gap-1.5 text-[12px] font-bold text-[#9A3F00] transition-colors hover:text-[#C2410C] sm:hidden" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>
          {dict.resources.viewAll} <ArrowRight className="h-4 w-4" />
        </Link>
        <p className="mt-2 text-xs leading-relaxed text-[#64748B] sm:mt-5">{dict.generatedVisuals.editorialNote}</p>
      </div>
    </section>
  );
}
