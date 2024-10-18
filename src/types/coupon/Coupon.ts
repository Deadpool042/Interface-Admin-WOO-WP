export interface Coupon {
  id: number; // en lecture seule
  code: string; // obligatoire
  amount: string;
  date_created: string; // en lecture seule
  date_created_gmt: string; // en lecture seule
  date_modified: string; // en lecture seule
  date_modified_gmt: string; // en lecture seule
  discount_type: "percent" | "fixed_cart" | "fixed_product"; // par défaut 'fixed_cart'
  description: string;
  date_expires: string | null;
  date_expires_gmt: string | null;
  usage_count: number; // en lecture seule
  individual_use: boolean; // par défaut false
  product_ids: number[];
  excluded_product_ids: number[];
  usage_limit: number | null;
  usage_limit_per_user: number | null;
  limit_usage_to_x_items: number | null;
  free_shipping: boolean; // par défaut false
  product_categories: number[];
  excluded_product_categories: number[];
  exclude_sale_items: boolean; // par défaut false
  minimum_amount: string;
  maximum_amount: string;
  email_restrictions: string[];
  used_by: string[]; // en lecture seule
  meta_data: MetaData[];
}

interface MetaData {
  id: number; // en lecture seule
  key: string;
  value: string;
}
