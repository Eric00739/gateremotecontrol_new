export const oemPage = {
  path: '/oem-odm',
  metaTitle: 'OEM / ODM RF Remote Development | GateRemoteSource',
  metaDescription:
    'Private-label RF remote development, packaging, manual, sample testing, and protocol matching support for wholesale buyers.',
  eyebrow: 'OEM / ODM',
  title: 'Private-Label RF Remote Development',
  subtitle:
    'Discuss logo, packaging, manual and technical options for your RF remote project. Share the target market, system requirements and quantity to review the scope and sample requirements.',
  primaryCta: 'Discuss OEM Project',
  secondaryCta: 'Request Wholesale Catalog',
  supportTitle: 'What can be customized',
  supportHeading: 'Branding, Packaging & Technical Options',
  supportSubtitle:
    'Start with the product and changes you need. We’ll review the scope before discussing samples or production.',
  highlights: [
    'Logo, label, packaging and manual options for your brand.',
    'Review frequency, housing, button layout and PCB requirements for the selected product.',
    'Discuss packaging language and product information for your sales channels.',
  ],
  workflowLabel: 'Customization Options',
  detailTitle: 'Options to Review for Your Project',
  detailSubtitle:
    'Choose the options relevant to your product. Confirm the scope, sample checks and production requirements together.',
};

export const factoryQualityPage = {
  path: '/factory-quality',
  metaTitle: 'Quality Verification Process | GateRemoteSource',
  metaDescription:
    'Sample verification, RF testing, packaging inspection, and export documentation workflow for compatible remote orders.',
  eyebrow: 'Quality & Verification',
  title: 'Quality Checks Before Bulk Orders',
  subtitle:
    'Define what needs to be checked for your product, receiver and target market. Confirm sample test conditions and which supporting records are available before ordering.',
  primaryCta: 'Start an Inquiry',
  secondaryCta: 'Request Wholesale Catalog',
  processLabel: 'Verification workflow',
  processTitle: 'Checks to Agree Before Ordering',
  processSubtitle:
    'Discuss the required checks and available supporting records for your product and market.',
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
  metaTitle: 'Request Wholesale Catalog | GateRemoteSource',
  metaDescription:
    'Request a wholesale catalog for compatible remotes, receivers, and RF solutions. Start with product category, target country, and estimated quantity.',
  eyebrow: 'Wholesale Catalog',
  title: 'Request a Wholesale Catalog',
  subtitle:
    'Tell us the product category, market and quantity to discuss relevant options, specifications and sample requirements. Model details can follow if a replacement match is needed.',
  primaryCta: 'Request Wholesale Catalog',
  secondaryCta: 'Browse Brand References',
  cardNote: 'Start with your category, market, and quantity.',
  requirementTitle: 'What to send first',
  requirementHeading: 'Start with your purchasing needs.',
  requirementSubtitle:
    'A few basic details help us suggest relevant options. Model and frequency details are optional for the first inquiry.',
  requirements: [
    {
      title: 'Product Category',
      description: 'Replacement remotes, receivers, code-learning remotes, controllers, aftermarket car remotes, or an OEM project.',
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
  scopeLabel: 'Product Options',
  scopeTitle: 'Product Options for Your Market',
  scopeItems: [
    'Compatible replacement remote options',
    'External and plug-in receiver options',
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
