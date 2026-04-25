import { Palette, Radio, Box, LayoutGrid, Settings, Package, FileText, Factory } from 'lucide-react';
import { oemSteps } from '@/data/homepage';

const iconMap = [Palette, Radio, Box, LayoutGrid, Settings, Package, FileText, Factory];

export default function OemOdmSection() {
  return (
    <section id="oem-odm" className="bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#071C33] mb-4">
            OEM / ODM Customization Process
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {oemSteps.map((step, i) => {
            const Icon = iconMap[i];
            return (
              <div key={step.step} className="text-center group">
                <div className="w-14 h-14 mx-auto bg-[#071C33] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#FF7A1A] transition-colors">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-xs font-semibold text-[#FF7A1A] mb-1">Step {step.step}</div>
                <h3 className="text-sm font-semibold text-[#0F172A] mb-1">{step.title}</h3>
                <p className="text-xs text-[#64748B] leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
