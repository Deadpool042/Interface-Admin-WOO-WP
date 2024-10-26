import { NextRequest, NextResponse } from "next/server";
import { wcClient } from "../wooConfigRequest";

// Route GET pour récupérer les produits
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  // Extraction des paramètres de requête
  const context = searchParams.get("context") || "view";
  const page = parseInt(searchParams.get("page") || "1", 10);
  const per_page = parseInt(searchParams.get("per_page") || "10", 10);
  const search = searchParams.get("search") || undefined;
  const exclude = searchParams.getAll("exclude") || undefined;
  const include = searchParams.getAll("include") || undefined;
  const offset = parseInt(searchParams.get("offset") || "0", 10);
  const order = searchParams.get("order") || "asc";
  const orderby = searchParams.get("orderby") || "title";
  const parent = parseInt(searchParams.get("parent") || "0", 10);
  const product = parseInt(searchParams.get("product") || "0", 10);
  const slug = searchParams.get("slug") || undefined;

  // Construire les paramètres pour la requête
  const params = {
    per_page,
    page,
    context,
    search,
    exclude,
    include,

    order,
    orderby,
    product,
    slug
  };
  try {
    // Requête vers l'API WooCommerce pour récupérer les produits
    const response = await wcClient.get("/products", { params });

    // Récupérer le nombre total de produits et de pages depuis les en-têtes de réponse
    const totalProducts = parseInt(response.headers["x-wp-total"], 10);
    const totalPages = parseInt(response.headers["x-wp-totalpages"], 10);

    // Inclure les données des produits et les totaux dans la réponse
    return NextResponse.json(
      {
        products: response.data,
        totalProducts,
        totalPages
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(
      "Erreur lors de la récupération des produits :",
      error.message
    );
    return NextResponse.json(
      { message: "Erreur lors de la récupération des produits." },
      { status: 500 }
    );
  }
}
