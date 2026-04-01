"use client";

import { useState, useEffect, useRef } from "react";

const TOTAL = 100;
const TAKEN = 23;

export default function Whitelist() {
  const [email, setEmail]       = useState("");
  const [done, setDone]         = useState(false);
  const [active, setActive]     = useState(false);
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(false);
  const inputRef                = useRef<HTMLInputElement>(null);

  // Focus trap animation trigger
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(true); }, { threshold: 0.3 });
    const el  = document.getElementById("whitelist");
    if (el) obs.observe(el);
    return () => obs.disconnect();
  }, []);

  async function submit(e: { preventDefault(): void }) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Une erreur est survenue");
      } else {
        setDone(true);
      }
    } catch {
      setError("Une erreur est survenue");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="whitelist" className="noise-overlay relative py-44 px-6 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #020912 0%, #040f26 35%, #050d22 65%, #020912 100%)" }}>

      <div className="divider absolute top-0 left-0 right-0"/>

      {/* Triple-layered central glow for maximum impact */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Outer ambient */}
        <div className="absolute w-[1200px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(37,99,235,0.12) 0%, rgba(99,102,241,0.05) 40%, transparent 65%)",
            filter: "blur(100px)",
          }}/>
        {/* Mid concentrated */}
        <div className="absolute w-[700px] h-[500px] rounded-full animate-glow-pulse"
          style={{
            background: "radial-gradient(ellipse, rgba(37,99,235,0.28) 0%, rgba(99,102,241,0.12) 40%, transparent 65%)",
            filter: "blur(60px)",
          }}/>
        {/* Inner bright core */}
        <div className="absolute w-[300px] h-[250px] rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(96,165,250,0.2) 0%, transparent 70%)",
            filter: "blur(30px)",
            animation: "glow-pulse 3s ease-in-out infinite 0.5s",
          }}/>
      </div>

      {/* Expanding pulse rings — more visible */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[180, 310, 460, 620, 800].map((sz, i) => (
          <div key={i} className="absolute rounded-full animate-pulse-ring"
            style={{
              width: `${sz}px`,
              height: `${sz}px`,
              border: `1px solid rgba(59,130,246,${0.2 - i * 0.03})`,
              boxShadow: i < 2 ? `0 0 15px rgba(59,130,246,0.08)` : "none",
              animationDelay: `${i * 0.65}s`,
            }}/>
        ))}
      </div>

      {/* Top beam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "600px", height: "400px",
          background: "radial-gradient(ellipse 45% 70% at 50% -10%, rgba(59,130,246,0.22) 0%, transparent 60%)",
        }}/>

      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(96,165,250,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.04) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 65% 80% at 50% 50%, black 0%, transparent 75%)",
        }}/>

      {/* ── Content ───────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-lg text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-3 glass rounded-full px-5 py-2.5 mb-14">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"/>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"/>
          </span>
          <span className="text-blue-200/60 text-sm font-medium">Accès sur invitation · Beta privée</span>
        </div>

        {/* Headline */}
        <h2 className="font-bold tracking-[-0.03em] leading-[0.97] mb-7">
          <span className="block text-[clamp(42px,7vw,80px)] text-white">
            Rejoins les premiers
          </span>
          <span className="block text-[clamp(42px,7vw,80px)] text-gradient text-glow">
            membres de Linkea
          </span>
        </h2>

        <p className="body-copy text-lg mb-14 max-w-md mx-auto">
          On sélectionne les founders, étudiants tech et business
          les plus ambitieux. Accès limité aux premiers membres.
        </p>

        {/* Scarcity meter */}
        <div className="glass rounded-2xl px-6 py-5 mb-8 text-left">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"/>
              <span className="text-blue-200/55 text-sm font-medium">Places disponibles</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-white font-bold text-base">{TAKEN}</span>
              <span className="text-blue-200/35 text-sm">/{TOTAL} pris</span>
            </div>
          </div>

          <div className="h-1.5 rounded-full overflow-hidden"
            style={{ background: "rgba(255,255,255,0.05)" }}>
            <div
              className="h-full rounded-full"
              style={{
                width: `${(TAKEN / TOTAL) * 100}%`,
                background: "linear-gradient(90deg, #2563eb, #818cf8)",
                boxShadow: "0 0 10px rgba(59,130,246,0.6)",
                transition: "width 1.2s cubic-bezier(0.16,1,0.3,1)",
              }}/>
          </div>

          <p className="text-blue-400/40 text-xs mt-2.5 text-right font-medium">
            {TOTAL - TAKEN} places restantes
          </p>
        </div>

        {/* Form / success */}
        {!done ? (
          <form onSubmit={submit} className="mb-8">
            <div className="relative group/form mb-3">
              {/* Outer glow */}
              <div className="absolute -inset-1.5 rounded-2xl opacity-0 group-hover/form:opacity-100 focus-within:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(ellipse, rgba(59,130,246,0.2) 0%, transparent 70%)", filter: "blur(12px)" }}/>

              <div className="relative flex items-center rounded-2xl overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(12,24,60,0.8), rgba(6,14,40,0.9))",
                  border: "1px solid rgba(59,130,246,0.2)",
                }}>
                {/* Mail icon */}
                <div className="pl-5 pr-2 text-blue-400/35">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="1" y="3" width="14" height="10" rx="2"/>
                    <path d="M1 5l7 5 7-5"/>
                  </svg>
                </div>

                <input
                  ref={inputRef}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ton@email.com"
                  required
                  className="flex-1 bg-transparent text-white placeholder-blue-200/25 text-sm py-4 pr-3 focus:outline-none"
                />

                <div className="pr-2">
                  <button type="submit" disabled={loading} className="btn-cta-sm disabled:opacity-50 disabled:cursor-not-allowed">
                    {loading ? "..." : "Rejoindre"}
                    {!loading && (
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M2 6.5h9M7 3l3.5 3.5L7 10" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {error && (
              <p className="text-red-400/80 text-xs mb-2">{error}</p>
            )}
            <p className="text-blue-200/22 text-xs">
              Accès limité aux premiers membres · Sélection sur dossier · Aucune carte requise
            </p>
          </form>

        ) : (
          <div className="mb-8 rounded-2xl px-8 py-8 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(20,83,45,0.25), rgba(5,46,22,0.35))",
              border: "1px solid rgba(74,222,128,0.18)",
              boxShadow: "0 0 0 1px rgba(74,222,128,0.06), 0 0 40px rgba(74,222,128,0.05)",
            }}>
            <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center"
              style={{ background: "rgba(74,222,128,0.1)", border: "1px solid rgba(74,222,128,0.22)" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(74,222,128,0.9)" strokeWidth="2">
                <path d="M4.5 12.75l6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-green-300/90 font-bold text-lg mb-2">Tu es sur la liste !</p>
            <p className="text-green-400/45 text-sm">On te contacte dès que ton accès est disponible.</p>
          </div>
        )}

        {/* Trust row */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-blue-200/30 text-sm">
          {[
            { icon: (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ), label: "Aucune carte bancaire" },
            { icon: (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ), label: "Sélection sur dossier" },
            { icon: (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ), label: "Réponse sous 48h" },
          ].map((t) => (
            <div key={t.label} className="flex items-center gap-2">
              <span className="text-blue-400/45">{t.icon}</span>
              {t.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
