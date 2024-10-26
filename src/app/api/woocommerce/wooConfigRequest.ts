export const baseUrl = process.env.WOOCOMMERCE_BASE_URL!;
export const apiKey = process.env.WOOCOMMERCE_API_KEY!;
export const apiSecret = process.env.WOOCOMMERCE_API_SECRET!;

export const productUrl = process.env.NEXT_PUBLIC_WC_API_URL_PRODUCTS;
export const baseUrlPublic = process.env.NEXT_PUBLIC_API_URL;
export const customerKeyPublic = process.env.NEXT_PUBLIC_CONSUMER_KEY!;
export const secretKeyPublic = process.env.NEXT_PUBLIC_CONSUMER_SECRET!;

import axios from "axios";

export const wcClient = axios.create({
  baseURL: baseUrl,
  auth: {
    username: apiKey,
    password: apiSecret
  },
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
    Authorization: `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString(
      "base64"
    )}`
  }
});

// Crée une instance axios préconfigurée
export const wcPublic = axios.create({
  baseURL: baseUrlPublic,
  auth: {
    username: customerKeyPublic || "", // Clé consommateur, fallback si undefined
    password: secretKeyPublic || "" // Clé secrète, fallback si undefined
  },
  headers: {
    "Content-Type": "application/json"
  }
});
