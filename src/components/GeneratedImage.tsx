import Image from 'next/image';
import { generatedPhoto, generatedSrcSet, type GeneratedVisualId } from '@/data/generated-visuals';
import ImageSourceLabel from './ImageSourceLabel';

type ImageKind = 'product' | 'scene' | 'editorial' | 'packaging';

interface GeneratedImageProps {
  visual: GeneratedVisualId;
  alt: string;
  copy: Record<`${ImageKind}Note` | 'illustrationLabel', string>;
  kind?: ImageKind;
  compact?: boolean;
  eager?: boolean;
  caption?: boolean;
  dark?: boolean;
  sizes?: string;
  smallLabel?: boolean;
}

export default function GeneratedImage({ visual, alt, copy, kind = 'product', compact = false, eager = false, caption = true, dark = false, sizes: requestedSizes, smallLabel = false }: GeneratedImageProps) {
  const sizes = requestedSizes ?? (compact
    ? '(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) 45vw, 380px'
    : '(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) calc(100vw - 48px), 620px');

  return (
    <figure>
      <div className="relative">
        <picture className="relative block aspect-[3/2] overflow-hidden rounded-lg border border-[#D8E4F0] bg-[#F1F5F9]">
          <source srcSet={generatedSrcSet(visual)} sizes={sizes} />
          <Image
            src={generatedPhoto(visual, compact ? 640 : 1280)}
            alt={`${copy.illustrationLabel}: ${alt}`}
            fill
            sizes={sizes}
            loading={eager ? 'eager' : 'lazy'}
            fetchPriority={eager ? 'high' : 'auto'}
            className="object-cover"
          />
        </picture>
        <ImageSourceLabel label={copy.illustrationLabel} small={smallLabel} />
      </div>
      {caption && <figcaption className={`mt-3 text-xs leading-relaxed ${dark ? 'text-[#C7D7E8]' : 'text-[#64748B]'}`}>{copy[`${kind}Note`]}</figcaption>}
    </figure>
  );
}
