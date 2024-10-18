import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createProduct,
  deleteProduct,
  fetchProductById,
  fetchProducts,
  updateProduct
} from "api/woocommerce/products/productRequests";

// Récupérer la liste des produits avec pagination et filtres
export const getProducts = createAsyncThunk("products/getProducts", () => {
  return fetchProducts();
});

// Récupérer un produit par son ID
export const getProductById = createAsyncThunk(
  "products/getProductById",
  async (productId: number) => {
    return fetchProductById(productId);
  }
);

// Créer un nouveau produit
export const createProductThunk = createAsyncThunk(
  "products/createProduct",
  async (productData: any) => {
    return createProduct(productData);
  }
);

// Mettre à jour un produit
export const updateProductThunk = createAsyncThunk(
  "products/updateProduct",
  async ({
    productId,
    productData
  }: {
    productId: number;
    productData: any;
  }) => {
    return updateProduct(productId, productData);
  }
);

// Supprimer un produit
export const deleteProductThunk = createAsyncThunk(
  "products/deleteProduct",
  async (productId: number) => {
    return deleteProduct(productId);
  }
);
