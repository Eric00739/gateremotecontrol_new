export default function AnnouncementBar() {
  return (
    <div className="bg-[#0D1117] relative overflow-hidden border-b border-[#21262D]">
      <div className="waveform-sweep" />
      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-8">
        <p className="text-[10px] text-[#8B949E] font-medium tracking-wider" style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}>
          COMPATIBLE REPLACEMENT REMOTES FOR MAJOR GATE &amp; GARAGE SYSTEMS&nbsp;&nbsp;|&nbsp;&nbsp;OEM / ODM / WHOLESALE
        </p>
        <a
          href="#contact"
          className="text-[10px] text-[#F59E0B] hover:text-[#D97706] transition-colors font-semibold tracking-wide flex items-center gap-2"
          style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
        >
          <span className="signal-dot" />
          TALK TO AN ENGINEER
        </a>
      </div>
    </div>
  );
}
