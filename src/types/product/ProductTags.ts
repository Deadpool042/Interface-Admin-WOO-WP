export interface ProductTag {
  id: number; // Identifiant unique pour la ressource (lecture seule)
  name: string; // Nom de la balise (obligatoire)
  slug: string; // Identifiant alphanumérique unique pour la ressource
  description: string; // Description HTML de la ressource
  count: number; // Nombre de produits publiés associés à la balise (lecture seule)
}
