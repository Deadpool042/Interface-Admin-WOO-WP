// src/redux/services/productApi.ts

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { wc_product_Product } from "types/product/Product";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/woocommerce/" }),
  tagTypes: ["Products"],
  endpoints: builder => ({
    getProducts: builder.query<
      {
        products: wc_product_Product[];
        totalProducts: number;
        totalPages: number;
      },
      { page: number; per_page: number; order: string }
    >({
      query: ({ page, per_page, order }) => {
        // console.log("Page demandée :", page); // Ajout d'un log pour vérifier la valeur de `page`
        return {
          url: "products",
          params: {
            per_page,
            page, // Assure que le paramètre `page` est bien transmis
            order
          }
        };
      },
      transformResponse: (response: {
        products: wc_product_Product[];
        totalProducts: number;
        totalPages: number;
      }) => {
        // Retourne directement les produits et les informations de pagination du backend
        return response;
      },
      providesTags: (result, error, { page }) => [
        { type: "Products", id: `PAGE_${page}` }
      ],
      keepUnusedDataFor: 0
    })
  })
});

export const { useGetProductsQuery } = productApi;
