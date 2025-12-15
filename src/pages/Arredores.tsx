import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { MapPin } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import {
  IntroSection,
  QuickPickSection,
  MapSection,
  DestinationTabsSection,
  DestinationsGallerySection,
  TipsSection,
  RankingSection,
  FAQSection
} from "@/components/arredores";
import zaanseSchansImg from "@/assets/daytrip-zaanse-schans.png";

const Arredores = () => {
  const { language } = useLanguage();

  const content = language === "pt" ? {
    title: "Bate-voltas de Amsterdam",
    description: "A Holanda é pequena, os trens funcionam bem e dá para sair de Amsterdam e voltar no mesmo dia com conforto",
    intro: "A diferença entre um bate-volta incrível e um bate-volta frustrante quase sempre é esta: escolher destinos pelo tempo de deslocamento real (porta a porta) e pela lotação esperada.",
    quickPick: {
      title: "Como Escolher em 30 Segundos",
      items: [
        { condition: "Primeira vez na Holanda e pouco tempo", dest: "Haarlem ou Utrecht", reason: "fáceis, rápidas, bonitas" },
        { condition: "Primavera (março a maio)", dest: "Keukenhof", reason: "dia de semana, cedo" },
        { condition: "Arquitetura e cidade moderna", dest: "Rotterdam", reason: "" },
        { condition: "Holanda rural sem excursão", dest: "Waterland de bike", reason: "" },
        { condition: "Cartão-postal 'moinhos clássicos'", dest: "Zaanse Schans", reason: "com estratégia (atenção às mudanças 2026)" }
      ]
    },
    tabs: {
      classics: "Clássicos",
      miniAms: "Mini-Amsterdams",
      modern: "Moderno",
      bike: "De Bike"
    },
    classics: {
      title: "Os Clássicos",
      subtitle: "Destinos famosos, muito procurados. Aqui, horário é tudo.",
      items: [
        {
          name: "Zaanse Schans",
          emoji: "🏭",
          subtitle: "Moinhos e Vila Histórica",
          time: "20 min de trem",
          what: "Uma área com moinhos históricos, casas tradicionais e pequenas atrações. Ótima para fotos e para ver 'a Holanda do imaginário'.",
          reality: "Tende a ficar cheia no meio do dia por causa de excursões. O principal risco é ir no horário errado, encarar multidão e sair achando 'superestimado'.",
          strategy: [
            "Chegue bem cedo (antes do fluxo de excursões) ou vá no fim da tarde",
            "Se o objetivo é foto e caminhada, priorize o horário",
            "Se o objetivo é entrar em atrações, reserve mais tempo"
          ],
          warning2026: "Há plano municipal para implementar controle de acesso com ingresso pago (citado como €17,50 para adulto). Confira as regras vigentes antes de ir.",
          mustSee: true
        },
        {
          name: "Keukenhof",
          emoji: "🌷",
          subtitle: "Tulipas e Jardins",
          time: "1h de transporte",
          what: "Um parque de jardins com milhões de flores plantadas e paisagismo pensado para visitação.",
          seasonal: "É SAZONAL! Para 2026: abertura de 19 de março a 10 de maio. Ingressos disponíveis a partir de 15 de outubro (venda por dia, capacidade limitada).",
          strategy: [
            "Evite finais de semana",
            "Chegue na abertura e priorize dias úteis",
            "Se quiser 'campos de tulipas' (listrados), isso é fora do parque"
          ],
          practical: [
            "Opera cashless (pagamento sem dinheiro)",
            "Estacionamento €9 comprado online",
            "Combi-tickets (entrada + transporte) abrem venda em meados de fevereiro"
          ],
          mustSee: true
        },
        {
          name: "Giethoorn",
          emoji: "🚣",
          subtitle: "A 'Veneza do Norte'",
          time: "2h de transporte",
          what: "Uma vila com canais, pontes e casas bem cenográficas.",
          reality: "É linda, mas costuma consumir o dia por causa do deslocamento e, no verão, pode ficar congestionada. Funciona melhor para quem tem mais dias na Holanda.",
          alternative: "Se o objetivo são canais bonitos sem deslocamento pesado, Utrecht ou Haarlem entregam muito mais retorno por hora investida.",
          mustSee: false
        }
      ]
    },
    miniAms: {
      title: "Mini-Amsterdams",
      subtitle: "Históricas, fáceis, com menos pressão turística. Aqui o ganho é previsibilidade: bate e volta sem stress.",
      items: [
        {
          name: "Haarlem",
          emoji: "🏛️",
          subtitle: "A Melhor Vizinha",
          time: "15 min de trem",
          why: "Clima de cidade histórica, bonita e tranquila, com deslocamento curto.",
          todo: [
            "Grote Markt e entorno do centro histórico",
            "Um museu (se curte ciência/arte, Haarlem costuma agradar)",
            "Uma cervejaria ou café local para fechar"
          ],
          mustSee: true
        },
        {
          name: "Utrecht",
          emoji: "🎓",
          subtitle: "Canais Diferentes e Vibe Jovem",
          time: "25 min de trem",
          why: "Cidade universitária, viva, com uma configuração de canais que rende uma experiência bem diferente de Amsterdam.",
          todo: [
            "Caminhar pelos canais e sentar em um lugar à beira d'água",
            "Centro histórico e um museu se fizer sentido no ritmo do dia"
          ],
          mustSee: true
        },
        {
          name: "Delft",
          emoji: "🏺",
          subtitle: "Cerâmica e Charme",
          time: "1h de trem",
          why: "Pequena, pitoresca, muito 'fotografável' e fácil de combinar.",
          combo: "Manhã em Delft, tarde em Haia (museu e, se for verão, praia).",
          mustSee: false
        }
      ]
    },
    modern: {
      title: "Moderno e Arrojado",
      subtitle: "Para quem quer a 'anti-Amsterdam'.",
      item: {
        name: "Rotterdam",
        emoji: "🏙️",
        subtitle: "Arquitetura e Cidade do Futuro",
        time: "40 min de trem",
        why: "Se o leitor espera só canais e casas antigas, Rotterdam surpreende. A graça é justamente ser moderna.",
        todo: [
          "Markthal (mercado coberto impressionante)",
          "Área das casas cubo e skyline",
          "Um museu ou mirante, conforme o tempo"
        ]
      }
    },
    bike: {
      title: "De Bike",
      subtitle: "Bate-voltas que parecem viagem. A Holanda é plana, mas vento e clima mudam o jogo.",
      items: [
        {
          name: "Waterland",
          emoji: "🚴",
          subtitle: "Rural, Perto e Silencioso",
          why: "Entrega 'Holanda rural' sem ônibus de excursão e sem gasto de dia inteiro.",
          howTo: [
            "Pegue a balsa para Amsterdam Noord (balsas GVB são gratuitas)",
            "Alugue bike em Noord",
            "Pedale por diques e vilas pequenas, voltando quando cansar"
          ]
        },
        {
          name: "Muiden e Muiderslot",
          emoji: "🏰",
          subtitle: "Castelo de Verdade",
          why: "Bate-volta com cara de 'castelo de verdade', bom para quem quer história sem ir longe.",
          tip: "Cheque horários e ingressos com antecedência, porque castelos e museus têm variação de funcionamento."
        }
      ]
    },
    tips: {
      title: "Dicas Gerais (As que Realmente Evitam Erros)",
      items: [
        { icon: "📅", title: "Dia útil quase sempre ganha", text: "Menos filas, menos excursão, menos estresse." },
        { icon: "⏰", title: "Comece cedo", text: "Você compra 'silêncio' com 1 hora de antecedência." },
        { icon: "🕐", title: "Planeje por tempo útil", text: "1h30 de deslocamento para ir + 1h30 para voltar já come metade do dia." },
        { icon: "💳", title: "Pagamento e transporte", text: "Muita coisa funciona com aproximação (cartão/celular), mas sempre tenha um plano B." }
      ]
    },
    ranking: {
      title: "Ranking Prático (Para Ajudar a Decisão)",
      items: [
        { condition: "Só 1 dia livre", dest: "Haarlem" },
        { condition: "Primavera", dest: "Keukenhof (cedo, dia útil)" },
        { condition: "Cultura urbana e energia jovem", dest: "Utrecht" },
        { condition: "Arquitetura", dest: "Rotterdam" },
        { condition: "Cartão-postal com moinhos", dest: "Zaanse Schans (checar regras 2026)" },
        { condition: "Evitar com pouco tempo", dest: "Giethoorn" }
      ]
    },
    faq: {
      title: "Perguntas Frequentes",
      items: [
        { q: "Qual o melhor bate-volta para quem tem pouco tempo?", a: "Haarlem. Fica a 15 minutos de trem, é linda e você aproveita sem correria." },
        { q: "Keukenhof vale a pena?", a: "Sim, se você vai na primavera (março-maio), em dia útil e chegando cedo. Fora dessa janela, não funciona." },
        { q: "Zaanse Schans é 'armadilha turística'?", a: "Pode ser, se você for no horário errado. Vá bem cedo ou fim de tarde e a experiência muda completamente." },
        { q: "Giethoorn vale o deslocamento?", a: "Só se você tem dias sobrando. São 2h para ir, 2h para voltar. Para canais bonitos, Utrecht entrega mais em menos tempo." },
        { q: "Como funciona o transporte para os bate-voltas?", a: "Trem NS é o padrão. Use OVpay (cartão contactless) ou compre bilhete no app NS. Keukenhof tem ônibus especial." },
        { q: "Dá para combinar dois destinos no mesmo dia?", a: "Delft + Haia funciona bem. Rotterdam + Delft é possível mas corrido. Evite combinar destinos distantes." },
        { q: "Preciso reservar algo com antecedência?", a: "Keukenhof: SIM, ingresso obrigatório. Museus em cidades: recomendado. Zaanse Schans: em 2026 pode exigir ingresso." },
        { q: "Qual a melhor época para cada destino?", a: "Keukenhof: primavera. Waterland de bike: verão. Os outros funcionam o ano todo, mas evite Zaanse Schans em feriados." }
      ]
    }
  } : {
    title: "Day Trips from Amsterdam",
    description: "The Netherlands is small, trains work well and you can leave Amsterdam and return the same day comfortably",
    intro: "The difference between an amazing day trip and a frustrating one almost always comes down to: choosing destinations by real travel time (door to door) and expected crowds.",
    quickPick: {
      title: "How to Choose in 30 Seconds",
      items: [
        { condition: "First time in the Netherlands and short on time", dest: "Haarlem or Utrecht", reason: "easy, quick, beautiful" },
        { condition: "Spring (March to May)", dest: "Keukenhof", reason: "weekday, early" },
        { condition: "Architecture and modern city", dest: "Rotterdam", reason: "" },
        { condition: "Rural Netherlands without tour buses", dest: "Waterland by bike", reason: "" },
        { condition: "Postcard 'classic windmills'", dest: "Zaanse Schans", reason: "with strategy (attention to 2026 changes)" }
      ]
    },
    tabs: {
      classics: "Classics",
      miniAms: "Mini-Amsterdams",
      modern: "Modern",
      bike: "By Bike"
    },
    classics: {
      title: "The Classics",
      subtitle: "Famous destinations, very popular. Here, timing is everything.",
      items: [
        {
          name: "Zaanse Schans",
          emoji: "🏭",
          subtitle: "Windmills and Historic Village",
          time: "20 min by train",
          what: "An area with historic windmills, traditional houses and small attractions. Great for photos and seeing 'the Netherlands of imagination'.",
          reality: "Tends to get crowded mid-day because of tour groups. The main risk is going at the wrong time, facing crowds and leaving thinking 'overrated'.",
          strategy: [
            "Arrive early (before tour group flow) or go late afternoon",
            "If the goal is photos and walking, prioritize timing",
            "If the goal is entering attractions, reserve more time"
          ],
          warning2026: "There's a municipal plan to implement paid access control (cited as €17.50 for adult). Check current rules before going.",
          mustSee: true
        },
        {
          name: "Keukenhof",
          emoji: "🌷",
          subtitle: "Tulips and Gardens",
          time: "1h transport",
          what: "A garden park with millions of planted flowers and landscaping designed for visitors.",
          seasonal: "It's SEASONAL! For 2026: open March 19 to May 10. Tickets available from October 15 (daily sales, limited capacity).",
          strategy: [
            "Avoid weekends",
            "Arrive at opening and prioritize weekdays",
            "If you want 'tulip fields' (striped), that's outside the park"
          ],
          practical: [
            "Operates cashless (no cash payments)",
            "Parking €9 bought online",
            "Combi-tickets (entry + transport) go on sale mid-February"
          ],
          mustSee: true
        },
        {
          name: "Giethoorn",
          emoji: "🚣",
          subtitle: "The 'Venice of the North'",
          time: "2h transport",
          what: "A village with canals, bridges and very scenic houses.",
          reality: "It's beautiful, but usually consumes the day because of travel time and, in summer, can get congested. Works better for those with more days in the Netherlands.",
          alternative: "If the goal is beautiful canals without heavy travel, Utrecht or Haarlem deliver much more return per hour invested.",
          mustSee: false
        }
      ]
    },
    miniAms: {
      title: "Mini-Amsterdams",
      subtitle: "Historic, easy, with less tourist pressure. Here the gain is predictability: day trip without stress.",
      items: [
        {
          name: "Haarlem",
          emoji: "🏛️",
          subtitle: "The Best Neighbor",
          time: "15 min by train",
          why: "Historic city atmosphere, beautiful and peaceful, with short travel time.",
          todo: [
            "Grote Markt and historic center surroundings",
            "A museum (if you like science/art, Haarlem usually pleases)",
            "A local brewery or café to finish"
          ],
          mustSee: true
        },
        {
          name: "Utrecht",
          emoji: "🎓",
          subtitle: "Different Canals and Young Vibe",
          time: "25 min by train",
          why: "University city, lively, with a canal configuration that offers a very different experience from Amsterdam.",
          todo: [
            "Walk along the canals and sit somewhere by the water",
            "Historic center and a museum if it fits the day's rhythm"
          ],
          mustSee: true
        },
        {
          name: "Delft",
          emoji: "🏺",
          subtitle: "Ceramics and Charm",
          time: "1h by train",
          why: "Small, picturesque, very 'photogenic' and easy to combine.",
          combo: "Morning in Delft, afternoon in The Hague (museum and, if summer, beach).",
          mustSee: false
        }
      ]
    },
    modern: {
      title: "Modern and Bold",
      subtitle: "For those who want the 'anti-Amsterdam'.",
      item: {
        name: "Rotterdam",
        emoji: "🏙️",
        subtitle: "Architecture and City of the Future",
        time: "40 min by train",
        why: "If you expect only canals and old houses, Rotterdam surprises. The appeal is precisely being modern.",
        todo: [
          "Markthal (impressive covered market)",
          "Cube houses area and skyline",
          "A museum or viewpoint, depending on time"
        ]
      }
    },
    bike: {
      title: "By Bike",
      subtitle: "Day trips that feel like travel. The Netherlands is flat, but wind and weather change the game.",
      items: [
        {
          name: "Waterland",
          emoji: "🚴",
          subtitle: "Rural, Close and Quiet",
          why: "Delivers 'rural Netherlands' without tour buses and without spending a full day.",
          howTo: [
            "Take the ferry to Amsterdam Noord (GVB ferries are free)",
            "Rent a bike in Noord",
            "Cycle through dikes and small villages, returning when tired"
          ]
        },
        {
          name: "Muiden and Muiderslot",
          emoji: "🏰",
          subtitle: "A Real Castle",
          why: "Day trip with a 'real castle' feel, good for those who want history without going far.",
          tip: "Check schedules and tickets in advance, as castles and museums have varying operating hours."
        }
      ]
    },
    tips: {
      title: "General Tips (The Ones That Really Prevent Mistakes)",
      items: [
        { icon: "📅", title: "Weekdays almost always win", text: "Fewer queues, fewer tours, less stress." },
        { icon: "⏰", title: "Start early", text: "You buy 'silence' with 1 hour of advance." },
        { icon: "🕐", title: "Plan by useful time", text: "1.5h travel there + 1.5h back already eats half the day." },
        { icon: "💳", title: "Payment and transport", text: "Most things work with contactless (card/phone), but always have a backup." }
      ]
    },
    ranking: {
      title: "Practical Ranking (To Help Decide)",
      items: [
        { condition: "Only 1 free day", dest: "Haarlem" },
        { condition: "Spring", dest: "Keukenhof (early, weekday)" },
        { condition: "Urban culture and young energy", dest: "Utrecht" },
        { condition: "Architecture", dest: "Rotterdam" },
        { condition: "Postcard with windmills", dest: "Zaanse Schans (check 2026 rules)" },
        { condition: "Avoid with little time", dest: "Giethoorn" }
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        { q: "What's the best day trip for those short on time?", a: "Haarlem. It's 15 minutes by train, beautiful and you can enjoy without rushing." },
        { q: "Is Keukenhof worth it?", a: "Yes, if you go in spring (March-May), on a weekday and arriving early. Outside this window, it doesn't work." },
        { q: "Is Zaanse Schans a 'tourist trap'?", a: "It can be, if you go at the wrong time. Go very early or late afternoon and the experience changes completely." },
        { q: "Is Giethoorn worth the travel?", a: "Only if you have days to spare. It's 2h there, 2h back. For beautiful canals, Utrecht delivers more in less time." },
        { q: "How does transport work for day trips?", a: "NS train is standard. Use OVpay (contactless card) or buy tickets in NS app. Keukenhof has special bus." },
        { q: "Can I combine two destinations in one day?", a: "Delft + The Hague works well. Rotterdam + Delft is possible but rushed. Avoid combining distant destinations." },
        { q: "Do I need to book anything in advance?", a: "Keukenhof: YES, ticket required. City museums: recommended. Zaanse Schans: in 2026 may require ticket." },
        { q: "What's the best time for each destination?", a: "Keukenhof: spring. Waterland by bike: summer. Others work year-round, but avoid Zaanse Schans on holidays." }
      ]
    }
  };

  return (
    <PageLayout>
      <PageHero 
        icon={MapPin} 
        title={content.title} 
        description={content.description}
        backgroundImage={zaanseSchansImg}
      />

      <DestinationsGallerySection language={language} />

      <IntroSection intro={content.intro} />
      <QuickPickSection title={content.quickPick.title} items={content.quickPick.items} />
      <MapSection language={language} />
      <DestinationTabsSection 
        tabs={content.tabs}
        classics={content.classics}
        miniAms={content.miniAms}
        modern={content.modern}
        bike={content.bike}
        language={language}
      />
      <TipsSection title={content.tips.title} items={content.tips.items} />
      <RankingSection title={content.ranking.title} items={content.ranking.items} />
      <FAQSection title={content.faq.title} items={content.faq.items} />
    </PageLayout>
  );
};

export default Arredores;