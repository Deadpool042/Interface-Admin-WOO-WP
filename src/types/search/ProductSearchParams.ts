export interface ProductSearchParams {
  context?: "view" | "edit"; // Portée de la requête
  page?: number; // Page actuelle de la collection
  per_page?: number; // Nombre maximum d'éléments retournés
  search?: string; // Limite les résultats correspondant à une chaîne
  after?: string; // Limite aux ressources publiées après une date donnée (ISO8601)
  before?: string; // Limite aux ressources publiées avant une date donnée (ISO8601)
  modified_after?: string; // Limite aux ressources modifiées après une date donnée (ISO8601)
  modified_before?: string; // Limite aux ressources modifiées avant une date donnée (ISO8601)
  dates_are_gmt?: boolean; // Considère les dates GMT pour la publication/modification
  exclude?: number[]; // Exclut des IDs spécifiques
  include?: number[]; // Limite aux IDs spécifiques
  offset?: number; // Décale le résultat de la collection d'un certain nombre d'éléments
  order?: "asc" | "desc"; // Trie les attributs de manière ascendante ou descendante
  orderby?:
    | "date"
    | "modified"
    | "id"
    | "include"
    | "title"
    | "slug"
    | "price"
    | "popularity"
    | "rating"
    | "menu_order"; // Tri par attribut
  parent?: number[]; // Limite aux éléments ayant des IDs parents spécifiques
  parent_exclude?: number[]; // Exclut les éléments ayant un parent ID spécifique
  slug?: string; // Limite aux produits ayant un slug spécifique
  status?: "any" | "draft" | "pending" | "private" | "publish"; // Filtre par statut
  type?: "simple" | "grouped" | "external" | "variable"; // Limite par type de produit
  sku?: string; // Limite par SKU spécifique
  featured?: boolean; // Filtre les produits en vedette
  category?: string; // Filtre par ID de catégorie
  tag?: string; // Filtre par ID de tag
  shipping_class?: string; // Filtre par ID de classe d'expédition
  attribute?: string; // Filtre par attribut spécifique
  attribute_term?: string; // Filtre par ID de terme d'attribut
  tax_class?: "standard" | "reduced-rate" | "zero-rate"; // Filtre par classe fiscale
  on_sale?: boolean; // Limite aux produits en promotion
  min_price?: string; // Limite par prix minimum
  max_price?: string; // Limite par prix maximum
  stock_status?: "instock" | "outofstock" | "onbackorder"; // Filtre par statut de stock
}
