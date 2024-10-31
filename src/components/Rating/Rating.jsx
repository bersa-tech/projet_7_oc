// Importation des éléments dont on a besoin
import React from "react";
// Importation des hooks
import { useParams } from "react-router-dom";
// Importation des données des locations
import DataLogements from "../../datas/logements.json";
// Importation images
import starActive from "../../assets/images/star-red.png";
import starInactive from "../../assets/images/star-white.png";
// Design
import "./_Rating.scss";

function Rating() {
  // Récupération des données par rapport à l'ID de la location
  const { id } = useParams();
  const locationRating = DataLogements.find((location) => location.id === id);
  const rating = locationRating.rating; // Nombre d'étoiles de la location
  // console.log(rating);
  const maxRating = 5; // Note maximale
  const stars = []; // Création d'un tableau qui va contenir les étoiles pour la note

  // ajoute des étoiles pleines au tableau stars avec push le résultat de rating
  for (let i = 0; i < rating; i++) {
    stars.push(<img key={i} src={starActive} alt="Etoile pleine" />);
  }
  // ajoute des étoiles vide au tableau stars avec push le résultat de maxRating - rating
  for (let i = 0; i < maxRating - rating; i++) {
    stars.push(<img key={rating + i} src={starInactive} alt="Etoile vide" />);
  }
  return <div className="rating">{stars}</div>;
}

export default Rating;
