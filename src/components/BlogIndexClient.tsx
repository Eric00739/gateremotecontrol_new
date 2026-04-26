'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight, Clock, Search,
  Puzzle, Shield, Layers, Cpu, ClipboardCheck, Wrench,
  ChevronRight, ExternalLink, SlidersHorizontal, X,
} from 'lucide-react';
import { blogPosts, blogCategories, topicHubs, compatibilityBrands, popularGuides } from '@/data/blog';
import LeadModalTrigger from '@/components/LeadModalTrigger';
import { useDict } from '@/i18n';

const ARTICLES_PER_PAGE = 6;

const topicIcons: Record<string, typeof Puzzle> = {
  puzzle: Puzzle,
  shield: Shield,
  layers: Layers,
  cpu: Cpu,
  clipboard: ClipboardCheck,
  wrench: Wrench,
};

export default function BlogIndexClient() {
  const dict = useDict();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  // Count articles per category
  const articleCounts: Record<string, number> = {};
  blogPosts.forEach((p) => {
    articleCounts[p.category] = (articleCounts[p.category] || 0) + 1;
  });

  // Filter posts
  let filteredPosts = blogPosts.filter((p) => !p.featured);
  if (activeCategory !== 'all') {
    filteredPosts = filteredPosts.filter((p) => p.category === activeCategory);
  }
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filteredPosts = filteredPosts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
  }

  const totalResults = filteredPosts.length;
  const totalPages = Math.max(1, Math.ceil(totalResults / ARTICLES_PER_PAGE));
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * ARTICLES_PER_PAGE,
    currentPage * ARTICLES_PER_PAGE
  );

  // Popular guides data (show up to 6)
  const popularPosts = popularGuides
    .map((slug) => blogPosts.find((p) => p.slug === slug))
    .filter(Boolean)
    .slice(0, 6);

  const categoryLabels: Record<string, string> = {
    all: dict.blog.categories.all,
    compatibility: dict.blog.categories.compatibility,
    'rolling-code': dict.blog.categories.rollingCode,
    'oem-odm': dict.blog.categories.oemOdm,
    'buyer-checklist': dict.blog.categories.buyerChecklist,
    troubleshooting: dict.blog.categories.troubleshooting,
  };

  // Sidebar filter component (desktop sidebar + mobile drawer share same markup)
  const sidebarContent = (isMobile: boolean) => (
    <div className={`space-y-6 ${isMobile ? 'pb-6' : ''}`}>
      {/* Search */}
      <div>
        <h3 className="text-xs font-semibold text-[#94A3B8] uppercase tracking-[0.12em] mb-3" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
          {dict.blog.sidebar.search}
        </h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
            placeholder="Search articles..."
            className="w-full pl-10 pr-4 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#FF8A1F]/30 focus:border-[#FF8A1F]/50"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => { setSearchQuery(''); setCurrentPage(1); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#0F172A]"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-xs font-semibold text-[#94A3B8] uppercase tracking-[0.12em] mb-3" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
          {dict.blog.sidebar.categories}
        </h3>
        <div className="space-y-1">
          {blogCategories.map((cat) => {
            const count = cat.key === 'all' ? blogPosts.length : (articleCounts[cat.key] || 0);
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => { setActiveCategory(cat.key); setCurrentPage(1); setShowMobileFilters(false); }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm transition-colors ${
                  activeCategory === cat.key
                    ? 'bg-[#FF8A1F] text-[#062748] font-semibold'
                    : 'text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#0F172A]'
                }`}
              >
                <span>{categoryLabels[cat.key]}</span>
                <span className={`text-xs ${activeCategory === cat.key ? 'text-[#062748]/70' : 'text-[#94A3B8]'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Popular Topics */}
      <div>
        <h3 className="text-xs font-semibold text-[#94A3B8] uppercase tracking-[0.12em] mb-3" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
          {dict.blog.sidebar.popularTopics}
        </h3>
        <div className="space-y-2">
          <Link href="#" className="block text-sm text-[#0F172A] hover:text-[#FF8A1F] transition-colors">
            {dict.blog.topics.frequency}
          </Link>
          <Link href="#" className="block text-sm text-[#0F172A] hover:text-[#FF8A1F] transition-colors">
            {dict.blog.topics.rollingVsFixed}
          </Link>
          <Link href="#" className="block text-sm text-[#0F172A] hover:text-[#FF8A1F] transition-colors">
            {dict.blog.topics.faacGuide}
          </Link>
          <Link href="#" className="block text-sm text-[#0F172A] hover:text-[#FF8A1F] transition-colors">
            {dict.blog.topics.codeCloning}
          </Link>
          <Link href="#" className="block text-sm text-[#0F172A] hover:text-[#FF8A1F] transition-colors">
            {dict.blog.topics.security}
          </Link>
        </div>
      </div>

      {/* Brand Index */}
      <div>
        <h3 className="text-xs font-semibold text-[#94A3B8] uppercase tracking-[0.12em] mb-3" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
          {dict.blog.sidebar.brandIndex}
        </h3>
        <div className="space-y-1">
          {compatibilityBrands.map((brand) => (
            <Link
              key={brand.label}
              href={brand.href}
              className="block text-sm text-[#64748B] hover:text-[#FF8A1F] transition-colors py-1"
            >
              {brand.label}
            </Link>
          ))}
        </div>
        <Link href="/compatibility" className="inline-flex items-center gap-1 text-xs font-semibold text-[#FF8A1F] hover:text-[#F97316] mt-2">
          {dict.blog.brandIndex.viewAllBrands} <ChevronRight className="w-3 h-3" />
        </Link>
      </div>

      {/* Buyer Resources */}
      <div>
        <h3 className="text-xs font-semibold text-[#94A3B8] uppercase tracking-[0.12em] mb-3" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
          {dict.blog.sidebar.buyerResources}
        </h3>
        <div className="space-y-2">
          <Link href="#" className="flex items-center gap-2 text-sm text-[#0F172A] hover:text-[#FF8A1F] transition-colors">
            <ClipboardCheck className="w-3.5 h-3.5 text-[#94A3B8]" />
            {dict.blog.buyerResources.requestChecklist}
          </Link>
          <Link href="#" className="flex items-center gap-2 text-sm text-[#0F172A] hover:text-[#FF8A1F] transition-colors">
            <ClipboardCheck className="w-3.5 h-3.5 text-[#94A3B8]" />
            {dict.blog.buyerResources.sampleGuide}
          </Link>
          <Link href="#" className="flex items-center gap-2 text-sm text-[#0F172A] hover:text-[#FF8A1F] transition-colors">
            <ClipboardCheck className="w-3.5 h-3.5 text-[#94A3B8]" />
            {dict.blog.buyerResources.faq}
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* ===== HERO ===== */}
      <section className="bg-[#062748] relative overflow-hidden">
        <div className="absolute inset-0 tech-grid" />
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#FF8A1F]" />
            <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#FF8A1F]" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
              {dict.blog.sectionLabel}
            </span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold text-[#F7FBFF] mb-4" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
            {dict.blog.title}
          </h1>
          <p className="text-[#C7D7E8] max-w-2xl leading-relaxed mb-8">
            {dict.blog.subtitle}
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#7F9AB7]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                placeholder={dict.blog.searchPlaceholder}
                className="w-full pl-12 pr-28 py-4 bg-white/10 backdrop-blur border border-white/15 rounded-xl text-[#F7FBFF] placeholder:text-[#7F9AB7] text-base focus:outline-none focus:ring-2 focus:ring-[#FF8A1F]/40 focus:border-[#FF8A1F]/50"
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#FF8A1F] hover:bg-[#F97316] text-[#062748] font-bold px-5 py-2.5 rounded-lg text-sm transition-colors"
              >
                {dict.blog.searchButton}
              </button>
            </div>
          </div>

          {/* Quick Topic Links */}
          <div className="flex flex-wrap gap-2 mt-5">
            {Object.entries(dict.blog.quickLinks).map(([key, label]) => {
              const categoryKey = key === 'brandCompatibility' ? 'compatibility' : key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => { setActiveCategory(categoryKey === 'brand' ? 'all' : categoryKey); setCurrentPage(1); }}
                  className="text-xs text-[#C7D7E8] border border-white/15 px-3 py-1.5 rounded-md hover:border-[#FF8A1F]/50 hover:text-[#FF8A1F] transition-colors"
                >
                  {label as string}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CATEGORY TABS BAR ===== */}
      <div className="bg-white border-b border-[#E2E8F0] sticky top-0 z-30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-none">
            {blogCategories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => { setActiveCategory(cat.key); setCurrentPage(1); }}
                className={`shrink-0 rounded-md px-4 py-2 text-[13px] font-semibold transition-colors ${
                  activeCategory === cat.key
                    ? 'bg-[#FF8A1F] text-[#062748]'
                    : 'bg-[#F8FAFC] text-[#64748B] hover:bg-[#EFF6FF] hover:text-[#0F172A]'
                }`}
              >
                {categoryLabels[cat.key]}
              </button>
            ))}
            <div className="flex-1" />
            {/* Mobile filter toggle */}
            <button
              type="button"
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="lg:hidden inline-flex items-center gap-1.5 text-xs font-semibold text-[#64748B] hover:text-[#FF8A1F] transition-colors py-2 px-3"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
          </div>
        </div>
      </div>

      {/* ===== MOBILE FILTER DRAWER ===== */}
      {showMobileFilters && (
        <div className="lg:hidden bg-white border-b border-[#E2E8F0]">
          <div className="max-w-[1280px] mx-auto px-4 py-6">
            {sidebarContent(true)}
          </div>
        </div>
      )}

      {/* ===== TOPIC HUBS ===== */}
      <section className="bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-[2px] bg-[#FF8A1F]" />
            <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#FF8A1F]" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
              Explore by Topic
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {topicHubs.map((hub, i) => {
              const Icon = topicIcons[hub.icon];
              const count = hub.key === 'brand' ? compatibilityBrands.length : (articleCounts[hub.key] || 0);
              const hubKey = hub.key === 'brand' ? 'brand' : hub.key;
              const dictKey = hub.key === 'brand' ? 'brand' : hubKey;
              const hubDict = (dict.blog.topicHubs as Record<string, { title: string; description: string; viewArticles: string }>)[dictKey];
              return (
                <Link
                  key={hub.key}
                  href={hub.key === 'brand' ? '/compatibility' : `/blog/category/${hub.key}`}
                  className={`group block bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-5 hover:border-[#FF8A1F]/40 hover:shadow-sm transition-all ${
                    i === 0 ? 'sm:col-span-1' : ''
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-[#FF8A1F]/10 flex items-center justify-center">
                      {Icon && <Icon className="w-5 h-5 text-[#FF8A1F]" />}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-[15px] font-bold text-[#0F172A] mb-1 leading-snug" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
                        {hubDict?.title || hub.label}
                      </h3>
                      <p className="text-[13px] text-[#64748B] leading-relaxed mb-3 line-clamp-2">
                        {hubDict?.description || hub.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] text-[#94A3B8]" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
                          {count} {count === 1 ? 'item' : 'items'}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[12px] font-bold text-[#FF8A1F] group-hover:gap-1.5 transition-all">
                          {hubDict?.viewArticles || 'View'} <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== FEATURED ARTICLE ===== */}
      <section className="bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {(() => {
            const featuredPost = blogPosts.find((p) => p.featured);
            if (!featuredPost) return null;
            return (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-[2px] bg-[#FF8A1F]" />
                  <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#FF8A1F]" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
                    {dict.blog.featured}
                  </span>
                </div>
                <Link href={`/blog/${featuredPost.slug}`} className="group block bg-white rounded-xl border border-[#E2E8F0] overflow-hidden card-hover-light">
                  <div className="grid lg:grid-cols-[1fr_1.1fr] gap-0">
                    <div className="relative h-64 lg:h-auto min-h-[280px]">
                      <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        fill
                        loading="eager"
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      />
                    </div>
                    <div className="p-7 lg:p-10 flex flex-col justify-center">
                      <span className="inline-block self-start rounded-md bg-[#FF8A1F]/10 text-[#C45A00] text-[11px] font-bold px-3 py-1 mb-4">
                        {categoryLabels[featuredPost.category]}
                      </span>
                      <h2 className="text-xl lg:text-3xl font-bold text-[#0F172A] mb-3 leading-tight" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
                        {featuredPost.title}
                      </h2>
                      <p className="text-[#64748B] text-sm leading-relaxed mb-6">{featuredPost.excerpt}</p>
                      <div className="flex items-center gap-4">
                        <span className="inline-flex items-center gap-1.5 text-[12px] text-[#94A3B8]" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
                          <Clock className="w-3.5 h-3.5" /> {featuredPost.readTime}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[13px] font-bold text-[#FF8A1F] group-hover:gap-2 transition-all">
                          {dict.blog.readGuide} <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ===== POPULAR GUIDES ===== */}
      {popularPosts.length > 0 && (
        <section className="bg-white">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-[2px] bg-[#FF8A1F]" />
              <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#FF8A1F]" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
                {dict.blog.popularGuides.title}
              </span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {popularPosts.map((post) => {
                if (!post) return null;
                return (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="group block bg-[#F8FAFC] rounded-lg border border-[#E2E8F0] p-5 hover:border-[#FF8A1F]/40 hover:shadow-sm transition-all">
                    <span className="inline-block rounded-md bg-[#FF8A1F]/10 text-[#C45A00] text-[11px] font-bold px-2.5 py-0.5 mb-3">
                      {categoryLabels[post.category]}
                    </span>
                    <h3 className="text-[15px] font-bold text-[#0F172A] mb-2 leading-snug" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
                      {post.title}
                    </h3>
                    <p className="text-[13px] text-[#64748B] leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-[11px] text-[#94A3B8]" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                      <span className="text-[11px] font-bold text-[#FF8A1F] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        {dict.resources.readMore} <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ===== BRAND COMPATIBILITY INDEX ===== */}
      <section className="bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-[2px] bg-[#FF8A1F]" />
            <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#FF8A1F]" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
              {dict.blog.brandIndex.title}
            </span>
          </div>
          <p className="text-sm text-[#64748B] mt-3 mb-6 max-w-xl">
            Compatibility references organized by brand. Select a brand for detailed matching information.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {compatibilityBrands.map((brand) => (
              <Link
                key={brand.label}
                href={brand.href}
                className="group bg-white rounded-lg border border-[#E2E8F0] p-4 hover:border-[#FF8A1F]/40 hover:shadow-sm transition-all"
              >
                <h4 className="text-[15px] font-bold text-[#0F172A] mb-1" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
                  {brand.label}
                </h4>
                <p className="text-[11px] text-[#94A3B8] leading-relaxed mb-2 line-clamp-2">
                  {brand.description}
                </p>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#FF8A1F] group-hover:gap-1.5 transition-all">
                  {dict.blog.brandIndex.viewGuides} <ExternalLink className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTENT: Article List + Sidebar ===== */}
      <section className="bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          {/* Section header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-[2px] bg-[#FF8A1F]" />
                <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#FF8A1F]" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
                  {dict.blog.latest.title}
                </span>
              </div>
              {activeCategory !== 'all' || searchQuery ? (
                <p className="text-sm text-[#64748B] mt-1">
                  {activeCategory !== 'all' && <span className="font-medium text-[#0F172A]">{categoryLabels[activeCategory]}</span>}
                  {activeCategory !== 'all' && searchQuery && <span> &middot; </span>}
                  {searchQuery && <span className="font-medium text-[#0F172A]">"{searchQuery}"</span>}
                  <span className="text-[#94A3B8] ml-1">— {totalResults} {dict.blog.latest.resultsCount}</span>
                </p>
              ) : null}
            </div>
            {(activeCategory !== 'all' || searchQuery) && (
              <button
                type="button"
                onClick={() => { setActiveCategory('all'); setSearchQuery(''); setCurrentPage(1); }}
                className="text-xs font-semibold text-[#FF8A1F] hover:text-[#F97316] transition-colors"
              >
                {dict.blog.latest.clearFilters}
              </button>
            )}
          </div>

          <div className="grid lg:grid-cols-[1fr_280px] gap-10">
            {/* Article Grid */}
            <div>
              {paginatedPosts.length > 0 ? (
                <div className="grid sm:grid-cols-2 gap-5">
                  {paginatedPosts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-[#F8FAFC] rounded-lg border border-[#E2E8F0] overflow-hidden card-hover-light block">
                      <div className="relative h-44 overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                        />
                      </div>
                      <div className="p-5">
                        <span className="inline-block rounded-md bg-[#FF8A1F]/10 text-[#C45A00] text-[11px] font-bold px-3 py-1 mb-3">
                          {categoryLabels[post.category]}
                        </span>
                        <h3 className="text-[15px] font-bold text-[#0F172A] mb-2 leading-snug" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
                          {post.title}
                        </h3>
                        <p className="text-[13px] text-[#64748B] leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center justify-between gap-3">
                          <span className="inline-flex items-center gap-1.5 text-[11px] text-[#94A3B8]" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
                            <Clock className="w-3 h-3" /> {post.readTime}
                          </span>
                          <span className="text-[11px] font-bold text-[#FF8A1F] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                            {dict.resources.readMore} <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0]">
                  <p className="text-[#64748B] text-sm">{dict.blog.noArticles}</p>
                  <button
                    type="button"
                    onClick={() => { setActiveCategory('all'); setSearchQuery(''); setCurrentPage(1); }}
                    className="text-[#FF8A1F] text-sm font-bold mt-2 block mx-auto"
                  >
                    {dict.blog.viewAll}
                  </button>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-10 flex items-center justify-center gap-2">
                  <button
                    type="button"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    className="px-3 py-2 rounded-md text-sm font-medium border border-[#E2E8F0] text-[#64748B] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#F8FAFC] transition-colors"
                  >
                    {dict.blog.pagination.prev}
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      type="button"
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-md text-sm font-medium transition-colors ${
                        currentPage === page
                          ? 'bg-[#FF8A1F] text-[#062748]'
                          : 'border border-[#E2E8F0] text-[#64748B] hover:bg-[#F8FAFC]'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    type="button"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    className="px-3 py-2 rounded-md text-sm font-medium border border-[#E2E8F0] text-[#64748B] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#F8FAFC] transition-colors"
                  >
                    {dict.blog.pagination.next}
                  </button>
                </div>
              )}
            </div>

            {/* Desktop Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-20">
                {sidebarContent(false)}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="bg-[#062748]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-xl font-bold text-[#F7FBFF] mb-3" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
                {dict.blog.helpTitle}
              </h3>
              <p className="text-[#C7D7E8] text-sm max-w-lg leading-relaxed">
                {dict.blog.helpSubtitle}
              </p>
            </div>
            <LeadModalTrigger
              prefillType="support"
              className="shrink-0 inline-flex items-center justify-center gap-2 bg-[#FF8A1F] hover:bg-[#F97316] text-[#062748] font-bold px-6 py-3 rounded-lg transition-all text-sm btn-glow"
            >
              {dict.blog.helpCta} <ArrowRight className="w-4 h-4" />
            </LeadModalTrigger>
          </div>
        </div>
      </section>
    </div>
  );
}
