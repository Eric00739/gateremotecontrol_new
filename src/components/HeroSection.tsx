import { Shield, Globe, Package, Zap, Users } from 'lucide-react';
import Image from 'next/image';

const trustItems = [
  { icon: Shield, label: 'Independent Aftermarket Supplier' },
  { icon: Zap, label: 'Multi-frequency Coverage' },
  { icon: Package, label: 'OEM / Private Label Support' },
  { icon: Globe, label: 'Global Shipping' },
  { icon: Users, label: 'Engineering Verification' },
];

// RF Waveform SVG component
function RFWaveform() {
  return (
    <svg className="absolute bottom-0 left-0 right-0 opacity-20" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ height: '120px' }}>
      <path d="M0,60 Q150,10 300,60 T600,60 T900,60 T1200,60" fill="none" stroke="rgba(255,107,0,0.3)" strokeWidth="1.5" />
      <path d="M0,60 Q150,30 300,60 T600,60 T900,60 T1200,60" fill="none" stroke="rgba(34,211,238,0.2)" strokeWidth="1" />
      <path d="M0,60 Q75,45 150,60 T300,60 T450,60 T600,60 T750,60 T900,60 T1050,60 T1200,60" fill="none" stroke="rgba(255,107,0,0.15)" strokeWidth="0.75" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Deep navy background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020C1B] via-[#071C33] to-[#0B2545]" />

      {/* Technical grid overlay */}
      <div className="absolute inset-0 tech-grid" />

      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay" />

      {/* Waveform sweep animation */}
      <div className="waveform-sweep" />

      {/* RF waveform decoration at bottom */}
      <RFWaveform />

      {/* Glowing accent circle */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#FF6B00] rounded-full opacity-[0.03] blur-3xl" />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-[#06B6D4] rounded-full opacity-[0.03] blur-3xl" />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            {/* Badge */}
            <div className="animate-fade-in-up delay-100 inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
              <span className="signal-dot" />
              <span className="text-[11px] text-white/80 font-semibold tracking-widest uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Wholesale | OEM | Private Label
              </span>
            </div>

            <h1 className="animate-fade-in-up delay-200 text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] mb-6">
              Compatible Replacement
              <br />
              <span className="text-[#FF6B00]">Remotes</span> for Major
              <br />
              Brands
            </h1>

            <p className="animate-fade-in-up delay-300 text-base text-white/60 leading-relaxed mb-8 max-w-lg">
              We supply aftermarket remotes, receivers, duplicators, and controllers that work with selected gate operators, garage doors, roller shutters, and access systems.
            </p>

            <div className="animate-fade-in-up delay-400 flex flex-wrap gap-4">
              <a
                href="#products"
                className="btn-glow bg-[#FF6B00] hover:bg-[#E55E00] text-white font-semibold px-8 py-3.5 rounded-xl transition-all hover:shadow-xl hover:shadow-orange-500/20 text-[14px]"
              >
                Browse Products
              </a>
              <a
                href="#contact"
                className="group border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-3.5 rounded-xl transition-all text-[14px] flex items-center gap-2"
              >
                Send Compatibility List
                <span className="text-[#FF6B00] group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Right: Product showcase */}
          <div className="animate-slide-in-right delay-300">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5">
              <div className="w-full aspect-[2/1] relative rounded-xl overflow-hidden mb-4 border border-white/5">
                <Image
                  src="/images/hero-products.png"
                  alt="Compatible replacement remotes, receivers, duplicators, and controllers"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-white/50 text-[11px] tracking-wide" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                COMPATIBLE REMOTES / RECEIVERS / DUPLICATORS / CONTROLLERS
              </p>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-20 pt-8 border-t border-white/10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {trustItems.map((item, i) => (
              <div key={item.label} className={`flex items-center gap-2.5 animate-fade-in-up`} style={{ animationDelay: `${0.5 + i * 0.1}s` }}>
                <div className="w-8 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-3.5 h-3.5 text-[#FF6B00]" />
                </div>
                <span className="text-[11px] font-medium text-white/60 leading-snug">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
