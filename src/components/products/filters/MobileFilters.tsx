
import { Button } from "@/components/ui/button";
import { Filter, X } from "lucide-react";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";

interface PriceRange {
  label: string;
  min: number;
  max: number;
}

interface MobileFiltersProps {
  isOpen: boolean;
  onToggle: (isOpen: boolean) => void;
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  priceRanges: PriceRange[];
  selectedPriceRange: PriceRange;
  onSelectPriceRange: (range: PriceRange) => void;
  onResetFilters: () => void;
  productsCount: number;
}

const MobileFilters = ({
  isOpen,
  onToggle,
  categories,
  selectedCategory,
  onSelectCategory,
  priceRanges,
  selectedPriceRange,
  onSelectPriceRange,
  onResetFilters,
  productsCount,
}: MobileFiltersProps) => {
  return (
    <>
      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-6 flex justify-between items-center">
        <div>
          <span className="text-sm text-gray-500">
            Showing {productsCount} products
          </span>
        </div>
        <Button 
          variant="outline" 
          className="flex items-center gap-2"
          onClick={() => onToggle(true)}
        >
          <Filter className="h-4 w-4" />
          Filters
        </Button>
      </div>
      
      {/* Mobile Filter Panel */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 lg:hidden">
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-white p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-medium">Filters</h2>
              <Button 
                variant="ghost" 
                size="icon"
                className="rounded-full"
                onClick={() => onToggle(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            <CategoryFilter 
              categories={categories} 
              selectedCategory={selectedCategory}
              onSelectCategory={(category) => {
                onSelectCategory(category);
                onToggle(false);
              }}
            />
            
            <PriceFilter 
              priceRanges={priceRanges}
              selectedPriceRange={selectedPriceRange}
              onSelectPriceRange={(range) => {
                onSelectPriceRange(range);
                onToggle(false);
              }}
            />
            
            <div className="space-y-3">
              <Button 
                variant="default" 
                className="w-full"
                onClick={() => onToggle(false)}
              >
                Apply Filters
              </Button>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => {
                  onResetFilters();
                  onToggle(false);
                }}
              >
                Reset Filters
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileFilters;
