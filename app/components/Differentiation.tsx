const rows = [
  { aspect: "Structure",      others: "Individus isolés",              linkea: "Équipes complètes et complémentaires" },
  { aspect: "Accompagnement", others: "Livraison et c'est tout",       linkea: "Mentorship + sprints hebdomadaires" },
  { aspect: "Mindset",        others: "Prestataire de service",         linkea: "Co-founders étudiants motivés" },
  { aspect: "Résultat",       others: "Code ou slides",                 linkea: "MVP live + stratégie go-to-market" },
  { aspect: "Sélection",      others: "N'importe qui peut s'inscrire",  linkea: "Sélection rigoureuse sur dossier" },
];

export default function Differentiation() {
  return (
    <section className="relative py-36 px-6 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #020912 0%, #030b1e 50%, #020912 100%)" }}>

      <div className="divider absolute top-0 left-0 right-0"/>

      {/* Bottom ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.14) 0%, rgba(99,102,241,0.06) 40%, transparent 65%)", filter: "blur(40px)" }}/>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-64 h-64 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 0% 0%, rgba(37,99,235,0.1) 0%, transparent 65%)" }}/>
      <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 100% 0%, rgba(99,102,241,0.08) 0%, transparent 65%)" }}/>

      <div className="relative z-10 mx-auto max-w-5xl">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-5">Notre différence</p>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-[-0.03em] leading-[0.97] mb-6">
            On n&apos;est pas Malt.
            <br/>
            <span className="text-gradient">On est bien plus.</span>
          </h2>
          <p className="body-copy text-lg max-w-xl mx-auto">
            Linkea n&apos;est pas une marketplace de freelances.
            C&apos;est un accélérateur d&apos;exécution pour founders ambitieux.
          </p>
        </div>

        {/* Table */}
        <div className="gradient-border rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(160deg, rgba(10,22,55,0.8) 0%, rgba(4,10,30,0.9) 100%)",
            boxShadow: "0 0 0 1px rgba(59,130,246,0.06), 0 50px 100px rgba(0,0,0,0.5)",
          }}>

          {/* Top glow */}
          <div className="h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.4), rgba(99,102,241,0.3), transparent)" }}/>

          {/* Column headers */}
          <div className="grid grid-cols-3 px-8 py-5 border-b border-white/[0.04]">
            <div className="text-blue-200/25 text-[11px] font-semibold uppercase tracking-[0.18em]">Critère</div>
            <div className="text-center">
              <span className="inline-flex items-center gap-2 text-blue-200/30 text-sm font-semibold">
                <span className="w-5 h-5 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[10px] text-white/25">✕</span>
                Les autres
              </span>
            </div>
            <div className="text-center">
              <span className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-1.5 rounded-xl"
                style={{ color: "rgba(96,165,250,0.85)", background: "rgba(37,99,235,0.1)", border: "1px solid rgba(59,130,246,0.2)" }}>
                <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px]"
                  style={{ background: "rgba(59,130,246,0.18)", color: "rgba(96,165,250,0.9)" }}>✓</span>
                Linkea
              </span>
            </div>
          </div>

          {rows.map((row, i) => (
            <div key={i}
              className="grid grid-cols-3 px-8 py-5 transition-colors hover:bg-white/[0.018] group"
              style={{ borderBottom: i < rows.length - 1 ? "1px solid rgba(255,255,255,0.035)" : "none" }}>

              <div className="text-blue-100/45 text-sm font-medium self-center">{row.aspect}</div>

              <div className="text-center self-center px-4">
                <span className="text-white/20 text-sm">{row.others}</span>
              </div>

              <div className="text-center self-center">
                <span className="inline-flex items-center gap-2 text-white/70 text-sm font-medium">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="rgba(74,222,128,0.65)" strokeWidth="2">
                    <path d="M2 7l2.5 2.5L12 3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {row.linkea}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-blue-100/25 text-sm max-w-lg mx-auto leading-relaxed">
          Inspiré des meilleurs accélérateurs mondiaux — YC, Entrepreneur First —
          avec une approche centrée sur l&apos;exécution et la complémentarité.
        </p>
      </div>
    </section>
  );
}
