// Importation de la bibliothèque React pour utiliser les fonctionnalités de base de React
import React from "react";
// Importation du hook useState depuis React
import { useState } from "react";
// Importation de la fléche pour la collapse
import ArrowC from "../../assets/images/arrow-collapse.png";
// Design
import "./_Collapse.scss";

// Fonction de composant Collapse, deux props : title et content
function Collapse({ title, content }) {
  // Utilisation du hook useState pour gérer l'état local isOpen et la fonction changeValue pour le mettre à jour
  const [isOpen, changeValue] = useState(false); // État isOpen initialisé à "false" pour indiquer que le contenu est fermé par défaut

  const clickCollapse = () => {
    // Fonction pour gérer le clic sur le header de la collapse
    changeValue(!isOpen); // Inverse la valeur de isOpen lorsque le header est cliqué
  };

  return (
    <div className={`collapse ${isOpen ? "open" : ""}`}>
      <div className="collapse__header" onClick={clickCollapse}>
        <h2>{title}</h2>
        <button className="collapse__header-button">
          <img
            src={ArrowC}
            alt="fleche haute pour ouvrir la collapse"
            className={`arrow-up ${isOpen ? "open" : ""}`}
          />
        </button>
      </div>
      <div className={`collapse__content ${isOpen ? "open" : ""}`}>
        {content}
      </div>
    </div>
  );
}

export default Collapse; // Exportation du composant Collapse

// 1. Utilisant des backticks (`), on peut inclure des expressions dynamiques grâce à ${expression}
// 2. Opérateur Ternaire (condition ? valeurSiVrai : valeurSiFaux)
// 3. Gestionnaire d'événements onClick={() => changeValue(!isOpen)}
//    - changeValue est appelée avec l'inverse de la valeur actuelle de isOpen
//    - Cela permet de basculer entre l'ouverture et la fermeture du contenu de la collapse à chaque clic sur le titre.
