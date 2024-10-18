export interface SettingOption {
  id: string; // Identifiant unique pour le paramètre (lecture seule)
  label: string; // Libellé lisible pour le paramètre utilisé dans les interfaces (lecture seule)
  description: string; // Description lisible pour le paramètre utilisé dans les interfaces (lecture seule)
  value: any; // Valeur du paramètre
  default: any; // Valeur par défaut pour le paramètre (lecture seule)
  tip: string; // Texte d'aide supplémentaire affiché à l'utilisateur à propos du paramètre (lecture seule)
  placeholder: string; // Texte d'espace réservé affiché dans les champs de saisie (lecture seule)
  type: string; // Type de paramètre. Options : text, email, number, color, password, textarea, select, multiselect, radio, image_width, checkbox (lecture seule)
  options?: Record<string, string>; // Tableau d'options (paires clé-valeur) pour des éléments comme select, multiselect et radio (lecture seule)
  group_id: string; // Identifiant du groupe auquel ce paramètre appartient (lecture seule)
}
