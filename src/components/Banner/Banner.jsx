// Importation des éléments dont on a besoin
import React from "react";
// Images des bannières
import BannerHome from "../../assets/images/img-home.png";
import BannerAbout from "../../assets/images/img-about.png";
// Design
import "./_Banner.scss";

// Création d'une fonction composant avec des props pour afficher la bannière
function Banner({ page, content }) {
  // "Banner" est un composant fonctionnel qui prend deux "props" (valeurs passées au composant) : "page" et "content".
  // "page" est utilisé pour déterminer quelle image de bannière afficher en fonction de la page actuelle.
  // "content" est le texte à afficher sur la bannière.
  const banners = {
    // ici on crée un objet "banners" qui contient les images de bannière pour chaque page.
    home: BannerHome, // ici on associe l'image de bannière pour la page d'accueil à la clé "home".
    about: BannerAbout,
  };
  // Va dans l'objet banners, trouve la case qui a le même nom que la valeur de page, et récupère ce qui est dedans.
  const imageSrc = banners[page];

  return (
    <div className="banner">
      <img src={imageSrc} alt="Paysage" className="banner__image" />
      <div className="banner__content">
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Banner; // Exporte le composant Banner
