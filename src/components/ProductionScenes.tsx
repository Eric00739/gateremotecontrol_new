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
        {/* Phones: a swipeable row (the next frame peeks in) instead of three full-width images. */}
        <div
          className="-mx-4 mt-8 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-3 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0"
          role="region"
          aria-label={dict.visuals.footageTitle}
          tabIndex={0}
        >
          {scenes.map((visual) => (
            <figure key={visual} className="w-[78%] flex-shrink-0 snap-start md:w-auto">
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
