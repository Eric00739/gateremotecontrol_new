export const oemPage = {
  path: '/oem-odm',
  metaTitle: 'OEM / ODM RF Remote Development | GateRemoteSource',
  metaDescription:
    'Private-label RF remote development, packaging, manual, sample testing, and protocol matching support for wholesale buyers.',
  eyebrow: 'OEM / ODM',
  title: 'Private-Label RF Remote Development',
  subtitle:
    'Build a controlled product line around verified frequency, protocol, packaging, and market requirements instead of public brand-style catalog claims.',
  primaryCta: 'Discuss OEM Project',
  secondaryCta: 'Request Catalog Access',
  supportTitle: 'What can be customized',
  supportHeading: 'Build around your market, not public product copying.',
  supportSubtitle:
    'The work starts after model matching, sample requirements, and target market details are clear.',
  highlights: [
    'Private-label logo, packaging, label, and manual support',
    'Frequency, PCB, button layout, and protocol tuning for target markets',
    'Neutral presentation for distributors who need safer wholesale supply',
  ],
  workflowLabel: 'Controlled workflow',
  detailTitle: 'From matching request to controlled production',
  detailSubtitle:
    'Each project is scoped around compatibility evidence, sample testing, and export-ready production details.',
};

export const factoryQualityPage = {
  path: '/factory-quality',
  metaTitle: 'Quality Verification Process | GateRemoteSource',
  metaDescription:
    'Sample verification, RF testing, packaging inspection, and export documentation workflow for compatible remote orders.',
  eyebrow: 'Quality & Verification',
  title: 'Quality Checks Before Bulk Orders',
  subtitle:
    'Review how an RF remote order can be verified through samples, functional checks, packaging review, and shipment preparation.',
  primaryCta: 'Send Model for Verification',
  secondaryCta: 'Request Wholesale Catalog',
  processLabel: 'Verification workflow',
  processTitle: 'Quality checks buyers can request',
  processSubtitle:
    'Confirm the required checks and available supporting records with sales before placing an order.',
  checks: [
    'Incoming material and PCB inspection',
    'Frequency and signal range testing',
    'Protocol compatibility sample checks',
    'Packaging, label, and manual verification',
    'Export document and shipment preparation',
    'Batch feedback before repeat production',
  ],
  facilityLabel: 'Facility evidence',
  facilityTitle: 'Visible process, controlled claims.',
};

export const catalogPage = {
  path: '/request-catalog',
  metaTitle: 'Request Wholesale Compatibility Catalog | GateRemoteSource',
  metaDescription:
    'Request a wholesale catalog for compatible remotes, receivers, and RF solutions. Start with product category, target country, and estimated quantity.',
  eyebrow: 'Wholesale Catalog',
  title: 'Request a Wholesale Compatibility Catalog',
  subtitle:
    'Tell us what you need, where you sell, and your estimated quantity. You can start without a model or frequency; technical matching follows before samples or an order.',
  primaryCta: 'Request Wholesale Catalog',
  secondaryCta: 'Check Supported Brands',
  cardNote: 'Start with your category, market, and quantity.',
  requirementTitle: 'What to send first',
  requirementHeading: 'Start with your purchasing needs.',
  requirementSubtitle:
    'A few basic details help us suggest relevant options. Model and frequency details are optional for the first inquiry.',
  requirements: [
    {
      title: 'Product Category',
      description: 'Replacement remotes, receivers, duplicators, controllers, accessories, or an OEM project.',
    },
    {
      title: 'Target Country / Market',
      description: 'Where you will sell or install the products, and your preferred packaging language.',
    },
    {
      title: 'Estimated Quantity',
      description: 'Your sample or wholesale quantity range. It is fine if the quantity is not decided yet.',
    },
    {
      title: 'Technical Details (optional)',
      description: 'Brand, model, frequency, or system description if known. Attach photos in WhatsApp or email; we can check the details together.',
    },
  ],
  scopeLabel: 'Private scope',
  scopeTitle: 'What the private catalog can cover',
  scopeItems: [
    'Compatible replacement remote options',
    'Universal receivers and controller solutions',
    'Private-label packaging and manual options',
    'Sample testing plan before bulk production',
  ],
};

export const homepageCapabilities = [
  {
    title: 'Compatibility References',
    description: 'Public brand and model references that guide buyers toward verification before ordering.',
    href: '/compatibility',
  },
  {
    title: 'OEM / ODM Development',
    description: 'Private-label RF projects built around frequency, protocol, packaging, and sample testing.',
    href: oemPage.path,
  },
  {
    title: 'Factory & Quality Evidence',
    description: 'Production, RF testing, packaging, and export process details for wholesale buyers.',
    href: factoryQualityPage.path,
  },
  {
    title: 'Request Wholesale Catalog',
    description: 'Start with product category, target market, and estimated quantity; technical details can follow.',
    href: catalogPage.path,
  },
];
