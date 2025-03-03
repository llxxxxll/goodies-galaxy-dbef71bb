
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const ProductLoading = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-16 flex items-center justify-center min-h-[60vh]">
        <div className="h-12 w-12 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductLoading;
