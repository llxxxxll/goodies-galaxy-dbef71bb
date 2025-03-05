
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [selectedImage, setSelectedImage] = useState<string>("");
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Simulate API call to fetch product
    setTimeout(() => {
      const foundProduct = productsData.find(p => p.id === Number(id));
      if (foundProduct) {
        setProduct(foundProduct);
        setSelectedImage(foundProduct.image); // Set default image
        setRelatedProducts(getRelatedProducts(foundProduct.id));
      }
      setLoading(false);
    }, 500);
  }, [id]);
  
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
