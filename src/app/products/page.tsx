"use client";

import Button from "@/components/globals/Button";
import ProductList from "@/components/products/ProductList";
import Link from "next/link";
import React from "react";

function ProductPage() {
  return (
    <div>
      ProductPage
      <div>
        <Link href="/products/add">
          <Button>Ajouter un produit</Button>
        </Link>
      </div>
      <ProductList />
    </div>
  );
}

export default ProductPage;
