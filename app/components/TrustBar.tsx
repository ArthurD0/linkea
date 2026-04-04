export default function TrustBar() {
  const items = [
    { icon: "⚡", label: "MVP en 4–8 semaines" },
    { icon: "✓", label: "Sélection rigoureuse sur dossier" },
    { icon: "◆", label: "Équipes complètes dev + PM + design" },
    { icon: "🔒", label: "Accès sur invitation" },
    { icon: "★", label: "Mentors praticiens & founders" },
    { icon: "⚡", label: "MVP en 4–8 semaines" },
    { icon: "✓", label: "Sélection rigoureuse sur dossier" },
    { icon: "◆", label: "Équipes complètes dev + PM + design" },
    { icon: "🔒", label: "Accès sur invitation" },
    { icon: "★", label: "Mentors praticiens & founders" },
  ];

  return (
    <section style={{ background: "#f7f7f8", borderTop: "1px solid rgba(15,23,42,0.07)", borderBottom: "1px solid rgba(15,23,42,0.07)" }}>
      <div className="py-5 overflow-hidden relative">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #f7f7f8, transparent)" }}/>
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #f7f7f8, transparent)" }}/>

        {/* Scrolling strip */}
        <div className="flex whitespace-nowrap" style={{ width: "max-content", animation: "marquee 22s linear infinite", willChange: "transform" }}>
          {items.map((item, i) => (
            <div key={i} className="inline-flex items-center gap-3 mx-8">
              <span className="text-sm" style={{ color: "#ec4899" }}>{item.icon}</span>
              <span className="text-slate-600 text-sm font-medium">{item.label}</span>
              {i < items.length - 1 && (
                <span className="ml-8 text-slate-300 text-lg font-thin">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
