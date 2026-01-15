import { useEffect, useCallback } from "react";

export function ServiceWorkerUpdater() {
  const checkForUpdates = useCallback(async () => {
    if ("serviceWorker" in navigator) {
      try {
        const registration = await navigator.serviceWorker.getRegistration();
        if (registration) {
          await registration.update();
          console.log("SW update check completed");
        }
      } catch (error) {
        console.error("SW update check failed:", error);
      }
    }
  }, []);

  useEffect(() => {
    // Check for updates on mount
    checkForUpdates();

    // Check for updates every 30 seconds
    const interval = setInterval(checkForUpdates, 30 * 1000);

    // Listen for SW updates
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        console.log("New SW activated, reloading...");
        window.location.reload();
      });
    }

    return () => clearInterval(interval);
  }, [checkForUpdates]);

  return null;
}
