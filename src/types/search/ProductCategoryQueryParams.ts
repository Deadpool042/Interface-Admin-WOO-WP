export interface ProductCategoryQueryParams {
  context?: "view" | "edit"; // Contexte dans lequel la requête est effectuée, détermine les champs dans la réponse
  page?: number; // Page actuelle de la collection, par défaut 1
  per_page?: number; // Nombre maximum d'éléments renvoyés, par défaut 10
  search?: string; // Limite les résultats aux ressources correspondant à la chaîne de recherche
  exclude?: number[]; // Exclut un ensemble spécifique d'IDs des résultats
  include?: number[]; // Limite les résultats à un ensemble spécifique d'IDs
  order?: "asc" | "desc"; // Trie les résultats par ordre ascendant ou descendant
  orderby?:
    | "id"
    | "include"
    | "name"
    | "slug"
    | "term_group"
    | "description"
    | "count"; // Trie les résultats par attribut de la ressource, par défaut par nom
  hide_empty?: boolean; // Cache les ressources non assignées à des produits, par défaut false
  parent?: number; // Limite les résultats aux ressources assignées à un parent spécifique
  product?: number; // Limite les résultats aux ressources assignées à un produit spécifique
  slug?: string; // Limite les résultats aux ressources avec un slug spécifique
}
