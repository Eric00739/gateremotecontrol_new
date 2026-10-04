export const generatedVisuals = {
  remotes: 'remotes',
  receiver: 'receiver',
  learning: 'learning',
  controller: 'controller',
  accessories: 'accessories',
  oemKit: 'oem-kit',
  slidingGate: 'sliding-gate',
  swingGate: 'swing-gate',
  garage: 'garage',
  shutter: 'shutter',
  access: 'access',
  commercial: 'commercial',
  warehouse: 'warehouse',
  inspection: 'inspection',
  components: 'components',
  matching: 'matching',
  smartHome: 'smart-home',
  carWindow: 'car-window',
  comparison: 'comparison',
  diagnostics: 'diagnostics',
  rfBench: 'rf-bench',
  documentation: 'documentation',
  battery: 'battery',
  rfModule: 'rf-module',
  concurrency: 'concurrency',
} as const;

export type GeneratedVisualId = keyof typeof generatedVisuals;

export function generatedPhoto(visual: GeneratedVisualId, width: 1280 | 640 | 320 = 1280) {
  return `/images/generated/${generatedVisuals[visual]}${width === 1280 ? '' : `-${width}`}.webp`;
}

export function generatedSrcSet(visual: GeneratedVisualId) {
  return `${generatedPhoto(visual, 320)} 320w, ${generatedPhoto(visual, 640)} 640w, ${generatedPhoto(visual)} 1280w`;
}

function blogIllustration(visual: GeneratedVisualId, imageAlt: string) {
  return {
    image: generatedPhoto(visual),
    thumbnail: generatedPhoto(visual, 320),
    imageAlt: `AI-generated illustration: ${imageAlt}`,
    imageSrcSet: generatedSrcSet(visual),
    imageCaption: 'AI-generated illustration of the article topic; not a product specification, customer installation or test record.',
  };
}

export const illustratedBlogPhotos = {
  'same-shell-hidden-downgrade-remote-manufacturing-quality': blogIllustration('inspection', 'An opened remote, circuit board and magnifying lens on a workbench'),
  'build-your-own-rf-remote-control-beginner-guide': blogIllustration('components', 'Separate transmitter and receiver modules, a relay module and insulated wires'),
  'third-party-rf-remote-brand-receiver-pairing': blogIllustration('matching', 'Remote housings and a separate receiver board prepared for identification'),
  'wifi-switch-protocols-smart-home-guide': blogIllustration('smartHome', 'A wall switch and an unbranded wireless router in an ordinary living room'),
  'rf-remote-range-real-world-test-data': blogIllustration('slidingGate', 'A sliding gate and the driveway leading to it'),
  'garage-door-remote-cloning-security-guide': blogIllustration('garage', 'A sectional garage door with visible side tracks'),
  'car-key-short-range-window-tint': blogIllustration('carWindow', 'A plain car key beside a tinted car window'),
  'rf-wifi-dual-mode-smart-switch': blogIllustration('controller', 'A generic controller board in an open enclosure'),
  'rf-remote-wholesale-price-cost-drivers': blogIllustration('comparison', 'Two generic remote assemblies laid out for component comparison'),
  '433mhz-remote-short-range-diagnostics': blogIllustration('diagnostics', 'An opened remote and unconnected meter probes prepared for inspection'),
  'rf-receiver-sensitivity-range-spec': blogIllustration('rfBench', 'A generic receiver board and bench instrument, with no displayed measurements'),
  'rf-remote-controller-application-scenarios': blogIllustration('commercial', 'A barrier arm at a modest commercial entrance'),
  'exporting-wifi-switches-eu-ce-requirements': blogIllustration('documentation', 'A generic switch enclosure beside a blank document folder'),
  'cr2032-rf-remote-battery-life': blogIllustration('battery', 'A coin cell and the open battery compartment of a remote'),
  'circuits-dont-act-good-enough-transmitter-modules': blogIllustration('rfModule', 'A compact generic radio module photographed close up'),
  'oem-odm-hardware-future': blogIllustration('oemKit', 'Unbranded remote packaging with a paper insert and blank instruction sheet'),
  'rf-remote-control-concurrency-anti-collision': blogIllustration('concurrency', 'Several separate handheld remotes and one receiver on a bench'),
  'why-universal-remote-cannot-copy': blogIllustration('learning', 'Two distinct unbranded four-button remotes placed side by side'),
} as const;
