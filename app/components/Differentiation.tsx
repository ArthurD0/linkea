const rows = [
  { aspect: "Équipe",          others: "Individus isolés, non vérifiés",    linkea: "Trio complet — dev, PM, design" },
  { aspect: "Cadre",           others: "Aucune méthode intégrée",           linkea: "Sprints supervisés + roadmap structurée" },
  { aspect: "Accompagnement",  others: "Livraison et c'est tout",           linkea: "Mentors praticiens à chaque sprint" },
  { aspect: "Mindset",         others: "Prestataire de service",            linkea: "Co-fondateurs motivés par ton succès" },
  { aspect: "Résultat",        others: "Code sans contexte produit",        linkea: "MVP live + stratégie go-to-market" },
  { aspect: "Sélection",       others: "Inscription ouverte à tous",        linkea: "Sélection rigoureuse sur dossier" },
];

export default function Differentiation() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-white">

      <div className="divider absolute top-0 left-0 right-0"/>

      <div className="relative z-10 mx-auto max-w-5xl">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-900 tracking-[-0.03em] leading-[0.97] mb-6">
            On n&apos;est pas une marketplace.
            <br/>
            <span className="text-gradient-pink-blue">On est bien plus.</span>
          </h2>
          <p className="body-copy text-lg max-w-xl mx-auto">
            Linkea n&apos;est pas Malt, CoFoundersLab ou LinkedIn.
            C&apos;est un système complet d&apos;exécution — de l&apos;idée au MVP live.
          </p>
        </div>

        {/* Table */}
        <div className="rounded-3xl overflow-hidden"
          style={{
            background: "#ffffff",
            border: "1px solid rgba(15,23,42,0.08)",
            boxShadow: "0 1px 3px rgba(15,23,42,0.04), 0 16px 48px rgba(15,23,42,0.07)",
          }}>

          {/* Column headers */}
          <div className="grid grid-cols-3 px-8 py-5"
            style={{ borderBottom: "1px solid rgba(15,23,42,0.07)", background: "#f7f7f8" }}>
            <div className="text-slate-500 text-[11px] font-semibold uppercase tracking-[0.18em]">Critère</div>
            <div className="text-center">
              <span className="inline-flex items-center gap-2 text-slate-500 text-sm font-semibold">
                <span className="w-5 h-5 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[10px] text-slate-500">✕</span>
                Les autres
              </span>
            </div>
            <div className="text-center">
              <span className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-1.5 rounded-xl"
                style={{ color: "#be185d", background: "rgba(236,72,153,0.08)", border: "1px solid rgba(236,72,153,0.2)" }}>
                <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px]"
                  style={{ background: "rgba(236,72,153,0.15)", color: "#be185d" }}>✓</span>
                Linkea
              </span>
            </div>
          </div>

          {rows.map((row, i) => (
            <div key={i}
              className="grid grid-cols-3 px-8 py-5 transition-colors hover:bg-pink-50/40 group"
              style={{ borderBottom: i < rows.length - 1 ? "1px solid rgba(15,23,42,0.06)" : "none" }}>

              <div className="text-slate-700 text-sm font-medium self-center">{row.aspect}</div>

              <div className="text-center self-center px-4">
                <span className="text-slate-400 text-sm">{row.others}</span>
              </div>

              <div className="text-center self-center">
                <span className="inline-flex items-center gap-2 text-slate-800 text-sm font-medium">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#ec4899" strokeWidth="2">
                    <path d="M2 7l2.5 2.5L12 3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {row.linkea}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-slate-500 text-sm max-w-lg mx-auto leading-relaxed">
          Né à l&apos;EFREI Paris en 2026, inspiré des meilleurs accélérateurs mondiaux (YC, Entrepreneur First) —
          avec une approche centrée sur l&apos;exécution concrète et la complémentarité des équipes.
        </p>
      </div>
    </section>
  );
}
