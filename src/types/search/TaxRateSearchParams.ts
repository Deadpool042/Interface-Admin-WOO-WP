export interface TaxRateSearchParams {
  context?: "view" | "edit"; // Le contexte dans lequel la requête est effectuée. Définit les champs dans la réponse.
  page?: number; // Page actuelle de la collection.
  per_page?: number; // Nombre maximum d'éléments à retourner.
  offset?: number; // Décale le résultat par un nombre spécifique d'éléments.
  order?: "asc" | "desc"; // Tri par ordre croissant ou décroissant. Par défaut, 'asc'.
  orderby?: "id" | "order" | "priority"; // Tri de la collection par attribut d'objet. Par défaut, 'order'.
  class?: string; // Récupère uniquement les taux de taxe de cette classe de taxe.
}
