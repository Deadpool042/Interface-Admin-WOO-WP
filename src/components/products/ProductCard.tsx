// src/components/products/ProductCard.tsx

import { StarIcon } from "@heroicons/react/24/solid";
import {
  StarIcon as StarIconOutline,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { wc_product_Product } from "types/product/Product";

interface ProductCardProps {
  product: wc_product_Product;
  isOpen: boolean;
  onToggle: () => void;
  onView: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isOpen,
  onToggle,
  onView,
  onEdit,
  onDelete
}) => {
  const isOnSale = product.sale_price && product.sale_price !== "";

  return (
    <li className="relative bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden border border-gray-300 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] w-full mx-auto">
      {/* En-tête du produit */}
      <div className="p-4 bg-primary-dark text-white dark:bg-gray-700 flex justify-between items-center rounded-t-lg">
        <h2 className="text-lg font-semibold truncate">{product.name}</h2>
        <div className="flex items-center space-x-2">
          {product.featured ? (
            <StarIcon className="h-6 w-6 text-yellow-400 dark:text-yellow-300" />
          ) : (
            <StarIconOutline className="h-6 w-6 text-foreground dark:text-foreground-dark" />
          )}
          <button
            onClick={onToggle}
            className="focus:outline-none">
            {isOpen ? (
              <ChevronUpIcon className="h-6 w-6 text-gray-200 dark:text-gray-400" />
            ) : (
              <ChevronDownIcon className="h-6 w-6 text-gray-200 dark:text-gray-400" />
            )}
          </button>
        </div>
      </div>

      {/* Contenu collapsible */}
      <div
        className={`p-4 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}>
        {/* Image du produit */}
        <Image
          src={product.images[0]?.src || "/images/default_picture.png"}
          width={376}
          height={200}
          alt={product.name}
          className="rounded-md mb-4 w-full object-cover"
        />

        {/* Détails du produit en colonnes adaptatives */}
        <div className="space-y-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          {[
            { label: "UGS", value: product.sku || "-" },
            {
              label: "Stock",
              value: (
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    product.stock_status === "instock"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}>
                  {product.stock_status === "instock"
                    ? "En stock"
                    : "Rupture de stock"}
                </span>
              )
            },
            {
              label: "Prix",
              value: isOnSale ? (
                <>
                  <span className="line-through text-gray-500 mr-2">
                    {product.regular_price ? `${product.regular_price} €` : "-"}
                  </span>
                  <span className="text-red-600 font-semibold">
                    {product.sale_price ? `${product.sale_price} €` : "-"}
                  </span>
                </>
              ) : (
                <span className="text-green-700 font-semibold">
                  {product.regular_price ? `${product.regular_price} €` : "-"}
                </span>
              )
            },
            {
              label: "Catégories",
              value: product.categories.length
                ? product.categories.map(cat => cat.name).join(", ")
                : "-"
            },
            {
              label: "Étiquettes",
              value: product.tags.length
                ? product.tags.map(tag => tag.name).join(", ")
                : "-"
            },
            {
              label: "Évaluation",
              value: (
                <div className="flex xs:justify-end space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>
                      {i < Math.floor(parseFloat(product.average_rating)) ? (
                        <StarIcon className="h-4 w-4 text-yellow-500 dark:text-yellow-300" />
                      ) : (
                        <StarIconOutline className="h-4 w-4 text-gray-400" />
                      )}
                    </span>
                  ))}
                  <span className="text-xs ml-2">
                    ({product.rating_count || 0})
                  </span>
                </div>
              )
            },
            {
              label: "Dernière modification",
              value: new Date(product.date_modified).toLocaleDateString()
            }
          ].map(({ label, value }, index) => (
            <div
              key={index}
              className="flex flex-col xs:grid xs:grid-cols-2 gap-x-2 border-b pb-2 gap-y-2">
              <p className="text-gray-500 dark:text-gray-400 uppercase text-[11px] tracking-wider font-medium">
                {label}
              </p>
              <span className="font-semibold text-primary-dark text-left xs:text-right">
                {value}
              </span>
            </div>
          ))}
        </div>

        {/* Boutons d'actions avec icônes pour les petits écrans */}
        <div className="flex justify-between mt-4 space-x-2">
          <button
            onClick={onView}
            className="flex-1 flex justify-center items-center bg-info-dark hover:bg-info text-white font-semibold py-2 rounded-md transition-colors duration-200">
            <EyeIcon className="h-5 w-5" />
          </button>
          <button
            onClick={onEdit}
            className="flex-1 flex justify-center items-center bg-warning-dark hover:bg-warning text-white font-semibold py-2 rounded-md transition-colors duration-200">
            <PencilIcon className="h-5 w-5" />
          </button>
          <button
            onClick={onDelete}
            className="flex-1 flex justify-center items-center bg-error-dark hover:bg-error text-white font-semibold py-2 rounded-md transition-colors duration-200">
            <TrashIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
