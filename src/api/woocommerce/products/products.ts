import { wooCommerceApi } from "api/config/axiosInstance";
import { apiRequest } from "api/config/request";

// Fonction pour récupérer les produits avec filtres
export const fetchProducts = async (
  page: number = 1,
  perPage: number = 10,
  filters: any = {}
) => {
  const endpoint = "/products";
  const params = { page, per_page: perPage, ...filters };
  return apiRequest(wooCommerceApi, endpoint, "GET", null, params);
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
