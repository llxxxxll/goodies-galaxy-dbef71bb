
import { useState } from "react";

interface ProductImagesProps {
  image: string;
  additionalImages?: string[];
  name: string;
}

const ProductImages = ({ image, additionalImages = [], name }: ProductImagesProps) => {
  const [selectedImage, setSelectedImage] = useState(image);

  return (
    <div>
      {/* Main Image */}
      <div className="rounded-lg overflow-hidden bg-gray-100 mb-4 aspect-square">
        <img 
          src={selectedImage} 
          alt={name}
          className="h-full w-full object-cover object-center"
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
