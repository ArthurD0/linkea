"use client";

import { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const hubs = [
  { city: "Paris",         country: "France",        coords: [2.35,    48.86],  code: "fr", students: "1 200+" },
  { city: "Londres",       country: "Royaume-Uni",   coords: [-0.12,   51.51],  code: "gb", students: "520+"   },
  { city: "Berlin",        country: "Allemagne",     coords: [13.40,   52.52],  code: "de", students: "310+"   },
  { city: "Milan",         country: "Italie",        coords: [11.00,   44.50],  code: "it", students: "220+"   },
  { city: "Barcelone",     country: "Espagne",       coords: [2.17,    40.50],  code: "es", students: "280+"   },
  { city: "Zurich",        country: "Suisse",        coords: [7.00,    48.00],  code: "ch", students: "145+"   },
  { city: "Casablanca",    country: "Maroc",         coords: [-7.59,   33.57],  code: "ma", students: "185+"   },
  { city: "Dakar",         country: "Sénégal",       coords: [-17.44,  14.69],  code: "sn", students: "120+"   },
  { city: "Abidjan",       country: "Côte d'Ivoire", coords: [-4.02,    5.36],  code: "ci", students: "110+"   },
  { city: "Le Caire",      country: "Égypte",        coords: [31.24,   30.06],  code: "eg", students: "160+"   },
  { city: "Dubaï",         country: "Émirats",       coords: [55.30,   25.20],  code: "ae", students: "155+"   },
  { city: "St-Pétersbourg",country: "Russie",        coords: [30.32,   59.93],  code: "ru", students: "140+"   },
  { city: "Bangalore",     country: "Inde",          coords: [77.59,   12.97],  code: "in", students: "165+"   },
  { city: "Tokyo",         country: "Japon",         coords: [141.00,  35.69],  code: "jp", students: "210+"   },
  { city: "Séoul",         country: "Corée du Sud",  coords: [127.50,  39.00],  code: "kr", students: "175+"   },
  { city: "Shanghai",      country: "Chine",         coords: [121.47,  29.50],  code: "cn", students: "190+"   },
  { city: "Singapour",     country: "Singapour",     coords: [103.82,   1.35],  code: "sg", students: "130+"   },
  { city: "Toronto",       country: "Canada",        coords: [-79.38,  43.65],  code: "ca", students: "310+"   },
  { city: "Vancouver",     country: "Canada",        coords: [-123.12, 52.00],  code: "ca", students: "220+"   },
  { city: "New York",      country: "États-Unis",    coords: [-72.00,  40.71],  code: "us", students: "260+"   },
  { city: "San Francisco", country: "États-Unis",    coords: [-124.00, 37.77],  code: "us", students: "195+"   },
  { city: "São Paulo",     country: "Brésil",        coords: [-46.63, -23.55],  code: "br", students: "140+"   },
];

type Hub = typeof hubs[number];

export default function HubMap() {
  const [active, setActive] = useState<Hub | null>(null);

  return (
    <section className="relative py-28 px-6 overflow-hidden bg-white">
      <div className="divider absolute top-0 left-0 right-0"/>

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-900 tracking-[-0.03em] leading-[0.97] mb-6">
            Nos hubs étudiants
            <br/>
            <span className="text-gradient-pink-blue">à travers le monde.</span>
          </h2>
          <p className="body-copy text-lg max-w-lg mx-auto">
            Linkea s&apos;appuie sur un réseau de hubs partenaires dans les grandes
            villes universitaires pour matcher les meilleurs profils.
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-10 mb-10">
          {[
            { val: `${hubs.length}`, label: "villes partenaires" },
            { val: "5",              label: "continents" },
            { val: "6 000+",         label: "étudiants dans le réseau" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-black tracking-tight"
                style={{ background: "linear-gradient(135deg,#2563eb,#ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                {s.val}
              </p>
              <p className="text-slate-500 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Map */}
        <div className="relative mx-auto" style={{ maxWidth: 1100 }}>

          {/* Mascotte longue vue */}
          <div className="absolute bottom-0 right-0 z-20 pointer-events-none select-none"
            style={{ transform: "translate(20px, 50px)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/mascot/linkeo_longuevue-sans fond.png"
              alt="Mascotte Linkea"
              style={{ width: 220, height: "auto", filter: "drop-shadow(0 8px 24px rgba(15,23,42,0.15))" }}
            />
          </div>

          <div className="rounded-3xl overflow-hidden">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 140, center: [5, 22] }}
            style={{ width: "100%", height: "auto", background: "linear-gradient(135deg, #eff6ff 0%, #fdf4f8 100%)" }}>

            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography key={geo.rsmKey} geography={geo}
                    style={{
                      default: { fill: "rgba(219,228,255,0.7)", stroke: "none", outline: "none" },
                      hover:   { fill: "rgba(219,228,255,0.7)", stroke: "none", outline: "none" },
                      pressed: { fill: "rgba(219,228,255,0.7)", outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>

            {/* Render inactive pins first, active pin last so it's always on top */}
            {[...hubs.filter(h => h.city !== active?.city), ...hubs.filter(h => h.city === active?.city)].map((hub) => {
              const isActive = active?.city === hub.city;
              const line1 = `${hub.city} · ${hub.country}`;
              const line2 = `${hub.students} étudiants`;
              const tw = Math.max(110, Math.max(line1.length, line2.length) * 7.8 + 28);

              return (
                <Marker
                  key={`${hub.city}-${hub.code}`}
                  coordinates={hub.coords as [number, number]}
                  onMouseEnter={() => setActive(hub)}
                  onMouseLeave={() => setActive(null)}>

                  {/* ── Tooltip ── */}
                  {isActive && (
                    <g transform="translate(0,-38)" style={{ pointerEvents: "none" }}>
                      <rect x={-tw / 2} y={-26} width={tw} height={32} rx={7} fill="#0f172a"/>
                      <polygon points="0,6 -5,0 5,0" fill="#0f172a"/>
                      <text textAnchor="middle" y={-12} fill="white"
                        style={{ fontSize: 9.5, fontWeight: 700, fontFamily: "inherit" }}>
                        {hub.city} · {hub.country}
                      </text>
                      <text textAnchor="middle" y={0} fill="#94a3b8"
                        style={{ fontSize: 8.5, fontFamily: "inherit" }}>
                        {hub.students} étudiants
                      </text>
                    </g>
                  )}

                  {/* ── Pin — scaled independently from its own center (0,0) ── */}
                  <g style={{
                    transform: isActive ? "scale(1.55)" : "scale(1)",
                    transformOrigin: "0px 0px",
                    transition: "transform 0.25s cubic-bezier(0.16,1,0.3,1)",
                    cursor: "pointer",
                  }}>
                    {/* Glow ring */}
                    <circle r={14}
                      fill={isActive ? "rgba(236,72,153,0.18)" : "rgba(37,99,235,0.1)"}
                      style={{ transition: "fill 0.2s ease" }}
                    />
                    {/* White circle */}
                    <circle r={11} fill="white"
                      stroke={isActive ? "#ec4899" : "rgba(15,23,42,0.15)"}
                      strokeWidth={1.2}
                      style={{ filter: "drop-shadow(0 1px 4px rgba(15,23,42,0.2))", transition: "stroke 0.2s ease" }}
                    />
                    {/* Flag */}
                    <image
                      href={`https://flagcdn.com/32x24/${hub.code}.png`}
                      x={-9} y={-7} width={18} height={14}
                      preserveAspectRatio="xMidYMid slice"
                    />
                  </g>
                </Marker>
              );
            })}
          </ComposableMap>
          </div>
        </div>

        <p className="text-center text-slate-400 text-sm mt-6">
          Réseau en constante expansion · Nouveau hub tous les trimestres
        </p>
      </div>
    </section>
  );
}
