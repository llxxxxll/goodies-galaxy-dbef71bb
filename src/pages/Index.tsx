
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import { ArrowRight, ShieldCheck, Truck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Featured Products */}
      <FeaturedProducts />
      
      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-primary text-sm mb-3 tracking-widest uppercase">
              Why Choose Us
            </span>
            <h2 className="text-3xl font-medium mb-6">
              The Perfect Blend of Form and Function
            </h2>
            <p className="text-gray-500">
              We believe that beautiful design and practical utility should coexist harmoniously in every product we offer.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Fast Delivery */}
            <div className="glass-card p-8 text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-50 text-primary mb-6">
                <Truck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium mb-3">Fast Delivery</h3>
              <p className="text-gray-500 text-sm">
                Free shipping on all orders over $50. Delivered in 2-5 business days.
              </p>
            </div>
            
            {/* Quality Guarantee */}
            <div className="glass-card p-8 text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-50 text-primary mb-6">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium mb-3">Quality Guarantee</h3>
              <p className="text-gray-500 text-sm">
                All products undergo rigorous quality control before shipping to you.
              </p>
            </div>
            
            {/* Easy Returns */}
            <div className="glass-card p-8 text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-50 text-primary mb-6">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium mb-3">Easy Returns</h3>
              <p className="text-gray-500 text-sm">
                Not satisfied? Return within 30 days for a full refund, no questions asked.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-blue-400 text-sm mb-3 tracking-widest uppercase">
              Stay Updated
            </span>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Join Our Newsletter
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <Button className="rounded-full">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Instagram Feed Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-primary text-sm mb-3 tracking-widest uppercase">
              @minima
            </span>
            <h2 className="text-3xl font-medium mb-6">
              Follow Us on Instagram
            </h2>
            <p className="text-gray-500">
              Tag your photos with #MinimalistLiving for a chance to be featured.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Instagram Images */}
            {[
              "https://images.unsplash.com/photo-1592078615290-9d917f0c3f33?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1567016376408-0226e4d0b1ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            ].map((image, index) => (
              <div 
                key={index} 
                className="aspect-square overflow-hidden rounded-lg relative group"
              >
                <img 
                  src={image} 
                  alt={`Instagram post ${index + 1}`} 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link 
                    to="#" 
                    className="text-white text-sm font-medium tracking-wide underline underline-offset-4"
                  >
                    View Post
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
