export interface Refund {
  id: number; // Identifiant unique pour la ressource (en lecture seule)
  date_created: string; // Date de création du remboursement dans le fuseau horaire du site (en lecture seule)
  date_created_gmt: string; // Date de création du remboursement en GMT (en lecture seule)
  amount: string; // Montant total du remboursement
  reason?: string; // Raison du remboursement
  refunded_by: number; // Identifiant utilisateur de la personne ayant effectué le remboursement
  refunded_payment: boolean; // Indique si le paiement a été remboursé via l'API (en lecture seule)
  meta_data: MetaData[]; // Métadonnées associées au remboursement
  line_items: LineItem[]; // Détails des articles dans la commande remboursée
  tax_lines: TaxLine[]; // Détails des lignes de taxes (en lecture seule)
  shipping_lines: ShippingLine[]; // Détails des lignes de frais d'expédition
  fee_lines: FeeLine[]; // Détails des lignes de frais
  api_refund: boolean; // Indique si l'API de la passerelle de paiement a été utilisée pour générer le remboursement (par défaut true)
  api_restock: boolean; // Indique si les articles remboursés ont été remis en stock (par défaut true)
}

interface MetaData {
  id: number; // Identifiant des métadonnées (en lecture seule)
  key: string; // Clé des métadonnées
  value: string; // Valeur des métadonnées
}

interface LineItem {
  id: number; // Identifiant de l'article (en lecture seule)
  name: string; // Nom du produit
  product_id: number; // Identifiant du produit
  variation_id?: number; // Identifiant de la variation du produit (si applicable)
  quantity: number; // Quantité commandée
  subtotal: string; // Sous-total de la ligne (avant les réductions)
  subtotal_tax: string; // Taxes appliquées sur le sous-total (avant réductions) (en lecture seule)
  total: string; // Total de la ligne (après les réductions)
  total_tax: string; // Taxes appliquées sur le total (après réductions) (en lecture seule)
  taxes: TaxLine[]; // Détails des taxes appliquées à la ligne
  meta_data: MetaData[]; // Métadonnées de la ligne
  sku: string; // SKU du produit (en lecture seule)
  price: string; // Prix du produit (en lecture seule)
}

interface TaxLine {
  id: number; // Identifiant de la ligne de taxe (en lecture seule)
  rate_code: string; // Code du taux de taxe (en lecture seule)
  rate_id: number; // Identifiant du taux de taxe (en lecture seule)
  label: string; // Libellé du taux de taxe (en lecture seule)
  compound: boolean; // Indique si le taux de taxe est composé (en lecture seule)
  tax_total: string; // Total des taxes (hors expédition) (en lecture seule)
  shipping_tax_total: string; // Total des taxes sur l'expédition (en lecture seule)
  meta_data: MetaData[]; // Métadonnées des lignes de taxe
}

interface ShippingLine {
  id: number; // Identifiant de la ligne de frais d'expédition (en lecture seule)
  method_title: string; // Nom de la méthode d'expédition
  method_id: string; // Identifiant de la méthode d'expédition
  total: string; // Total de la ligne (après réductions)
  total_tax: string; // Total des taxes appliquées sur les frais d'expédition (en lecture seule)
  taxes: TaxLine[]; // Détails des taxes sur l'expédition
  meta_data: MetaData[]; // Métadonnées des lignes d'expédition
}

interface FeeLine {
  id: number; // Identifiant de la ligne de frais (en lecture seule)
  name: string; // Nom des frais
  tax_class?: string; // Classe de taxe applicable
  tax_status: string; // Statut de la taxe des frais (taxable ou none)
  total: string; // Total des frais (après réductions)
  total_tax: string; // Total des taxes appliquées aux frais (en lecture seule)
  taxes: TaxLine[]; // Détails des taxes appliquées aux frais
  meta_data: MetaData[]; // Métadonnées des lignes de frais
}
