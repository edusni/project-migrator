import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { MapPin } from "lucide-react";
import { useLanguage, Language } from "@/hooks/useLanguage";
import { SEOHead, seoData } from "@/components/SEOHead";
import { RelatedPagesSection } from "@/components/RelatedPagesSection";
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

// Helper function for trilingual content
const getContent = (lang: Language) => {
  const content = {
    pt: {
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
    },
    en: {
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
    },
    nl: {
      title: "Dagtrips vanuit Amsterdam",
      description: "Nederland is klein, de treinen werken goed en je kunt gemakkelijk een dagje weg en dezelfde dag terug",
      intro: "Het verschil tussen een geweldige dagtrip en een frustrerende komt bijna altijd neer op: bestemmingen kiezen op basis van echte reistijd (van deur tot deur) en verwachte drukte.",
      quickPick: {
        title: "Hoe Kiezen in 30 Seconden",
        items: [
          { condition: "Eerste keer in Nederland en weinig tijd", dest: "Haarlem of Utrecht", reason: "makkelijk, snel, mooi" },
          { condition: "Lente (maart tot mei)", dest: "Keukenhof", reason: "doordeweeks, vroeg" },
          { condition: "Architectuur en moderne stad", dest: "Rotterdam", reason: "" },
          { condition: "Landelijk Nederland zonder tourbus", dest: "Waterland per fiets", reason: "" },
          { condition: "Ansichtkaart 'klassieke molens'", dest: "Zaanse Schans", reason: "met strategie (let op 2026 wijzigingen)" }
        ]
      },
      tabs: {
        classics: "Klassiekers",
        miniAms: "Mini-Amsterdams",
        modern: "Modern",
        bike: "Per Fiets"
      },
      classics: {
        title: "De Klassiekers",
        subtitle: "Beroemde bestemmingen, erg populair. Hier is timing alles.",
        items: [
          {
            name: "Zaanse Schans",
            emoji: "🏭",
            subtitle: "Molens en Historisch Dorp",
            time: "20 min per trein",
            what: "Een gebied met historische molens, traditionele huizen en kleine attracties. Geweldig voor foto's en om 'het Nederland van de verbeelding' te zien.",
            reality: "Wordt vaak druk rond het middaguur door toergroepen. Het grootste risico is op het verkeerde moment gaan, drukte tegenkomen en denken dat het 'overschat' is.",
            strategy: [
              "Kom vroeg aan (voor de toergroepen) of ga laat in de middag",
              "Als het doel foto's en wandelen is, geef prioriteit aan timing",
              "Als het doel attracties bezoeken is, reserveer meer tijd"
            ],
            warning2026: "Er is een gemeentelijk plan om betaalde toegangscontrole in te voeren (genoemd als €17,50 voor volwassenen). Controleer de huidige regels voor je gaat.",
            mustSee: true
          },
          {
            name: "Keukenhof",
            emoji: "🌷",
            subtitle: "Tulpen en Tuinen",
            time: "1 uur vervoer",
            what: "Een tuinpark met miljoenen geplante bloemen en landschapsontwerp voor bezoekers.",
            seasonal: "Het is SEIZOENSGEBONDEN! Voor 2026: open 19 maart tot 10 mei. Tickets beschikbaar vanaf 15 oktober (dagverkoop, beperkte capaciteit).",
            strategy: [
              "Vermijd weekenden",
              "Kom bij opening en geef prioriteit aan doordeweekse dagen",
              "Als je 'tulpenvelden' (gestreept) wilt, dat is buiten het park"
            ],
            practical: [
              "Werkt cashless (geen contante betalingen)",
              "Parkeren €9 online gekocht",
              "Combi-tickets (entree + vervoer) gaan half februari in de verkoop"
            ],
            mustSee: true
          },
          {
            name: "Giethoorn",
            emoji: "🚣",
            subtitle: "Het 'Venetië van het Noorden'",
            time: "2 uur vervoer",
            what: "Een dorp met grachten, bruggen en zeer schilderachtige huizen.",
            reality: "Het is prachtig, maar kost meestal de hele dag vanwege reistijd en kan in de zomer druk worden. Werkt beter voor wie meer dagen in Nederland heeft.",
            alternative: "Als het doel mooie grachten is zonder lange reis, leveren Utrecht of Haarlem veel meer op per geïnvesteerd uur.",
            mustSee: false
          }
        ]
      },
      miniAms: {
        title: "Mini-Amsterdams",
        subtitle: "Historisch, makkelijk, met minder toeristendruk. Hier is de winst voorspelbaarheid: dagtrip zonder stress.",
        items: [
          {
            name: "Haarlem",
            emoji: "🏛️",
            subtitle: "De Beste Buur",
            time: "15 min per trein",
            why: "Historische stadssfeer, mooi en rustig, met korte reistijd.",
            todo: [
              "Grote Markt en omgeving van het historische centrum",
              "Een museum (als je van wetenschap/kunst houdt, bevalt Haarlem meestal)",
              "Een lokale brouwerij of café om af te sluiten"
            ],
            mustSee: true
          },
          {
            name: "Utrecht",
            emoji: "🎓",
            subtitle: "Andere Grachten en Jonge Sfeer",
            time: "25 min per trein",
            why: "Universiteitsstad, levendig, met een grachtenconfiguratie die een heel andere ervaring biedt dan Amsterdam.",
            todo: [
              "Wandel langs de grachten en ga ergens aan het water zitten",
              "Historisch centrum en een museum als het in het dagritme past"
            ],
            mustSee: true
          },
          {
            name: "Delft",
            emoji: "🏺",
            subtitle: "Keramiek en Charme",
            time: "1 uur per trein",
            why: "Klein, pittoresk, zeer 'fotogeniek' en makkelijk te combineren.",
            combo: "Ochtend in Delft, middag in Den Haag (museum en, indien zomer, strand).",
            mustSee: false
          }
        ]
      },
      modern: {
        title: "Modern en Gedurfd",
        subtitle: "Voor wie het 'anti-Amsterdam' wil.",
        item: {
          name: "Rotterdam",
          emoji: "🏙️",
          subtitle: "Architectuur en Stad van de Toekomst",
          time: "40 min per trein",
          why: "Als je alleen grachten en oude huizen verwacht, verrast Rotterdam. De aantrekkingskracht is juist het moderne.",
          todo: [
            "Markthal (indrukwekkende overdekte markt)",
            "Kubuswoningen gebied en skyline",
            "Een museum of uitkijkpunt, afhankelijk van tijd"
          ]
        }
      },
      bike: {
        title: "Per Fiets",
        subtitle: "Dagtrips die als reizen aanvoelen. Nederland is vlak, maar wind en weer veranderen het spel.",
        items: [
          {
            name: "Waterland",
            emoji: "🚴",
            subtitle: "Landelijk, Dichtbij en Rustig",
            why: "Levert 'landelijk Nederland' zonder tourbussen en zonder een hele dag te besteden.",
            howTo: [
              "Neem de pont naar Amsterdam Noord (GVB-ponten zijn gratis)",
              "Huur een fiets in Noord",
              "Fiets door dijken en kleine dorpjes, terug wanneer je moe bent"
            ]
          },
          {
            name: "Muiden en Muiderslot",
            emoji: "🏰",
            subtitle: "Een Echt Kasteel",
            why: "Dagtrip met een 'echt kasteel'-gevoel, goed voor wie geschiedenis wil zonder ver te gaan.",
            tip: "Controleer schema's en tickets van tevoren, want kastelen en musea hebben wisselende openingstijden."
          }
        ]
      },
      tips: {
        title: "Algemene Tips (Die Echt Fouten Voorkomen)",
        items: [
          { icon: "📅", title: "Doordeweeks wint bijna altijd", text: "Minder rijen, minder tours, minder stress." },
          { icon: "⏰", title: "Begin vroeg", text: "Je koopt 'stilte' met 1 uur voorsprong." },
          { icon: "🕐", title: "Plan op nuttige tijd", text: "1,5 uur heen + 1,5 uur terug eet al de helft van de dag op." },
          { icon: "💳", title: "Betaling en vervoer", text: "Het meeste werkt met contactloos (kaart/telefoon), maar heb altijd een backup." }
        ]
      },
      ranking: {
        title: "Praktische Ranglijst (Om te Helpen Beslissen)",
        items: [
          { condition: "Maar 1 vrije dag", dest: "Haarlem" },
          { condition: "Lente", dest: "Keukenhof (vroeg, doordeweeks)" },
          { condition: "Stedelijke cultuur en jonge energie", dest: "Utrecht" },
          { condition: "Architectuur", dest: "Rotterdam" },
          { condition: "Ansichtkaart met molens", dest: "Zaanse Schans (check 2026 regels)" },
          { condition: "Vermijden met weinig tijd", dest: "Giethoorn" }
        ]
      },
      faq: {
        title: "Veelgestelde Vragen",
        items: [
          { q: "Wat is de beste dagtrip voor wie weinig tijd heeft?", a: "Haarlem. Het is 15 minuten met de trein, prachtig en je kunt genieten zonder haast." },
          { q: "Is Keukenhof de moeite waard?", a: "Ja, als je in de lente gaat (maart-mei), doordeweeks en vroeg aankomt. Buiten dit venster werkt het niet." },
          { q: "Is Zaanse Schans een 'toeristenval'?", a: "Dat kan, als je op het verkeerde moment gaat. Ga heel vroeg of laat in de middag en de ervaring verandert compleet." },
          { q: "Is Giethoorn de reis waard?", a: "Alleen als je dagen over hebt. Het is 2 uur heen, 2 uur terug. Voor mooie grachten levert Utrecht meer op in minder tijd." },
          { q: "Hoe werkt vervoer voor dagtrips?", a: "NS-trein is standaard. Gebruik OVpay (contactloze kaart) of koop tickets in de NS-app. Keukenhof heeft speciale bus." },
          { q: "Kan ik twee bestemmingen combineren op één dag?", a: "Delft + Den Haag werkt goed. Rotterdam + Delft is mogelijk maar gehaast. Vermijd het combineren van verre bestemmingen." },
          { q: "Moet ik iets van tevoren boeken?", a: "Keukenhof: JA, ticket verplicht. Stadsmusea: aanbevolen. Zaanse Schans: in 2026 mogelijk ticket vereist." },
          { q: "Wat is de beste tijd voor elke bestemming?", a: "Keukenhof: lente. Waterland per fiets: zomer. De rest werkt het hele jaar, maar vermijd Zaanse Schans op feestdagen." }
        ]
      }
    }
  };
  
  return content[lang];
};

const Arredores = () => {
  const { language } = useLanguage();
  const content = getContent(language);

  const seo = seoData.arredores[language];
  const faqItems = content.faq.items.map(item => ({ question: item.q, answer: item.a }));

  const breadcrumbName = language === "pt" ? "Arredores" : language === "nl" ? "Dagtrips" : "Day Trips";

  return (
    <PageLayout>
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        type="article"
        faqItems={faqItems}
        breadcrumbs={[
          { name: "Home", url: "https://amsterdu.com" },
          { name: breadcrumbName, url: "https://amsterdu.com/arredores" }
        ]}
      />
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
      
      <RelatedPagesSection 
        currentPath="/arredores"
        suggestedPaths={["/transporte", "/planejamento", "/atracoes", "/gastronomia"]}
      />
    </PageLayout>
  );
};

export default Arredores;
