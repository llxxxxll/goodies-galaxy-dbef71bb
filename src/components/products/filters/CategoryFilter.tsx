
import { useState } from "react";
import { 
  Armchair, Bath, Image, Flower, Layers, Pencil, Box, TreeDeciduous
} from "lucide-react";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const getCategoryIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case "all":
      return null;
    case "lighting":
      return null;
    case "kitchenware":
      return null;
    case "bedding":
      return null;
    case "home decor":
      return null;
    case "storage":
      return null;
    case "furniture":
      return <Armchair className="w-4 h-4" />;
    case "bathroom":
      return <Bath className="w-4 h-4" />;
    case "wall art":
      return <Image className="w-4 h-4" />;
    case "plants & planters":
      return <Flower className="w-4 h-4" />;
    case "textiles":
      return <Layers className="w-4 h-4" />;
    case "stationery":
      return <Pencil className="w-4 h-4" />;
    case "organization":
      return <Box className="w-4 h-4" />;
    case "outdoor":
      return <TreeDeciduous className="w-4 h-4" />;
    default:
      return null;
  }
};

const CategoryFilter = ({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const initialDisplayCount = 6; // Show first 6 categories by default
  
  const displayedCategories = isExpanded 
    ? categories 
    : categories.slice(0, initialDisplayCount);
  
  return (
    <div className="mb-8">
      <h3 className="text-lg font-medium mb-4">Categories</h3>
      <div className="space-y-2">
        {displayedCategories.map((category) => (
          <button
            key={category}
            className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors flex items-center gap-2 ${
              selectedCategory === category
                ? "bg-primary/10 text-primary font-medium"
                : "text-gray-600 hover:bg-gray-50"
            }`}
            onClick={() => onSelectCategory(category)}
          >
            {getCategoryIcon(category)}
            <span>{category}</span>
          </button>
        ))}
        
        {categories.length > initialDisplayCount && (
          <button
            className="text-sm text-primary hover:underline w-full text-center pt-1"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Show Less" : `Show ${categories.length - initialDisplayCount} More`}
          </button>
        )}
      </div>
    </div>
  );
};

export default CategoryFilter;
