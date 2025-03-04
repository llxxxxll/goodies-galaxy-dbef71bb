
import { Product } from "@/data/types/product";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import ActiveFilters from "./ActiveFilters";

interface PriceRange {
  label: string;
  min: number;
  max: number;
}

interface ProductsGridProps {
  products: Product[];
  selectedCategory: string;
  onResetCategory: () => void;
  selectedPriceRange: PriceRange;
  onResetPriceRange: () => void;
  searchTerm: string;
  onResetSearch: () => void;
  onResetFilters: () => void;
}

const ProductsGrid = ({
  products,
  selectedCategory,
  onResetCategory,
  selectedPriceRange,
  onResetPriceRange,
  searchTerm,
  onResetSearch,
  onResetFilters,
}: ProductsGridProps) => {
  return (
    <div className="flex-1">
      <ActiveFilters 
        selectedCategory={selectedCategory}
        onResetCategory={onResetCategory}
        selectedPriceRange={selectedPriceRange}
        onResetPriceRange={onResetPriceRange}
        searchTerm={searchTerm}
        onResetSearch={onResetSearch}
      />
      
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gray-100 text-gray-400 mb-6">
            <Search className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-medium mb-2">No products found</h3>
          <p className="text-gray-500 mb-6">
            We couldn't find any products matching your filters.
          </p>
          <Button onClick={onResetFilters}>
            Reset Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductsGrid;
