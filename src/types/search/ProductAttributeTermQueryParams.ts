export interface ProductAttributeTermQueryParams {
  context?: "view" | "edit"; // Détermine les champs présents dans la réponse (vue ou édition). Par défaut 'view'.
  page?: number; // Page actuelle de la collection. Par défaut 1.
  per_page?: number; // Nombre maximum d'éléments retournés dans le jeu de résultats. Par défaut 10.
  search?: string; // Limite les résultats aux termes correspondant à une chaîne.
  exclude?: number[]; // Exclut les termes avec des ID spécifiques.
  include?: number[]; // Limite le jeu de résultats aux termes avec des ID spécifiques.
  order?: "asc" | "desc"; // Ordre de tri, ascendant ou descendant. Par défaut 'asc'.
  orderby?:
    | "id"
    | "include"
    | "name"
    | "slug"
    | "term_group"
    | "description"
    | "count"; // Tri des termes selon un attribut. Par défaut 'name'.
  hide_empty?: boolean; // Si vrai, cache les termes non attribués à des produits. Par défaut false.
  parent?: number; // Limite les résultats aux termes assignés à un parent spécifique.
  product?: number; // Limite les résultats aux termes assignés à un produit spécifique.
  slug?: string; // Limite les résultats aux termes avec un slug spécifique.
}
