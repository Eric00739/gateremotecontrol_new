'use client';

import EditorialImage from './EditorialImage';
import { editorialVisuals, type EditorialVisualId } from '@/data/visuals';
import { useDict } from '@/i18n';

const scenes: EditorialVisualId[] = ['engineering', 'production', 'boards'];

export default function ProductionScenes() {
  const dict = useDict();

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <h2 className="text-2xl font-bold text-[#0F172A] lg:text-3xl" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
          {dict.visuals.footageTitle}
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#475569]">{dict.visuals.footageSubtitle}</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {scenes.map((visual) => (
            <figure key={visual}>
              <EditorialImage visual={visual} copy={dict.visuals} compact />
              <figcaption className="mt-3 text-sm leading-relaxed text-[#475569]">
                {dict.visuals[editorialVisuals[visual].altKey]}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
