
import SearchBar from "./SearchBar";

interface ProductsHeaderProps {
  searchTerm: string;
  onSearch: (term: string) => void;
}

const ProductsHeader = ({ searchTerm, onSearch }: ProductsHeaderProps) => {
  return (
    <section className="bg-gray-50 pt-32 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-primary text-sm mb-3 tracking-widest uppercase">
            Our Collection
          </span>
          <h1 className="text-4xl font-medium mb-6">
            Discover Our Products
          </h1>
          <p className="text-gray-500 mb-8">
            Browse our carefully curated collection of minimalist products designed to enhance your everyday life.
          </p>
          
          {/* Search */}
          <SearchBar searchTerm={searchTerm} onSearch={onSearch} />
        </div>
      </div>
    </section>
  );
};

export default ProductsHeader;
