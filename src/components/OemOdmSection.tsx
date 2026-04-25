import { Palette, Radio, Box, LayoutGrid, Settings, Package, FileText, Factory } from 'lucide-react';
import { oemSteps } from '@/data/homepage';

const iconMap = [Palette, Radio, Box, LayoutGrid, Settings, Package, FileText, Factory];

export default function OemOdmSection() {
  return (
    <section id="oem-odm" className="bg-white relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-[2px] bg-[#FF6B00]" />
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#FF6B00]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            OEM / ODM
          </span>
        </div>

        <h2 className="text-3xl lg:text-4xl font-bold text-[#020C1B] mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
          Customization Process
        </h2>
        <p className="text-[#475569] mb-14 max-w-xl">
          From concept to mass production, we handle every step of your custom RF solution.
        </p>

        {/* Flow diagram */}
        <div className="relative">
          {/* Horizontal connecting line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[6%] right-[6%] h-[2px] bg-gradient-to-r from-[#FF6B00] via-[#E2E8F0] to-[#E2E8F0]" />

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-6">
            {oemSteps.map((step, i) => {
              const Icon = iconMap[i];
              return (
                <div key={step.step} className="text-center group">
                  <div className="w-16 h-16 mx-auto bg-[#F0F4F8] border-2 border-[#E2E8F0] rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#FF6B00] group-hover:border-[#FF6B00] group-hover:shadow-lg group-hover:shadow-orange-500/20 transition-all duration-300 relative z-10">
                    <Icon className="w-6 h-6 text-[#020C1B] group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-[10px] font-bold text-[#FF6B00] mb-1.5" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    STEP {step.step}
                  </div>
                  <h3 className="text-[14px] font-bold text-[#0F172A] mb-1.5" style={{ fontFamily: "'Outfit', sans-serif" }}>{step.title}</h3>
                  <p className="text-[12px] text-[#475569] leading-relaxed max-w-[180px] mx-auto">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
