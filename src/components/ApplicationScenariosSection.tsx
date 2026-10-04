'use client';

import { applications } from '@/data/homepage';
import { useDict } from '@/i18n';
import GeneratedImage from './GeneratedImage';

const applicationVisuals = ['slidingGate', 'swingGate', 'garage', 'shutter', 'access', 'commercial', 'warehouse'] as const;

export default function ApplicationScenariosSection() {
  const dict = useDict();
  const names = dict.applications.names || [];

  return (
    <section className="bg-[#F8FAFC]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[2px] bg-[#FF8A1F]" />
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#9A3F00]" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>
            {dict.applications.sectionLabel}
          </span>
        </div>

        <h2 className="text-3xl lg:text-4xl font-bold text-[#0F172A] mb-4" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
          {dict.applications.title}
        </h2>

        <p className="mb-8 text-xs leading-relaxed text-[#64748B]">{dict.generatedVisuals.sceneNote}</p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {applications.map((app, index) => {
            const name = names[index] || app.name;
            return (
            <div
              key={app.name}
              className="min-w-0 overflow-hidden"
            >
              <GeneratedImage visual={applicationVisuals[index]} alt={name} copy={dict.generatedVisuals} kind="scene" compact caption={false} sizes="(max-width: 639px) calc((100vw - 48px) / 2), (max-width: 1023px) calc((100vw - 88px) / 3), (max-width: 1279px) calc((100vw - 124px) / 4), 289px" />
              <span className="mt-3 block text-[#153A5C] font-semibold text-[15px]" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>{name}</span>
            </div>
          );})}
        </div>
      </div>
    </section>
  );
}
