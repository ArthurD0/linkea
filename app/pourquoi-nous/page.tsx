import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* ── Data ─────────────────────────────────────────────────────── */

const stats = [
  { val: "4–8",  unit: "semaines", label: "idée → MVP live" },
  { val: "97%",  unit: "match",    label: "précision de matching" },
  { val: "3×",   unit: "équipe",   label: "dev + PM + design" },
  { val: "100%", unit: "validé",   label: "sélection sur dossier" },
];

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Équipes complètes, pas des freelances",
    body: "Chaque projet est pris en charge par un trio complet : développeur, product manager et designer — sélectionnés ensemble pour leur complémentarité.",
    color: "#ec4899",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Exécution structurée dès le premier jour",
    body: "Sprints hebdomadaires, roadmap claire, livraisons mesurables. On ne parle pas de stratégie — on code, on livre, on itère.",
    color: "#2563eb",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Sélection rigoureuse sur dossier",
    body: "Nos étudiants passent un processus de sélection exigeant. Seuls les meilleurs profils intègrent le réseau Linkea — aucune inscription ouverte.",
    color: "#7c3aed",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Mentors praticiens, pas des professeurs",
    body: "Chaque projet est encadré par des founders, PMs et investisseurs qui ont déjà lancé des produits. Un accès direct à l'expérience terrain.",
    color: "#0891b2",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Un réseau mondial de hubs étudiants",
    body: "Plus de 22 villes partenaires sur 5 continents. Linkea puise dans les meilleures écoles d'ingénieurs et de commerce pour composer vos équipes.",
    color: "#ec4899",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Résultats mesurables, pas des promesses",
    body: "Chaque sprint se conclut par une livraison concrète. Nos founders voient leur MVP prendre forme semaine après semaine, avec des métriques réelles.",
    color: "#2563eb",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Coût 10× inférieur au marché",
    body: "Un freelance senior coûte €150/h. Une équipe Linkea coûte une fraction de ce prix — avec l'engagement d'une équipe co-fondatrice, pas d'un prestataire.",
    color: "#7c3aed",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Mindset co-founder, pas prestataire",
    body: "Nos étudiants s'engagent comme co-fondateurs. Ils ont un intérêt direct au succès du projet — pas juste à facturer des heures.",
    color: "#0891b2",
  },
];

const competitors = [
  {
    name: "CoFoundersLab",
    initial: "CF",
    color: "#6366f1",
    bg: "#eef2ff",
  },
  {
    name: "StartHawk",
    initial: "SH",
    color: "#0891b2",
    bg: "#ecfeff",
  },
  {
    name: "Station F",
    initial: "SF",
    color: "#f97316",
    bg: "#fff7ed",
  },
  {
    name: "LinkedIn",
    initial: "in",
    color: "#0a66c2",
    bg: "#eff6ff",
  },
  {
    name: "Malt",
    initial: "M",
    color: "#e11d48",
    bg: "#fff1f2",
  },
];

type Status = "yes" | "no" | "partial";

const rows: { feature: string; them: Status[] }[] = [
  /*                                                CF        SH        SF        LI        Malt  */
  { feature: "Matching cofondateurs",        them: ["yes",     "yes",     "no",      "partial", "no"]      },
  { feature: "Projets concrets lancés",      them: ["no",      "no",      "yes",     "no",      "yes"]     },
  { feature: "Suivi des projets",            them: ["no",      "no",      "yes",     "no",      "no"]      },
  { feature: "Accompagnement (mentorat)",    them: ["no",      "no",      "yes",     "no",      "no"]      },
  { feature: "Accessible aux étudiants",     them: ["partial", "partial", "partial", "yes",     "partial"] },
  { feature: "Multi-écoles",                 them: ["yes",     "yes",     "no",      "yes",     "yes"]     },
  { feature: "Structure (cadre, méthode)",   them: ["no",      "no",      "yes",     "no",      "no"]      },
  { feature: "Équipe auto-composée",         them: ["partial", "partial", "no",      "no",      "no"]      },
  { feature: "Passage idée → exécution",     them: ["no",      "no",      "partial", "no",      "no"]      },
  { feature: "Réseau mondial de hubs",       them: ["no",      "no",      "no",      "partial", "no"]      },
  { feature: "Coût accessible",              them: ["yes",     "yes",     "no",      "no",      "no"]      },
  { feature: "Expérience gamifiée",          them: ["no",      "no",      "no",      "no",      "partial"] },
];

function StatusIcon({ s }: { s: Status }) {
  if (s === "yes") return (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full text-base font-bold"
      style={{ background: "rgba(34,197,94,0.12)", color: "#16a34a" }}>✓</span>
  );
  if (s === "no") return (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full text-base font-bold"
      style={{ background: "rgba(239,68,68,0.1)", color: "#dc2626" }}>✕</span>
  );
  return (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full text-sm"
      style={{ background: "rgba(234,179,8,0.12)", color: "#ca8a04" }}>⚠</span>
  );
}

const othersWeaknesses = [
  "Un seul aspect du parcours (matching OU livraison)",
  "Aucune équipe pré-formée — tu trouves toi-même",
  "Pas de cadre d'exécution ni de sprints",
  "Coût freelance prohibitif (€100–150/h)",
  "Pas de mentorat terrain intégré",
];

const linkeaStrengths = [
  "Équipe complète (dev + PM + design) en 72h",
  "Sélection rigoureuse sur dossier — 0 freelance aléatoire",
  "Sprints hebdomadaires + livraisons mesurables",
  "Coût 10× inférieur au marché",
  "Mentors praticiens : founders, PMs, investisseurs",
  "Réseau mondial de 22 hubs dans les meilleures écoles",
];

/* ── Page ─────────────────────────────────────────────────────── */

export default function PourquoiNous() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Breadcrumb ── */}
        <div className="bg-white pt-28 pb-0 px-6">
          <div className="mx-auto max-w-6xl">
            <nav className="flex items-center gap-2 text-sm text-slate-400">
              <a href="/" className="hover:text-slate-700 transition-colors duration-200">Accueil</a>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-slate-700 font-medium">Pourquoi nous</span>
            </nav>
          </div>
        </div>

        {/* ── Hero ── */}
        <section className="relative min-h-[60vh] flex flex-col items-center justify-center overflow-hidden text-center px-6 pt-16 pb-28 bg-white">

          {/* Pink aurora */}
          <div className="absolute pointer-events-none"
            style={{ top: "-10%", right: "-10%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(236,72,153,0.07) 0%, transparent 65%)", filter: "blur(70px)" }}/>
          <div className="absolute pointer-events-none"
            style={{ bottom: "-10%", left: "-8%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(37,99,235,0.07) 0%, transparent 65%)", filter: "blur(60px)" }}/>

          <div className="relative z-10 max-w-4xl mx-auto">
            <p className="section-label-pink mb-6">Pourquoi nous choisir</p>
            <h1 className="font-bold tracking-[-0.035em] leading-[0.95] mb-8">
              <span className="block text-[clamp(44px,7vw,88px)] text-slate-900">Ce que les autres</span>
              <span className="block text-[clamp(44px,7vw,88px)] text-gradient-pink-blue">ne font pas.</span>
            </h1>
            <p className="body-copy text-lg sm:text-xl max-w-2xl mx-auto mb-12">
              Linkea n&apos;est pas une marketplace, un incubateur, ni un réseau social.
              C&apos;est un système complet pour passer de l&apos;idée au MVP avec une équipe d&apos;élite — en quelques semaines.
            </p>
            <a href="#comparaison" className="btn-pink inline-flex items-center gap-3">
              Voir la comparaison
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M8 3v10M4 9l4 4 4-4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </section>

        {/* ── Stats ── */}
        <section style={{ background: "#f7f7f8", borderTop: "1px solid rgba(15,23,42,0.07)", borderBottom: "1px solid rgba(15,23,42,0.07)" }}>
          <div className="mx-auto max-w-6xl px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="flex items-baseline justify-center gap-1.5 mb-1">
                  <span className="text-4xl font-black text-slate-900 tracking-tight">{s.val}</span>
                  <span className="text-sm font-bold" style={{ color: "#ec4899" }}>{s.unit}</span>
                </div>
                <p className="text-slate-500 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 8 features ── */}
        <section className="py-28 px-6 bg-white">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <p className="section-label mb-5">Nos atouts</p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 tracking-[-0.03em] leading-tight mb-5">
                Ce qui nous rend<br/>
                <span className="text-gradient-pink-blue">différents.</span>
              </h2>
              <p className="body-copy text-lg max-w-lg mx-auto">
                Linkea combine le meilleur des accélérateurs, des équipes produit et du mentoring — dans un seul système.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((f, i) => (
                <div key={i} className="glass-card rounded-3xl p-7 group relative overflow-hidden">
                  <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ background: `radial-gradient(ellipse, ${f.color}0d 0%, transparent 70%)` }}/>
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5 shrink-0"
                    style={{ background: `${f.color}10`, border: `1px solid ${f.color}20`, color: f.color }}>
                    {f.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-3 leading-snug tracking-[-0.01em]">{f.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Comparison table ── */}
        <section id="comparaison" className="py-28 px-6" style={{ background: "#f7f7f8" }}>
          <div className="mx-auto max-w-6xl">

            <div className="text-center mb-16">
              <p className="section-label-pink mb-5">Comparaison</p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 tracking-[-0.03em] leading-tight mb-5">
                Linkea vs<br/>
                <span className="text-gradient-pink-blue">la concurrence.</span>
              </h2>
              <p className="body-copy text-lg max-w-lg mx-auto">
                Une vision claire de ce que proposent les autres plateformes — et pourquoi Linkea va plus loin.
              </p>
            </div>

            {/* Table */}
            <div className="rounded-3xl overflow-hidden"
              style={{ background: "#fff", border: "1px solid rgba(15,23,42,0.08)", boxShadow: "0 1px 3px rgba(15,23,42,0.04), 0 16px 48px rgba(15,23,42,0.07)" }}>

              {/* Column headers */}
              <div className="grid px-6 py-5 gap-2 items-center"
                style={{ gridTemplateColumns: "1.6fr repeat(5, 1fr) 1fr", borderBottom: "1px solid rgba(15,23,42,0.07)", background: "#f7f7f8" }}>
                <div className="text-slate-500 text-[11px] font-semibold uppercase tracking-[0.18em]">Fonctionnalité</div>

                {competitors.map((c) => (
                  <div key={c.name} className="flex flex-col items-center gap-1.5">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm tracking-tight shrink-0"
                      style={{ background: c.bg, color: c.color }}>
                      {c.initial}
                    </div>
                    <span className="text-slate-500 text-[10px] font-medium text-center leading-tight">{c.name}</span>
                  </div>
                ))}

                {/* Linkea header */}
                <div className="flex flex-col items-center gap-1.5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/favicon.png" alt="Linkea" style={{ width: 36, height: 36, objectFit: "contain" }} />
                  <span className="text-[10px] font-bold" style={{ color: "#be185d" }}>Linkea</span>
                </div>
              </div>

              {rows.map((row, i) => (
                <div key={i}
                  className="grid px-6 py-3.5 items-center gap-2 transition-colors hover:bg-pink-50/30"
                  style={{ gridTemplateColumns: "1.6fr repeat(5, 1fr) 1fr", borderBottom: i < rows.length - 1 ? "1px solid rgba(15,23,42,0.05)" : "none" }}>
                  <span className="text-slate-700 text-sm font-medium">{row.feature}</span>
                  {row.them.map((s, j) => (
                    <div key={j} className="flex justify-center"><StatusIcon s={s} /></div>
                  ))}
                  <div className="flex justify-center"><StatusIcon s="yes" /></div>
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
              {([["yes","Disponible"],["partial","Partiel / limité"],["no","Non disponible"]] as [Status,string][]).map(([s,label]) => (
                <div key={label} className="flex items-center gap-2 text-slate-500 text-sm">
                  <StatusIcon s={s}/> {label}
                </div>
              ))}
            </div>

            {/* ── Bottom Line block ── */}
            <div className="mt-16">
              {/* Logo row */}
              <div className="flex items-center justify-center gap-3 mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/favicon.png" alt="Linkea" style={{ width: 44, height: 44, objectFit: "contain" }} />
                <span className="text-slate-400 font-medium text-sm">vs</span>
                <div className="flex items-center -space-x-1">
                  {competitors.map((c) => (
                    <div key={c.name} className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm border-2 border-white"
                      style={{ background: c.bg, color: c.color }}>
                      {c.initial}
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center tracking-[-0.02em] mb-2">La conclusion</h3>
              <p className="text-slate-500 text-center text-base mb-10 max-w-lg mx-auto">
                Linkea est la seule plateforme qui couvre l&apos;intégralité du parcours — de l&apos;idée à l&apos;équipe à l&apos;exécution.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {/* Others — gray card */}
                <div className="rounded-3xl p-8" style={{ background: "#f0f0f2", border: "1px solid rgba(15,23,42,0.07)" }}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex -space-x-1">
                      {competitors.map((c) => (
                        <div key={c.name} className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs border-2 border-white"
                          style={{ background: c.bg, color: c.color }}>
                          {c.initial}
                        </div>
                      ))}
                    </div>
                    <span className="text-slate-700 font-semibold text-base">Les autres</span>
                  </div>
                  <ul className="space-y-3">
                    {othersWeaknesses.map((w) => (
                      <li key={w} className="flex items-start gap-3">
                        <span className="mt-0.5 text-sm font-bold shrink-0" style={{ color: "#dc2626" }}>✕</span>
                        <span className="text-slate-600 text-sm leading-relaxed">{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Linkea — pink-bordered card */}
                <div className="rounded-3xl p-8 relative overflow-hidden"
                  style={{ background: "#fff", border: "2px solid #ec4899", boxShadow: "0 4px 24px rgba(236,72,153,0.12)" }}>
                  {/* subtle glow */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none"
                    style={{ background: "radial-gradient(ellipse, rgba(236,72,153,0.08) 0%, transparent 70%)" }}/>
                  <div className="flex items-center gap-3 mb-6 relative z-10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/favicon.png" alt="Linkea" style={{ width: 36, height: 36, objectFit: "contain" }} />
                    <span className="font-bold text-base text-slate-900">Linkea</span>
                  </div>
                  <ul className="space-y-3 relative z-10">
                    {linkeaStrengths.map((s) => (
                      <li key={s} className="flex items-start gap-3">
                        <span className="mt-0.5 text-sm font-bold shrink-0" style={{ color: "#ec4899" }}>✓</span>
                        <span className="text-slate-700 text-sm leading-relaxed font-medium">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── CTA ── */}
        <section className="relative py-36 px-6 text-center overflow-hidden"
          style={{ background: "linear-gradient(180deg, #ffffff 0%, #fdf4f8 50%, #ffffff 100%)" }}>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[600px] h-[400px] rounded-full"
              style={{ background: "radial-gradient(ellipse, rgba(236,72,153,0.09) 0%, transparent 65%)", filter: "blur(70px)" }}/>
          </div>
          {[220, 380].map((sz, i) => (
            <div key={i} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full animate-pulse-ring pointer-events-none"
              style={{ width: sz, height: sz, border: `1px solid rgba(236,72,153,${0.08 - i * 0.025})`, animationDelay: `${i * 0.8}s` }}/>
          ))}

          <div className="relative z-10 max-w-xl mx-auto">
            <p className="section-label-pink mb-6">Prêt à démarrer ?</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-[-0.03em] leading-tight mb-6">
              Rejoins les premiers<br/>
              <span className="text-gradient-pink">membres de Linkea.</span>
            </h2>
            <p className="body-copy text-lg mb-10">
              Accès limité, sélection sur dossier. Rejoins la liste d&apos;attente et reçois ton invitation en priorité.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/#whitelist" className="btn-pink inline-flex items-center gap-3">
                Rejoindre la beta
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="/" className="btn-ghost">Retour à l&apos;accueil</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
