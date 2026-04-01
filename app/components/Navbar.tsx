export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-5 pt-4">
      <div className="mx-auto max-w-6xl">
        <nav className="glass-nav flex items-center justify-between rounded-2xl px-5 py-3">

          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative h-8 w-8 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shrink-0"
              style={{ boxShadow: "0 0 20px rgba(59,130,246,0.35)" }}>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M7.5 1.5L13.5 7.5L7.5 13.5L1.5 7.5Z" fill="none" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                <circle cx="7.5" cy="7.5" r="2.2" fill="white"/>
              </svg>
            </div>
            <span className="text-white font-semibold text-[17px] tracking-[-0.02em] group-hover:text-blue-100 transition-colors">
              Linkea
            </span>
          </a>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-1">
            {[
              { label: "Solution",          href: "#solution" },
              { label: "Comment ça marche", href: "#how-it-works" },
              { label: "Rejoindre",         href: "#whitelist" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-blue-200/50 hover:text-white text-sm font-medium px-4 py-2 rounded-xl hover:bg-white/[0.04] transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#whitelist"
            className="hidden sm:inline-flex items-center gap-2 text-blue-200/70 hover:text-white text-sm font-medium px-4 py-2 rounded-full border border-blue-400/20 bg-white/[0.03] hover:bg-white/[0.07] hover:border-blue-400/40 transition-all duration-200"
          >
            Accès beta
            <svg width="12" height="12" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 6.5h9M8 3l3 3.5L8 10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
}
