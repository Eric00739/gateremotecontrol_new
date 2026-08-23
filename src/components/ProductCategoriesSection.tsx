'use client';

import { ArrowRight } from 'lucide-react';
import { products } from '@/data/homepage';
import LeadModalTrigger from './LeadModalTrigger';
import { useDict } from '@/i18n';

const productKeys = ['replacementRemotes', 'universalReceivers', 'duplicators', 'controllers', 'accessories', 'oemCustom'] as const;

export default function ProductCategoriesSection() {
  const dict = useDict();

  return (
    <section id="products" className="bg-[#F8FAFC]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[2px] bg-[#FF8A1F]" />
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#9A3F00]" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>
            {dict.products.sectionLabel}
          </span>
        </div>

        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0F172A] mb-4" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
            {dict.products.title}
          </h2>
          <p className="text-[#64748B] leading-relaxed">
            {dict.products.subtitle}
          </p>
        </div>

        <div className="grid border-t border-[#D8E4F0] sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, idx) => {
            const pKey = productKeys[idx];
            const pDict = dict.product[pKey];

            return (
              <article
                key={product.title}
                className="group border-b border-[#D8E4F0] px-0 py-7 sm:px-6 lg:px-8 lg:first:pl-0 lg:[&:nth-child(3n)]:pr-0"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9A3412]" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>
                  0{idx + 1}
                </span>
                <h3 className="mt-5 text-xl font-bold text-[#0F172A]" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>{pDict.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">{pDict.description}</p>
                <LeadModalTrigger
                  prefillType="quote"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-[#9A3412] transition-colors hover:text-[#C2410C]"
                >
                  {dict.products.sendInquiry}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </LeadModalTrigger>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
