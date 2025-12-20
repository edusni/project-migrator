import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "3/4" | "21/9";
  priority?: boolean;
  overlay?: "none" | "light" | "dark" | "gradient";
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  objectFit?: "cover" | "contain" | "fill";
  onClick?: () => void;
  /** Explicit width for CLS prevention */
  width?: number;
  /** Explicit height for CLS prevention */
  height?: number;
  /** fetchpriority for LCP optimization */
  fetchPriority?: "high" | "low" | "auto";
}

export function OptimizedImage({
  src,
  alt,
  className,
  aspectRatio = "16/9",
  priority = false,
  overlay = "none",
  rounded = "lg",
  objectFit = "cover",
  onClick,
  width,
  height,
  fetchPriority = "auto",
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px",
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const aspectRatioClass = {
    "16/9": "aspect-video",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-square",
    "3/4": "aspect-[3/4]",
    "21/9": "aspect-[21/9]",
  }[aspectRatio];

  const roundedClass = {
    none: "",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  }[rounded];

  const overlayClass = {
    none: "",
    light: "after:absolute after:inset-0 after:bg-white/20",
    dark: "after:absolute after:inset-0 after:bg-black/30",
    gradient: "after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/60 after:via-black/20 after:to-transparent",
  }[overlay];

  return (
    <div
      ref={imgRef}
      className={cn(
        "relative overflow-hidden bg-muted",
        aspectRatioClass,
        roundedClass,
        overlayClass,
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {/* Placeholder skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}

      {/* Image */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          // @ts-ignore - fetchpriority is valid HTML attribute
          fetchpriority={priority ? "high" : fetchPriority}
          onLoad={() => setIsLoaded(true)}
          className={cn(
            "absolute inset-0 w-full h-full transition-opacity duration-500",
            objectFit === "cover" && "object-cover",
            objectFit === "contain" && "object-contain",
            objectFit === "fill" && "object-fill",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
        />
      )}
    </div>
  );
}

// Specialized components for common use cases
export function HeroImage({
  src,
  alt,
  className,
  overlay = "gradient",
}: Omit<OptimizedImageProps, "aspectRatio" | "priority" | "overlay"> & { overlay?: OptimizedImageProps["overlay"] }) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      aspectRatio="21/9"
      priority={true}
      overlay={overlay}
      rounded="none"
      className={className}
    />
  );
}

export function CardImage({
  src,
  alt,
  className,
  aspectRatio = "4/3",
  onClick,
}: Omit<OptimizedImageProps, "priority" | "overlay" | "rounded"> & { aspectRatio?: OptimizedImageProps["aspectRatio"] }) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      aspectRatio={aspectRatio}
      priority={false}
      overlay="none"
      rounded="lg"
      className={cn("group-hover:scale-105 transition-transform duration-300", className)}
      onClick={onClick}
    />
  );
}

export function GalleryImage({
  src,
  alt,
  className,
  onClick,
}: Omit<OptimizedImageProps, "aspectRatio" | "priority" | "overlay" | "rounded">) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      aspectRatio="1/1"
      priority={false}
      overlay="none"
      rounded="lg"
      className={cn("hover:scale-[1.02] transition-transform duration-300", className)}
      onClick={onClick}
    />
  );
}
