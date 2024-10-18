// src/types/productTypes.ts

// Définit l'interface complète d'un produit WooCommerce
export interface wc_product_Product {
  readonly id?: number; // ID unique, lecture seule
  name: string; // Nom du produit, obligatoire
  slug: string; // Slug du produit, obligatoire
  readonly permalink: string; // URL du produit, lecture seule
  readonly date_created: string; // Date de création, lecture seule
  readonly date_created_gmt: string; // Date de création GMT, lecture seule
  readonly date_modified: string; // Date de dernière modification, lecture seule
  readonly date_modified_gmt: string; // Date de dernière modification GMT, lecture seule
  type: "simple" | "grouped" | "external" | "variable"; // Type de produit, obligatoire
  status: "draft" | "pending" | "private" | "publish"; // Statut du produit, obligatoire
  featured: boolean; // Produit en vedette, obligatoire
  catalog_visibility: "visible" | "catalog" | "search" | "hidden"; // Visibilité dans le catalogue, obligatoire
  description: string; // Description du produit, obligatoire
  short_description: string; // Description courte du produit, obligatoire
  sku: string; // Identifiant unique du produit (SKU), obligatoire
  readonly price: string; // Prix actuel, lecture seule
  regular_price: string; // Prix régulier du produit, obligatoire
  sale_price?: string; // Prix de vente du produit, optionnel
  date_on_sale_from?: string; // Date de début de la promotion, optionnel
  date_on_sale_from_gmt?: string; // Date de début de la promotion en GMT, optionnel
  date_on_sale_to?: string; // Date de fin de la promotion, optionnel
  date_on_sale_to_gmt?: string; // Date de fin de la promotion en GMT, optionnel
  readonly price_html: string; // Prix formaté en HTML, lecture seule
  readonly on_sale: boolean; // Indique si le produit est en promotion, lecture seule
  readonly purchasable: boolean; // Indique si le produit peut être acheté, lecture seule
  readonly total_sales: number; // Nombre total de ventes, lecture seule
  virtual: boolean; // Indique si le produit est virtuel, obligatoire
  downloadable: boolean; // Indique si le produit est téléchargeable, obligatoire
  downloads: wc_product_Download[]; // Liste des fichiers téléchargeables
  download_limit: number; // Nombre de téléchargements autorisés, obligatoire
  download_expiry: number; // Nombre de jours avant expiration des téléchargements, obligatoire
  external_url?: string; // URL externe du produit (seulement pour les produits externes)
  button_text?: string; // Texte du bouton pour les produits externes
  tax_status: "taxable" | "shipping" | "none"; // Statut fiscal du produit, obligatoire
  tax_class: string; // Classe fiscale du produit, obligatoire
  manage_stock: boolean; // Gestion des stocks au niveau du produit, obligatoire
  stock_quantity?: number; // Quantité en stock, optionnel
  stock_status: "instock" | "outofstock" | "onbackorder"; // Statut des stocks, obligatoire
  backorders: "no" | "notify" | "yes"; // Contrôle des précommandes, obligatoire
  readonly backorders_allowed: boolean; // Indique si les précommandes sont autorisées, lecture seule
  readonly backordered: boolean; // Indique si le produit est en précommande, lecture seule
  sold_individually: boolean; // Permet l'achat d'un seul exemplaire par commande, obligatoire
  weight: string; // Poids du produit, optionnel
  dimensions: wc_product_Dimensions; // Dimensions du produit, obligatoire
  readonly shipping_required: boolean; // Indique si le produit nécessite une expédition, lecture seule
  readonly shipping_taxable: boolean; // Indique si l'expédition du produit est taxable, lecture seule
  shipping_class?: string; // Classe d'expédition du produit, optionnel
  readonly shipping_class_id: number; // ID de la classe d'expédition, lecture seule
  reviews_allowed: boolean; // Permet les avis sur le produit, obligatoire
  readonly average_rating: string; // Note moyenne des avis, lecture seule
  readonly rating_count: number; // Nombre d'avis, lecture seule
  readonly related_ids: number[]; // Liste des IDs des produits associés, lecture seule
  upsell_ids: number[]; // Liste des IDs des produits à vente incitative, obligatoire
  cross_sell_ids: number[]; // Liste des IDs des produits à vente croisée, obligatoire
  parent_id: number; // ID du produit parent, obligatoire
  purchase_note: string; // Note d'achat facultative envoyée au client après l'achat
  categories: wc_product_Category[]; // Liste des catégories associées au produit, obligatoire
  tags: wc_product_Tag[]; // Liste des tags associés au produit, obligatoire
  images: wc_product_Image[]; // Liste des images du produit, obligatoire
  attributes: wc_product_Attribute[]; // Liste des attributs du produit, obligatoire
  default_attributes: wc_product_DefaultAttribute[]; // Attributs de variation par défaut, obligatoire
  readonly variations: number[]; // Liste des IDs des variations, lecture seule
  grouped_products: number[]; // Liste des IDs des produits groupés, obligatoire
  menu_order: number; // Ordre de menu pour trier les produits, obligatoire
  meta_data: wc_product_MetaData[]; // Métadonnées supplémentaires, obligatoire
}

// Interfaces pour les sous-objets utilisés dans le produit
export interface wc_product_Download {
  id?: string;
  name: string;
  file: string;
}
export interface wc_product_Dimensions {
  length: string;
  width: string;
  height: string;
}
export interface wc_product_Category {
  id: number;
  readonly name?: string;
  readonly slug?: string;
}
export interface wc_product_Tag {
  id: number;
  readonly name?: string;
  readonly slug?: string;
}
export interface wc_product_Image {
  id?: number;
  src: string;
  name?: string;
  alt?: string;
}
export interface wc_product_Attribute {
  id: number;
  name: string;
  position: number;
  visible: boolean;
  variation: boolean;
  options: string[];
}
export interface wc_product_DefaultAttribute {
  id: number;
  name: string;
  option: string;
}
export interface wc_product_MetaData {
  id?: number;
  key: string;
  value: string;
}
