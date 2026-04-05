const problems = [
  {
    stat: "€150",
    context: "par heure freelance",
    title: "Les freelances coûtent trop cher",
    body: "Un dev senior facture entre €100 et €150/h — soit €12 000 à €20 000 pour un MVP basique. Hors de portée pour un porteur de projet early-stage, sans garantie de résultat.",
    accent: "#ef4444",
    glow: "rgba(239,68,68,0.07)",
    border: "rgba(239,68,68,0.15)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 8v4m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    stat: "73%",
    context: "des idées abandonnées",
    title: "Impossible de trouver une équipe de confiance",
    body: "73% des porteurs de projet renoncent faute d'équipe. Les réseaux existants proposent des profils anonymes non vérifiés — pas des co-fondateurs engagés dans ton succès.",
    accent: "#f97316",
    glow: "rgba(249,115,22,0.07)",
    border: "rgba(249,115,22,0.15)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    stat: "0",
    context: "méthode pour l'early-stage",
    title: "Sans cadre, aucune idée ne devient produit",
    body: "Il n'existe pas de méthode clé en main pour les projets étudiants early-stage. Sans sprints, sans roadmap, sans cadre supervisé — le projet reste un Google Doc.",
    accent: "#a855f7",
    glow: "rgba(168,85,247,0.07)",
    border: "rgba(168,85,247,0.15)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3.75 13.5 10.5 6.75l4.5 4.5 4.5-4.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function Problem() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-white">

      <div className="divider absolute top-0 left-0 right-0"/>

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Header */}
        <div className="max-w-2xl mb-20">
          <p className="section-label mb-5">Le problème</p>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-900 tracking-[-0.03em] leading-[0.95] mb-6">
            Lancer une startup,
            <br/>
            <span className="text-slate-500">c&apos;est compliqué.</span>
          </h2>
          <p className="body-copy text-lg max-w-lg">
            La majorité des projets étudiants meurent non par manque d&apos;ambition,
            mais par manque d&apos;équipe, de méthode et d&apos;accès aux bons profils.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {problems.map((p, i) => (
            <div key={i} className="glass-card rounded-3xl p-8 group relative overflow-hidden">

              {/* Accent corner on hover */}
              <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: `radial-gradient(ellipse, ${p.glow} 0%, transparent 70%)` }}/>

              {/* Icon */}
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl mb-7"
                style={{ background: p.glow, border: `1px solid ${p.border}`, color: p.accent }}>
                {p.icon}
              </div>

              {/* Stat */}
              <div className="mb-3">
                <span className="font-black tracking-[-0.04em] leading-none"
                  style={{
                    fontSize: "clamp(52px, 8vw, 80px)",
                    background: `linear-gradient(135deg, ${p.accent}, rgba(15,23,42,0.4))`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                  {p.stat}
                </span>
                <p className="text-slate-500 text-sm font-medium mt-1">{p.context}</p>
              </div>

              <h3 className="text-base font-semibold text-slate-800 mb-3 leading-snug">{p.title}</h3>
              <p className="body-copy text-sm">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
