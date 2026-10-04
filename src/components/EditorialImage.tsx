import Image from 'next/image';
import { editorialVisuals, videoPhoto, type EditorialVisualId, type EditorialVisualAltKey } from '@/data/visuals';

type EditorialImageCopy = Record<EditorialVisualAltKey, string>;

interface EditorialImageProps {
  visual: EditorialVisualId;
  copy: EditorialImageCopy;
  preload?: boolean;
  compact?: boolean;
  sizes?: string;
}

export default function EditorialImage({ visual, copy, preload = false, compact = false, sizes }: EditorialImageProps) {
  const asset = editorialVisuals[visual];

  return (
    <picture className="relative block aspect-[640/363] overflow-hidden rounded-lg border border-[#D8E4F0] bg-[#F1F5F9]">
      <source srcSet={`${videoPhoto(visual, 320)} 320w, ${videoPhoto(visual, 640)} 640w, ${videoPhoto(visual)} 1280w`} sizes={sizes ?? (compact ? '(max-width: 639px) calc(100vw - 32px), (max-width: 767px) calc(100vw - 48px), 400px' : '(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) calc(100vw - 48px), 620px')} />
      <Image
        src={videoPhoto(visual, compact ? 640 : 1280)}
        alt={copy[asset.altKey]}
        fill
        className="object-contain"
        loading={preload ? 'eager' : 'lazy'}
        fetchPriority={preload ? 'high' : 'auto'}
      />
    </picture>
  );
}
