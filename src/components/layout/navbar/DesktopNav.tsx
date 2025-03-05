
import React from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DesktopNavProps {
  categoryItems: Array<{ name: string; path: string }>;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ categoryItems }) => {
  return (
    <div className="hidden md:flex items-center space-x-8">
      <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
        Home
      </Link>
      <Link to="/products" className="text-sm font-medium hover:text-primary transition-colors">
        Shop
      </Link>
      
      {/* Categories Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
            Categories
            <ChevronDown className="h-4 w-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-56">
          {categoryItems.map((category) => (
            <DropdownMenuItem key={category.name} asChild>
              <Link 
                to={category.path}
                className="w-full"
              >
                {category.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      
      <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
        About
      </Link>
    </div>
  );
};

export default DesktopNav;
