export default function Footer() {
  return (
    <footer className="relative px-6 pt-16 pb-10 overflow-hidden"
      style={{ background: "#02080f" }}>

      <div className="divider-subtle absolute top-0 left-0 right-0"/>

      {/* Very subtle glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.04) 0%, transparent 70%)" }}/>

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 mb-14">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center"
                style={{ boxShadow: "0 0 20px rgba(59,130,246,0.25)" }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2L14 8L8 14L2 8Z" fill="none" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                  <circle cx="8" cy="8" r="2.5" fill="white"/>
                </svg>
              </div>
              <span className="text-white font-semibold text-lg tracking-[-0.02em]">Linkea</span>
            </div>
            <p className="text-blue-200/30 text-sm leading-relaxed max-w-xs">
              Lance ta startup avec une équipe étudiante d&apos;élite. De l&apos;idée au MVP.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm">
            <a href="#solution"     className="text-blue-200/35 hover:text-white transition-colors duration-200">Solution</a>
            <a href="#how-it-works" className="text-blue-200/35 hover:text-white transition-colors duration-200">Process</a>
            <a href="#whitelist"    className="text-blue-200/35 hover:text-white transition-colors duration-200">Beta</a>
            <a href="mailto:hello@linkea.co" className="text-blue-200/35 hover:text-white transition-colors duration-200">Contact</a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="divider-subtle mb-8"/>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-200/20 text-sm">© 2025 Linkea. Tous droits réservés.</p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500/40 animate-pulse"/>
            <span className="text-blue-200/20 text-xs font-medium">Construisons ensemble.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
