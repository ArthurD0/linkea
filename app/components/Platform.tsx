"use client";

import { useState } from "react";

type Tab = "platform" | "accompagnement";

/* ── Shared light-theme helpers ─────────────────────────────────── */
const D = "1px solid rgba(15,23,42,0.08)";
const CARD = { background: "#f8f9fb", border: D };
const SEP  = <div className="h-px w-full" style={{ background: "rgba(15,23,42,0.07)" }}/>;

/* ── Platform mockups (light theme) ────────────────────────────── */
function DepotMockup() {
  return (
    <div className="p-6 h-full flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="text-slate-900 text-sm font-bold">Nouveau projet</p>
        <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
          style={{ background: "rgba(236,72,153,0.08)", color: "#ec4899", border: "1px solid rgba(236,72,153,0.18)" }}>
          Étape 1 / 3
        </span>
      </div>
      {SEP}
      <div className="flex flex-col gap-3 flex-1">
        {[
          { label: "Nom du projet", value: "FinTech Assistant", done: true },
          { label: "Secteur",       value: "Finance · Intelligence Artificielle", done: true },
          { label: "Stade",         value: "Idée validée · pas encore de code", done: true },
          { label: "Besoin",        value: "MVP complet (dev + design)", done: true },
        ].map((f) => (
          <div key={f.label}>
            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] mb-1.5 text-slate-400">{f.label}</p>
            <div className="flex items-center gap-2 rounded-xl px-4 py-2.5 bg-white" style={{ border: D }}>
              <span className="text-sm flex-1 text-slate-700">{f.value}</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#16a34a" strokeWidth="2">
                <path d="M2 6l2.5 2.5L10 3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3 mt-auto">
        <button className="flex-1 py-3 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2"
          style={{ background: "linear-gradient(135deg, #be185d, #ec4899)" }}>
          Soumettre mon projet
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M2 6.5h9M7 3l3.5 3.5L7 10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <span className="text-[11px] font-semibold text-slate-400 shrink-0">{"< 5 min"}</span>
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
    <div className="p-6 h-full flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-slate-900 text-sm font-bold">Équipe recommandée</p>
          <p className="text-[11px] text-slate-400 mt-0.5">Analysé · FinTech Assistant</p>
        </div>
        <span className="text-[11px] px-3 py-1 rounded-full font-semibold animate-pulse"
          style={{ background: "rgba(22,163,74,0.08)", color: "#16a34a", border: "1px solid rgba(22,163,74,0.18)" }}>
          Sous 72h
        </span>
      </div>
      {SEP}
      <div className="flex flex-col gap-2.5 flex-1">
        {team.map((m) => (
          <div key={m.role} className="flex items-center gap-3 rounded-2xl px-4 py-3 bg-white" style={{ border: D }}>
            <div className="w-9 h-9 rounded-xl shrink-0 flex items-center justify-center"
              style={{ background: `${m.c}12`, border: `1px solid ${m.c}25` }}>
              <div className="w-3 h-3 rounded-full" style={{ background: m.c }}/>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-900 truncate">{m.role}</p>
              <p className="text-[11px] text-slate-400">{m.school}</p>
            </div>
            <svg width="42" height="42" viewBox="0 0 48 48" className="shrink-0">
              <circle cx="24" cy="24" r="20" fill="none" stroke="rgba(15,23,42,0.07)" strokeWidth="3"/>
              <circle cx="24" cy="24" r="20" fill="none" stroke={m.c} strokeWidth="3.5"
                strokeLinecap="round"
                strokeDasharray={`${(m.match / 100) * ARC * (20/22)} ${ARC * (20/22)}`}
                transform="rotate(-90 24 24)"
                style={{ filter: `drop-shadow(0 0 4px ${m.c}60)` }}/>
              <text x="24" y="28" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="700" fontFamily="inherit">
                {m.match}%
              </text>
            </svg>
          </div>
        ))}
      </div>
      <button className="w-full py-3 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2"
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
    { label: "À faire",  color: "#94a3b8", tasks: ["Maquettes onboarding", "Brief copy"] },
    { label: "En cours", color: "#2563eb", tasks: ["API auth + JWT", "Dashboard UI"] },
    { label: "Livré",    color: "#16a34a", tasks: ["Wireframes validés", "Setup Next.js", "CI/CD"] },
  ];
  return (
    <div className="p-5 h-full flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-slate-900 text-sm font-bold">Sprint 3</p>
          <p className="text-[11px] text-slate-400 mt-0.5">16 – 23 juin 2026</p>
        </div>
        <div className="flex items-center gap-1.5">
          {["#2563eb","#ec4899","#7c3aed"].map((c,i) => (
            <div key={i} className="w-6 h-6 rounded-lg flex items-center justify-center"
              style={{ background: `${c}12`, border: `1.5px solid ${c}30` }}>
              <div className="w-2 h-2 rounded-full" style={{ background: c }}/>
            </div>
          ))}
          <span className="text-[10px] text-slate-400 ml-1">3 membres</span>
        </div>
      </div>
      {SEP}
      <div className="grid grid-cols-3 gap-2 flex-1">
        {cols.map((col) => (
          <div key={col.label} className="flex flex-col gap-2">
            <div className="flex items-center gap-1.5 mb-1">
              <div className="w-2 h-2 rounded-full" style={{ background: col.color }}/>
              <span className="text-[10px] font-semibold uppercase tracking-[0.1em]" style={{ color: col.color }}>
                {col.label}
              </span>
            </div>
            {col.tasks.map((t) => (
              <div key={t} className="rounded-xl p-2.5 text-[11px] leading-snug text-slate-600 bg-white" style={{ border: D }}>
                {t}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between rounded-xl px-4 py-2.5" style={CARD}>
        <span className="text-[11px] text-slate-500">Avancement sprint</span>
        <div className="flex items-center gap-2">
          <div className="w-20 h-1.5 rounded-full overflow-hidden bg-slate-100">
            <div className="h-full rounded-full" style={{ width: "71%", background: "linear-gradient(90deg, #2563eb, #ec4899)" }}/>
          </div>
          <span className="text-[11px] font-bold text-slate-700">5/7</span>
        </div>
      </div>
    </div>
  );
}

function DashboardMockup() {
  const ARC = 2 * Math.PI * 28;
  const metrics = [
    { label: "Fonctionnalités livrées", pct: 68, color: "#ec4899" },
    { label: "Tests validés",           pct: 82, color: "#2563eb" },
    { label: "Performance Lighthouse",  pct: 91, color: "#16a34a" },
  ];
  return (
    <div className="p-6 h-full flex flex-col gap-4">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-slate-900 text-sm font-bold">Dashboard MVP</p>
          <p className="text-[11px] text-slate-400 mt-0.5">FinTech Assistant · Sprint 4/8</p>
        </div>
        <svg width="56" height="56" viewBox="0 0 68 68">
          <defs>
            <linearGradient id="dg2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563eb"/>
              <stop offset="100%" stopColor="#ec4899"/>
            </linearGradient>
          </defs>
          <circle cx="34" cy="34" r="28" fill="none" stroke="rgba(15,23,42,0.07)" strokeWidth="4"/>
          <circle cx="34" cy="34" r="28" fill="none" stroke="url(#dg2)" strokeWidth="4.5"
            strokeLinecap="round"
            strokeDasharray={`${0.68 * ARC} ${ARC}`}
            transform="rotate(-90 34 34)"
            style={{ filter: "drop-shadow(0 0 6px rgba(236,72,153,0.4))" }}/>
          <text x="34" y="31" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="800" fontFamily="inherit">68%</text>
          <text x="34" y="44" textAnchor="middle" fill="#ec4899" fontSize="7" fontFamily="inherit">MVP</text>
        </svg>
      </div>
      {SEP}
      <div className="flex flex-col gap-3 flex-1">
        {metrics.map((m) => (
          <div key={m.label}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] text-slate-500">{m.label}</span>
              <span className="text-[11px] font-bold" style={{ color: m.color }}>{m.pct}%</span>
            </div>
            <div className="h-1.5 rounded-full overflow-hidden bg-slate-100">
              <div className="h-full rounded-full" style={{ width: `${m.pct}%`, background: `linear-gradient(90deg, ${m.color}80, ${m.color})` }}/>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">Activité récente</p>
        {[
          { txt: "Auth déployé en staging",      time: "2h",  dot: "#16a34a" },
          { txt: "Livrable Sprint 4 soumis",      time: "hier", dot: "#2563eb" },
          { txt: "Feedback mentor intégré",        time: "3j",  dot: "#ec4899" },
        ].map((a) => (
          <div key={a.txt} className="flex items-center gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: a.dot }}/>
            <span className="text-[11px] flex-1 truncate text-slate-600">{a.txt}</span>
            <span className="text-[10px] text-slate-400 shrink-0">Il y a {a.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Accompagnement mockups (light theme) ───────────────────────── */
function OnboardingMockup() {
  const items = [
    { txt: "Vision produit & ICP définis",        done: true  },
    { txt: "Périmètre MVP formalisé",              done: true  },
    { txt: "User stories rédigées (12 tickets)",  done: true  },
    { txt: "Architecture technique validée",       done: true  },
    { txt: "Sprint 1 planifié",                    done: false },
  ];
  return (
    <div className="p-6 h-full flex flex-col gap-4">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-slate-900 text-sm font-bold">Atelier de cadrage</p>
          <p className="text-[11px] text-slate-400 mt-0.5">Onboarding · Semaine 1</p>
        </div>
        <span className="text-[11px] px-3 py-1 rounded-full font-semibold"
          style={{ background: "rgba(236,72,153,0.08)", color: "#ec4899", border: "1px solid rgba(236,72,153,0.18)" }}>
          Kick-off dans 48h
        </span>
      </div>
      {SEP}
      <div className="flex flex-col gap-2 flex-1">
        {items.map((item) => (
          <div key={item.txt} className="flex items-center gap-3 rounded-xl px-4 py-2.5"
            style={{
              background: item.done ? "rgba(22,163,74,0.05)" : "#f8f9fb",
              border: `1px solid ${item.done ? "rgba(22,163,74,0.18)" : "rgba(15,23,42,0.08)"}`,
            }}>
            <div className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center"
              style={{
                background: item.done ? "rgba(22,163,74,0.12)" : "rgba(15,23,42,0.05)",
                border: `1px solid ${item.done ? "rgba(22,163,74,0.3)" : "rgba(15,23,42,0.1)"}`,
              }}>
              {item.done
                ? <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="#16a34a" strokeWidth="2"><path d="M2 5l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                : <div className="w-1.5 h-1.5 rounded-full bg-slate-300"/>
              }
            </div>
            <span className="text-sm" style={{ color: item.done ? "#0f172a" : "#94a3b8" }}>{item.txt}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3 rounded-xl px-4 py-3 bg-white" style={{ border: D }}>
        <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "rgba(236,72,153,0.08)", border: "1px solid rgba(236,72,153,0.18)" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="1.5">
            <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <p className="text-[11px] font-semibold text-slate-900">Mentor attribué</p>
          <p className="text-[10px] text-slate-400">Julien M. · ex-CPO · Doctolib</p>
        </div>
      </div>
    </div>
  );
}

function SprintMockup() {
  return (
    <div className="p-6 h-full flex flex-col gap-4">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-slate-900 text-sm font-bold">Check-in · Sprint 3</p>
          <p className="text-[11px] text-slate-400 mt-0.5">Supervisé · Vendredi 14h00</p>
        </div>
        <span className="text-[11px] px-3 py-1 rounded-full font-semibold"
          style={{ background: "rgba(22,163,74,0.08)", color: "#16a34a", border: "1px solid rgba(22,163,74,0.18)" }}>
          Livrable validé ✓
        </span>
      </div>
      {SEP}
      <div className="flex items-center gap-2 flex-wrap">
        {[
          { label: "Porteur",  color: "#ec4899" },
          { label: "Dev lead", color: "#2563eb" },
          { label: "Mentor",   color: "#7c3aed", star: true },
        ].map((p) => (
          <div key={p.label} className="flex items-center gap-1.5 rounded-full px-3 py-1.5"
            style={{ background: `${p.color}0d`, border: `1px solid ${p.color}22` }}>
            <div className="w-2 h-2 rounded-full" style={{ background: p.color }}/>
            <span className="text-[11px] font-medium text-slate-700">{p.label}</span>
            {p.star && <span style={{ color: p.color, fontSize: 10 }}>★</span>}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">Compte-rendu</p>
        {[
          { txt: "Authentification livrée et déployée",  ok: true  },
          { txt: "Feedback UX intégré sur le dashboard", ok: true  },
          { txt: "Bug API /users corrigé en prod",       ok: true  },
          { txt: "Optimisation mobile — Sprint 4",       ok: false },
        ].map((item) => (
          <div key={item.txt} className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 bg-white" style={{ border: D }}>
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none"
              stroke={item.ok ? "#16a34a" : "#cbd5e1"} strokeWidth="1.8">
              {item.ok
                ? <path d="M1.5 5.5l2.5 2.5L9.5 2" strokeLinecap="round" strokeLinejoin="round"/>
                : <><circle cx="5.5" cy="5.5" r="4"/><path d="M5.5 3.5v2.5" strokeLinecap="round"/></>}
            </svg>
            <span className="text-[11px]" style={{ color: item.ok ? "#0f172a" : "#94a3b8" }}>{item.txt}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between rounded-xl px-4 py-2.5" style={CARD}>
        <span className="text-[11px] text-slate-500">Prochain check-in</span>
        <span className="text-[11px] font-bold text-slate-900">Vendredi · Sprint 4</span>
      </div>
    </div>
  );
}

function MentorsMockup() {
  const mentors = [
    { name: "Sarah L.",  role: "ex-CPO · Doctolib",   tags: ["Produit","UX"],            status: "Disponible",  sc: "#16a34a" },
    { name: "Marc D.",   role: "Founder · €2M levés",  tags: ["Pitch","Go-to-market"],    status: "Demain 10h",  sc: "#2563eb" },
    { name: "Thomas R.", role: "Senior Dev · Google",   tags: ["React","API","Infra"],     status: "Disponible",  sc: "#16a34a" },
  ];
  return (
    <div className="p-6 h-full flex flex-col gap-4">
      <div>
        <p className="text-slate-900 text-sm font-bold">Vos mentors</p>
        <p className="text-[11px] text-slate-400 mt-0.5">Praticiens · Disponibles à la demande</p>
      </div>
      {SEP}
      <div className="flex flex-col gap-2.5 flex-1">
        {mentors.map((m) => (
          <div key={m.name} className="rounded-2xl p-3.5 bg-white" style={{ border: D }}>
            <div className="flex items-start justify-between mb-2.5">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm text-white shrink-0"
                  style={{ background: "linear-gradient(135deg, #2563eb, #ec4899)" }}>
                  {m.name.split(" ").map(w => w[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{m.name}</p>
                  <p className="text-[10px] text-slate-400">{m.role}</p>
                </div>
              </div>
              <span className="text-[10px] font-semibold px-2 py-1 rounded-full flex items-center gap-1"
                style={{ background: `${m.sc}0d`, color: m.sc, border: `1px solid ${m.sc}25` }}>
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: m.sc }}/>
                {m.status}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {m.tags.map((t) => (
                <span key={t} className="text-[10px] px-2 py-0.5 rounded-full text-slate-500"
                  style={{ background: "rgba(37,99,235,0.06)", border: "1px solid rgba(37,99,235,0.12)", color: "#2563eb" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button className="w-full py-2.5 rounded-xl text-[12px] font-semibold text-slate-700 flex items-center justify-center gap-2"
        style={{ background: "#f1f5f9", border: D }}>
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
    <div className="p-6 h-full flex flex-col gap-5 items-center justify-center">
      <div className="relative flex flex-col items-center">
        <div className="absolute inset-0 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(236,72,153,0.15) 0%, transparent 65%)", filter: "blur(24px)" }}/>
        <div className="relative w-28 h-28 rounded-full flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, rgba(37,99,235,0.08), rgba(236,72,153,0.08))",
            border: "2px solid #ec4899",
            boxShadow: "0 0 0 8px rgba(236,72,153,0.07), 0 0 40px rgba(236,72,153,0.15)",
          }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/favicon.png" alt="Badge" style={{ width: 52, height: 52, objectFit: "contain" }}/>
        </div>
      </div>
      <div className="text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2" style={{ color: "#ec4899" }}>
          Badge Linkea · Projet Réel
        </p>
        <p className="text-lg font-bold text-slate-900">Alexandre M.</p>
        <p className="text-[12px] mt-1 text-slate-400">FinTech Assistant · MVP livré · Juin 2026</p>
      </div>
      <div className="w-full rounded-2xl p-4 bg-white" style={{ border: D }}>
        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400 mb-3">Ce badge atteste</p>
        {[
          "Participation à un projet réel en conditions startup",
          "Sprints supervisés · livrables validés",
          "Collaboration multi-disciplinaire",
        ].map((t) => (
          <div key={t} className="flex items-center gap-2.5 mb-2 last:mb-0">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="#16a34a" strokeWidth="2">
              <path d="M1.5 5.5l2.5 2.5L9.5 2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[11px] text-slate-600">{t}</span>
          </div>
        ))}
      </div>
      <button className="w-full py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 text-white"
        style={{ background: "linear-gradient(135deg, #0a66c2, #0d7fe6)" }}>
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
  { n: "01", label: "Dépôt de projet",           detail: "< 5 min",    desc: "Interface web guidée pour soumettre ton idée. Secteur, besoin, stade — on t'amène jusqu'au submit sans friction.",                           mockup: <DepotMockup />    },
  { n: "02", label: "Algorithme de matching",     detail: "Sous 72h",   desc: "Notre algorithme analyse ton projet et sélectionne les profils les plus complémentaires dans le réseau Linkea.",                             mockup: <MatchingMockup /> },
  { n: "03", label: "Espace projet collaboratif", detail: "Tout-en-un", desc: "Roadmap, sprints, livrables et messagerie intégrée. Toute la vie de ton projet dans un seul espace structuré.",                              mockup: <EspaceMockup />   },
  { n: "04", label: "Dashboard de supervision",   detail: "Temps réel", desc: "Suivi de l'avancement, alertes de jalons et reporting automatique. Tu vois où en est ton MVP à chaque instant.",                            mockup: <DashboardMockup />},
];

const accompagnementFeatures = [
  { n: "01", label: "Onboarding & cadrage MVP",          detail: "Semaine 1",     desc: "Atelier de cadrage pour définir précisément le scope de ton MVP. L'équipe et le porteur sont alignés dès le départ.",           mockup: <OnboardingMockup />},
  { n: "02", label: "Sprints hebdomadaires supervisés",   detail: "Chaque semaine",desc: "Check-ins structurés avec compte-rendu à chaque sprint. Un mentor valide les livrables et ajuste la trajectoire.",               mockup: <SprintMockup />   },
  { n: "03", label: "Réseau de mentors praticiens",       detail: "À la demande",  desc: "Entrepreneurs, PMs et dev seniors disponibles ponctuellement. Un accès direct à l'expérience — pas à des slides.",               mockup: <MentorsMockup />  },
  { n: "04", label: "Certification d'expérience",         detail: "À la livraison",desc: "Badge Linkea attestant la participation à un projet réel. Valorisable sur CV et LinkedIn pour chaque membre.",                   mockup: <BadgeMockup />    },
];

/* ── Section ─────────────────────────────────────────────────────── */
export default function Platform() {
  const [tab, setTab]     = useState<Tab>("platform");
  const [active, setActive] = useState(0);

  const features = tab === "platform" ? platformFeatures : accompagnementFeatures;

  function switchTab(t: Tab) { setTab(t); setActive(0); }

  return (
    <section className="relative py-32 px-6 overflow-hidden bg-white">
      <div className="divider absolute top-0 left-0 right-0"/>

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
              { id: "platform"       as Tab, label: "La plateforme"    },
              { id: "accompagnement" as Tab, label: "L'accompagnement" },
            ]).map((t) => (
              <button key={t.id} onClick={() => switchTab(t.id)}
                className="px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300"
                style={{
                  color:      tab === t.id ? "#ffffff" : "#64748b",
                  background: tab === t.id ? "linear-gradient(135deg, #be185d, #ec4899)" : "transparent",
                  boxShadow:  tab === t.id ? "0 2px 12px rgba(236,72,153,0.3)" : "none",
                }}>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

          {/* Feature list */}
          <div className="flex flex-col gap-3">
            {features.map((f, i) => (
              <button key={`${tab}-${i}`} onClick={() => setActive(i)}
                className="text-left rounded-2xl px-6 py-5 transition-all duration-300"
                style={{
                  background: active === i ? "#ffffff" : "rgba(247,247,248,0.8)",
                  border:     active === i ? "1px solid rgba(236,72,153,0.2)" : "1px solid rgba(15,23,42,0.06)",
                  boxShadow:  active === i ? "0 2px 12px rgba(236,72,153,0.08), 0 8px 32px rgba(15,23,42,0.06)" : "none",
                }}>
                <div className="flex items-start gap-4">
                  <span className="text-[11px] font-black tracking-[0.1em] mt-1 shrink-0"
                    style={{ color: active === i ? "#ec4899" : "rgba(15,23,42,0.2)" }}>{f.n}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span className="text-base font-bold tracking-[-0.01em]"
                        style={{ color: active === i ? "#0f172a" : "#64748b" }}>{f.label}</span>
                      <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full shrink-0"
                        style={{
                          background: active === i ? "rgba(236,72,153,0.08)" : "rgba(15,23,42,0.05)",
                          color:      active === i ? "#ec4899" : "#94a3b8",
                          border:     `1px solid ${active === i ? "rgba(236,72,153,0.15)" : "rgba(15,23,42,0.07)"}`,
                        }}>{f.detail}</span>
                    </div>
                    {active === i && <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>}
                  </div>
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

          {/* Mockup panel — light theme */}
          <div className="lg:sticky lg:top-28">
            <div key={`${tab}-${active}`} className="rounded-3xl overflow-hidden"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(15,23,42,0.09)",
                boxShadow: "0 4px 6px rgba(15,23,42,0.04), 0 24px 80px rgba(15,23,42,0.10), 0 0 0 1px rgba(236,72,153,0.05)",
                minHeight: 420,
                animation: "fadeSlideUp 0.35s cubic-bezier(0.16,1,0.3,1)",
              }}>

              {/* Gradient top border */}
              <div className="h-[2px] w-full"
                style={{ background: "linear-gradient(90deg, #3b82f6 0%, #ec4899 50%, #8b5cf6 100%)" }}/>

              {/* Window chrome — light */}
              <div className="flex items-center gap-3 px-5 py-3"
                style={{ background: "#f8f9fa", borderBottom: "1px solid rgba(15,23,42,0.07)" }}>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/60"/>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60"/>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/60"/>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-1"
                    style={{ border: "1px solid rgba(15,23,42,0.08)" }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"/>
                    <span className="text-[10px] font-mono text-slate-400">app.linkea.co</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#ec4899" }}/>
                  <span className="text-[10px] font-mono" style={{ color: "#ec4899" }}>live</span>
                </div>
              </div>

              {features[active].mockup}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
