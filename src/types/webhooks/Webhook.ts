export interface Webhook {
  id: number; // Identifiant unique de la ressource (en lecture seule)
  name: string; // Nom convivial pour le webhook
  status: "active" | "paused" | "disabled"; // Statut du webhook (par défaut "active")
  topic: string; // Sujet du webhook (obligatoire)
  resource: string; // Ressource du webhook (en lecture seule)
  event: string; // Événement du webhook (en lecture seule)
  hooks: string[]; // Noms des actions WooCommerce associées au webhook (en lecture seule)
  delivery_url: string; // URL où le payload du webhook est livré (obligatoire)
  secret: string; // Clé secrète utilisée pour générer un hachage du webhook livré
  date_created: string; // Date de création du webhook (en lecture seule)
  date_created_gmt: string; // Date de création du webhook en GMT (en lecture seule)
  date_modified: string; // Date de la dernière modification du webhook (en lecture seule)
  date_modified_gmt: string; // Date de la dernière modification du webhook en GMT (en lecture seule)
}
