export interface ShippingLocation {
  code: string; // Code de localisation de la zone d'expédition
  type: string; // Type de localisation de la zone d'expédition. Options : postcode, state, country, continent (par défaut : country)
}
