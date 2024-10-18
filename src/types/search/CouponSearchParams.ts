export interface CouponSearchParams {
  context?: "view" | "edit";
  page?: number;
  per_page?: number;
  search?: string;
  after?: string; // ISO8601 date
  before?: string; // ISO8601 date
  modified_after?: string; // ISO8601 date
  modified_before?: string; // ISO8601 date
  dates_are_gmt?: boolean;
  exclude?: number[];
  include?: number[];
  offset?: number;
  order?: "asc" | "desc";
  orderby?: "date" | "modified" | "id" | "include" | "title" | "slug";
  code?: string; // spécifique pour les coupons
}
