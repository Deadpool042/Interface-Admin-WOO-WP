// src/app/api/login/route.ts

import { NextRequest, NextResponse } from "next/server";
import { createSession } from "utils/sessions/sessions";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Utilisation de Yup pour valider le schéma

    const { username, password } = body;

    // Logique d'authentification simplifiée (remplacez-la par la vôtre)
    if (
      username === process.env.WP_USERNAME &&
      password === process.env.WP_APPLICATION_PASSWORD
    ) {
      console.log(username);
      console.log(password);
      const sessionToken = await createSession(username);
      const response = NextResponse.json({ message: "Connexion réussie" });
      response.cookies.set("session_token", sessionToken, {
        httpOnly: process.env.NODE_ENV !== "production" ? false : true,
        secure: process.env.NODE_ENV !== "production" ? false : true,
        sameSite: "strict",
        path: "/"
      });
      return response;
    }

    return NextResponse.json(
      { message: "Identifiants incorrects" },
      { status: 401 }
    );
  } catch (error: any) {
    // Renvoyer les erreurs de validation spécifiques
    return NextResponse.json(
      { message: "Validation échouée", errors: error.errors },
      { status: 400 }
    );
  }
}
