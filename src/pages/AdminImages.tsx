import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { ArrowLeft, Upload, Image as ImageIcon, Search, RefreshCw } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface SiteImage {
  id: string;
  image_key: string;
  original_path: string;
  storage_path: string | null;
  description: string | null;
  category: string;
  updated_at: string;
}

// Define all site images with their categories
const SITE_IMAGES_CONFIG = [
  // Hero images
  { key: "hero-amsterdam", path: "amsterdam-hero-new.webp", category: "hero", description: "Hero principal da home" },
  { key: "hero-de-pijp", path: "hero-de-pijp.webp", category: "hero", description: "Hero do bairro De Pijp" },
  { key: "hero-jordaan", path: "hero-jordaan.webp", category: "hero", description: "Hero do bairro Jordaan" },
  { key: "hero-binnenstad", path: "hero-binnenstad.webp", category: "hero", description: "Hero do centro (Binnenstad)" },
  { key: "hero-grachtengordel", path: "hero-grachtengordel.webp", category: "hero", description: "Hero do Grachtengordel" },
  { key: "hero-amsterdam-west", path: "hero-amsterdam-west.webp", category: "hero", description: "Hero de Amsterdam West" },
  { key: "hero-amsterdam-oost", path: "hero-amsterdam-oost.webp", category: "hero", description: "Hero de Amsterdam Oost" },
  { key: "hero-amsterdam-noord", path: "hero-amsterdam-noord.webp", category: "hero", description: "Hero de Amsterdam Noord" },
  { key: "hero-amsterdam-zuid", path: "hero-amsterdam-zuid.webp", category: "hero", description: "Hero de Amsterdam Zuid" },
  { key: "hero-nieuw-west", path: "hero-nieuw-west.webp", category: "hero", description: "Hero de Nieuw-West" },
  { key: "hero-zuidoost", path: "hero-zuidoost.webp", category: "hero", description: "Hero de Zuidoost" },
  { key: "hero-weesp", path: "hero-weesp.webp", category: "hero", description: "Hero de Weesp" },
  
  // Neighborhood images
  { key: "neighborhood-de-pijp", path: "neighborhood-de-pijp.webp", category: "neighborhood", description: "Imagem do bairro De Pijp" },
  { key: "neighborhood-museumkwartier", path: "neighborhood-museumkwartier.webp", category: "neighborhood", description: "Imagem do Museumkwartier" },
  { key: "neighborhood-rivierenbuurt", path: "neighborhood-rivierenbuurt.webp", category: "neighborhood", description: "Imagem do Rivierenbuurt" },
  { key: "neighborhood-buitenveldert", path: "neighborhood-buitenveldert.webp", category: "neighborhood", description: "Imagem do Buitenveldert" },
  { key: "neighborhood-zuidas", path: "neighborhood-zuidas.webp", category: "neighborhood", description: "Imagem do Zuidas" },
  
  // Food images
  { key: "food-stroopwafel", path: "food-stroopwafel.png", category: "food", description: "Stroopwafel" },
  { key: "food-bitterballen", path: "food-bitterballen.png", category: "food", description: "Bitterballen" },
  { key: "food-haring", path: "food-haring.png", category: "food", description: "Haring (arenque)" },
  { key: "food-poffertjes", path: "food-poffertjes.png", category: "food", description: "Poffertjes" },
  { key: "food-rijsttafel", path: "food-rijsttafel.png", category: "food", description: "Rijsttafel" },
  { key: "food-febo", path: "food-febo.png", category: "food", description: "FEBO automat" },
  { key: "food-browncafe", path: "food-browncafe.png", category: "food", description: "Brown café" },
  
  // Coffeeshop images
  { key: "coffeeshop-bulldog", path: "coffeeshop-bulldog.png", category: "coffeeshop", description: "The Bulldog" },
  { key: "coffeeshop-dampkring", path: "coffeeshop-dampkring.png", category: "coffeeshop", description: "Dampkring" },
  { key: "coffeeshop-grey-area", path: "coffeeshop-grey-area.png", category: "coffeeshop", description: "Grey Area" },
  { key: "coffeeshop-paradox", path: "coffeeshop-paradox.png", category: "coffeeshop", description: "Paradox" },
  { key: "coffeeshop-siberie", path: "coffeeshop-siberie.png", category: "coffeeshop", description: "Siberie" },
  { key: "coffeeshop-tweede-kamer", path: "coffeeshop-tweede-kamer.png", category: "coffeeshop", description: "Tweede Kamer" },
  { key: "coffeeshop-katsu", path: "coffeeshop-katsu.png", category: "coffeeshop", description: "Katsu" },
  { key: "coffeeshop-ibiza", path: "coffeeshop-ibiza.png", category: "coffeeshop", description: "Ibiza" },
  
  // Day trip images
  { key: "daytrip-zaanse-schans", path: "daytrip-zaanse-schans.png", category: "daytrip", description: "Zaanse Schans" },
  { key: "daytrip-keukenhof", path: "daytrip-keukenhof.png", category: "daytrip", description: "Keukenhof" },
  { key: "daytrip-giethoorn", path: "daytrip-giethoorn.png", category: "daytrip", description: "Giethoorn" },
  { key: "daytrip-rotterdam", path: "daytrip-rotterdam.png", category: "daytrip", description: "Rotterdam" },
  { key: "daytrip-utrecht", path: "daytrip-utrecht.png", category: "daytrip", description: "Utrecht" },
  { key: "daytrip-haarlem", path: "daytrip-haarlem.png", category: "daytrip", description: "Haarlem" },
  { key: "daytrip-delft", path: "daytrip-delft.png", category: "daytrip", description: "Delft" },
  { key: "daytrip-marken", path: "daytrip-marken.png", category: "daytrip", description: "Marken" },
  { key: "daytrip-muiderslot", path: "daytrip-muiderslot.png", category: "daytrip", description: "Muiderslot" },
  
  // Season images
  { key: "season-spring", path: "season-spring.webp", category: "season", description: "Primavera" },
  { key: "season-summer", path: "season-summer.webp", category: "season", description: "Verão" },
  { key: "season-autumn", path: "season-autumn.webp", category: "season", description: "Outono" },
  { key: "season-winter", path: "season-winter.webp", category: "season", description: "Inverno" },
  
  // Other images
  { key: "amsterdam-bikes", path: "amsterdam-bikes.webp", category: "general", description: "Bicicletas em Amsterdam" },
  { key: "westerkerk", path: "westerkerk.webp", category: "general", description: "Westerkerk" },
  { key: "adam-lookout", path: "adam-lookout.webp", category: "general", description: "A'DAM Lookout" },
  { key: "this-is-holland", path: "this-is-holland.webp", category: "general", description: "This is Holland" },
  { key: "eye-film-museum", path: "eye-film-museum.jpg", category: "general", description: "EYE Film Museum" },
  { key: "artis-bloei", path: "artis-bloei.webp", category: "general", description: "Artis Zoo" },
];

const CATEGORIES = [
  { id: "all", label: "Todas" },
  { id: "hero", label: "Heroes" },
  { id: "neighborhood", label: "Bairros" },
  { id: "food", label: "Gastronomia" },
  { id: "coffeeshop", label: "Coffeeshops" },
  { id: "daytrip", label: "Passeios" },
  { id: "season", label: "Estações" },
  { id: "general", label: "Geral" },
];

export default function AdminImages() {
  const navigate = useNavigate();
  const { user, isAdmin, isLoading: authLoading } = useAuth();
  const [images, setImages] = useState<SiteImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [initializing, setInitializing] = useState(false);

  useEffect(() => {
    if (!authLoading && (!user || !isAdmin)) {
      navigate("/pt/admin/login");
    }
  }, [user, isAdmin, authLoading, navigate]);

  useEffect(() => {
    if (user && isAdmin) {
      fetchImages();
    }
  }, [user, isAdmin]);

  const fetchImages = async () => {
    try {
      const { data, error } = await supabase
        .from("site_images")
        .select("*")
        .order("category", { ascending: true })
        .order("image_key", { ascending: true });

      if (error) throw error;
      setImages(data || []);
    } catch (error) {
      console.error("Error fetching images:", error);
      toast.error("Erro ao carregar imagens");
    } finally {
      setLoading(false);
    }
  };

  const initializeImages = async () => {
    setInitializing(true);
    try {
      // Insert all configured images that don't exist yet
      const { data: existing } = await supabase
        .from("site_images")
        .select("image_key");
      
      const existingKeys = new Set(existing?.map(e => e.image_key) || []);
      
      const newImages = SITE_IMAGES_CONFIG
        .filter(img => !existingKeys.has(img.key))
        .map(img => ({
          image_key: img.key,
          original_path: `src/assets/${img.path}`,
          category: img.category,
          description: img.description,
        }));

      if (newImages.length > 0) {
        const { error } = await supabase
          .from("site_images")
          .insert(newImages);

        if (error) throw error;
        toast.success(`${newImages.length} imagens inicializadas!`);
        fetchImages();
      } else {
        toast.info("Todas as imagens já estão cadastradas");
      }
    } catch (error) {
      console.error("Error initializing images:", error);
      toast.error("Erro ao inicializar imagens");
    } finally {
      setInitializing(false);
    }
  };

  const handleUpload = async (imageKey: string, file: File) => {
    setUploading(imageKey);
    try {
      // Upload to storage
      const fileExt = file.name.split(".").pop();
      const filePath = `${imageKey}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("site-images")
        .upload(filePath, file, { upsert: true });

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: urlData } = supabase.storage
        .from("site-images")
        .getPublicUrl(filePath);

      // Update database
      const { error: updateError } = await supabase
        .from("site_images")
        .update({ storage_path: urlData.publicUrl })
        .eq("image_key", imageKey);

      if (updateError) throw updateError;

      toast.success("Imagem atualizada com sucesso!");
      fetchImages();
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Erro ao fazer upload da imagem");
    } finally {
      setUploading(null);
    }
  };

  const getImageUrl = (image: SiteImage) => {
    if (image.storage_path) {
      return image.storage_path;
    }
    // Try to load from assets (this is a fallback for display in admin)
    const filename = image.original_path.replace("src/assets/", "");
    return `/src/assets/${filename}`;
  };

  const filteredImages = images.filter(img => {
    const matchesSearch = img.image_key.toLowerCase().includes(searchTerm.toLowerCase()) ||
      img.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || img.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/20" />
          <div className="h-4 w-32 bg-muted rounded" />
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead 
        title="Admin Imagens | Amsterdu"
        description="Admin image management page"
        noindex={true}
      />
      <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate("/pt/admin/blog")}
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-heading font-bold">Gerenciar Imagens</h1>
                <p className="text-sm text-muted-foreground">
                  Atualize as imagens do site
                </p>
              </div>
            </div>
            <Button
              onClick={initializeImages}
              disabled={initializing}
              variant="outline"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${initializing ? "animate-spin" : ""}`} />
              Inicializar Catálogo
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Buscar imagens..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <Tabs value={activeCategory} onValueChange={setActiveCategory}>
          <TabsList className="mb-6 flex-wrap h-auto gap-1">
            {CATEGORIES.map(cat => (
              <TabsTrigger key={cat.id} value={cat.id} className="text-sm">
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeCategory}>
            {filteredImages.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center">
                  <ImageIcon className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">
                    {images.length === 0 
                      ? "Nenhuma imagem cadastrada. Clique em 'Inicializar Catálogo' para começar."
                      : "Nenhuma imagem encontrada com os filtros atuais."
                    }
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredImages.map((image) => (
                  <Card key={image.id} className="overflow-hidden">
                    <div className="aspect-video bg-muted relative">
                      <img
                        src={getImageUrl(image)}
                        alt={image.description || image.image_key}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/placeholder.svg";
                        }}
                      />
                      {image.storage_path && (
                        <Badge className="absolute top-2 right-2 bg-green-500">
                          Atualizada
                        </Badge>
                      )}
                    </div>
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-sm font-medium">
                        {image.description || image.image_key}
                      </CardTitle>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {image.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {image.image_key}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <Label
                        htmlFor={`upload-${image.id}`}
                        className="cursor-pointer"
                      >
                        <div className="flex items-center justify-center gap-2 py-2 px-4 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                          {uploading === image.image_key ? (
                            <>
                              <RefreshCw className="w-4 h-4 animate-spin" />
                              <span>Enviando...</span>
                            </>
                          ) : (
                            <>
                              <Upload className="w-4 h-4" />
                              <span>Trocar Imagem</span>
                            </>
                          )}
                        </div>
                        <Input
                          id={`upload-${image.id}`}
                          type="file"
                          accept="image/*"
                          className="hidden"
                          disabled={uploading !== null}
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              handleUpload(image.image_key, file);
                            }
                          }}
                        />
                      </Label>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>
    </div>
    </>
  );
}
