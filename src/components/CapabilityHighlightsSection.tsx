'use client';

import Link from 'next/link';
import { ArrowRight, RadioTower, Settings } from 'lucide-react';
import { useDict, useLocale } from '@/i18n';
import LeadModalTrigger from './LeadModalTrigger';

const icons = [Settings, RadioTower];

export default function CapabilityHighlightsSection() {
  const locale = useLocale();
  const dict = useDict();
  const section = dict.buyerPaths;

  return (
    <section id="buyer-paths" className="bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[2px] bg-[#FF8A1F]" />
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#9A3F00]" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
            {section.sectionLabel}
          </span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0F172A] mb-4" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
              {section.title}
            </h2>
            <p className="text-[#64748B] leading-relaxed max-w-xl">
              {section.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {section.paths.map((item, index) => {
              const Icon = icons[index];
              const href = `/${locale}${item.href}`;

              return (
                <article
                  key={item.href}
                  className="group flex min-w-0 flex-col rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-5"
                >
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E2E8F0] bg-white text-[#FF8A1F]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <ArrowRight className="h-4 w-4 text-[#94A3B8] transition-transform group-hover:translate-x-1 group-hover:text-[#FF8A1F]" />
                  </div>
                  <h3 className="text-base font-bold text-[#0F172A]" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
                    {item.title}
                  </h3>
                  <p className="mt-2 mb-5 text-sm leading-relaxed text-[#64748B]">{item.description}</p>
                  <LeadModalTrigger
                    prefillType={index === 0 ? 'oem' : 'compatibility'}
                    inquiryContext={{ productInterest: item.title }}
                    className="mt-auto min-h-11 rounded-lg bg-[#0B3A63] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#062748]"
                  >
                    {item.cta}
                  </LeadModalTrigger>
                  <Link href={href} className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#9A3412] hover:text-[#C2410C]">
                    {item.guideCta}
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
