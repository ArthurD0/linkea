"use client";

const ARC = 2 * Math.PI * 36;

// Floating particle definitions — varied sizes, colors, positions
const PARTICLES = [
  { t:"18%", l:"5%",   s:12, d:"0s",    o:0.55, c:"#60a5fa" },
  { t:"32%", l:"10%",  s:6,  d:"2.1s",  o:0.35, c:"#818cf8" },
  { t:"55%", l:"7%",   s:8,  d:"4.4s",  o:0.3,  c:"#38bdf8" },
  { t:"70%", l:"12%",  s:5,  d:"1.6s",  o:0.25, c:"#60a5fa" },
  { t:"82%", l:"6%",   s:9,  d:"3.2s",  o:0.2,  c:"#818cf8" },
  { t:"14%", r:"6%",   s:14, d:"3.5s",  o:0.5,  c:"#60a5fa" },
  { t:"28%", r:"9%",   s:7,  d:"0.8s",  o:0.3,  c:"#38bdf8" },
  { t:"48%", r:"5%",   s:10, d:"2.6s",  o:0.35, c:"#818cf8" },
  { t:"65%", r:"11%",  s:5,  d:"1.2s",  o:0.2,  c:"#60a5fa" },
  { t:"78%", r:"15%",  s:8,  d:"4.8s",  o:0.25, c:"#38bdf8" },
  { t:"22%", l:"38%",  s:4,  d:"0.5s",  o:0.2,  c:"#a78bfa" },
  { t:"72%", l:"55%",  s:5,  d:"3.8s",  o:0.15, c:"#818cf8" },
];

export default function Hero() {
  return (
    <section className="noise-overlay relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(175deg, #020912 0%, #060f28 45%, #040c1e 75%, #020912 100%)" }}>

      {/* ══════════════════════════════════════════════════
          LAYER 1 — Deep atmosphere: large soft aurora blobs
      ══════════════════════════════════════════════════ */}

      {/* Primary top-left aurora — blue, very visible */}
      <div className="absolute pointer-events-none animate-aurora"
        style={{
          top: "-20%", left: "-12%",
          width: "1000px", height: "1000px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(37,99,235,0.32) 0%, rgba(59,130,246,0.12) 35%, transparent 65%)",
          filter: "blur(80px)",
        }} />

      {/* Secondary bottom-right aurora — indigo */}
      <div className="absolute pointer-events-none animate-aurora-r"
        style={{
          bottom: "-25%", right: "-15%",
          width: "900px", height: "900px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(99,102,241,0.28) 0%, rgba(129,140,248,0.1) 35%, transparent 65%)",
          filter: "blur(75px)",
        }} />

      {/* Tertiary mid-left — cyan accent */}
      <div className="absolute pointer-events-none"
        style={{
          top: "45%", left: "15%",
          width: "600px", height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(14,165,233,0.16) 0%, transparent 60%)",
          filter: "blur(60px)",
          animation: "aurora 28s ease-in-out infinite reverse",
        }} />

      {/* ══════════════════════════════════════════════════
          LAYER 2 — Focused spotlight cone from top-center
      ══════════════════════════════════════════════════ */}

      {/* Wide ambient base glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "1400px", height: "900px",
          background: "radial-gradient(ellipse 55% 75% at 50% -5%, rgba(37,99,235,0.28) 0%, rgba(99,102,241,0.1) 40%, transparent 65%)",
        }} />

      {/* Sharp inner beam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "700px", height: "700px",
          background: "radial-gradient(ellipse 40% 70% at 50% -15%, rgba(96,165,250,0.22) 0%, rgba(59,130,246,0.08) 45%, transparent 65%)",
        }} />

      {/* Ultra-narrow bright spike */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "300px", height: "500px",
          background: "radial-gradient(ellipse 30% 80% at 50% -20%, rgba(147,197,253,0.18) 0%, transparent 60%)",
        }} />

      {/* ══════════════════════════════════════════════════
          LAYER 3 — Central "halo" behind the headline
      ══════════════════════════════════════════════════ */}

      <div className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-glow-pulse"
        style={{
          width: "900px", height: "500px",
          background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(37,99,235,0.2) 0%, rgba(99,102,241,0.08) 45%, transparent 70%)",
          filter: "blur(40px)",
        }} />

      {/* ══════════════════════════════════════════════════
          LAYER 4 — Grid with perspective fade
      ══════════════════════════════════════════════════ */}

      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(96,165,250,0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96,165,250,0.055) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 75% 65% at 50% 40%, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 80%)",
        }} />

      {/* ══════════════════════════════════════════════════
          LAYER 5 — Rotating radar rings (more visible)
      ══════════════════════════════════════════════════ */}

      {/* Outer slow rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <svg width="1200" height="1200" viewBox="0 0 1200 1200"
          className="animate-rotate-slow absolute"
          style={{ top:"50%", left:"50%", transform:"translate(-50%,-50%)", opacity: 0.055 }}>
          {[100,200,310,420,520].map(r => (
            <circle key={r} cx="600" cy="600" r={r}
              fill="none" stroke="#60a5fa" strokeWidth="0.8"
              strokeDasharray={r < 250 ? "5 9" : "2 7"} />
          ))}
          <line x1="600" y1="80"  x2="600" y2="1120" stroke="#60a5fa" strokeWidth="0.5"/>
          <line x1="80"  y1="600" x2="1120" y2="600" stroke="#60a5fa" strokeWidth="0.5"/>
          <line x1="220" y1="220" x2="980" y2="980" stroke="#60a5fa" strokeWidth="0.4"/>
          <line x1="980" y1="220" x2="220" y2="980" stroke="#60a5fa" strokeWidth="0.4"/>
        </svg>

        {/* Counter-rotating inner ring */}
        <svg width="500" height="500" viewBox="0 0 500 500"
          className="animate-rotate-slow-r absolute"
          style={{ top:"50%", left:"50%", transform:"translate(-50%,-50%)", opacity: 0.08 }}>
          <circle cx="250" cy="250" r="180" fill="none" stroke="#818cf8" strokeWidth="0.7" strokeDasharray="3 8"/>
          <circle cx="250" cy="250" r="120" fill="none" stroke="#60a5fa" strokeWidth="0.5" strokeDasharray="6 12"/>
          {/* Nodes on ring */}
          {[0,60,120,180,240,300].map(deg => {
            const rad = (deg * Math.PI) / 180;
            return (
              <circle key={deg}
                cx={250 + 180 * Math.cos(rad)}
                cy={250 + 180 * Math.sin(rad)}
                r="3" fill="#818cf8" opacity="0.7" />
            );
          })}
        </svg>
      </div>

      {/* ══════════════════════════════════════════════════
          LAYER 6 — Diagonal light rays (God rays)
      ══════════════════════════════════════════════════ */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        {/* Left ray */}
        <div className="absolute top-0 left-1/2"
          style={{
            width: "2px", height: "70vh",
            background: "linear-gradient(180deg, rgba(96,165,250,0.25) 0%, transparent 100%)",
            transform: "rotate(-28deg)",
            transformOrigin: "top center",
            filter: "blur(3px)",
            opacity: 0.6,
          }} />
        {/* Right ray */}
        <div className="absolute top-0 left-1/2"
          style={{
            width: "2px", height: "70vh",
            background: "linear-gradient(180deg, rgba(147,197,253,0.2) 0%, transparent 100%)",
            transform: "rotate(28deg)",
            transformOrigin: "top center",
            filter: "blur(3px)",
            opacity: 0.5,
          }} />
        {/* Center ray */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2"
          style={{
            width: "3px", height: "60vh",
            background: "linear-gradient(180deg, rgba(147,197,253,0.3) 0%, transparent 100%)",
            filter: "blur(4px)",
            opacity: 0.7,
          }} />
      </div>

      {/* ══════════════════════════════════════════════════
          LAYER 7 — Scan line (faster, more vivid)
      ══════════════════════════════════════════════════ */}

      <div className="absolute left-0 right-0 h-[1px] pointer-events-none animate-scan"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(37,99,235,0.4) 10%, rgba(96,165,250,0.9) 30%, rgba(147,197,253,1) 50%, rgba(99,102,241,0.8) 70%, rgba(37,99,235,0.4) 90%, transparent 100%)",
          boxShadow: "0 0 12px rgba(96,165,250,0.8), 0 0 30px rgba(59,130,246,0.4)",
          zIndex: 2,
        }} />

      {/* ══════════════════════════════════════════════════
          LAYER 8 — Floating particles
      ══════════════════════════════════════════════════ */}

      {PARTICLES.map((p, i) => (
        <div key={i} className="absolute rounded-full animate-float pointer-events-none"
          style={{
            top: p.t,
            left: "l" in p ? p.l : undefined,
            right: "r" in p ? p.r : undefined,
            width:  `${p.s}px`,
            height: `${p.s}px`,
            background: p.c,
            opacity: p.o,
            animationDelay: p.d,
            boxShadow: `0 0 ${p.s * 2.5}px ${p.c}, 0 0 ${p.s * 5}px ${p.c}40`,
          }}
        />
      ))}

      {/* ══════════════════════════════════════════════════
          CONTENT
      ══════════════════════════════════════════════════ */}

      <div className="relative z-10 mx-auto max-w-6xl w-full px-6 pt-32 pb-24 flex flex-col items-center text-center">

        {/* Status badge */}
        <div className="opacity-0-init animate-fade-up delay-100 inline-flex items-center gap-3 glass rounded-full px-5 py-2.5 mb-14">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"/>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"/>
          </span>
          <span className="text-blue-200/65 text-sm font-medium tracking-wide">Beta privée · Places limitées</span>
          <span className="w-px h-3.5 bg-white/10"/>
          <span className="text-blue-400/55 text-[11px] font-bold uppercase tracking-[0.18em]">2026</span>
        </div>

        {/* ── Headline ── */}
        <h1 className="opacity-0-init animate-fade-up delay-200 font-bold tracking-[-0.035em] leading-[0.96] mb-10 max-w-5xl">
          <span className="block text-[clamp(50px,8.5vw,104px)] text-white"
            style={{ textShadow: "0 2px 30px rgba(37,99,235,0.2)" }}>
            Lance ta startup
          </span>
          <span className="block text-[clamp(50px,8.5vw,104px)] text-gradient-vivid text-glow">
            avec une équipe
          </span>
          <span className="block text-[clamp(34px,5.5vw,68px)] font-semibold mt-4"
            style={{ color: "rgba(147,197,253,0.28)" }}>
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
          <a href="#whitelist" className="btn-primary inline-flex items-center gap-3 text-white font-semibold text-[15px] px-10 rounded-2xl"
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
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(96,165,250,0.12)",
            backdropFilter: "blur(20px)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07), 0 4px 30px rgba(0,0,0,0.3)",
          }}>
          {[
            { val: "4–8",  unit: "sem.",    sub: "idée → MVP" },
            { val: "100%", unit: "validé",  sub: "profils vérifiés" },
            { val: "3×",   unit: "experts", sub: "dev · biz · design" },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-1.5 px-10 py-5"
              style={{ borderRight: i < 2 ? "1px solid rgba(255,255,255,0.055)" : "none" }}>
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl font-black text-white tracking-tight">{s.val}</span>
                <span className="text-[11px] font-bold uppercase tracking-wider"
                  style={{ color: "rgba(96,165,250,0.7)" }}>{s.unit}</span>
              </div>
              <p className="text-xs" style={{ color: "rgba(147,197,253,0.35)" }}>{s.sub}</p>
            </div>
          ))}
        </div>

        {/* ── Dashboard mockup ── */}
        <div className="opacity-0-init animate-fade-up delay-700 w-full max-w-4xl relative">

          {/* Glow pool beneath the mockup */}
          <div className="mockup-glow"/>

          {/* Floating mockup */}
          <div className="animate-float-card relative gradient-border rounded-3xl overflow-hidden"
            style={{
              background: "linear-gradient(160deg, rgba(8,18,52,0.95) 0%, rgba(3,8,28,0.98) 100%)",
              boxShadow: `
                0 0 0 1px rgba(96,165,250,0.1),
                0 50px 130px rgba(0,0,0,0.8),
                0 0 80px rgba(37,99,235,0.12),
                inset 0 1px 0 rgba(147,197,253,0.08)
              `,
            }}>

            {/* Glowing top border */}
            <div className="h-[1.5px] w-full animate-border-glow"
              style={{ background: "linear-gradient(90deg, transparent 2%, rgba(59,130,246,0.7) 25%, rgba(147,197,253,0.9) 50%, rgba(99,102,241,0.7) 75%, transparent 98%)" }}/>

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
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500/60 animate-pulse animate-flicker"/>
                <span className="text-[11px] font-mono" style={{ color: "rgba(96,165,250,0.4)" }}>live</span>
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
                      background: "linear-gradient(135deg, rgba(37,99,235,0.35), rgba(99,102,241,0.2))",
                      border: "1px solid rgba(59,130,246,0.25)",
                      boxShadow: "0 0 12px rgba(37,99,235,0.2)",
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
                      <stop offset="100%" stopColor="#818cf8"/>
                    </linearGradient>
                  </defs>
                  <circle cx="40" cy="40" r="36" fill="none" stroke="rgba(59,130,246,0.12)" strokeWidth="4"/>
                  <circle cx="40" cy="40" r="36" fill="none" stroke="url(#ag)" strokeWidth="4.5"
                    strokeLinecap="round"
                    strokeDasharray={`${0.97 * ARC} ${ARC}`}
                    transform="rotate(-90 40 40)"
                    style={{ filter: "drop-shadow(0 0 10px rgba(59,130,246,0.85)) drop-shadow(0 0 20px rgba(99,102,241,0.4))" }}/>
                  <text x="40" y="36" textAnchor="middle" fill="white" fontSize="14" fontWeight="800" fontFamily="inherit">97%</text>
                  <text x="40" y="50" textAnchor="middle" fill="rgba(147,197,253,0.4)" fontSize="8" fontFamily="inherit">match</text>
                </svg>
                <div className="flex items-center gap-1.5">
                  <div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-400/30"/>
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400/40"
                    style={{ boxShadow: "0 0 6px rgba(96,165,250,0.5)" }}/>
                  <div className="h-px w-8 bg-gradient-to-l from-transparent to-blue-400/30"/>
                </div>
              </div>

              {/* Team */}
              <div className="rounded-2xl p-5 text-left"
                style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] mb-4"
                  style={{ color: "rgba(96,165,250,0.4)" }}>Équipe matchée</p>

                {[
                  { role: "Full-Stack Dev",  school: "Polytechnique", c: "#2563eb" },
                  { role: "Product Manager", school: "HEC Paris",      c: "#7c3aed" },
                  { role: "Designer UX/UI",  school: "Sciences Po",    c: "#0891b2" },
                ].map(m => (
                  <div key={m.role} className="flex items-center gap-3 mb-3 last:mb-0">
                    <div className="w-8 h-8 rounded-xl shrink-0 flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${m.c}40, ${m.c}20)`,
                        border: `1px solid ${m.c}35`,
                        boxShadow: `0 0 8px ${m.c}20`,
                      }}>
                      <div className="w-3 h-3 rounded-full" style={{ background: `${m.c}70` }}/>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold truncate" style={{ color: "rgba(255,255,255,0.75)" }}>{m.role}</p>
                      <p className="text-[10px] truncate" style={{ color: "rgba(96,165,250,0.38)" }}>{m.school}</p>
                    </div>
                    <div className="w-2 h-2 rounded-full shrink-0"
                      style={{ background: "rgba(74,222,128,0.75)", boxShadow: "0 0 8px rgba(74,222,128,0.6)" }}/>
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
              <span className="text-[11px] font-mono" style={{ color: "rgba(96,165,250,0.35)" }}>Démarrage · 48h</span>
            </div>
          </div>

          {/* Reflected glow above next section */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-3/4 h-20 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse, rgba(37,99,235,0.2) 0%, transparent 70%)",
              filter: "blur(20px)",
            }}/>
        </div>
      </div>

      {/* Bottom vignette — smooth transition into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #020912)" }}/>
    </section>
  );
}
