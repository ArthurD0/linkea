export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-white px-6 py-32">
      <div className="mx-auto max-w-3xl">

        <a href="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-700 transition-colors mb-12">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M10 12L6 8l4-4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Retour à l&apos;accueil
        </a>

        <p className="text-xs font-semibold uppercase tracking-[0.18em] mb-4" style={{ color: "#ec4899" }}>
          Légal
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-[-0.03em] mb-4">
          Mentions légales
        </h1>
        <p className="text-slate-400 text-sm mb-14">Dernière mise à jour : avril 2026</p>

        <div className="space-y-10 text-slate-600 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. Éditeur du site</h2>
            <p>
              Le site <strong>linkea.app</strong> est édité par Linkea, société en cours
              d&apos;immatriculation en France.
            </p>
            <ul className="mt-3 space-y-1">
              <li><strong>Dénomination :</strong> Linkea</li>
              <li><strong>Statut :</strong> Société en cours de constitution</li>
              <li><strong>E-mail :</strong>{" "}
                <a href="mailto:hello@linkea.co" className="text-pink-500 hover:underline">hello@linkea.co</a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. Directeur de la publication</h2>
            <p>
              Le directeur de la publication est le représentant légal de Linkea.
              Pour le contacter :{" "}
              <a href="mailto:hello@linkea.co" className="text-pink-500 hover:underline">hello@linkea.co</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. Hébergement</h2>
            <p>
              Le site est hébergé par <strong>Vercel Inc.</strong>
            </p>
            <ul className="mt-3 space-y-1">
              <li><strong>Adresse :</strong> 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis</li>
              <li><strong>Site :</strong>{" "}
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">vercel.com</a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des contenus présents sur ce site (textes, images, logos, graphismes, charte graphique,
              structure) est la propriété exclusive de Linkea et est protégé par les lois françaises et
              internationales relatives à la propriété intellectuelle.
            </p>
            <p className="mt-3">
              Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des
              éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation
              préalable écrite de Linkea.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. Limitation de responsabilité</h2>
            <p>
              Linkea s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées sur ce site.
              Cependant, Linkea ne peut garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des informations
              mises à disposition sur ce site et décline toute responsabilité pour toute imprécision, inexactitude
              ou omission portant sur des informations disponibles sur ce site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">6. Liens hypertextes</h2>
            <p>
              Le site peut contenir des liens vers d&apos;autres sites internet. Linkea n&apos;exerce aucun contrôle sur
              ces sites et décline toute responsabilité quant à leur contenu ou leurs pratiques en matière de
              protection des données personnelles.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">7. Droit applicable</h2>
            <p>
              Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux
              français seront seuls compétents.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
