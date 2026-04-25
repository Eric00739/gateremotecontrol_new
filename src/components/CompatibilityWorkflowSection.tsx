import { Camera, Radio, Cpu, Users, FlaskConical, Factory } from 'lucide-react';
import { workflowSteps } from '@/data/homepage';

const iconMap = [Camera, Radio, Cpu, Users, FlaskConical, Factory];

export default function CompatibilityWorkflowSection() {
  return (
    <section className="bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#071C33] mb-4">
            How Buyers Verify Compatibility Before Ordering
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {workflowSteps.map((step, i) => {
            const Icon = iconMap[i];
            return (
              <div key={step.step} className="relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#071C33] rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {step.step}
                    </div>
                    {i < workflowSteps.length - 1 && (
                      <div className="hidden lg:block absolute left-6 top-12 w-0.5 h-16 border-l-2 border-dashed border-[#E2E8F0]" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="w-4 h-4 text-[#FF7A1A]" />
                      <h3 className="text-sm font-semibold text-[#0F172A]">{step.title}</h3>
                    </div>
                    <p className="text-sm text-[#64748B] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
