import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

// Register service worker after page is fully loaded to avoid blocking TTI
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    // Delay SW registration to after initial render and interactivity
    setTimeout(async () => {
      try {
        // First, clean up any stale/broken service workers
        const registrations = await navigator.serviceWorker.getRegistrations();
        for (const registration of registrations) {
          // Check if SW is in a broken state (no active/waiting/installing worker)
          if (!registration.active && !registration.waiting && !registration.installing) {
            await registration.unregister();
          }
        }
        
        // Now register the service worker
        await navigator.serviceWorker.register("/sw.js", { scope: "/" });
      } catch {
        // SW registration failed silently - that's okay for performance
        // Try to clean up any broken registrations
        try {
          const registrations = await navigator.serviceWorker.getRegistrations();
          for (const registration of registrations) {
            await registration.unregister();
          }
        } catch {
          // Cleanup also failed, nothing more we can do
        }
      }
    }, 3000); // 3 second delay after load
  });
}
