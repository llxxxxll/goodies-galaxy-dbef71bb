
import { Button } from "@/components/ui/button";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";

interface PriceRange {
  label: string;
  min: number;
  max: number;
}

interface DesktopFiltersProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  priceRanges: PriceRange[];
  selectedPriceRange: PriceRange;
  onSelectPriceRange: (range: PriceRange) => void;
  onResetFilters: () => void;
}

const DesktopFilters = ({
  categories,
  selectedCategory,
  onSelectCategory,
  priceRanges,
  selectedPriceRange,
  onSelectPriceRange,
  onResetFilters,
}: DesktopFiltersProps) => {
  return (
    <div className="hidden lg:block w-64 shrink-0">
      <div className="sticky top-32">
        <CategoryFilter 
          categories={categories} 
          selectedCategory={selectedCategory}
          onSelectCategory={onSelectCategory}
        />
        
        <PriceFilter 
          priceRanges={priceRanges}
          selectedPriceRange={selectedPriceRange}
          onSelectPriceRange={onSelectPriceRange}
        />
        
        <Button 
          variant="outline" 
          className="w-full"
          onClick={onResetFilters}
        >
          Reset Filters
        </Button>
      </div>
    </div>
  );
};

export default DesktopFilters;
