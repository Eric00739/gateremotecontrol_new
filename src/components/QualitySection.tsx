import { CheckCircle } from 'lucide-react';

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
    <section className="bg-[#020C1B] relative overflow-hidden">
      {/* Technical grid */}
      <div className="absolute inset-0 tech-grid" />

      {/* Glowing accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B00] rounded-full opacity-[0.04] blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#06B6D4] rounded-full opacity-[0.03] blur-3xl" />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            {/* Section label */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[2px] bg-[#FF6B00]" />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#FF6B00]" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>
                Quality & Compliance
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
              Compliance &amp; Quality
              <br />
              You Can Trust
            </h2>

            {/* Certification badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="bg-white/5 border border-white/15 rounded-xl px-5 py-2.5 text-sm font-bold text-white hover:bg-white/10 hover:border-[#FF6B00]/30 transition-all cursor-default"
                  style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                >
                  {cert}
                </span>
              ))}
            </div>

            <p className="text-sm text-white/50 leading-relaxed max-w-md">
              Our quality process covers incoming materials, production inspection, function testing, aging tests, and outgoing quality control.
            </p>
          </div>

          {/* Right */}
          <div className="space-y-4">
            {qualityChecks.map((check, i) => (
              <div key={check} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-4 hover:bg-white/8 transition-colors group">
                <div className="w-8 h-8 bg-[#FF6B00]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF6B00]/30 transition-colors">
                  <CheckCircle className="w-4 h-4 text-[#FF6B00]" />
                </div>
                <span className="text-sm text-white/80 font-medium">{check}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
