export interface PaymentGatewaySettings {
  id: string; // Identifiant unique du paramètre (lecture seule)
  label: string; // Libellé lisible du paramètre utilisé dans les interfaces (lecture seule)
  description: string; // Description lisible du paramètre utilisé dans les interfaces (lecture seule)
  type: string; // Type de paramètre. Options : text, email, number, color, password, textarea, select, multiselect, radio, image_width et checkbox (lecture seule)
  value: string; // Valeur du paramètre
  default: string; // Valeur par défaut pour le paramètre (lecture seule)
  tip: string; // Texte d'aide supplémentaire à propos du paramètre (lecture seule)
  placeholder: string; // Texte d'espace réservé à afficher dans les champs de saisie (lecture seule)
}
