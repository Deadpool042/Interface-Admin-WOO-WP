// src/hooks/authHooks.ts
"use client";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import Cookies from "js-cookie";

import { useAuth } from "@/components/auth/AuthProvider";
import { deleteSession } from "utils/sessions/sessions";

interface LoginCredentials {
  username: string;
  password: string;
}

export const useLogin = () => {
  const queryClient = useQueryClient();
  const { setIsLoggedIn, setAuthToken } = useAuth(); // Utiliser le contexte Auth pour mettre à jour l'état
  const router = useRouter();

  return useMutation(
    async (credentials: LoginCredentials) => {
      // Effectuer la requête de connexion vers l'API /api/login
      const response = await axios.post("/api/auth/login", credentials);

      // Vérifier si la réponse est OK
      if (response.status !== 200) {
        throw new Error(response.data.message || "Erreur lors de la connexion");
      }

      // Récupérer le cookie de l'en-tête "x-middleware-set-cookie"
      const rawTokenHeader = response.headers["x-middleware-set-cookie"];

      // Utiliser une expression régulière pour extraire uniquement la valeur du session_token
      const tokenMatch = rawTokenHeader.match(/session_token=([^;]+)/);
      const token = tokenMatch ? tokenMatch[1] : null;

      if (!token) {
        throw new Error("Token de session non trouvé dans les en-têtes");
      }

      // Stocker le token dans un cookie et mettre à jour le contexte
      Cookies.set("session_token", token, {
        path: "/",
        secure: process.env.NODE_ENV !== "production" ? false : true,
        sameSite: "strict"
      });
      setAuthToken(token);
      console.log("useLogin Token:", Cookies);
      return token;
    },
    {
      onSuccess: data => {
        // Mettre à jour l'état de connexion dans le contexte Auth
        setIsLoggedIn(true);
        queryClient.invalidateQueries("auth"); // Invalider les requêtes auth pour forcer le rafraîchissement
        router.replace("/"); // Rediriger vers le tableau de bord
      },
      onError: (error: any) => {
        console.error("Erreur lors de la connexion:", error.message);
      }
    }
  );
};
export const useLogout = () => {
  const queryClient = useQueryClient();
  const { setIsLoggedIn, setAuthToken } = useAuth(); // Utiliser le contexte Auth
  const router = useRouter();

  return useMutation(
    async () => {
      // Appeler l'API de déconnexion
      const response = await axios.post("/api/auth/logout");

      if (response.status !== 200) {
        console.error("Erreur lors de la connexion");
      }

      // Supprimer le cookie côté client
      deleteSession();
      Cookies.remove("session_token");

      return response.data;
    },
    {
      onSuccess: () => {
        // Mettre à jour l'état de connexion dans le contexte Auth
        setIsLoggedIn(false);
        setAuthToken(null);

        // Invalider le cache des requêtes auth pour forcer le rafraîchissement
        queryClient.invalidateQueries("auth");

        // Rediriger vers la page de connexion
        router.replace("/login");
      },
      onError: (error: any) => {
        console.error("Une erreur est survenue:", error);
      }
    }
  );
};
