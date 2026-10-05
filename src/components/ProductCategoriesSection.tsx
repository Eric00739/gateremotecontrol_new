'use client';

import { ArrowRight } from 'lucide-react';
import LeadModalTrigger from './LeadModalTrigger';
import { useDict } from '@/i18n';
import GeneratedImage from './GeneratedImage';

const categories = [
  { key: 'replacementRemotes', visual: 'remotes', altKey: 'remotesAlt' },
  { key: 'universalReceivers', visual: 'receiver', altKey: 'receiverAlt' },
  { key: 'duplicators', visual: 'learning', altKey: 'learningAlt' },
  { key: 'controllers', visual: 'controller', altKey: 'controllerAlt' },
  { key: 'accessories', visual: 'carRemotes', altKey: 'accessoriesAlt' },
  { key: 'oemCustom', visual: 'oemKit', altKey: 'oemAlt' },
] as const;

export default function ProductCategoriesSection() {
  const dict = useDict();

  return (
    <section id="products" className="scroll-mt-20 bg-[#F8FAFC]">
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

        <p className="mb-6 text-xs leading-relaxed text-[#64748B]">{dict.generatedVisuals.productNote}</p>
        <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 lg:grid-cols-3">
          {categories.map((category, idx) => {
            const pKey = category.key;
            const pDict = dict.product[pKey];

            return (
              <article
                key={pKey}
                className="group mb-7 flex min-w-0 flex-col border-b border-[#D8E4F0] pb-7"
              >
                <GeneratedImage visual={category.visual} alt={dict.generatedVisuals[category.altKey]} copy={dict.generatedVisuals} compact caption={false} sizes="(max-width: 639px) calc((100vw - 48px) / 2), (max-width: 1023px) calc((100vw - 72px) / 2), (max-width: 1279px) calc((100vw - 112px) / 3), 389px" />
                <span className="mt-5 block text-xs font-semibold uppercase tracking-[0.16em] text-[#9A3412]" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>
                  0{idx + 1}
                </span>
                <h3 className="mt-3 text-base font-bold text-[#0F172A] sm:text-xl" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>{pDict.title}</h3>
                <p className="mt-3 mb-4 text-sm leading-relaxed text-[#475569]">{pDict.description}</p>
                <LeadModalTrigger
                  prefillType={pKey === 'oemCustom' ? 'oem' : 'quote'}
                  inquiryContext={{ productInterest: pDict.title }}
                  className="mt-auto inline-flex min-h-11 flex-wrap items-center gap-1.5 self-start text-left text-sm font-bold text-[#9A3412] transition-colors hover:text-[#C2410C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C2410C]"
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
