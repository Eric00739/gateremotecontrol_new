export default function AnnouncementBar() {
  return (
    <div className="bg-[#020C1B] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, transparent 0%, rgba(255,107,0,0.15) 50%, transparent 100%)`,
          animation: 'waveform-sweep 6s ease-in-out infinite',
          backgroundSize: '200% 100%',
        }} />
      </div>
      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9">
        <p className="text-[11px] text-white/70 font-medium tracking-wide" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>
          COMPATIBLE REPLACEMENT REMOTES FOR MAJOR GATE &amp; GARAGE SYSTEMS&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;OEM / ODM / WHOLESALE
        </p>
        <a
          href="#contact"
          className="text-[11px] text-[#FF6B00] hover:text-[#FF8A33] transition-colors font-semibold tracking-wide flex items-center gap-1.5"
          style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
        >
          <span className="signal-dot" />
          TALK TO AN ENGINEER
        </a>
      </div>
    </div>
  );
}
