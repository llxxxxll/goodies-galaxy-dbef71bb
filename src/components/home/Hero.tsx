import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [overlayColor, setOverlayColor] = useState("rgba(0, 0, 0, 0.3)");
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      const parallaxFactor = 0.4;
      
      // Apply parallax effect to background
      heroRef.current.style.backgroundPositionY = `${scrollPosition * parallaxFactor}px`;
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  useEffect(() => {
    // Color animation for the overlay
    const colors = [
      "rgba(0, 0, 0, 0.3)",      // Default black overlay
      "rgba(25, 25, 35, 0.3)",   // Dark blue-gray tint
      "rgba(35, 25, 35, 0.3)",   // Dark purple tint
      "rgba(40, 30, 20, 0.3)",   // Dark warm brown tint
      "rgba(0, 0, 0, 0.3)"       // Back to default
    ];
    
    let colorIndex = 0;
    const animateColor = () => {
      colorIndex = (colorIndex + 1) % colors.length;
      setOverlayColor(colors[colorIndex]);
    };
    
    const colorInterval = setInterval(animateColor, 5000); // Change color every 5 seconds
    
    return () => clearInterval(colorInterval);
  }, []);
  
  return (
    <div 
      ref={heroRef}
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80')",
      }}
    >
      {/* Overlay with animated color */}
      <div 
        className="absolute inset-0 backdrop-blur-xs" 
        style={{ 
          background: overlayColor,
          transition: "background 3s ease-in-out"
        }}
      ></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block text-white/80 text-sm mb-3 tracking-widest uppercase animate-fade-in">
            Discover Timeless Elegance
          </span>
          <h1 className="text-4xl md:text-6xl font-medium text-white mb-6 leading-tight animate-fade-up" style={{ animationDelay: "200ms" }}>
            Simplicity is the Ultimate Sophistication
          </h1>
          <p className="text-white/80 text-lg mb-8 max-w-xl animate-fade-up" style={{ animationDelay: "400ms" }}>
            Curated collection of minimalist products designed to bring harmony and function to your everyday life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "600ms" }}>
            <Button asChild size="lg" className="rounded-full">
              <Link to="/products">
                Explore Collection
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
              <Link to="/about">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white/60 text-xs mb-2">Scroll</span>
        <div className="h-12 w-0.5 bg-white/20 relative overflow-hidden">
          <div className="h-6 w-full bg-white absolute top-0 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
