import { useLanguage } from "@/hooks/useLanguage";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star } from "lucide-react";

// Import coffeeshop images
import bulldogImg from "@/assets/coffeeshop-bulldog.png";
import greyAreaImg from "@/assets/coffeeshop-grey-area.png";
import dampkringImg from "@/assets/coffeeshop-dampkring.png";
import katsuImg from "@/assets/coffeeshop-katsu.png";
import paradoxImg from "@/assets/coffeeshop-paradox.png";
import siberieImg from "@/assets/coffeeshop-siberie.png";
import tweedeKamerImg from "@/assets/coffeeshop-tweede-kamer.png";
import ibizaImg from "@/assets/coffeeshop-ibiza.png";
import amsterdamImg from "@/assets/coffeeshop-amsterdam.png";

interface FamousCoffeeshop {
  id: string;
  name: string;
  image: string;
  neighborhood: { pt: string; en: string; nl: string };
  tagline: { pt: string; en: string; nl: string };
  highlight: { pt: string; en: string; nl: string };
  profile: "beginner" | "chill" | "hype" | "premium";
}

const famousCoffeeshops: FamousCoffeeshop[] = [
  {
    id: "bulldog",
    name: "The Bulldog",
    image: bulldogImg,
    neighborhood: { pt: "Centrum", en: "Centrum", nl: "Centrum" },
    tagline: { pt: "O primeiro império", en: "The first empire", nl: "Het eerste imperium" },
    highlight: { pt: "Histórico desde 1975, antiga delegacia transformada em ícone", en: "Historic since 1975, former police station turned icon", nl: "Historisch sinds 1975, voormalig politiebureau werd icoon" },
    profile: "hype"
  },
  {
    id: "grey-area",
    name: "Grey Area",
    image: greyAreaImg,
    neighborhood: { pt: "Centrum", en: "Centrum", nl: "Centrum" },
    tagline: { pt: "Culto & exclusivo", en: "Cult & exclusive", nl: "Cult & exclusief" },
    highlight: { pt: "Pequeno, famoso por strains americanas e filas longas", en: "Small, famous for American strains and long queues", nl: "Klein, bekend om Amerikaanse strains en lange rijen" },
    profile: "premium"
  },
  {
    id: "dampkring",
    name: "Dampkring",
    image: dampkringImg,
    neighborhood: { pt: "Centrum", en: "Centrum", nl: "Centrum" },
    tagline: { pt: "Cinematográfico", en: "Cinematic", nl: "Cinematografisch" },
    highlight: { pt: "Apareceu no filme Ocean's 12, hash premium", en: "Featured in Ocean's 12 movie, premium hash", nl: "Te zien in Ocean's 12 film, premium hasj" },
    profile: "premium"
  },
  {
    id: "katsu",
    name: "Katsu",
    image: katsuImg,
    neighborhood: { pt: "De Pijp", en: "De Pijp", nl: "De Pijp" },
    tagline: { pt: "Favorito dos locais", en: "Local favorite", nl: "Favoriet bij locals" },
    highlight: { pt: "Identidade artística, comunidade autêntica", en: "Artistic identity, authentic community", nl: "Artistieke identiteit, authentieke gemeenschap" },
    profile: "chill"
  },
  {
    id: "paradox",
    name: "Paradox",
    image: paradoxImg,
    neighborhood: { pt: "Jordaan", en: "Jordaan", nl: "Jordaan" },
    tagline: { pt: "Simples e direto", en: "Simple and straightforward", nl: "Simpel en direct" },
    highlight: { pt: "Famoso pelos space cakes potentes", en: "Famous for potent space cakes", nl: "Bekend om krachtige space cakes" },
    profile: "beginner"
  },
  {
    id: "siberie",
    name: "Siberië",
    image: siberieImg,
    neighborhood: { pt: "Jordaan", en: "Jordaan", nl: "Jordaan" },
    tagline: { pt: "Arte & conversa", en: "Art & conversation", nl: "Kunst & gesprek" },
    highlight: { pt: "Mistura de coffeeshop com galeria", en: "Mix of coffeeshop and gallery", nl: "Mix van coffeeshop en galerie" },
    profile: "chill"
  },
  {
    id: "tweede-kamer",
    name: "Tweede Kamer",
    image: tweedeKamerImg,
    neighborhood: { pt: "Jordaan", en: "Jordaan", nl: "Jordaan" },
    tagline: { pt: "Clássico intimista", en: "Intimate classic", nl: "Intieme klassieker" },
    highlight: { pt: "Ambiente acolhedor e menu bem curado", en: "Cozy atmosphere and well-curated menu", nl: "Gezellige sfeer en goed samengesteld menu" },
    profile: "chill"
  },
  {
    id: "ibiza",
    name: "Coffeeshop IBIZA",
    image: ibizaImg,
    neighborhood: { pt: "De Pijp", en: "De Pijp", nl: "De Pijp" },
    tagline: { pt: "O maior de Amsterdam", en: "The biggest in Amsterdam", nl: "De grootste van Amsterdam" },
    highlight: { pt: "Dois andares, espaço amplo", en: "Two floors, spacious", nl: "Twee verdiepingen, ruim" },
    profile: "hype"
  },
  {
    id: "amsterdam",
    name: "Coffeeshop Amsterdam",
    image: amsterdamImg,
    neighborhood: { pt: "Centrum", en: "Centrum", nl: "Centrum" },
    tagline: { pt: "Bom para iniciantes", en: "Good for beginners", nl: "Goed voor beginners" },
    highlight: { pt: "Atendimento acolhedor, menu acessível", en: "Welcoming service, accessible menu", nl: "Gastvrije service, toegankelijk menu" },
    profile: "beginner"
  }
];

const profileStyles = {
  beginner: "bg-emerald-500/90 text-white",
  chill: "bg-sky-500/90 text-white",
  hype: "bg-fuchsia-500/90 text-white",
  premium: "bg-amber-500/90 text-white"
};

const profileLabels = {
  beginner: { pt: "Iniciantes", en: "Beginners", nl: "Beginners" },
  chill: { pt: "Relaxar", en: "Chill", nl: "Relaxed" },
  hype: { pt: "Hype", en: "Hype", nl: "Hype" },
  premium: { pt: "Premium", en: "Premium", nl: "Premium" }
};

export function FamousGallerySection() {
  const { language } = useLanguage();

  const content = language === "nl" ? {
    title: "Galerij: Beroemde Coffeeshops van Amsterdam",
    subtitle: "Ontdek visueel de meest iconische etablissementen van de stad"
  } : language === "pt" ? {
    title: "Galeria: Coffeeshops Famosos de Amsterdam",
    subtitle: "Conheça visualmente os estabelecimentos mais icônicos da cidade"
  } : {
    title: "Gallery: Famous Amsterdam Coffeeshops",
    subtitle: "Visually explore the city's most iconic establishments"
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            {content.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {famousCoffeeshops.map((shop) => (
            <Card 
              key={shop.id} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border/50"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={shop.image}
                  alt={shop.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                <Badge 
                  className={`absolute top-3 right-3 ${profileStyles[shop.profile]} border-0 text-xs font-medium`}
                >
                  {profileLabels[shop.profile][language]}
                </Badge>

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-heading font-bold text-white mb-1 drop-shadow-lg">
                    {shop.name}
                  </h3>
                  <p className="text-white/90 text-sm italic drop-shadow">
                    {shop.tagline[language]}
                  </p>
                </div>
              </div>

              <CardContent className="p-4">
                <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-2">
                  <MapPin className="w-4 h-4 text-amsterdam-orange" />
                  <span>{shop.neighborhood[language]}</span>
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  {shop.highlight[language]}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
