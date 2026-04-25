import { ArrowRight } from 'lucide-react';
import { resources } from '@/data/homepage';

export default function ResourcesSection() {
  return (
    <section id="resources" className="bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#071C33] mb-4">
            Resources &amp; Helpful Articles
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="bg-[#F6F8FB] rounded-2xl border border-[#E2E8F0] overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="h-36 bg-gradient-to-br from-[#E2E8F0] to-[#CBD5E1] flex items-center justify-center">
                <span className="text-[#64748B] text-xs">Article Image</span>
              </div>
              <div className="p-5">
                <h3 className="text-sm font-semibold text-[#0F172A] mb-2 leading-snug">{resource.title}</h3>
                <p className="text-xs text-[#64748B] leading-relaxed mb-3">{resource.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#FF7A1A] hover:text-[#E86A0E] transition-colors"
                >
                  Read More <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
