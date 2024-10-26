// src/utils/tokenUtils.ts

import jwt from "jsonwebtoken";

// Fonction pour décoder le token et récupérer l'expiration
export const decodeTokenExpiration = (token: string) => {
  try {
    const decoded: { exp: number } = jwt.decode(token) as { exp: number };
    return decoded.exp * 1000; // Convertir en millisecondes
  } catch (error) {
    console.error("Erreur lors du décodage du token :", error);
    return null;
  }
};

// Fonction pour vérifier si le token est expiré
export const isTokenExpired = (token: string) => {
  const expiration = decodeTokenExpiration(token);
  if (!expiration) return true; // Si on ne peut pas décoder, on considère le token comme expiré
  return Date.now() > expiration;
};

// Fonction pour vérifier le token avec une clé secrète (côté serveur si nécessaire)
export const verifyToken = (token: string, secret: string) => {
  try {
    return jwt.verify(token, secret); // Vérifie et décode le token
  } catch (error) {
    console.error("Erreur lors de la vérification du token :", error);
    return null;
  }
};
