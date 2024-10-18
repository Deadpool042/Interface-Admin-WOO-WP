export interface OrderRefundSearchParams {
  context?: "view" | "edit"; // par défaut 'view'
  page?: number; // par défaut 1
  per_page?: number; // par défaut 10
  search?: string;
  after?: string; // date ISO8601
  before?: string; // date ISO8601
  exclude?: number[]; // IDs à exclure
  include?: number[]; // IDs spécifiques
  offset?: number;
  order?: "asc" | "desc"; // par défaut 'desc'
  orderby?: "date" | "modified" | "id" | "include" | "title" | "slug"; // par défaut 'date'
  parent?: number[];
  parent_exclude?: number[];
  dp?: number; // par défaut 2
}
