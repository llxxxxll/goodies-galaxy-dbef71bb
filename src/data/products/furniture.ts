
import { Product } from "../types/product";

export const furnitureProducts: Product[] = [
  {
    id: 601, // Using unique ID range starting with 6xx for furniture
    name: "Minimal Coffee Table",
    price: 129.99,
    category: "Furniture",
    image: "/lovable-uploads/c928ada4-4952-4f9e-a743-cc569ea53a15.png",
    rating: 4.8,
    reviews: 42,
    description: "Simple elegance meets functionality with our Minimal Coffee Table. The clean lines and natural wood finish make it a perfect centerpiece for any living space.",
    details: [
      "Made of polished natural oak wood",
      "Resistant to scratches and moisture",
      "Available in rectangular design (80x50 cm) or round option (60 cm diameter)",
      "Light and easy to move",
      "Simple assembly required",
      "Adds elegance without taking up much space",
      "Perfect for displaying books, candles, or small decor items"
    ],
    inStock: true,
    additionalImages: [
      "/lovable-uploads/9116b240-ecdf-4206-a509-25bad61df943.png",
      "/lovable-uploads/958eb0c8-0ab4-4221-8376-63b2173930d9.png",
      "/lovable-uploads/f93f59ef-49c4-4b6e-8d17-0c793360014b.png"
    ]
  }
];
