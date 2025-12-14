import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-accent/50 to-background py-20 md:py-32">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="container relative px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block mb-4 px-4 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full">
            🇳🇱 Seu guia completo sobre Amsterdam
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Descubra a magia de{" "}
            <span className="text-primary">Amsterdam</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Dicas locais, roteiros exclusivos, cultura holandesa e tudo que você precisa 
            saber para viver ou visitar a cidade mais encantadora da Europa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              Explorar artigos
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Sobre o blog
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
