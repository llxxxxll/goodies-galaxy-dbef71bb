
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Search, User, Menu, X, ChevronDown } from "lucide-react";
import CartIcon from "@/components/cart/CartIcon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Categories for the dropdown
const categoryItems = [
  { name: "All Products", path: "/products" },
  { name: "Lighting", path: "/categories/lighting" },
  { name: "Kitchenware", path: "/categories/kitchenware" },
  { name: "Bedding", path: "/categories/bedding" },
  { name: "Home Decor", path: "/categories/home decor" },
  { name: "Storage", path: "/categories/storage" },
  { name: "Furniture", path: "/categories/furniture" },
  { name: "Bathroom", path: "/categories/bathroom" },
  { name: "Wall Art", path: "/categories/wall art" },
  { name: "Plants & Planters", path: "/categories/plants & planters" },
  { name: "Textiles", path: "/categories/textiles" },
  { name: "Stationery", path: "/categories/stationery" },
  { name: "Organization", path: "/categories/organization" },
  { name: "Outdoor", path: "/categories/outdoor" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-12",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-subtle" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-medium tracking-tighter relative"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
              Minima
            </span>
            <span className="absolute top-0 -right-1.5 h-2 w-2 bg-primary rounded-full"></span>
          </Link>

          {/* Desktop Navigation */}
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

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="h-5 w-5" />
            </Button>
            <CartIcon />
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden rounded-full"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </nav>

        {/* Mobile Menu */}
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
      </div>
    </header>
  );
};

export default Navbar;
