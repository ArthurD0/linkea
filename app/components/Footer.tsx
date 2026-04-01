export default function Footer() {
  return (
    <footer className="relative px-6 pt-16 pb-10 overflow-hidden"
      style={{ background: "#0f172a" }}>

      <div className="divider-subtle absolute top-0 left-0 right-0"/>

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 mb-14">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2L14 8L8 14L2 8Z" fill="none" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                  <circle cx="8" cy="8" r="2.5" fill="white"/>
                </svg>
              </div>
              <span className="text-white font-semibold text-lg tracking-[-0.02em]">Linkea</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Lance ta startup avec une équipe étudiante d&apos;élite. De l&apos;idée au MVP.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm">
            <a href="#solution"     className="text-slate-500 hover:text-white transition-colors duration-200">Solution</a>
            <a href="#how-it-works" className="text-slate-500 hover:text-white transition-colors duration-200">Process</a>
            <a href="#whitelist"    className="text-slate-500 hover:text-white transition-colors duration-200">Beta</a>
            <a href="mailto:hello@linkea.co" className="text-slate-500 hover:text-white transition-colors duration-200">Contact</a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="divider-subtle mb-8"/>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">© 2025 Linkea. Tous droits réservés.</p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50 animate-pulse"/>
            <span className="text-slate-600 text-xs font-medium">Construisons ensemble.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
