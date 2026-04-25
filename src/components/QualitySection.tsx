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
    <section className="bg-[#071C33] relative overflow-hidden">
      {/* Subtle world map texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,.08) 0%, transparent 50%)`,
        }} />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Compliance &amp; Quality You Can Trust
            </h2>

            {/* Certification badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-sm font-semibold text-white"
                >
                  {cert}
                </span>
              ))}
            </div>

            <p className="text-sm text-white/70 leading-relaxed">
              Our quality process covers incoming materials, production inspection, function testing, aging tests, and outgoing quality control.
            </p>
          </div>

          {/* Right */}
          <div className="space-y-4">
            {qualityChecks.map((check) => (
              <div key={check} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#FF7A1A] flex-shrink-0" />
                <span className="text-sm text-white/90 font-medium">{check}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
