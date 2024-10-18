export interface ProductCategory {
  readonly id: number; // Identifiant unique (lecture seule)
  name: string; // Nom de la catégorie (obligatoire)
  slug: string; // Identifiant alphanumérique unique
  parent: number; // Identifiant du parent de la catégorie
  description: string; // Description en HTML de la catégorie
  display: "default" | "products" | "subcategories" | "both"; // Type d'affichage de la catégorie
  image: ProductCategoryImage; // Données de l'image associée
  menu_order: number; // Ordre de tri personnalisé de la catégorie
  count: number; // Nombre de produits publiés dans cette catégorie (lecture seule)
  children?: ProductCategory[];
}

export interface ProductCategoryImage {
  readonly id: number; // Identifiant de l'image
  date_created: string; // Date de création de l'image dans le fuseau horaire du site (lecture seule)
  date_created_gmt: string; // Date de création de l'image en GMT (lecture seule)
  date_modified: string; // Date de dernière modification de l'image (lecture seule)
  date_modified_gmt: string; // Date de dernière modification de l'image en GMT (lecture seule)
  src: string; // URL de l'image
  name: string; // Nom de l'image
  alt: string; // Texte alternatif pour l'image
}
