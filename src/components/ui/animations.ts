
// Export animation keyframes and utilities without relying on @emotion/react

// Keyframe animation definitions
export const fadeIn = 'animate-fade-in';
export const fadeInUp = 'animate-fade-up';
export const slideInRight = 'animate-slide-in-right';
export const slideInLeft = 'animate-slide-in-left';
export const zoomIn = 'animate-scale-in';
export const pulse = 'animate-pulse';
export const spin = 'animate-spin';

// Animation durations
export const durations = {
  fast: 'duration-200',
  normal: 'duration-300',
  slow: 'duration-500',
};

// Animation easings
export const easings = {
  default: 'ease-in-out',
  linear: 'ease-linear',
  in: 'ease-in',
  out: 'ease-out',
};

// Animation delays
export const delays = {
  none: 'delay-0',
  short: 'delay-100',
  medium: 'delay-200',
  long: 'delay-300',
};

// Helper function to combine animation classes
export const combineAnimations = (...classes: string[]) => classes.join(' ');

// Stagger animation helper (for use with CSS variables)
export const getStaggerDelay = (index: number, baseDelay = 100) => {
  return `${index * baseDelay}ms`;
};

// Common animation combinations
export const animations = {
  fadeIn: 'animate-fade-in',
  fadeUp: 'animate-fade-up',
  scaleIn: 'animate-scale-in',
  slideRight: 'animate-slide-in-right',
  slideLeft: 'animate-slide-in-left',
  pulse: 'animate-pulse',
  spin: 'animate-spin',
};

// Page transition presets
export const pageTransition = {
  enter: 'animate-fade-in',
  exit: 'animate-fade-out',
};

// Animation utility class names (to use directly in className props)
export const animationClasses = {
  hoverScale: 'transition-transform hover:scale-105',
  hoverBounce: 'transition-transform hover:-translate-y-1',
  hoverGlow: 'transition-all hover:shadow-lg hover:shadow-primary/25',
  storyLink: 'relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform hover:after:origin-bottom-left hover:after:scale-x-100',
};
