// fichier principal de l'application
// Il importe les différentes pages, composants et styles nécessaires à l'application.
// Il définit les routes de l'application à l'aide de React Router.
// Il utilise le composant Header pour afficher la barre de navigation sur toutes les pages.
// Il utilise le composant Footer pour afficher le pied de page sur toutes les pages.

// Importation des éléments dont on a besoin
import React from "react";
// Création des routes avec React Router
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Importation des pages
import Home from "./pages/Home/Home.jsx";
import Logements from "./pages/Logements/Logements.jsx";
import About from "./pages/About/About.jsx";
import Error from "./pages/Error/Error.jsx";
// Importation composants fonctions header et footer
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
// Styles et Variables
import "./styles/_Styles.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logements/:id" element={<Logements />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

// Utilisation de React Router pour créer des routes et naviguer entre les différentes pages de l'application.
// Le composant Router est utilisé pour envelopper l'application et activer la navigation.
// Le composant Routes est utilisé pour définir les différentes routes de l'application.
// Chaque route est définie par un composant Route, qui prend deux propriétés : path et element.
// La propriété path définit l'URL de la route, et la propriété element définit le composant à afficher lorsque l'URL correspond à la route.
// Dans ce cas, le composant Home est affiché lorsque l'URL est "/", le composant Logements est affiché lorsque l'URL est "/logements/:id",
// le composant About est affiché lorsque l'URL est "/about", et le composant Error est affiché lorsque l'URL ne correspond à aucune des routes définies.
// Utilisation de la route "*" pour afficher la page d'erreur 404 si l'utilisateur se trompe d'URL
// Le composant Header est affiché en haut de chaque page, et le composant Footer est affiché en bas de chaque page.
// Le composant React.StrictMode est utilisé pour activer des vérifications supplémentaires lors du développement de l'application.
// Il permet de détecter des problèmes potentiels dans le code et d'améliorer les performances de l'application.
// root.render est utilisé pour afficher l'application dans l'élément HTML avec l'ID "root". render signifie ici "afficher" ou "rendre" en français.
// createRoot est une méthode qui permet de créer une racine React pour l'application. Elle prend en argument l'élément HTML dans lequel l'application sera affichée.
// Plus simplement, on crée les urls ici et on les associe aux pages correspondantes.
