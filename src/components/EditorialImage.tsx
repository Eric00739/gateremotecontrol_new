import Image from 'next/image';
import { editorialVisuals, type EditorialVisualId } from '@/data/visuals';

interface EditorialImageCopy {
  engineeringAlt: string;
  packagingAlt: string;
}

interface EditorialImageProps {
  visual: EditorialVisualId;
  copy: EditorialImageCopy;
  preload?: boolean;
}

export default function EditorialImage({ visual, copy, preload = false }: EditorialImageProps) {
  const asset = editorialVisuals[visual];

  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-[#2A587C] bg-[#123D63]">
      <Image
        src={asset.src}
        alt={copy[asset.altKey]}
        fill
        sizes="(max-width: 1023px) calc(100vw - 48px), 620px"
        className="object-cover"
        preload={preload}
      />
    </div>
  );
}
