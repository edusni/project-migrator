import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight } from "lucide-react";

const featuredPosts = [
  {
    id: 1,
    title: "Guia definitivo: Como alugar uma casa em Amsterdam",
    excerpt: "Tudo que você precisa saber sobre o mercado imobiliário holandês, desde a busca até a assinatura do contrato.",
    category: "Moradia",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&h=500&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "Os 10 melhores cafés escondidos da cidade",
    excerpt: "Descubra os cafés mais charmosos que só os locais conhecem.",
    category: "Gastronomia",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&h=500&fit=crop",
  },
  {
    id: 3,
    title: "Ciclismo em Amsterdam: Regras e dicas essenciais",
    excerpt: "Aprenda a pedalar como um verdadeiro holandês e evite multas.",
    category: "Lifestyle",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop",
  },
  {
    id: 4,
    title: "Museus imperdíveis além do Van Gogh",
    excerpt: "Um tour pelos museus menos conhecidos mas igualmente fascinantes.",
    category: "Cultura",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?w=800&h=500&fit=crop",
  },
];

export function FeaturedPosts() {
  const mainPost = featuredPosts[0];
  const sidePosts = featuredPosts.slice(1);

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-8">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Artigos em Destaque</h2>
            <p className="text-muted-foreground">As histórias mais lidas da semana</p>
          </div>
          <a 
            href="#" 
            className="hidden md:flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            Ver todos
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Main Featured Post */}
          <Card className="group overflow-hidden border-0 shadow-card">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={mainPost.image}
                alt={mainPost.title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-card">
                <Badge className="mb-3 bg-primary text-primary-foreground">
                  {mainPost.category}
                </Badge>
                <h3 className="text-2xl font-bold mb-2 text-white">{mainPost.title}</h3>
                <p className="text-white/80 mb-3 line-clamp-2">{mainPost.excerpt}</p>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <Clock className="h-4 w-4" />
                  {mainPost.readTime} de leitura
                </div>
              </div>
            </div>
          </Card>

          {/* Side Posts */}
          <div className="flex flex-col gap-4">
            {sidePosts.map((post) => (
              <Card 
                key={post.id} 
                className="group flex overflow-hidden border-0 shadow-soft hover:shadow-card transition-shadow"
              >
                <div className="relative w-32 md:w-40 shrink-0 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="flex flex-col justify-center p-4">
                  <Badge variant="secondary" className="w-fit mb-2 text-xs">
                    {post.category}
                  </Badge>
                  <h3 className="font-semibold mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
