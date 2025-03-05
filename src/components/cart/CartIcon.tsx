
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CartIconProps {
  className?: string;
}

const CartIcon = ({ className }: CartIconProps) => {
  const { cart } = useCart();
  
  return (
    <Link to="/cart">
      <Button variant="ghost" size="icon" className={`rounded-full relative ${className}`}>
        <ShoppingCart className="h-5 w-5" />
        {cart.totalItems > 0 && (
          <span className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs bg-primary text-white rounded-full">
            {cart.totalItems}
          </span>
        )}
      </Button>
    </Link>
  );
};

export default CartIcon;
