import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { User, Calendar, Hotel, Star, Train, UtensilsCrossed, Leaf, MapPin, Camera } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const guideItems = [
  {
    icon: User,
    titleKey: "guide.whoIsDu",
    descKey: "guide.whoIsDuDesc",
    link: "/sobre",
    emoji: "👋"
  },
  {
    icon: Calendar,
    titleKey: "guide.planning",
    descKey: "guide.planningDesc",
    link: "/planejamento",
    emoji: "📅"
  },
  {
    icon: Hotel,
    titleKey: "guide.whereToStay",
    descKey: "guide.whereToStayDesc",
    link: "/hospedagem",
    emoji: "🏨"
  },
  {
    icon: Star,
    titleKey: "guide.whatToDo",
    descKey: "guide.whatToDoDesc",
    link: "/atracoes",
    emoji: "🎨"
  },
  {
    icon: Train,
    titleKey: "guide.transport",
    descKey: "guide.transportDesc",
    link: "/transporte",
    emoji: "🚴"
  },
  {
    icon: UtensilsCrossed,
    titleKey: "guide.food",
    descKey: "guide.foodDesc",
    link: "/gastronomia",
    emoji: "🍽️"
  },
];

export function ExploreGuide() {
  const { t, language } = useLanguage();

  const items = language === "pt" 
    ? [
        { emoji: "👋", title: "Quem é o Du?", desc: "A história por trás do guia mais honesto de Amsterdam e a minha missão.", link: "/sobre" },
        { emoji: "📅", title: "Planeje (Sem Perrengue)", desc: "Quando ir, quanto levar, o que precisa de visto e roteiros que funcionam.", link: "/planejamento" },
        { emoji: "🏨", title: "Onde Ficar (A Real)", desc: "Análise honesta dos bairros: qual é cilada e qual vale o seu dinheiro.", link: "/hospedagem" },
        { emoji: "🎨", title: "O Que Fazer (O Essencial)", desc: "Museus imperdíveis, hofjes secretos e o que fazer além do óbvio.", link: "/atracoes" },
        { emoji: "🚴", title: "Como se Locomover (Sem Multa)", desc: "O 'pulo do gato' do OVpay, como não ser multado de bike e as balsas 24/7.", link: "/transporte" },
        { emoji: "🍽️", title: "Onde Comer (Sem Fila)", desc: "O stroopwafel certo, o rijsttafel autêntico e os brown cafés históricos.", link: "/gastronomia" },
      ]
    : [
        { emoji: "👋", title: "Who is Du?", desc: "The story behind Amsterdam's most honest guide and my mission.", link: "/sobre" },
        { emoji: "📅", title: "Planning (No Stress)", desc: "When to go, how much to bring, visa requirements and itineraries that work.", link: "/planejamento" },
        { emoji: "🏨", title: "Where to Stay (The Real Deal)", desc: "Honest neighborhood analysis: which are traps and which are worth your money.", link: "/hospedagem" },
        { emoji: "🎨", title: "What to Do (The Essentials)", desc: "Must-see museums, secret hofjes and what to do beyond the obvious.", link: "/atracoes" },
        { emoji: "🚴", title: "Getting Around (No Fines)", desc: "The OVpay trick, how not to get fined on a bike and 24/7 ferries.", link: "/transporte" },
        { emoji: "🍽️", title: "Where to Eat (No Lines)", desc: "The right stroopwafel, authentic rijsttafel and historic brown cafés.", link: "/gastronomia" },
      ];

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            {language === "pt" ? "Explore o Guia" : "Explore the Guide"}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {language === "pt" 
              ? "Tudo que você precisa saber para uma viagem perfeita" 
              : "Everything you need to know for a perfect trip"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <Link key={item.link} to={item.link}>
              <Card className="group h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-amsterdam-orange/30">
                <CardContent className="p-6">
                  <span className="text-4xl mb-4 block">{item.emoji}</span>
                  <h3 className="font-heading font-bold text-xl mb-2 group-hover:text-amsterdam-orange transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
