import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useInView<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
  triggerOnce = true,
}: UseInViewOptions = {}) {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isInView };
}

// Component wrapper for easy use
interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-in" | "fade-in-up" | "scale-in" | "slide-in-left" | "slide-in-right";
}

export function AnimateOnScroll({ 
  children, 
  className = "", 
  delay = 0,
  animation = "fade-in-up"
}: AnimateOnScrollProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  const animationClasses = {
    "fade-in": "translate-y-0 opacity-100",
    "fade-in-up": "translate-y-0 opacity-100",
    "scale-in": "scale-100 opacity-100",
    "slide-in-left": "translate-x-0 opacity-100",
    "slide-in-right": "translate-x-0 opacity-100",
  };

  const initialClasses = {
    "fade-in": "translate-y-4 opacity-0",
    "fade-in-up": "translate-y-8 opacity-0",
    "scale-in": "scale-95 opacity-0",
    "slide-in-left": "-translate-x-8 opacity-0",
    "slide-in-right": "translate-x-8 opacity-0",
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isInView ? animationClasses[animation] : initialClasses[animation]
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
