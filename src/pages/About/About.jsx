// Importation des éléments dont on a besoin
import React from "react";
// Importation des composants fonctions
import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
// Design
import "./_About.scss";

// Création d'une fonction composant qui affiche la page About
function About() {
  const fiabilite =
    "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.";
  const respect =
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
  const service =
    "La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.";
  const securite =
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

  // stocker le texte dans une variabble
  // utiliser les props pour afficher le texte dans le composant Collapse (title et content)
  return (
    <main className="about">
      <Banner page="about" />
      <section className="about__collapse">
        <Collapse title="Fiabilité" content={fiabilite} />
        <Collapse title="Respect" content={respect} />
        <Collapse title="Service" content={service} />
        <Collapse title="Sécurité" content={securite} />
      </section>
    </main>
  );
}

export default About; // Exportation de la fonction About
