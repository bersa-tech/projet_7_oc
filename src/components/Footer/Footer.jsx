// Importation des éléments dont on a besoin
import React from "react";
// Importation image
import WhiteLogo from "../../assets/images/logo-kasa-white.png";
// Design
import "./_Footer.scss";

// Création d'une fonction composant Footer
function Footer() {
  return (
    <footer className="footer">
      <img src={WhiteLogo} alt="Logo-Kasa-white" className="footer__image" />
      <p className="footer__info">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer; // Exportation de la fonction composant Footer
