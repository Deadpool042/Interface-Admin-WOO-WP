export interface ProductReview {
  id: number; // Identifiant unique de l'avis (lecture seule)
  date_created: string; // Date de création de l'avis dans le fuseau horaire du site (lecture seule)
  date_created_gmt: string; // Date de création de l'avis en GMT (lecture seule)
  product_id: number; // Identifiant unique du produit auquel l'avis appartient
  status: "approved" | "hold" | "spam" | "unspam" | "trash" | "untrash"; // Statut de l'avis, par défaut 'approved'
  reviewer: string; // Nom du réviseur
  reviewer_email: string; // Email du réviseur
  review: string; // Contenu de l'avis
  rating: number; // Note de l'avis (de 0 à 5)
  verified: boolean; // Indique si le réviseur a acheté le produit ou non
}
