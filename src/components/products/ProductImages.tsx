
import { useState } from "react";

interface ProductImagesProps {
  image: string;
  additionalImages?: string[];
  name: string;
}

const ProductImages = ({ image, additionalImages = [], name }: ProductImagesProps) => {
  const [selectedImage, setSelectedImage] = useState(image);
  const [isZoomed, setIsZoomed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    
    setPosition({ x, y });
  };

  return (
    <div>
      {/* Main Image with Zoom Effect */}
      <div 
        className="rounded-lg overflow-hidden bg-gray-100 mb-4 aspect-square relative cursor-zoom-in"
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
        onMouseMove={handleMouseMove}
      >
        <img 
          src={selectedImage} 
          alt={name}
          className={`h-full w-full object-cover object-center transition-transform duration-200 ${
            isZoomed ? 'scale-150' : 'scale-100'
          }`}
          style={
            isZoomed 
              ? { 
                  transformOrigin: `${position.x}% ${position.y}%` 
                }
              : undefined
          }
        />
      </div>
      
      {/* Thumbnail Images */}
      <div className="grid grid-cols-4 gap-4">
        <button 
          className={`rounded-md overflow-hidden aspect-square ${selectedImage === image ? 'ring-2 ring-primary' : 'ring-1 ring-gray-200'}`}
          onClick={() => setSelectedImage(image)}
        >
          <img 
            src={image} 
            alt={`${name} thumbnail 1`}
            className="h-full w-full object-cover object-center"
          />
        </button>
        
        {additionalImages.map((imgSrc, index) => (
          <button 
            key={index}
            className={`rounded-md overflow-hidden aspect-square ${selectedImage === imgSrc ? 'ring-2 ring-primary' : 'ring-1 ring-gray-200'}`}
            onClick={() => setSelectedImage(imgSrc)}
          >
            <img 
              src={imgSrc} 
              alt={`${name} thumbnail ${index + 2}`}
              className="h-full w-full object-cover object-center"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
