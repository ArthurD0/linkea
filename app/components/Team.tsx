export default function Team() {
  const members = [
    {
      name: "Arthur Dequesne",
      role: "CEO & Co-fondateur",
      school: "Efrei Paris · 3ème année ingénieur",
      photo: "/team/arthur.jpg",
      description: "Vision produit, stratégie et développement business. Obsédé par l'exécution.",
      links: { linkedin: "#", github: "#" },
    },
    {
      name: "Amine Chamssan",
      role: "CTO & Co-fondateur",
      school: "Efrei Paris · 3ème année ingénieur",
      photo: "/team/amine.jpg",
      description: "Architecture technique, infrastructure et développement produit. Builder dans l'âme.",
      links: { linkedin: "#", github: "#" },
    },
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden bg-white">
      <div className="divider absolute top-0 left-0 right-0"/>

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(236,72,153,0.04) 0%, transparent 70%)",
      }}/>

      <div className="relative z-10 mx-auto max-w-5xl">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-900 tracking-[-0.03em] leading-[0.97] mb-6">
            Ceux qui
            <br/>
            <span className="text-gradient-pink-blue">construisent Linkea.</span>
          </h2>
          <p className="body-copy text-lg max-w-md mx-auto">
            Deux ingénieurs Efrei qui ont décidé de résoudre le problème qu&apos;ils vivaient eux-mêmes.
          </p>
        </div>

        {/* Team cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {members.map((m) => (
            <div key={m.name}
              className="group relative rounded-3xl overflow-hidden"
              style={{
                background: "#fff",
                border: "1px solid rgba(15,23,42,0.08)",
                boxShadow: "0 4px 6px rgba(15,23,42,0.04), 0 24px 80px rgba(15,23,42,0.07)",
              }}>

              {/* Top gradient bar */}
              <div className="h-[2px]" style={{ background: "linear-gradient(90deg,#3b82f6,#ec4899,#8b5cf6)" }}/>

              {/* Photo */}
              <div className="relative overflow-hidden" style={{ height: 320 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={m.photo}
                  alt={m.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0" style={{
                  background: "linear-gradient(to bottom, transparent 50%, rgba(15,23,42,0.6) 100%)",
                }}/>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-slate-900 font-bold text-xl tracking-tight">{m.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm font-semibold px-2.5 py-0.5 rounded-full"
                      style={{ background: "rgba(236,72,153,0.08)", color: "#ec4899", border: "1px solid rgba(236,72,153,0.18)" }}>
                      {m.role}
                    </span>
                  </div>
                </div>

                <p className="text-slate-500 text-sm leading-relaxed mb-4">{m.description}</p>

                <div className="flex items-center gap-2 text-[11px] text-slate-400 font-medium">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 10H2M16 2l4 8-4 8M8 2L4 10l4 8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {m.school}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* YC-style footnote */}
        <p className="text-center text-slate-400 text-sm mt-12">
          Construits à Paris · 2026
        </p>

      </div>
    </section>
  );
}
