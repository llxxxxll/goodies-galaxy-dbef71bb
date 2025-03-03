
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
              <Link to="/" className="text-2xl font-medium tracking-tighter relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                  Minima
                </span>
                <span className="absolute top-0 -right-1.5 h-2 w-2 bg-primary rounded-full"></span>
              </Link>
            </div>
            <p className="text-gray-500 text-sm mb-6 max-w-xs">
              Elegant minimalism in every product. Quality craftsmanship with a focus on simplicity and functionality.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full text-gray-400 hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full text-gray-400 hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full text-gray-400 hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Links */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-500 hover:text-primary text-sm transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/featured" className="text-gray-500 hover:text-primary text-sm transition-colors">
                  Featured
                </Link>
              </li>
              <li>
                <Link to="/new-arrivals" className="text-gray-500 hover:text-primary text-sm transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/bestsellers" className="text-gray-500 hover:text-primary text-sm transition-colors">
                  Bestsellers
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/our-story" className="text-gray-500 hover:text-primary text-sm transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-500 hover:text-primary text-sm transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-500 hover:text-primary text-sm transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-500 hover:text-primary text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Newsletter</h3>
            <p className="text-gray-500 text-sm mb-4">
              Subscribe to our newsletter for updates on new products and exclusive offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 text-sm border border-gray-200 rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <Button type="submit" className="rounded-l-none">
                <Mail className="h-4 w-4 mr-2" />
                <span>Subscribe</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-center text-xs text-gray-400">
            © {new Date().getFullYear()} Minima. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
