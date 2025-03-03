
import { useState } from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, ShoppingCart, Star, Heart, Share2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/products";

interface ProductInfoProps {
  product: Product;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const handleIncreaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  const handleAddToCart = () => {
    // Add to cart logic would go here
    console.log(`Added ${quantity} of ${product.name} to cart`);
    // Here you would typically dispatch to a state manager like Redux
  };
  
  return (
    <div>
      {/* Category */}
      <Link 
        to={`/categories/${product.category.toLowerCase()}`}
        className="inline-block text-primary text-sm mb-3 tracking-widest uppercase hover:underline"
      >
        {product.category}
      </Link>
      
      {/* Product Name */}
      <h1 className="text-3xl font-medium mb-4">
        {product.name}
      </h1>
      
      {/* Rating */}
      <div className="flex items-center mb-6">
        <div className="flex items-center mr-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star 
              key={star}
              className={`h-4 w-4 ${star <= Math.round(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
            />
          ))}
        </div>
        <span className="text-sm text-gray-500">
          {product.rating} ({product.reviews} reviews)
        </span>
      </div>
      
      {/* Price */}
      <div className="text-2xl font-medium mb-6">
        ${product.price.toFixed(2)}
      </div>
      
      {/* Description */}
      <p className="text-gray-600 mb-8">
        {product.description}
      </p>
      
      {/* Availability */}
      <div className="mb-6 flex items-center">
        {product.inStock ? (
          <span className="inline-flex items-center text-green-600">
            <Check className="h-4 w-4 mr-2" />
            In Stock
          </span>
        ) : (
          <span className="text-red-500">Out of Stock</span>
        )}
      </div>
      
      {/* Quantity */}
      <div className="mb-8">
        <label className="block text-sm font-medium mb-2">
          Quantity
        </label>
        <div className="flex items-center">
          <Button 
            variant="outline" 
            size="icon"
            className="rounded-l-md rounded-r-none"
            onClick={handleDecreaseQuantity}
            disabled={quantity <= 1}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <div className="flex items-center justify-center h-10 w-16 border-y border-gray-200 text-center">
            {quantity}
          </div>
          <Button 
            variant="outline" 
            size="icon"
            className="rounded-r-md rounded-l-none"
            onClick={handleIncreaseQuantity}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
        <Button 
          className="flex-1"
          size="lg"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
        <Button 
          variant="outline" 
          size="lg"
          className={isWishlisted ? "bg-red-50 text-red-500 border-red-200" : ""}
          onClick={() => setIsWishlisted(!isWishlisted)}
        >
          <Heart className={`h-4 w-4 mr-2 ${isWishlisted && "fill-red-500"}`} />
          {isWishlisted ? "Wishlisted" : "Add to Wishlist"}
        </Button>
      </div>
      
      {/* Share Button */}
      <Button 
        variant="ghost" 
        className="mt-4"
        onClick={() => {
          // Share functionality
          navigator.clipboard.writeText(window.location.href);
          // You'd typically show a toast notification here
          alert("Link copied to clipboard!");
        }}
      >
        <Share2 className="h-4 w-4 mr-2" />
        Share
      </Button>
      
      {/* Product Details */}
      <div className="mt-12 border-t border-gray-100 pt-8">
        <h3 className="text-lg font-medium mb-4">Product Details</h3>
        <ul className="space-y-2">
          {product.details?.map((detail, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductInfo;
