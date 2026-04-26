'use client';

import Link from 'next/link';

const footerLinks = {
  products: [
    { label: 'Replacement Remotes', href: '/#products' },
    { label: 'Universal Receivers', href: '/#products' },
    { label: 'Remote Duplicators', href: '/#products' },
    { label: 'Garage Door Controllers', href: '/#products' },
    { label: 'Accessories & Parts', href: '/#products' },
    { label: 'OEM Custom Solutions', href: '/#oem-odm' },
  ],
  compatibility: [
    { label: 'Brand Compatibility', href: '/#compatibility' },
    { label: 'Frequency Guide', href: '/#compatibility' },
    { label: 'Rolling Code vs Fixed Code', href: '/blog/rolling-code-vs-fixed-code-remotes' },
    { label: 'IC / Chip Reference', href: '/#compatibility' },
    { label: 'Verification Guide', href: '/blog/what-buyers-should-send-before-rf-matching' },
  ],
  resources: [
    { label: 'Articles', href: '/blog' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Identify a Compatible Remote', href: '/blog/how-to-identify-a-compatible-gate-remote' },
    { label: 'Buyer Checklist', href: '/blog/what-buyers-should-send-before-rf-matching' },
  ],
  company: [
    { label: 'About Us', href: '/#contact' },
    { label: 'Factory', href: '/#factory' },
    { label: 'Quality Control', href: '/#contact' },
    { label: 'Contact', href: '/#contact' },
  ],
};

const socialLinks = [
  { label: 'LinkedIn', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'YouTube', href: '#' },
  { label: 'WhatsApp', href: 'https://wa.me/8615899648898' },
  { label: 'Email', href: 'mailto:sales@gateremotesource.com' },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#062748] text-[#F7FBFF] border-t border-[#123D63]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-[#FF8A1F] rounded-lg flex items-center justify-center">
                <span className="text-[#062748] font-bold text-sm" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>GR</span>
              </div>
              <div>
                <div className="leading-tight">
                  <span className="text-[#F7FBFF] font-bold text-lg" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>Gate</span>
                  <span className="text-[#FF8A1F] font-bold text-lg" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>Remote</span>
                  <span className="text-[#F7FBFF] font-bold text-lg" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>Source</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-[#C7D7E8] leading-relaxed mb-6">
              Independent aftermarket manufacturer of compatible replacement remotes, receivers, controllers, and RF solutions for gate, garage door, roller shutter, and access control systems.
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[#7F9AB7] hover:text-[#FF8A1F] text-xs font-medium transition-colors"
                  style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div>
            <h4 className="text-sm font-semibold text-[#F7FBFF] mb-4" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>Products</h4>
            <ul className="space-y-2.5">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-[#C7D7E8] hover:text-[#FF8A1F] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#F7FBFF] mb-4" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>Compatibility</h4>
            <ul className="space-y-2.5">
              {footerLinks.compatibility.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-[#C7D7E8] hover:text-[#FF8A1F] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#F7FBFF] mb-4" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>Resources</h4>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-[#C7D7E8] hover:text-[#FF8A1F] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#F7FBFF] mb-4" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-[#C7D7E8] hover:text-[#FF8A1F] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter & Contact row */}
        <div className="mt-12 pt-8 border-t border-[#123D63] grid sm:grid-cols-2 gap-8">
          {/* Contact info */}
          <div>
            <h4 className="text-sm font-semibold text-[#F7FBFF] mb-3" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>Contact Us</h4>
            <div className="space-y-1.5 text-sm text-[#C7D7E8]">
              <p>sales@gateremotesource.com</p>
              <p>WhatsApp: +86 158 9964 8898</p>
              <p className="text-xs text-[#7F9AB7] leading-relaxed">Room 102, Building 1, Jufu Garden,<br />No. 45 Changma Road, Changping Town,<br />Dongguan City, Guangdong Province, China</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-[#F7FBFF] mb-3" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>Newsletter</h4>
            <form className="flex gap-2 flex-col sm:flex-row" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-[#08345F] border border-[#123D63] rounded-lg px-4 py-2.5 text-sm text-[#F7FBFF] placeholder-[#7F9AB7] focus:outline-none focus:border-[#FF8A1F]/50"
                style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
              />
              <button
                type="submit"
                className="bg-[#FF8A1F] hover:bg-[#F97316] text-[#062748] text-sm font-bold px-5 py-2.5 rounded-lg transition-colors btn-glow"
                style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#123D63]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-xs text-[#7F9AB7] text-center mb-2">
            Brand names mentioned on this website are for compatibility reference only. All trademarks belong to their respective owners.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-xs text-[#7F9AB7]">
              &copy; {new Date().getFullYear()} GateRemoteSource. All rights reserved.
            </p>
            <div className="flex gap-4 text-xs text-[#7F9AB7]">
              <a href="#" className="hover:text-[#C7D7E8] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#C7D7E8] transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
