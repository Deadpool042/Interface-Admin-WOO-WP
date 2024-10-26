import { wooCommerceApi } from "api/config/axiosInstance";
import { apiRequest } from "api/config/request";

// Fonction pour récupérer les produits avec filtres
export const fetchProducts = async (
  page: number = 1,
  perPage: number = 10,
  filters: any = {}
) => {
  const endpoint = "/api/woocommerce";
  const params = { page, per_page: perPage, ...filters };
  return apiRequest(wooCommerceApi, endpoint, "GET", null, null);
};

// Fonction pour récupérer un produit par ID
export const fetchProductById = async (productId: number) => {
  const endpoint = `/products/${productId}`;
  return apiRequest(wooCommerceApi, endpoint, "GET");
};

// Fonction pour créer un nouveau produit
export const createProduct = async (productData: any) => {
  const endpoint = "/products";
  return apiRequest(wooCommerceApi, endpoint, "POST", productData);
};

// Fonction pour mettre à jour un produit
export const updateProduct = async (productId: number, productData: any) => {
  const endpoint = `/products/${productId}`;
  return apiRequest(wooCommerceApi, endpoint, "PUT", productData);
};

// Fonction pour supprimer un produit
export const deleteProduct = async (productId: number) => {
  const endpoint = `/products/${productId}`;
  return apiRequest(wooCommerceApi, endpoint, "DELETE");
};

import axios from "axios";

// Configuration de base pour WooCommerce
const apiUrl = process.env.WC_API_URL || "";
const consumerKey = process.env.WC_CONSUMER_KEY || "";
const consumerSecret = process.env.WC_CONSUMER_SECRET || "";

// Fonction pour récupérer les produits depuis WooCommerce
export const fetchWooCommerceProducts = async (
  page: number = 1,
  perPage: number = 10
) => {
  try {
    // Générer le token d'authentification en base64
    const token = Buffer.from(`${consumerKey}:${consumerSecret}`).toString(
      "base64"
    );

    // Faire la requête GET à WooCommerce
    const response = await axios.get(`${apiUrl}/products`, {
      headers: {
        Authorization: `Basic ${token}`,
        "Content-Type": "application/json"
      },
      params: {
        page,
        per_page: perPage
      }
    });
    console.log("SRC/API/WOOCOMMERCE/PRODUCTS/products.ts", response.data);
    return response.data; // Renvoie les produits
  } catch (error) {
    // Gérer les erreurs
    console.error("Erreur lors de la récupération des produits :", error);
    throw new Error("Impossible de récupérer les produits depuis WooCommerce");
  }
};
