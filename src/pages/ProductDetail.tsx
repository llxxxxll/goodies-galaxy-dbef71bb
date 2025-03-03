
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ShoppingCart, Star, Heart, Share2, ChevronRight, Check } from "lucide-react";
import ProductCard from "@/components/products/ProductCard";

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
    description: "This minimal desk lamp is the perfect addition to your workspace. Its sleek design and adjustable arm provide optimal lighting for any task. Made from high-quality materials, this lamp is built to last.",
    details: [
      "Adjustable arm and head for directional lighting",
      "Energy-efficient LED bulb included",
      "Touch-sensitive dimmer switch",
      "Durable metal construction",
      "Available in matte black, white, and brushed steel",
    ],
    inStock: true,
    additionalImages: [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80",
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80",
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80",
    ],
  },
];

// Related products
const relatedProducts = [
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
];

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Simulate API call to fetch product
    setTimeout(() => {
      const foundProduct = productsData.find(p => p.id === Number(id));
      if (foundProduct) {
        setProduct(foundProduct);
        setSelectedImage(foundProduct.image);
      }
      setLoading(false);
    }, 500);
  }, [id]);
  
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
  
  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-32 pb-16 flex items-center justify-center min-h-[60vh]">
          <div className="h-12 w-12 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
        </div>
        <Footer />
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-32 pb-16 container mx-auto px-6 text-center">
          <h1 className="text-3xl font-medium mb-4">Product Not Found</h1>
          <p className="text-gray-500 mb-8">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/products">Back to Products</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Breadcrumbs */}
      <div className="bg-gray-50 pt-32 pb-4">
        <div className="container mx-auto px-6">
          <div className="flex items-center text-sm text-gray-500">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link to="/products" className="hover:text-primary">Products</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link to={`/categories/${product.category.toLowerCase()}`} className="hover:text-primary">
              {product.category}
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-gray-800 font-medium">{product.name}</span>
          </div>
        </div>
      </div>
      
      {/* Product Details */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              {/* Main Image */}
              <div className="rounded-lg overflow-hidden bg-gray-100 mb-4 aspect-square">
                <img 
                  src={selectedImage} 
                  alt={product.name}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              
              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-4">
                <button 
                  className={`rounded-md overflow-hidden aspect-square ${selectedImage === product.image ? 'ring-2 ring-primary' : 'ring-1 ring-gray-200'}`}
                  onClick={() => setSelectedImage(product.image)}
                >
                  <img 
                    src={product.image} 
                    alt={`${product.name} thumbnail 1`}
                    className="h-full w-full object-cover object-center"
                  />
                </button>
                
                {product.additionalImages.map((image: string, index: number) => (
                  <button 
                    key={index}
                    className={`rounded-md overflow-hidden aspect-square ${selectedImage === image ? 'ring-2 ring-primary' : 'ring-1 ring-gray-200'}`}
                    onClick={() => setSelectedImage(image)}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} thumbnail ${index + 2}`}
                      className="h-full w-full object-cover object-center"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
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
                  <>
                    <span className="inline-flex items-center text-green-600">
                      <Check className="h-4 w-4 mr-2" />
                      In Stock
                    </span>
                  </>
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
                  {product.details.map((detail: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-medium mb-8">You Might Also Like</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
