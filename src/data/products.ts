export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  description?: string;
  details?: string[];
  inStock?: boolean;
  additionalImages?: string[];
}

// Mock product data
export const productsData: Product[] = [
  {
    id: 1,
    name: "Minimal Desk Lamp",
    price: 89.99,
    category: "Lighting",
    image: "/images/products/desk-lamp.jpg", // This will point to public/images/products/desk-lamp.jpg
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
      "/images/products/desk-lamp-2.jpg",
      "/images/products/desk-lamp-3.jpg",
      "/images/products/desk-lamp-4.jpg",
    ],
  },
  {
    id: 2,
    name: "Ceramic Coffee Mug",
    price: 24.99,
    category: "Kitchenware",
    image: "/images/products/coffee-mug.jpg",
    rating: 4.9,
    reviews: 87,
  },
  {
    id: 3,
    name: "Wooden Cutting Board",
    price: 49.99,
    category: "Kitchenware",
    image: "/images/products/cutting-board.jpg",
    rating: 4.5,
    reviews: 64,
  },
  {
    id: 4,
    name: "Linen Bed Sheets",
    price: 129.99,
    category: "Bedding",
    image: "/images/products/bed-sheets.jpg",
    rating: 4.8,
    reviews: 156,
  },
  {
    id: 5,
    name: "Minimalist Wall Clock",
    price: 59.99,
    category: "Home Decor",
    image: "/images/products/wall-clock.jpg",
    rating: 4.6,
    reviews: 98,
  },
  {
    id: 6,
    name: "Woven Basket",
    price: 34.99,
    category: "Storage",
    image: "/images/products/woven-basket.jpg",
    rating: 4.3,
    reviews: 45,
  },
  {
    id: 7,
    name: "Glass Water Bottle",
    price: 29.99,
    category: "Kitchenware",
    image: "/images/products/water-bottle.jpg",
    rating: 4.7,
    reviews: 112,
  },
  {
    id: 8,
    name: "Concrete Planter",
    price: 39.99,
    category: "Home Decor",
    image: "/images/products/concrete-planter.jpg",
    rating: 4.5,
    reviews: 67,
  },
];

// Featured products subset
export const featuredProducts: Product[] = productsData.slice(0, 4);

// Related products based on category
export const getRelatedProducts = (productId: number, limit: number = 3): Product[] => {
  const product = productsData.find(p => p.id === productId);
  if (!product) return [];
  
  return productsData
    .filter(p => p.category === product.category && p.id !== productId)
    .slice(0, limit);
};
