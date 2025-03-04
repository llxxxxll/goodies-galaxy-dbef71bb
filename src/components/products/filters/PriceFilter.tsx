
interface PriceRange {
  label: string;
  min: number;
  max: number;
}

interface PriceFilterProps {
  priceRanges: PriceRange[];
  selectedPriceRange: PriceRange;
  onSelectPriceRange: (range: PriceRange) => void;
}

const PriceFilter = ({
  priceRanges,
  selectedPriceRange,
  onSelectPriceRange,
}: PriceFilterProps) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-medium mb-4">Price Range</h3>
      <div className="space-y-2">
        {priceRanges.map((range) => (
          <button
            key={range.label}
            className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
              selectedPriceRange.label === range.label
                ? "bg-blue-50 text-primary font-medium"
                : "text-gray-600 hover:bg-gray-50"
            }`}
            onClick={() => onSelectPriceRange(range)}
          >
            {range.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PriceFilter;
