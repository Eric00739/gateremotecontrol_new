export type BlogInlineLink = {
  text: string;
  href: string;
};

export type BlogPostContentBlock =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string; links?: BlogInlineLink[] }
  | { type: 'list'; items: string[] }
  | { type: 'callout'; title?: string; text: string }
  | { type: 'quote'; text: string }
  | { type: 'image'; src: string; alt: string; caption?: string };

export type BlogPostMeta = {
  title: string;
  seoTitle?: string;
  category: string;
  excerpt: string;
  slug: string;
  author?: string;
  publishedAt?: string;
  updatedAt?: string;
  featured?: boolean;
  readTime?: string;
  image?: string;
  relatedSlugs?: string[];
};

export const blogCategories = [
  { key: 'all', label: 'All' },
  { key: 'rf-engineering', label: 'RF Engineering' },
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
  'circuits-dont-act-good-enough-transmitter-modules',
  'rf-remote-control-concurrency-anti-collision',
  'why-universal-remote-cannot-copy',
];

export const blogPosts: BlogPostMeta[] = [
  {
    title: 'Same Shell, Same Product? The Hidden Downgrade in Electronics Manufacturing',
    seoTitle: 'RF Remote Quality: What the Shell Hides',
    category: 'oem-odm',
    excerpt:
      'Identical remote shells can hide different PCB materials, components, assembly quality, and testing. Learn what to check before choosing a supplier.',
    slug: 'same-shell-hidden-downgrade-remote-manufacturing-quality',
    author: 'Eric Huang',
    publishedAt: '2026-05-10',
    updatedAt: '2026-05-10',
    readTime: '10 min read',
    image: '/images/blog/same-shell-hidden-downgrade-remote-manufacturing-quality/hero.webp',
    relatedSlugs: [
      'rf-remote-wholesale-price-cost-drivers',
      '433mhz-remote-short-range-diagnostics',
      'build-your-own-rf-remote-control-beginner-guide',
    ],
  },
  {
    title: "Build Your Own RF Remote Control: A Beginner's Guide to Wireless Magic",
    seoTitle: 'Build a 433MHz RF Remote: Beginner Guide',
    category: 'rf-engineering',
    excerpt:
      'Build a beginner RF remote project with a transmitter, receiver, relay, power supply, and antenna. Follow the signal from a button press to relay control.',
    slug: 'build-your-own-rf-remote-control-beginner-guide',
    author: 'Eric Huang',
    publishedAt: '2026-05-10',
    updatedAt: '2026-05-10',
    readTime: '9 min read',
    image: '/images/blog/build-your-own-rf-remote-control-beginner-guide/hero.webp',
    relatedSlugs: [
      'rf-remote-range-real-world-test-data',
      '433mhz-remote-short-range-diagnostics',
      'garage-door-remote-cloning-security-guide',
    ],
  },
  {
    title: 'Why Pairing a Third-Party RF Remote to a Brand-Name Receiver Is Harder Than It Looks',
    seoTitle: 'Third-Party RF Remote Pairing Failures',
    category: 'compatibility',
    excerpt:
      'Pairing a third-party RF remote to a brand-name gate or garage receiver can fail at the frequency, modulation, rolling-code, hardware, firmware, or environment layer.',
    slug: 'third-party-rf-remote-brand-receiver-pairing',
    author: 'Eric Huang',
    publishedAt: '2026-05-10',
    updatedAt: '2026-05-10',
    readTime: '10 min read',
    image: '/images/blog/third-party-rf-remote-brand-receiver-pairing/hero.webp',
    relatedSlugs: [
      'why-universal-remote-cannot-copy',
      'garage-door-remote-cloning-security-guide',
      'rf-receiver-sensitivity-range-spec',
    ],
  },
  {
    title: 'Wi-Fi Switch Protocols Explained: Which One Actually Belongs in Your Smart Home?',
    seoTitle: 'Smart Switch Protocols: Wi-Fi, Matter and More',
    category: 'buyer-checklist',
    excerpt:
      'Smart switch protocol choice affects setup, reliability, scale, offline control, ecosystem compatibility, and long-term upgrade flexibility.',
    slug: 'wifi-switch-protocols-smart-home-guide',
    author: 'Eric Huang',
    publishedAt: '2026-05-10',
    updatedAt: '2026-05-10',
    readTime: '9 min read',
    image: '/images/blog/wifi-switch-protocols-smart-home-guide/hero.webp',
    relatedSlugs: [
      'rf-wifi-dual-mode-smart-switch',
      'exporting-wifi-switches-eu-ce-requirements',
      'rf-remote-controller-application-scenarios',
    ],
  },
  {
    title: 'RF Remote Range: 10 Meters, 30 Meters, or 100 Meters?',
    seoTitle: 'RF Remote Range Tests and 5 Improvements',
    category: 'rf-engineering',
    excerpt:
      'Compare open-field and indoor RF remote range. See how power, antennas, receiver sensitivity, walls, and interference affect distance and reliability.',
    slug: 'rf-remote-range-real-world-test-data',
    author: 'Eric Huang',
    publishedAt: '2026-05-10',
    updatedAt: '2026-05-10',
    readTime: '10 min read',
    image: '/images/blog/rf-remote-range-real-world-test-data/hero.webp',
    relatedSlugs: [
      'rf-receiver-sensitivity-range-spec',
      '433mhz-remote-short-range-diagnostics',
      'car-key-short-range-window-tint',
    ],
  },
  {
    title: 'Is Your Garage Door Actually Secure? A Clear-Eyed Guide to Remote Control Cloning',
    seoTitle: 'Garage Remote Cloning: Fixed vs Rolling Code',
    category: 'rolling-code',
    excerpt:
      'Understand garage door remote cloning, fixed code, and rolling code. Learn why replay attacks work on some systems and what proper rolling code protects.',
    slug: 'garage-door-remote-cloning-security-guide',
    author: 'Eric Huang',
    publishedAt: '2026-05-10',
    updatedAt: '2026-05-10',
    readTime: '9 min read',
    image: '/images/blog/garage-door-remote-cloning-security-guide/hero.webp',
    relatedSlugs: [
      'why-universal-remote-cannot-copy',
      '433mhz-remote-short-range-diagnostics',
      'rf-remote-controller-application-scenarios',
    ],
  },
  {
    title: "Stop Blaming the Battery: Your Car Key's Short Range Might Be the Window Tint",
    seoTitle: 'Car Key Short Range: Tint, Battery and EMI',
    category: 'troubleshooting',
    excerpt:
      'Diagnose short car key remote range by checking battery load, metallic window tint, interference, key cases, synchronization, and receiver antennas.',
    slug: 'car-key-short-range-window-tint',
    author: 'Eric Huang',
    publishedAt: '2026-05-10',
    updatedAt: '2026-05-10',
    readTime: '9 min read',
    image: '/images/blog/car-key-short-range-window-tint/hero.webp',
    relatedSlugs: [
      '433mhz-remote-short-range-diagnostics',
      'rf-receiver-sensitivity-range-spec',
      'cr2032-rf-remote-battery-life',
    ],
  },
  {
    title: 'Why Serious Smart Switches Are Moving to RF + Wi-Fi Dual-Mode',
    seoTitle: 'RF + Wi-Fi Dual-Mode Smart Switch Design Guide',
    category: 'rf-engineering',
    excerpt:
      'Explore RF + Wi-Fi smart switch design for local control during network failures and cloud automation, with practical reliability and integration tradeoffs.',
    slug: 'rf-wifi-dual-mode-smart-switch',
    author: 'Eric Huang',
    publishedAt: '2026-05-10',
    updatedAt: '2026-05-10',
    readTime: '10 min read',
    image: '/images/blog/rf-wifi-dual-mode-smart-switch/hero.webp',
    relatedSlugs: [
      'exporting-wifi-switches-eu-ce-requirements',
      'rf-remote-controller-application-scenarios',
      'rf-receiver-sensitivity-range-spec',
    ],
  },
  {
    title: "What Is Really Behind the Wholesale Price of an RF Remote?",
    seoTitle: 'RF Remote Wholesale Price: 4 Cost Drivers',
    category: 'buyer-checklist',
    excerpt:
      'Compare the four cost drivers behind RF remote wholesale prices: chipsets, materials, manufacturing control, and compliance. Look beyond identical shells.',
    slug: 'rf-remote-wholesale-price-cost-drivers',
    author: 'Eric Huang',
    publishedAt: '2026-05-10',
    updatedAt: '2026-05-10',
    readTime: '9 min read',
    image: '/images/blog/rf-remote-wholesale-price-cost-drivers/hero.webp',
    relatedSlugs: [
      '433mhz-remote-short-range-diagnostics',
      'rf-receiver-sensitivity-range-spec',
      'exporting-wifi-switches-eu-ce-requirements',
    ],
  },
  {
    title: 'Same Batch of 433MHz Remotes: One Opens Instantly, One Plays Dead',
    seoTitle: '433MHz Remote Range: Battery, Antenna and EMI',
    category: 'troubleshooting',
    excerpt:
      'Diagnose inconsistent 433MHz remote range with battery voltage under load, antenna placement, and interference checks before replacing components.',
    slug: '433mhz-remote-short-range-diagnostics',
    author: 'Eric Huang',
    publishedAt: '2026-05-10',
    updatedAt: '2026-05-10',
    readTime: '10 min read',
    image: '/images/blog/433mhz-remote-short-range-diagnostics/hero.webp',
    relatedSlugs: [
      'rf-receiver-sensitivity-range-spec',
      'cr2032-rf-remote-battery-life',
      'why-universal-remote-cannot-copy',
    ],
  },
  {
    title: 'Your Remote Control Has a Hearing Problem: How Receiver Sensitivity Decides RF Range',
    seoTitle: 'Receiver Sensitivity and RF Remote Range Specs',
    category: 'rf-engineering',
    excerpt:
      'Receiver sensitivity is the spec that tells you how weak a signal the receiver can still decode, and it often matters more for usable RF range than louder transmit power.',
    slug: 'rf-receiver-sensitivity-range-spec',
    author: 'Eric Huang',
    publishedAt: '2026-05-10',
    updatedAt: '2026-05-10',
    readTime: '9 min read',
    image: '/images/blog/rf-receiver-sensitivity-range-spec/hero.webp',
    relatedSlugs: [
      'rf-remote-control-concurrency-anti-collision',
      'cr2032-rf-remote-battery-life',
      'circuits-dont-act-good-enough-transmitter-modules',
    ],
  },
  {
    title: '10 Real-World Application Scenarios: How RF Remotes and Controllers Actually Deliver Wireless Control',
    seoTitle: '10 RF Remote and Controller Applications',
    category: 'buyer-checklist',
    excerpt:
      'Explore ten RF remote and controller applications. Match control logic, loads, installation conditions, interference, and service needs before selecting hardware.',
    slug: 'rf-remote-controller-application-scenarios',
    author: 'Eric Huang',
    publishedAt: '2026-05-10',
    updatedAt: '2026-05-10',
    readTime: '12 min read',
    image: '/images/blog/rf-remote-controller-application-scenarios/hero.webp',
    relatedSlugs: [
      'rf-remote-control-concurrency-anti-collision',
      'why-universal-remote-cannot-copy',
      'cr2032-rf-remote-battery-life',
    ],
  },
  {
    title: 'Exporting Wi-Fi Switches to the EU: What Does CE Actually Require?',
    seoTitle: 'EU CE Requirements for Wi-Fi Switches',
    category: 'buyer-checklist',
    excerpt:
      'Review EU CE requirements for Wi-Fi switches: RED, RoHS, technical files, labels, instructions, declarations of conformity, and economic operator obligations.',
    slug: 'exporting-wifi-switches-eu-ce-requirements',
    author: 'Eric Huang',
    publishedAt: '2026-05-10',
    updatedAt: '2026-05-10',
    readTime: '11 min read',
    image: '/images/blog/exporting-wifi-switches-eu-ce-requirements/hero.webp',
    relatedSlugs: [
      'oem-odm-hardware-future',
      'circuits-dont-act-good-enough-transmitter-modules',
      'rf-remote-control-concurrency-anti-collision',
    ],
  },
  {
    title: 'How Can a Single CR2032 Keep an RF Remote Running for Years?',
    seoTitle: 'CR2032 Battery Life in RF Remotes',
    category: 'rf-engineering',
    excerpt:
      'Learn how standby current, RF pulses, GPIO leakage, LEDs, and wake-up timing determine CR2032 battery life in an RF remote.',
    slug: 'cr2032-rf-remote-battery-life',
    author: 'Eric Huang',
    publishedAt: '2026-05-10',
    updatedAt: '2026-05-10',
    readTime: '12 min read',
    image: '/images/blog/cr2032-rf-remote-battery-life/hero.webp',
    relatedSlugs: [
      'circuits-dont-act-good-enough-transmitter-modules',
      'rf-remote-control-concurrency-anti-collision',
      'why-universal-remote-cannot-copy',
    ],
  },
  {
    title: 'Circuits Don\'t Act: Why I Hate "Good Enough" Transmitter Modules More and More',
    seoTitle: 'Why Cheap RF Transmitter Modules Fail',
    category: 'rf-engineering',
    excerpt:
      'A transmitter module is not reliable just because it can send a signal. Real quality depends on stability, clean output, tuning margin, and repeatable mass production.',
    slug: 'circuits-dont-act-good-enough-transmitter-modules',
    author: 'Eric Huang',
    publishedAt: '2026-05-01',
    updatedAt: '2026-05-02',
    readTime: '14 min read',
    featured: true,
    image: '/images/blog/circuits-dont-act/circuits-dont-act-cover.webp',
    relatedSlugs: ['rf-remote-control-concurrency-anti-collision', 'oem-odm-hardware-future'],
  },
  {
    title: 'OEM or ODM? You Think You\'re Choosing a Production Method, But You\'re Actually Choosing Your Future',
    seoTitle: 'OEM vs ODM: Which Path Should You Choose',
    category: 'oem-odm',
    excerpt:
      'Compare OEM and ODM for hardware projects, including product control, certification, supplier dependence, and long-term development choices.',
    slug: 'oem-odm-hardware-future',
    author: 'Eric Huang',
    publishedAt: '2026-05-01',
    updatedAt: '2026-05-02',
    readTime: '7 min read',
    image: '/images/blog/oem-odm-hardware-future/oem-vs-odm-path.webp',
    relatedSlugs: ['circuits-dont-act-good-enough-transmitter-modules', 'rf-remote-control-concurrency-anti-collision'],
  },
  {
    title: 'RF Remote Concurrency and Collision Avoidance: From the Physical Layer to the Protocol Layer',
    seoTitle: 'RF Remote Concurrency and Collision Avoidance',
    category: 'rf-engineering',
    excerpt:
      'Understand RF remote collisions on shared channels, including interference, timing, hidden terminals, acknowledgments, and recovery strategies.',
    slug: 'rf-remote-control-concurrency-anti-collision',
    author: 'Eric Huang',
    publishedAt: '2026-05-10',
    updatedAt: '2026-05-10',
    readTime: '13 min read',
    image: '/images/blog/rf-remote-control-concurrency-anti-collision/collision-scenarios.webp',
    relatedSlugs: ['circuits-dont-act-good-enough-transmitter-modules', 'oem-odm-hardware-future'],
  },
  {
    title: "Why Clone Remotes Show Success But the Door Still Won't Open",
    seoTitle: 'Why Clone Remotes Show Success But Still Fail',
    category: 'troubleshooting',
    excerpt:
      'Troubleshoot clone remotes that report success but fail to open the door. Check frequency, code type, rolling-code security, proprietary protocols, and RF hardware.',
    slug: 'why-universal-remote-cannot-copy',
    author: 'Eric Huang',
    publishedAt: '2026-05-10',
    updatedAt: '2026-05-10',
    readTime: '11 min read',
    image: '/images/blog/why-universal-remote-cannot-copy/clone-remotes-show-success.webp',
    relatedSlugs: ['rf-remote-control-concurrency-anti-collision', 'circuits-dont-act-good-enough-transmitter-modules'],
  },
];
