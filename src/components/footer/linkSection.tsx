import React from "react";

function LinkSection() {
  return (
    <div className="w-full bg-custom-blue-0 flex">
      <nav className="mx-auto justify-center grid grid-cols-1 gap-8 p-8 text-black sm:grid-cols-2 lg:w-4/5 lg:grid-cols-4">
        <section className="space-y-4">
          <h3 className="text-lg font-bold">Le ministère</h3>
          <ul className="space-y-2">
            <li>
              <a
                className="hover:underline"
                href="https://solidarites.gouv.fr/biographie-de-catherine-vautrin-ministre-du-travail-de-la-sante-et-des-solidarites"
              >
                Ministre du Travail, de la Santé et des Solidarités
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                href="https://solidarites.gouv.fr/le-comite-interministeriel-du-handicap-cih"
              >
                Le Comité interministériel du handicap (CIH)
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                href="https://solidarites.gouv.fr/le-haut-conseil-du-travail-social-hcts"
              >
                Le Haut Conseil du travail social (HCTS)
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                href="https://solidarites.gouv.fr/la-securite-sociale-fonctionnement-branches-et-caisses"
              >
                La sécurité sociale : fonctionnement, branches et caisses
              </a>
            </li>
          </ul>
        </section>
        <section className="space-y-4">
          <h3 className="text-lg font-bold">Solidarités</h3>
          <ul className="space-y-2">
            <li>
              <a
                className="hover:underline"
                href="https://solidarites.gouv.fr/soutenir-la-parentalite"
              >
                Soutenir la parentalité
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                href="https://solidarites.gouv.fr/les-metiers-de-la-petite-enfance-nous-font-grandir"
              >
                Valoriser les métiers de la petite enfance
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                href="https://solidarites.gouv.fr/donnees-sociales-et-solidarites-la-source"
              >
                Données sociales et solidarités à la source
              </a>
            </li>
          </ul>
        </section>
        <section className="space-y-4">
          <h3 className="text-lg font-bold">En pratique</h3>
          <ul className="space-y-2">
            <li>
              <a
                className="hover:underline"
                href="https://solidarites.gouv.fr/aides-et-demarches"
              >
                Aides et démarches
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                href="https://solidarites.gouv.fr/tous-les-contacts-utiles"
              >
                Contacts et liens utiles
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                href="https://solidarites.gouv.fr/metiers"
              >
                Métiers
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                href="https://solidarites.gouv.fr/travailler-pour-le-ministere-du-travail-de-la-sante-et-des-solidarites"
              >
                Travailler pour le ministère du Travail, de la Santé et des
                Solidarités
              </a>
            </li>
          </ul>
        </section>
        <section className="space-y-4">
          <h3 className="text-lg font-bold">
            Actualités, presse, publications
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                className="hover:underline"
                href="https://solidarites.gouv.fr/actualites-presse-publications/actualites-et-breves"
              >
                Actualités et brèves
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                href="https://solidarites.gouv.fr/actualites-presse-publications/discours"
              >
                Discours
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                href="https://solidarites.gouv.fr/actualites-presse-publications/publications-et-ressources"
              >
                Publications et ressources
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                href="https://solidarites.gouv.fr/actualites-presse-publications"
              >
                Voir tout
              </a>
            </li>
          </ul>
        </section>
      </nav>
    </div>
  );
}

export default LinkSection;
