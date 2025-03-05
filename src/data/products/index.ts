
import { Product } from "../types/product";
import { lightingProducts } from "./lighting";
import { kitchenwareProducts } from "./kitchenware";
import { beddingProducts } from "./bedding";
import { homeDecorProducts } from "./homeDecor";
import { storageProducts } from "./storage";

// Combine all products
export const productsData: Product[] = [
  ...lightingProducts,
  ...kitchenwareProducts,
  ...beddingProducts,
  ...homeDecorProducts,
  ...storageProducts,
];

// Featured products subset
export const featuredProducts: Product[] = [
  homeDecorProducts[0], // Minimal Large Wall Clock (replacing Minimal Desk Lamp)
  lightingProducts[1], // Minimal Wall Sconce
  lightingProducts[2], // Minimal Portable Night Light
  lightingProducts[3], // Minimal Ceiling Lamp
];

// Related products based on category
export const getRelatedProducts = (productId: number, limit: number = 3): Product[] => {
  const product = productsData.find(p => p.id === Number(productId));
  if (!product) return [];
  
  return productsData
    .filter(p => p.category === product.category && p.id !== productId)
    .slice(0, limit);
};
