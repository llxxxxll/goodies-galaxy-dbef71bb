
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface ProductBreadcrumbsProps {
  productName: string;
  category: string;
}

const ProductBreadcrumbs = ({ productName, category }: ProductBreadcrumbsProps) => {
  return (
    <div className="bg-gray-50 pt-32 pb-4">
      <div className="container mx-auto px-6">
        <div className="flex items-center text-sm text-gray-500">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link to="/products" className="hover:text-primary">Products</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link to={`/categories/${category.toLowerCase()}`} className="hover:text-primary">
            {category}
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-800 font-medium">{productName}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductBreadcrumbs;
