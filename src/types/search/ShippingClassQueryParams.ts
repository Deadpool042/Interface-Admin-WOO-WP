export interface ShippingClassQueryParams {
  context?: "view" | "edit"; // Contexte de la requête
  page?: number; // Page actuelle de la collection (par défaut 1)
  per_page?: number; // Nombre maximum d'éléments à retourner (par défaut 10)
  search?: string; // Limite les résultats à ceux correspondant à une chaîne donnée
  exclude?: number[]; // Exclure des IDs spécifiques
  include?: number[]; // Limite les résultats à des IDs spécifiques
  offset?: number; // Décalage du jeu de résultats par un nombre spécifique
  order?: "asc" | "desc"; // Tri des attributs (par défaut ascendant)
  orderby?:
    | "id"
    | "include"
    | "name"
    | "slug"
    | "term_group"
    | "description"
    | "count"; // Attribut de tri (par défaut name)
  hide_empty?: boolean; // Cache les ressources non assignées à des produits (par défaut false)
  product?: number; // Limite les résultats aux produits assignés à une classe d'expédition spécifique
  slug?: string; // Limite les résultats aux ressources avec un slug spécifique
}
