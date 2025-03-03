
import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { ChevronDown, Filter, Search, X } from "lucide-react";

// Mock product data
const productsData = [
  {
    id: 1,
    name: "Minimal Desk Lamp",
    price: 89.99,
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1507878566509-a0dbe19677a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80",
    rating: 4.7,
    reviews: 123,
  },
  {
    id: 2,
    name: "Ceramic Coffee Mug",
    price: 24.99,
    category: "Kitchenware",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80",
    rating: 4.9,
    reviews: 87,
  },
  {
    id: 3,
    name: "Wooden Cutting Board",
    price: 49.99,
    category: "Kitchenware",
    image: "https://images.unsplash.com/photo-1594222082000-25f38a9f0ecc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80",
    rating: 4.5,
    reviews: 64,
  },
  {
    id: 4,
    name: "Linen Bed Sheets",
    price: 129.99,
    category: "Bedding",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80",
    rating: 4.8,
    reviews: 156,
  },
  {
    id: 5,
    name: "Minimalist Wall Clock",
    price: 59.99,
    category: "Home Decor",
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80",
    rating: 4.6,
    reviews: 98,
  },
  {
    id: 6,
    name: "Woven Basket",
    price: 34.99,
    category: "Storage",
    image: "https://images.unsplash.com/photo-1615926446509-273b06a718bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80",
    rating: 4.3,
    reviews: 45,
  },
  {
    id: 7,
    name: "Glass Water Bottle",
    price: 29.99,
    category: "Kitchenware",
    image: "https://images.unsplash.com/photo-1610631787806-b6da23d873f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80",
    rating: 4.7,
    reviews: 112,
  },
  {
    id: 8,
    name: "Concrete Planter",
    price: 39.99,
    category: "Home Decor",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80",
    rating: 4.5,
    reviews: 67,
  },
];

// Categories
const categories = [
  "All",
  "Lighting",
  "Kitchenware",
  "Bedding",
  "Home Decor",
  "Storage",
];

// Price ranges
const priceRanges = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under $25", min: 0, max: 25 },
  { label: "$25 - $50", min: 25, max: 50 },
  { label: "$50 - $100", min: 50, max: 100 },
  { label: "Over $100", min: 100, max: Infinity },
];

const Products = () => {
  const [products, setProducts] = useState(productsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    // Filter products based on search term, category, and price range
    let filteredProducts = productsData;
    
    // Search filter
    if (searchTerm) {
      filteredProducts = filteredProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Category filter
    if (selectedCategory !== "All") {
      filteredProducts = filteredProducts.filter(product => 
        product.category === selectedCategory
      );
    }
    
    // Price range filter
    filteredProducts = filteredProducts.filter(product => 
      product.price >= selectedPriceRange.min && product.price <= selectedPriceRange.max
    );
    
    setProducts(filteredProducts);
  }, [searchTerm, selectedCategory, selectedPriceRange]);
  
  // Reset all filters
  const handleResetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setSelectedPriceRange(priceRanges[0]);
  };
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gray-50 pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block text-primary text-sm mb-3 tracking-widest uppercase">
              Our Collection
            </span>
            <h1 className="text-4xl font-medium mb-6">
              Discover Our Products
            </h1>
            <p className="text-gray-500 mb-8">
              Browse our carefully curated collection of minimalist products designed to enhance your everyday life.
            </p>
            
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              {searchTerm && (
                <button 
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setSearchTerm("")}
                >
                  <X className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters (Desktop) */}
            <div className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-32">
                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                          selectedCategory === category
                            ? "bg-blue-50 text-primary font-medium"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
                
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
                        onClick={() => setSelectedPriceRange(range)}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={handleResetFilters}
                >
                  Reset Filters
                </Button>
              </div>
            </div>
            
            {/* Mobile Filter Button */}
            <div className="lg:hidden mb-6 flex justify-between items-center">
              <div>
                <span className="text-sm text-gray-500">
                  Showing {products.length} products
                </span>
              </div>
              <Button 
                variant="outline" 
                className="flex items-center gap-2"
                onClick={() => setIsMobileFilterOpen(true)}
              >
                <Filter className="h-4 w-4" />
                Filters
              </Button>
            </div>
            
            {/* Mobile Filter Panel */}
            {isMobileFilterOpen && (
              <div className="fixed inset-0 bg-black/50 z-50 lg:hidden">
                <div className="absolute right-0 top-0 bottom-0 w-80 bg-white p-6 overflow-y-auto">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-medium">Filters</h2>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="rounded-full"
                      onClick={() => setIsMobileFilterOpen(false)}
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-medium mb-4">Categories</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <button
                          key={category}
                          className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                            selectedCategory === category
                              ? "bg-blue-50 text-primary font-medium"
                              : "text-gray-600 hover:bg-gray-50"
                          }`}
                          onClick={() => {
                            setSelectedCategory(category);
                            setIsMobileFilterOpen(false);
                          }}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                  
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
                          onClick={() => {
                            setSelectedPriceRange(range);
                            setIsMobileFilterOpen(false);
                          }}
                        >
                          {range.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Button 
                      variant="default" 
                      className="w-full"
                      onClick={() => setIsMobileFilterOpen(false)}
                    >
                      Apply Filters
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => {
                        handleResetFilters();
                        setIsMobileFilterOpen(false);
                      }}
                    >
                      Reset Filters
                    </Button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Products Grid */}
            <div className="flex-1">
              {/* Active Filters Display */}
              {(selectedCategory !== "All" || selectedPriceRange.label !== "All Prices" || searchTerm) && (
                <div className="mb-6 flex flex-wrap gap-2 items-center">
                  <span className="text-sm text-gray-500">Active Filters:</span>
                  
                  {selectedCategory !== "All" && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-blue-50 text-primary">
                      {selectedCategory}
                      <button onClick={() => setSelectedCategory("All")} className="ml-1">
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  )}
                  
                  {selectedPriceRange.label !== "All Prices" && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-blue-50 text-primary">
                      {selectedPriceRange.label}
                      <button onClick={() => setSelectedPriceRange(priceRanges[0])} className="ml-1">
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  )}
                  
                  {searchTerm && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-blue-50 text-primary">
                      "{searchTerm}"
                      <button onClick={() => setSearchTerm("")} className="ml-1">
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  )}
                  
                  <button 
                    className="text-xs text-gray-500 underline ml-2"
                    onClick={handleResetFilters}
                  >
                    Clear all
                  </button>
                </div>
              )}
              
              {products.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="py-16 text-center">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gray-100 text-gray-400 mb-6">
                    <Search className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">No products found</h3>
                  <p className="text-gray-500 mb-6">
                    We couldn't find any products matching your filters.
                  </p>
                  <Button onClick={handleResetFilters}>
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Products;
