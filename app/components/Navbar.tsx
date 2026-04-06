"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Solution",      href: "/#solution" },
  { label: "Pourquoi nous", href: "/pourquoi-nous" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ pointerEvents: "none" }}>

      {/* ── Full navbar — visible at top ── */}
      <div className="px-5 pt-4"
        style={{
          transition: "opacity 0.3s ease, transform 0.3s ease",
          opacity: scrolled ? 0 : 1,
          transform: scrolled ? "translateY(-8px)" : "translateY(0)",
          pointerEvents: scrolled ? "none" : "auto",
        }}>
        <div className="mx-auto max-w-6xl">
          <nav className="glass-nav flex items-center justify-between rounded-2xl px-5 py-3">

            {/* Logo complet */}
            <a href="/" className="shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Linkea" style={{ height: 36, width: "auto", objectFit: "contain" }} />
            </a>

            {/* Nav links */}
            <div className="hidden md:flex items-center gap-1">
              {links.map((link) => (
                <a key={link.href} href={link.href}
                  className="text-slate-500 hover:text-slate-900 text-sm font-medium px-4 py-2 rounded-xl hover:bg-slate-50 transition-all duration-200">
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-2">
              <a href="#solution"
                className="hidden sm:inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 text-sm font-medium px-4 py-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all duration-200">
                Voir la solution
              </a>
              <a href="#whitelist"
                className="inline-flex items-center gap-2 text-white text-sm font-semibold px-4 py-2 rounded-full"
                style={{ background: "linear-gradient(135deg, #be185d, #ec4899)", boxShadow: "0 2px 8px rgba(236,72,153,0.35)" }}>
                Accès beta
                <svg width="12" height="12" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 6.5h9M8 3l3 3.5L8 10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </div>

      {/* ── Compact pill — visible on scroll ── */}
      <div className="flex justify-center pt-3 px-4"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          transition: "opacity 0.3s ease, transform 0.3s ease",
          opacity: scrolled ? 1 : 0,
          transform: scrolled ? "translateY(0)" : "translateY(-10px)",
          pointerEvents: scrolled ? "auto" : "none",
        }}>
        <nav
          className="flex items-center gap-2 px-3 py-2 rounded-2xl"
          style={{
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
            border: "1px solid rgba(15,23,42,0.09)",
            boxShadow: "0 4px 16px rgba(15,23,42,0.1), 0 1px 3px rgba(15,23,42,0.06)",
          }}>

          {/* Favicon seul */}
          <a href="/" className="shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Linkea" style={{ height: 28, width: "auto", objectFit: "contain" }} />
          </a>

          {/* Separator */}
          <div className="w-px h-5 bg-slate-200 mx-1"/>

          {/* Nav links */}
          <div className="hidden sm:flex items-center">
            {links.map((link) => (
              <a key={link.href} href={link.href}
                className="text-slate-500 hover:text-slate-900 text-sm font-medium px-3 py-1.5 rounded-xl hover:bg-slate-50 transition-all duration-200 whitespace-nowrap">
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a href="#whitelist"
            className="inline-flex items-center gap-1.5 text-white text-sm font-semibold px-4 py-2 rounded-xl ml-1 whitespace-nowrap"
            style={{ background: "linear-gradient(135deg, #be185d, #ec4899)", boxShadow: "0 2px 6px rgba(236,72,153,0.3)" }}>
            Accès beta
            <svg width="11" height="11" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 6.5h9M8 3l3 3.5L8 10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </nav>
      </div>

    </header>
  );
}
