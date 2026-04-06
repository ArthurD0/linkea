export default function PolitiqueDeConfidentialite() {
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
          Politique de confidentialité
        </h1>
        <p className="text-slate-400 text-sm mb-14">Dernière mise à jour : avril 2026</p>

        <div className="prose prose-slate max-w-none space-y-10 text-slate-600 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. Qui sommes-nous ?</h2>
            <p>
              Linkea est une plateforme permettant à des porteurs de projet étudiants de constituer des équipes compétentes
              et de lancer leur MVP dans un cadre supervisé. Linkea est éditée par ses fondateurs, actuellement domiciliés
              en France. Pour toute question relative à vos données personnelles, vous pouvez nous contacter à :
              <a href="mailto:contact@linkea.app" className="text-pink-500 hover:underline ml-1">contact@linkea.app</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. Données collectées</h2>
            <p>Nous collectons les données suivantes :</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li><strong>Données d&apos;inscription :</strong> adresse e-mail, prénom, nom, établissement scolaire.</li>
              <li><strong>Données de profil :</strong> compétences, biographie, projets passés, disponibilités.</li>
              <li><strong>Données de navigation :</strong> adresse IP, type de navigateur, pages visitées, durée des sessions (via cookies analytiques).</li>
              <li><strong>Données de communication :</strong> messages échangés via la messagerie interne de la plateforme.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. Finalités du traitement</h2>
            <p>Vos données sont utilisées pour :</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Créer et gérer votre compte utilisateur.</li>
              <li>Vous mettre en relation avec des équipes et des projets compatibles.</li>
              <li>Vous envoyer des communications relatives à votre activité sur la plateforme.</li>
              <li>Améliorer nos services et analyser l&apos;usage de la plateforme.</li>
              <li>Respecter nos obligations légales.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. Base légale</h2>
            <p>
              Le traitement de vos données repose sur votre consentement (pour les cookies non essentiels),
              l&apos;exécution du contrat (pour la gestion de votre compte et des services) et nos intérêts
              légitimes (pour l&apos;amélioration de la plateforme).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. Conservation des données</h2>
            <p>
              Vos données sont conservées pendant la durée de votre inscription sur la plateforme, puis archivées
              pendant 3 ans à compter de la clôture de votre compte, sauf obligation légale contraire.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">6. Partage des données</h2>
            <p>
              Nous ne vendons jamais vos données. Elles peuvent être partagées avec :
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Nos prestataires techniques (hébergement, base de données, emailing) dans le strict cadre de leurs missions.</li>
              <li>Les autres membres de la plateforme dans le cadre du matching de projet (données de profil uniquement).</li>
              <li>Les autorités compétentes en cas d&apos;obligation légale.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">7. Vos droits</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Droit d&apos;accès à vos données personnelles.</li>
              <li>Droit de rectification des données inexactes.</li>
              <li>Droit à l&apos;effacement (&laquo; droit à l&apos;oubli &raquo;).</li>
              <li>Droit à la portabilité de vos données.</li>
              <li>Droit d&apos;opposition au traitement.</li>
              <li>Droit de retirer votre consentement à tout moment.</li>
            </ul>
            <p className="mt-3">
              Pour exercer ces droits, contactez-nous à{" "}
              <a href="mailto:contact@linkea.app" className="text-pink-500 hover:underline">contact@linkea.app</a>.
              Vous pouvez également introduire une réclamation auprès de la CNIL (
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">www.cnil.fr</a>).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">8. Cookies</h2>
            <p>
              Nous utilisons des cookies strictement nécessaires au fonctionnement du site, ainsi que des cookies
              analytiques (anonymisés) pour mesurer l&apos;audience. Vous pouvez gérer vos préférences via les
              paramètres de votre navigateur.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">9. Modifications</h2>
            <p>
              Nous nous réservons le droit de modifier cette politique à tout moment. En cas de modification
              substantielle, nous vous en informerons par e-mail ou via une notification sur la plateforme.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
