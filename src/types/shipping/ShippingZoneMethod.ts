export interface ShippingZoneMethodSettings {
  id: string; // Identifiant unique pour le paramètre. (read-only)
  label: string; // Libellé lisible par l'humain utilisé dans les interfaces. (read-only)
  description: string; // Description lisible par l'humain utilisée dans les interfaces. (read-only)
  type: string; // Type de paramètre. Options : text, email, number, color, password, textarea, select, multiselect, radio, image_width et checkbox. (read-only)
  value: string; // Valeur du paramètre.
  default: string; // Valeur par défaut pour le paramètre. (read-only)
  tip: string; // Texte d'aide supplémentaire montré à l'utilisateur à propos du paramètre. (read-only)
  placeholder: string; // Texte de substitution à afficher dans les champs texte. (read-only)
}

export interface ShippingZoneMethod {
  instance_id: number; // ID d'instance de la méthode d'expédition. (read-only)
  title: string; // Titre orienté client pour la méthode d'expédition. (read-only)
  order: number; // Ordre de tri de la méthode d'expédition.
  enabled: boolean; // Statut de l'activation de la méthode d'expédition.
  method_id: string; // ID de la méthode d'expédition. (read-only, mandatory)
  method_title: string; // Titre de la méthode d'expédition. (read-only)
  method_description: string; // Description de la méthode d'expédition. (read-only)
  settings: ShippingZoneMethodSettings[]; // Paramètres de la méthode d'expédition.
}
