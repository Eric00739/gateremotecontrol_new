'use client';

import { useLeadModal, type InquiryContext, type PrefillType } from './LeadModalProvider';
import { useRef } from 'react';

export default function LeadModalTrigger({
  prefillType,
  inquiryContext,
  className,
  style,
  onClick,
  children,
}: {
  prefillType: PrefillType;
  inquiryContext?: InquiryContext;
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
      onClick={() => { openModal(prefillType, triggerRef.current, inquiryContext); onClick?.(); }}
    >
      {children}
    </button>
  );
}
