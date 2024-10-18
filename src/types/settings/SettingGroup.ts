export interface SettingGroup {
  id: string; // Identifiant unique qui peut être utilisé pour lier des paramètres ensemble (lecture seule)
  label: string; // Libellé lisible utilisé dans les interfaces (lecture seule)
  description: string; // Description lisible pour le paramètre utilisé dans les interfaces (lecture seule)
  parent_id: string; // ID du groupe parent (lecture seule)
  sub_groups: string[]; // IDs des sous-groupes de paramètres (lecture seule)
}
