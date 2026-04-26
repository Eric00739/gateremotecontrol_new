'use client';

import Link from 'next/link';
import LeadModalTrigger from './LeadModalTrigger';

const exploreLinks = [
  { label: 'Products', href: '/#products' },
  { label: 'Compatibility', href: '/compatibility' },
  { label: 'OEM/ODM', href: '/#oem-odm' },
  { label: 'Factory', href: '/#factory' },
  { label: 'Blog', href: '/blog' },
];

const compatibilityBrands = ['FAAC', 'Nice', 'BFT', 'DoorHan', 'CAME', 'LiftMaster', 'more'];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#062748] text-[#F7FBFF] border-t border-[#123D63]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="grid gap-9 lg:grid-cols-[1.45fr_0.7fr_0.9fr] lg:items-start">
          {/* Brand */}
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-[#FF8A1F] rounded-lg flex items-center justify-center">
                <span className="text-[#062748] font-bold text-sm" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
                  GR
                </span>
              </div>
              <div className="leading-tight">
                <span className="text-[#F7FBFF] font-bold text-lg" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
                  Gate
                </span>
                <span className="text-[#FF8A1F] font-bold text-lg" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
                  Remote
                </span>
                <span className="text-[#F7FBFF] font-bold text-lg" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
                  Source
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-[#C7D7E8] max-w-md">
              Aftermarket remote controls for gate and garage door systems. Wholesale supply, model matching, and OEM customization.
            </p>

            <div className="mt-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FF8A1F]" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
                Compatibility references
              </p>
              <p className="mt-2 text-xs leading-relaxed text-[#7F9AB7]">
                {compatibilityBrands.join(' / ')}
              </p>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-sm font-semibold text-[#F7FBFF] mb-4" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
              Explore
            </h4>
            <nav className="grid grid-cols-2 gap-x-6 gap-y-2 lg:grid-cols-1">
              {exploreLinks.map((link) => (
                <Link key={link.label} href={link.href} className="text-sm text-[#C7D7E8] hover:text-[#FF8A1F] transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-[#F7FBFF] mb-4" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
              Send your model list
            </h4>
            <div className="space-y-2 text-sm text-[#C7D7E8]">
              <a href="mailto:sales@gateremotesource.com" className="block hover:text-[#FF8A1F] transition-colors">
                sales@gateremotesource.com
              </a>
              <a href="https://wa.me/8615899648898" target="_blank" rel="noopener noreferrer" className="block hover:text-[#FF8A1F] transition-colors">
                WhatsApp: +86 158 9964 8898
              </a>
              <p className="text-xs leading-relaxed text-[#7F9AB7]">
                Dongguan, Guangdong, China
              </p>
            </div>
            <LeadModalTrigger
              prefillType="quote"
              className="mt-5 inline-flex items-center justify-center rounded-lg bg-[#FF8A1F] px-5 py-2.5 text-sm font-bold text-[#062748] transition-colors hover:bg-[#F97316] btn-glow"
            >
              Send Inquiry
            </LeadModalTrigger>
          </div>
        </div>

        <div className="mt-9 border-t border-[#123D63] pt-5 flex flex-col gap-3 text-xs text-[#7F9AB7] sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl leading-relaxed">
            Brand names are used for compatibility reference only. All trademarks belong to their respective owners.
          </p>
          <p className="shrink-0">
            &copy; {new Date().getFullYear()} GateRemoteSource
          </p>
        </div>
      </div>
    </footer>
  );
}
