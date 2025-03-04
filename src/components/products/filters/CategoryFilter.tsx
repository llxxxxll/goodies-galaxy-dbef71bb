
import { useState } from "react";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryFilter = ({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-medium mb-4">Categories</h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <button
            key={category}
            className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
              selectedCategory === category
                ? "bg-primary/10 text-primary font-medium"
                : "text-gray-600 hover:bg-gray-50"
            }`}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
