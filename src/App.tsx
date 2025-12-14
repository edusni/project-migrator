import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Planejamento from "./pages/Planejamento";
import Hospedagem from "./pages/Hospedagem";
import Atracoes from "./pages/Atracoes";
import Transporte from "./pages/Transporte";
import Gastronomia from "./pages/Gastronomia";
import Coffeeshops from "./pages/Coffeeshops";
import Arredores from "./pages/Arredores";
import Galeria from "./pages/Galeria";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/planejamento" element={<Planejamento />} />
          <Route path="/hospedagem" element={<Hospedagem />} />
          <Route path="/atracoes" element={<Atracoes />} />
          <Route path="/transporte" element={<Transporte />} />
          <Route path="/gastronomia" element={<Gastronomia />} />
          <Route path="/coffeeshops" element={<Coffeeshops />} />
          <Route path="/arredores" element={<Arredores />} />
          <Route path="/galeria" element={<Galeria />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
