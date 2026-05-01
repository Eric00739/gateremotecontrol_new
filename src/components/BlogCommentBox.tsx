'use client';

import { FormEvent, useState } from 'react';
import { Send } from 'lucide-react';

export default function BlogCommentBox({ articleTitle }: { articleTitle: string }) {
  const [status, setStatus] = useState('Your message opens as an email draft so you can review it before sending.');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') || '').trim();
    const email = String(form.get('email') || '').trim();
    const company = String(form.get('company') || '').trim();
    const message = String(form.get('message') || '').trim();

    const body = [
      `Article: ${articleTitle}`,
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || 'Not provided'}`,
      '',
      'Message:',
      message,
    ].join('\n');

    const mailto = new URL('mailto:sales@gateremotesource.com');
    mailto.searchParams.set('subject', `Blog message: ${articleTitle}`);
    mailto.searchParams.set('body', body);
    window.location.href = mailto.toString();
    setStatus('Email draft opened. Please review it in your mail app before sending.');
  };

  return (
    <section id="comments" className="mt-10 rounded-lg bg-[#062748] p-6 text-[#F7FBFF] sm:p-7" aria-labelledby="comments-title">
      <p
        className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FF8A1F]"
        style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}
      >
        Leave a Message
      </p>
      <h2
        id="comments-title"
        className="mt-3 text-2xl font-bold leading-tight text-[#F7FBFF]"
        style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
      >
        Have a question about transmitter modules?
      </h2>
      <p className="mt-3 text-sm leading-7 text-[#C7D7E8]">
        Share your unstable range, batch consistency, matching, filtering, case effect, or export production question. Eric will review the details and reply directly.
      </p>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-xs font-bold text-[#D9E8F7]">
            Name
            <input
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="rounded-lg border border-white/15 bg-white/10 px-3 py-2.5 text-sm text-white placeholder:text-[#8FA9C2] focus:border-[#FF8A1F] focus:outline-none"
            />
          </label>
          <label className="grid gap-2 text-xs font-bold text-[#D9E8F7]">
            Email
            <input
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              className="rounded-lg border border-white/15 bg-white/10 px-3 py-2.5 text-sm text-white placeholder:text-[#8FA9C2] focus:border-[#FF8A1F] focus:outline-none"
            />
          </label>
        </div>
        <label className="grid gap-2 text-xs font-bold text-[#D9E8F7]">
          Company
          <input
            name="company"
            type="text"
            placeholder="Company name"
            className="rounded-lg border border-white/15 bg-white/10 px-3 py-2.5 text-sm text-white placeholder:text-[#8FA9C2] focus:border-[#FF8A1F] focus:outline-none"
          />
        </label>
        <label className="grid gap-2 text-xs font-bold text-[#D9E8F7]">
          Message
          <textarea
            name="message"
            required
            rows={5}
            placeholder="What unstable RF problem did you meet?"
            className="resize-y rounded-lg border border-white/15 bg-white/10 px-3 py-2.5 text-sm leading-6 text-white placeholder:text-[#8FA9C2] focus:border-[#FF8A1F] focus:outline-none"
          />
        </label>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#FF8A1F] px-5 py-2.5 text-sm font-bold text-[#062748] transition-colors hover:bg-[#F97316]"
          >
            Send Message <Send className="h-4 w-4" />
          </button>
          <p className="text-xs leading-5 text-[#9FB4CC]">{status}</p>
        </div>
      </form>
    </section>
  );
}
