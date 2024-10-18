export interface ProductVariationSearchParams {
  context?: "view" | "edit"; // Portée dans laquelle la requête est effectuée
  page?: number; // Page actuelle de la collection
  per_page?: number; // Nombre maximum d'éléments à retourner
  search?: string; // Limite les résultats à ceux correspondant à une chaîne spécifique
  after?: string; // Limite les ressources publiées après une date donnée
  before?: string; // Limite les ressources publiées avant une date donnée
  exclude?: number[]; // Exclut des IDs spécifiques du résultat
  include?: number[]; // Limite les résultats à des IDs spécifiques
  offset?: number; // Décale l'ensemble des résultats
  order?: "asc" | "desc"; // Tri ascendant ou descendant
  orderby?: "date" | "modified" | "id" | "include" | "title" | "slug"; // Attribut de tri (par défaut : 'date')
  parent?: number[]; // Filtre par ID de parent spécifique
  parent_exclude?: number[]; // Exclut les variations ayant un parent spécifique
  slug?: string; // Limite les résultats aux variations avec un slug spécifique
  status?: "any" | "draft" | "pending" | "private" | "publish"; // Filtre les résultats par statut
  sku?: string; // Limite les résultats aux variations avec un SKU spécifique
  tax_class?: "standard" | "reduced-rate" | "zero-rate"; // Limite les résultats par classe fiscale
  on_sale?: boolean; // Limite les résultats aux variations en promotion
  min_price?: string; // Limite les résultats par prix minimum
  max_price?: string; // Limite les résultats par prix maximum
  stock_status?: "instock" | "outofstock" | "onbackorder"; // Filtre par statut de stock
}
