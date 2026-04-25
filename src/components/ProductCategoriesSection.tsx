import { ArrowRight } from 'lucide-react';
import { products } from '@/data/homepage';

export default function ProductCategoriesSection() {
  return (
    <section id="products" className="bg-[#F6F8FB]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#071C33] mb-4">
            Featured Product Categories
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.title}
              className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="h-48 bg-gradient-to-br from-[#E2E8F0] to-[#F6F8FB] flex items-center justify-center">
                <span className="text-[#64748B] text-sm">
                  {product.title}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-base font-semibold text-[#0F172A] mb-2">{product.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed mb-4">{product.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#FF7A1A] hover:text-[#E86A0E] transition-colors"
                >
                  Explore <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
