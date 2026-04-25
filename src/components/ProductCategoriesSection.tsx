'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { products } from '@/data/homepage';

export default function ProductCategoriesSection() {
  return (
    <section id="products" className="bg-[#F0F4F8] relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-[2px] bg-[#FF6B00]" />
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#FF6B00]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            Products
          </span>
        </div>

        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#020C1B]" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Featured Product
              <br />
              Categories
            </h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product, i) => (
            <div
              key={product.title}
              className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden card-hover group"
            >
              {/* Product image area */}
              <div className="h-52 bg-gradient-to-br from-[#020C1B] to-[#0B2545] relative overflow-hidden">
                <div className="absolute inset-0" style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
                  backgroundSize: '24px 24px',
                }} />
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="relative w-full h-full">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF6B00]/50 to-transparent" />
              </div>
              {/* Content */}
              <div className="p-6">
                <h3 className="text-[15px] font-bold text-[#0F172A] mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>{product.title}</h3>
                <p className="text-[13px] text-[#475569] leading-relaxed mb-5">{product.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#FF6B00] hover:text-[#E55E00] transition-colors group/link pointer-events-auto"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  onClick={(e) => e.preventDefault()}
                >
                  EXPLORE
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
