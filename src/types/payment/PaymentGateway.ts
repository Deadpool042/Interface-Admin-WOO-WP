import { PaymentGatewaySettings } from "./PayementGatewaySettings";

export interface PaymentGateway {
  id: string; // Identifiant du moyen de paiement (lecture seule)
  title: string; // Titre du moyen de paiement à afficher lors du paiement
  description: string; // Description du moyen de paiement à afficher lors du paiement
  order: number; // Ordre de tri du moyen de paiement
  enabled: boolean; // Statut d'activation du moyen de paiement
  method_title: string; // Titre de la méthode de paiement (lecture seule)
  method_description: string; // Description de la méthode de paiement (lecture seule)
  method_supports: string[]; // Fonctionnalités prises en charge par ce moyen de paiement (lecture seule)
  settings: PaymentGatewaySettings[]; // Paramètres du moyen de paiement (voir l'interface PaymentGatewaySettings)
}
