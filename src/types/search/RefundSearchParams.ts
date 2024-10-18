export interface RefundSearchParams {
  context?: "view" | "edit"; // Détermine le contexte de la requête et les champs présents dans la réponse. Options: "view" et "edit". Par défaut : "view".
  page?: number; // Page actuelle de la collection. Par défaut : 1.
  per_page?: number; // Nombre maximum d'éléments à retourner dans le jeu de résultats. Par défaut : 10.
  search?: string; // Limite les résultats à ceux correspondant à une chaîne de caractères.
  after?: string; // Limite la réponse aux ressources publiées après une date conforme à ISO8601.
  before?: string; // Limite la réponse aux ressources publiées avant une date conforme à ISO8601.
  exclude?: number[]; // Exclut certains IDs spécifiques du jeu de résultats.
  include?: number[]; // Limite le jeu de résultats à des IDs spécifiques.
  offset?: number; // Décale le jeu de résultats d'un nombre spécifique d'éléments.
  order?: "asc" | "desc"; // Trie le résultat par attribut de manière ascendante ou descendante. Options: "asc" et "desc". Par défaut : "desc".
  orderby?: "date" | "modified" | "id" | "include" | "title" | "slug"; // Trie la collection par un attribut d'objet. Par défaut : "date".
  parent?: number[]; // Limite le jeu de résultats à ceux ayant des IDs parent spécifiques.
  parent_exclude?: number[]; // Exclut les éléments avec des IDs parent spécifiques.
  dp?: number; // Nombre de décimales à utiliser dans chaque ressource. Par défaut : 2.
}
