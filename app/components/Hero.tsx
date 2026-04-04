"use client";

const ARC = 2 * Math.PI * 36;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white">

      {/* Blue aurora — top left */}
      <div className="absolute pointer-events-none animate-aurora"
        style={{
          top: "-15%", left: "-10%",
          width: "800px", height: "800px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(37,99,235,0.08) 0%, rgba(59,130,246,0.03) 40%, transparent 65%)",
          filter: "blur(80px)",
        }} />

      {/* Pink aurora — bottom right */}
      <div className="absolute pointer-events-none animate-aurora-r"
        style={{
          bottom: "-20%", right: "-12%",
          width: "700px", height: "700px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(236,72,153,0.07) 0%, rgba(244,114,182,0.03) 40%, transparent 65%)",
          filter: "blur(70px)",
        }} />

      {/* Top-center spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "1200px", height: "700px",
          background: "radial-gradient(ellipse 55% 70% at 50% -5%, rgba(37,99,235,0.07) 0%, rgba(236,72,153,0.03) 45%, transparent 65%)",
        }} />

      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(15,23,42,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,23,42,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 75% 65% at 50% 40%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.15) 55%, transparent 80%)",
        }} />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-6xl w-full px-6 pt-32 pb-24 flex flex-col items-center text-center">

        {/* Status badge */}
        <div className="opacity-0-init animate-fade-up delay-100 inline-flex items-center gap-3 rounded-full px-5 py-2.5 mb-14"
          style={{
            background: "#fdf4f8",
            border: "1px solid rgba(236,72,153,0.2)",
          }}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: "#ec4899" }}/>
            <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#ec4899" }}/>
          </span>
          <span className="text-slate-600 text-sm font-medium tracking-wide">Beta privée · Places limitées</span>
          <span className="w-px h-3.5 bg-pink-200"/>
          <span className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: "#be185d" }}>2026</span>
        </div>

        {/* Headline */}
        <h1 className="opacity-0-init animate-fade-up delay-200 font-bold tracking-[-0.035em] leading-[0.96] mb-10 max-w-5xl">
          <span className="block text-[clamp(50px,8.5vw,104px)] text-slate-900">
            Lance ta startup
          </span>
          <span className="block text-[clamp(50px,8.5vw,104px)] text-gradient-vivid">
            avec une équipe
          </span>
          <span className="block text-[clamp(34px,5.5vw,68px)] font-semibold mt-4 text-slate-400">
            étudiante d&apos;élite
          </span>
        </h1>

        {/* Subheadline */}
        <p className="opacity-0-init animate-fade-up delay-300 body-copy max-w-xl text-lg sm:text-[19px] mb-14">
          Linkea connecte développeurs, profils business et mentors
          pour construire des startups — de l&apos;idée au MVP en quelques semaines.
        </p>

        {/* CTA buttons */}
        <div className="opacity-0-init animate-fade-up delay-400 flex flex-col sm:flex-row items-center gap-4 mb-20">
          <a href="#whitelist" className="btn-pink inline-flex items-center gap-3 text-white font-semibold text-[15px] px-10 rounded-2xl"
            style={{ paddingTop: "18px", paddingBottom: "18px" }}>
            Accéder à la beta privée
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <a href="#how-it-works" className="btn-ghost">
            Comment ça marche
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M3 7h8M8 4l3 3-3 3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Stats pill */}
        <div className="opacity-0-init animate-fade-up delay-500 inline-flex flex-col sm:flex-row items-stretch mb-28 rounded-2xl overflow-hidden"
          style={{
            background: "#ffffff",
            border: "1px solid rgba(15,23,42,0.08)",
            boxShadow: "0 1px 3px rgba(15,23,42,0.04), 0 8px 24px rgba(15,23,42,0.06)",
          }}>
          {[
            { val: "4–8",  unit: "sem.",    sub: "idée → MVP" },
            { val: "100%", unit: "validé",  sub: "profils vérifiés" },
            { val: "3×",   unit: "experts", sub: "dev · biz · design" },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-1.5 px-10 py-5"
              style={{ borderRight: i < 2 ? "1px solid rgba(15,23,42,0.06)" : "none" }}>
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl font-black text-slate-900 tracking-tight">{s.val}</span>
                <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: "#be185d" }}>{s.unit}</span>
              </div>
              <p className="text-xs text-slate-500">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Dashboard mockup */}
        <div className="opacity-0-init animate-fade-up delay-700 w-full max-w-4xl relative">

          {/* Glow beneath */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-4/5 h-20 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse, rgba(37,99,235,0.1) 0%, transparent 70%)",
              filter: "blur(20px)",
            }}/>

          {/* Floating mockup */}
          <div className="animate-float-card relative gradient-border rounded-3xl overflow-hidden"
            style={{
              background: "linear-gradient(160deg, #0c1a3a 0%, #060e25 100%)",
              boxShadow: `
                0 0 0 1px rgba(15,23,42,0.1),
                0 40px 100px rgba(15,23,42,0.15),
                0 0 60px rgba(37,99,235,0.06)
              `,
            }}>

            {/* Glowing top border */}
            <div className="h-[1.5px] w-full animate-border-glow"
              style={{ background: "linear-gradient(90deg, transparent 2%, rgba(59,130,246,0.5) 25%, rgba(244,114,182,0.6) 50%, rgba(99,102,241,0.5) 75%, transparent 98%)" }}/>

            {/* Window chrome */}
            <div className="flex items-center gap-3 px-6 py-4"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full" style={{ background: "rgba(239,68,68,0.55)" }}/>
                <div className="w-3 h-3 rounded-full" style={{ background: "rgba(234,179,8,0.55)" }}/>
                <div className="w-3 h-3 rounded-full" style={{ background: "rgba(34,197,94,0.55)" }}/>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="flex items-center gap-2 rounded-lg px-4 py-1.5"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"/>
                  <span className="text-[11px] font-mono" style={{ color: "rgba(147,197,253,0.35)" }}>
                    app.linkea.co/dashboard
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "rgba(236,72,153,0.6)" }}/>
                <span className="text-[11px] font-mono" style={{ color: "rgba(244,114,182,0.4)" }}>live</span>
              </div>
            </div>

            {/* 3-column layout */}
            <div className="grid grid-cols-[1fr_88px_1fr] sm:grid-cols-[1fr_108px_1fr] gap-3 p-5 sm:p-7">

              {/* Project */}
              <div className="rounded-2xl p-5 text-left"
                style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] mb-4"
                  style={{ color: "rgba(96,165,250,0.4)" }}>Votre projet</p>

                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, rgba(37,99,235,0.35), rgba(236,72,153,0.2))",
                      border: "1px solid rgba(59,130,246,0.25)",
                    }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="rgba(96,165,250,0.85)" strokeWidth="1.5">
                      <path d="M8 1L15 5V11L8 15L1 11V5L8 1Z" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold leading-none mb-1" style={{ color: "rgba(255,255,255,0.82)" }}>FinTech AI</p>
                    <p className="text-[11px]" style={{ color: "rgba(96,165,250,0.4)" }}>Early Stage · B2B SaaS</p>
                  </div>
                </div>

                {[
                  { k: "Secteur", v: "Finance · IA" },
                  { k: "Stade",   v: "Idée validée" },
                  { k: "Besoin",  v: "MVP complet" },
                ].map(row => (
                  <div key={row.k} className="flex items-center justify-between mb-2">
                    <span className="text-[11px]" style={{ color: "rgba(96,165,250,0.3)" }}>{row.k}</span>
                    <span className="text-[11px] font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>{row.v}</span>
                  </div>
                ))}
              </div>

              {/* Match */}
              <div className="flex flex-col items-center justify-center gap-3">
                <svg width="76" height="76" viewBox="0 0 80 80" className="overflow-visible">
                  <defs>
                    <linearGradient id="ag" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%"   stopColor="#3b82f6"/>
                      <stop offset="100%" stopColor="#ec4899"/>
                    </linearGradient>
                  </defs>
                  <circle cx="40" cy="40" r="36" fill="none" stroke="rgba(59,130,246,0.12)" strokeWidth="4"/>
                  <circle cx="40" cy="40" r="36" fill="none" stroke="url(#ag)" strokeWidth="4.5"
                    strokeLinecap="round"
                    strokeDasharray={`${0.97 * ARC} ${ARC}`}
                    transform="rotate(-90 40 40)"
                    style={{ filter: "drop-shadow(0 0 8px rgba(236,72,153,0.5))" }}/>
                  <text x="40" y="36" textAnchor="middle" fill="white" fontSize="14" fontWeight="800" fontFamily="inherit">97%</text>
                  <text x="40" y="50" textAnchor="middle" fill="rgba(244,114,182,0.4)" fontSize="8" fontFamily="inherit">match</text>
                </svg>
                <div className="flex items-center gap-1.5">
                  <div className="h-px w-8 bg-gradient-to-r from-transparent to-pink-400/30"/>
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-400/40"/>
                  <div className="h-px w-8 bg-gradient-to-l from-transparent to-pink-400/30"/>
                </div>
              </div>

              {/* Team */}
              <div className="rounded-2xl p-5 text-left"
                style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] mb-4"
                  style={{ color: "rgba(96,165,250,0.4)" }}>Équipe matchée</p>

                {[
                  { role: "Full-Stack Dev",  school: "Polytechnique", c: "#2563eb" },
                  { role: "Product Manager", school: "HEC Paris",      c: "#ec4899" },
                  { role: "Designer UX/UI",  school: "Sciences Po",    c: "#7c3aed" },
                ].map(m => (
                  <div key={m.role} className="flex items-center gap-3 mb-3 last:mb-0">
                    <div className="w-8 h-8 rounded-xl shrink-0 flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${m.c}40, ${m.c}20)`,
                        border: `1px solid ${m.c}35`,
                      }}>
                      <div className="w-3 h-3 rounded-full" style={{ background: `${m.c}70` }}/>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold truncate" style={{ color: "rgba(255,255,255,0.75)" }}>{m.role}</p>
                      <p className="text-[10px] truncate" style={{ color: "rgba(96,165,250,0.38)" }}>{m.school}</p>
                    </div>
                    <div className="w-2 h-2 rounded-full shrink-0"
                      style={{ background: "rgba(74,222,128,0.75)" }}/>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom status */}
            <div className="mx-5 sm:mx-7 mb-6 sm:mb-7 flex items-center justify-between rounded-xl px-5 py-3"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.045)" }}>
              <div className="flex items-center gap-5">
                {["Dispo confirmée", "Compétences validées", "Match approuvé"].map(s => (
                  <div key={s} className="hidden sm:flex items-center gap-1.5">
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="rgba(74,222,128,0.75)" strokeWidth="1.8">
                      <path d="M1.5 5.5l2.5 2.5L9.5 2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-[11px]" style={{ color: "rgba(74,222,128,0.5)" }}>{s}</span>
                  </div>
                ))}
              </div>
              <span className="text-[11px] font-mono" style={{ color: "rgba(244,114,182,0.35)" }}>Démarrage · 48h</span>
            </div>
          </div>
        </div>

        {/* Schools trust marquee */}
        <div className="opacity-0-init animate-fade-up delay-1000 mt-16 w-full max-w-4xl mx-auto">
          <p className="text-slate-400 text-xs font-medium uppercase tracking-[0.2em] text-center mb-6">
            Équipes issues des meilleures écoles
          </p>
          <div className="relative overflow-hidden">
            {/* Fade masks */}
            <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to right, white, transparent)" }}/>
            <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to left, white, transparent)" }}/>

            {/* Scrolling track */}
            <div className="flex whitespace-nowrap" style={{ width: "max-content", animation: "marquee 22s linear infinite", willChange: "transform" }}>
              {[
                { name: "École Polytechnique",  style: { fontWeight: 700, letterSpacing: "-0.02em" } },
                { name: "HEC Paris",             style: { fontWeight: 800, letterSpacing: "0.05em", textTransform: "uppercase" as const } },
                { name: "CentraleSupélec",       style: { fontWeight: 600, letterSpacing: "-0.01em" } },
                { name: "ESSEC",                 style: { fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" as const } },
                { name: "Sciences Po",           style: { fontWeight: 500, fontStyle: "italic" } },
                { name: "ESCP",                  style: { fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase" as const } },
                { name: "Mines ParisTech",       style: { fontWeight: 600 } },
                { name: "Télécom Paris",         style: { fontWeight: 700, letterSpacing: "-0.01em" } },
                { name: "Arts et Métiers",       style: { fontWeight: 600 } },
                { name: "EM Lyon",               style: { fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase" as const } },
                { name: "INSA Lyon",             style: { fontWeight: 700, letterSpacing: "0.04em" } },
                { name: "EDHEC",                 style: { fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" as const } },
                /* duplicate for seamless loop */
                { name: "École Polytechnique",  style: { fontWeight: 700, letterSpacing: "-0.02em" } },
                { name: "HEC Paris",             style: { fontWeight: 800, letterSpacing: "0.05em", textTransform: "uppercase" as const } },
                { name: "CentraleSupélec",       style: { fontWeight: 600, letterSpacing: "-0.01em" } },
                { name: "ESSEC",                 style: { fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" as const } },
                { name: "Sciences Po",           style: { fontWeight: 500, fontStyle: "italic" } },
                { name: "ESCP",                  style: { fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase" as const } },
                { name: "Mines ParisTech",       style: { fontWeight: 600 } },
                { name: "Télécom Paris",         style: { fontWeight: 700, letterSpacing: "-0.01em" } },
                { name: "Arts et Métiers",       style: { fontWeight: 600 } },
                { name: "EM Lyon",               style: { fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase" as const } },
                { name: "INSA Lyon",             style: { fontWeight: 700, letterSpacing: "0.04em" } },
                { name: "EDHEC",                 style: { fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" as const } },
              ].map((school, i) => (
                <span key={i} className="inline-flex items-center mx-8 gap-8">
                  <span className="text-slate-400 text-[15px]" style={school.style}>
                    {school.name}
                  </span>
                  <span className="text-slate-200 text-lg">·</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #ffffff)" }}/>
    </section>
  );
}
