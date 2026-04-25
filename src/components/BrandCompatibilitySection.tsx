import { brands } from '@/data/homepage';

export default function BrandCompatibilitySection() {
  return (
    <section id="compatibility" className="bg-[#F6F8FB]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#071C33] mb-4">
            Coverage Across Mainstream Gate &amp; Garage Door Systems
          </h2>
          <p className="text-[#64748B] leading-relaxed">
            We support compatible replacement solutions for many popular systems, subject to model and protocol verification.
          </p>
        </div>

        {/* Brand cards grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3 mb-8">
          {brands.map((brand) => (
            <div
              key={brand}
              className="bg-white border border-[#E2E8F0] rounded-xl px-4 py-3 text-center hover:shadow-md hover:border-[#FF7A1A]/30 transition-all"
            >
              <span className="text-sm font-medium text-[#0F172A]">{brand}</span>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="text-center">
          <p className="text-xs text-[#64748B] bg-white border border-[#E2E8F0] rounded-lg px-5 py-3 inline-block">
            Availability differs by model, frequency, rolling/fixed code, chip type, and regional version.
          </p>
        </div>
      </div>
    </section>
  );
}
