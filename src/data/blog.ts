import { illustratedBlogPhotos } from './generated-visuals';

export type BlogInlineLink = {
  text: string;
  href: string;
};

export type BlogPostContentBlock =
  | { type: 'heading'; text: string; id?: string }
  | { type: 'paragraph'; text: string; links?: BlogInlineLink[] }
  | { type: 'list'; items: string[] }
  | { type: 'callout'; title?: string; text: string }
  | { type: 'quote'; text: string }
  | { type: 'image'; src: string; alt: string; caption?: string; srcSet?: string };

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
  imageAlt?: string;
  thumbnail?: string;
  imageSrcSet?: string;
  imageCaption?: string;
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
    title: 'Why Rolling-Code Remotes Resist Simple Copying',
    seoTitle: 'Rolling-Code Remote Security: Counters, Sync Windows and Replay',
    category: 'rolling-code',
    excerpt: 'Learn why an accepted rolling code normally cannot be reused, how synchronization windows work, and where simple copying protection ends.',
    slug: 'why-rolling-code-remotes-resist-copying',
    author: 'Eric Huang',
    publishedAt: '2026-10-06',
    readTime: '7 min read',
    image: '/images/blog/why-rolling-code-remotes-resist-copying/authentication-and-freshness.webp',
    thumbnail: '/images/blog/why-rolling-code-remotes-resist-copying/authentication-and-freshness-320.webp',
    imageAlt: 'Diagram: Authentication and freshness checks before an RF receiver authorizes a control action',
    imageSrcSet: '/images/blog/why-rolling-code-remotes-resist-copying/authentication-and-freshness-320.webp 320w, /images/blog/why-rolling-code-remotes-resist-copying/authentication-and-freshness-640.webp 640w, /images/blog/why-rolling-code-remotes-resist-copying/authentication-and-freshness.webp 1280w',
    imageCaption: 'A changing counter needs authentication and correct receiver state.',
    relatedSlugs: [
      'garage-door-remote-cloning-security-guide',
      'rf-remote-compatibility-beginner-guide',
      'why-universal-remote-cannot-copy',
    ],
  },
  {
    title: '10 Parameters to Confirm Before Choosing an RF Receiver Module',
    seoTitle: 'RF Receiver Module Selection: 10 Parameters to Check',
    category: 'buyer-checklist',
    excerpt: 'Compare receiver specifications under matching test conditions, then check the antenna, power supply, protocol and production requirements of the finished product.',
    slug: 'rf-receiver-module-selection-parameters',
    author: 'Eric Huang',
    publishedAt: '2026-10-06',
    readTime: '9 min read',
    image: '/images/blog/rf-receiver-module-selection-parameters/receiver-selection.webp',
    thumbnail: '/images/blog/rf-receiver-module-selection-parameters/receiver-selection-320.webp',
    imageAlt: 'Illustration: Two generic RF receiver modules, a remote and a disconnected antenna on a gray workbench',
    imageSrcSet: '/images/blog/rf-receiver-module-selection-parameters/receiver-selection-320.webp 320w, /images/blog/rf-receiver-module-selection-parameters/receiver-selection-640.webp 640w, /images/blog/rf-receiver-module-selection-parameters/receiver-selection.webp 1280w',
    imageCaption: 'Compare the complete configuration rather than one headline specification.',
    relatedSlugs: [
      'rf-receiver-sensitivity-range-spec',
      'wireless-receiver-controller-factory-testing',
      'rf-remote-control-concurrency-anti-collision',
    ],
  },
  {
    title: 'New to RF Remotes? Start with the System, Not the Frequency',
    seoTitle: 'RF Remote Compatibility, Coding and Pairing: A Beginner Guide',
    category: 'compatibility',
    excerpt: 'Use the installed system, radio link, receiver identity checks and enrollment process to turn a frequency-only inquiry into a compatibility decision you can verify.',
    slug: 'rf-remote-compatibility-beginner-guide',
    author: 'Eric Huang',
    publishedAt: '2026-10-06',
    readTime: '10 min read',
    image: '/images/blog/rf-remote-compatibility-beginner-guide/system-map.webp',
    thumbnail: '/images/blog/rf-remote-compatibility-beginner-guide/system-map-320.webp',
    imageAlt: 'Diagram: Four layers of RF remote compatibility—application, radio, identity and delivery',
    imageSrcSet: '/images/blog/rf-remote-compatibility-beginner-guide/system-map-320.webp 320w, /images/blog/rf-remote-compatibility-beginner-guide/system-map-640.webp 640w, /images/blog/rf-remote-compatibility-beginner-guide/system-map.webp 1280w',
    imageCaption: 'A frequency match covers only part of the radio layer.',
    relatedSlugs: [
      'third-party-rf-remote-brand-receiver-pairing',
      'one-to-many-many-to-one-rf-remote-control',
      'why-universal-remote-cannot-copy',
    ],
  },
  {
    title: 'RF Remote Won’t Pair? A Field Troubleshooting Checklist',
    seoTitle: 'RF Remote Pairing Troubleshooting: A Field Checklist',
    category: 'troubleshooting',
    excerpt: 'Check battery condition, radio compatibility, enrollment steps and receiver behavior before replacing a remote or clearing its memory.',
    slug: 'rf-remote-pairing-field-checklist',
    author: 'Eric Huang',
    publishedAt: '2026-10-06',
    readTime: '7 min read',
    image: '/images/blog/rf-remote-pairing-field-checklist/pairing-workbench.webp',
    thumbnail: '/images/blog/rf-remote-pairing-field-checklist/pairing-workbench-320.webp',
    imageAlt: 'Illustration: Generic RF remote, disconnected receiver controller and battery-check tools on a gray workbench',
    imageSrcSet: '/images/blog/rf-remote-pairing-field-checklist/pairing-workbench-320.webp 320w, /images/blog/rf-remote-pairing-field-checklist/pairing-workbench-640.webp 640w, /images/blog/rf-remote-pairing-field-checklist/pairing-workbench.webp 1280w',
    imageCaption: 'Work through the transmitter, radio link and receiver in order.',
    relatedSlugs: [
      'third-party-rf-remote-brand-receiver-pairing',
      'rf-remote-buttons-not-working',
      '433mhz-remote-short-range-diagnostics',
    ],
  },
  {
    title: 'One Remote, Many Doors: How Shared RF Control Works',
    seoTitle: 'One-to-Many and Many-to-One RF Remote Control',
    category: 'rf-engineering',
    excerpt: 'Understand how receivers recognize enrolled remotes, map buttons to groups, and manage shared access without confusing capacity with radio reliability.',
    slug: 'one-to-many-many-to-one-rf-remote-control',
    author: 'Eric Huang',
    publishedAt: '2026-10-06',
    readTime: '7 min read',
    image: '/images/blog/one-to-many-many-to-one-rf-remote-control/one-remote-many-receivers.webp',
    thumbnail: '/images/blog/one-to-many-many-to-one-rf-remote-control/one-remote-many-receivers-320.webp',
    imageAlt: 'Illustration: One four-button RF remote beside three separate receiver controllers on a workbench',
    imageSrcSet: '/images/blog/one-to-many-many-to-one-rf-remote-control/one-remote-many-receivers-320.webp 320w, /images/blog/one-to-many-many-to-one-rf-remote-control/one-remote-many-receivers-640.webp 640w, /images/blog/one-to-many-many-to-one-rf-remote-control/one-remote-many-receivers.webp 1280w',
    imageCaption: 'One transmitter can be enrolled in several compatible receivers.',
    relatedSlugs: [
      'different-codes-rf-remote-collisions',
      'third-party-rf-remote-brand-receiver-pairing',
      '433mhz-remote-short-range-diagnostics',
    ],
  },
  {
    title: 'Wireless Receiver Controller Factory Tests: Sensitivity, Functions and Burn-In',
    seoTitle: 'Wireless Receiver Controller Factory Testing Guide',
    category: 'rf-engineering',
    excerpt: 'Separate receiver sensitivity from production screening, verify every defined control function, and set clear powered-test and retest conditions before release.',
    slug: 'wireless-receiver-controller-factory-testing',
    author: 'Eric Huang',
    publishedAt: '2026-10-06',
    updatedAt: '2026-10-06',
    readTime: '7 min read',
    image: '/images/blog/wireless-receiver-controller-factory-testing/receiver-controller-test-bench.webp',
    thumbnail: '/images/blog/wireless-receiver-controller-factory-testing/receiver-controller-test-bench-320.webp',
    imageAlt: 'Illustration: A generic wireless receiver controller, remote and unpowered test instruments',
    imageSrcSet: '/images/blog/wireless-receiver-controller-factory-testing/receiver-controller-test-bench-320.webp 320w, /images/blog/wireless-receiver-controller-factory-testing/receiver-controller-test-bench-640.webp 640w, /images/blog/wireless-receiver-controller-factory-testing/receiver-controller-test-bench.webp 1280w',
    imageCaption: 'Reception, control functions and extended powered operation require separate checks.',
    relatedSlugs: [
      'rf-receiver-sensitivity-range-spec',
      'same-shell-hidden-downgrade-remote-manufacturing-quality',
      'different-codes-rf-remote-collisions',
    ],
  },
  {
    title: 'Different Codes, Same Channel: Why RF Remotes Can Collide',
    seoTitle: 'RF Remote Collisions: Why Different Codes Do Not Help',
    category: 'rf-engineering',
    excerpt:
      'Separate remote identity from radio access, then check how overlapping frames, airtime, repeat timing and two-way protocols affect command delivery.',
    slug: 'different-codes-rf-remote-collisions',
    author: 'Eric Huang',
    publishedAt: '2026-09-11',
    updatedAt: '2026-10-06',
    readTime: '8 min read',
    image: '/images/blog/different-codes-rf-remote-collisions/two-remotes-one-channel.webp',
    thumbnail: '/images/blog/different-codes-rf-remote-collisions/two-remotes-one-channel-320.webp',
    imageAlt: 'Illustration: Two distinct RF remotes beside one receiver board on a workbench',
    imageSrcSet: '/images/blog/different-codes-rf-remote-collisions/two-remotes-one-channel-320.webp 320w, /images/blog/different-codes-rf-remote-collisions/two-remotes-one-channel-640.webp 640w, /images/blog/different-codes-rf-remote-collisions/two-remotes-one-channel.webp 1280w',
    imageCaption: 'Separate remote identities can use the same receiving channel.',
    relatedSlugs: [
      'rf-remote-control-concurrency-anti-collision',
      'rf-receiver-sensitivity-range-spec',
      'garage-door-remote-cloning-security-guide',
    ],
  },
  {
    title: 'RF Remote Buttons Not Working: Check the Battery, Buttons and MCU',
    seoTitle: 'RF Remote Buttons Not Working: Troubleshooting Order',
    category: 'troubleshooting',
    excerpt:
      'Trace a missed command from battery voltage under load through button contacts, MCU operation and the RF link before replacing parts.',
    slug: 'rf-remote-buttons-not-working',
    author: 'Eric Huang',
    publishedAt: '2026-10-06',
    updatedAt: '2026-10-06',
    readTime: '10 min read',
    image: '/images/blog/rf-remote-buttons-not-working/battery-and-signal-chain.webp',
    thumbnail: '/images/blog/rf-remote-buttons-not-working/battery-and-signal-chain-320.webp',
    imageAlt: 'Illustration: An opened RF remote, coin cell, meter and separate receiver board on a workbench',
    imageSrcSet: '/images/blog/rf-remote-buttons-not-working/battery-and-signal-chain-320.webp 320w, /images/blog/rf-remote-buttons-not-working/battery-and-signal-chain-640.webp 640w, /images/blog/rf-remote-buttons-not-working/battery-and-signal-chain.webp 1280w',
    imageCaption: 'The battery, button assembly, control electronics and receiver are separate points to check.',
    relatedSlugs: [
      'cr2032-rf-remote-battery-life',
      '433mhz-remote-short-range-diagnostics',
      'third-party-rf-remote-brand-receiver-pairing',
    ],
  },
  {
    title: 'Comparing Gate Remotes with the Same Housing',
    seoTitle: 'Gate Remote Quality: What to Verify',
    category: 'oem-odm',
    excerpt:
      'Compare board materials, button assemblies, RF performance and production checks when similar-looking gate remotes carry different quotes.',
    slug: 'same-shell-hidden-downgrade-remote-manufacturing-quality',
    author: 'Eric Huang',
    publishedAt: '2026-05-10',
    updatedAt: '2026-10-05',
    readTime: '7 min read',
    ...illustratedBlogPhotos['same-shell-hidden-downgrade-remote-manufacturing-quality'],
    relatedSlugs: [
      'rf-remote-wholesale-price-cost-drivers',
      '433mhz-remote-short-range-diagnostics',
      'build-your-own-rf-remote-control-beginner-guide',
    ],
  },
  {
    title: 'Build a Low-Voltage RF Remote with Matched Modules',
    seoTitle: 'DIY RF Remote: Receiver, Decoder and Relay Wiring',
    category: 'rf-engineering',
    excerpt:
      'Choose a matched transmitter and decoded receiver, check the control interface, and test one low-voltage load before adding more functions.',
    slug: 'build-your-own-rf-remote-control-beginner-guide',
    author: 'Eric Huang',
    publishedAt: '2026-05-10',
    updatedAt: '2026-10-05',
    readTime: '7 min read',
    ...illustratedBlogPhotos['build-your-own-rf-remote-control-beginner-guide'],
    relatedSlugs: [
      'rf-remote-range-real-world-test-data',
      '433mhz-remote-short-range-diagnostics',
      'garage-door-remote-cloning-security-guide',
    ],
  },
  {
    title: 'Why a Replacement Remote Will Not Pair',
    seoTitle: 'Replacement Remote Pairing: Compatibility Checks',
    category: 'compatibility',
    excerpt:
      'Separate failed enrollment from poor range, then check the receiver variant, code family, programming method and tested replacement model.',
    slug: 'third-party-rf-remote-brand-receiver-pairing',
    author: 'Eric Huang',
    publishedAt: '2026-05-10',
    updatedAt: '2026-10-05',
    readTime: '6 min read',
    ...illustratedBlogPhotos['third-party-rf-remote-brand-receiver-pairing'],
    relatedSlugs: [
      'why-universal-remote-cannot-copy',
      'garage-door-remote-cloning-security-guide',
      'rf-receiver-sensitivity-range-spec',
    ],
  },
  {
    title: 'Smart Switch Protocols: What Changes in the Installation?',
    seoTitle: 'Smart Switch Protocols: Wi-Fi, Matter, Thread and Zigbee',
    category: 'buyer-checklist',
    excerpt:
      'Compare smart switch radios, application standards and platforms, then check the controller, wiring and offline functions each installation needs.',
    slug: 'wifi-switch-protocols-smart-home-guide',
    author: 'Eric Huang',
    publishedAt: '2026-05-10',
    updatedAt: '2026-10-05',
    readTime: '7 min read',
    ...illustratedBlogPhotos['wifi-switch-protocols-smart-home-guide'],
    relatedSlugs: [
      'rf-wifi-dual-mode-smart-switch',
      'exporting-wifi-switches-eu-ce-requirements',
      'rf-remote-controller-application-scenarios',
    ],
  },
  {
    title: 'How to Test RF Remote Range with Your Receiver',
    seoTitle: 'RF Remote Range: Test Conditions and Diagnosis',
    category: 'rf-engineering',
    excerpt:
      'Define the required operating locations, count missed commands, and separate antenna, supply and interference problems before comparing range claims.',
    slug: 'rf-remote-range-real-world-test-data',
    author: 'Eric Huang',
    publishedAt: '2026-05-10',
    updatedAt: '2026-10-05',
    readTime: '7 min read',
    ...illustratedBlogPhotos['rf-remote-range-real-world-test-data'],
    relatedSlugs: [
      'rf-receiver-sensitivity-range-spec',
      '433mhz-remote-short-range-diagnostics',
      'car-key-short-range-window-tint',
    ],
  },
  {
    title: 'Garage Remote Security: Replay and Lost Remotes',
    seoTitle: 'Garage Remote Security: Fixed and Rolling Code',
    category: 'rolling-code',
    excerpt:
      'Check what fixed and rolling code protect, why chip markings are incomplete evidence, and how the installed receiver handles a lost remote.',
    slug: 'garage-door-remote-cloning-security-guide',
    author: 'Eric Huang',
    publishedAt: '2026-05-10',
    updatedAt: '2026-10-05',
    readTime: '6 min read',
    ...illustratedBlogPhotos['garage-door-remote-cloning-security-guide'],
    relatedSlugs: [
      'why-universal-remote-cannot-copy',
      '433mhz-remote-short-range-diagnostics',
      'rf-remote-controller-application-scenarios',
    ],
  },
  {
    title: 'Car Key Short Range: Check the Battery before the Window Tint',
    seoTitle: 'Car Key Short Range: Battery, Interference and Window Tint',
    category: 'troubleshooting',
    excerpt:
      'Use repeatable comparisons to separate key-battery faults, interference, shielding and vehicle receiver problems without assuming that window tint is the cause.',
    slug: 'car-key-short-range-window-tint',
    author: 'Eric Huang',
    publishedAt: '2026-05-10',
    updatedAt: '2026-10-05',
    readTime: '7 min read',
    ...illustratedBlogPhotos['car-key-short-range-window-tint'],
    relatedSlugs: [
      '433mhz-remote-short-range-diagnostics',
      'rf-receiver-sensitivity-range-spec',
      'cr2032-rf-remote-battery-life',
    ],
  },
  {
    title: 'RF + Wi-Fi Smart Switches: Design the Local Control Path',
    seoTitle: 'RF + Wi-Fi Smart Switch Design and Failure Checks',
    category: 'rf-engineering',
    excerpt:
      'Assess RF + Wi-Fi switches by local control dependencies, receiver performance, command handling, security and installed load behavior.',
    slug: 'rf-wifi-dual-mode-smart-switch',
    author: 'Eric Huang',
    publishedAt: '2026-05-10',
    updatedAt: '2026-10-05',
    readTime: '8 min read',
    ...illustratedBlogPhotos['rf-wifi-dual-mode-smart-switch'],
    relatedSlugs: [
      'exporting-wifi-switches-eu-ce-requirements',
      'rf-remote-controller-application-scenarios',
      'rf-receiver-sensitivity-range-spec',
    ],
  },
  {
    title: 'What to Compare in an RF Remote Wholesale Quote',
    seoTitle: 'RF Remote Wholesale Price: Compare the Scope',
    category: 'buyer-checklist',
    excerpt:
      'Separate electronics, parts, production checks and market documentation from one-time charges before comparing RF remote unit prices.',
    slug: 'rf-remote-wholesale-price-cost-drivers',
    author: 'Eric Huang',
    publishedAt: '2026-05-10',
    updatedAt: '2026-10-05',
    readTime: '7 min read',
    ...illustratedBlogPhotos['rf-remote-wholesale-price-cost-drivers'],
    relatedSlugs: [
      '433mhz-remote-short-range-diagnostics',
      'rf-receiver-sensitivity-range-spec',
      'exporting-wifi-switches-eu-ce-requirements',
    ],
  },
  {
    title: 'Diagnose Short Range on a 433 MHz Remote',
    seoTitle: '433 MHz Remote: Battery, Antenna and Interference Checks',
    category: 'troubleshooting',
    excerpt:
      'Use controlled substitutions and supply, antenna and decoding checks to find why a remote works at one installation but fails at another.',
    slug: '433mhz-remote-short-range-diagnostics',
    author: 'Eric Huang',
    publishedAt: '2026-05-10',
    updatedAt: '2026-10-05',
    readTime: '7 min read',
    ...illustratedBlogPhotos['433mhz-remote-short-range-diagnostics'],
    relatedSlugs: [
      'rf-receiver-sensitivity-range-spec',
      'cr2032-rf-remote-battery-life',
      'why-universal-remote-cannot-copy',
    ],
  },
  {
    title: 'Receiver Sensitivity: Compare the Test Conditions',
    seoTitle: 'RF Receiver Sensitivity: dBm, Error Rate and Range',
    category: 'rf-engineering',
    excerpt:
      'Read a sensitivity figure with its waveform, bandwidth and error target, then test whether receiver performance is limiting the installed link.',
    slug: 'rf-receiver-sensitivity-range-spec',
    author: 'Eric Huang',
    publishedAt: '2026-05-10',
    updatedAt: '2026-10-05',
    readTime: '7 min read',
    ...illustratedBlogPhotos['rf-receiver-sensitivity-range-spec'],
    relatedSlugs: [
      'rf-remote-control-concurrency-anti-collision',
      'cr2032-rf-remote-battery-life',
      'circuits-dont-act-good-enough-transmitter-modules',
    ],
  },
  {
    title: '10 RF Remote-Control Applications and Their Controller Requirements',
    seoTitle: '10 RF Remote-Control Applications: Loads and Control Logic',
    category: 'buyer-checklist',
    excerpt:
      'Match an RF command path to gates, lighting, motors, pumps and existing equipment while retaining the required interlocks, limits and equipment controls.',
    slug: 'rf-remote-controller-application-scenarios',
    author: 'Eric Huang',
    publishedAt: '2026-05-10',
    updatedAt: '2026-10-05',
    readTime: '8 min read',
    ...illustratedBlogPhotos['rf-remote-controller-application-scenarios'],
    relatedSlugs: [
      'rf-remote-control-concurrency-anti-collision',
      'why-universal-remote-cannot-copy',
      'cr2032-rf-remote-battery-life',
    ],
  },
  {
    title: 'EU CE Requirements for Wi-Fi Switches: Product, Evidence and Responsibility',
    seoTitle: 'EU Wi-Fi Switch CE: RED, RoHS and Cybersecurity',
    category: 'buyer-checklist',
    excerpt:
      'Identify the EU rules for the actual Wi-Fi switch, including RED safety and EMC, RoHS, documentation and the current RED-to-CRA cybersecurity timeline.',
    slug: 'exporting-wifi-switches-eu-ce-requirements',
    author: 'Eric Huang',
    publishedAt: '2026-05-10',
    updatedAt: '2026-10-05',
    readTime: '9 min read',
    ...illustratedBlogPhotos['exporting-wifi-switches-eu-ce-requirements'],
    relatedSlugs: [
      'oem-odm-hardware-future',
      'circuits-dont-act-good-enough-transmitter-modules',
      'rf-remote-control-concurrency-anti-collision',
    ],
  },
  {
    title: 'CR2032 Remote Battery Life: Charge and Pulse Voltage',
    seoTitle: 'CR2032 RF Remote Battery Life: Current and Pulse Load',
    category: 'rf-engineering',
    excerpt:
      'Estimate charge from standby and complete commands, then test whether the cell stays above the radio’s operating voltage during a burst.',
    slug: 'cr2032-rf-remote-battery-life',
    author: 'Eric Huang',
    publishedAt: '2026-05-10',
    updatedAt: '2026-10-05',
    readTime: '9 min read',
    ...illustratedBlogPhotos['cr2032-rf-remote-battery-life'],
    relatedSlugs: [
      'circuits-dont-act-good-enough-transmitter-modules',
      'rf-remote-control-concurrency-anti-collision',
      'why-universal-remote-cannot-copy',
    ],
  },
  {
    title: 'RF Transmitter Modules: Check Output and Repeatability',
    seoTitle: 'RF Transmitter Quality: Frequency, Output and Variation',
    category: 'rf-engineering',
    excerpt:
      'Compare carrier accuracy, matching, unwanted emissions and sample variation under the conditions the finished remote must meet.',
    slug: 'circuits-dont-act-good-enough-transmitter-modules',
    author: 'Eric Huang',
    publishedAt: '2026-05-01',
    updatedAt: '2026-10-05',
    readTime: '10 min read',
    featured: true,
    ...illustratedBlogPhotos['circuits-dont-act-good-enough-transmitter-modules'],
    relatedSlugs: ['rf-remote-control-concurrency-anti-collision', 'oem-odm-hardware-future'],
  },
  {
    title: 'OEM or ODM for RF Remotes: Define the Scope',
    seoTitle: 'OEM vs ODM RF Remotes: Design and Delivery Scope',
    category: 'oem-odm',
    excerpt:
      'Compare who designs, who owns the results, how changes are approved and what evidence is delivered before choosing an OEM or ODM arrangement.',
    slug: 'oem-odm-hardware-future',
    author: 'Eric Huang',
    publishedAt: '2026-05-01',
    updatedAt: '2026-10-05',
    readTime: '6 min read',
    ...illustratedBlogPhotos['oem-odm-hardware-future'],
    relatedSlugs: ['circuits-dont-act-good-enough-transmitter-modules', 'rf-remote-control-concurrency-anti-collision'],
  },
  {
    title: 'RF Remote Collisions: Check the Hardware and Protocol',
    seoTitle: 'RF Remote Collisions: One-Way Repeats, CCA and ACKs',
    category: 'rf-engineering',
    excerpt:
      'Separate one-way repetition from receive-capable channel sensing and two-way acknowledgments, then test command overlap and duplicate handling.',
    slug: 'rf-remote-control-concurrency-anti-collision',
    author: 'Eric Huang',
    publishedAt: '2026-05-10',
    updatedAt: '2026-10-05',
    readTime: '7 min read',
    ...illustratedBlogPhotos['rf-remote-control-concurrency-anti-collision'],
    relatedSlugs: ['different-codes-rf-remote-collisions', 'circuits-dont-act-good-enough-transmitter-modules', 'oem-odm-hardware-future'],
  },
  {
    title: 'Why a Copy Remote Reports Success but Does Not Work',
    seoTitle: 'Copy Remote Success but No Response: What to Check',
    category: 'troubleshooting',
    excerpt:
      'Separate signal learning, receiver enrollment and range problems before choosing a copy remote, a dedicated replacement or an assessed receiver upgrade.',
    slug: 'why-universal-remote-cannot-copy',
    author: 'Eric Huang',
    publishedAt: '2026-05-10',
    updatedAt: '2026-10-05',
    readTime: '7 min read',
    ...illustratedBlogPhotos['why-universal-remote-cannot-copy'],
    relatedSlugs: ['rf-remote-control-concurrency-anti-collision', 'circuits-dont-act-good-enough-transmitter-modules'],
  },
];
