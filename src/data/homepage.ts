export const basePath = '';

export const stats = [
  { value: '~1,000', label: 'SKU Range' },
  { value: 'Multi', label: 'Market Support' },
  { value: '24-48h', label: 'Sample Lead Time' },
  { value: 'Mainstream', label: 'Brand Systems' },
  { value: 'OEM', label: 'Logo / Packaging' },
];

export const compatibilityRows = [
  {
    brand: 'FAAC',
    model: 'XT2',
    frequency: '433.92 MHz',
    codeType: 'Rolling Code',
    solution: 'Available',
    sampleTest: 'Recommended',
  },
  {
    brand: 'BFT',
    model: 'MITTO 2',
    frequency: '433.92 MHz',
    codeType: 'Rolling Code',
    solution: 'Available',
    sampleTest: 'Yes',
  },
  {
    brand: 'Nice',
    model: 'FLO2R-S',
    frequency: '433.92 MHz',
    codeType: 'Rolling Code',
    solution: 'Available',
    sampleTest: 'Yes',
  },
  {
    brand: 'LiftMaster',
    model: '893MAX',
    frequency: 'To Confirm',
    codeType: 'Rolling Code',
    solution: 'To Confirm',
    sampleTest: 'Yes',
  },
];

export const riskCards = [
  {
    title: 'Identify the System',
    description: 'Start with the original remote and receiver details to narrow down replacement options.',
  },
  {
    title: 'Independent Aftermarket Supply',
    description: 'Brand names identify compatibility references. Confirm the product and supplier details for your order.',
  },
  {
    title: 'Review the Technical Match',
    description: 'Check the model, receiver and market version; add frequency or PCB details when needed.',
  },
  {
    title: 'Agree Sample Checks',
    description: 'Agree the receiver, pairing procedure and test conditions before evaluating samples.',
  },
  {
    title: 'Confirm Private-Label Options',
    description: 'Review logo, packaging, label and manual requirements for the selected product.',
  },
  {
    title: 'Request Product Documentation',
    description: 'Tell us which documents your market requires so we can confirm what is available for the selected item.',
  },
];

export const products = [
  {
    title: 'Compatible Replacement Remotes',
    description: 'Wide range of remotes for rolling code, fixed code, and multi-frequency systems.',
    image: basePath + '/images/product-remotes.png',
    specs: [
      { label: 'Frequency', value: '433.92 MHz / 868 MHz' },
      { label: 'Code Type', value: 'Rolling / Fixed / Learning' },
      { label: 'Battery', value: 'CR2032 / 12V 23A' },
      { label: 'MOQ', value: '100 pcs' },
      { label: 'OEM', value: 'Logo / Packaging' },
    ],
  },
  {
    title: 'Universal Receivers',
    description: 'External and plug-in receivers for multi-brand compatibility and system upgrades.',
    image: basePath + '/images/product-receiver.png',
    specs: [
      { label: 'Frequency', value: '315 / 433.92 / 868 MHz' },
      { label: 'Code Type', value: 'Learning Code' },
      { label: 'Power', value: '12-24V options' },
      { label: 'MOQ', value: '100 pcs' },
      { label: 'OEM', value: 'Label / Packaging' },
    ],
  },
  {
    title: 'Code-Learning Remotes',
    description: 'Remotes with code-learning functions for selected systems. Confirm protocol and receiver requirements before use on a system you own or are authorized to service.',
    image: basePath + '/images/product-duplicator.png',
    specs: [
      { label: 'Frequency', value: 'Multi-frequency options' },
      { label: 'Code Type', value: 'Fixed / Selected rolling' },
      { label: 'Battery', value: 'CR2032 / 27A' },
      { label: 'MOQ', value: '100 pcs' },
      { label: 'OEM', value: 'Logo / Manual' },
    ],
  },
  {
    title: 'Garage Door Controllers',
    description: 'Control solutions for garage doors, roller shutters, and access control systems.',
    image: basePath + '/images/product-controller.png',
    specs: [
      { label: 'Frequency', value: 'By receiver protocol' },
      { label: 'Code Type', value: 'Learning / App control' },
      { label: 'Power', value: '12-24V options' },
      { label: 'MOQ', value: '100 pcs' },
      { label: 'OEM', value: 'Firmware / Packaging' },
    ],
  },
  {
    title: 'Aftermarket Car Remotes',
    description: 'Replacement remotes for vehicle locks and alarm systems. Confirm vehicle, original remote and programming requirements.',
    image: basePath + '/images/generated/car-remotes.webp',
    specs: [
      { label: 'Items', value: 'Vehicle lock / Alarm remotes' },
      { label: 'Fitment', value: 'Model dependent' },
      { label: 'MOQ', value: 'By item' },
      { label: 'OEM', value: 'Neutral packaging' },
    ],
  },
  {
    title: 'OEM Custom RF Solutions',
    description: 'Custom frequency, PCB design, shell design, and system integration support.',
    image: basePath + '/images/product-oem.png',
    specs: [
      { label: 'Frequency', value: 'Custom target market' },
      { label: 'Code Type', value: 'Protocol tuning' },
      { label: 'MOQ', value: 'Project based' },
      { label: 'OEM', value: 'Shell / PCB / Manual' },
    ],
  },
];

export const workflowSteps = [
  {
    step: 1,
    title: 'Send a Remote Photo',
    description: 'Share front and back photos of your remote, plus the country where the system is used.',
  },
  {
    step: 2,
    title: 'Identify the System',
    description: 'We review the model, frequency and receiver details with you. Add label photos if available.',
  },
  {
    step: 3,
    title: 'Review Technical Details',
    description: 'If needed, we’ll ask for PCB photos or chip markings to narrow down the options.',
  },
  {
    step: 4,
    title: 'Review Replacement Options',
    description: 'Discuss possible solutions and whether custom development needs to be assessed.',
  },
  {
    step: 5,
    title: 'Test a Sample',
    description: 'Check pairing, operation and signal range with your receiver before a bulk order.',
  },
  {
    step: 6,
    title: 'Confirm the Bulk Order',
    description: 'After sample approval, agree the quantity, packaging and any private-label requirements.',
  },
];

export const verificationFields = [
  { field: 'Brand / Model', description: 'Remote, receiver, or gate operator model number.' },
  { field: 'Frequency', description: 'Frequency or regional label information, if available.' },
  { field: 'Remote Photos', description: 'Front and back photos of the original remote.' },
  { field: 'PCB Photo', description: 'PCB photos or chip markings, if requested.' },
  { field: 'Receiver / Motor', description: 'Receiver board, motor label, or control box information.' },
  { field: 'Market Version', description: 'Country or market version to avoid regional mismatch.' },
  { field: 'Sample Quantity', description: 'Quantity needed for compatibility testing.' },
  { field: 'OEM Requirements', description: 'Logo, packaging, manual, label, or private-label needs.' },
];

export const applications = [
  { visual: 'slidingGate' },
  { visual: 'shutter' },
  { visual: 'commercial' },
  { visual: 'lightingControl' },
  { visual: 'curtainsBlinds' },
  { visual: 'awningControl' },
  { visual: 'ventilationControl' },
  { visual: 'securityAlarm' },
  { visual: 'carWindow' },
  { visual: 'irrigationControl', engineering: true },
  { visual: 'industrialHoist', engineering: true },
  { visual: 'industrialMotor', engineering: true },
] as const;

export const oemSteps = [
  { step: 1, title: 'Branding', description: 'Logo printing, custom design, and colors.' },
  { step: 2, title: 'Custom Frequency', description: 'Multi-frequency options to fit your target market.' },
  { step: 3, title: 'Housing Design', description: 'Custom shell shape, material, and color.' },
  { step: 4, title: 'Button Layout', description: 'Custom button number, icons, and functions.' },
  { step: 5, title: 'PCB Tuning', description: 'RF performance optimization and protocol tuning.' },
  { step: 6, title: 'Packaging', description: 'Box, blister, bag, or special packaging.' },
  { step: 7, title: 'Manual / Label', description: 'User manual and label in your language.' },
  { step: 8, title: 'Production Planning', description: 'Agree production checks, packaging and delivery requirements before confirming the order.' },
];

export const factoryItems = [
  { name: 'SMT Production Line', image: basePath + '/images/factory-smt.webp' },
  { name: 'Assembly Workshop', image: basePath + '/images/factory-assembly.webp' },
  { name: 'Functional Testing', image: basePath + '/images/factory-testing.webp' },
  { name: 'Aging Test Room', image: basePath + '/images/factory-aging.webp' },
  { name: 'Engineering R&D', image: basePath + '/images/factory-rd.webp' },
  { name: 'Packaging Inspection', image: basePath + '/images/factory-packaging.webp' },
  { name: 'Warehouse Stock', image: basePath + '/images/factory-warehouse.webp' },
  { name: 'Loading & Shipment', image: basePath + '/images/factory-loading.webp' },
];

export const resources = [
  {
    title: 'How to Identify a Compatible Remote',
    description: 'Step-by-step guide to identify models, chips, and protocols.',
    image: basePath + '/images/article-identify.jpg',
  },
  {
    title: 'Rolling Code vs Fixed Code',
    description: 'Understand the difference and how it affects compatibility.',
    image: basePath + '/images/article-rolling-code.jpg',
  },
  {
    title: 'What Buyers Should Send Before RF Matching',
    description: 'Checklist of information and photos for faster matching.',
    image: basePath + '/images/article-checklist.jpg',
  },
  {
    title: 'When OEM Development Is Needed',
    description: 'Situations that require custom development and engineering support.',
    image: basePath + '/images/article-oem.jpg',
  },
];

export const faqs = [
  {
    question: 'Can I start without a model number?',
    answer: 'Yes. Send front and back photos of the remote and tell us the country where it is used. Add a receiver or label photo if available; further details can be checked together.',
  },
  {
    question: 'How is compatibility checked?',
    answer: 'We review the remote model, receiver, frequency or coding details, and market version. Sample testing with the intended system helps confirm fit before a bulk order.',
  },
  {
    question: 'How should I test a sample?',
    answer: 'Agree the intended receiver and test conditions first, then check pairing, normal operation and signal range. Record any issues before confirming a bulk order.',
  },
  {
    question: 'What should I send for a wholesale inquiry?',
    answer: 'Share the product category, target market, estimated quantity and packaging needs. Add model or system details when the order involves a replacement match.',
  },
  {
    question: 'Can I request my own logo or packaging?',
    answer: 'Share the branding, label, manual and packaging changes you need. Available options and sample requirements depend on the selected product.',
  },
  {
    question: 'Are these original-brand products?',
    answer: 'We supply independent aftermarket replacement options. Brand names are used to identify compatibility references, not brand affiliation.',
  },
];
