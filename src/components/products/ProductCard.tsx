
import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCart } from "@/contexts/CartContext";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  reviews: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { addItem } = useCart();
  
  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };
  
  const handleImageError = () => {
    console.error("Product card image failed to load:", product.image);
    setImageError(true);
    setIsImageLoaded(true); // Still mark as loaded to remove spinner
  };
  
  return (
    <div 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 mb-4">
        {/* Image */}
        <img 
          src={imageError ? "/placeholder.svg" : product.image} 
          alt={product.name}
          className={cn(
            "h-full w-full object-cover object-center transition-all duration-500",
            isHovered ? "scale-105" : "scale-100",
            isImageLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
        {!isImageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-8 w-8 rounded-full border-2 border-primary border-t-transparent animate-spin"></div>
          </div>
        )}
        
        {/* Category Tag */}
        <div className="absolute top-2 left-2">
          <span className="text-xs bg-white/90 backdrop-blur-sm text-gray-800 px-2 py-1 rounded-full">
            {product.category}
          </span>
        </div>
        
        {/* Wishlist Button */}
        <Button 
          variant="ghost"
          size="icon"
          className={cn(
            "absolute top-2 right-2 rounded-full",
            isWishlisted ? "bg-red-50 text-red-500" : "bg-white/80 text-gray-500 hover:text-primary"
          )}
          onClick={(e) => {
            e.preventDefault();
            setIsWishlisted(!isWishlisted);
          }}
        >
          <Heart className={cn("h-4 w-4", isWishlisted && "fill-red-500")} />
        </Button>
        
        {/* Quick Add */}
        <div 
          className={cn(
            "absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/40 to-transparent transition-all duration-300",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        >
          <Button 
            className="w-full rounded-full bg-white text-gray-800 hover:bg-white/90"
            onClick={(e) => {
              e.preventDefault();
              addItem(product, 1, product.image);
            }}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
      
      {/* Product Info */}
      <Link to={`/products/${product.id}`}>
        <div>
          {/* Title and Rating */}
          <div className="flex items-start justify-between">
            <h3 className="text-base font-medium text-gray-800 mb-1 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <div className="flex items-center">
              <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
              <span className="ml-1 text-xs text-gray-500">{product.rating}</span>
            </div>
          </div>
          
          {/* Price */}
          <p className="text-lg font-medium">${product.price.toFixed(2)}</p>
          
          {/* Reviews */}
          <p className="text-xs text-gray-500 mt-1">{product.reviews} reviews</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
