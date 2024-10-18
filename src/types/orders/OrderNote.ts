export interface OrderNote {
  id: number; // en lecture seule
  author: string; // en lecture seule
  date_created: string; // en lecture seule
  date_created_gmt: string; // en lecture seule
  note: string; // obligatoire
  customer_note: boolean; // par défaut false
  added_by_user: boolean; // par défaut false
}
