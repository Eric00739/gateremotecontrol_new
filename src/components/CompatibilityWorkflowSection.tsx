import { Camera, Radio, Cpu, Users, FlaskConical, Factory } from 'lucide-react';
import { workflowSteps } from '@/data/homepage';

const iconMap = [Camera, Radio, Cpu, Users, FlaskConical, Factory];

export default function CompatibilityWorkflowSection() {
  return (
    <section className="bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-[2px] bg-[#FF6B00]" />
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#FF6B00]" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>
            Verification Process
          </span>
        </div>

        <h2 className="text-3xl lg:text-4xl font-bold text-[#020C1B] mb-4 max-w-2xl" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
          How Buyers Verify
          <br />
          Compatibility Before Ordering
        </h2>
        <p className="text-[#475569] mb-14 max-w-xl">
          A systematic 6-step process to ensure every compatible solution matches your system requirements.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {workflowSteps.map((step, i) => {
            const Icon = iconMap[i];
            return (
              <div key={step.step} className="relative group">
                {/* Step number badge */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#020C1B] rounded-xl flex items-center justify-center group-hover:bg-[#FF6B00] transition-colors duration-300">
                      <span className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>
                        {String(step.step).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-4 h-4 text-[#FF6B00]" />
                      <h3 className="text-[14px] font-bold text-[#0F172A]" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>{step.title}</h3>
                    </div>
                    <p className="text-[13px] text-[#475569] leading-relaxed">{step.description}</p>
                  </div>
                </div>
                {/* Connection line (desktop only) */}
                {i < workflowSteps.length - 1 && i % 3 !== 2 && (
                  <div className="hidden lg:block absolute top-6 -right-4 w-8 border-t-2 border-dashed border-[#E2E8F0]" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
