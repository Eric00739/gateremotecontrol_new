'use client';

import { useLeadModal, type PrefillType } from './LeadModalProvider';
import { useRef } from 'react';

export default function LeadModalTrigger({
  prefillType,
  className,
  style,
  onClick,
  children,
}: {
  prefillType: PrefillType;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  const { openModal } = useLeadModal();
  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <button
      type="button"
      ref={triggerRef}
      className={className}
      style={style}
      onClick={() => { openModal(prefillType, triggerRef.current); onClick?.(); }}
    >
      {children}
    </button>
  );
}
