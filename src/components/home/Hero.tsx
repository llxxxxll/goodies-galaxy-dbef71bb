
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
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
  
  return (
    <div 
      ref={heroRef}
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-xs"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block text-white/80 text-sm mb-3 tracking-widest uppercase opacity-0 animate-[fadeIn_0.6s_ease-out_0.2s_forwards]">
            Discover Timeless Elegance
          </span>
          <h1 className="text-4xl md:text-6xl font-medium text-white mb-6 leading-tight">
            <span className="block overflow-hidden">
              <span className="inline-block opacity-0 animate-[slideInUp_0.8s_ease-out_0.4s_forwards]">Simplicity</span>
            </span>
            <span className="block overflow-hidden">
              <span className="inline-block opacity-0 animate-[slideInUp_0.8s_ease-out_0.6s_forwards]">is the Ultimate</span>
            </span>
            <span className="block overflow-hidden">
              <span className="inline-block opacity-0 animate-[slideInUp_0.8s_ease-out_0.8s_forwards]">Sophistication</span>
            </span>
          </h1>
          <p className="text-white/80 text-lg mb-8 max-w-xl opacity-0 animate-[slideInUp_1s_ease-out_0.6s_forwards] relative">
            <span className="block overflow-hidden">
              Curated collection of minimalist products designed to bring harmony and function to your everyday life.
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-[fadeIn_1s_ease-out_0.8s_forwards]">
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
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-[fadeIn_1s_ease-out_1.2s_forwards]">
        <span className="text-white/60 text-xs mb-2">Scroll</span>
        <div className="h-12 w-0.5 bg-white/20 relative overflow-hidden">
          <div className="h-6 w-full bg-white absolute top-0 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
