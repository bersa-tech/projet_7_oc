// Importation des éléments dont on a besoin
import React from "react";
// Importation des hooks
import { useParams } from "react-router-dom";
// Importation des données des locations
import DataLogements from "../../datas/logements.json";
// Design
import "./_Tag.scss";

// Création d'une fonction composant Tag
function Tag() {
  // Récupération de l'ID de la location avec le hook useParams de React Router
  const { id } = useParams(); // ici on récupère l'id de la location dans l'URL
  const locationTag = DataLogements.find((location) => location.id === id);
  const { tags } = locationTag; // Destructuration des données de la location

  return (
    <div className="tags">
      <ul className="tags__container">
        {tags.map((tag, index) => (
          <li key={index} className="tags__container-item">
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tag;
