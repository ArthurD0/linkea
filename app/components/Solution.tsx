export default function Solution() {
  return (
    <section id="solution" className="relative py-36 px-6 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #020912 0%, #040e22 50%, #020912 100%)" }}>

      <div className="divider absolute top-0 left-0 right-0"/>

      {/* Strong central blue glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[1000px] h-[600px] rounded-full animate-glow-pulse"
          style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.16) 0%, rgba(99,102,241,0.07) 40%, transparent 65%)", filter: "blur(50px)" }}/>
      </div>

      {/* Top spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "800px", height: "500px",
          background: "radial-gradient(ellipse 50% 70% at 50% -10%, rgba(37,99,235,0.18) 0%, transparent 60%)",
        }}/>

      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(96,165,250,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.045) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 80%)",
        }}/>

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Header */}
        <div className="text-center mb-24">
          <p className="section-label mb-5">La solution</p>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-[-0.03em] leading-[0.97] mb-6">
            On construit les équipes.
            <br/>
            <span className="text-gradient">On structure l&apos;exécution.</span>
          </h2>
          <p className="body-copy text-lg max-w-lg mx-auto">
            Linkea n&apos;est pas un outil — c&apos;est un système complet
            pour passer de l&apos;idée au produit.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Card 1 — large */}
          <div className="md:col-span-2 glass-card rounded-3xl p-8 group relative overflow-hidden min-h-[280px]">
            <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-700"
              style={{ background: "radial-gradient(ellipse, rgba(59,130,246,0.5) 0%, transparent 65%)" }}/>

            <div className="flex items-start gap-4 mb-7">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.22)", boxShadow: "0 0 20px rgba(59,130,246,0.1)" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(96,165,250,0.9)" strokeWidth="1.5">
                  <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-blue-400/20 text-sm font-mono font-bold self-start mt-2">01</span>
            </div>

            <h3 className="text-xl font-bold text-white/90 mb-3 tracking-[-0.02em]">Équipes curées, pas des freelances</h3>
            <p className="body-copy text-sm max-w-sm mb-6">
              Chaque équipe Linkea est sélectionnée sur dossier. Développeurs, designers
              et profils business travaillent ensemble dès le premier jour.
            </p>

            {/* Team preview */}
            <div className="flex items-center gap-3">
              {[
                { label: "Dev",      color: "#2563eb" },
                { label: "PM",       color: "#7c3aed" },
                { label: "Design",   color: "#0891b2" },
              ].map((m) => (
                <div key={m.label} className="flex items-center gap-2 rounded-full px-3 py-1.5"
                  style={{ background: `${m.color}14`, border: `1px solid ${m.color}28` }}>
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: m.color }}/>
                  <span className="text-white/50 text-xs font-medium">{m.label}</span>
                </div>
              ))}
              <span className="text-blue-300/30 text-xs ml-1">→ Équipe complète</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass-card rounded-3xl p-8 group relative overflow-hidden">
            <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-700"
              style={{ background: "radial-gradient(ellipse, rgba(129,140,248,0.5) 0%, transparent 65%)" }}/>

            <div className="flex items-start justify-between mb-7">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ background: "rgba(129,140,248,0.1)", border: "1px solid rgba(129,140,248,0.2)" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(165,180,252,0.9)" strokeWidth="1.5">
                  <path d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-blue-400/20 text-sm font-mono font-bold">02</span>
            </div>

            <h3 className="text-xl font-bold text-white/90 mb-3 tracking-[-0.02em]">Exécution réelle</h3>
            <p className="body-copy text-sm mb-6">
              Sprints hebdomadaires, roadmap concrète et livraisons mesurables.
              De la stratégie au code.
            </p>

            <div className="inline-flex items-center gap-2 text-xs font-semibold rounded-full px-3.5 py-1.5"
              style={{ color: "rgba(165,180,252,0.8)", background: "rgba(129,140,248,0.1)", border: "1px solid rgba(129,140,248,0.18)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"/>
              MVP en semaines
            </div>
          </div>

          {/* Card 3 */}
          <div className="glass-card rounded-3xl p-8 group relative overflow-hidden">
            <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-700"
              style={{ background: "radial-gradient(ellipse, rgba(56,189,248,0.5) 0%, transparent 65%)" }}/>

            <div className="flex items-start justify-between mb-7">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ background: "rgba(56,189,248,0.08)", border: "1px solid rgba(56,189,248,0.18)" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(125,211,252,0.9)" strokeWidth="1.5">
                  <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-blue-400/20 text-sm font-mono font-bold">03</span>
            </div>

            <h3 className="text-xl font-bold text-white/90 mb-3 tracking-[-0.02em]">Mentorship de praticiens</h3>
            <p className="body-copy text-sm mb-6">
              Founders, PMs, investisseurs. Pas des professeurs — des gens qui ont lancé des startups.
            </p>

            <div className="inline-flex items-center gap-2 text-xs font-semibold rounded-full px-3.5 py-1.5"
              style={{ color: "rgba(125,211,252,0.8)", background: "rgba(56,189,248,0.08)", border: "1px solid rgba(56,189,248,0.16)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"/>
              Réseau d&apos;experts
            </div>
          </div>

          {/* Card 4 — stats highlight */}
          <div className="md:col-span-2 glass-card rounded-3xl p-8 group relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{ background: "radial-gradient(ellipse at 80% 50%, rgba(37,99,235,0.06) 0%, transparent 60%)" }}/>

            <p className="text-blue-400/50 text-[11px] font-semibold uppercase tracking-[0.18em] mb-8">Résultats moyens</p>

            <div className="grid grid-cols-3 gap-6">
              {[
                { val: "4–8",   unit: "sem.",      sub: "idée → MVP live" },
                { val: "3×",    unit: "équipe",    sub: "dev + PM + design" },
                { val: "100%",  unit: "validé",    sub: "profils sur dossier" },
              ].map((s, i) => (
                <div key={i}>
                  <div className="flex items-baseline gap-1.5 mb-1">
                    <span className="text-4xl font-black text-white tracking-[-0.03em]">{s.val}</span>
                    <span className="text-blue-400/70 text-sm font-semibold">{s.unit}</span>
                  </div>
                  <p className="text-blue-200/35 text-xs">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
