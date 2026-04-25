import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { resources } from '@/data/homepage';

export default function ResourcesSection() {
  return (
    <section id="resources" className="bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-[2px] bg-[#FF6B00]" />
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#FF6B00]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            Knowledge Base
          </span>
        </div>

        <div className="flex items-end justify-between mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#020C1B]" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Resources &amp;
            <br />
            Helpful Articles
          </h2>
          <a href="#" className="hidden sm:inline-flex items-center gap-1.5 text-[12px] font-bold text-[#FF6B00] hover:text-[#E55E00] transition-colors" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            VIEW ALL <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="bg-[#F0F4F8] rounded-2xl border border-[#E2E8F0] overflow-hidden card-hover group"
            >
              <div className="h-40 relative overflow-hidden bg-[#020C1B]">
                <Image
                  src={resource.image}
                  alt={resource.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-[14px] font-bold text-[#0F172A] mb-2 leading-snug" style={{ fontFamily: "'Outfit', sans-serif" }}>{resource.title}</h3>
                <p className="text-[12px] text-[#475569] leading-relaxed mb-4">{resource.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#FF6B00] hover:text-[#E55E00] transition-colors group/link"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  READ MORE <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
