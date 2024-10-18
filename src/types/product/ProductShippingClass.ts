export interface ProductShippingClass {
  id: number; // Identifiant unique de la ressource (lecture seule)
  name: string; // Nom de la classe d'expédition (obligatoire)
  slug: string; // Identifiant alphanumérique unique à la ressource
  description: string; // Description HTML de la ressource
  count: number; // Nombre de produits publiés pour cette ressource (lecture seule)
}
