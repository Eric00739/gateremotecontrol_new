import { brands } from '@/data/homepage';

export default function BrandCompatibilitySection() {
  return (
    <section id="compatibility" className="bg-[#F0F4F8] relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-[2px] bg-[#FF6B00]" />
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#FF6B00]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            Compatibility Matrix
          </span>
        </div>

        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#020C1B] mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Coverage Across Mainstream
            <br />
            Gate &amp; Garage Door Systems
          </h2>
          <p className="text-[#475569] leading-relaxed">
            We support compatible replacement solutions for many popular systems, subject to model and protocol verification.
          </p>
        </div>

        {/* Brand cards grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2.5 mb-10">
          {brands.map((brand, i) => (
            <div
              key={brand}
              className="bg-white border border-[#E2E8F0] rounded-xl px-4 py-3.5 text-center hover:shadow-md hover:border-[#FF6B00]/30 hover:-translate-y-0.5 transition-all duration-300 cursor-default animate-fade-in-up group"
              style={{ animationDelay: `${Math.min(i * 0.03, 1.2)}s` }}
            >
              <span className="text-[13px] font-medium text-[#0F172A] group-hover:text-[#FF6B00] transition-colors">{brand}</span>
            </div>
          ))}
        </div>

        {/* Disclaimer with technical styling */}
        <div className="flex items-start gap-3 bg-white border border-[#E2E8F0] rounded-xl px-5 py-4 max-w-2xl">
          <div className="w-5 h-5 rounded-full bg-[#FF6B00]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-[#FF6B00] text-[10px] font-bold">i</span>
          </div>
          <p className="text-xs text-[#475569] leading-relaxed">
            Availability differs by model, frequency, rolling/fixed code, chip type, and regional version.
          </p>
        </div>
      </div>
    </section>
  );
}
