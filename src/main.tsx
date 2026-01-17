import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

// Register service worker after page is fully loaded to avoid blocking TTI
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    // Delay SW registration to after initial render and interactivity
    setTimeout(() => {
      navigator.serviceWorker.register("/sw.js", { scope: "/" }).catch(() => {
        // SW registration failed, that's okay for performance
      });
    }, 3000); // 3 second delay after load
  });
}
