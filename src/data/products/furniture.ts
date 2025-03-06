
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
  },
  {
    id: 602,
    name: "Minimal Side Table",
    price: 89.99,
    category: "Furniture",
    image: "/lovable-uploads/f05bcdf1-a8cd-4c46-bd33-9b2d857e3928.png",
    rating: 4.9,
    reviews: 28,
    description: "Enhance your living space with our Minimal Side Table. Perfect for placing next to sofas or beds, this versatile piece combines style and functionality in a compact design.",
    details: [
      "Available in circular (40 cm diameter) or square (40x40 cm) designs",
      "Made from high-quality natural oak or metal frame",
      "Comes in white, matte black, or light gray finishes",
      "Resistant to scratches and moisture",
      "Light and easy to move (weighs only 3.5 kg)",
      "Simple assembly required",
      "Perfect for displaying lamps, books, or small decorative items",
      "Fits seamlessly with modern home decor"
    ],
    inStock: true,
    additionalImages: [
      "/lovable-uploads/2d0ae6a8-abc6-4b57-ab44-ecf2b7823966.png",
      "/lovable-uploads/cc815af8-4efd-4c31-a90b-35d3949a84ab.png",
      "/lovable-uploads/e99415d1-cb1e-4e3e-9e0d-fe2c6d490846.png"
    ]
  },
  {
    id: 603,
    name: "Minimal Dining Chair",
    price: 119.99,
    category: "Furniture",
    image: "/lovable-uploads/df1340de-751d-43c1-8f69-e83a448fe99f.png",
    rating: 4.7,
    reviews: 35,
    description: "Elevate your dining space with our Minimal Dining Chair. This simple yet sophisticated chair combines comfort and style, featuring clean lines and premium materials.",
    details: [
      "Dimensions: 45cm width x 45cm depth x 82cm height (seat height: 45cm)",
      "Available with natural oak wood or white metal frame",
      "Features a comfortable molded seat in wood or durable plastic",
      "Comes in light natural brown, white, or light gray finishes",
      "Resistant to scratches, moisture, and daily wear",
      "Lightweight design (weighs only 4.2 kg) for easy movement",
      "Simple assembly required",
      "Stackable design for space-saving storage",
      "Perfect for dining rooms, offices, or any social area"
    ],
    inStock: true,
    additionalImages: [
      "/lovable-uploads/ccf427c7-4fde-491c-a8b7-2e0268cfcf52.png",
      "/lovable-uploads/1159fe50-b4fb-4d27-9a83-1fee2a62c7cd.png",
      "/lovable-uploads/7db1d803-4b4f-4798-a786-ba5f9dba1eea.png"
    ]
  }
];
