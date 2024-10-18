export interface ProductReviewSearchParams {
  context?: "view" | "edit"; // Portée de la requête, par défaut 'view'
  page?: number; // Page actuelle de la collection, par défaut 1
  per_page?: number; // Nombre maximal d'éléments à retourner, par défaut 10
  search?: string; // Limiter les résultats correspondant à une chaîne
  after?: string; // Limiter aux avis publiés après une date donnée (ISO8601)
  before?: string; // Limiter aux avis publiés avant une date donnée (ISO8601)
  exclude?: number[]; // Exclure des avis spécifiques
  include?: number[]; // Limiter aux avis spécifiques
  offset?: number; // Décaler les résultats d'un nombre spécifique d'éléments
  order?: "asc" | "desc"; // Tri ascendant ou descendant, par défaut 'desc'
  orderby?: "date" | "date_gmt" | "id" | "slug" | "include" | "product"; // Attribut de tri, par défaut 'date_gmt'
  reviewer?: number[]; // Limiter les résultats aux avis de certains utilisateurs
  reviewer_exclude?: number[]; // Exclure les avis de certains utilisateurs
  reviewer_email?: string; // Limiter les résultats à un email d'auteur spécifique
  product?: number[]; // Limiter les résultats aux avis de certains produits
  status?: "all" | "hold" | "approved" | "spam" | "trash"; // Statut de l'avis, par défaut 'approved'
}
