// src/utils/sessions/sessions.ts
import { SignJWT, jwtVerify, type JWTPayload } from "jose";
// import { cookies } from "next/headers";
import { NextResponse } from "next/server";
// import { session_secret } from "../api/wordpress/config";
// import { handleError } from "utils/errors/errorHandler";
import Cookies from "js-cookie";

// Générer une clé secrète pour signer le JWT (stockez cette clé en tant que variable d'environnement)
const secretKey = new TextEncoder().encode(process.env.JWT_AUTH_SECRET_KEY);

// Crée un token de session en utilisant le JWT
export async function createSession(userId: string) {
  const expirationTimeInSeconds = Math.floor(Date.now() / 1000) + 1 * 60 * 60; // Expiration de 1 heures

  // const expirationTimeInSeconds = Math.floor(Date.now() / 1000) + 30; // Expiration de 30 secondes

  const token = await new SignJWT({ userId })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expirationTimeInSeconds) // Définir une expiration de 2 heures
    .sign(secretKey);
  return token;
}

// Vérifie le token de session pour s'assurer qu'il est valide
export async function verifySession(token: string) {
  try {
    const { payload } = await jwtVerify(token, secretKey, {
      algorithms: ["HS256"]
    });

    // console.log("verify session.ts: ", sessionToken);
    // Vérifie si le token a expiré
    if (payload.exp && Date.now() >= payload.exp * 1000) {
      Cookies.remove("session_token");

      // Supprimer le cookie si le token est expiré
      const response = NextResponse.next();
      response.cookies.set("session_token", "", { maxAge: -1, path: "/" });

      return null; // Token expiré
    }

    return payload;
  } catch (error: any) {
    if (error.code === "ERR_JWT_EXPIRED") {
      console.log("Token expiré");
      // Gérer l'expiration du token ici
      const response = NextResponse.next();
      response.cookies.set("session_token", "", { maxAge: -1, path: "/" });

      return null;
    }

    console.error(
      "Une erreur est survenue lors de la vérification du token",
      error
    );
    return null;
  }
}

// export async function verifySession(token: string) {
//   try {
//     const { payload } = await jwtVerify(token, secretKey, {
//       algorithms: ["HS256"]
//     });
//     console.log("verify session:", payload);
//     return payload; // Token valide
//   } catch (error: any) {

//          if (payload.exp && Date.now() >= payload.exp * 1000) {
//       const response = NextResponse.next();
//       response.cookies.set("session_token", "", { maxAge: -1, path: "/" });
//        return null; // Token expiré
//   }
//       console.error("Le token a expiré");

//     console.error("Une autre erreur est survenue", error);
//     return null;
//   }
// }

// Met à jour la session en rafraîchissant la date d'expiration
export async function updateSession(sessionToken: string) {
  const expirationTimeInSeconds = Math.floor(Date.now() / 1000) + 30; // Expiration de 30 secondes
  try {
    const session = await verifySession(sessionToken);
    if (!session) return null;

    // Crée un nouveau token en utilisant l'ancien payload
    const updatedToken = await new SignJWT(session as JWTPayload)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime(expirationTimeInSeconds) // Réinitialiser l'expiration à 2 heures
      .sign(secretKey);

    // Mettre à jour le cookie
    const response = NextResponse.next();
    response.cookies.set("session_token", updatedToken, {
      httpOnly: process.env.NODE_ENV !== "production" ? false : true,
      secure: process.env.NODE_ENV !== "production" ? false : true,
      sameSite: "strict",
      path: "/"
    });

    return response;
  } catch (error) {
    console.error("Une erreur est survenue", error);

    return null;
  }
}

// Supprime la session en supprimant le cookie
export function deleteSession() {
  const response = NextResponse.json({ message: "Session terminée" });
  console.log(response.cookies);
  response.cookies.delete("session_token");
  return response;
}
