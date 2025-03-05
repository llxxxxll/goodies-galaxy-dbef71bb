
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductsHeader from "@/components/products/ProductsHeader";
import ProductsGrid from "@/components/products/ProductsGrid";
import { productsData } from "@/data/products";
import { Product } from "@/data/types/product";

const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Price range for the selected category (all prices)
  const selectedPriceRange = { label: "All Prices", min: 0, max: Infinity };
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (!category) {
      navigate("/products");
      return;
    }
    
    // Filter products by category
    const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
    const filteredProducts = productsData.filter(
      product => product.category.toLowerCase() === category.toLowerCase()
    );
    
    if (filteredProducts.length === 0) {
      navigate("/not-found");
      return;
    }
    
    setProducts(filteredProducts);
  }, [category, navigate]);
  
  // Handle search within the category
  useEffect(() => {
    if (searchTerm) {
      const filtered = productsData.filter(
        product => 
          product.category.toLowerCase() === category?.toLowerCase() &&
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setProducts(filtered);
    } else {
      const filtered = productsData.filter(
        product => product.category.toLowerCase() === category?.toLowerCase()
      );
      setProducts(filtered);
    }
  }, [searchTerm, category]);
  
  const resetFilters = () => {
    setSearchTerm("");
  };
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section with Search */}
      <ProductsHeader 
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
        category={category}
      />
      
      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold mb-8 capitalize">{category} Collection</h1>
            
            {/* Products Grid */}
            <ProductsGrid 
              products={products}
              selectedCategory={category || ""}
              onResetCategory={() => navigate("/products")}
              selectedPriceRange={selectedPriceRange}
              onResetPriceRange={() => {}}
              searchTerm={searchTerm}
              onResetSearch={() => setSearchTerm("")}
              onResetFilters={resetFilters}
            />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
