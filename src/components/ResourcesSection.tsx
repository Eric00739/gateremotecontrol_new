'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/data/blog';

export default function ResourcesSection() {
  const displayPosts = blogPosts.slice(0, 4);

  return (
    <section id="resources" className="bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[2px] bg-[#FF8A1F]" />
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#FF8A1F]" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>
            Latest Guides
          </span>
        </div>

        <div className="flex items-end justify-between mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0F172A]" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
            Resources &amp;
            <br />
            Helpful Articles
          </h2>
          <Link href="/blog" className="hidden sm:inline-flex items-center gap-1.5 text-[12px] font-bold text-[#FF8A1F] hover:text-[#F97316] transition-colors" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>
            VIEW ALL <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {displayPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] overflow-hidden card-hover-light group block"
            >
              <div className="h-40 relative overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-[14px] font-bold text-[#0F172A] mb-2 leading-snug" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>{post.title}</h3>
                <p className="text-[12px] text-[#64748B] leading-relaxed mb-4">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#FF8A1F] group-hover:gap-2 transition-all" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>
                  READ MORE <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
