
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ProductCard from "../products/ProductCard";

// Mock data for featured products
const featuredProducts = [
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
];

const FeaturedProducts = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById("featured-products");
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="featured-products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="inline-block text-primary text-sm mb-3 tracking-widest uppercase">
              Featured Collection
            </span>
            <h2 className="text-3xl font-medium mb-2">
              Beautiful by Design
            </h2>
            <p className="text-gray-500 max-w-xl">
              Our most popular products curated for their exceptional design and quality.
            </p>
          </div>
          <Button asChild variant="ghost" className="hidden md:flex items-center mt-4 md:mt-0">
            <Link to="/products">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id}
              className={`transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-700 ease-out`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12 md:hidden">
          <Button asChild variant="ghost" className="flex items-center">
            <Link to="/products">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
