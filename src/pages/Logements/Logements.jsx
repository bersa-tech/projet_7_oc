// Importation des éléments dont on a besoin
import React from "react";
// Importation des hooks
import { useParams } from "react-router-dom";
// Importation des données des locations
import DataLogements from "../../datas/logements.json";
// Importation de la page d'erreur pour la gestion des IDs inexistants
import Error from "../../pages/Error/Error";
// Importation des composants fonctions
import Carrousel from "../../components/Carrousel/Carrousel";
import Tag from "../../components/Tag/Tag";
import Rating from "../../components/Rating/Rating";
import Collapse from "../../components/Collapse/Collapse";
// Design
import "./_Logements.scss";

// Création d'une fonction composant permettant d'afficher la page Logements de chaque location
function Logements() {
  // Récupération de l'ID de la location avec le hook useParams de React Router
  const { id } = useParams();
  const locationPage = DataLogements.find((location) => location.id === id);

  // Si l'ID de la location est différent/inexistant, on affiche la page d'erreur
  if (!locationPage) {
    return <Error />;
  } // Sinon on affiche la page de la location avec l'ID correspondant
  else {
    return (
      <main className="logementscard">
        <Carrousel />
        <section className="logementscard__container">
          <div className="logementscard__container-informations">
            <div>
              <h2>{locationPage.title}</h2>
              <p>{locationPage.location}</p>
            </div>
            <Tag />
          </div>
          <div className="logementscard__container-host">
            <div className="host-id">
              <p>{locationPage.host.name}</p>
              <img
                src={locationPage.host.picture}
                alt="Portrait du propriétaire"
              />
            </div>
            <Rating />
          </div>
        </section>
        <section className="logementscard__collapse">
          <Collapse title="Description" content={locationPage.description} />
          <Collapse
            title="Équipements"
            content={
              <ul>
                {locationPage.equipments.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            }
          />
        </section>
      </main>
    );
  }
}

export default Logements;
