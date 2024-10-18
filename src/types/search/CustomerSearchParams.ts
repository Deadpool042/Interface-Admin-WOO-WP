export interface CustomerSearchParams {
  context?: "view" | "edit"; // par défaut 'view'
  page?: number; // par défaut 1
  per_page?: number; // par défaut 10
  search?: string; // pour limiter les résultats à ceux correspondant à une chaîne de caractères
  exclude?: number[]; // pour exclure des IDs spécifiques
  include?: number[]; // pour inclure des IDs spécifiques
  offset?: number;
  order?: "asc" | "desc"; // par défaut 'asc'
  orderby?: "id" | "include" | "name" | "registered_date"; // par défaut 'name'
  email?: string; // pour limiter les résultats à une adresse email spécifique
  role?:
    | "all"
    | "administrator"
    | "editor"
    | "author"
    | "contributor"
    | "subscriber"
    | "customer"
    | "shop_manager"; // par défaut 'customer'
}
