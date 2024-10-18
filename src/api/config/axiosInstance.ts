import axios from "axios";
import config from "./config";

// Création de l'instance WooCommerce avec authentification
export const wooCommerceApi = axios.create({
  baseURL: config.woocommerce.apiUrl,
  auth: {
    username: config.woocommerce.consumerKey!,
    password: config.woocommerce.consumerSecret!
  }
});

// Interceptor pour WooCommerce API pour gérer les erreurs globalement
wooCommerceApi.interceptors.response.use(
  response => response,
  error => {
    console.error("Erreur lors de la requête WooCommerce :", error);
    return Promise.reject(error); // Renvoie l'erreur pour qu'elle puisse être gérée ailleurs si besoin
  }
);

// Création de l'instance WordPress avec authentification
export const wordpressApi = axios.create({
  baseURL: config.wordpress.apiUrl,
  auth: {
    username: config.wordpress.username!,
    password: config.wordpress.applicationPassword!
  }
});

// Interceptor pour WordPress API pour gérer les erreurs globalement
wordpressApi.interceptors.response.use(
  response => response,
  error => {
    console.error("Erreur lors de la requête WordPress :", error);
    return Promise.reject(error);
  }
);
