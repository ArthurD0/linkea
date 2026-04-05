export default function KeyBenefits() {
  return (
    <section className="relative py-28 px-6 overflow-hidden" style={{ background: "#f7f7f8" }}>
      <div className="divider absolute top-0 left-0 right-0"/>

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-[56px] font-bold text-slate-900 tracking-[-0.03em] leading-tight mb-5">
            Ce qui nous rend vraiment
            <br/>
            <span className="text-gradient-pink-blue">différents des autres.</span>
          </h2>
          <p className="body-copy text-lg max-w-xl mx-auto">
            Linkea combine sélection rigoureuse, exécution structurée et mentoring terrain
            pour transformer une idée en produit — en quelques semaines.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-12 grid-rows-2 gap-4 h-[520px]">

          {/* Card 1 — tall left, icon + label */}
          <div className="col-span-3 row-span-2 rounded-3xl flex flex-col items-center justify-center gap-5 p-8"
            style={{ background: "#ebebed", border: "1px solid rgba(15,23,42,0.07)" }}>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{ background: "rgba(15,23,42,0.06)", border: "1px solid rgba(15,23,42,0.1)" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="1.5">
                <path d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-slate-600 text-sm font-medium text-center leading-snug">
              Sélection rigoureuse<br/>sur dossier
            </p>
          </div>

          {/* Card 2 — featured pink gradient, big stat */}
          <div className="col-span-3 row-span-2 rounded-3xl flex flex-col items-center justify-center p-8 relative overflow-hidden"
            style={{ background: "linear-gradient(160deg, #fce7f3 0%, #e9d5ff 60%, #ddd6fe 100%)" }}>
            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full"
              style={{ background: "rgba(236,72,153,0.15)", filter: "blur(24px)" }}/>
            <div className="relative z-10 text-center">
              <p className="font-black text-slate-900 leading-none mb-2"
                style={{ fontSize: "clamp(56px, 8vw, 80px)", letterSpacing: "-0.04em" }}>
                97%
              </p>
              <p className="text-slate-600 text-sm font-medium">taux de satisfaction<br/>des founders</p>
            </div>
          </div>

          {/* Card 3 — wide top right */}
          <div className="col-span-6 row-span-1 rounded-3xl flex items-center px-8 gap-6"
            style={{ background: "#ffffff", border: "1px solid rgba(15,23,42,0.08)", boxShadow: "0 1px 3px rgba(15,23,42,0.04), 0 8px 24px rgba(15,23,42,0.05)" }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: "rgba(236,72,153,0.08)", border: "1px solid rgba(236,72,153,0.15)" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="1.5">
                <path d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <p className="text-slate-900 font-semibold text-sm leading-snug">
                MVP fonctionnel livré en <span style={{ color: "#ec4899" }}>4 à 8 semaines</span> — du premier sprint au produit live
              </p>
            </div>
          </div>

          {/* Card 4 — medium bottom middle-right */}
          <div className="col-span-3 row-span-1 rounded-3xl flex flex-col items-center justify-center p-6 text-center"
            style={{ background: "#ebebed", border: "1px solid rgba(15,23,42,0.07)" }}>
            <p className="font-black text-slate-900 leading-none mb-1"
              style={{ fontSize: "clamp(40px, 5vw, 56px)", letterSpacing: "-0.04em" }}>
              3×
            </p>
            <p className="text-slate-500 text-xs font-medium">experts par projet<br/>dev · PM · design</p>
          </div>

          {/* Card 5 — small bottom right */}
          <div className="col-span-3 row-span-1 rounded-3xl flex items-center justify-center p-6 text-center"
            style={{ background: "#ffffff", border: "1px solid rgba(15,23,42,0.08)", boxShadow: "0 1px 3px rgba(15,23,42,0.04), 0 8px 24px rgba(15,23,42,0.05)" }}>
            <div>
              <p className="text-slate-700 text-sm font-semibold leading-snug">
                Coût <span style={{ color: "#2563eb" }}>10× inférieur</span><br/>au marché freelance
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="divider absolute bottom-0 left-0 right-0"/>
    </section>
  );
}
