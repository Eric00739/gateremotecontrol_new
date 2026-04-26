import { basePath } from './homepage';

export type BlogPost = {
  title: string;
  category: string;
  excerpt: string;
  image: string;
  slug: string;
  featured: boolean;
  readTime: string;
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
export const popularGuides = [
  'rolling-code-vs-fixed-code-remotes',
  'what-buyers-should-send-before-rf-matching',
  'when-oem-remote-control-development-is-needed',
  'how-to-check-remote-frequency',
  'why-some-copied-remotes-lose-code',
  'how-to-prepare-samples-for-compatibility-testing',
];

export const blogPosts: BlogPost[] = [
  {
    title: 'How to Identify a Compatible Gate Remote',
    category: 'compatibility',
    excerpt: 'Step-by-step guide to identify models, chips, and protocols for gate operator remotes.',
    image: basePath + '/images/article-identify.jpg',
    slug: 'how-to-identify-a-compatible-gate-remote',
    featured: true,
    readTime: '5 min read',
  },
  {
    title: 'Rolling Code vs Fixed Code Remotes',
    category: 'rolling-code',
    excerpt: 'Understand the difference between rolling code and fixed code, and how it affects compatibility.',
    image: basePath + '/images/article-rolling-code.jpg',
    slug: 'rolling-code-vs-fixed-code-remotes',
    featured: false,
    readTime: '4 min read',
  },
  {
    title: 'What Buyers Should Send Before RF Matching',
    category: 'buyer-checklist',
    excerpt: 'Checklist of information and photos needed for faster remote compatibility matching.',
    image: basePath + '/images/article-checklist.jpg',
    slug: 'what-buyers-should-send-before-rf-matching',
    featured: false,
    readTime: '3 min read',
  },
  {
    title: 'When OEM Remote Control Development Is Needed',
    category: 'oem-odm',
    excerpt: 'Situations that require custom development and engineering support for RF solutions.',
    image: basePath + '/images/article-oem.jpg',
    slug: 'when-oem-remote-control-development-is-needed',
    featured: false,
    readTime: '6 min read',
  },
];
