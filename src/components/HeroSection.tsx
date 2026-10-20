'use client';

import { useEffect, useRef } from 'react';
import { Shield, Zap, Package, Globe, Users } from 'lucide-react';
import { basePath } from '@/data/homepage';
import { videoPhoto } from '@/data/visuals';
import LeadModalTrigger from './LeadModalTrigger';
import { useDict } from '@/i18n';

const trustItems = [
  { icon: Shield },
  { icon: Zap },
  { icon: Package },
  { icon: Globe },
  { icon: Users },
];

type NetworkInformationLike = { saveData?: boolean; effectiveType?: string };

/** The hero video is decorative, so it must never compete with the headline,
 * fonts or scripts for bandwidth. The poster renders immediately; one video
 * file (mobile or desktop, never both) is attached after the page has loaded,
 * and skipped for reduced-motion, Save-Data and 2G connections. */
function useDeferredHeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const connection = (navigator as Navigator & { connection?: NetworkInformationLike }).connection;
    const skip =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      connection?.saveData === true ||
      /(^|-)2g$/.test(connection?.effectiveType ?? '');
    if (skip) return;

    let idleId: number | undefined;
    let timeoutId: number | undefined;
    const attach = () => {
      const file = window.matchMedia('(max-width: 768px)').matches ? 'gateremote-hero-mobile.mp4' : 'gateremote-hero.mp4';
      video.src = `${basePath}/videos/${file}`;
      video.play().catch(() => {
        /* Autoplay can be refused; the poster stays visible. */
      });
    };
    const schedule = () => {
      if (typeof window.requestIdleCallback === 'function') {
        idleId = window.requestIdleCallback(attach, { timeout: 2500 });
      } else {
        timeoutId = setTimeout(attach, 1200) as unknown as number;
      }
    };

    if (document.readyState === 'complete') {
      schedule();
    } else {
      window.addEventListener('load', schedule, { once: true });
    }

    return () => {
      window.removeEventListener('load', schedule);
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, []);

  return videoRef;
}

export default function HeroSection() {
  const dict = useDict();
  const videoRef = useDeferredHeroVideo();

  return (
    <section id="home-intro" className="relative overflow-hidden">
      {/* Deep background */}
      <div className="absolute inset-0 bg-[#062748]" />

      {/* Technical grid */}
      <div className="absolute inset-0 tech-grid" />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            {/* Amber subtitle */}
            <p className="text-[#FF8A1F] font-bold text-lg mb-6 tracking-wide" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
              {dict.hero.tagline}
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-bold text-[#F7FBFF] leading-[1.1] mb-6" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
              {dict.hero.title}
            </h1>

            <p className="text-base text-[#C7D7E8] leading-relaxed mb-10 max-w-lg">
              {dict.hero.subtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              <LeadModalTrigger
                prefillType="oem"
                inquiryContext={{ productInterest: dict.buyerPaths.paths[0].title }}
                className="btn-glow bg-[#FF8A1F] hover:bg-[#F97316] text-[#062748] font-bold px-8 py-3.5 rounded-lg transition-all hover:shadow-xl hover:shadow-amber-500/20 text-[14px]"
              >
                {dict.hero.modelDetailsCta}
              </LeadModalTrigger>
              <LeadModalTrigger
                prefillType="compatibility"
                inquiryContext={{ productInterest: dict.buyerPaths.paths[1].title }}
                className="group border border-[#2A587C] hover:border-[#FF8A1F]/40 text-[#C7D7E8] hover:text-[#F7FBFF] font-medium px-8 py-3.5 rounded-lg transition-all text-[14px] flex items-center gap-2 cursor-pointer"
              >
                {dict.hero.supportedBrandsCta}
                <span className="text-[#FF8A1F] group-hover:translate-x-1 transition-transform">&rarr;</span>
              </LeadModalTrigger>
            </div>
            <p className="mt-5 text-sm text-[#C7D7E8]">
              {dict.hero.unknownModelCta}
            </p>
          </div>

          {/* Right: Product showcase */}
          <div>
            <div className="relative bg-[#08345F]/80 border border-[#123D63] rounded-lg p-2 backdrop-blur-sm transition-colors duration-300 hover:border-[#FF8A1F]/35">
              <div className="relative overflow-hidden rounded-md bg-[#062748] aspect-video">
                <video
                  ref={videoRef}
                  className="h-full w-full object-contain"
                  muted
                  loop
                  playsInline
                  preload="none"
                  poster={videoPhoto('engineering', 640)}
                  aria-label={dict.visuals.footageTitle}
                />
              </div>
              <p className="text-[#7F9AB7] text-[10px] tracking-widest mt-4 text-center" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
                {dict.visuals.footageTitle}
              </p>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-20 pt-8 border-t border-[#123D63]">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {trustItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-center gap-3 animate-fade-in-up" style={{ animationDelay: `${0.5 + i * 0.1}s` }}>
                  <div className="w-8 h-8 bg-[#FF8A1F]/8 rounded-lg flex items-center justify-center flex-shrink-0 border border-[#FF8A1F]/20">
                    <Icon className="w-3.5 h-3.5 text-[#FF8A1F]" />
                  </div>
                  <span className="text-[13px] font-medium text-[#C7D7E8] leading-snug">{dict.hero.trustItems[i]}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
