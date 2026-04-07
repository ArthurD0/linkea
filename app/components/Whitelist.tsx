"use client";

import { useState, useEffect } from "react";

const TOTAL = 500;
const TAKEN = 47;

export default function Whitelist() {
  const [email, setEmail]     = useState("");
  const [done, setDone]       = useState(false);
  const [active, setActive]   = useState(false);
  const [error, setError]     = useState("");
  const [loading, setLoading] = useState(false);

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
    <section id="whitelist" className="relative py-40 px-6 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #f7f7f8 0%, #fdf4f8 40%, #fce7f3 70%, #fdf4f8 100%)" }}>

      <div className="divider absolute top-0 left-0 right-0" style={{ background: "rgba(236,72,153,0.1)" }}/>


      {/* Pink central glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[800px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(236,72,153,0.09) 0%, rgba(190,24,93,0.03) 45%, transparent 65%)",
            filter: "blur(80px)",
          }}/>
      </div>

      {/* Pulse rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[200, 360, 540].map((sz, i) => (
          <div key={i} className="absolute rounded-full animate-pulse-ring"
            style={{
              width: `${sz}px`,
              height: `${sz}px`,
              border: `1px solid rgba(236,72,153,${0.08 - i * 0.02})`,
              animationDelay: `${i * 0.8}s`,
            }}/>
        ))}
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-lg text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-3 rounded-full px-5 py-2.5 mb-12"
          style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(236,72,153,0.2)", backdropFilter: "blur(12px)" }}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: "#ec4899" }}/>
            <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#ec4899" }}/>
          </span>
          <span className="text-slate-600 text-sm font-medium">Beta privée · 500 places</span>
        </div>

        {/* Headline */}
        <div className="relative">
          <h2 className="font-bold tracking-[-0.03em] leading-[0.97] mb-7">
            <span className="block text-[clamp(42px,7vw,80px)] text-slate-900">
              Tu as une idée.
            </span>
            <span className="block text-[clamp(42px,7vw,80px)] text-gradient-pink">
              On construit avec toi.
            </span>
          </h2>
          {/* Mascotte drapeau — à côté du titre */}
          <div className="absolute -left-52 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/mascot/linkeo_drapeau.png" alt=""
              style={{ width: 220, height: "auto", filter: "drop-shadow(0 8px 24px rgba(236,72,153,0.18))" }}/>
          </div>
        </div>

        <p className="body-copy text-lg mb-10 max-w-md mx-auto">
          Dépose ta candidature. On t&apos;associe à une équipe étudiante d&apos;élite et on t&apos;accompagne jusqu&apos;au MVP, gratuitement en Beta.
        </p>

        {/* Stats row */}
        <div className="flex items-center justify-center gap-8 mb-8">
          {[
            { val: "Gratuit", label: "en Beta" },
            { val: "48h", label: "délai de réponse" },
            { val: `${TOTAL - TAKEN}`, label: "places restantes" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-slate-900 font-bold text-xl">{s.val}</p>
              <p className="text-slate-500 text-xs mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Form / success */}
        {!done ? (
          <form onSubmit={submit} className="mb-8">
            <div className="relative mb-3">
              <div className="relative flex items-center rounded-2xl overflow-hidden"
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(236,72,153,0.2)",
                  boxShadow: "0 1px 3px rgba(15,23,42,0.04), 0 4px 12px rgba(236,72,153,0.08)",
                }}>
                {/* Mail icon */}
                <div className="pl-5 pr-2 text-slate-400">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="1" y="3" width="14" height="10" rx="2"/>
                    <path d="M1 5l7 5 7-5"/>
                  </svg>
                </div>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ton@email.com"
                  required
                  className="flex-1 bg-transparent text-slate-900 placeholder-slate-400 text-sm py-4 pr-3 focus:outline-none"
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
              <p className="text-red-500/80 text-xs mb-2">{error}</p>
            )}
            <p className="text-slate-500 text-xs">
              Aucune carte bancaire · Réponse sous 48h · 100% gratuit en Beta
            </p>
          </form>

        ) : (
          <div className="mb-8 rounded-2xl px-8 py-8 text-center"
            style={{
              background: "rgba(255,255,255,0.9)",
              border: "1px solid rgba(34,197,94,0.2)",
            }}>
            <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center"
              style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2">
                <path d="M4.5 12.75l6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-green-700 font-bold text-lg mb-2">Tu es sur la liste !</p>
            <p className="text-green-700/70 text-sm">On te contacte dès que ton accès est disponible.</p>
          </div>
        )}

      </div>
    </section>
  );
}
