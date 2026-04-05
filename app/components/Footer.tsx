export default function Footer() {
  return (
    <footer className="relative px-6 pt-16 pb-10 overflow-hidden"
      style={{ background: "#0f172a" }}>

      <div className="absolute top-0 left-0 right-0" style={{ height: "1px", background: "rgba(236,72,153,0.12)" }}/>

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 mb-14">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/favicon.png" alt="Linkea" style={{ height: 36, width: 36, objectFit: "contain" }} />
              <span className="text-white font-semibold text-lg tracking-[-0.02em]">Linkea</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-4">
              Né à l&apos;EFREI Paris · 2026. Linkea connecte porteurs de projet et développeurs étudiants d&apos;élite dans un cadre supervisé — de l&apos;idée au MVP live.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-slate-600 text-xs font-medium">Fondé par</span>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2.5 py-1 rounded-lg font-semibold"
                  style={{ background: "rgba(37,99,235,0.12)", color: "#60a5fa" }}>Arthur · CEO</span>
                <span className="text-xs px-2.5 py-1 rounded-lg font-semibold"
                  style={{ background: "rgba(236,72,153,0.12)", color: "#f472b6" }}>Amine · CTO</span>
              </div>
            </div>
          </div>

          {/* Links + social */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex items-center gap-8 text-sm">
              <a href="#solution"     className="text-slate-400 hover:text-white transition-colors duration-200">Solution</a>
              <a href="#how-it-works" className="text-slate-400 hover:text-white transition-colors duration-200">Process</a>
              <a href="#whitelist"    className="text-slate-400 hover:text-white transition-colors duration-200">Beta</a>
              <a href="mailto:hello@linkea.co" className="text-slate-400 hover:text-white transition-colors duration-200">Contact</a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-200"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                aria-label="LinkedIn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="text-slate-400 hover:text-white">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-200"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                aria-label="Twitter / X">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-slate-400 hover:text-white">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mb-8" style={{ height: "1px", background: "rgba(255,255,255,0.05)" }}/>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">© 2026 Linkea. Tous droits réservés.</p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#ec4899", opacity: 0.6 }}/>
            <span className="text-slate-500 text-xs font-medium">Linkea · EFREI Paris 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
