import { lazy, Suspense } from "react";
import { LazySection } from "@/components/ui/lazy-section";

// Lazy load heavy map components
const AttractionsMapLazy = lazy(() => 
  import("@/components/AttractionsMap").then(module => ({ default: module.AttractionsMap }))
);

const DayTripsMapLazy = lazy(() => import("@/components/DayTripsMap"));

const CoffeeshopExplorerLazy = lazy(() => import("@/components/CoffeeshopExplorer"));

// Map loading skeleton
const MapSkeleton = () => (
  <div className="w-full h-[400px] bg-muted/50 rounded-lg flex items-center justify-center animate-pulse">
    <div className="flex flex-col items-center gap-3">
      <div className="w-12 h-12 rounded-full bg-muted" />
      <div className="h-4 w-32 bg-muted rounded" />
      <div className="h-3 w-24 bg-muted/70 rounded" />
    </div>
  </div>
);

// Calculator loading skeleton
const CalculatorSkeleton = () => (
  <div className="w-full p-6 bg-muted/30 rounded-lg animate-pulse">
    <div className="space-y-4">
      <div className="h-6 w-48 bg-muted rounded" />
      <div className="grid grid-cols-2 gap-4">
        <div className="h-10 bg-muted rounded" />
        <div className="h-10 bg-muted rounded" />
      </div>
      <div className="h-10 bg-muted rounded" />
      <div className="h-32 bg-muted rounded" />
    </div>
  </div>
);

// Wrapped components with lazy loading
interface LazyAttractionsMapProps {
  attractions: any[];
}

export function LazyAttractionsMap({ attractions }: LazyAttractionsMapProps) {
  return (
    <LazySection 
      rootMargin="500px" 
      minHeight="400px"
      fallback={<MapSkeleton />}
    >
      <Suspense fallback={<MapSkeleton />}>
        <AttractionsMapLazy attractions={attractions} />
      </Suspense>
    </LazySection>
  );
}

export function LazyDayTripsMap() {
  return (
    <LazySection 
      rootMargin="500px" 
      minHeight="400px"
      fallback={<MapSkeleton />}
    >
      <Suspense fallback={<MapSkeleton />}>
        <DayTripsMapLazy />
      </Suspense>
    </LazySection>
  );
}

export function LazyCoffeeshopExplorer() {
  return (
    <LazySection 
      rootMargin="400px" 
      minHeight="500px"
      fallback={<CalculatorSkeleton />}
    >
      <Suspense fallback={<CalculatorSkeleton />}>
        <CoffeeshopExplorerLazy />
      </Suspense>
    </LazySection>
  );
}

// Export skeletons for use in other components
export { MapSkeleton, CalculatorSkeleton };
