'use client';

import Link from 'next/link';
import Image from 'next/image';
import { companyName, siteContact, siteLogoSmall, siteName } from '@/data/site';
import LeadModalTrigger from './LeadModalTrigger';
import { useDict, useLocale } from '@/i18n';
import BrandReferences from './BrandReferences';

export default function Footer() {
  const dict = useDict();
  const locale = useLocale();
  const factoryQualityLabel = dict.header.factoryQuality || `${dict.header.factory} & Quality`;
  const requestCatalogLabel = dict.footer.requestCatalog || 'Request Catalog';

  const exploreLinks = [
    { label: dict.footer.compatibility, href: `/${locale}/compatibility` },
    { label: dict.header.oemOdm, href: `/${locale}/oem-odm` },
    { label: factoryQualityLabel, href: `/${locale}/factory-quality` },
    { label: requestCatalogLabel, href: `/${locale}/request-catalog` },
    { label: dict.footer.resources, href: `/${locale}/blog` },
  ];

  return (
    <footer id="contact" className="bg-[#062748] text-[#F7FBFF] border-t border-[#123D63]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-7 lg:py-8">
        <div className="grid gap-6 md:grid-cols-[1.3fr_0.8fr_1fr] md:items-start">
          {/* Brand */}
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-white p-1.5">
                <Image src={siteLogoSmall} alt="" width={36} height={36} className="h-9 w-9 object-contain" />
              </div>
              <div className="leading-tight">
                <span className="text-[#F7FBFF] font-bold text-lg" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
                  {siteName}
                </span>
              </div>
            </div>

            <p lang="en" className="mb-2 text-sm font-semibold leading-relaxed text-[#F7FBFF]" data-company-identity>
              {companyName}
            </p>
            <p className="text-sm leading-relaxed text-[#C7D7E8] max-w-md">
              {dict.footer.description}
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="text-sm font-semibold text-[#F7FBFF] mb-3" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
              {dict.footer.company}
            </p>
            <nav className="grid grid-cols-2 gap-x-6 gap-y-2 md:grid-cols-1">
              {exploreLinks.map((link) => (
                <Link key={link.label} href={link.href} className="text-sm text-[#C7D7E8] hover:text-[#FF8A1F] transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold text-[#F7FBFF] mb-3" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
              {dict.footer.sendModelList}
            </p>
            <div className="space-y-2 text-sm text-[#C7D7E8]">
              <a href={`mailto:${siteContact.email}`} className="block break-words hover:text-[#FF8A1F] transition-colors">
                {siteContact.email}
              </a>
              <a href={`https://wa.me/${siteContact.whatsAppNumber}`} target="_blank" rel="noopener noreferrer" className="block hover:text-[#FF8A1F] transition-colors">
                WhatsApp: {siteContact.telephone}
              </a>
              <p className="text-xs leading-relaxed text-[#7F9AB7]">
                {siteContact.address}
              </p>
            </div>
            <LeadModalTrigger
              prefillType="compatibility"
              className="mt-4 inline-flex min-h-11 items-center justify-center rounded-lg bg-[#FF8A1F] px-5 py-2.5 text-sm font-bold text-[#062748] transition-colors hover:bg-[#F97316] btn-glow"
            >
              {dict.hero.modelDetailsCta}
            </LeadModalTrigger>
          </div>
        </div>

        <BrandReferences compact />

        <div className="mt-4 border-t border-[#123D63] pt-4 flex flex-col gap-2 text-xs text-[#7F9AB7] sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl leading-relaxed">
            {dict.footer.disclaimer}
          </p>
          <p className="shrink-0">
            &copy; {new Date().getFullYear()} {siteName}. {dict.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
