import { factoryItems } from '@/data/homepage';

export default function FactoryEvidenceSection() {
  return (
    <section id="factory" className="bg-[#F6F8FB]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#071C33] mb-4">
            Factory Evidence, Not Just Claims
          </h2>
          <p className="text-[#64748B] leading-relaxed">
            See how we control production, testing, packaging, and delivery.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {factoryItems.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl overflow-hidden bg-white border border-[#E2E8F0] hover:shadow-lg transition-shadow"
            >
              <div className="h-36 bg-gradient-to-br from-[#E2E8F0] to-[#CBD5E1] flex items-center justify-center">
                <span className="text-[#64748B] text-xs">{item.name}</span>
              </div>
              <div className="p-3">
                <p className="text-xs font-medium text-[#0F172A] text-center">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
