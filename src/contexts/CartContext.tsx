
import React, { createContext, useReducer, useContext, ReactNode } from "react";
import { toast } from "sonner";
import { Product } from "@/data/types/product";

// Define cart item type
export interface CartItem {
  id: number;
  product: Product;
  quantity: number;
}

// Define cart state
interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

// Define cart actions
type CartAction = 
  | { type: 'ADD_ITEM'; payload: { product: Product; quantity: number } }
  | { type: 'REMOVE_ITEM'; payload: { id: number } }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } }
  | { type: 'CLEAR_CART' };

// Define cart context type
interface CartContextType {
  cart: CartState;
  addItem: (product: Product, quantity: number) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
}

// Initial cart state
const initialCartState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

// Create context with default value
const CartContext = createContext<CartContextType | undefined>(undefined);

// Calculate cart totals
const calculateCartTotals = (items: CartItem[]): { totalItems: number; totalPrice: number } => {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  
  return { totalItems, totalPrice };
};

// Cart reducer
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, quantity } = action.payload;
      const existingItem = state.items.find(item => item.id === product.id);
      
      let updatedItems: CartItem[];
      
      if (existingItem) {
        // Update quantity if item already exists
        updatedItems = state.items.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
      } else {
        // Add new item
        updatedItems = [...state.items, { id: product.id, product, quantity }];
      }
      
      const { totalItems, totalPrice } = calculateCartTotals(updatedItems);
      
      return {
        items: updatedItems,
        totalItems,
        totalPrice,
      };
    }
    
    case 'REMOVE_ITEM': {
      const updatedItems = state.items.filter(item => item.id !== action.payload.id);
      const { totalItems, totalPrice } = calculateCartTotals(updatedItems);
      
      return {
        items: updatedItems,
        totalItems,
        totalPrice,
      };
    }
    
    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload;
      
      // Don't allow quantities less than 1
      if (quantity < 1) return state;
      
      const updatedItems = state.items.map(item => 
        item.id === id ? { ...item, quantity } : item
      );
      
      const { totalItems, totalPrice } = calculateCartTotals(updatedItems);
      
      return {
        items: updatedItems,
        totalItems,
        totalPrice,
      };
    }
    
    case 'CLEAR_CART':
      return initialCartState;
      
    default:
      return state;
  }
};

// Cart provider component
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialCartState);
  
  // Load cart from localStorage on mount
  React.useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart) as CartState;
        // Initialize cart with saved data
        parsedCart.items.forEach(item => {
          dispatch({
            type: 'ADD_ITEM',
            payload: { product: item.product, quantity: item.quantity }
          });
        });
      } catch (error) {
        console.error('Failed to parse cart from localStorage:', error);
        localStorage.removeItem('cart');
      }
    }
  }, []);

  // Save cart to localStorage when it changes
  React.useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  
  // Expose cart actions
  const addItem = (product: Product, quantity: number) => {
    dispatch({ type: 'ADD_ITEM', payload: { product, quantity } });
    toast.success(`${product.name} added to cart`);
  };
  
  const removeItem = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } });
    toast.info("Item removed from cart");
  };
  
  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };
  
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
    toast.info("Cart cleared");
  };
  
  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
