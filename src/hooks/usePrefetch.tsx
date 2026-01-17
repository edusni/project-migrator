import { useEffect, useCallback } from "react";

// Lazy import functions for prefetching
const routeImports = {
  planejamento: () => import("@/pages/Planejamento"),
  hospedagem: () => import("@/pages/Hospedagem"),
  atracoes: () => import("@/pages/Atracoes"),
  transporte: () => import("@/pages/Transporte"),
  gastronomia: () => import("@/pages/Gastronomia"),
  coffeeshops: () => import("@/pages/Coffeeshops"),
  arredores: () => import("@/pages/Arredores"),
  blog: () => import("@/pages/Blog"),
  sobre: () => import("@/pages/Sobre"),
  "de-pijp": () => import("@/pages/DePijp"),
  jordaan: () => import("@/pages/Jordaan"),
  binnenstad: () => import("@/pages/Binnenstad"),
  grachtengordel: () => import("@/pages/Grachtengordel"),
  "amsterdam-west": () => import("@/pages/AmsterdamWest"),
  "amsterdam-oost": () => import("@/pages/AmsterdamOost"),
  "amsterdam-noord": () => import("@/pages/AmsterdamNoord"),
  "amsterdam-zuid": () => import("@/pages/AmsterdamZuid"),
  "nieuw-west": () => import("@/pages/NieuwWest"),
  "zuidoost": () => import("@/pages/Zuidoost"),
  "weesp": () => import("@/pages/Weesp"),
} as const;

type RouteKey = keyof typeof routeImports;

// Track prefetched routes to avoid duplicate requests
const prefetchedRoutes = new Set<RouteKey>();

export function usePrefetch() {
  // Prefetch a specific route
  const prefetchRoute = useCallback((route: RouteKey) => {
    if (prefetchedRoutes.has(route)) return;
    
    prefetchedRoutes.add(route);
    routeImports[route]();
  }, []);

  // Prefetch multiple routes
  const prefetchRoutes = useCallback((routes: RouteKey[]) => {
    routes.forEach(prefetchRoute);
  }, [prefetchRoute]);

  // Get onMouseEnter handler for Link components
  const getPrefetchProps = useCallback((route: RouteKey) => ({
    onMouseEnter: () => prefetchRoute(route),
    onFocus: () => prefetchRoute(route),
  }), [prefetchRoute]);

  return { prefetchRoute, prefetchRoutes, getPrefetchProps };
}

// Prefetch critical routes ONLY on user interaction, not automatically
// This prevents loading unused JavaScript on initial page load
export function usePrefetchCriticalRoutes() {
  useEffect(() => {
    // Only prefetch after significant user interaction to avoid impacting performance metrics
    // We no longer auto-prefetch - instead rely on hover/focus prefetching from usePrefetch hook
    let hasInteracted = false;
    
    const handleInteraction = () => {
      if (hasInteracted) return;
      hasInteracted = true;
      
      // Remove listeners after first interaction
      cleanup();
      
      // Wait for idle time before prefetching
      const prefetchCritical = () => {
        const criticalRoutes: RouteKey[] = ["planejamento", "hospedagem", "atracoes"];
        
        // Stagger prefetching with longer delays
        criticalRoutes.forEach((route, index) => {
          setTimeout(() => {
            if (!prefetchedRoutes.has(route)) {
              prefetchedRoutes.add(route);
              routeImports[route]();
            }
          }, index * 1000); // 1 second between each prefetch
        });
      };
      
      // Only prefetch during idle time, with a 10 second timeout
      if ("requestIdleCallback" in window) {
        (window as any).requestIdleCallback(prefetchCritical, { timeout: 10000 });
      } else {
        setTimeout(prefetchCritical, 5000);
      }
    };
    
    // Listen for user scroll (indicates they're engaged with the page)
    const events = ['scroll', 'touchstart'] as const;
    events.forEach(event => {
      window.addEventListener(event, handleInteraction, { once: true, passive: true });
    });
    
    const cleanup = () => {
      events.forEach(event => {
        window.removeEventListener(event, handleInteraction);
      });
    };
    
    return cleanup;
  }, []);
}
