'use client';

import Link from 'next/link';
import { brandReferenceGroups, brandReferences } from '@/data/brandReferences';
import { useDict, useLocale } from '@/i18n';
import LeadModalTrigger from './LeadModalTrigger';

export default function BrandReferences({ compact = false }: { compact?: boolean }) {
  const dict = useDict();
  const locale = useLocale();
  const copy = dict.brandReferences;

  if (compact) {
    const className = 'inline-flex min-h-11 items-center rounded-md border border-[#2A587C] px-2.5 py-1 text-xs text-[#C7D7E8] transition-colors hover:border-[#FF8A1F] hover:text-[#FF8A1F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF8A1F]';
    return (
      <div className="mt-6 border-t border-[#123D63] pt-2" data-brand-references="footer">
        <details className="group" data-footer-brands>
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 rounded-md py-2 text-sm font-semibold text-[#F7FBFF] transition-colors hover:text-[#FF8A1F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF8A1F] [&::-webkit-details-marker]:hidden">
            <span>
              <span>{dict.footer.compatibilityReferences} <span className="ml-1 text-xs font-normal text-[#7F9AB7]">({brandReferences.length})</span></span>
              <span className="mt-1 block text-xs font-normal leading-relaxed text-[#C7D7E8]">{copy.independentNote}</span>
            </span>
            <svg className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </summary>
          <div className="mt-2 flex flex-wrap gap-2">
            {brandReferences.map((brand) => brand.guideSlug ? (
              <Link key={brand.name} href={`/${locale}/compatibility/${brand.guideSlug}`} className={className}>{brand.name}</Link>
            ) : (
              <LeadModalTrigger key={brand.name} prefillType="compatibility" inquiryContext={{ modelReference: brand.modelReference }} className={className}>
                {brand.name}
              </LeadModalTrigger>
            ))}
          </div>
          <p className="mt-3 mb-3 max-w-4xl text-xs leading-relaxed text-[#C7D7E8]">{copy.footerNote}</p>
        </details>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-[#D8E4F0] bg-[#F8FAFC] p-4 sm:p-6" data-brand-references="directory">
      <h3 className="text-xl font-bold text-[#0F172A]" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>{copy.title}</h3>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#475569]">{copy.subtitle}</p>
      <p className="mt-3 text-sm font-semibold leading-relaxed text-[#153A5C]">{copy.independentNote}</p>
      <div className="mt-5 space-y-5">
        {brandReferenceGroups.map((group) => (
          <div key={group.key}>
            <p className="mb-2 text-xs font-semibold text-[#475569]">{copy[group.key]}</p>
            <div className="flex flex-wrap gap-2">
              {brandReferences.filter((brand) => brand.group === group.key).map((brand) => (
                <LeadModalTrigger key={brand.name} prefillType="compatibility" inquiryContext={{ modelReference: brand.modelReference }} className="inline-flex min-h-11 items-center rounded-md border border-[#D8E4F0] bg-white px-3 py-2 text-sm font-semibold text-[#153A5C] transition-colors hover:border-[#9A3F00] hover:text-[#9A3F00] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A3F00]">
                  {brand.name}
                </LeadModalTrigger>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-5 max-w-4xl text-xs leading-relaxed text-[#475569]">{copy.trademarkNote}</p>
      <p className="mt-2 max-w-4xl text-xs leading-relaxed text-[#475569]">{copy.verificationNote}</p>
    </div>
  );
}
