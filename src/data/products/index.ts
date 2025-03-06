
import { Product } from "../types/product";
import { lightingProducts } from "./lighting";
import { kitchenwareProducts } from "./kitchenware";
import { beddingProducts } from "./bedding";
import { homeDecorProducts } from "./homeDecor";
import { storageProducts } from "./storage";
import { furnitureProducts } from "./furniture";

// Log products for debugging
console.log("Furniture products:", furnitureProducts);

// Combine all products
export const productsData: Product[] = [
  ...lightingProducts,
  ...kitchenwareProducts,
  ...beddingProducts,
  ...homeDecorProducts,
  ...storageProducts,
  ...furnitureProducts,
];

// Log combined products for debugging
console.log("All products count:", productsData.length);
console.log("Furniture products count in combined data:", 
  productsData.filter(p => p.category === "Furniture").length);

// Featured products subset
export const featuredProducts: Product[] = [
  homeDecorProducts[0], // Minimal Large Wall Clock
  lightingProducts[0], // Minimal Desk Lamp
  lightingProducts[2], // Minimal Portable Night Light
  furnitureProducts[0], // Minimal Coffee Table
  furnitureProducts[1], // Minimal Side Table
  furnitureProducts[2], // Minimal Dining Chair
  furnitureProducts[3], // Minimal Bookshelf - Adding to featured products
];

// Related products based on category
export const getRelatedProducts = (productId: number, limit: number = 3): Product[] => {
  const product = productsData.find(p => p.id === productId);
  if (!product) return [];
  
  return productsData
    .filter(p => p.category === product.category && p.id !== productId)
    .slice(0, limit);
};
