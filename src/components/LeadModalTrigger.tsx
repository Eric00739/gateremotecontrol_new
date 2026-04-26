'use client';

import { useLeadModal, type PrefillType } from './LeadModalProvider';

export default function LeadModalTrigger({
  prefillType,
  className,
  style,
  children,
}: {
  prefillType: PrefillType;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  const { openModal } = useLeadModal();

  return (
    <button
      type="button"
      className={className}
      style={style}
      onClick={() => openModal(prefillType)}
    >
      {children}
    </button>
  );
}
