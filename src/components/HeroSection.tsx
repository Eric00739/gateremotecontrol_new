import { Shield, Zap, Package, Globe, Users } from 'lucide-react';
import Image from 'next/image';
import { basePath } from '@/data/homepage';

const trustItems = [
  { icon: Shield, label: 'Independent Aftermarket Supplier' },
  { icon: Zap, label: 'Multi-frequency Coverage' },
  { icon: Package, label: 'OEM / Private Label Support' },
  { icon: Globe, label: 'Global Shipping' },
  { icon: Users, label: 'Engineering Verification' },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Deep background */}
      <div className="absolute inset-0 bg-[#0D1117]" />

      {/* Technical grid */}
      <div className="absolute inset-0 tech-grid" />

      {/* Radial glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F59E0B] rounded-full opacity-[0.03] blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#22D3EE] rounded-full opacity-[0.02] blur-[100px]" />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            {/* Amber subtitle */}
            <p className="animate-fade-in-up delay-100 text-[#F59E0B] font-bold text-lg mb-6 tracking-wide" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
              Wholesale &nbsp;|&nbsp; OEM &nbsp;|&nbsp; Private Label
            </p>

            <h1 className="animate-fade-in-up delay-200 text-3xl sm:text-4xl lg:text-[3.5rem] font-bold text-[#F0F6FC] leading-[1.1] mb-6" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
              Compatible Replacement
              <br />
              <span className="text-[#F59E0B]">Remotes</span> for Major
              <br />
              Brands
            </h1>

            <p className="animate-fade-in-up delay-300 text-base text-[#8B949E] leading-relaxed mb-10 max-w-lg">
              We supply aftermarket remotes, receivers, duplicators, and controllers that work with selected gate operators, garage doors, roller shutters, and access systems.
            </p>

            <div className="animate-fade-in-up delay-400 flex flex-wrap gap-4">
              <a
                href="#products"
                className="btn-glow bg-[#F59E0B] hover:bg-[#D97706] text-[#0D1117] font-bold px-8 py-3.5 rounded-xl transition-all hover:shadow-xl hover:shadow-amber-500/20 text-[14px]"
              >
                Browse Products
              </a>
              <a
                href="#contact"
                className="group border border-[#30363D] hover:border-[#F59E0B]/40 text-[#8B949E] hover:text-[#F0F6FC] font-medium px-8 py-3.5 rounded-xl transition-all text-[14px] flex items-center gap-2"
              >
                Send Compatibility List
                <span className="text-[#F59E0B] group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Right: Product showcase */}
          <div className="animate-slide-in-right delay-300">
            <div className="relative bg-[#161B22]/80 border border-[#21262D] rounded-2xl p-6 backdrop-blur-sm">
              <Image
                src={basePath + '/images/hero-products.png'}
                alt="Compatible replacement remotes, receivers, duplicators, and controllers"
                width={600}
                height={300}
                className="w-full object-contain"
              />
              <p className="text-[#484F58] text-[10px] tracking-widest mt-4 text-center" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
                COMPATIBLE REMOTES / RECEIVERS / DUPLICATORS / CONTROLLERS
              </p>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-20 pt-8 border-t border-[#21262D]">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {trustItems.map((item, i) => (
              <div key={item.label} className="flex items-center gap-3 animate-fade-in-up" style={{ animationDelay: `${0.5 + i * 0.1}s` }}>
                <div className="w-8 h-8 bg-[#F59E0B]/8 rounded-lg flex items-center justify-center flex-shrink-0 border border-[#F59E0B]/20">
                  <item.icon className="w-3.5 h-3.5 text-[#F59E0B]" />
                </div>
                <span className="text-[11px] font-medium text-[#8B949E] leading-snug">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
