export default function ImageSourceLabel({ label, source = 'generated', small = false }: { label: string; source?: 'generated' | 'video'; small?: boolean }) {
  if (source === 'generated') return null;

  return (
    <span
      aria-hidden="true"
      data-image-source-label={source}
      className={`pointer-events-none absolute z-10 max-w-[calc(100%-8px)] rounded border border-[#CBD5E1] bg-white/95 px-1.5 py-0.5 font-medium leading-tight text-[#334155] ${small ? 'bottom-1 left-1 text-[9px]' : 'bottom-2 left-2 text-[10px]'}`}
    >
      {label}
    </span>
  );
}
