// Importation des éléments dont on a besoin
import React from "react";
// Création des liens avec React Router
import { NavLink } from "react-router-dom";
// Importation image
import Logo from "../../assets/images/logo-kasa.png";
// Design
import "./_Header.scss";

// Création d'une fonction composant Header
function Header() {
  return (
    <header className="header">
      <NavLink to="/">
        <img src={Logo} alt="Logo-Kasa" className="header__image" />
      </NavLink>

      <nav className="header__navbar">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A propos</NavLink>
      </nav>
    </header>
  );
}

export default Header; // Exportation de la fonction composant Header
