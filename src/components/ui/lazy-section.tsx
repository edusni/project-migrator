import { useRef, useState, useEffect, ReactNode, Suspense } from "react";
import { cn } from "@/lib/utils";

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  /** Fallback to show while loading */
  fallback?: ReactNode;
  /** Root margin for intersection observer - how far before viewport to start loading */
  rootMargin?: string;
  /** Minimum height to prevent CLS */
  minHeight?: string;
  /** Whether to keep the component mounted after first load */
  keepMounted?: boolean;
}

/**
 * LazySection - Delays rendering of children until they are near the viewport
 * This is useful for heavy components like maps, calculators, or large lists
 * that are below the fold and don't need to load immediately
 */
export function LazySection({
  children,
  className,
  fallback,
  rootMargin = "400px",
  minHeight = "200px",
  keepMounted = true,
}: LazySectionProps) {
  const [isInView, setIsInView] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setHasLoaded(true);
          if (keepMounted) {
            observer.disconnect();
          }
        } else if (!keepMounted) {
          setIsInView(false);
        }
      },
      {
        rootMargin,
        threshold: 0.01,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [rootMargin, keepMounted]);

  const shouldRender = keepMounted ? hasLoaded : isInView;

  const defaultFallback = (
    <div 
      className="flex items-center justify-center bg-muted/30 rounded-lg animate-pulse"
      style={{ minHeight }}
    >
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-muted" />
        <div className="h-3 w-24 bg-muted rounded" />
      </div>
    </div>
  );

  return (
    <div 
      ref={sectionRef} 
      className={cn("transition-opacity duration-300", className)}
      style={{ minHeight: !shouldRender ? minHeight : undefined }}
    >
      {shouldRender ? (
        <Suspense fallback={fallback || defaultFallback}>
          {children}
        </Suspense>
      ) : (
        fallback || defaultFallback
      )}
    </div>
  );
}

/**
 * LazyComponent - Wrapper for React.lazy components with IntersectionObserver
 */
interface LazyComponentProps {
  component: React.LazyExoticComponent<React.ComponentType<any>>;
  props?: Record<string, any>;
  fallback?: ReactNode;
  rootMargin?: string;
  minHeight?: string;
}

export function LazyComponent({
  component: Component,
  props = {},
  fallback,
  rootMargin = "400px",
  minHeight = "200px",
}: LazyComponentProps) {
  return (
    <LazySection 
      rootMargin={rootMargin} 
      minHeight={minHeight}
      fallback={fallback}
    >
      <Component {...props} />
    </LazySection>
  );
}
