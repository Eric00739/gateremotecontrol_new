const footerLinks = {
  products: [
    { label: 'Replacement Remotes', href: '#' },
    { label: 'Universal Receivers', href: '#' },
    { label: 'Remote Duplicators', href: '#' },
    { label: 'Garage Door Controllers', href: '#' },
    { label: 'Accessories & Parts', href: '#' },
    { label: 'OEM Custom Solutions', href: '#' },
  ],
  compatibility: [
    { label: 'Brand Compatibility', href: '#' },
    { label: 'Frequency Guide', href: '#' },
    { label: 'Rolling Code vs Fixed Code', href: '#' },
    { label: 'IC / Chip Reference', href: '#' },
    { label: 'Verification Guide', href: '#' },
  ],
  resources: [
    { label: 'Articles', href: '#' },
    { label: 'Downloads', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Videos', href: '#' },
    { label: 'Glossary', href: '#' },
  ],
  company: [
    { label: 'About Us', href: '#' },
    { label: 'Factory', href: '#' },
    { label: 'Quality Control', href: '#' },
    { label: 'Certifications', href: '#' },
    { label: 'Careers', href: '#' },
  ],
};

const socialLinks = [
  { label: 'LinkedIn', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'YouTube', href: '#' },
  { label: 'WhatsApp', href: '#' },
  { label: 'Email', href: 'mailto:sales@gateremotesource.com' },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#071C33] text-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">GR</span>
              </div>
              <div>
                <div className="leading-tight">
                  <span className="text-white font-bold text-lg">Gate</span>
                  <span className="text-[#FF7A1A] font-bold text-lg">Remote</span>
                  <span className="text-white font-bold text-lg">Source</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              Independent aftermarket manufacturer of compatible replacement remotes, receivers, controllers, and RF solutions for gate, garage door, roller shutter, and access control systems.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/50 hover:text-[#FF7A1A] text-xs font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-2.5">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Compatibility</h4>
            <ul className="space-y-2.5">
              {footerLinks.compatibility.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter & Contact row */}
        <div className="mt-12 pt-8 border-t border-white/10 grid sm:grid-cols-2 gap-8">
          {/* Contact info */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Contact Us</h4>
            <div className="space-y-1.5 text-sm text-white/60">
              <p>sales@gateremotesource.com</p>
              <p>+86 755 1234 5678</p>
              <p>WhatsApp: +86 181 2365 4321</p>
              <p>Shenzhen, China</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Newsletter</h4>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#FF7A1A]"
              />
              <button
                type="submit"
                className="bg-[#FF7A1A] hover:bg-[#E86A0E] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-xs text-white/40 text-center mb-2">
            Brand names mentioned on this website are for compatibility reference only. All trademarks belong to their respective owners.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-xs text-white/40">
              &copy; 2024 GateRemoteSource. All rights reserved.
            </p>
            <div className="flex gap-4 text-xs text-white/40">
              <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white/70 transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-white/70 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
