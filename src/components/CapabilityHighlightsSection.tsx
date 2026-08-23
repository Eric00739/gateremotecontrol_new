'use client';

import Link from 'next/link';
import { ArrowRight, Boxes, RadioTower, Settings } from 'lucide-react';
import { useDict, useLocale } from '@/i18n';

const icons = [Boxes, RadioTower, Settings];

const defaultBuyerPaths = {
  sectionLabel: 'Buyer paths',
  title: 'Choose the path that matches your purchase',
  subtitle: 'Start with your buying role, then send model and market details for confirmation.',
  paths: [
    {
      title: 'Distributors & wholesalers',
      description: 'Request a private catalog after product, market, and quantity requirements are clear.',
      href: '/request-catalog',
    },
    {
      title: 'Installers & locksmiths',
      description: 'Check limited public compatibility references before requesting a model match.',
      href: '/compatibility',
    },
    {
      title: 'OEM & private label',
      description: 'Discuss a private-label RF project around verified market and protocol requirements.',
      href: '/oem-odm',
    },
  ],
};

export default function CapabilityHighlightsSection() {
  const locale = useLocale();
  const dict = useDict();
  const section = dict.buyerPaths || defaultBuyerPaths;

  return (
    <section className="bg-white">
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
            {section.paths.map((item: { title: string; description: string; href: string }, index: number) => {
              const Icon = icons[index];
              const href = `/${locale}${item.href}`;

              return (
                <Link
                  key={item.href}
                  href={href}
                  className="group rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-5 transition-all hover:-translate-y-0.5 hover:border-[#FF8A1F]/40 hover:bg-white hover:shadow-lg hover:shadow-slate-200/60"
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
                  <p className="mt-2 text-sm leading-relaxed text-[#64748B]">{item.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
