
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductImages from "@/components/products/ProductImages";
import ProductInfo from "@/components/products/ProductInfo";
import RelatedProducts from "@/components/products/RelatedProducts";
import ProductBreadcrumbs from "@/components/products/ProductBreadcrumbs";
import ProductLoading from "@/components/products/ProductLoading";
import ProductNotFound from "@/components/products/ProductNotFound";
import { productsData, getRelatedProducts, Product } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [selectedImage, setSelectedImage] = useState<string>("");
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Reset state when ID changes
    setLoading(true);
    setProduct(null);
    setSelectedImage("");
    
    // Simulate API call to fetch product
    setTimeout(() => {
      // Use Number(id) to ensure proper type comparison
      const productId = Number(id);
      const foundProduct = productsData.find(p => p.id === productId);
      
      if (foundProduct) {
        setProduct(foundProduct);
        setSelectedImage(foundProduct.image); // Set default image
        setRelatedProducts(getRelatedProducts(productId));
      }
      setLoading(false);
    }, 500);
  }, [id]);
  
  // Handle product ID redirection for legacy URLs
  useEffect(() => {
    if (!loading && !product) {
      const legacyId = Number(id);
      
      // Map of old IDs to new IDs
      const idMap: Record<number, number> = {
        1: 101, // Desk Lamp
        2: 102, // Wall Sconce
        3: 103, // Night Light
        4: 104, // Ceiling Lamp
        5: 201, // Wall Clock
        6: 401, // Woven Basket
        // Add other mappings as needed
      };
      
      if (legacyId in idMap) {
        // Redirect to the new product ID
        navigate(`/products/${idMap[legacyId]}`, { replace: true });
      }
    }
  }, [id, loading, product, navigate]);
  
  if (loading) {
    return <ProductLoading />;
  }
  
  if (!product) {
    return <ProductNotFound />;
  }
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <ProductBreadcrumbs productName={product.name} category={product.category} />
      
      {/* Product Details */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <ProductImages 
              image={product.image} 
              additionalImages={product.additionalImages} 
              name={product.name}
              onImageSelect={(image) => setSelectedImage(image)}
              selectedImage={selectedImage}
            />
            
            {/* Product Info */}
            <ProductInfo product={product} selectedImage={selectedImage} />
          </div>
        </div>
      </section>
      
      {/* Related Products */}
      <RelatedProducts products={relatedProducts} />
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
