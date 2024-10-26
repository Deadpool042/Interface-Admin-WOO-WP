// src/middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { verifySession } from "utils/sessions/sessions";

export async function middleware(request: NextRequest) {
  // console.log("Request path:", request.nextUrl.pathname);
  // const { pathname } = request.nextUrl;
  // console.log("path:", pathname);

  const sessionToken = request.cookies.get("session_token")?.value;

  if (sessionToken) {
    const session = await verifySession(sessionToken);

    // Si un token est présent et page login, rediriger vers la page d'accueil
    console.log("middleware:", session);
    // Si la session est expirée ou invalide, supprimer le cookie et rediriger vers login
    if (!session) {
      const response = NextResponse.redirect(new URL("/login", request.url));
      response.cookies.set("session_token", "", {
        maxAge: -1, // Définit l'âge du cookie à -1 pour le supprimer
        path: "/",
        httpOnly: process.env.NODE_ENV === "production" ? true : false,
        secure: process.env.NODE_ENV === "production" ? true : false,
        sameSite: "strict"
      });

      response.cookies.delete("session_token");

      return response;
    }
  } else {
    // Si aucun token n'est présent, rediriger vers la page de login
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// Configuration pour appliquer le middleware à toutes les pages sauf les ressources statiques et l'API
// export const config = {
//   matcher: ["/((?!_next/static|_next/image|favicon.ico|api|login).*)"]
//   // matcher: ["/"]

// };
export const config = {
  matcher: [
    "/((?!.next/static|.next/image|images|login|favicon.ico|api|data).*)"
  ]
};

// export const config = {
//   matcher: ["/|_next/static|favicon.ico|login|_next/image"]
// };
