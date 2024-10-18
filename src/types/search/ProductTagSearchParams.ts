export interface ProductTagSearchParams {
  context?: "view" | "edit"; // Portée de la requête, détermine les champs présents dans la réponse
  page?: number; // Page actuelle de la collection (par défaut 1)
  per_page?: number; // Nombre maximum d'éléments à retourner (par défaut 10)
  search?: string; // Limiter les résultats correspondant à une chaîne
  exclude?: number[]; // Exclure des IDs spécifiques du résultat
  include?: number[]; // Limiter le résultat à des IDs spécifiques
  offset?: number; // Décaler le jeu de résultats par un certain nombre d'éléments
  order?: "asc" | "desc"; // Ordre de tri ascendant ou descendant (par défaut asc)
  orderby?:
    | "id"
    | "include"
    | "name"
    | "slug"
    | "term_group"
    | "description"
    | "count"; // Trier par attribut
  hide_empty?: boolean; // Cacher les ressources non attribuées à des produits (par défaut false)
  product?: number; // Limiter le résultat aux ressources assignées à un produit spécifique
  slug?: string; // Limiter le résultat aux ressources avec un slug spécifique
}
