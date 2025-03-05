
import { Search, X } from "lucide-react";

interface SearchBarProps {
  searchTerm: string;
  onSearch: (term: string) => void;
  placeholder?: string;
}

const SearchBar = ({ searchTerm, onSearch, placeholder = "Search products..." }: SearchBarProps) => {
  return (
    <div className="relative max-w-md mx-auto">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
      />
      {searchTerm && (
        <button 
          className="absolute inset-y-0 right-0 pr-3 flex items-center"
          onClick={() => onSearch("")}
        >
          <X className="h-4 w-4 text-gray-400 hover:text-gray-600" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
