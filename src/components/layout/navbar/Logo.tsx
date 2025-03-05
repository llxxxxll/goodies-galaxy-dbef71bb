
import React from "react";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <Link 
      to="/" 
      className="text-2xl font-medium tracking-tighter relative"
    >
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
        Minima
      </span>
      <span className="absolute top-0 -right-1.5 h-2 w-2 bg-primary rounded-full"></span>
    </Link>
  );
};

export default Logo;
