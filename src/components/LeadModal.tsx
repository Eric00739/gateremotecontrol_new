'use client';

import { createPortal } from 'react-dom';
import { useEffect, useRef, useState } from 'react';
import { Check, Copy, X } from 'lucide-react';
import { useLeadModal, type InquiryContext, type PrefillType } from './LeadModalProvider';
import { localeNames, useDict, useLocale } from '@/i18n';
import { siteContact } from '@/data/site';

const WHATSAPP_NUMBER = siteContact.whatsAppNumber;
const EMAIL = siteContact.email;

type InquiryDraft = {
  requestType: PrefillType;
  productInterest: string;
  targetCountry: string;
  quantity: string;
  message: string;
};

function createDraft(type: PrefillType, context: InquiryContext): InquiryDraft {
  return {
    requestType: type === 'support' ? 'compatibility' : type,
    productInterest: context.productInterest ?? '',
    targetCountry: '',
    quantity: '',
    message: context.modelReference ?? '',
  };
}

function LeadModalContent() {
  const { open, prefillType, inquiryContext, inquiryKey, sourceUrl, closeModal } = useLeadModal();
  const dict = useDict();
  const locale = useLocale();
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [whatsApp, setWhatsApp] = useState('');
  const [copyState, setCopyState] = useState<'idle' | 'copied'>('idle');
  const [emailError, setEmailError] = useState(false);
  // Retain edits per buying context without carrying one product into another request.
  const [drafts, setDrafts] = useState<Record<string, InquiryDraft>>({});
  const draft = drafts[inquiryKey] ?? createDraft(prefillType, inquiryContext);
  const updateDraft = (updates: Partial<InquiryDraft>) => {
    setDrafts(previous => ({
      ...previous,
      [inquiryKey]: { ...(previous[inquiryKey] ?? createDraft(prefillType, inquiryContext)), ...updates },
    }));
  };
  const firstInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setCopyState('idle');
        closeModal();
        return;
      }

      if (e.key !== 'Tab' || !dialogRef.current) return;

      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), summary, a[href], [tabindex]:not([tabindex="-1"])',
        ),
      ).filter(element => element.getClientRects().length > 0);
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!firstElement || !lastElement) return;

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    };
    document.addEventListener('keydown', handleKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const focusTimer = window.setTimeout(() => firstInputRef.current?.focus(), 0);
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(focusTimer);
    };
  }, [open, closeModal]);

  if (!open) return null;

  const requestTypeOptions: { value: PrefillType; label: string }[] = [
    { value: 'quote', label: dict.leadModal.requestTypes.quote },
    { value: 'catalog', label: dict.leadModal.requestTypes.catalog },
    { value: 'compatibility', label: dict.leadModal.requestTypes.compatibility },
    { value: 'oem', label: dict.leadModal.requestTypes.oem },
    { value: 'sample', label: dict.leadModal.requestTypes.sample },
    { value: 'support', label: dict.leadModal.requestTypes.support },
  ];

  const buildMessage = (): string => {
    const label = requestTypeOptions.find(o => o.value === draft.requestType)?.label || draft.requestType;
    return [
      `${dict.leadModal.messageRequestLabel}: ${label}`,
      draft.productInterest.trim() ? `${dict.leadModal.productInterestLabel}: ${draft.productInterest.trim()}` : '',
      draft.targetCountry.trim() ? `${dict.leadModal.targetCountryLabel}: ${draft.targetCountry.trim()}` : '',
      draft.quantity.trim() ? `${dict.leadModal.quantityLabel}: ${draft.quantity.trim()}` : '',
      draft.message.trim(),
      name.trim() ? `${dict.leadModal.messageNameLabel}: ${name.trim()}` : '',
      company.trim() ? `${dict.leadModal.companyLabel}: ${company}` : '',
      email.trim() ? `${dict.leadModal.messageEmailLabel}: ${email}` : '',
      whatsApp.trim() ? `${dict.leadModal.whatsappLabel}: ${whatsApp}` : '',
      `${dict.leadModal.messageLocaleLabel}: ${localeNames[locale]}`,
      `Page: ${sourceUrl}`,
    ].filter(Boolean).join('\n');
  };

  const handleEmailSubmit = () => {
    if (!emailInputRef.current?.checkValidity()) {
      setEmailError(true);
      emailInputRef.current?.focus();
      return;
    }
    setEmailError(false);
    const text = buildMessage();
    const label = requestTypeOptions.find(o => o.value === draft.requestType)?.label || dict.leadModal.messageFallbackType;
    const subject = encodeURIComponent(`${dict.leadModal.messageSubjectPrefix}: ${label}`);
    const body = encodeURIComponent(text);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setCopyState('idle');
  };

  // Fallback channel: lets buyers keep the filled-in inquiry when neither
  // WhatsApp nor a local mail client is available on the device.
  const handleCopyContent = async () => {
    const text = buildMessage();
    let copied = false;

    try {
      await navigator.clipboard.writeText(text);
      copied = true;
    } catch {
      // Clipboard API unavailable (insecure context or permission denied).
    }

    if (!copied) {
      const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      try {
        copied = document.execCommand('copy');
      } catch {
        // Keep the idle label; never claim success that did not happen.
      } finally {
        document.body.removeChild(textarea);
        previousFocus?.focus({ preventScroll: true });
      }
    }

    if (copied) setCopyState('copied');
    window.setTimeout(() => setCopyState('idle'), 2000);
  };

  const inputClass = 'w-full rounded-lg border border-[#D8E4F0] bg-[#F8FAFC] px-3 py-2.5 text-sm text-[#0F172A] placeholder:text-[#64748B] outline-none transition-colors focus:border-[#C2410C] focus:bg-white';
  const labelClass = 'block text-xs font-semibold text-[#475569] mb-1.5 tracking-wide';

  return createPortal(
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
      onClick={(e) => { if (e.target === overlayRef.current) { setCopyState('idle'); closeModal(); } }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-modal-title"
        aria-describedby="lead-modal-unknown-note lead-modal-file-note"
        className="w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-2xl"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-[#E2E8F0] px-5 py-3.5 flex items-center justify-between rounded-t-2xl z-10">
          <h2 id="lead-modal-title" className="text-base font-bold text-[#0F172A]" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
            {dict.leadModal.title}
          </h2>
          <button
            type="button"
            onClick={() => { setCopyState('idle'); closeModal(); }}
            aria-label={dict.leadModal.closeLabel}
            className="w-10 h-10 rounded-lg flex items-center justify-center text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form */}
        <div className="px-5 py-4 space-y-3.5">
          <div>
            <label htmlFor="lead-product" className={labelClass}>{dict.leadModal.productInterestLabel}</label>
            <input id="lead-product" ref={firstInputRef} type="text" value={draft.productInterest} onChange={e => updateDraft({ productInterest: e.target.value })} placeholder={dict.leadModal.productInterestPlaceholder} className={inputClass} />
          </div>

          <div className="grid grid-cols-2 items-end gap-3">
            <div>
              <label htmlFor="lead-country" className={labelClass}>{dict.leadModal.targetCountryLabel}</label>
              <input id="lead-country" type="text" autoComplete="country-name" value={draft.targetCountry} onChange={e => updateDraft({ targetCountry: e.target.value })} placeholder={dict.leadModal.targetCountryPlaceholder} className={inputClass} />
            </div>
            <div>
              <label htmlFor="lead-quantity" className={labelClass}>{dict.leadModal.quantityLabel}</label>
              <input id="lead-quantity" type="text" value={draft.quantity} onChange={e => updateDraft({ quantity: e.target.value })} placeholder={dict.leadModal.quantityPlaceholder} className={inputClass} />
            </div>
          </div>

          <div>
            <label htmlFor="lead-request-type" className={labelClass}>{dict.leadModal.requestTypeLabel}</label>
            <select id="lead-request-type" value={draft.requestType} onChange={e => {
              const option = requestTypeOptions.find(item => item.value === e.target.value);
              if (option) updateDraft({ requestType: option.value });
            }} className={inputClass}>
              {requestTypeOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="lead-details" className={labelClass}>{dict.leadModal.detailsLabel}</label>
            <textarea id="lead-details" value={draft.message} onChange={e => updateDraft({ message: e.target.value })} placeholder={dict.leadModal.detailsPlaceholder} aria-describedby="lead-modal-unknown-note" rows={3} className={`${inputClass} resize-y`} />
            <p id="lead-modal-unknown-note" className="mt-2 text-xs leading-5 text-[#475569]">{dict.leadModal.unknownModelNote}</p>
          </div>

          <div>
            <label htmlFor="lead-email" className={labelClass}>{dict.leadModal.emailLabel}</label>
            <input id="lead-email" ref={emailInputRef} type="email" required autoComplete="email" value={email} onChange={e => { setEmail(e.target.value); setEmailError(false); }} aria-invalid={emailError || undefined} aria-describedby={emailError ? 'lead-email-error' : undefined} placeholder={dict.leadModal.emailPlaceholder} className={inputClass} />
            {emailError && <p id="lead-email-error" role="alert" className="mt-2 text-xs leading-5 text-[#B91C1C]">{dict.leadModal.emailError}</p>}
          </div>

          <details className="rounded-lg border border-[#D8E4F0] px-3 py-2.5">
            <summary className="cursor-pointer text-xs font-semibold leading-5 text-[#475569]">{dict.leadModal.contactDetailsLabel}</summary>
            <div className="mt-3 space-y-3">
              <div>
                <label htmlFor="lead-name" className={labelClass}>{dict.leadModal.nameLabel}</label>
                <input id="lead-name" type="text" autoComplete="name" value={name} onChange={e => setName(e.target.value)} placeholder={dict.leadModal.namePlaceholder} className={inputClass} />
              </div>
              <div>
                <label htmlFor="lead-company" className={labelClass}>{dict.leadModal.companyLabel}</label>
                <input id="lead-company" type="text" autoComplete="organization" value={company} onChange={e => setCompany(e.target.value)} placeholder={dict.leadModal.companyPlaceholder} className={inputClass} />
              </div>
              <div>
                <label htmlFor="lead-whatsapp" className={labelClass}>{dict.leadModal.whatsappLabel}</label>
                <input id="lead-whatsapp" type="tel" autoComplete="tel" value={whatsApp} onChange={e => setWhatsApp(e.target.value)} placeholder={dict.leadModal.whatsappPlaceholder} className={inputClass} />
              </div>
            </div>
          </details>

          <p id="lead-modal-file-note" className="rounded-lg border border-[#D8E4F0] bg-[#F8FAFC] px-3 py-2.5 text-xs leading-5 text-[#475569]">
            {dict.leadModal.attachmentNote}
          </p>
        </div>

        {/* Actions */}
        <div className="sticky bottom-0 bg-white border-t border-[#E2E8F0] px-5 py-3.5 flex flex-col gap-2.5 rounded-b-2xl">
          <div className="flex flex-col sm:flex-row gap-2.5">
            <button
              type="button"
              onClick={() => {
                const text = buildMessage();
                window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
                setCopyState('idle');
              }}
              className="flex-1 bg-[#15803D] hover:bg-[#166534] text-white font-bold py-2.5 rounded-lg transition-colors text-sm flex items-center justify-center gap-2"
            >
              {dict.leadModal.sendWhatsApp}
            </button>
            <button
              type="button"
              onClick={handleEmailSubmit}
              className="flex-1 bg-[#0B3A63] hover:bg-[#062748] disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-2.5 rounded-lg transition-colors text-sm flex items-center justify-center gap-2"
            >
              {dict.leadModal.sendEmail}
            </button>
          </div>
          <button
            type="button"
            onClick={handleCopyContent}
            className="w-full border border-[#D8E4F0] hover:border-[#FF8A1F]/60 text-[#475569] hover:text-[#0F172A] font-semibold py-2 rounded-lg transition-colors text-xs flex items-center justify-center gap-1.5"
          >
            {copyState === 'copied'
              ? <Check className="w-3.5 h-3.5 text-[#16A34A]" />
              : <Copy className="w-3.5 h-3.5" />}
            {copyState === 'copied' ? dict.leadModal.copied : dict.leadModal.copyContent}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default LeadModalContent;
