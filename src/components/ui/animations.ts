
// Animation utility classes for use with Tailwind CSS

/**
 * This file contains animation utility classes that can be used with Tailwind CSS.
 * Instead of using keyframes from @emotion/react, we'll leverage Tailwind's built-in
 * animation classes and provide utility values that can be used directly in components.
 */

// Animation class names that correspond to animations defined in tailwind.config.ts
export const animations = {
  fadeIn: 'animate-fadeIn',
  fadeInUp: 'animate-fadeInUp',
  slideInRight: 'animate-slideInRight',
  slideInLeft: 'animate-slideInLeft',
  zoomIn: 'animate-zoomIn',
  pulse: 'animate-pulse', // This is built into Tailwind
  spin: 'animate-spin',   // This is built into Tailwind
  shimmer: 'animate-shimmer',
};

// Transition utility values
export const transitions = {
  fast: 'transition-all duration-200 ease-in-out',
  medium: 'transition-all duration-300 ease-in-out',
  slow: 'transition-all duration-500 ease-in-out',
  bounce: 'transition-all duration-300 ease-out',
};

// Scale transformations for hover effects
export const transforms = {
  scaleOnHover: 'hover:scale-105 transition-transform duration-300',
  scaleDownOnHover: 'hover:scale-95 transition-transform duration-300',
  rotateOnHover: 'hover:rotate-3 transition-transform duration-300',
};

// Stagger children animation delays
export const staggerDelays = {
  sm: 'delay-100',
  md: 'delay-200',
  lg: 'delay-300',
  xl: 'delay-500',
};

// Page transition classes
export const pageTransitions = {
  enter: 'animate-fadeInUp',
  exit: 'animate-fadeOut',
};

