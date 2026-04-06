"use client";

import { useState, useEffect, useRef, useCallback } from "react";

/* ── Shared app nav ─────────────────────────────────────────────── */
function AppNav({ active }: { active: string }) {
  return (
    <div className="flex items-center justify-between px-5 py-3"
      style={{ background: "#f8f9fa", borderBottom: "1px solid rgba(15,23,42,0.07)" }}>
      <div className="flex items-center gap-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/favicon.png" alt="Linkea" style={{ width: 20, height: 20, objectFit: "contain" }}/>
        <span className="font-bold text-slate-800 text-sm">Linkea</span>
      </div>
      <div className="hidden sm:flex items-center gap-5">
        {["Accueil", "Projets", "Messages", "Sprints"].map((l) => (
          <span key={l} className="text-[12px] font-medium"
            style={{ color: l === active ? "#ec4899" : "#94a3b8" }}>{l}</span>
        ))}
      </div>
      <div className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-[11px] text-white"
        style={{ background: "linear-gradient(135deg, #2563eb, #ec4899)" }}>A</div>
    </div>
  );
}

/* ── Mockup 1 : Accueil ─────────────────────────────────────────── */
function AccueilMockup() {
  return (
    <div className="rounded-3xl overflow-hidden h-full flex flex-col"
      style={{ background: "#fff", border: "1px solid rgba(15,23,42,0.09)", boxShadow: "0 4px 6px rgba(15,23,42,0.04), 0 24px 80px rgba(15,23,42,0.10)" }}>
      <div className="h-[2px]" style={{ background: "linear-gradient(90deg,#3b82f6,#ec4899,#8b5cf6)" }}/>
      <AppNav active="Accueil"/>
      <div className="p-5 flex flex-col gap-4 flex-1">
        {/* Greeting */}
        <div>
          <p className="text-slate-900 font-bold text-base">Bonjour Alexandre 👋</p>
          <p className="text-slate-400 text-[12px] mt-0.5">FinTech AI · Sprint 3 en cours</p>
        </div>
        {/* Stat chips */}
        <div className="flex gap-2 flex-wrap">
          {[
            { label: "Sprint",     val: "3/8",  color: "#ec4899" },
            { label: "Livrables",  val: "5/7 ✓", color: "#16a34a" },
            { label: "Équipe",     val: "3 pers", color: "#2563eb" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-2 rounded-xl px-3 py-2"
              style={{ background: `${s.color}08`, border: `1px solid ${s.color}20` }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: s.color }}/>
              <span className="text-[11px] text-slate-500">{s.label}</span>
              <span className="text-[11px] font-bold" style={{ color: s.color }}>{s.val}</span>
            </div>
          ))}
        </div>
        {/* Next event */}
        <div className="rounded-2xl p-3.5" style={{ background: "rgba(236,72,153,0.04)", border: "1px solid rgba(236,72,153,0.15)" }}>
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400 mb-2">Prochain événement</p>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: "rgba(236,72,153,0.1)", border: "1px solid rgba(236,72,153,0.2)" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="1.5">
                <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M8 2v4M16 2v4M3 10h18" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <p className="text-slate-900 text-sm font-semibold">Check-in Sprint 4</p>
              <p className="text-slate-400 text-[11px]">Vendredi 16 juin · 14h00 · Julien M.</p>
            </div>
          </div>
        </div>
        {/* Activity */}
        <div className="flex flex-col gap-2">
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">Activité récente</p>
          {[
            { dot: "#16a34a", txt: "API auth déployée en staging",    who: "Dev",    time: "2h" },
            { dot: "#2563eb", txt: "Roadmap Q3 mise à jour",          who: "PM",     time: "hier" },
            { dot: "#7c3aed", txt: "Maquettes v2 partagées",          who: "Design", time: "2j" },
          ].map((a) => (
            <div key={a.txt} className="flex items-center gap-2.5 rounded-xl px-3 py-2.5"
              style={{ background: "#f8f9fb", border: "1px solid rgba(15,23,42,0.06)" }}>
              <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: a.dot }}/>
              <span className="text-[11px] flex-1 truncate text-slate-600">{a.txt}</span>
              <span className="text-[10px] text-slate-400 font-medium shrink-0">{a.who} · {a.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Mockup 2 : Projets disponibles ────────────────────────────── */
function ProjetsMockup() {
  return (
    <div className="rounded-3xl overflow-hidden h-full flex flex-col"
      style={{ background: "#fff", border: "1px solid rgba(15,23,42,0.09)", boxShadow: "0 4px 6px rgba(15,23,42,0.04), 0 24px 80px rgba(15,23,42,0.10)" }}>
      <div className="h-[2px]" style={{ background: "linear-gradient(90deg,#3b82f6,#ec4899,#8b5cf6)" }}/>
      <AppNav active="Projets"/>
      <div className="p-5 flex flex-col gap-4 flex-1">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-slate-900 font-bold text-sm">Projets disponibles</p>
            <p className="text-[12px] text-slate-400 mt-0.5">3 matchs pour ton profil · Dev Full-Stack</p>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-semibold rounded-full px-3 py-1.5"
            style={{ background: "rgba(236,72,153,0.07)", color: "#ec4899", border: "1px solid rgba(236,72,153,0.15)" }}>
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#ec4899" }}/>
            En ligne
          </div>
        </div>
        {/* Filters */}
        <div className="flex gap-2 flex-wrap">
          {[{ l:"Tous",t:true},{l:"Tech"},{l:"Finance"},{l:"Santé"},{l:"Impact"}].map((f) => (
            <span key={f.l} className="text-[11px] font-semibold px-3 py-1 rounded-full"
              style={{
                background: f.t ? "linear-gradient(135deg,#be185d,#ec4899)" : "rgba(15,23,42,0.05)",
                color: f.t ? "#fff" : "#94a3b8",
                border: f.t ? "none" : "1px solid rgba(15,23,42,0.07)",
              }}>{f.l}</span>
          ))}
        </div>
        {/* Featured card */}
        <div className="rounded-2xl p-4 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg,rgba(236,72,153,0.04),rgba(37,99,235,0.03))", border: "1.5px solid rgba(236,72,153,0.2)" }}>
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg,rgba(37,99,235,0.15),rgba(236,72,153,0.12))", border: "1px solid rgba(236,72,153,0.2)" }}>
                <svg width="14" height="14" viewBox="0 0 15 15" fill="none" stroke="#ec4899" strokeWidth="1.5">
                  <path d="M7.5 1L14 4.5V10L7.5 14L1 10V4.5L7.5 1Z" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="text-slate-900 font-bold text-sm">FinTech AI</p>
                <p className="text-[11px] text-slate-400">Finance · B2B SaaS · Early Stage</p>
              </div>
            </div>
            <div className="rounded-full px-2.5 py-1" style={{ background: "rgba(236,72,153,0.08)", border: "1px solid rgba(236,72,153,0.2)" }}>
              <span className="text-[11px] font-black" style={{ color: "#ec4899" }}>94% match</span>
            </div>
          </div>
          <div className="flex gap-2 mb-3">
            {["Full-Stack Dev","Product Manager"].map((t) => (
              <span key={t} className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
                style={{ background: "rgba(37,99,235,0.07)", color: "#2563eb", border: "1px solid rgba(37,99,235,0.15)" }}>{t}</span>
            ))}
          </div>
          <button className="w-full py-2.5 rounded-xl text-[12px] font-bold text-white flex items-center justify-center gap-1.5"
            style={{ background: "linear-gradient(135deg,#be185d,#ec4899)" }}>
            Rejoindre ce projet
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 5.5h7M5.5 2l3.5 3.5L5.5 9" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        {/* Secondary cards */}
        <div className="grid grid-cols-2 gap-3">
          {[
            { name:"EcoTrack",   domain:"Écologie · B2C", need:"Dev Full-Stack", match:87, icon:"🌿", c:"#2563eb" },
            { name:"MedConnect", domain:"Santé · B2B",    need:"Dev Backend",    match:79, icon:"🏥", c:"#7c3aed" },
          ].map((p) => (
            <div key={p.name} className="rounded-xl p-3.5" style={{ background:"#f8f9fb", border:"1px solid rgba(15,23,42,0.07)" }}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-base">{p.icon}</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                  style={{ background:`${p.c}0f`, color:p.c }}>{p.match}%</span>
              </div>
              <p className="text-slate-900 font-bold text-[12px] mb-0.5">{p.name}</p>
              <p className="text-slate-400 text-[10px] mb-1.5">{p.domain}</p>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: p.c }}/>
                <span className="text-[10px] font-medium" style={{ color: p.c }}>{p.need}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Mockup 3 : Messagerie ──────────────────────────────────────── */
function MessagerieMockup() {
  const convos = [
    { name:"Équipe FinTech AI", last:"Dev: L'API est stable 🎉", time:"14:32", unread:3, c:"#ec4899" },
    { name:"Julien M. (Mentor)", last:"RDV confirmé vendredi 14h", time:"hier", unread:0, c:"#7c3aed" },
    { name:"Thomas R.",         last:"PR ouverte pour review",     time:"hier", unread:1, c:"#2563eb" },
  ];
  return (
    <div className="rounded-3xl overflow-hidden h-full flex flex-col"
      style={{ background:"#fff", border:"1px solid rgba(15,23,42,0.09)", boxShadow:"0 4px 6px rgba(15,23,42,0.04), 0 24px 80px rgba(15,23,42,0.10)" }}>
      <div className="h-[2px]" style={{ background:"linear-gradient(90deg,#3b82f6,#ec4899,#8b5cf6)" }}/>
      <AppNav active="Messages"/>
      <div className="flex flex-1 min-h-0">
        {/* Sidebar */}
        <div className="w-[44%] flex flex-col border-r" style={{ borderColor:"rgba(15,23,42,0.07)" }}>
          <div className="px-3 py-3 border-b" style={{ borderColor:"rgba(15,23,42,0.07)" }}>
            <p className="text-slate-900 font-bold text-sm">Messages</p>
          </div>
          {convos.map((c, i) => (
            <div key={c.name} className="flex items-start gap-2.5 px-3 py-3 cursor-pointer transition-colors"
              style={{ background: i === 0 ? "rgba(236,72,153,0.05)" : "transparent", borderBottom:"1px solid rgba(15,23,42,0.05)" }}>
              <div className="w-8 h-8 rounded-xl shrink-0 flex items-center justify-center font-bold text-xs text-white"
                style={{ background:`linear-gradient(135deg,${c.c},${c.c}bb)` }}>
                {c.name[0]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <p className="text-[11px] font-semibold text-slate-900 truncate">{c.name}</p>
                  <span className="text-[10px] text-slate-400 shrink-0 ml-1">{c.time}</span>
                </div>
                <p className="text-[10px] text-slate-400 truncate">{c.last}</p>
              </div>
              {c.unread > 0 && (
                <span className="w-4 h-4 rounded-full text-[9px] font-bold text-white flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background:"#ec4899" }}>{c.unread}</span>
              )}
            </div>
          ))}
        </div>
        {/* Thread */}
        <div className="flex-1 flex flex-col">
          <div className="flex items-center gap-2 px-3 py-3 border-b" style={{ borderColor:"rgba(15,23,42,0.07)" }}>
            <div className="w-7 h-7 rounded-lg flex items-center justify-center font-bold text-[11px] text-white"
              style={{ background:"linear-gradient(135deg,#2563eb,#7c3aed)" }}>T</div>
            <div>
              <p className="text-[11px] font-semibold text-slate-900">Thomas R.</p>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400"/>
                <span className="text-[9px] text-slate-400">En ligne</span>
              </div>
            </div>
          </div>
          <div className="flex-1 p-3 flex flex-col gap-2.5 overflow-hidden">
            {/* Their message */}
            <div className="flex gap-2">
              <div className="w-6 h-6 rounded-lg shrink-0 flex items-center justify-center text-[10px] font-bold text-white"
                style={{ background:"linear-gradient(135deg,#2563eb,#7c3aed)" }}>T</div>
              <div className="rounded-2xl rounded-tl-md px-3 py-2.5 max-w-[80%]"
                style={{ background:"#f1f5f9" }}>
                <p className="text-[11px] text-slate-700 leading-relaxed">
                  J&apos;ai terminé l&apos;auth, tout est sur <span className="font-mono text-[10px] px-1 rounded" style={{ background:"rgba(37,99,235,0.1)", color:"#2563eb" }}>feature/auth</span>. Tu peux review ? 🙏
                </p>
              </div>
            </div>
            {/* Reply */}
            <div className="flex justify-end">
              <div className="rounded-2xl rounded-tr-md px-3 py-2.5 max-w-[80%]"
                style={{ background:"linear-gradient(135deg,rgba(236,72,153,0.12),rgba(190,24,93,0.08))", border:"1px solid rgba(236,72,153,0.15)" }}>
                <p className="text-[11px] leading-relaxed" style={{ color:"#be185d" }}>
                  Parfait 🔥 Je review demain matin.
                </p>
              </div>
            </div>
            {/* Typing indicator */}
            <div className="flex items-center gap-2 mt-auto">
              <div className="w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-bold text-white shrink-0"
                style={{ background:"linear-gradient(135deg,#2563eb,#7c3aed)" }}>T</div>
              <div className="flex items-center gap-1 rounded-2xl px-3 py-2" style={{ background:"#f1f5f9" }}>
                {[0,1,2].map((i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background:"#94a3b8", animationDelay:`${i*0.15}s` }}/>
                ))}
              </div>
            </div>
          </div>
          {/* Input */}
          <div className="px-3 pb-3">
            <div className="flex items-center gap-2 rounded-xl px-3 py-2.5"
              style={{ background:"#f8f9fb", border:"1px solid rgba(15,23,42,0.08)" }}>
              <span className="text-[11px] text-slate-400 flex-1">Écrire un message…</span>
              <div className="w-6 h-6 rounded-lg flex items-center justify-center"
                style={{ background:"linear-gradient(135deg,#be185d,#ec4899)" }}>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="white" strokeWidth="2">
                  <path d="M2 5.5h7M5.5 2l3.5 3.5L5.5 9" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Schools data ───────────────────────────────────────────────── */
const schools = [
  "Polytechnique","HEC Paris","CentraleSupélec","ESSEC",
  "Sciences Po","Mines ParisTech","Télécom Paris","EDHEC",
];

/* ── Stack positions ────────────────────────────────────────────── */
const STACK = [
  { z: 30, tx: 0,   ty: 0,  rot: 0,   sc: 1,    op: 1    }, // front
  { z: 20, tx: 14,  ty: 14, rot: 2,   sc: 0.96, op: 1    }, // middle
  { z: 10, tx: 28,  ty: 28, rot: 3.5, sc: 0.92, op: 0.85 }, // back
];

const MOCKUPS = [<AccueilMockup key="a"/>, <ProjetsMockup key="p"/>, <MessagerieMockup key="m"/>];
const LABELS  = ["Accueil", "Projets", "Messages"];

/* ── Hero ───────────────────────────────────────────────────────── */
export default function Hero() {
  const [offset, setOffset] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cycle = useCallback(() => { setOffset((o) => (o + 1) % 3); }, []);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(cycle, 4000);
  }, [cycle]);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [offset, resetTimer]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">

      {/* Blue aurora */}
      <div className="absolute pointer-events-none animate-aurora"
        style={{ top:"-20%", left:"-12%", width:"700px", height:"700px", borderRadius:"50%",
          background:"radial-gradient(ellipse,rgba(37,99,235,0.09) 0%,transparent 65%)", filter:"blur(80px)" }}/>
      {/* Pink aurora */}
      <div className="absolute pointer-events-none animate-aurora-r"
        style={{ bottom:"-15%", right:"-10%", width:"700px", height:"700px", borderRadius:"50%",
          background:"radial-gradient(ellipse,rgba(236,72,153,0.08) 0%,transparent 65%)", filter:"blur(70px)" }}/>
      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:`linear-gradient(rgba(15,23,42,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(15,23,42,0.022) 1px,transparent 1px)`,
          backgroundSize:"72px 72px",
          maskImage:"radial-gradient(ellipse 80% 70% at 30% 50%,rgba(0,0,0,0.5) 0%,transparent 70%)",
        }}/>

      {/* ── Layout ── */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 pt-28 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

        {/* LEFT */}
        <div className="flex flex-col items-start text-left">

          <div className="opacity-0-init animate-fade-up delay-100 inline-flex items-center gap-3 rounded-full px-5 py-2.5 mb-8"
            style={{ background:"#fdf4f8", border:"1px solid rgba(236,72,153,0.2)" }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background:"#ec4899" }}/>
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ background:"#ec4899" }}/>
            </span>
            <span className="text-slate-600 text-sm font-medium">Bêta privée · 100 premières places</span>
          </div>

          <h1 className="opacity-0-init animate-fade-up delay-200 font-bold tracking-[-0.035em] leading-[0.95] mb-5">
            <span className="block text-[clamp(44px,6vw,84px)] text-slate-900">Ton idée mérite</span>
            <span className="block text-[clamp(44px,6vw,84px)] text-gradient-vivid">une vraie équipe.</span>
            <span className="block text-[clamp(26px,3.5vw,48px)] font-semibold mt-3 text-slate-400">pas juste un freelance.</span>
          </h1>

          <p className="opacity-0-init animate-fade-up delay-300 text-slate-500 text-lg leading-relaxed mb-10 max-w-md">
            Soumets ton projet, reçois une équipe complète sélectionnée sur dossier et lance ton MVP en 4 à 8 semaines.
          </p>

          <div className="opacity-0-init animate-fade-up delay-400 flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
            <a href="#whitelist" className="btn-pink inline-flex items-center gap-3 text-white font-semibold text-[15px] px-9 rounded-2xl"
              style={{ paddingTop:"17px", paddingBottom:"17px" }}>
              Accéder à la bêta
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M3 7.5h9M8 3.5l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#how-it-works" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-800 text-sm font-semibold transition-colors duration-200">
              Comment ça marche
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M3 6.5h7M7 3.5l3 3-3 3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <div className="opacity-0-init animate-fade-up delay-500 flex items-center gap-0 mb-10">
            {[
              { val:"4–8", unit:"sem.",    sub:"idée → MVP" },
              { val:"0€",  unit:"bêta",   sub:"gratuit an 1" },
              { val:"100%",unit:"dossier",sub:"sélection" },
            ].map((s,i) => (
              <div key={i} className="flex items-center">
                <div className="flex flex-col pr-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-slate-900 tracking-tight">{s.val}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color:"#be185d" }}>{s.unit}</span>
                  </div>
                  <span className="text-[11px] text-slate-400">{s.sub}</span>
                </div>
                {i < 2 && <div className="w-px h-8 mr-6 shrink-0" style={{ background:"rgba(15,23,42,0.08)" }}/>}
              </div>
            ))}
          </div>

          <div className="opacity-0-init animate-fade-up delay-600">
            <p className="text-slate-400 text-[10px] font-semibold uppercase tracking-[0.2em] mb-3">Équipes issues de</p>
            <div className="relative overflow-hidden" style={{ maxWidth:420 }}>
              <div className="absolute left-0 top-0 bottom-0 w-4 z-10 pointer-events-none" style={{ background:"linear-gradient(to right,white,transparent)" }}/>
              <div className="absolute right-0 top-0 bottom-0 w-12 z-10 pointer-events-none" style={{ background:"linear-gradient(to left,white,transparent)" }}/>
              <div className="flex whitespace-nowrap" style={{ animation:"marquee 18s linear infinite", willChange:"transform", width:"max-content" }}>
                {[...schools,...schools].map((s,i) => (
                  <span key={i} className="inline-flex items-center gap-3 mr-5">
                    <span className="text-slate-400 text-[12px] font-medium">{s}</span>
                    <span className="text-slate-200 text-xs">·</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — Stacked cards */}
        <div className="opacity-0-init animate-fade-up delay-300 flex flex-col items-center lg:items-end gap-5">

          {/* Stack container */}
          <div className="relative w-full max-w-[500px]" style={{ height: 520 }}>
            {MOCKUPS.map((mockup, idx) => {
              const pos   = (idx - offset + 3) % 3;
              const s     = STACK[pos];
              const isFront = pos === 0;
              return (
                <div key={idx}
                  onClick={isFront ? () => { cycle(); } : undefined}
                  style={{
                    position:   "absolute",
                    inset:       0,
                    zIndex:      s.z,
                    opacity:     s.op,
                    transform:  `translateX(${s.tx}px) translateY(${s.ty}px) rotate(${s.rot}deg) scale(${s.sc})`,
                    transition:  "all 0.55s cubic-bezier(0.16,1,0.3,1)",
                    cursor:      isFront ? "pointer" : "default",
                    transformOrigin: "bottom center",
                  }}>
                  {mockup}
                </div>
              );
            })}
          </div>

          {/* Dots indicator + hint */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-2">
              {MOCKUPS.map((_, idx) => {
                const isFront = (idx - offset + 3) % 3 === 0;
                return (
                  <button key={idx} onClick={() => { setOffset((3 - idx) % 3); resetTimer(); }}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width:  isFront ? 20 : 8,
                      height: 8,
                      background: isFront ? "linear-gradient(90deg,#be185d,#ec4899)" : "rgba(15,23,42,0.12)",
                    }}/>
                );
              })}
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-[11px]">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2 4.5l4.5 4 4.5-4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.5 1v7" strokeLinecap="round"/>
              </svg>
              <span>Cliquer pour explorer · <span className="font-semibold text-slate-600">{LABELS[(offset) % 3]}</span></span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background:"linear-gradient(to bottom,transparent,#ffffff)" }}/>
    </section>
  );
}
