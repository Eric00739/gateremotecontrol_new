export default function CtaSection() {
  return (
    <section className="bg-[#071C33]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Need Help Matching a Brand Remote Safely?
            </h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Send brand, model, frequency, PCB photo, or remote image. Our team will help verify compatibility.
            </p>
            <a
              href="#contact"
              className="inline-block bg-[#FF7A1A] hover:bg-[#E86A0E] text-white font-semibold px-8 py-3.5 rounded-lg transition-colors hover:shadow-lg hover:shadow-orange-500/20"
            >
              Get Compatibility Support
            </a>
          </div>

          {/* Right: Product image placeholder */}
          <div className="flex justify-center">
            <div className="w-full max-w-md h-64 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center">
              <span className="text-white/40 text-sm">Product Image Placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
