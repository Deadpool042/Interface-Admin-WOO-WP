export interface ProductAttribute {
  id: number; // Identifiant unique de la ressource (en lecture seule)
  name: string; // Nom de l'attribut (obligatoire)
  slug: string; // Identifiant alphanumérique unique de la ressource
  type: string; // Type d'attribut (par défaut, seul 'select' est pris en charge)
  order_by: "menu_order" | "name" | "name_num" | "id"; // Ordre de tri par défaut (par défaut : menu_order)
  has_archives: boolean; // Active/Désactive les archives d'attribut (par défaut : false)
}
