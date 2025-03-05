
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartItems from "@/components/cart/CartItems";
import CartSummary from "@/components/cart/CartSummary";
import { useCart } from "@/contexts/CartContext";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Cart = () => {
  const { cart } = useCart();
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-medium">Shopping Cart</h1>
            <Link to="/products">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Continue Shopping
              </Button>
            </Link>
          </div>
          
          {cart.items.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <CartItems />
              </div>
              <div className="md:col-span-1">
                <CartSummary />
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16">
              <ShoppingCart className="h-16 w-16 text-gray-300 mb-4" />
              <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
              <p className="text-gray-500 mb-8 text-center max-w-md">
                Looks like you haven't added any products to your cart yet.
              </p>
              <Link to="/products">
                <Button size="lg">
                  Browse Products
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Cart;
