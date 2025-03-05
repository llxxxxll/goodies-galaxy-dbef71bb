
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, User } from "lucide-react";
import CartIcon from "@/components/cart/CartIcon";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  categoryItems: Array<{ name: string; path: string }>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  categoryItems,
}) => {
  return (
    <div 
      className={cn(
        "fixed inset-0 bg-white z-40 pt-20 px-6 md:hidden transition-transform duration-300 ease-in-out",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <div className="flex flex-col space-y-6">
        <Link 
          to="/" 
          className="text-lg font-medium py-2 border-b border-gray-100"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link 
          to="/products" 
          className="text-lg font-medium py-2 border-b border-gray-100"
          onClick={() => setIsMenuOpen(false)}
        >
          Shop
        </Link>
        
        {/* Mobile Categories */}
        <div className="py-2 border-b border-gray-100">
          <p className="text-lg font-medium mb-2">Categories</p>
          <div className="ml-4 space-y-2 max-h-60 overflow-y-auto">
            {categoryItems.map((category) => (
              <Link
                key={category.name}
                to={category.path}
                className="block text-base text-gray-600 hover:text-primary py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
        
        <Link 
          to="/about" 
          className="text-lg font-medium py-2 border-b border-gray-100"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </Link>
        <Link 
          to="/cart" 
          className="text-lg font-medium py-2 border-b border-gray-100"
          onClick={() => setIsMenuOpen(false)}
        >
          Cart
        </Link>
      </div>

      {/* Mobile Actions */}
      <div className="mt-8 flex justify-around">
        <Button variant="ghost" size="icon" className="rounded-full">
          <Search className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <User className="h-5 w-5" />
        </Button>
        <CartIcon />
      </div>
    </div>
  );
};

export default MobileMenu;
