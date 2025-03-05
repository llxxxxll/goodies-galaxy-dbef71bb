
import { Product } from "../types/product";

export const storageProducts: Product[] = [
  {
    id: 401, // Unique ID starting with 401 for storage
    name: "Woven Basket",
    price: 34.99,
    category: "Storage",
    image: "/lovable-uploads/a356f861-1b6b-43a1-a0bc-3e528fde7059.png",
    rating: 4.3,
    reviews: 45,
    description: "A handcrafted woven basket featuring a minimalist design with clean lines and a natural look. Perfect for storing blankets, pillows, toys, or other household items.",
    details: [
      "Made of sustainable natural fibers with a durable construction",
      "Available in natural beige, light gray, and white colors",
      "Spacious interior with approximately 40L capacity",
      "Integrated handles for easy carrying",
      "Lightweight yet sturdy design",
      "Stackable for efficient storage when not in use",
      "Versatile for use in any room of the home"
    ],
    inStock: true,
    additionalImages: [
      "/lovable-uploads/e30032c1-2034-4efe-987b-7ddc5340f9c6.png",
      "/lovable-uploads/e0b8f121-2d2c-4213-b4ef-25c031530e39.png",
      "/lovable-uploads/632e77a7-830e-469f-842b-90d44e68fa6c.png"
    ]
  }
];
