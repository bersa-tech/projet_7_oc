// Importation des éléments dont on a besoin
import React from "react";
// Importation des composants fonctions
import Banner from "../../components/Banner/Banner";
import LogementsList from "../../components/LogementsList/LogementsList";

// Création d'une fonction composant pour afficher la page Home
function Home() {
  // La fonction retourne dans le DOM une balise main qui contient la baniere
  return (
    <main>
      <Banner page="home" content="Chez vous, partout et ailleurs" />
      <LogementsList />
    </main>
  );
}

export default Home; // Exportation de la fonction composant Home pour l'utiliser dans d'autres fichiers
