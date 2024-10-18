export interface WebhookQueryParams {
  context?: "view" | "edit"; // Définit le contexte de la requête, influence les champs retournés (par défaut "view")
  page?: number; // Page actuelle de la collection (par défaut 1)
  per_page?: number; // Nombre maximum d'éléments à retourner (par défaut 10)
  search?: string; // Limite les résultats à ceux correspondant à une chaîne spécifique
  after?: string; // Limite la réponse aux ressources publiées après une date ISO8601 donnée
  before?: string; // Limite la réponse aux ressources publiées avant une date ISO8601 donnée
  exclude?: number[]; // Exclut les IDs spécifiques de la réponse
  include?: number[]; // Limite la réponse aux ressources avec des IDs spécifiques
  offset?: number; // Décale le jeu de résultats d'un nombre spécifique d'éléments
  order?: "asc" | "desc"; // Tri des résultats dans l'ordre ascendant ou descendant (par défaut "desc")
  orderby?: "date" | "id" | "title"; // Tri des résultats par attribut de l'objet (par défaut "date")
  status?: "all" | "active" | "paused" | "disabled"; // Filtre les webhooks selon un statut spécifique (par défaut "all")
}
