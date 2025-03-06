
import { Product } from "../types/product";

export const furnitureProducts: Product[] = [
  {
    id: 601, // Using unique ID range starting with 6xx for furniture
    name: "Minimal Coffee Table",
    price: 129.99,
    category: "Furniture",
    image: "/lovable-uploads/f9a83a4d-475a-4319-abf5-d1ac44dd6f38.png",
    rating: 4.8,
    reviews: 42,
    description: "Simple elegance meets functionality with our Minimal Coffee Table. The clean lines and natural wood finish make it a perfect centerpiece for any living space.",
    details: [
      "Made of polished natural oak wood",
      "Resistant to scratches and moisture",
      "Rectangular design (80x50 cm) or round option (60 cm diameter)",
      "Light and easy to move",
      "Simple assembly required",
      "Adds elegance without taking up much space",
      "Perfect for displaying books, candles, or small decor items"
    ],
    inStock: true,
    additionalImages: [
      "/lovable-uploads/8c969cd6-7c89-4008-91fb-1a1626b1a125.png",
      "/lovable-uploads/f1c5192d-fa66-4d25-8b53-a5c81adbdab6.png",
      "/lovable-uploads/5c798766-594e-4a4e-866b-72457c1da074.png"
    ]
  },
  // We can add more furniture products in the future
];
