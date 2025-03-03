
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
    image: "/lovable-uploads/20727f1e-0698-43c6-857f-94dfc5f1c88d.png",
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
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1530622060432-69b901f4df8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
  },
  {
    id: 2,
    name: "Ceramic Coffee Mug",
    price: 24.99,
    category: "Kitchenware",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.9,
    reviews: 87,
  },
  {
    id: 3,
    name: "Wooden Cutting Board",
    price: 49.99,
    category: "Kitchenware",
    image: "https://images.unsplash.com/photo-1584834437447-818ea68a2cb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.5,
    reviews: 64,
  },
  {
    id: 4,
    name: "Linen Bed Sheets",
    price: 129.99,
    category: "Bedding",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.8,
    reviews: 156,
  },
  {
    id: 5,
    name: "Minimalist Wall Clock",
    price: 59.99,
    category: "Home Decor",
    image: "https://images.unsplash.com/photo-1507970672148-66ea5b2be193?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.6,
    reviews: 98,
  },
  {
    id: 6,
    name: "Woven Basket",
    price: 34.99,
    category: "Storage",
    image: "https://images.unsplash.com/photo-1519624213695-6819a985fb0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.3,
    reviews: 45,
  },
  {
    id: 7,
    name: "Glass Water Bottle",
    price: 29.99,
    category: "Kitchenware",
    image: "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.7,
    reviews: 112,
  },
  {
    id: 8,
    name: "Concrete Planter",
    price: 39.99,
    category: "Home Decor",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
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
