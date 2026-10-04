export const editorialVisuals = {
  engineering: { name: 'circuit-layout', seconds: 1.2, altKey: 'engineeringAlt' },
  production: { name: 'board-assembly-machine', seconds: 4.4, altKey: 'productionAlt' },
  assembly: { name: 'assembly-workstations', seconds: 8.8, altKey: 'assemblyAlt' },
  boards: { name: 'circuit-boards', seconds: 11.6, altKey: 'boardsAlt' },
  handling: { name: 'board-handling', seconds: 14.2, altKey: 'handlingAlt' },
  fixture: { name: 'board-fixture', seconds: 16.3, altKey: 'fixtureAlt' },
} as const;

export type EditorialVisualId = keyof typeof editorialVisuals;
export type EditorialVisualAltKey = (typeof editorialVisuals)[EditorialVisualId]['altKey'];

// Extracted from the owner-selected homepage video; company ownership and
// specific testing capabilities cannot be inferred from these scenes.
export function videoPhoto(visual: EditorialVisualId, width: 1280 | 640 | 320 = 1280) {
  return `/images/video/${editorialVisuals[visual].name}${width === 1280 ? '' : `-${width}`}.webp`;
}

function blogPhoto(visual: EditorialVisualId, imageAlt: string) {
  return {
    image: videoPhoto(visual),
    thumbnail: videoPhoto(visual, 320),
    imageAlt,
    imageSrcSet: `${videoPhoto(visual, 320)} 320w, ${videoPhoto(visual, 640)} 640w, ${videoPhoto(visual)} 1280w`,
  };
}

export const videoBlogPhotos = {
  'same-shell-hidden-downgrade-remote-manufacturing-quality': blogPhoto('handling', 'Gloved operator handling a panel of circuit boards'),
  'build-your-own-rf-remote-control-beginner-guide': blogPhoto('engineering', 'Circuit layout displayed on a workstation monitor'),
  'third-party-rf-remote-brand-receiver-pairing': blogPhoto('boards', 'Populated circuit boards on a conveyor'),
  'wifi-switch-protocols-smart-home-guide': blogPhoto('engineering', 'Circuit layout displayed on a workstation monitor'),
  'rf-remote-range-real-world-test-data': blogPhoto('fixture', 'Circuit board held in a fixture with vertical probes'),
  'garage-door-remote-cloning-security-guide': blogPhoto('boards', 'Populated circuit boards on a conveyor'),
  'car-key-short-range-window-tint': blogPhoto('engineering', 'Circuit layout displayed on a workstation monitor'),
  'rf-wifi-dual-mode-smart-switch': blogPhoto('boards', 'Populated circuit boards on a conveyor'),
  'rf-remote-wholesale-price-cost-drivers': blogPhoto('production', 'Circuit-board assembly machine with component feeders'),
  '433mhz-remote-short-range-diagnostics': blogPhoto('fixture', 'Circuit board held in a fixture with vertical probes'),
  'rf-receiver-sensitivity-range-spec': blogPhoto('handling', 'Gloved operator handling a panel of circuit boards'),
  'rf-remote-controller-application-scenarios': blogPhoto('assembly', 'Assembly workstations along a workshop aisle'),
  'exporting-wifi-switches-eu-ce-requirements': blogPhoto('production', 'Circuit-board assembly machine with component feeders'),
  'cr2032-rf-remote-battery-life': blogPhoto('boards', 'Populated circuit boards on a conveyor'),
  'circuits-dont-act-good-enough-transmitter-modules': blogPhoto('engineering', 'Circuit layout displayed on a workstation monitor'),
  'oem-odm-hardware-future': blogPhoto('assembly', 'Assembly workstations along a workshop aisle'),
  'rf-remote-control-concurrency-anti-collision': blogPhoto('production', 'Circuit-board assembly machine with component feeders'),
  'why-universal-remote-cannot-copy': blogPhoto('handling', 'Gloved operator handling a panel of circuit boards'),
} as const;
