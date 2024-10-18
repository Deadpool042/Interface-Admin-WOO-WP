export interface CustomFieldSearchParams {
  context?: "view" | "edit"; // Détermine le champ dans la réponse
  page?: number; // Page actuelle de la collection, par défaut 1
  per_page?: number; // Nombre maximum d'éléments, par défaut 10
  search?: string; // Limite les résultats à ceux correspondant à une chaîne de caractères
  order?: "asc" | "desc"; // Tri des attributs dans l'ordre ascendant ou descendant, par défaut 'desc'
}
