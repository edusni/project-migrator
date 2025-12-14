import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-8 md:p-16">
          {/* Decorative */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          
          <div className="relative max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 mb-6">
              <Mail className="h-8 w-8 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Receba novidades toda semana
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Assine nossa newsletter e receba as melhores dicas sobre Amsterdam 
              diretamente no seu email. Sem spam, prometemos!
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Seu melhor email"
                className="h-12 bg-white/20 border-white/30 text-white placeholder:text-white/60 focus-visible:ring-white"
              />
              <Button 
                size="lg" 
                variant="secondary"
                className="h-12 px-8 shrink-0"
              >
                Inscrever
              </Button>
            </form>
            
            <p className="text-white/60 text-sm mt-4">
              Mais de 2.500 assinantes já fazem parte da comunidade
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
