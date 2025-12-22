import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/hooks/useLanguage";
import { AuthProvider } from "@/hooks/useAuth";
import { LocaleRouter } from "@/components/LocaleRouter";
import { ScrollToTopOnNavigate } from "@/components/ScrollToTopOnNavigate";
import { lazy, Suspense } from "react";

// Lazy load all pages for code splitting
const Index = lazy(() => import("./pages/Index"));
const Sobre = lazy(() => import("./pages/Sobre"));
const Planejamento = lazy(() => import("./pages/Planejamento"));
const Hospedagem = lazy(() => import("./pages/Hospedagem"));
const Atracoes = lazy(() => import("./pages/Atracoes"));
const Transporte = lazy(() => import("./pages/Transporte"));
const Gastronomia = lazy(() => import("./pages/Gastronomia"));
const Coffeeshops = lazy(() => import("./pages/Coffeeshops"));
const Arredores = lazy(() => import("./pages/Arredores"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const AdminLogin = lazy(() => import("./pages/AdminLogin"));
const AdminBlog = lazy(() => import("./pages/AdminBlog"));
const CustoDeVida = lazy(() => import("./pages/CustoDeVida"));
const DePijp = lazy(() => import("./pages/DePijp"));
const Jordaan = lazy(() => import("./pages/Jordaan"));
const Binnenstad = lazy(() => import("./pages/Binnenstad"));
const Grachtengordel = lazy(() => import("./pages/Grachtengordel"));
const AmsterdamWest = lazy(() => import("./pages/AmsterdamWest"));
const AmsterdamOost = lazy(() => import("./pages/AmsterdamOost"));
const AmsterdamNoord = lazy(() => import("./pages/AmsterdamNoord"));
const AmsterdamZuid = lazy(() => import("./pages/AmsterdamZuid"));
const NieuwWest = lazy(() => import("./pages/NieuwWest"));
const Zuidoost = lazy(() => import("./pages/Zuidoost"));
const Weesp = lazy(() => import("./pages/Weesp"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="animate-pulse flex flex-col items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-primary/20" />
      <div className="h-4 w-32 bg-muted rounded" />
    </div>
  </div>
);

// Locale-aware page wrapper component with Suspense
const LocalePageRoutes = () => (
  <Suspense fallback={<PageLoader />}>
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
      <Route path="de-pijp" element={<DePijp />} />
      <Route path="jordaan" element={<Jordaan />} />
      <Route path="binnenstad" element={<Binnenstad />} />
      <Route path="grachtengordel" element={<Grachtengordel />} />
      <Route path="amsterdam-west" element={<AmsterdamWest />} />
      <Route path="amsterdam-oost" element={<AmsterdamOost />} />
      <Route path="amsterdam-noord" element={<AmsterdamNoord />} />
      <Route path="amsterdam-zuid" element={<AmsterdamZuid />} />
      <Route path="nieuw-west" element={<NieuwWest />} />
      <Route path="zuidoost" element={<Zuidoost />} />
      <Route path="weesp" element={<Weesp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
        <BrowserRouter>
          <ScrollToTopOnNavigate />
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
            <Route path="/de-pijp" element={<Navigate to="/pt/de-pijp" replace />} />
            <Route path="/jordaan" element={<Navigate to="/pt/jordaan" replace />} />
            <Route path="/binnenstad" element={<Navigate to="/pt/binnenstad" replace />} />
            <Route path="/grachtengordel" element={<Navigate to="/pt/grachtengordel" replace />} />
            <Route path="/amsterdam-west" element={<Navigate to="/pt/amsterdam-west" replace />} />
            <Route path="/amsterdam-oost" element={<Navigate to="/pt/amsterdam-oost" replace />} />
            <Route path="/amsterdam-noord" element={<Navigate to="/pt/amsterdam-noord" replace />} />
            <Route path="/amsterdam-zuid" element={<Navigate to="/pt/amsterdam-zuid" replace />} />
            <Route path="/nieuw-west" element={<Navigate to="/pt/nieuw-west" replace />} />
            <Route path="/zuidoost" element={<Navigate to="/pt/zuidoost" replace />} />
            <Route path="/weesp" element={<Navigate to="/pt/weesp" replace />} />
            
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
