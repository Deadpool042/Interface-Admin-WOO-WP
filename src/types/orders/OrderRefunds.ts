export interface OrderRefund {
  id: number; // en lecture seule
  date_created: string; // en lecture seule
  date_created_gmt: string; // en lecture seule
  amount?: string; // Optionnel
  reason?: string;
  refunded_by: number;
  refunded_payment: boolean; // en lecture seule
  meta_data: MetaData[];
  line_items: RefundLineItem[];
  tax_lines: TaxLine[];
  shipping_lines: ShippingLine[];
  fee_lines: FeeLine[];
  api_refund?: boolean; // écriture seule, par défaut true
  api_restock?: boolean; // écriture seule, par défaut true
}

interface MetaData {
  id: number; // en lecture seule
  key: string;
  value: string;
}

interface RefundLineItem {
  id: number; // en lecture seule
  name: string;
  product_id: number;
  variation_id?: number;
  quantity: number;
  tax_class: string;
  subtotal: string;
  subtotal_tax: string; // en lecture seule
  total: string;
  total_tax: string; // en lecture seule
  taxes: Tax[];
  meta_data: MetaData[];
  sku: string; // en lecture seule
  price: string; // en lecture seule
}

interface Tax {
  id: number; // en lecture seule
  total: string; // en lecture seule
  subtotal: string; // en lecture seule
}

interface TaxLine extends Tax {}

interface ShippingLine {
  id: number; // en lecture seule
  method_title: string;
  method_id: string;
  total: string;
  total_tax: string; // en lecture seule
  taxes: Tax[];
  meta_data: MetaData[];
}

interface FeeLine {
  id: number; // en lecture seule
  name: string;
  tax_class: string;
  tax_status: "taxable" | "none";
  total: string;
  total_tax: string; // en lecture seule
  taxes: Tax[];
  meta_data: MetaData[];
}
