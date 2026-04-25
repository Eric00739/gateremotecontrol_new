import { Check } from 'lucide-react';

const qualityChecks = [
  '100% Function Test on All Units',
  'Incoming Material QC Inspection',
  'Aging Test for Stability Verification',
  'Outgoing Quality Inspection',
  'Export-Standard Packaging',
];

const certifications = ['CE', 'FCC', 'RoHS', 'ISO 9001'];

export default function QualitySection() {
  return (
    <section className="bg-[#0D1117] relative overflow-hidden">
      {/* Technical grid */}
      <div className="absolute inset-0 tech-grid" />

      {/* Glowing accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F59E0B] rounded-full opacity-[0.03] blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#22D3EE] rounded-full opacity-[0.02] blur-[80px]" />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            {/* Section label */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#F59E0B]" />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#F59E0B]" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>
                Quality &amp; Compliance
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-[#F0F6FC] mb-8" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
              Compliance &amp; Quality
              <br />
              You Can Trust
            </h2>

            {/* Certification badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              {certifications.map((cert) => (
                <div key={cert} className="bg-[#161B22] border border-[#21262D] rounded-xl px-5 py-3 text-center hover:bg-[#F59E0B]/10 hover:border-[#F59E0B]/30 transition-all cursor-default">
                  <span className="text-sm font-bold text-[#F0F6FC] block" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>
                    {cert}
                  </span>
                  {cert === 'CE' && <span className="text-[9px] text-[#484F58] block mt-0.5">Certified</span>}
                  {cert === 'FCC' && <span className="text-[9px] text-[#484F58] block mt-0.5">Compliant</span>}
                  {cert === 'RoHS' && <span className="text-[9px] text-[#484F58] block mt-0.5">Compliant</span>}
                  {cert === 'ISO 9001' && <span className="text-[9px] text-[#484F58] block mt-0.5">Certified</span>}
                </div>
              ))}
            </div>

            <p className="text-sm text-[#8B949E] leading-relaxed max-w-md">
              Our quality process covers incoming materials, production inspection, function testing, aging tests, and outgoing quality control.
            </p>
          </div>

          {/* Right - checklist with amber checkmarks */}
          <div className="space-y-4">
            {qualityChecks.map((check) => (
              <div key={check} className="flex items-center gap-3 group">
                <div className="w-5 h-5 rounded-full bg-[#F59E0B] flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-500/20">
                  <Check className="w-3 h-3 text-[#0D1117]" strokeWidth={3} />
                </div>
                <span className="text-sm text-[#8B949E] group-hover:text-[#F0F6FC] transition-colors font-medium">{check}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
