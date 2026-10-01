'use client';

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';
import LeadModal from './LeadModal';

export type PrefillType = 'quote' | 'compatibility' | 'oem' | 'sample' | 'support';

export type InquiryContext = {
  productInterest?: string;
  modelReference?: string;
};

interface LeadModalContextValue {
  open: boolean;
  prefillType: PrefillType;
  inquiryContext: InquiryContext;
  inquiryKey: string;
  sourceUrl: string;
  openModal: (type: PrefillType, trigger?: HTMLElement | null, context?: InquiryContext) => void;
  closeModal: () => void;
}

const defaultValue: LeadModalContextValue = {
  open: false,
  prefillType: 'quote',
  inquiryContext: {},
  inquiryKey: '',
  sourceUrl: '',
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
  const [inquiryContext, setInquiryContext] = useState<InquiryContext>({});
  const [inquiryKey, setInquiryKey] = useState('');
  const [sourceUrl, setSourceUrl] = useState('');
  const [returnFocusElement, setReturnFocusElement] = useState<HTMLElement | null>(null);

  const openModal = useCallback((type: PrefillType, trigger?: HTMLElement | null, context: InquiryContext = {}) => {
    setPrefillType(type);
    setInquiryContext(context);
    setInquiryKey(JSON.stringify([window.location.pathname, type, context.productInterest, context.modelReference]));
    setSourceUrl(window.location.href);
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
    <LeadModalContext.Provider value={{ open, prefillType, inquiryContext, inquiryKey, sourceUrl, openModal, closeModal }}>
      {children}
      <LeadModal />
    </LeadModalContext.Provider>
  );
}
