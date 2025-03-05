
import { Product } from "../types/product";

export const homeDecorProducts: Product[] = [
  {
    id: 5,
    name: "Minimal Large Wall Clock",
    price: 44.99,
    category: "Home Decor",
    image: "public/lovable-uploads/d3e04433-371d-4b2d-8316-39859636cccb.png",
    rating: 4.8,
    reviews: 124,
    description: "A large, simple wall clock featuring a minimalist design free of numbers, ornaments, or extra details. The clock is 35 cm in diameter, with simple, smooth minute and second hands, and a light base that allows for easy wall mounting.",
    details: [
      "Silent quartz movement - no ticking for a peaceful environment",
      "Crafted from high-quality stainless steel and premium materials",
      "Available in white, matte black, and light gray finishes",
      "Easy wall mounting with included hardware",
      "Perfect for living rooms, offices, or bedrooms",
      "Battery operated (AA battery included)"
    ],
    inStock: true,
    additionalImages: [
      "public/lovable-uploads/a356f861-1b6b-43a1-a0bc-3e528fde7059.png",
      "public/lovable-uploads/c652399f-de7b-4723-a96b-d365665398ba.png",
      "public/lovable-uploads/d8c5e7e1-9dac-4c6d-b165-c3bc6c87cd8e.png"
    ]
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
