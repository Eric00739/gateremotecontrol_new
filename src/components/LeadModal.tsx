'use client';

import { createPortal } from 'react-dom';
import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { useLeadModal } from './LeadModalProvider';
import { localeNames, useDict, useLocale } from '@/i18n';

const WHATSAPP_NUMBER = '8615899648898';
const EMAIL = 'sales@gateremotesource.com';

const prefillTypeToRequestType: Record<string, string> = {
  quote: 'quote',
  compatibility: 'compatibility',
  oem: 'oem',
  sample: 'sample',
  support: 'compatibility',
};

function LeadModalContent() {
  const { open, prefillType, closeModal } = useLeadModal();
  const dict = useDict();
  const locale = useLocale();
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [whatsApp, setWhatsApp] = useState('');
  const [requestType, setRequestType] = useState(prefillTypeToRequestType[prefillType] || 'quote');
  const [message, setMessage] = useState('');
  const firstInputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
        return;
      }

      if (e.key !== 'Tab' || !dialogRef.current) return;

      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
        ),
      );
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
    document.body.style.overflow = 'hidden';
    const focusTimer = window.setTimeout(() => firstInputRef.current?.focus(), 0);
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
      window.clearTimeout(focusTimer);
    };
  }, [open, closeModal]);

  if (!open) return null;

  const requestTypeOptions = [
    { value: 'quote', label: dict.leadModal.requestTypes.quote },
    { value: 'compatibility', label: dict.leadModal.requestTypes.compatibility },
    { value: 'oem', label: dict.leadModal.requestTypes.oem },
    { value: 'sample', label: dict.leadModal.requestTypes.sample },
    { value: 'support', label: dict.leadModal.requestTypes.support },
  ];

  const buildMessage = (): string => {
    const label = requestTypeOptions.find(o => o.value === requestType)?.label || requestType;
    return [
      `${dict.leadModal.messageNameLabel}: ${name}`,
      company.trim() ? `${dict.leadModal.companyLabel}: ${company}` : '',
      email.trim() ? `${dict.leadModal.messageEmailLabel}: ${email}` : '',
      whatsApp.trim() ? `${dict.leadModal.whatsappLabel}: ${whatsApp}` : '',
      `${dict.leadModal.messageRequestLabel}: ${label}`,
      `${dict.leadModal.messageLocaleLabel}: ${localeNames[locale]}`,
      `Page: ${window.location.href}`,
      message,
    ].filter(Boolean).join('\n');
  };

  const handleEmailSubmit = () => {
    if (!name.trim() || !email.trim()) return;
    const text = buildMessage();
    const label = requestTypeOptions.find(o => o.value === requestType)?.label || dict.leadModal.messageFallbackType;
    const subject = encodeURIComponent(`${dict.leadModal.messageSubjectPrefix}: ${label}`);
    const body = encodeURIComponent(text);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    closeModal();
  };

  const inputClass = 'w-full rounded-lg border border-[#D8E4F0] bg-[#F8FAFC] px-3 py-2.5 text-sm text-[#0F172A] placeholder:text-[#94A3B8] outline-none transition-colors focus:border-[#FF8A1F]/60 focus:bg-white';
  const labelClass = 'block text-xs font-semibold text-[#475569] mb-1.5 tracking-wide';

  return createPortal(
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
      onClick={(e) => { if (e.target === overlayRef.current) closeModal(); }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-modal-title"
        aria-describedby="lead-modal-file-note"
        className="w-full max-w-md max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-2xl"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-[#E2E8F0] px-5 py-3.5 flex items-center justify-between rounded-t-2xl z-10">
          <h2 id="lead-modal-title" className="text-base font-bold text-[#0F172A]" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
            {dict.leadModal.title}
          </h2>
          <button
            type="button"
            onClick={closeModal}
            aria-label={dict.leadModal.closeLabel}
            className="w-10 h-10 rounded-lg flex items-center justify-center text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form */}
        <div className="px-5 py-4 space-y-3.5">
          <div>
            <label htmlFor="lead-name" className={labelClass}>{dict.leadModal.nameLabel}</label>
            <input id="lead-name" ref={firstInputRef} type="text" required autoComplete="name" value={name} onChange={e => setName(e.target.value)} placeholder={dict.leadModal.namePlaceholder} className={inputClass} />
          </div>

          <div>
            <label htmlFor="lead-company" className={labelClass}>{dict.leadModal.companyLabel}</label>
            <input id="lead-company" type="text" autoComplete="organization" value={company} onChange={e => setCompany(e.target.value)} placeholder={dict.leadModal.companyPlaceholder} className={inputClass} />
          </div>

          <div>
            <label htmlFor="lead-email" className={labelClass}>{dict.leadModal.emailLabel}</label>
            <input id="lead-email" type="email" autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} placeholder={dict.leadModal.emailPlaceholder} className={inputClass} />
          </div>

          <div>
            <label htmlFor="lead-whatsapp" className={labelClass}>{dict.leadModal.whatsappLabel}</label>
            <input id="lead-whatsapp" type="tel" autoComplete="tel" value={whatsApp} onChange={e => setWhatsApp(e.target.value)} placeholder={dict.leadModal.whatsappPlaceholder} className={inputClass} />
          </div>

          <div>
            <label htmlFor="lead-request-type" className={labelClass}>{dict.leadModal.requestTypeLabel}</label>
            <select id="lead-request-type" value={requestType} onChange={e => setRequestType(e.target.value)} className={inputClass}>
              {requestTypeOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="lead-details" className={labelClass}>{dict.leadModal.detailsLabel}</label>
            <textarea id="lead-details" value={message} onChange={e => setMessage(e.target.value)} placeholder={dict.leadModal.detailsPlaceholder} rows={4} className={`${inputClass} resize-none`} />
          </div>

          <p id="lead-modal-file-note" className="rounded-lg border border-[#D8E4F0] bg-[#F8FAFC] px-3 py-2.5 text-xs leading-5 text-[#475569]">
            {dict.leadModal.attachmentNote}
          </p>
        </div>

        {/* Actions */}
        <div className="sticky bottom-0 bg-white border-t border-[#E2E8F0] px-5 py-3.5 flex flex-col sm:flex-row gap-2.5 rounded-b-2xl">
          <button
            type="button"
            disabled={!name.trim()}
            onClick={() => {
              const text = buildMessage();
              window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
              closeModal();
            }}
            className="flex-1 bg-[#22C55E] hover:bg-[#16A34A] disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-2.5 rounded-lg transition-colors text-sm flex items-center justify-center gap-2"
          >
            {dict.leadModal.sendWhatsApp}
          </button>
          <button
            type="button"
            disabled={!name.trim() || !email.trim()}
            onClick={handleEmailSubmit}
            className="flex-1 bg-[#0B3A63] hover:bg-[#062748] disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-2.5 rounded-lg transition-colors text-sm flex items-center justify-center gap-2"
          >
            {dict.leadModal.sendEmail}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default LeadModalContent;
