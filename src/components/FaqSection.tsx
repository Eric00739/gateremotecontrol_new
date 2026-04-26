'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqs } from '@/data/homepage';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-[#F8FAFC]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[2px] bg-[#FF8A1F]" />
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#FF8A1F]" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>
            Support
          </span>
        </div>

        <h2 className="text-3xl lg:text-4xl font-bold text-[#0F172A] mb-12" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
          Frequently Asked
          <br />
          Questions
        </h2>

        <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {faqs.map((faq, i) => (
            <div
              key={faq.question}
              className="bg-white rounded-lg border border-[#E2E8F0] overflow-hidden card-hover-light"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                aria-expanded={openIndex === i}
              >
                <span className="text-[14px] font-bold text-[#0F172A] pr-4" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>{faq.question}</span>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${openIndex === i ? 'bg-[#FF8A1F]/10' : 'bg-[#F1F5F9]'}`}>
                  {openIndex === i ? (
                    <ChevronUp className="w-4 h-4 text-[#FF8A1F]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#94A3B8]" />
                  )}
                </div>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6">
                  <div className="w-6 h-[2px] bg-[#FF8A1F] mb-3" />
                  <p className="text-[13px] text-[#64748B] leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
