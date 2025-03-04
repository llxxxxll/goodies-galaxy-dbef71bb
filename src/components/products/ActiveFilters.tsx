
import { X } from "lucide-react";

interface PriceRange {
  label: string;
  min: number;
  max: number;
}

interface ActiveFiltersProps {
  selectedCategory: string;
  onResetCategory: () => void;
  selectedPriceRange: PriceRange;
  onResetPriceRange: () => void;
  searchTerm: string;
  onResetSearch: () => void;
}

const ActiveFilters = ({
  selectedCategory,
  onResetCategory,
  selectedPriceRange,
  onResetPriceRange,
  searchTerm,
  onResetSearch,
}: ActiveFiltersProps) => {
  const hasActiveFilters = selectedCategory !== "All" || selectedPriceRange.label !== "All Prices" || searchTerm;
  
  if (!hasActiveFilters) return null;
  
  return (
    <div className="mb-6 flex flex-wrap gap-2 items-center">
      <span className="text-sm text-gray-500">Active Filters:</span>
      
      {selectedCategory !== "All" && (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-blue-50 text-primary">
          {selectedCategory}
          <button onClick={onResetCategory} className="ml-1">
            <X className="h-3 w-3" />
          </button>
        </span>
      )}
      
      {selectedPriceRange.label !== "All Prices" && (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-blue-50 text-primary">
          {selectedPriceRange.label}
          <button onClick={onResetPriceRange} className="ml-1">
            <X className="h-3 w-3" />
          </button>
        </span>
      )}
      
      {searchTerm && (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-blue-50 text-primary">
          "{searchTerm}"
          <button onClick={onResetSearch} className="ml-1">
            <X className="h-3 w-3" />
          </button>
        </span>
      )}
    </div>
  );
};

export default ActiveFilters;
