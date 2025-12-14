import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { ContentCard } from "@/components/ContentCard";
import { User, Heart, MapPin, Camera, Lightbulb, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Sobre = () => {
  return (
    <PageLayout>
      <PageHero
        icon={User}
        title="Quem é o Du?"
        description="Conheça a história por trás do Amsterdu e a paixão por Amsterdam que deu origem a este projeto."
      />

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Intro */}
            <Card className="mb-12 overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-amsterdam-orange to-amsterdam-blue flex items-center justify-center text-6xl">
                    👋
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                      Olá! Eu sou o Du
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Brasileiro apaixonado por Amsterdam, moro na cidade desde 2019 e decidi criar este blog para compartilhar tudo o que aprendi vivendo aqui. Nada de guias genéricos — aqui você encontra a visão de quem realmente vive a cidade.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mission */}
            <div className="grid gap-6 mb-12">
              <h2 className="text-3xl font-heading font-bold text-center mb-4">Por que criei o Amsterdu?</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <ContentCard
                  icon={Target}
                  title="Informação Real"
                  description="Cansei de ver blogs com informações desatualizadas ou copiadas. Aqui você encontra dicas testadas por quem mora na cidade."
                />
                <ContentCard
                  icon={Heart}
                  title="Paixão Genuína"
                  description="Amsterdam me conquistou com seus canais, bicicletas e cultura única. Quero transmitir essa paixão para você."
                />
                <ContentCard
                  icon={Lightbulb}
                  title="Dicas Práticas"
                  description="Desde como usar o transporte público até onde encontrar o melhor stroopwafel — tudo que você precisa saber."
                />
                <ContentCard
                  icon={MapPin}
                  title="Exploração Local"
                  description="Conheço cada cantinho da cidade e os melhores bate-voltas. Vou te levar além dos pontos turísticos."
                />
              </div>
            </div>

            {/* Values */}
            <Card className="bg-gradient-to-br from-amsterdam-blue/5 to-amsterdam-orange/5 border-2 border-amsterdam-orange/20">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8">
                  O que você encontra aqui
                </h2>
                <div className="grid sm:grid-cols-3 gap-6 text-center">
                  <div>
                    <span className="text-4xl mb-4 block">🎯</span>
                    <h3 className="font-bold mb-2">Honestidade</h3>
                    <p className="text-sm text-muted-foreground">Se algo não vale a pena, eu digo. Sem jabá.</p>
                  </div>
                  <div>
                    <span className="text-4xl mb-4 block">🧠</span>
                    <h3 className="font-bold mb-2">Profundidade</h3>
                    <p className="text-sm text-muted-foreground">Contexto cultural e histórico em cada dica.</p>
                  </div>
                  <div>
                    <span className="text-4xl mb-4 block">🗺️</span>
                    <h3 className="font-bold mb-2">Visão Local</h3>
                    <p className="text-sm text-muted-foreground">Segredos que só quem mora aqui conhece.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Sobre;
