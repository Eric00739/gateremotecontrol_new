'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/data/homepage';
import { useDict } from '@/i18n';

export default function FaqSection() {
  const dict = useDict();
  const [openIndex, setOpenIndex] = useState(0);
  const items = dict.faq.items || faqs;

  return (
    <section id="faq" className="bg-[#F8FAFC]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[2px] bg-[#FF8A1F]" />
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#9A3F00]" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>
            {dict.faq.sectionLabel}
          </span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0F172A]" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
            {dict.faq.title}
          </h2>

          {/* One column: an opened answer never leaves an empty cell beside it. */}
          <div className="divide-y divide-[#E2E8F0] rounded-xl border border-[#E2E8F0] bg-white">
            {items.map((faq: { question: string; answer: string }, i: number) => {
              const open = openIndex === i;
              const panelId = `faq-panel-${i}`;
              return (
                <div key={faq.question}>
                  <h3 className="m-0">
                    <button
                      className="flex w-full min-h-14 items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-[#F8FAFC] sm:px-6"
                      onClick={() => setOpenIndex(open ? -1 : i)}
                      aria-expanded={open}
                      aria-controls={panelId}
                    >
                      <span className="text-[15px] font-semibold leading-snug text-[#0F172A]" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>{faq.question}</span>
                      <span className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-colors ${open ? 'bg-[#FF8A1F]/10' : 'bg-[#F1F5F9]'}`} aria-hidden="true">
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180 text-[#C2410C]' : 'text-[#64748B]'}`} />
                      </span>
                    </button>
                  </h3>
                  {open && (
                    <div id={panelId} className="px-5 pb-5 sm:px-6">
                      <p className="max-w-2xl text-sm leading-relaxed text-[#475569]">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
