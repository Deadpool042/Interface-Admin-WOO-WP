export interface TaxRate {
  id: number; // Identifiant unique pour la ressource (lecture seule).
  country: string; // Code pays ISO 3166.
  state: string; // Code de l'état ou région.
  postcode: string; // Code postal ou ZIP (obsolète à partir de WooCommerce 5.3, remplacé par postcodes).
  city: string; // Nom de la ville (obsolète à partir de WooCommerce 5.3, remplacé par cities).
  postcodes?: string[]; // Codes postaux/ZIP (introduit dans WooCommerce 5.3).
  cities?: string[]; // Noms des villes (introduit dans WooCommerce 5.3).
  rate: string; // Taux de taxe.
  name: string; // Nom du taux de taxe.
  priority: number; // Priorité de taxe, par défaut 1.
  compound: boolean; // Si le taux est composé ou non, par défaut false.
  shipping: boolean; // Si la taxe s'applique aux frais de port, par défaut true.
  order: number; // Indique l'ordre d'apparition dans les requêtes.
  class: string; // Classe de taxe, par défaut "standard".
}
