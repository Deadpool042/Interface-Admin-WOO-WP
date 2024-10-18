export interface Customer {
  id: number; // en lecture seule
  date_created: string; // en lecture seule
  date_created_gmt: string; // en lecture seule
  date_modified: string; // en lecture seule
  date_modified_gmt: string; // en lecture seule
  email: string; // obligatoire
  first_name: string;
  last_name: string;
  role: string; // en lecture seule
  username: string;
  password?: string; // écriture seule
  billing: Billing;
  shipping: Shipping;
  is_paying_customer: boolean; // en lecture seule
  avatar_url: string; // en lecture seule
  meta_data: MetaData[];
}

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
