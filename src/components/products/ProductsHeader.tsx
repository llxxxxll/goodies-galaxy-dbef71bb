
import SearchBar from "./SearchBar";

interface ProductsHeaderProps {
  searchTerm: string;
  onSearch: (term: string) => void;
  category?: string;
}

const ProductsHeader = ({ searchTerm, onSearch, category }: ProductsHeaderProps) => {
  return (
    <div className="bg-gray-50 pt-32 pb-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-medium mb-4">
          {category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Collection` : "All Products"}
        </h1>
        <p className="text-gray-600 mb-8 max-w-2xl">
          {category 
            ? `Browse our selection of premium ${category.toLowerCase()} products designed for modern living.` 
            : "Browse our carefully curated collection of home essentials designed for modern living."}
        </p>
        <SearchBar 
          searchTerm={searchTerm} 
          onSearch={onSearch}
          placeholder={category ? `Search ${category}...` : "Search products..."}
        />
      </div>
    </div>
  );
};

export default ProductsHeader;
