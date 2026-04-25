import { Shield, AlertTriangle, FileSearch, FlaskConical, Package, FileCheck } from 'lucide-react';
import { riskCards } from '@/data/homepage';

const iconMap = [Shield, AlertTriangle, FileSearch, FlaskConical, Package, FileCheck];

export default function RiskControlSection() {
  return (
    <section className="bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#071C33] mb-4">
            How We Reduce Legal &amp; Compatibility Risk
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {riskCards.map((card, i) => {
            const Icon = iconMap[i];
            return (
              <div
                key={card.title}
                className="bg-[#F6F8FB] rounded-2xl p-6 border border-[#E2E8F0] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-[#071C33] rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#FF7A1A]" />
                </div>
                <h3 className="text-base font-semibold text-[#0F172A] mb-2">{card.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{card.description}</p>
              </div>
            );
          })}
        </div>

        {/* Legal disclaimer */}
        <div className="bg-[#071C33] rounded-2xl p-6 lg:p-8 text-center">
          <p className="text-sm text-white/90 leading-relaxed max-w-3xl mx-auto mb-4">
            Brand names are used only to indicate compatibility. We are an independent aftermarket manufacturer and are not affiliated with, endorsed by, or sponsored by these brand owners. Compatibility should be confirmed by model, frequency, IC/chip, and coding protocol before order.
          </p>
          <p className="text-xs text-white/50">
            Note: Some brands/models may require verification, sample testing, or custom development.
          </p>
        </div>
      </div>
    </section>
  );
}
