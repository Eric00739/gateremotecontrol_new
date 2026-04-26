'use client';

import { createPortal } from 'react-dom';
import { useEffect, useRef, useState } from 'react';
import { Paperclip, X } from 'lucide-react';
import { useLeadModal } from './LeadModalProvider';

const WHATSAPP_NUMBER = '8615899648898';
const EMAIL = 'sales@gateremotesource.com';

const requestTypeOptions = [
  { value: 'quote', label: 'Quote' },
  { value: 'compatibility', label: 'Compatibility Check' },
  { value: 'oem', label: 'OEM / ODM' },
  { value: 'sample', label: 'Sample Request' },
  { value: 'support', label: 'Support' },
];

const prefillTypeToRequestType: Record<string, string> = {
  quote: 'quote',
  compatibility: 'compatibility',
  oem: 'oem',
  sample: 'sample',
  support: 'compatibility',
};

function buildMessage(name: string, email: string, requestType: string, message: string): string {
  const label = requestTypeOptions.find(o => o.value === requestType)?.label || requestType;
  return [`Name: ${name}`, `Email: ${email}`, `Request: ${label}`, message].filter(Boolean).join('\n');
}

function sendWhatsApp(name: string, email: string, requestType: string, message: string) {
  const text = buildMessage(name, email, requestType, message);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
}

function sendEmail(name: string, email: string, requestType: string, message: string) {
  const label = requestTypeOptions.find(o => o.value === requestType)?.label || 'General';
  const subject = encodeURIComponent(`Inquiry: ${label}`);
  const body = encodeURIComponent(buildMessage(name, email, requestType, message));
  window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
}

function LeadModalContent() {
  const { open, prefillType, closeModal } = useLeadModal();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [requestType, setRequestType] = useState(prefillTypeToRequestType[prefillType] || 'quote');
  const [message, setMessage] = useState('');
  const [files, setFiles] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [open, closeModal]);

  if (!open) return null;

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files || []).map(f => f.name);
    setFiles(prev => [...prev, ...selected]);
  };

  const handleSubmit = (action: () => void) => {
    if (!name.trim() || !email.trim()) return;
    action();
    if (files.length > 0) {
      alert(`Remember to attach: ${files.join(', ')}`);
    }
    closeModal();
    setName('');
    setEmail('');
    setMessage('');
    setFiles([]);
    setRequestType(prefillTypeToRequestType[prefillType] || 'quote');
  };

  const inputClass = 'w-full rounded-lg border border-[#D8E4F0] bg-[#F8FAFC] px-3 py-2.5 text-sm text-[#0F172A] placeholder:text-[#94A3B8] outline-none transition-colors focus:border-[#FF8A1F]/60 focus:bg-white';
  const labelClass = 'block text-[11px] font-semibold text-[#64748B] mb-1.5 tracking-wide';

  return createPortal(
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
      onClick={(e) => { if (e.target === overlayRef.current) closeModal(); }}
    >
      <div className="w-full max-w-md max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-[#E2E8F0] px-5 py-3.5 flex items-center justify-between rounded-t-2xl z-10">
          <h2 className="text-base font-bold text-[#0F172A]" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
            Send Inquiry
          </h2>
          <button
            type="button"
            onClick={closeModal}
            className="w-7 h-7 rounded-lg flex items-center justify-center text-[#94A3B8] hover:text-[#0F172A] hover:bg-[#F1F5F9] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form */}
        <div className="px-5 py-4 space-y-3.5">
          <div>
            <label className={labelClass}>Name *</label>
            <input type="text" required value={name} onChange={e => setName(e.target.value)} placeholder="Your name" className={inputClass} />
          </div>

          <div>
            <label className={labelClass}>Email *</label>
            <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="you@company.com" className={inputClass} />
          </div>

          <div>
            <label className={labelClass}>Request Type</label>
            <select value={requestType} onChange={e => setRequestType(e.target.value)} className={inputClass}>
              {requestTypeOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelClass}>Message</label>
            <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="e.g. FAAC XT2, 433.92MHz, Rolling Code — or any details" rows={4} className={`${inputClass} resize-none`} />
          </div>

          {/* Attachments */}
          <div>
            <label className={labelClass}>Attachments</label>
            <input type="file" multiple ref={fileInputRef} onChange={handleFiles} className="hidden" accept="image/*,.pdf,.doc,.docx" />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="w-full flex items-center gap-2 rounded-lg border border-dashed border-[#CBD5E1] bg-[#F8FAFC] px-3 py-2.5 text-sm text-[#64748B] hover:border-[#FF8A1F]/50 hover:text-[#FF8A1F] transition-colors cursor-pointer"
            >
              <Paperclip className="w-4 h-4" />
              Add photos or files
            </button>
            {files.length > 0 && (
              <div className="mt-2 space-y-1">
                {files.map((f, i) => (
                  <div key={i} className="flex items-center justify-between text-xs text-[#64748B] bg-[#F1F5F9] rounded px-2 py-1">
                    <span className="truncate mr-2">{f}</span>
                    <button type="button" onClick={() => setFiles(prev => prev.filter((_, j) => j !== i))} className="text-[#94A3B8] hover:text-red-500 transition-colors">
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
            <p className="text-[10px] text-[#94A3B8] mt-1.5">Files will be listed in the message. Attach them manually after opening WhatsApp or Email.</p>
          </div>
        </div>

        {/* Actions */}
        <div className="sticky bottom-0 bg-white border-t border-[#E2E8F0] px-5 py-3.5 flex flex-col sm:flex-row gap-2.5 rounded-b-2xl">
          <button
            type="button"
            disabled={!name.trim() || !email.trim()}
            onClick={() => handleSubmit(() => sendWhatsApp(name, email, requestType, message))}
            className="flex-1 bg-[#22C55E] hover:bg-[#16A34A] disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-2.5 rounded-lg transition-colors text-sm flex items-center justify-center gap-2"
          >
            Send via WhatsApp
          </button>
          <button
            type="button"
            disabled={!name.trim() || !email.trim()}
            onClick={() => handleSubmit(() => sendEmail(name, email, requestType, message))}
            className="flex-1 bg-[#0B3A63] hover:bg-[#062748] disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-2.5 rounded-lg transition-colors text-sm flex items-center justify-center gap-2"
          >
            Send by Email
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default LeadModalContent;
