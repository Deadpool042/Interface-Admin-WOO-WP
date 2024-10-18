export interface ProductAttributeTerm {
  id: number; // Identifiant unique de la ressource. (lecture seule)
  name: string; // Nom du terme (obligatoire)
  slug: string; // Identifiant alphanumérique unique du terme.
  description?: string; // Description HTML de la ressource.
  menu_order: number; // Ordre dans lequel le terme est trié.
  count: number; // Nombre de produits publiés liés à ce terme. (lecture seule)
}
