// Importation des éléments dont on a besoin
import React from "react";
// Création des liens avec React Router
import { Link } from "react-router-dom";
// Importation des données des locations
import DataLogements from "../../datas/logements.json";
// Design
import "./_LogementsList.scss";

function LogementsList() {
  return (
    <section className="logements">
      <div className="logements__list">
        {DataLogements.map((eachLogements) => (
          <div key={eachLogements.id} className="logements__list-item">
            <Link
              to={"/logements/" + eachLogements.id}
              className="logements__list-item-card"
            >
              <img
                src={eachLogements.cover}
                alt={eachLogements.title}
                className=" logements-cover"
              />
              <h2 className="logements-title">{eachLogements.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LogementsList;

// Création d'une fonction composant LogementsList récupérant les données du JSON
// 1. Création d'une div contenant la liste des logements
// 2. Création d'une div contenant chaque logement
// 3. Création d'un lien pour chaque logement
// 4. Création d'une image pour chaque logement
// 5. Création d'un titre pour chaque logement
