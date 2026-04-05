"use client";

import { useState } from "react";

/* ── Types ──────────────────────────────────────────────────────── */
type Tab = "platform" | "accompagnement";

/* ── Platform mockups ───────────────────────────────────────────── */
function DepotMockup() {
  return (
    <div className="p-6 sm:p-8 h-full flex flex-col gap-5">
      <div className="flex items-center justify-between mb-1">
        <p className="text-white/80 text-sm font-semibold">Nouveau projet</p>
        <span className="text-[11px] font-mono px-2.5 py-1 rounded-full" style={{ background: "rgba(236,72,153,0.15)", color: "#f472b6" }}>
          Étape 1 / 3
        </span>
      </div>

      <div className="h-px w-full" style={{ background: "rgba(255,255,255,0.06)" }}/>

      {[
        { label: "Nom du projet", value: "FinTech Assistant", done: true },
        { label: "Secteur",       value: "Finance · Intelligence Artificielle", done: true },
        { label: "Stade",         value: "Idée validée · pas encore de code", done: true },
        { label: "Besoin",        value: "MVP complet (dev + design)", done: true },
      ].map((f) => (
        <div key={f.label}>
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] mb-1.5" style={{ color: "rgba(148,163,184,0.6)" }}>{f.label}</p>
          <div className="flex items-center gap-2 rounded-xl px-4 py-2.5" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <span className="text-sm flex-1" style={{ color: "rgba(255,255,255,0.75)" }}>{f.value}</span>
            {f.done && (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="rgba(74,222,128,0.7)" strokeWidth="2">
                <path d="M2 6l2.5 2.5L10 3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
        </div>
      ))}

      <div className="mt-auto flex items-center gap-3">
        <button className="flex-1 py-3 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2"
          style={{ background: "linear-gradient(135deg, #be185d, #ec4899)" }}>
          Soumettre mon projet
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M2 6.5h9M7 3l3.5 3.5L7 10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="flex items-center gap-1.5 shrink-0">
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="rgba(74,222,128,0.6)" strokeWidth="1.8">
            <circle cx="5.5" cy="5.5" r="4"/>
            <path d="M5.5 3.5v2l1 1" strokeLinecap="round"/>
          </svg>
          <span className="text-[10px]" style={{ color: "rgba(74,222,128,0.55)" }}>{"< 5 min"}</span>
        </div>
      </div>
    </div>
  );
}

function MatchingMockup() {
  const ARC = 2 * Math.PI * 22;
  const team = [
    { role: "Full-Stack Dev",  school: "Polytechnique", match: 96, c: "#2563eb" },
    { role: "Product Manager", school: "HEC Paris",      match: 93, c: "#ec4899" },
    { role: "Designer UX/UI",  school: "Sciences Po",    match: 89, c: "#7c3aed" },
  ];
  return (
    <div className="p-6 sm:p-8 h-full flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-white/80 text-sm font-semibold">Équipe recommandée</p>
          <p className="text-[11px] mt-0.5" style={{ color: "rgba(96,165,250,0.5)" }}>Analysé · FinTech Assistant</p>
        </div>
        <span className="text-[11px] px-3 py-1 rounded-full font-semibold animate-pulse"
          style={{ background: "rgba(74,222,128,0.1)", color: "rgba(74,222,128,0.8)", border: "1px solid rgba(74,222,128,0.2)" }}>
          Sous 72h
        </span>
      </div>

      <div className="h-px w-full" style={{ background: "rgba(255,255,255,0.06)" }}/>

      <div className="flex flex-col gap-3 flex-1">
        {team.map((m) => (
          <div key={m.role} className="flex items-center gap-4 rounded-2xl px-4 py-3.5"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="w-9 h-9 rounded-xl shrink-0 flex items-center justify-center"
              style={{ background: `linear-gradient(135deg, ${m.c}40, ${m.c}20)`, border: `1px solid ${m.c}35` }}>
              <div className="w-3 h-3 rounded-full" style={{ background: `${m.c}90` }}/>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate" style={{ color: "rgba(255,255,255,0.8)" }}>{m.role}</p>
              <p className="text-[11px]" style={{ color: "rgba(96,165,250,0.45)" }}>{m.school}</p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <svg width="38" height="38" viewBox="0 0 48 48">
                <circle cx="24" cy="24" r="22" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="3"/>
                <circle cx="24" cy="24" r="22" fill="none" stroke={m.c} strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeDasharray={`${(m.match / 100) * ARC * (22 / 22)} ${ARC * (22 / 22)}`}
                  transform="rotate(-90 24 24)"
                  style={{ filter: `drop-shadow(0 0 5px ${m.c}80)` }}/>
                <text x="24" y="28" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="inherit">
                  {m.match}%
                </text>
              </svg>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full py-3 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2"
        style={{ background: "linear-gradient(135deg, #be185d, #ec4899)" }}>
        Confirmer cette équipe
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 6.5h9M7 3l3.5 3.5L7 10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}

function EspaceMockup() {
  const cols = [
    { label: "À faire",  color: "#475569", tasks: ["Maquettes onboarding", "Brief copywriting"] },
    { label: "En cours", color: "#2563eb", tasks: ["API auth + JWT", "Dashboard UI"] },
    { label: "Livré",    color: "#16a34a", tasks: ["Wireframes validés", "Setup Next.js", "CI/CD pipeline"] },
  ];
  return (
    <div className="p-5 sm:p-7 h-full flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-white/80 text-sm font-semibold">Sprint 3</p>
          <p className="text-[11px] mt-0.5" style={{ color: "rgba(96,165,250,0.45)" }}>16 – 23 juin 2026</p>
        </div>
        <div className="flex items-center gap-1.5">
          {["#2563eb", "#ec4899", "#7c3aed"].map((c, i) => (
            <div key={i} className="w-6 h-6 rounded-lg border-2 flex items-center justify-center"
              style={{ background: `${c}25`, borderColor: c }}>
              <div className="w-2 h-2 rounded-full" style={{ background: c }}/>
            </div>
          ))}
          <span className="text-[11px] ml-1" style={{ color: "rgba(255,255,255,0.35)" }}>3 membres</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 flex-1">
        {cols.map((col) => (
          <div key={col.label} className="flex flex-col gap-2">
            <div className="flex items-center gap-1.5 mb-1">
              <div className="w-2 h-2 rounded-full" style={{ background: col.color }}/>
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em]" style={{ color: `${col.color}cc` }}>
                {col.label}
              </span>
            </div>
            {col.tasks.map((t) => (
              <div key={t} className="rounded-xl p-2.5 text-[11px] leading-snug"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.65)" }}>
                {t}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between rounded-xl px-4 py-2.5"
        style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.05)" }}>
        <span className="text-[11px]" style={{ color: "rgba(148,163,184,0.5)" }}>Avancement sprint</span>
        <div className="flex items-center gap-2">
          <div className="w-20 h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
            <div className="h-full rounded-full" style={{ width: "71%", background: "linear-gradient(90deg, #2563eb, #ec4899)" }}/>
          </div>
          <span className="text-[11px] font-semibold" style={{ color: "rgba(255,255,255,0.6)" }}>5/7</span>
        </div>
      </div>
    </div>
  );
}

function DashboardMockup() {
  const ARC = 2 * Math.PI * 30;
  const metrics = [
    { label: "Fonctionnalités livrées", pct: 68, color: "#ec4899" },
    { label: "Tests validés",           pct: 82, color: "#2563eb" },
    { label: "Performance Lighthouse",  pct: 91, color: "#16a34a" },
  ];
  return (
    <div className="p-6 sm:p-8 h-full flex flex-col gap-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-white/80 text-sm font-semibold">Dashboard MVP</p>
          <p className="text-[11px] mt-0.5" style={{ color: "rgba(96,165,250,0.45)" }}>FinTech Assistant · Sprint 4/8</p>
        </div>
        <svg width="56" height="56" viewBox="0 0 68 68">
          <circle cx="34" cy="34" r="30" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="4"/>
          <circle cx="34" cy="34" r="30" fill="none" stroke="url(#dg)" strokeWidth="4.5"
            strokeLinecap="round"
            strokeDasharray={`${0.68 * ARC * (30/30)} ${ARC * (30/30)}`}
            transform="rotate(-90 34 34)"
            style={{ filter: "drop-shadow(0 0 8px rgba(236,72,153,0.5))" }}/>
          <defs>
            <linearGradient id="dg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563eb"/>
              <stop offset="100%" stopColor="#ec4899"/>
            </linearGradient>
          </defs>
          <text x="34" y="30" textAnchor="middle" fill="white" fontSize="13" fontWeight="800" fontFamily="inherit">68%</text>
          <text x="34" y="43" textAnchor="middle" fill="rgba(244,114,182,0.5)" fontSize="7" fontFamily="inherit">MVP</text>
        </svg>
      </div>

      <div className="h-px w-full" style={{ background: "rgba(255,255,255,0.06)" }}/>

      <div className="flex flex-col gap-3 flex-1">
        {metrics.map((m) => (
          <div key={m.label}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px]" style={{ color: "rgba(148,163,184,0.65)" }}>{m.label}</span>
              <span className="text-[11px] font-bold" style={{ color: m.color }}>{m.pct}%</span>
            </div>
            <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.07)" }}>
              <div className="h-full rounded-full transition-all duration-1000"
                style={{ width: `${m.pct}%`, background: `linear-gradient(90deg, ${m.color}90, ${m.color})` }}/>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-[10px] font-semibold uppercase tracking-[0.15em]" style={{ color: "rgba(148,163,184,0.4)" }}>Activité récente</p>
        {[
          { txt: "Auth système déployé en staging",   time: "Il y a 2h",   dot: "#16a34a" },
          { txt: "Livrable Sprint 4 soumis",          time: "Hier",        dot: "#2563eb" },
          { txt: "Feedback mentor intégré",           time: "Il y a 3j",   dot: "#ec4899" },
        ].map((a) => (
          <div key={a.txt} className="flex items-center gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: a.dot }}/>
            <span className="text-[11px] flex-1 truncate" style={{ color: "rgba(255,255,255,0.55)" }}>{a.txt}</span>
            <span className="text-[10px] shrink-0" style={{ color: "rgba(148,163,184,0.35)" }}>{a.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Accompagnement mockups ─────────────────────────────────────── */
function OnboardingMockup() {
  const items = [
    { txt: "Vision produit & ICP définis",         done: true  },
    { txt: "Périmètre MVP formalisé",               done: true  },
    { txt: "User stories rédigées (12 tickets)",   done: true  },
    { txt: "Architecture technique validée",        done: true  },
    { txt: "Sprint 1 planifié",                     done: false },
  ];
  return (
    <div className="p-6 sm:p-8 h-full flex flex-col gap-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-white/80 text-sm font-semibold">Atelier de cadrage</p>
          <p className="text-[11px] mt-0.5" style={{ color: "rgba(96,165,250,0.45)" }}>Onboarding · Semaine 1</p>
        </div>
        <span className="text-[11px] px-3 py-1 rounded-full font-semibold"
          style={{ background: "rgba(236,72,153,0.12)", color: "#f472b6", border: "1px solid rgba(236,72,153,0.2)" }}>
          Kick-off dans 48h
        </span>
      </div>
      <div className="h-px w-full" style={{ background: "rgba(255,255,255,0.06)" }}/>
      <div className="flex flex-col gap-2.5 flex-1">
        {items.map((item) => (
          <div key={item.txt} className="flex items-center gap-3 rounded-xl px-4 py-3"
            style={{ background: item.done ? "rgba(74,222,128,0.04)" : "rgba(255,255,255,0.025)", border: `1px solid ${item.done ? "rgba(74,222,128,0.15)" : "rgba(255,255,255,0.06)"}` }}>
            <div className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center"
              style={{ background: item.done ? "rgba(74,222,128,0.15)" : "rgba(255,255,255,0.06)", border: `1px solid ${item.done ? "rgba(74,222,128,0.3)" : "rgba(255,255,255,0.1)"}` }}>
              {item.done
                ? <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="rgba(74,222,128,0.9)" strokeWidth="2"><path d="M2 5l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                : <div className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.2)" }}/>
              }
            </div>
            <span className="text-sm" style={{ color: item.done ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.35)" }}>{item.txt}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3 rounded-xl px-4 py-3"
        style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "rgba(236,72,153,0.12)", border: "1px solid rgba(236,72,153,0.2)" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f472b6" strokeWidth="1.5">
            <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <p className="text-[11px] font-semibold" style={{ color: "rgba(255,255,255,0.65)" }}>Mentor attribué</p>
          <p className="text-[10px]" style={{ color: "rgba(96,165,250,0.45)" }}>Julien M. · ex-CPO · Doctolib</p>
        </div>
      </div>
    </div>
  );
}

function SprintMockup() {
  return (
    <div className="p-6 sm:p-8 h-full flex flex-col gap-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-white/80 text-sm font-semibold">Check-in · Sprint 3</p>
          <p className="text-[11px] mt-0.5" style={{ color: "rgba(96,165,250,0.45)" }}>Supervisé · Vendredi 14h00</p>
        </div>
        <span className="text-[11px] px-3 py-1 rounded-full font-semibold"
          style={{ background: "rgba(74,222,128,0.1)", color: "rgba(74,222,128,0.85)", border: "1px solid rgba(74,222,128,0.2)" }}>
          Livrable validé ✓
        </span>
      </div>
      <div className="h-px w-full" style={{ background: "rgba(255,255,255,0.06)" }}/>
      <div className="flex items-center gap-3">
        {[
          { label: "Porteur",  color: "#ec4899" },
          { label: "Dev lead", color: "#2563eb" },
          { label: "Mentor",   color: "#7c3aed", star: true },
        ].map((p) => (
          <div key={p.label} className="flex items-center gap-2 rounded-full px-3 py-1.5"
            style={{ background: `${p.color}12`, border: `1px solid ${p.color}25` }}>
            <div className="w-2 h-2 rounded-full" style={{ background: p.color }}/>
            <span className="text-[11px] font-medium" style={{ color: "rgba(255,255,255,0.6)" }}>{p.label}</span>
            {p.star && <span style={{ color: "#f472b6", fontSize: 10 }}>★</span>}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] mb-1" style={{ color: "rgba(148,163,184,0.4)" }}>Compte-rendu</p>
        {[
          { txt: "Authentification livrée et déployée",   ok: true  },
          { txt: "Feedback UX intégré sur le dashboard",  ok: true  },
          { txt: "Bug API /users corrigé en prod",        ok: true  },
          { txt: "Optimisation mobile — Sprint 4",        ok: false },
        ].map((item) => (
          <div key={item.txt} className="flex items-center gap-2.5 rounded-xl px-3 py-2.5"
            style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.05)" }}>
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none"
              stroke={item.ok ? "rgba(74,222,128,0.7)" : "rgba(148,163,184,0.35)"} strokeWidth="1.8">
              {item.ok
                ? <path d="M1.5 5.5l2.5 2.5L9.5 2" strokeLinecap="round" strokeLinejoin="round"/>
                : <><circle cx="5.5" cy="5.5" r="4"/><path d="M5.5 3.5v2.5" strokeLinecap="round"/></>}
            </svg>
            <span className="text-[11px]" style={{ color: item.ok ? "rgba(255,255,255,0.65)" : "rgba(148,163,184,0.4)" }}>{item.txt}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between rounded-xl px-4 py-2.5"
        style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.05)" }}>
        <span className="text-[11px]" style={{ color: "rgba(148,163,184,0.5)" }}>Prochain check-in</span>
        <span className="text-[11px] font-semibold" style={{ color: "rgba(255,255,255,0.6)" }}>Vendredi · Sprint 4</span>
      </div>
    </div>
  );
}

function MentorsMockup() {
  const mentors = [
    { name: "Sarah L.",  role: "ex-CPO · Doctolib",  tags: ["Produit", "UX"], status: "Disponible",       statusColor: "#16a34a" },
    { name: "Marc D.",   role: "Founder · €2M levés", tags: ["Pitch", "Go-to-market"], status: "Demain 10h", statusColor: "#2563eb" },
    { name: "Thomas R.", role: "Senior Dev · Google", tags: ["React", "API", "Infra"], status: "Disponible", statusColor: "#16a34a" },
  ];
  return (
    <div className="p-6 sm:p-8 h-full flex flex-col gap-4">
      <div>
        <p className="text-white/80 text-sm font-semibold">Vos mentors</p>
        <p className="text-[11px] mt-0.5" style={{ color: "rgba(96,165,250,0.45)" }}>Praticiens · Disponibles à la demande</p>
      </div>
      <div className="h-px w-full" style={{ background: "rgba(255,255,255,0.06)" }}/>
      <div className="flex flex-col gap-3 flex-1">
        {mentors.map((m) => (
          <div key={m.name} className="rounded-2xl p-4"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm"
                  style={{ background: "rgba(236,72,153,0.12)", color: "#f472b6", border: "1px solid rgba(236,72,153,0.2)" }}>
                  {m.name.split(" ").map(w => w[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.8)" }}>{m.name}</p>
                  <p className="text-[11px]" style={{ color: "rgba(96,165,250,0.45)" }}>{m.role}</p>
                </div>
              </div>
              <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5"
                style={{ background: `${m.statusColor}12`, color: `${m.statusColor}cc`, border: `1px solid ${m.statusColor}25` }}>
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: m.statusColor }}/>
                {m.status}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {m.tags.map((t) => (
                <span key={t} className="text-[10px] px-2 py-0.5 rounded-full"
                  style={{ background: "rgba(255,255,255,0.05)", color: "rgba(148,163,184,0.7)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button className="w-full py-2.5 rounded-xl text-[12px] font-semibold flex items-center justify-center gap-2"
        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", color: "rgba(255,255,255,0.6)" }}>
        Demander un créneau
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M2 6h8M6 2l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}

function BadgeMockup() {
  return (
    <div className="p-6 sm:p-8 h-full flex flex-col gap-5 items-center justify-center">
      {/* Badge visual */}
      <div className="relative flex flex-col items-center">
        {/* Outer glow */}
        <div className="absolute inset-0 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(236,72,153,0.2) 0%, transparent 65%)", filter: "blur(20px)" }}/>
        {/* Badge ring */}
        <div className="relative w-32 h-32 rounded-full flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, rgba(37,99,235,0.15), rgba(236,72,153,0.15))",
            border: "2px solid",
            borderColor: "#ec4899",
            boxShadow: "0 0 0 6px rgba(236,72,153,0.08), 0 0 40px rgba(236,72,153,0.2)",
          }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/favicon.png" alt="Linkea badge" style={{ width: 56, height: 56, objectFit: "contain" }}/>
        </div>
      </div>

      <div className="text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] mb-2" style={{ color: "#f472b6" }}>
          Badge Linkea · Projet Réel
        </p>
        <p className="text-lg font-bold text-white/80">Alexandre M.</p>
        <p className="text-[12px] mt-1" style={{ color: "rgba(96,165,250,0.5)" }}>
          FinTech Assistant · MVP livré · Juin 2026
        </p>
      </div>

      <div className="w-full rounded-2xl p-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] mb-3" style={{ color: "rgba(148,163,184,0.4)" }}>Ce badge atteste</p>
        {[
          "Participation à un projet réel en conditions startup",
          "Sprints supervisés · livrables validés",
          "Collaboration multi-disciplinaire",
        ].map((t) => (
          <div key={t} className="flex items-center gap-2.5 mb-2 last:mb-0">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="rgba(74,222,128,0.7)" strokeWidth="2">
              <path d="M1.5 5.5l2.5 2.5L9.5 2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.55)" }}>{t}</span>
          </div>
        ))}
      </div>

      <button className="w-full py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2"
        style={{ background: "linear-gradient(135deg, #0a66c2, #0d7fe6)", color: "white" }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
        Partager sur LinkedIn
      </button>
    </div>
  );
}

/* ── Data ────────────────────────────────────────────────────────── */
const platformFeatures = [
  {
    n: "01",
    label: "Dépôt de projet",
    detail: "< 5 min",
    desc: "Interface web guidée pour soumettre ton idée. Secteur, besoin, stade — on t'amène jusqu'au submit sans friction.",
    mockup: <DepotMockup />,
  },
  {
    n: "02",
    label: "Algorithme de matching",
    detail: "Sous 72h",
    desc: "Notre algorithme analyse ton projet et sélectionne les profils les plus complémentaires dans le réseau Linkea.",
    mockup: <MatchingMockup />,
  },
  {
    n: "03",
    label: "Espace projet collaboratif",
    detail: "Tout-en-un",
    desc: "Roadmap, sprints, livrables et messagerie intégrée. Toute la vie de ton projet dans un seul espace structuré.",
    mockup: <EspaceMockup />,
  },
  {
    n: "04",
    label: "Dashboard de supervision",
    detail: "Temps réel",
    desc: "Suivi de l'avancement, alertes de jalons et reporting automatique. Tu vois où en est ton MVP à chaque instant.",
    mockup: <DashboardMockup />,
  },
];

const accompagnementFeatures = [
  {
    n: "01",
    label: "Onboarding & cadrage MVP",
    detail: "Semaine 1",
    desc: "Atelier de cadrage pour définir précisément le scope de ton MVP. L'équipe et le porteur sont alignés dès le départ.",
    mockup: <OnboardingMockup />,
  },
  {
    n: "02",
    label: "Sprints hebdomadaires supervisés",
    detail: "Chaque semaine",
    desc: "Check-ins structurés avec compte-rendu à chaque sprint. Un mentor valide les livrables et ajuste la trajectoire.",
    mockup: <SprintMockup />,
  },
  {
    n: "03",
    label: "Réseau de mentors praticiens",
    detail: "À la demande",
    desc: "Entrepreneurs, PMs et dev seniors disponibles ponctuellement. Un accès direct à l'expérience — pas à des slides.",
    mockup: <MentorsMockup />,
  },
  {
    n: "04",
    label: "Certification d'expérience",
    detail: "À la livraison",
    desc: "Badge Linkea attestant la participation à un projet réel. Valorisable sur CV et LinkedIn pour chaque membre.",
    mockup: <BadgeMockup />,
  },
];

/* ── Section ─────────────────────────────────────────────────────── */
export default function Platform() {
  const [tab, setTab] = useState<Tab>("platform");
  const [active, setActive] = useState(0);

  const features = tab === "platform" ? platformFeatures : accompagnementFeatures;

  function switchTab(t: Tab) {
    setTab(t);
    setActive(0);
  }

  return (
    <section className="relative py-32 px-6 overflow-hidden bg-white">
      <div className="divider absolute top-0 left-0 right-0"/>

      {/* Subtle bg glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 900, height: 600,
          background: "radial-gradient(ellipse, rgba(236,72,153,0.035) 0%, rgba(37,99,235,0.025) 40%, transparent 65%)",
          filter: "blur(60px)",
        }}/>

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label-pink mb-5">Produit</p>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-900 tracking-[-0.03em] leading-[0.97] mb-6">
            Tout ce dont tu as besoin
            <br/>
            <span className="text-gradient-pink-blue">dans un seul système.</span>
          </h2>
          <p className="body-copy text-lg max-w-lg mx-auto">
            Une plateforme produit et un cadre d&apos;accompagnement complet —
            de la soumission de l&apos;idée à la certification du MVP.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex rounded-2xl p-1.5 gap-1"
            style={{ background: "#f0f0f2", border: "1px solid rgba(15,23,42,0.07)" }}>
            {([
              { id: "platform" as Tab,        label: "La plateforme" },
              { id: "accompagnement" as Tab,  label: "L'accompagnement" },
            ] as { id: Tab; label: string }[]).map((t) => (
              <button
                key={t.id}
                onClick={() => switchTab(t.id)}
                className="relative px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300"
                style={{
                  color: tab === t.id ? "#ffffff" : "#64748b",
                  background: tab === t.id ? "linear-gradient(135deg, #be185d, #ec4899)" : "transparent",
                  boxShadow: tab === t.id ? "0 2px 12px rgba(236,72,153,0.3)" : "none",
                }}>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content: features + mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

          {/* Feature list */}
          <div className="flex flex-col gap-3">
            {features.map((f, i) => (
              <button
                key={`${tab}-${i}`}
                onClick={() => setActive(i)}
                className="text-left rounded-2xl px-6 py-5 transition-all duration-300 group"
                style={{
                  background: active === i ? "#ffffff" : "rgba(247,247,248,0.8)",
                  border: active === i ? "1px solid rgba(236,72,153,0.2)" : "1px solid rgba(15,23,42,0.06)",
                  boxShadow: active === i ? "0 2px 12px rgba(236,72,153,0.08), 0 8px 32px rgba(15,23,42,0.06)" : "none",
                }}>
                <div className="flex items-start gap-4">
                  {/* Number */}
                  <span className="text-[11px] font-black tracking-[0.1em] mt-1 shrink-0"
                    style={{ color: active === i ? "#ec4899" : "rgba(15,23,42,0.2)" }}>
                    {f.n}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span className="text-base font-bold tracking-[-0.01em]"
                        style={{ color: active === i ? "#0f172a" : "#64748b" }}>
                        {f.label}
                      </span>
                      <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full shrink-0"
                        style={{
                          background: active === i ? "rgba(236,72,153,0.08)" : "rgba(15,23,42,0.05)",
                          color: active === i ? "#ec4899" : "#94a3b8",
                          border: `1px solid ${active === i ? "rgba(236,72,153,0.15)" : "rgba(15,23,42,0.07)"}`,
                        }}>
                        {f.detail}
                      </span>
                    </div>
                    {active === i && (
                      <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                    )}
                  </div>
                  {/* Arrow */}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                    stroke={active === i ? "#ec4899" : "#cbd5e1"} strokeWidth="1.8"
                    className="shrink-0 mt-1 transition-transform duration-300"
                    style={{ transform: active === i ? "rotate(90deg)" : "rotate(0deg)" }}>
                    <path d="M3 6l5 4 5-4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
            ))}
          </div>

          {/* Mockup panel */}
          <div className="lg:sticky lg:top-28">
            <div
              key={`${tab}-${active}`}
              className="rounded-3xl overflow-hidden"
              style={{
                background: "linear-gradient(160deg, #0c1a3a 0%, #060e25 100%)",
                boxShadow: "0 0 0 1px rgba(15,23,42,0.1), 0 40px 100px rgba(15,23,42,0.15), 0 0 60px rgba(37,99,235,0.06)",
                minHeight: 420,
                animation: "fadeSlideUp 0.35s cubic-bezier(0.16,1,0.3,1)",
              }}>

              {/* Glowing top border */}
              <div className="h-[1.5px] w-full"
                style={{ background: "linear-gradient(90deg, transparent 2%, rgba(59,130,246,0.5) 25%, rgba(244,114,182,0.6) 50%, rgba(99,102,241,0.5) 75%, transparent 98%)" }}/>

              {/* Window chrome */}
              <div className="flex items-center gap-3 px-5 py-3.5"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(239,68,68,0.55)" }}/>
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(234,179,8,0.55)" }}/>
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(34,197,94,0.55)" }}/>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="flex items-center gap-2 rounded-lg px-3 py-1"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"/>
                    <span className="text-[10px] font-mono" style={{ color: "rgba(147,197,253,0.35)" }}>
                      app.linkea.co
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "rgba(236,72,153,0.6)" }}/>
                  <span className="text-[10px] font-mono" style={{ color: "rgba(244,114,182,0.4)" }}>live</span>
                </div>
              </div>

              {/* Dynamic content */}
              {features[active].mockup}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
