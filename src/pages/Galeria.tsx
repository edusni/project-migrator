import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Camera } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const images = [
  { title: "Canais ao Entardecer", category: "Canais", description: "Os famosos canais de Amsterdam banhados pela luz dourada do pôr do sol." },
  { title: "Casas Típicas", category: "Arquitetura", description: "As icônicas casas estreitas e inclinadas ao longo dos canais." },
  { title: "Bicicletas por toda parte", category: "Cultura", description: "A cidade onde as bicicletas reinam absolutas." },
  { title: "Vondelpark na Primavera", category: "Parques", description: "O principal parque da cidade florindo na primavera." },
  { title: "Mercado de Flores", category: "Mercados", description: "O famoso Bloemenmarkt flutuante." },
  { title: "Noite em Jordaan", category: "Bairros", description: "O charme noturno do bairro mais querido de Amsterdam." },
  { title: "Moinhos de Zaanse Schans", category: "Arredores", description: "Os tradicionais moinhos holandeses a poucos minutos da cidade." },
  { title: "Tulipas em Keukenhof", category: "Flores", description: "O espetáculo das tulipas no maior jardim de flores do mundo." },
  { title: "Rijksmuseum", category: "Museus", description: "A majestosa entrada do maior museu da Holanda." },
  { title: "Prinsengracht", category: "Canais", description: "Um dos três canais principais do centro histórico." },
  { title: "Café Marrom Tradicional", category: "Cultura", description: "Interior aconchegante de um autêntico café holandês." },
  { title: "Noord Industrial", category: "Bairros", description: "O lado alternativo e artístico de Amsterdam." },
];

const Galeria = () => {
  return (
    <PageLayout>
      <PageHero
        icon={Camera}
        title="Galeria de Fotos"
        description="Imagens que capturam a essência e a beleza de Amsterdam."
        gradient="from-[#4A4A4A] to-[#2C2C2C]"
      />

      <section className="py-16 md:py-24">
        <div className="container">
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Amsterdam é uma cidade que pede para ser fotografada. Aqui estão alguns dos momentos que capturam sua alma.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-[4/3] bg-gradient-to-br from-amsterdam-blue/20 to-amsterdam-orange/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Camera className="w-12 h-12 text-muted-foreground/30" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white text-sm font-medium">{image.category}</span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-heading font-bold mb-1">{image.title}</h3>
                  <p className="text-sm text-muted-foreground">{image.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Coming Soon Notice */}
          <Card className="mt-12 bg-gradient-to-br from-amsterdam-orange/10 to-amsterdam-blue/10 border-dashed border-2 border-amsterdam-orange/30">
            <CardContent className="p-8 text-center">
              <Camera className="w-12 h-12 text-amsterdam-orange mx-auto mb-4" />
              <h3 className="font-heading font-bold text-xl mb-2">Mais fotos em breve!</h3>
              <p className="text-muted-foreground">
                Estou constantemente atualizando a galeria com novas imagens de Amsterdam e arredores.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </PageLayout>
  );
};

export default Galeria;
