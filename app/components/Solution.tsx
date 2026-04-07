export default function Solution() {
  return (
    <section id="solution" className="relative py-32 px-6 overflow-hidden"
      style={{ background: "#f7f7f8" }}>

      <div className="divider absolute top-0 left-0 right-0"/>

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Header */}
        <div className="relative text-center mb-20">
          {/* Mascotte salut — à gauche du titre */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/mascot/linkeo_salut.png" alt=""
              style={{ width: 190, height: "auto", filter: "drop-shadow(0 8px 20px rgba(15,23,42,0.12))" }}/>
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-900 tracking-[-0.03em] leading-[0.97] mb-6">
            On construit les équipes.
            <br/>
            <span className="text-gradient-pink-blue">On structure l&apos;exécution.</span>
          </h2>
          <p className="body-copy text-lg max-w-lg mx-auto">
            Linkea n&apos;est pas un outil, c&apos;est un système complet
            pour passer de l&apos;idée au produit.
          </p>
        </div> {/* end header */}

        {/* Bento grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Card 1 — pink featured, large */}
          <div className="md:col-span-2 glass-card rounded-3xl p-8 group relative overflow-hidden min-h-[280px]"
            style={{ borderColor: "rgba(236,72,153,0.15)" }}>
            {/* Pink glow on hover */}
            <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{ background: "radial-gradient(ellipse, rgba(236,72,153,0.08) 0%, transparent 65%)" }}/>

            {/* Pink accent top-right */}
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none opacity-30"
              style={{ background: "radial-gradient(ellipse, rgba(236,72,153,0.1) 0%, transparent 70%)" }}/>

            <div className="flex items-start gap-4 mb-7">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(236,72,153,0.08)", border: "1px solid rgba(236,72,153,0.18)" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="1.5">
                  <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-slate-300 text-sm font-mono font-bold self-start mt-2">01</span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-[-0.02em]">Équipes complètes dans un cadre supervisé</h3>
            <p className="body-copy text-sm max-w-sm mb-6">
              Chaque équipe est sélectionnée sur dossier et intégrée dans un cadre supervisé.
              Dev, PM et designer, motivés comme des co-fondateurs, pas comme des prestataires.
            </p>

            {/* Team preview */}
            <div className="flex items-center gap-3">
              {[
                { label: "Dev",    color: "#2563eb" },
                { label: "PM",     color: "#ec4899" },
                { label: "Design", color: "#7c3aed" },
              ].map((m) => (
                <div key={m.label} className="flex items-center gap-2 rounded-full px-3 py-1.5"
                  style={{ background: `${m.color}0d`, border: `1px solid ${m.color}25` }}>
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: m.color }}/>
                  <span className="text-slate-700 text-xs font-medium">{m.label}</span>
                </div>
              ))}
              <span className="text-slate-400 text-xs ml-1">→ Équipe complète</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass-card rounded-3xl p-8 group relative overflow-hidden">
            <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{ background: "radial-gradient(ellipse, rgba(124,58,237,0.08) 0%, transparent 65%)" }}/>

            <div className="flex items-start justify-between mb-7">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ background: "rgba(124,58,237,0.07)", border: "1px solid rgba(124,58,237,0.16)" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.5">
                  <path d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-slate-300 text-sm font-mono font-bold">02</span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-[-0.02em]">Sprints structurés, livraisons réelles</h3>
            <p className="body-copy text-sm mb-6">
              Roadmap claire, sprints hebdomadaires, livrables mesurables à chaque itération.
              Du kick-off au premier utilisateur, sans dérapage.
            </p>

            <div className="inline-flex items-center gap-2 text-xs font-semibold rounded-full px-3.5 py-1.5"
              style={{ color: "#7c3aed", background: "rgba(124,58,237,0.07)", border: "1px solid rgba(124,58,237,0.16)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500"/>
              MVP en semaines
            </div>
          </div>

          {/* Card 3 */}
          <div className="glass-card rounded-3xl p-8 group relative overflow-hidden">
            <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{ background: "radial-gradient(ellipse, rgba(8,145,178,0.08) 0%, transparent 65%)" }}/>

            <div className="flex items-start justify-between mb-7">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ background: "rgba(8,145,178,0.07)", border: "1px solid rgba(8,145,178,0.16)" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="1.5">
                  <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-slate-300 text-sm font-mono font-bold">03</span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-[-0.02em]">Mentors praticiens, pas des professeurs</h3>
            <p className="body-copy text-sm mb-6">
              Founders, PMs et investisseurs qui ont lancé des produits. Un accès direct au terrain, pas à des slides de cours.
            </p>

            <div className="inline-flex items-center gap-2 text-xs font-semibold rounded-full px-3.5 py-1.5"
              style={{ color: "#0891b2", background: "rgba(8,145,178,0.06)", border: "1px solid rgba(8,145,178,0.16)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"/>
              Réseau d&apos;experts
            </div>
          </div>

          {/* Card 4 — stats highlight, large */}
          <div className="md:col-span-2 glass-card rounded-3xl p-8 group relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{ background: "radial-gradient(ellipse at 80% 50%, rgba(236,72,153,0.04) 0%, transparent 60%)" }}/>

            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] mb-8" style={{ color: "#be185d" }}>
              Résultats moyens
            </p>

            <div className="grid grid-cols-3 gap-6">
              {[
                { val: "4–8",   unit: "sem.",   sub: "idée → MVP live" },
                { val: "3×",    unit: "équipe", sub: "dev + PM + design" },
                { val: "100%",  unit: "validé", sub: "profils sur dossier" },
              ].map((s, i) => (
                <div key={i}>
                  <div className="flex items-baseline gap-1.5 mb-1">
                    <span className="text-4xl font-black text-slate-900 tracking-[-0.03em]">{s.val}</span>
                    <span className="text-sm font-semibold" style={{ color: "#ec4899" }}>{s.unit}</span>
                  </div>
                  <p className="text-slate-500 text-xs">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
