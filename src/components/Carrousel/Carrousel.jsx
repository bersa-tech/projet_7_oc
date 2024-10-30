// Importation des éléments nécessaires
import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import DataLogements from "../../datas/logements.json";
import ArrowL from "../../assets/images/arrow-left.png";
import ArrowR from "../../assets/images/arrow-right.png";
import "./_Carrousel.scss";

// Création d'une fonction composant Carrousel
function Carrousel() {
  const { id } = useParams(); // Récupération de l'ID de la location avec le hook useParams de React Router
  const location = DataLogements.find((location) => location.id === id); // Parcours du fichier JSON pour trouver le logement correspondant à l'ID récupéré
  const { pictures, title } = location; // Destructuration des données de la location ici pour récupérer les images et le titre (alt)
  const [currentIndex, setCurrentIndex] = useState(0); // Utilisation du state local pour afficher la première image
  // console.table({ pictures });

  // fonction fléche pour la navigation vers l'image précédente et suivante avec le modulo pour créer une boucle infinie
  const prevSlide = () =>
    setCurrentIndex(
      (currentIndex) => (currentIndex - 1 + pictures.length) % pictures.length
    );
  const nextSlide = () =>
    setCurrentIndex((currentIndex) => (currentIndex + 1) % pictures.length);

  return (
    <section className="carrousel">
      <div className="carrousel__container">
        {/* Affichage de chaque image, avec l'opérateur ternaire conditionnel */}
        {pictures.map((eachPicture, index) => (
          <img
            src={eachPicture}
            key={index}
            className={
              currentIndex === index
                ? "carrousel__container-slide"
                : "carrousel__container-slidehidden"
            }
            alt={title}
          />
        ))}

        {/* Affichage des flèches et de l'indicateur si plus d'une image */}
        {pictures.length > 1 && (
          <>
            {/* Affichage de la flèche gauche */}
            <img
              src={ArrowL}
              alt="Fléche Précédent"
              className="carrousel__container-arrowleft arrow"
              onClick={prevSlide}
            />
            {/* Affichage de la flèche gauche */}
            <img
              src={ArrowR}
              alt="Fléche Suivant"
              className="carrousel__container-arrowright arrow"
              onClick={nextSlide}
            />
            {/* Affichage de l'indicateur de position */}
            <span className="carrousel__container-indicator">
              {currentIndex + 1}/{pictures.length}
            </span>
          </>
        )}
      </div>
    </section>
  );
}

export default Carrousel;
