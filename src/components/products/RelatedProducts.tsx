
import ProductCard from "@/components/products/ProductCard";
import { Product } from "@/data/products";

interface RelatedProductsProps {
  products: Product[];
}

const RelatedProducts = ({ products }: RelatedProductsProps) => {
  if (!products.length) return null;
  
  // Determine the category from the first product
  const category = products[0]?.category;
  
  // Create title based on category
  const getTitle = () => {
    if (category === "Lighting") return "More Lighting Solutions";
    return "You Might Also Like";
  };
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-medium mb-8">{getTitle()}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
