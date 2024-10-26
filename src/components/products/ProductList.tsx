"use client";

import { useGetProductsQuery } from "@/redux/services/products/productApi";
import { useEffect, useState } from "react";
import { wc_product_Product } from "types/product/Product";
import ProductCard from "./ProductCard";
import Button from "../globals/Button";
import Loading from "../functions/Loading";

function ProductList() {
  const [page, setPage] = useState(1);
  const [openCardId, setOpenCardId] = useState<number | null>(null);

  const { data, error, isLoading } = useGetProductsQuery({
    page,
    per_page: 10,
    order: "desc"
  });
  const handleToggle = (id?: number) => {
    if (id === undefined) return; // Ne rien faire si id est undefined
    setOpenCardId(prev => (prev === id ? null : id));
  };

  useEffect(() => {}, [page]);

  const products = data?.products || [];
  const totalProducts = data?.totalProducts;
  const totalPages = data?.totalPages;
  if (isLoading) return <Loading />;
  if (error) return <p>Une erreur est survenue</p>;

  return (
    <div className="z-10 space-y-4">
      <h1 className="text-2xl font-bold text-center">Page des produits</h1>

      <p className="text-center text-sm text-gray-500">
        Affichage de {products.length} sur {totalProducts} produits
      </p>

      <ul className="space-y-3 slide-in-left">
        {products.map((product: wc_product_Product) => (
          <ProductCard
            key={product.id}
            product={product}
            isOpen={openCardId === product.id}
            onToggle={() => handleToggle(product.id)}
            onView={() => console.log("Voir le produit", product.id)}
            onEdit={() => console.log("Modifier le produit", product.id)}
            onDelete={() => console.log("Supprimer le produit", product.id)}
          />
        ))}
      </ul>

      <div className="flex justify-center space-x-4 mt-4">
        <Button
          onClick={() => setPage(prev => prev - 1)}
          disabled={page === 1}>
          Page précédente
        </Button>
        <span>
          Page {page} sur {totalPages}
        </span>
        <Button
          onClick={() => setPage(prev => Math.min(prev + 1, totalPages || 1))}
          disabled={page === totalPages}>
          Page suivante
        </Button>
      </div>
    </div>
  );
}

export default ProductList;
