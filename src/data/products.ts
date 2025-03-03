
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
    image: "/lovable-uploads/e7d67c3f-789b-4031-bd3b-12573c11960a.png",
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
      "/lovable-uploads/7c341ad2-c440-4378-9763-9b264badbf7d.png",
      "/lovable-uploads/b0b0534b-0439-4918-bcb1-fde14d0384b8.png",
      "/lovable-uploads/868654de-f6dd-4ea3-8258-168fee1b5249.png",
    ],
  },
  {
    id: 9,
    name: "Minimal Wall Sconce",
    price: 64.99,
    category: "Lighting",
    image: "/lovable-uploads/e0b8f121-2d2c-4213-b4ef-25c031530e39.png",
    rating: 4.8,
    reviews: 76,
    description: "This minimal wall sconce adds a touch of elegance to any space. Its simple design features a sleek panel with built-in LED light source that casts a beautiful ambient glow. Perfect for modern interiors.",
    details: [
      "Simple wall lamp with square/circular metal or wood panel",
      "Built-in LED light source for energy efficiency",
      "Ideal for bedrooms, hallways, or offices",
      "Provides both functional lighting and decorative elements",
      "Available in matte black and brushed metal finishes",
      "Easy installation with included hardware"
    ],
    inStock: true,
    additionalImages: [
      "/lovable-uploads/afbf36bc-38a4-4b89-a348-7a492d0404dc.png",
      "/lovable-uploads/3c01ddce-27ac-42a2-8264-d84afae858a5.png",
      "/lovable-uploads/5cea322b-e301-4852-a879-0ecdf2f020c4.png",
    ],
  },
  {
    id: 10,
    name: "Minimal Portable Night Light",
    price: 19.99,
    category: "Lighting",
    image: "/lovable-uploads/fe879b12-50fc-4e6e-bb12-35b7e376e849.png",
    rating: 4.9,
    reviews: 112,
    description: "This portable night light features a simple, spherical design that adds a warm glow to any space. Perfect for kids' bedrooms, nighttime reading, or as an emergency light with its battery-operated functionality.",
    details: [
      "Portable mini lamp with round/spherical design (8-12cm diameter)",
      "USB rechargeable with built-in battery",
      "Warm, adjustable lighting for comfortable ambiance",
      "Perfect for bedrooms, kids' rooms, or emergency lighting",
      "Available in white, black, and wood-tone base options",
      "Up to 12 hours of battery life on a single charge"
    ],
    inStock: true,
    additionalImages: [
      "/lovable-uploads/856fdc2a-a2fa-4691-9a4d-2e5a674156f2.png",
      "/lovable-uploads/aa7b3549-1f62-436d-879c-b3d140149ebc.png",
      "/lovable-uploads/34b1276c-aae9-4db0-b896-27d2aeb8e56d.png",
    ],
  },
  {
    id: 11,
    name: "Minimal Ceiling Lamp",
    price: 99.99,
    category: "Lighting",
    image: "/lovable-uploads/be300ea0-df2c-4da5-b841-db2e30fec7bc.png",
    rating: 4.8,
    reviews: 87,
    description: "This minimal ceiling lamp features a simple round design that provides elegant main lighting for any room. Its sleek metal frame and diffused light create a warm ambiance perfect for modern interiors.",
    details: [
      "Simple round or square ceiling light with clean lines",
      "Built-in LED light source for energy efficiency",
      "Perfect for living rooms, dining areas, or offices",
      "Available in black, brown, or clear with metallic accents",
      "Dimmable light settings for adjustable ambiance",
      "Easy installation with included mounting hardware"
    ],
    inStock: true,
    additionalImages: [
      "/lovable-uploads/21277426-fa5e-4b96-af86-57f2a7d5f7a0.png",
      "/lovable-uploads/d5a73981-f5a6-4845-8f42-4cc66b8a9e7d.png",
      "/lovable-uploads/630fde2b-973c-4500-98c2-e9e108ab0359.png",
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
    image: "https://images.unsplash.com/photo-1522771739844-66ea5b2be193?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
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
export const featuredProducts: Product[] = [productsData[0], productsData[8], productsData[9], productsData[10]];

// Related products based on category
export const getRelatedProducts = (productId: number, limit: number = 3): Product[] => {
  const product = productsData.find(p => p.id === productId);
  if (!product) return [];
  
  return productsData
    .filter(p => p.category === product.category && p.id !== productId)
    .slice(0, limit);
};
