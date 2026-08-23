'use client';

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';
import LeadModal from './LeadModal';

export type PrefillType = 'quote' | 'compatibility' | 'oem' | 'sample' | 'support';

interface LeadModalContextValue {
  open: boolean;
  prefillType: PrefillType;
  openModal: (type: PrefillType, trigger?: HTMLElement | null) => void;
  closeModal: () => void;
}

const defaultValue: LeadModalContextValue = {
  open: false,
  prefillType: 'quote',
  openModal: () => {},
  closeModal: () => {},
};

const LeadModalContext = createContext<LeadModalContextValue>(defaultValue);

export function useLeadModal() {
  return useContext(LeadModalContext);
}

export default function LeadModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [prefillType, setPrefillType] = useState<PrefillType>('quote');
  const [returnFocusElement, setReturnFocusElement] = useState<HTMLElement | null>(null);

  const openModal = useCallback((type: PrefillType, trigger?: HTMLElement | null) => {
    setPrefillType(type);
    setReturnFocusElement(trigger ?? (document.activeElement instanceof HTMLElement ? document.activeElement : null));
    setOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    if (open || !returnFocusElement) return;

    const frame = requestAnimationFrame(() => {
      returnFocusElement.focus();
      setReturnFocusElement(null);
    });

    return () => cancelAnimationFrame(frame);
  }, [open, returnFocusElement]);

  return (
    <LeadModalContext.Provider value={{ open, prefillType, openModal, closeModal }}>
      {children}
      <LeadModal key={prefillType} />
    </LeadModalContext.Provider>
  );
}
