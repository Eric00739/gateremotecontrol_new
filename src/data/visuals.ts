export type EditorialVisualId = 'engineering' | 'packaging';

interface EditorialVisual {
  src: string;
  kind: 'generated' | 'reference' | 'photograph';
  altKey: 'engineeringAlt' | 'packagingAlt';
}

// Reference and generated scenes illustrate a topic; they are not evidence of company facilities.
// Future generated assets: /images/illustrations/rf-workbench.webp and /images/illustrations/wholesale-packing.webp.
// When replacing a scene, update its path, kind, and localized alt; use photograph only for a verified company photo.
export const editorialVisuals: Record<EditorialVisualId, EditorialVisual> = {
  engineering: {
    src: '/images/factory-rd.webp',
    kind: 'reference',
    altKey: 'engineeringAlt',
  },
  packaging: {
    src: '/images/factory-packaging.webp',
    kind: 'reference',
    altKey: 'packagingAlt',
  },
};
