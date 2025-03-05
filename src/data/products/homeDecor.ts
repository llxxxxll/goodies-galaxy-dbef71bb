
import { Product } from "../types/product";

export const homeDecorProducts: Product[] = [
  {
    id: 5,
    name: "Minimal Large Wall Clock",
    price: 44.99,
    category: "Home Decor",
    image: "/lovable-uploads/d3e04433-371d-4b2d-8316-39859636cccb.png",
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
      "/lovable-uploads/a356f861-1b6b-43a1-a0bc-3e528fde7059.png",
      "/lovable-uploads/c652399f-de7b-4723-a96b-d365665398ba.png",
      "/lovable-uploads/d8c5e7e1-9dac-4c6d-b165-c3bc6c87cd8e.png"
    ]
  },
  {
    id: 11, // Using a new unique ID to avoid conflicts
    name: "Minimal Photo Frame",
    price: 19.99,
    category: "Home Decor",
    image: "/lovable-uploads/e30032c1-2034-4efe-987b-7ddc5340f9c6.png",
    rating: 4.7,
    reviews: 89,
    description: "A simple and modern photo frame featuring a minimalist design without any extra decorations or details. The frame is available in square or rectangular sizes, with simple clear glass and light frames, suitable for displaying photos or small art.",
    details: [
      "Made of high-quality aluminum or natural wood with premium finish",
      "Available in white, matte black, and natural brown finishes",
      "Comes in multiple sizes: 15×20cm or 20×25cm",
      "Includes transparent glass front and sturdy back panel",
      "Can be displayed on walls, shelves, or desks",
      "Simple and elegant design that fits any minimalist decor",
      "Durable, scratch-resistant finish for long-lasting use"
    ],
    inStock: true,
    additionalImages: [
      "/lovable-uploads/83ed884e-53ec-41f9-8cc0-4fe79a82294e.png",
      "/lovable-uploads/a5e0f349-aa86-4f4b-b78a-68f8863c653d.png",
      "/lovable-uploads/2dc2f3a8-0161-4e59-9eea-e930503decc3.png"
    ]
  },
];
