import { useState, useEffect } from "react";

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    // Fonction pour mettre à jour la largeur de l'écran
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Écouteur d'événement pour le redimensionnement de la fenêtre
    window.addEventListener("resize", handleResize);

    // Nettoyage de l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Le tableau vide [] garantit que l'effet ne s'exécute qu'une seule fois

  return windowWidth;
};

export default useWindowWidth;
