// src/hooks/useInactivityTimeout.ts

import { useEffect } from "react";
import { useLogout } from "./authHooks";
import { throttle } from "lodash"; // Utiliser lodash pour le throttle
import { useAuth } from "@/components/auth/AuthProvider";

const useInactivityTimeout = (timeout = 15 * 60 * 1000, throttleTime = 200) => {
  const logoutMutation = useLogout();
  const { isLoggedIn } = useAuth(); // Utiliser l'état de connexion de l'utilisateur

  useEffect(() => {
    if (!isLoggedIn) return;

    let timer: NodeJS.Timeout;

    const resetTimer = throttle(() => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        // Déconnecter l'utilisateur après le délai d'inactivité
        logoutMutation.mutate();
      }, timeout);
    }, throttleTime);

    const activityEvents = [
      "mousemove",
      "keydown",
      "scroll",
      "click",
      "touchstart"
    ];

    const handleUserActivity = () => {
      resetTimer();
    };

    // Ajoute un seul event listener global pour capturer toutes les interactions utilisateur
    activityEvents.forEach(event => {
      window.addEventListener(event, handleUserActivity);
    });

    resetTimer(); // Initialiser le timer lors du montage du composant

    return () => {
      clearTimeout(timer);
      // Supprimer les event listeners lors du démontage du composant
      activityEvents.forEach(event => {
        window.removeEventListener(event, handleUserActivity);
      });
    };
  }, [timeout, throttleTime, logoutMutation]);
};

export default useInactivityTimeout;
