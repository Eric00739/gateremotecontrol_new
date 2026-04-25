import { Shield, AlertTriangle, FileSearch, FlaskConical, Package, FileCheck } from 'lucide-react';
import { riskCards } from '@/data/homepage';

const iconMap = [Shield, AlertTriangle, FileSearch, FlaskConical, Package, FileCheck];

export default function RiskControlSection() {
  return (
    <section className="bg-white relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-[2px] bg-[#FF6B00]" />
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#FF6B00]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            Risk Management
          </span>
        </div>

        <h2 className="text-3xl lg:text-4xl font-bold text-[#020C1B] mb-12 max-w-2xl" style={{ fontFamily: "'Outfit', sans-serif" }}>
          How We Reduce Legal &amp;
          <br />
          Compatibility Risk
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {riskCards.map((card, i) => {
            const Icon = iconMap[i];
            return (
              <div
                key={card.title}
                className="bg-[#F0F4F8] rounded-2xl p-6 border border-[#E2E8F0] card-hover group"
              >
                {/* Step number */}
                <div className="text-[10px] font-bold text-[#FF6B00] mb-3" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="w-11 h-11 bg-[#020C1B] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#FF6B00] transition-colors duration-300">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-[15px] font-bold text-[#0F172A] mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>{card.title}</h3>
                <p className="text-[13px] text-[#475569] leading-relaxed">{card.description}</p>
              </div>
            );
          })}
        </div>

        {/* Legal disclaimer */}
        <div className="bg-[#020C1B] rounded-2xl p-7 lg:p-9 relative overflow-hidden">
          {/* Subtle pattern */}
          <div className="absolute inset-0 tech-grid" />
          <div className="relative">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#FF6B00]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-[#FF6B00]" />
              </div>
              <div>
                <p className="text-sm text-white/80 leading-relaxed mb-4">
                  Brand names are used only to indicate compatibility. We are an independent aftermarket manufacturer and are not affiliated with, endorsed by, or sponsored by these brand owners. Compatibility should be confirmed by model, frequency, IC/chip, and coding protocol before order.
                </p>
                <p className="text-[11px] text-white/40" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  Note: Some brands/models may require verification, sample testing, or custom development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
