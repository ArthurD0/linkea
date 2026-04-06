export default function CGU() {
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
          Conditions Générales d&apos;Utilisation
        </h1>
        <p className="text-slate-400 text-sm mb-14">Dernière mise à jour : avril 2026</p>

        <div className="space-y-10 text-slate-600 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. Objet</h2>
            <p>
              Les présentes Conditions Générales d&apos;Utilisation (CGU) régissent l&apos;accès et l&apos;utilisation
              de la plateforme Linkea, accessible à l&apos;adresse <strong>linkea.app</strong>. En accédant à la
              plateforme, vous acceptez sans réserve les présentes CGU.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. Accès à la plateforme</h2>
            <p>
              L&apos;accès à Linkea est réservé aux étudiants inscrits dans un établissement d&apos;enseignement
              supérieur reconnu. L&apos;inscription est soumise à une sélection sur dossier. Linkea se réserve
              le droit d&apos;accepter ou de refuser toute candidature sans avoir à s&apos;en justifier.
            </p>
            <p className="mt-3">
              La bêta privée est gratuite pour les 500 premiers membres. Les conditions tarifaires des phases
              ultérieures seront communiquées en temps voulu.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. Création de compte</h2>
            <p>
              Pour accéder aux services, vous devez créer un compte en fournissant des informations exactes,
              complètes et à jour. Vous êtes responsable de la confidentialité de vos identifiants et de toute
              activité réalisée depuis votre compte.
            </p>
            <p className="mt-3">
              Toute utilisation frauduleuse ou non autorisée de votre compte doit être signalée immédiatement à
              {" "}<a href="mailto:contact@linkea.app" className="text-pink-500 hover:underline">contact@linkea.app</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. Règles de bonne conduite</h2>
            <p>En utilisant la plateforme, vous vous engagez à :</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Respecter les autres membres de la communauté Linkea.</li>
              <li>Ne pas publier de contenus illicites, diffamatoires, discriminatoires ou contraires aux bonnes mœurs.</li>
              <li>Ne pas usurper l&apos;identité d&apos;un tiers.</li>
              <li>Ne pas utiliser la plateforme à des fins commerciales non autorisées.</li>
              <li>Respecter la confidentialité des échanges et des projets partagés au sein des équipes.</li>
              <li>Ne pas tenter de contourner les mesures de sécurité de la plateforme.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. Propriété intellectuelle des projets</h2>
            <p>
              Chaque membre conserve la propriété intellectuelle de ses contributions au sein d&apos;un projet.
              Les modalités de répartition des droits au sein d&apos;une équipe sont définies librement entre
              les membres, de préférence par écrit avant le démarrage du projet.
            </p>
            <p className="mt-3">
              Linkea ne revendique aucun droit sur les projets développés via la plateforme.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">6. Responsabilités</h2>
            <p>
              Linkea agit en tant qu&apos;intermédiaire de mise en relation et de cadre d&apos;accompagnement.
              Linkea ne peut être tenu responsable :
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Des contenus publiés par les utilisateurs.</li>
              <li>Du résultat des projets développés via la plateforme.</li>
              <li>Des litiges entre membres d&apos;une même équipe.</li>
              <li>D&apos;une interruption temporaire de service pour maintenance ou incident technique.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">7. Suspension et résiliation</h2>
            <p>
              Linkea se réserve le droit de suspendre ou de résilier l&apos;accès d&apos;un utilisateur en cas
              de violation des présentes CGU, sans préavis et sans indemnité. L&apos;utilisateur peut également
              clôturer son compte à tout moment en contactant{" "}
              <a href="mailto:contact@linkea.app" className="text-pink-500 hover:underline">contact@linkea.app</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">8. Modification des CGU</h2>
            <p>
              Linkea se réserve le droit de modifier les présentes CGU à tout moment. Les utilisateurs seront
              informés de toute modification substantielle par e-mail ou via une notification sur la plateforme.
              La poursuite de l&apos;utilisation de la plateforme après modification vaut acceptation des nouvelles CGU.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">9. Droit applicable et juridiction</h2>
            <p>
              Les présentes CGU sont soumises au droit français. En cas de litige, et après tentative de
              résolution amiable, les tribunaux compétents du ressort de Paris seront seuls compétents.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">10. Contact</h2>
            <p>
              Pour toute question relative aux présentes CGU :{" "}
              <a href="mailto:contact@linkea.app" className="text-pink-500 hover:underline">contact@linkea.app</a>.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
