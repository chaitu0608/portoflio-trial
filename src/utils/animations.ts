// Smooth scroll utility
export const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ 
      behavior: "smooth",
      block: "start"
    });
  }
};

// Intersection Observer for animations
export const createIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
) => {
  const defaultOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
    ...options
  };

  return new IntersectionObserver(callback, defaultOptions);
};

// Animation classes
export const animationClasses = {
  fadeInUp: 'animate-fadeInUp',
  fadeInLeft: 'animate-fadeInLeft',
  fadeInRight: 'animate-fadeInRight',
  scaleIn: 'animate-scaleIn',
  slideInUp: 'animate-slideInUp'
};