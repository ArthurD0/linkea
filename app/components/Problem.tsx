const problems = [
  {
    stat: "€150",
    context: "par heure",
    title: "Les devs coûtent trop cher",
    body: "Embaucher un développeur freelance dépasse le budget d'un projet early-stage. La tech devient un frein avant même d'avoir testé le marché.",
    accent: "#ef4444",
    glow: "rgba(239,68,68,0.08)",
    border: "rgba(239,68,68,0.14)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 8v4m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    stat: "73%",
    context: "des startups échouent",
    title: "Impossible de trouver une équipe",
    body: "73% des founders abandonnent leur idée faute de co-fondateur. Les plateformes existantes proposent des freelances, pas des partenaires d'exécution.",
    accent: "#f97316",
    glow: "rgba(249,115,22,0.07)",
    border: "rgba(249,115,22,0.14)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    stat: "0",
    context: "MVP sans exécution",
    title: "Les idées meurent sans structure",
    body: "Une idée brillante ne suffit pas. Sans méthode, sans équipe motivée, le projet reste un document Notion qui ne verra jamais le jour.",
    accent: "#a855f7",
    glow: "rgba(168,85,247,0.07)",
    border: "rgba(168,85,247,0.14)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3.75 13.5 10.5 6.75l4.5 4.5 4.5-4.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function Problem() {
  return (
    <section className="relative py-36 px-6 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #020912 0%, #06101e 40%, #050d1c 70%, #020912 100%)" }}>

      <div className="divider absolute top-0 left-0 right-0"/>

      {/* Strong left-side red ambient (matches problem theme) */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(127,29,29,0.18) 0%, transparent 65%)", filter: "blur(80px)" }}/>

      {/* Strong right-side orange ambient */}
      <div className="absolute top-1/3 -right-32 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(124,45,18,0.15) 0%, transparent 65%)", filter: "blur(70px)" }}/>

      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(15,25,60,0.6) 0%, transparent 70%)" }}/>

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Header */}
        <div className="max-w-2xl mb-20">
          <p className="section-label mb-5">Le problème</p>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-[-0.03em] leading-[0.95] mb-6">
            Lancer une startup,
            <br/>
            <span className="text-white/25">c&apos;est compliqué.</span>
          </h2>
          <p className="body-copy text-lg max-w-lg">
            La majorité des idées échouent non par manque de talent,
            mais par manque de ressources et de structure.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {problems.map((p, i) => (
            <div key={i} className="glass-card rounded-3xl p-8 group relative overflow-hidden">

              {/* Accent corner */}
              <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: `radial-gradient(ellipse, ${p.glow} 0%, transparent 70%)` }}/>

              {/* Icon */}
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl mb-7"
                style={{ background: `${p.glow}`, border: `1px solid ${p.border}`, color: p.accent }}>
                {p.icon}
              </div>

              {/* Stat */}
              <div className="mb-3">
                <span className="font-black tracking-[-0.04em] leading-none"
                  style={{
                    fontSize: "clamp(52px, 8vw, 80px)",
                    background: `linear-gradient(135deg, ${p.accent}, rgba(255,255,255,0.65))`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                  {p.stat}
                </span>
                <p className="text-white/25 text-sm font-medium mt-1">{p.context}</p>
              </div>

              <h3 className="text-base font-semibold text-white/75 mb-3 leading-snug">{p.title}</h3>
              <p className="body-copy text-sm">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
