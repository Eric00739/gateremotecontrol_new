'use client';

import { Camera, Radio, Cpu, Users, FlaskConical, Factory } from 'lucide-react';
import { workflowSteps } from '@/data/homepage';

const iconMap = [Camera, Radio, Cpu, Users, FlaskConical, Factory];

export default function CompatibilityWorkflowSection() {
  return (
    <section className="bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[2px] bg-[#F59E0B]" />
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#F59E0B]" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>
            Verification Process
          </span>
        </div>

        <h2 className="text-3xl lg:text-4xl font-bold text-[#0F172A] mb-4 max-w-2xl" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
          How Buyers Verify
          <br />
          Compatibility Before Ordering
        </h2>
        <p className="text-[#64748B] mb-14 max-w-xl">
          A systematic 6-step process to ensure every compatible solution matches your system requirements.
        </p>

        {/* Horizontal timeline */}
        <div className="relative">
          {/* Connecting dotted line (desktop) */}
          <div className="hidden lg:block absolute top-7 left-[8%] right-[8%] h-[2px] border-t-2 border-dashed border-[#E2E8F0]" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4">
            {workflowSteps.map((step, i) => {
              const Icon = iconMap[i];
              return (
                <div key={step.step} className="text-center relative">
                  {/* Numbered circle with icon */}
                  <div className="relative z-10 mb-4">
                    <div className="w-14 h-14 mx-auto bg-[#F8FAFC] rounded-full flex items-center justify-center border-2 border-[#E2E8F0] group-hover:border-[#F59E0B] transition-colors">
                      <Icon className="w-6 h-6 text-[#F59E0B]" />
                    </div>
                    {/* Step number badge */}
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#F59E0B] rounded-full flex items-center justify-center shadow-lg shadow-amber-500/20">
                      <span className="text-white text-[10px] font-bold" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>
                        {step.step}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-[13px] font-bold text-[#0F172A] mb-1.5 leading-snug" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>{step.title}</h3>
                  <p className="text-[11px] text-[#64748B] leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
