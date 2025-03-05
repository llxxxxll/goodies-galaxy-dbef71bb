
import React from "react";
import { Button } from "@/components/ui/button";
import { Search, User } from "lucide-react";
import CartIcon from "@/components/cart/CartIcon";

const DesktopActions: React.FC = () => {
  return (
    <div className="hidden md:flex items-center space-x-4">
      <Button variant="ghost" size="icon" className="rounded-full">
        <Search className="h-5 w-5" />
      </Button>
      <Button variant="ghost" size="icon" className="rounded-full">
        <User className="h-5 w-5" />
      </Button>
      <CartIcon />
    </div>
  );
};

export default DesktopActions;
