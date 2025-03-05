
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const CartSummary = () => {
  const { cart, clearCart } = useCart();
  
  // Calculate order summary values
  const subtotal = cart.totalPrice;
  const shipping = subtotal > 100 ? 0 : 10;
  const tax = subtotal * 0.08; // 8% tax rate
  const total = subtotal + shipping + tax;
  
  const handleCheckout = () => {
    // In a real application, this would redirect to a checkout page
    alert("Checkout functionality would be implemented here");
  };
  
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden sticky top-24">
      <div className="p-6">
        <h2 className="text-xl font-medium mb-4">Order Summary</h2>
        
        <div className="space-y-4 mb-6">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">${subtotal.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">Shipping</span>
            {shipping === 0 ? (
              <span className="text-green-600 flex items-center">
                <CheckCircle className="h-4 w-4 mr-1" />
                Free
              </span>
            ) : (
              <span className="font-medium">${shipping.toFixed(2)}</span>
            )}
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">Tax (8%)</span>
            <span className="font-medium">${tax.toFixed(2)}</span>
          </div>
          
          {shipping > 0 && (
            <div className="text-sm text-gray-500 pt-2">
              Free shipping on orders over $100
            </div>
          )}
          
          <div className="border-t border-gray-100 pt-4 flex justify-between text-lg font-medium">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
        
        <Button 
          className="w-full mb-3"
          size="lg"
          onClick={handleCheckout}
        >
          Proceed to Checkout
        </Button>
        
        <Button 
          variant="outline"
          className="w-full"
          onClick={clearCart}
        >
          Clear Cart
        </Button>
      </div>
    </div>
  );
};

export default CartSummary;
