import { AxiosRequestConfig } from "axios";

// Fonction de requête générique pour WooCommerce et WordPress
export const apiRequest = async (
  apiInstance: any,
  endpoint: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  data?: any,
  params?: any
) => {
  const config: AxiosRequestConfig = {
    method,
    url: endpoint,
    params,
    data
  };

  try {
    const response = await apiInstance(config);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la requête ${method} :`, error);
    throw error;
  }
};
