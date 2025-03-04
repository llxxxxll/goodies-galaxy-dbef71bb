
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
