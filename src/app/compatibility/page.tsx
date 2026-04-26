import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Camera, Cpu, Radio, ShieldCheck } from 'lucide-react';
import LeadModalTrigger from '@/components/LeadModalTrigger';
import { compatibilityBrands } from '@/data/compatibility';
import { siteName } from '@/data/site';

const pageTitle = 'Brand Compatible Replacement Remotes | GateRemoteSource';
const pageDescription = 'Explore compatible replacement remote references for FAAC, Nice, BFT, DoorHan, CAME, LiftMaster and more. Wholesale model matching, sample testing, and OEM support.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: '/compatibility',
  },
  openGraph: {
    type: 'website',
    siteName,
    url: '/compatibility',
    title: pageTitle,
    description: pageDescription,
  },
};

const verificationItems = [
  { title: 'Remote Photos', description: 'Front, back, buttons, label, and shell details.', icon: Camera },
  { title: 'Frequency', description: 'Examples include 433.92 MHz, 868 MHz, 315 MHz, or label-based references.', icon: Radio },
  { title: 'Chip / PCB', description: 'Chip marking or PCB photo helps confirm coding protocol.', icon: Cpu },
  { title: 'Receiver Version', description: 'Receiver, opener, or motor label reduces mismatch risk.', icon: ShieldCheck },
];

export default function CompatibilityPage() {
  return (
    <div className="bg-[#F8FAFC] text-[#0F172A]">
      <section className="relative overflow-hidden bg-[#062748]">
        <div className="absolute inset-0 tech-grid" />
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-18 lg:py-24">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-[2px] bg-[#FF8A1F]" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#FF8A1F]" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
              Brand Compatibility
            </span>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-3xl lg:text-5xl font-bold text-[#F7FBFF] leading-tight mb-5" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
              Compatible Replacement Remote Guides
            </h1>
            <p className="text-[#C7D7E8] leading-relaxed max-w-2xl">
              Brand compatibility pages for buyers who need aftermarket gate and garage door remote matching before samples, wholesale orders, or OEM packaging.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <LeadModalTrigger
                prefillType="compatibility"
                className="btn-glow inline-flex items-center justify-center rounded-xl bg-[#FF8A1F] px-6 py-3 text-sm font-bold text-[#062748] transition-colors hover:bg-[#F97316]"
              >
                Send Compatibility Request
              </LeadModalTrigger>
              <Link href="/blog/what-buyers-should-send-before-rf-matching" className="inline-flex items-center gap-2 rounded-xl border border-[#2A587C] px-6 py-3 text-sm font-semibold text-[#C7D7E8] transition-colors hover:border-[#FF8A1F]/50 hover:text-[#F7FBFF]">
                Buyer checklist <ArrowRight className="w-4 h-4 text-[#FF8A1F]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-18">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-2xl lg:text-3xl font-bold mb-3" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
            Browse Brand References
          </h2>
          <p className="text-sm leading-relaxed text-[#64748B]">
            Start with the brand your customer is asking about, then verify model, frequency, receiver version, and protocol before confirming samples.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {compatibilityBrands.map((brand) => (
            <Link
              key={brand.slug}
              href={`/compatibility/${brand.slug}`}
              className="group block rounded-2xl border border-[#E2E8F0] bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-[#FF8A1F]/35 hover:shadow-lg hover:shadow-slate-200/70"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#FF8A1F]" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
                    Compatibility
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-[#0F172A]" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
                    {brand.name}
                  </h3>
                </div>
                <ArrowRight className="w-4 h-4 text-[#94A3B8] transition-transform group-hover:translate-x-1 group-hover:text-[#FF8A1F]" />
              </div>
              <p className="text-sm leading-relaxed text-[#64748B]">{brand.shortDescription}</p>
              <p className="mt-5 text-[11px] leading-relaxed text-[#94A3B8]" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
                {brand.buyerIntent}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white border-y border-[#E2E8F0]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#FF8A1F]" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
                Verification First
              </p>
              <h2 className="mt-3 text-2xl lg:text-3xl font-bold" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
                What Buyers Should Send
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#64748B]">
                Brand names help start the conversation, but final compatibility should be checked by technical details. This keeps sample testing faster and reduces wrong shipments.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {verificationItems.map((item) => (
                <div key={item.title} className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
                  <item.icon className="mb-4 h-5 w-5 text-[#FF8A1F]" />
                  <h3 className="text-sm font-bold text-[#0F172A]" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#64748B]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-2xl bg-[#062748] p-6 lg:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-xl font-bold text-[#F7FBFF]" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
                Need a model checked?
              </h2>
              <p className="mt-2 text-sm text-[#C7D7E8]">
                Send photos, model number, frequency, and target market. We will help confirm the next sample step.
              </p>
            </div>
            <LeadModalTrigger
              prefillType="compatibility"
              className="btn-glow inline-flex shrink-0 items-center justify-center rounded-xl bg-[#FF8A1F] px-6 py-3 text-sm font-bold text-[#062748] transition-colors hover:bg-[#F97316]"
            >
              Send Model Details
            </LeadModalTrigger>
          </div>
        </div>
      </section>
    </div>
  );
}
