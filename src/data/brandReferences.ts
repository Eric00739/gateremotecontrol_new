const guideRoutes: Record<string, string> = {
  FAAC: 'faac',
  Nice: 'nice',
  BFT: 'bft',
  DoorHan: 'doorhan',
  CAME: 'came',
  LiftMaster: 'liftmaster',
};

// Original-system identifiers for inquiries, not a tested compatibility list.
export const brandReferenceGroups = [
  {
    key: 'brazil',
    names: ['Rossi', 'PPA', 'Garen', 'Peccinin', 'Intelbras', 'AGL', 'JFL', 'RCG'],
  },
  {
    key: 'international',
    names: [
      'CENTURION', 'Hörmann', 'SOMMER', 'Marantec', 'Ditec',
      'FAAC', 'Nice', 'BFT', 'DoorHan', 'CAME', 'LiftMaster', 'Chamberlain',
      'GENIUS (ECHO)', 'Benincà', 'Somfy', 'DEA', 'Roger Technology', 'V2',
      'Fadini', 'Merlin', 'Aprimatic', 'Allmatic', 'Key Automation', 'Gi.Bi.Di.',
      'Linear', 'Genie', 'Cardin', 'Erreka', 'Tousek', 'King Gates',
      'SEA', 'RIB', 'Life', 'Tau',
    ],
  },
] as const;

export const brandReferences = brandReferenceGroups.flatMap((group) =>
  group.names.map((name) => ({
    name,
    group: group.key,
    guideSlug: guideRoutes[name],
    modelReference: name === 'GENIUS (ECHO)' ? 'GENIUS / ECHO series' : name,
  })),
);
