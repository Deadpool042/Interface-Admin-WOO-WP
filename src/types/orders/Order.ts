export interface Order {
  id: number; // en lecture seule
  parent_id: number;
  number: string; // en lecture seule
  order_key: string; // en lecture seule
  created_via: string; // en lecture seule
  version: string; // en lecture seule
  status:
    | "pending"
    | "processing"
    | "on-hold"
    | "completed"
    | "cancelled"
    | "refunded"
    | "failed"
    | "trash"; // par défaut 'pending'
  currency: string;
  date_created: string; // en lecture seule
  date_created_gmt: string; // en lecture seule
  date_modified: string; // en lecture seule
  date_modified_gmt: string; // en lecture seule
  discount_total: string; // en lecture seule
  discount_tax: string; // en lecture seule
  shipping_total: string; // en lecture seule
  shipping_tax: string; // en lecture seule
  cart_tax: string; // en lecture seule
  total: string; // en lecture seule
  total_tax: string; // en lecture seule
  prices_include_tax: boolean; // en lecture seule
  customer_id: number; // par défaut 0
  customer_ip_address: string; // en lecture seule
  customer_user_agent: string; // en lecture seule
  customer_note: string;
  billing: Billing;
  shipping: Shipping;
  payment_method: string;
  payment_method_title: string;
  transaction_id: string;
  date_paid: string; // en lecture seule
  date_paid_gmt: string; // en lecture seule
  date_completed: string; // en lecture seule
  date_completed_gmt: string; // en lecture seule
  cart_hash: string; // en lecture seule
  meta_data: MetaData[];
  line_items: LineItem[];
  tax_lines: TaxLine[];
  shipping_lines: ShippingLine[];
  fee_lines: FeeLine[];
  coupon_lines: CouponLine[];
  refunds: Refund[];
  set_paid?: boolean; // par défaut false, écriture seule
}

// Autres interfaces associées
interface Billing {
  first_name: string;
  last_name: string;
  company: string;
  address_1: string;
  address_2: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
  email: string;
  phone: string;
}

interface Shipping {
  first_name: string;
  last_name: string;
  company: string;
  address_1: string;
  address_2: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
}

interface MetaData {
  id: number; // en lecture seule
  key: string;
  value: string;
}

interface LineItem {
  id: number; // en lecture seule
  name: string;
  product_id: number;
  variation_id: number;
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
  rate_code: string; // en lecture seule
  rate_id: number; // en lecture seule
  label: string; // en lecture seule
  compound: boolean; // en lecture seule
  tax_total: string; // en lecture seule
  shipping_tax_total: string; // en lecture seule
  meta_data: MetaData[];
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

interface CouponLine {
  id: number; // en lecture seule
  code: string;
  discount: string; // en lecture seule
  discount_tax: string; // en lecture seule
  meta_data: MetaData[];
}

interface Refund {
  id: number; // en lecture seule
  reason: string; // en lecture seule
  total: string; // en lecture seule
}
