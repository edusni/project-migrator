import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/hooks/useLanguage";
import { AuthProvider } from "@/hooks/useAuth";
import { LocaleRouter } from "@/components/LocaleRouter";
import { RedirectHandler } from "@/components/RedirectHandler";
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Planejamento from "./pages/Planejamento";
import Hospedagem from "./pages/Hospedagem";
import Atracoes from "./pages/Atracoes";
import Transporte from "./pages/Transporte";
import Gastronomia from "./pages/Gastronomia";
import Coffeeshops from "./pages/Coffeeshops";
import Arredores from "./pages/Arredores";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import AdminLogin from "./pages/AdminLogin";
import AdminBlog from "./pages/AdminBlog";
import CustoDeVida from "./pages/CustoDeVida";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Locale-aware page wrapper component
const LocalePageRoutes = () => (
  <Routes>
    <Route index element={<Index />} />
    <Route path="sobre" element={<Sobre />} />
    <Route path="planejamento" element={<Planejamento />} />
    <Route path="hospedagem" element={<Hospedagem />} />
    <Route path="atracoes" element={<Atracoes />} />
    <Route path="transporte" element={<Transporte />} />
    <Route path="gastronomia" element={<Gastronomia />} />
    <Route path="coffeeshops" element={<Coffeeshops />} />
    <Route path="arredores" element={<Arredores />} />
    <Route path="blog" element={<Blog />} />
    <Route path="blog/:slug" element={<BlogPost />} />
    <Route path="admin/login" element={<AdminLogin />} />
    <Route path="admin/blog" element={<AdminBlog />} />
    <Route path="custo-vida-amsterdam" element={<CustoDeVida />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
        <BrowserRouter>
          <RedirectHandler />
          <Routes>
            {/* Root redirect to locale-prefixed route */}
            <Route path="/" element={<LocaleRouter />} />
            
            {/* Locale-prefixed routes */}
            <Route path="/pt/*" element={<LocaleRouter />}>
              <Route path="*" element={<LocalePageRoutes />} />
            </Route>
            <Route path="/en/*" element={<LocaleRouter />}>
              <Route path="*" element={<LocalePageRoutes />} />
            </Route>
            <Route path="/nl/*" element={<LocaleRouter />}>
              <Route path="*" element={<LocalePageRoutes />} />
            </Route>
            
            {/* Legacy routes - redirect to PT locale */}
            <Route path="/sobre" element={<Navigate to="/pt/sobre" replace />} />
            <Route path="/planejamento" element={<Navigate to="/pt/planejamento" replace />} />
            <Route path="/hospedagem" element={<Navigate to="/pt/hospedagem" replace />} />
            <Route path="/atracoes" element={<Navigate to="/pt/atracoes" replace />} />
            <Route path="/transporte" element={<Navigate to="/pt/transporte" replace />} />
            <Route path="/gastronomia" element={<Navigate to="/pt/gastronomia" replace />} />
            <Route path="/coffeeshops" element={<Navigate to="/pt/coffeeshops" replace />} />
            <Route path="/arredores" element={<Navigate to="/pt/arredores" replace />} />
            <Route path="/blog" element={<Navigate to="/pt/blog" replace />} />
            <Route path="/custo-vida-amsterdam" element={<Navigate to="/pt/custo-vida-amsterdam" replace />} />
            
            {/* Catch-all 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
