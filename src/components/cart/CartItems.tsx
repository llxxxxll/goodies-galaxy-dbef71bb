
import { useCart } from "@/contexts/CartContext";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CartItems = () => {
  const { cart, updateQuantity, removeItem } = useCart();
  
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-medium mb-4">Cart Items ({cart.totalItems})</h2>
        
        <div className="divide-y divide-gray-100">
          {cart.items.map((item) => (
            <div key={item.id} className="py-4 flex flex-col sm:flex-row items-center gap-4">
              {/* Product Image - Now showing the selected image */}
              <div className="w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                <Link to={`/products/${item.productId}`}>
                  <img 
                    src={item.selectedImage} 
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </Link>
              </div>
              
              {/* Product Info */}
              <div className="flex-grow">
                <Link to={`/products/${item.productId}`}>
                  <h3 className="font-medium text-lg hover:text-primary transition-colors">
                    {item.product.name}
                  </h3>
                </Link>
                <p className="text-gray-500 text-sm mb-2">
                  {item.product.category}
                </p>
                <div className="text-lg font-medium">
                  ${item.product.price.toFixed(2)}
                </div>
              </div>
              
              {/* Quantity Controls */}
              <div className="flex items-center">
                <Button 
                  variant="outline" 
                  size="icon"
                  className="rounded-l-md rounded-r-none h-9 w-9"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <div className="flex items-center justify-center h-9 w-12 border-y border-gray-200 text-center">
                  {item.quantity}
                </div>
                <Button 
                  variant="outline" 
                  size="icon"
                  className="rounded-r-md rounded-l-none h-9 w-9"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              
              {/* Total Price */}
              <div className="text-right min-w-24 font-medium">
                ${(item.product.price * item.quantity).toFixed(2)}
              </div>
              
              {/* Remove Button */}
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-red-500"
                onClick={() => removeItem(item.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartItems;
