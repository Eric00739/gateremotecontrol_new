'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock } from 'lucide-react';
import { blogPosts, blogCategories } from '@/data/blog';
import LeadModalTrigger from '@/components/LeadModalTrigger';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPosts = activeCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = activeCategory === 'all' ? blogPosts.find(p => p.featured) : null;
  const remainingPosts = activeCategory === 'all'
    ? blogPosts.filter(p => !p.featured)
    : filteredPosts;

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* Blog Hero */}
      <section className="bg-[#062748] relative overflow-hidden">
        <div className="absolute inset-0 tech-grid" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF8A1F] rounded-full opacity-[0.03] blur-[100px]" />
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#FF8A1F]" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#FF8A1F]" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
              Knowledge Base
            </span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold text-[#F7FBFF] mb-4" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
            Blog &amp; Compatibility
            <br />
            Guides
          </h1>
          <p className="text-[#C7D7E8] max-w-xl leading-relaxed">
            Practical guides on frequency matching, rolling code protocols, OEM development, and what buyers need before requesting RF compatibility checks.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <div className="bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2">
            {blogCategories.map(cat => (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key)}
                className={`rounded-lg px-4 py-2 text-[13px] font-semibold transition-colors ${
                  activeCategory === cat.key
                    ? 'bg-[#FF8A1F] text-white'
                    : 'bg-[#F8FAFC] text-[#64748B] hover:bg-[#EFF6FF] hover:text-[#0F172A]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Featured Article */}
        {featuredPost && (
          <div className="mb-12">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#FF8A1F] mb-4 block" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
              Featured Article
            </span>
            <Link href={`/blog/${featuredPost.slug}`} className="group block bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden card-hover-light">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <span className="inline-block self-start rounded-full bg-[#FF8A1F]/10 text-[#C45A00] text-[11px] font-bold px-3 py-1 mb-4">
                    {blogCategories.find(c => c.key === featuredPost.category)?.label || featuredPost.category}
                  </span>
                  <h2 className="text-xl lg:text-2xl font-bold text-[#0F172A] mb-3 leading-tight" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
                    {featuredPost.title}
                  </h2>
                  <p className="text-[#64748B] text-sm leading-relaxed mb-4">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] text-[#94A3B8]" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
                      {featuredPost.readTime}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[12px] font-bold text-[#FF8A1F] group-hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Article Grid */}
        {remainingPosts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {remainingPosts.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden card-hover-light block">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <span className="inline-block rounded-full bg-[#FF8A1F]/10 text-[#C45A00] text-[11px] font-bold px-3 py-1 mb-3">
                    {blogCategories.find(c => c.key === post.category)?.label || post.category}
                  </span>
                  <h3 className="text-[14px] font-bold text-[#0F172A] mb-2 leading-snug" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
                    {post.title}
                  </h3>
                  <p className="text-[12px] text-[#64748B] leading-relaxed mb-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-[11px] text-[#94A3B8]" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                    <span className="text-[11px] font-bold text-[#FF8A1F] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Read More <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-[#64748B] text-sm">No articles found in this category.</p>
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className="text-[#FF8A1F] text-sm font-bold mt-2 block mx-auto"
            >
              View all articles
            </button>
          </div>
        )}

        {/* Light CTA */}
        <div className="mt-16 bg-[#062748] rounded-2xl p-8 lg:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#FF8A1F] rounded-full opacity-[0.04] blur-[80px]" />
          <div className="relative">
            <h3 className="text-xl font-bold text-[#F7FBFF] mb-3" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
              Need help with a compatibility question?
            </h3>
            <p className="text-[#C7D7E8] text-sm mb-6 max-w-lg">
              Send us brand, model, frequency, or photos. Our team will help verify compatibility.
            </p>
            <LeadModalTrigger
              prefillType="support"
              className="inline-flex items-center gap-2 bg-[#FF8A1F] hover:bg-[#F97316] text-[#062748] font-bold px-6 py-3 rounded-xl transition-all text-sm btn-glow"
            >
              Get Compatibility Support <ArrowRight className="w-4 h-4" />
            </LeadModalTrigger>
          </div>
        </div>
      </div>
    </div>
  );
}
