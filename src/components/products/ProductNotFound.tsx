
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const ProductNotFound = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-16 container mx-auto px-6 text-center">
        <h1 className="text-3xl font-medium mb-4">Product Not Found</h1>
        <p className="text-gray-500 mb-8">
          The product you're looking for doesn't exist or has been removed.
        </p>
        <Button asChild>
          <Link to="/products">Back to Products</Link>
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default ProductNotFound;
