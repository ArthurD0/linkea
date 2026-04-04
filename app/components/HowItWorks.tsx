"use client";

const steps = [
  {
    n: "01",
    title: "Soumets ton idée",
    body: "Décris ton projet en quelques lignes. Secteur, problème à résoudre, stade d'avancement. Une vision claire suffit.",
    detail: "< 5 minutes",
    color: "#ec4899",
    bg: "rgba(236,72,153,0.08)",
    border: "rgba(236,72,153,0.18)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    n: "02",
    title: "On te matche avec une équipe",
    body: "Notre système analyse ton projet et sélectionne les profils complémentaires. Dev, designer, PM — une équipe complète.",
    detail: "Sous 72h",
    color: "#7c3aed",
    bg: "rgba(124,58,237,0.08)",
    border: "rgba(124,58,237,0.18)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    n: "03",
    title: "Lance ton projet",
    body: "Sprints hebdomadaires, check-ins avec mentors, livraisons mesurables. Du kick-off au premier utilisateur.",
    detail: "MVP en 4–8 sem.",
    color: "#2563eb",
    bg: "rgba(37,99,235,0.08)",
    border: "rgba(37,99,235,0.18)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-32 px-6 overflow-hidden"
      style={{ background: "#fdf4f8" }}>

      <div className="divider absolute top-0 left-0 right-0" style={{ background: "rgba(236,72,153,0.1)" }}/>

      {/* Subtle pink top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "800px", height: "400px",
          background: "radial-gradient(ellipse 50% 70% at 50% -10%, rgba(236,72,153,0.06) 0%, transparent 60%)",
        }}/>

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="section-label-pink mb-5">Process</p>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-900 tracking-[-0.03em] leading-[0.97] mb-6">
            De l&apos;idée au produit
            <br/>
            <span className="text-slate-500">en 3 étapes.</span>
          </h2>
          <p className="body-copy text-lg max-w-md mx-auto">
            Un processus clair pour passer de ton Google Doc
            à un MVP utilisable par de vrais utilisateurs.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* Connector (desktop) */}
          <div className="hidden md:block absolute top-14 pointer-events-none h-px"
            style={{
              left: "calc(16.667% + 56px)",
              right: "calc(16.667% + 56px)",
              background: "linear-gradient(90deg, rgba(236,72,153,0.25), rgba(124,58,237,0.2), rgba(37,99,235,0.25))",
            }}>
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
              style={{ background: "#be185d", opacity: 0.3 }}/>
          </div>

          {steps.map((step, i) => (
            <div key={i} className="group relative">
              {/* Step orb */}
              <div className="flex justify-center mb-7">
                <div className="relative w-28 h-28 rounded-full flex items-center justify-center"
                  style={{
                    background: step.bg,
                    border: `1px solid ${step.border}`,
                    boxShadow: `0 0 0 8px ${step.color}05`,
                  }}>
                  {/* Pulse ring on hover */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-ring"
                    style={{ border: `1px solid ${step.color}30` }}/>
                  <span className="font-black text-4xl tracking-tight"
                    style={{ color: step.color }}>
                    {step.n}
                  </span>
                </div>
              </div>

              {/* Card */}
              <div className="rounded-3xl p-7 relative overflow-hidden bg-white"
                style={{
                  border: "1px solid rgba(15,23,42,0.07)",
                  boxShadow: "0 1px 3px rgba(15,23,42,0.04), 0 8px 24px rgba(15,23,42,0.05)",
                  transition: "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s cubic-bezier(0.16,1,0.3,1)",
                }}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-600 pointer-events-none rounded-3xl"
                  style={{ background: `radial-gradient(ellipse at 40% 30%, ${step.color}04, transparent 65%)` }}/>

                <div className="w-10 h-10 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: step.bg, border: `1px solid ${step.border}`, color: step.color }}>
                  {step.icon}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-[-0.02em]">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-7">{step.body}</p>

                <div className="inline-flex items-center gap-2 text-xs font-semibold rounded-full px-3.5 py-1.5"
                  style={{ color: step.color, background: step.bg, border: `1px solid ${step.border}` }}>
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="5.5" cy="5.5" r="4"/>
                    <path d="M5.5 3.5v2l1.5 1.5" strokeLinecap="round"/>
                  </svg>
                  {step.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="divider absolute bottom-0 left-0 right-0" style={{ background: "rgba(236,72,153,0.1)" }}/>
    </section>
  );
}
