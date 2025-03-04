
import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { productsData } from "@/data/products";
import ProductsHeader from "@/components/products/ProductsHeader";
import DesktopFilters from "@/components/products/filters/DesktopFilters";
import MobileFilters from "@/components/products/filters/MobileFilters";
import ProductsGrid from "@/components/products/ProductsGrid";

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
      
      {/* Hero Section with Search */}
      <ProductsHeader 
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
      />
      
      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Desktop Sidebar Filters */}
            <DesktopFilters 
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              priceRanges={priceRanges}
              selectedPriceRange={selectedPriceRange}
              onSelectPriceRange={setSelectedPriceRange}
              onResetFilters={handleResetFilters}
            />
            
            {/* Mobile Filters */}
            <MobileFilters 
              isOpen={isMobileFilterOpen}
              onToggle={setIsMobileFilterOpen}
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              priceRanges={priceRanges}
              selectedPriceRange={selectedPriceRange}
              onSelectPriceRange={setSelectedPriceRange}
              onResetFilters={handleResetFilters}
              productsCount={products.length}
            />
            
            {/* Products Grid */}
            <ProductsGrid 
              products={products}
              selectedCategory={selectedCategory}
              onResetCategory={() => setSelectedCategory("All")}
              selectedPriceRange={selectedPriceRange}
              onResetPriceRange={() => setSelectedPriceRange(priceRanges[0])}
              searchTerm={searchTerm}
              onResetSearch={() => setSearchTerm("")}
              onResetFilters={handleResetFilters}
            />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Products;
