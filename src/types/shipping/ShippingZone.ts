export interface ShippingZone {
  id: number; // Identifiant unique de la zone d'expédition (lecture seule)
  name: string; // Nom de la zone d'expédition (obligatoire)
  order: number; // Ordre de tri de la zone d'expédition
}
