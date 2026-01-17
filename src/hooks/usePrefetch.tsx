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

// Prefetch critical routes after page is fully loaded and idle
export function usePrefetchCriticalRoutes() {
  useEffect(() => {
    const prefetchCritical = () => {
      // Prefetch most accessed routes after initial render
      const criticalRoutes: RouteKey[] = ["planejamento", "hospedagem", "atracoes"];
      
      // Stagger prefetching to avoid blocking the main thread
      criticalRoutes.forEach((route, index) => {
        setTimeout(() => {
          if (!prefetchedRoutes.has(route)) {
            prefetchedRoutes.add(route);
            routeImports[route]();
          }
        }, index * 500); // 500ms between each prefetch
      });
    };

    // Delay prefetching significantly to avoid impacting LCP and initial load
    // Wait for page to be fully loaded first
    const startPrefetch = () => {
      if ("requestIdleCallback" in window) {
        (window as any).requestIdleCallback(prefetchCritical, { timeout: 5000 });
      } else {
        setTimeout(prefetchCritical, 3000);
      }
    };

    // Wait 3 seconds after component mount to start prefetching
    const timeoutId = setTimeout(startPrefetch, 3000);
    
    return () => clearTimeout(timeoutId);
  }, []);
}
