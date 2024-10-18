export interface OrderNoteSearchParams {
  context?: "view" | "edit"; // par défaut 'view'
  type?: "any" | "customer" | "internal"; // par défaut 'any'
}
