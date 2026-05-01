export type BlogPostContentBlock =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'callout'; title?: string; text: string };

export type BlogPost = {
  title: string;
  category: string;
  excerpt: string;
  slug: string;
  author?: string;
  publishedAt?: string;
  updatedAt?: string;
  featured?: boolean;
  readTime?: string;
  image?: string;
  content: BlogPostContentBlock[];
};

export const blogCategories = [
  { key: 'all', label: 'All' },
  { key: 'compatibility', label: 'Compatibility' },
  { key: 'rolling-code', label: 'Rolling Code' },
  { key: 'oem-odm', label: 'OEM/ODM' },
  { key: 'buyer-checklist', label: 'Buyer Checklist' },
  { key: 'troubleshooting', label: 'Troubleshooting' },
];

/** Topic hubs with descriptions and article counts for display */
export const topicHubs = [
  {
    key: 'compatibility',
    label: 'Compatibility Guides',
    description: 'Identify remote models, frequencies, chips, and compatible replacement solutions.',
    icon: 'puzzle',
    articleCount: 0,
  },
  {
    key: 'rolling-code',
    label: 'Rolling Code & Fixed Code',
    description: 'Understand different coding systems and how they affect remote compatibility.',
    icon: 'shield',
    articleCount: 0,
  },
  {
    key: 'brand',
    label: 'Brand Compatibility',
    description: 'Compatibility references for FAAC, BFT, Nice, CAME, LiftMaster, DoorHan and more.',
    icon: 'layers',
    articleCount: 0,
  },
  {
    key: 'oem-odm',
    label: 'OEM / ODM Development',
    description: 'Custom remote control development, housing, PCB, frequency and protocol solutions.',
    icon: 'cpu',
    articleCount: 0,
  },
  {
    key: 'buyer-checklist',
    label: 'Buyer Checklist',
    description: 'What buyers should send before RF matching, sample testing, or custom development.',
    icon: 'clipboard',
    articleCount: 0,
  },
  {
    key: 'troubleshooting',
    label: 'Troubleshooting',
    description: 'Common remote matching problems and practical solutions.',
    icon: 'wrench',
    articleCount: 0,
  },
];

/** Brands for the Brand Compatibility Index */
export const compatibilityBrands = [
  { label: 'FAAC', href: '/compatibility/faac', description: 'XT, SLH, TNA, 868 MHz systems and more' },
  { label: 'BFT', href: '/compatibility/bft', description: 'MITTO, CLONIX, Deimos, and B-Lo series' },
  { label: 'Nice', href: '/compatibility/nice', description: 'FLO, SMILO, ONE, and Era series' },
  { label: 'CAME', href: '/compatibility/came', description: 'TOP, TWIN, and 433 MHz gate systems' },
  { label: 'LiftMaster', href: '/compatibility/liftmaster', description: 'Security+ and Security+ 2.0 series' },
  { label: 'DoorHan', href: '/compatibility/doorhan', description: 'Transmitter series and rolling code systems' },
  { label: 'Alutech', href: '/compatibility/alutech', description: 'AT-4N, TR-1000, and 433 MHz series' },
  { label: 'Beninca', href: '/compatibility/beninca', description: 'BULL, DASH, and 433 MHz gate systems' },
  { label: 'Genius', href: '/compatibility/genius', description: 'BRAVO, SPARK, and 433 MHz systems' },
  { label: 'Marantec', href: '/compatibility/marantec', description: 'DigiCode, Comfort, and 40 MHz series' },
];

/** Popular / evergreen guide slugs */
export const popularGuides: string[] = [];

export const blogPosts: BlogPost[] = [];
