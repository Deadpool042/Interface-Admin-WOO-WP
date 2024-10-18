export interface ProductVariation {
  id: number; // Identifiant unique en lecture seule
  date_created: string; // Date de création dans le fuseau horaire du site (lecture seule)
  date_created_gmt: string; // Date de création en GMT (lecture seule)
  date_modified: string; // Date de dernière modification dans le fuseau horaire du site (lecture seule)
  date_modified_gmt: string; // Date de dernière modification en GMT (lecture seule)
  description?: string; // Description de la variation
  permalink: string; // URL de la variation (lecture seule)
  sku?: string; // Identifiant unique du produit
  price: string; // Prix actuel de la variation (lecture seule)
  regular_price?: string; // Prix normal de la variation
  sale_price?: string; // Prix promotionnel
  date_on_sale_from?: string; // Date de début de promotion dans le fuseau horaire du site
  date_on_sale_from_gmt?: string; // Date de début de promotion en GMT
  date_on_sale_to?: string; // Date de fin de promotion dans le fuseau horaire du site
  date_on_sale_to_gmt?: string; // Date de fin de promotion en GMT
  on_sale: boolean; // Indique si la variation est en promotion (lecture seule)
  status: "draft" | "pending" | "private" | "publish"; // Statut de la variation (par défaut: publish)
  purchasable: boolean; // Indique si la variation peut être achetée (lecture seule)
  virtual: boolean; // Indique si la variation est virtuelle (par défaut: false)
  downloadable: boolean; // Indique si la variation est téléchargeable (par défaut: false)
  downloads?: Array<ProductDownload>; // Liste des fichiers téléchargeables
  download_limit?: number; // Limite de téléchargements
  download_expiry?: number; // Nombre de jours avant expiration des téléchargements
  tax_status: "taxable" | "shipping" | "none"; // Statut fiscal de la variation (par défaut: taxable)
  tax_class?: string; // Classe fiscale
  manage_stock: boolean; // Gestion du stock au niveau de la variation (par défaut: false)
  stock_quantity?: number; // Quantité de stock
  stock_status: "instock" | "outofstock" | "onbackorder"; // Statut du stock (par défaut: instock)
  backorders: "no" | "notify" | "yes"; // Autorisation des commandes en attente (par défaut: no)
  backorders_allowed: boolean; // Indique si les commandes en attente sont autorisées (lecture seule)
  backordered: boolean; // Indique si la variation est en commande en attente (lecture seule)
  weight?: string; // Poids de la variation
  dimensions?: ProductDimensions; // Dimensions de la variation
  shipping_class?: string; // Classe d'expédition
  shipping_class_id?: number; // ID de la classe d'expédition (lecture seule)
  image?: ProductImage; // Données de l'image de la variation
  attributes: Array<ProductAttribute>; // Liste des attributs
  menu_order?: number; // Ordre dans le menu pour trier les produits
  meta_data?: Array<MetaData>; // Métadonnées
}

interface ProductDownload {
  id: string; // Identifiant du fichier téléchargeable (lecture seule)
  name: string; // Nom du fichier téléchargeable (lecture seule)
  file: string; // URL du fichier téléchargeable (lecture seule)
}

interface ProductDimensions {
  length?: string; // Longueur
  width?: string; // Largeur
  height?: string; // Hauteur
}

interface ProductImage {
  id: number; // Identifiant de l'image
  date_created: string; // Date de création de l'image (lecture seule)
  date_created_gmt: string; // Date de création de l'image en GMT (lecture seule)
  date_modified: string; // Date de modification de l'image (lecture seule)
  date_modified_gmt: string; // Date de modification de l'image en GMT (lecture seule)
  src: string; // URL de l'image
  name?: string; // Nom de l'image
  alt?: string; // Texte alternatif de l'image
}

interface ProductAttribute {
  id: number; // Identifiant de l'attribut
  name: string; // Nom de l'attribut
  option: string; // Option de l'attribut sélectionnée
}

interface MetaData {
  id: number; // Identifiant de la métadonnée (lecture seule)
  key: string; // Clé de la métadonnée
  value: string; // Valeur de la métadonnée
}
