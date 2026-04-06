export default function Footer() {
  return (
    <footer className="relative px-6 pt-16 pb-10 overflow-hidden"
      style={{ background: "#f7f7f8" }}>

      <div className="absolute top-0 left-0 right-0" style={{ height: "1px", background: "rgba(15,23,42,0.08)" }}/>

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Main row */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 mb-14">

          {/* Brand */}
          <div>
            <div className="mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Linkea" style={{ height: 40, width: "auto", objectFit: "contain" }} />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-6">
              Connecte ton projet avec une équipe étudiante d&apos;élite et transforme ton idée en produit — en quelques semaines.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-200"
                style={{ background: "rgba(15,23,42,0.06)", border: "1px solid rgba(15,23,42,0.08)" }}
                aria-label="LinkedIn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#475569">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-200"
                style={{ background: "rgba(15,23,42,0.06)", border: "1px solid rgba(15,23,42,0.08)" }}
                aria-label="Twitter / X">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#475569">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-200"
                style={{ background: "rgba(15,23,42,0.06)", border: "1px solid rgba(15,23,42,0.08)" }}
                aria-label="Instagram">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="1.8">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="#475569" stroke="none"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-slate-900 text-[11px] font-bold uppercase tracking-[0.18em] mb-5">Navigation</p>
            <ul className="space-y-3">
              {[
                { label: "La solution",    href: "/#solution" },
                { label: "Comment ça marche", href: "/#how-it-works" },
                { label: "Pourquoi nous",  href: "/pourquoi-nous" },
                { label: "Nos hubs",       href: "/#hubs" },
                { label: "Accès beta",     href: "/#whitelist" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-slate-500 text-sm hover:text-slate-900 transition-colors duration-200">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-slate-900 text-[11px] font-bold uppercase tracking-[0.18em] mb-5">Contact</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 mt-0.5 shrink-0 flex items-center justify-center">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="M2 7l10 7 10-7"/>
                  </svg>
                </div>
                <a href="mailto:hello@linkea.co" className="text-slate-500 text-sm hover:text-slate-900 transition-colors duration-200">
                  hello@linkea.co
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 mt-0.5 shrink-0 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z"/>
                    <circle cx="12" cy="9" r="2.5"/>
                  </svg>
                </div>
                <span className="text-slate-500 text-sm leading-relaxed">
                  Paris, France
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom row */}
        <div className="pt-8" style={{ borderTop: "1px solid rgba(15,23,42,0.07)" }}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">© 2026 Linkea. Tous droits réservés.</p>
            <div className="flex items-center gap-6 text-slate-400 text-sm">
              <a href="/politique-de-confidentialite" className="hover:text-slate-600 transition-colors duration-200">Politique de confidentialité</a>
              <a href="/mentions-legales" className="hover:text-slate-600 transition-colors duration-200">Mentions légales</a>
              <a href="/cgu" className="hover:text-slate-600 transition-colors duration-200">CGU</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
