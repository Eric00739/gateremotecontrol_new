import { Shield, Globe, Package, Zap, Users } from 'lucide-react';

const trustItems = [
  { icon: Shield, label: 'Independent Aftermarket Supplier' },
  { icon: Zap, label: 'Multi-frequency Coverage' },
  { icon: Package, label: 'OEM / Private Label Support' },
  { icon: Globe, label: 'Global Shipping' },
  { icon: Users, label: 'Engineering Verification' },
];

export default function HeroSection() {
  return (
    <section className="relative bg-[#071C33] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
      </div>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#071C33] via-[#0B2545] to-[#103B73]" />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="animate-fade-in-up">
            <p className="text-[#FF7A1A] font-semibold text-sm uppercase tracking-wider mb-4">
              Wholesale | OEM | Private Label
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Compatible Replacement Remotes for Major Brands
            </h1>
            <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-xl">
              We supply aftermarket remotes, receivers, duplicators, and controllers that work with selected gate operators, garage doors, roller shutters, and access systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#products"
                className="bg-[#FF7A1A] hover:bg-[#E86A0E] text-white font-semibold px-7 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-orange-500/20"
              >
                Browse Products
              </a>
              <a
                href="#contact"
                className="border border-white/30 hover:border-white/60 text-white font-semibold px-7 py-3 rounded-lg transition-all"
              >
                Send Compatibility List
              </a>
            </div>
          </div>

          {/* Right: Product showcase */}
          <div className="grid grid-cols-2 gap-4">
            {/* Main large product card */}
            <div className="col-span-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <div className="w-full h-40 bg-gradient-to-br from-white/10 to-white/5 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white/40 text-sm">Product Showcase Image</span>
              </div>
              <p className="text-white/60 text-xs">
                Compatible remotes, receivers, duplicators &amp; controllers
              </p>
            </div>
            {/* Two smaller cards */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center">
              <div className="w-full h-24 bg-gradient-to-br from-white/10 to-white/5 rounded-xl flex items-center justify-center mb-3">
                <span className="text-white/40 text-xs">PCB Board</span>
              </div>
              <p className="text-white/60 text-xs">RF Modules</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center">
              <div className="w-full h-24 bg-gradient-to-br from-white/10 to-white/5 rounded-xl flex items-center justify-center mb-3">
                <span className="text-white/40 text-xs">Accessories</span>
              </div>
              <p className="text-white/60 text-xs">Antennas &amp; Parts</p>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-center gap-2.5 text-white/60">
                <item.icon className="w-4 h-4 text-[#FF7A1A] flex-shrink-0" />
                <span className="text-xs font-medium leading-snug">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
