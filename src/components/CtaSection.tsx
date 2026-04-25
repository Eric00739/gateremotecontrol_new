import Image from 'next/image';

export default function CtaSection() {
  return (
    <section className="bg-[#020C1B] relative overflow-hidden">
      {/* Technical grid */}
      <div className="absolute inset-0 tech-grid" />

      {/* Glowing accent */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-[#FF6B00] rounded-full opacity-[0.04] blur-3xl" />

      {/* RF waveform decoration */}
      <svg className="absolute bottom-0 left-0 right-0 opacity-10" viewBox="0 0 1200 80" preserveAspectRatio="none" style={{ height: '80px' }}>
        <path d="M0,40 Q150,10 300,40 T600,40 T900,40 T1200,40" fill="none" stroke="rgba(255,107,0,0.5)" strokeWidth="1.5" />
        <path d="M0,40 Q75,25 150,40 T300,40 T450,40 T600,40 T750,40 T900,40 T1050,40 T1200,40" fill="none" stroke="rgba(34,211,238,0.3)" strokeWidth="1" />
      </svg>

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-[#FF6B00]" />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#FF6B00]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Get Started
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Need Help Matching
              <br />
              a Brand Remote
              <span className="text-[#FF6B00]"> Safely?</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-8 max-w-md">
              Send brand, model, frequency, PCB photo, or remote image. Our team will help verify compatibility.
            </p>
            <a
              href="#contact"
              className="btn-glow inline-block bg-[#FF6B00] hover:bg-[#E55E00] text-white font-semibold px-10 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-orange-500/20 text-[14px]"
            >
              Get Compatibility Support
            </a>
          </div>

          {/* Right: Product image */}
          <div className="flex justify-center">
            <div className="w-full max-w-md aspect-[4/3] bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center relative overflow-hidden">
              <Image
                src="/images/product-remotes.png"
                alt="Compatible replacement remotes"
                fill
                className="object-contain p-8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
