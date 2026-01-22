import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { MapPin } from "lucide-react";
import { useLanguage, Language } from "@/hooks/useLanguage";
import { SEOHead, seoData } from "@/components/SEOHead";
import { RelatedPagesSection } from "@/components/RelatedPagesSection";
import { AffiliateBanner } from "@/components/AffiliateLinks";
import { RelatedContent } from "@/components/RelatedContent";
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
      title: "Bate-voltas de Amsterdam em 2026",
      description: "Guia completo com tempo porta a porta, lotação e estratégias",
      intro: "Amsterdam é um excelente ponto de partida para explorar outros locais da Holanda. Em 2026 isso continua verdade, mas há mudanças importantes: além do aumento de impostos turísticos na capital, algumas atrações adjacentes passaram a ter controle de acesso. Por isso, planejar bem seu bate-volta — considerando a lotação, o tempo de deslocamento e as regras de 2026 — é o segredo para um dia incrível.",
      pillarIntro: "Este guia resume os destinos clássicos, explica como chegar (tempo aproximado porta a porta), aponta o que mudou em 2026 e apresenta estratégias para fugir das multidões. As informações vêm exclusivamente de fontes oficiais — portais de turismo da prefeitura de Amsterdam, do governo da província ou dos próprios atrativos — para você se planejar com segurança.",
      howToChoose: {
        title: "Como escolher o bate-volta ideal",
        items: [
          "Pense em tempo e perfil de viagem. A partir do centro de Amsterdam você chega a destinos próximos em 15–40 minutos de trem ou ônibus, enquanto lugares mais remotos podem exigir 2 h ou mais.",
          "Para quem tem apenas um dia livre ou está visitando a Holanda pela primeira vez, cidades como Haarlem e Utrecht entregam muito retorno com pouco deslocamento.",
          "Verifique a temporada. Keukenhof, por exemplo, abre apenas de 19 de março a 10 de maio de 2026.",
          "Considere lotação e experiência. Locais clássicos atraem excursões e podem ficar saturados no meio do dia."
        ]
      },
      quickPick: {
        title: "Qual bate-volta escolher? (Ranking Prático)",
        items: [
          { condition: "Apenas um dia livre", dest: "Haarlem ou Utrecht", reason: "Chegada rápida (~20–25 min), muita história e atmosfera" },
          { condition: "Primavera (março–maio)", dest: "Keukenhof", reason: "Temporada das tulipas, chegue cedo e vá em dia útil" },
          { condition: "Canais e atmosfera jovem", dest: "Utrecht", reason: "Canais baixos e cafés universitários (25 min)" },
          { condition: "Arquitetura moderna", dest: "Rotterdam", reason: "Skyline futurista (~40 min de trem)" },
          { condition: "Cartão-postal com moinhos", dest: "Zaanse Schans", reason: "Exige ingresso em 2026; vá cedo" },
          { condition: "Vilarejo pitoresco (com tempo)", dest: "Giethoorn", reason: "2–2,5 h de trem; só se tiver dias sobrando" }
        ]
      },
      tabs: {
        classics: "Clássicos",
        miniAms: "Mini-Amsterdams",
        modern: "Moderno",
        bike: "De Bike"
      },
      classics: {
        title: "Destinos em destaque",
        subtitle: "Os mais populares, mas exigem planejamento de horário.",
        items: [
          {
            name: "Zaanse Schans",
            emoji: "🏭",
            subtitle: "Clássico e Imperdível",
            time: "17 min de trem + 15 min caminhada",
            what: "Trem da Estação Central até Zaandijk – Zaanse Schans em aprox. 17 minutos, seguido de caminhada até a vila de moinhos. Outra opção: descer em Zaandam (12 min) e pegar ônibus/táxi.",
            reality: "A prefeitura de Zaanstad aprovou controle de acesso: a partir de 2026, a entrada custa €17,50 (moradores locais têm entrada livre).",
            strategy: [
              "Visite cedo (antes das 10h) ou no fim da tarde para evitar grupos de excursão",
              "Compre o ingresso com antecedência online, principalmente em fins de semana ensolarados",
              "Para foto e caminhada, duas horas bastam; para museus e moinhos, reserve meio dia"
            ],
            warning2026: "Entrada paga de €17,50 para adulto a partir de 2026. Confira regras vigentes antes de ir.",
            mustSee: true
          },
          {
            name: "Keukenhof",
            emoji: "🌷",
            subtitle: "Tulipas Sazonais",
            time: "~1h porta a porta (ônibus 852 do RAI)",
            what: "O Keukenhof Express (ônibus 852) sai da estação Amsterdam RAI e leva cerca de 35 minutos até a entrada do parque. Incluindo o deslocamento do centro até o RAI, calcule cerca de 1 h porta a porta.",
            seasonal: "Funciona de 19 de março a 10 de maio de 2026, todos os dias das 08h00 às 19h00 (entrada até 18h15). Ingressos têm dia e hora marcados.",
            strategy: [
              "Visite durante a semana, de preferência na abertura",
              "Finais de semana entre abril e início de maio lotam rapidamente",
              "Compre ingressos e combi-ticket (transporte + entrada) com antecedência (pré-venda em fevereiro)"
            ],
            practical: [
              "Opera cashless (pagamento sem dinheiro)",
              "Estacionamento €9 comprado online",
              "Se quiser 'campos de tulipas' listrados, isso é fora do parque"
            ],
            mustSee: true
          },
          {
            name: "Giethoorn",
            emoji: "🚣",
            subtitle: "Veneza da Holanda (com ressalvas)",
            time: "2 a 2,5h de trem (~€25/pessoa)",
            what: "De trem, o percurso Amsterdam → Giethoorn dura 2 a 2,5 horas, incluindo trocas em Zwolle. De carro: 1h25. Por ônibus de excursão: ~1h40.",
            reality: "Giethoorn é linda, mas o deslocamento consome o dia. No verão e em feriados, os canais ficam congestionados por barquinhos de visitantes.",
            alternative: "Se você tem pouco tempo na Holanda, considere destinos mais perto (Utrecht ou Haarlem), que também oferecem canais e arquitetura charmosa sem a logística complicada.",
            mustSee: false
          }
        ]
      },
      miniAms: {
        title: "Cidades perto de Amsterdam",
        subtitle: "Históricas, fáceis, com menos pressão turística.",
        items: [
          {
            name: "Haarlem",
            emoji: "🏛️",
            subtitle: "A Melhor Vizinha",
            time: "~20 min de trem",
            why: "Haarlem é considerada uma 'mini-Amsterdam': canais, arquitetura do século XVII e boa cena cultural, com menos turistas. O Grote Markt é perfeito para explorar a pé.",
            todo: [
              "Centro histórico e Grote Markt",
              "Museu Frans Hals ou cervejaria Jopenkerk",
              "Combine com Zuid-Kennemerland (dunas) ou praia de Zandvoort"
            ],
            mustSee: true
          },
          {
            name: "Utrecht",
            emoji: "🎓",
            subtitle: "Canais Únicos e Vibe Jovem",
            time: "~25 min de trem Intercity",
            why: "Utrecht combina uma vibe universitária com canais diferentes dos de Amsterdam: as margens são mais baixas e repletas de cafés. Ideal para caminhar sem roteiro.",
            todo: [
              "Caminhar pelos canais e sentar à beira d'água",
              "Visitar a Domtoren (torre da catedral)",
              "Museu de música Speelklok"
            ],
            mustSee: true
          },
          {
            name: "Delft",
            emoji: "🏺",
            subtitle: "Cerâmica Azul e Charme Histórico",
            time: "~1h de trem",
            why: "Pequena e fotogênica, Delft é o berço da cerâmica azul (Delftware) e de Vermeer. O centro histórico é compacto, com um lindo mercado e canais estreitos.",
            combo: "Manhã em Delft, tarde em Haia (Mauritshuis e Binnenhof). Em 2026, ótimo destino para um dia tranquilo.",
            mustSee: false
          }
        ]
      },
      modern: {
        title: "Rotterdam – A Anti-Amsterdam Moderna",
        subtitle: "Para quem quer a 'anti-Amsterdam'.",
        item: {
          name: "Rotterdam",
          emoji: "🏙️",
          subtitle: "Arquitetura e Cidade do Futuro",
          time: "~40 min de trem (25-30 min de Amsterdam Zuid com Intercity Direct)",
          why: "Rotterdam impressiona justamente por ser o oposto de Amsterdam: horizonte vertical, arquitetura futurista (casas em forma de cubo, Markthal), portos e museus de design.",
          todo: [
            "Markthal (mercado coberto impressionante)",
            "Casas cubo e skyline",
            "Combine com Delft no mesmo dia (manhã em Delft, tarde em Rotterdam)"
          ]
        }
      },
      bike: {
        title: "Bate-volta de bike saindo de Amsterdam",
        subtitle: "A Holanda é plana, mas vento e clima mudam o jogo.",
        items: [
          {
            name: "Marken e Waterland",
            emoji: "🚴",
            subtitle: "Rural, Perto e Silencioso",
            why: "Entrega 'Holanda rural' sem excursões em massa. Vilas preservam casas de madeira coloridas e diques.",
            howTo: [
              "Pegue a balsa gratuita do GVB para Amsterdam Noord",
              "Ônibus 315 ou 316 para Marken (~30 min) ou alugue bike",
              "Vilas vizinhas: Volendam e Edam (~30 min de ônibus), Monnickendam e Purmerend (~15 min)"
            ]
          },
          {
            name: "Muiden & Muiderslot",
            emoji: "🏰",
            subtitle: "Castelo de Verdade",
            why: "O castelo Muiderslot data do século XIII e é mantido como parte do Rijksmuseum. Excelente viagem de meio dia para quem gosta de história medieval.",
            tip: "Trem até Weesp + ônibus 110 até Muiden Centrum. Tempo total do centro de Amsterdam: ~45 min. Verifique horários e reserve ingressos online."
          },
          {
            name: "Almere & Lelystad (New Land)",
            emoji: "🦅",
            subtitle: "Engenharia e Natureza",
            why: "Cidades em terras recuperadas do mar, com arquitetura moderna e o parque Nieuw Land (observação de aves).",
            howTo: [
              "Trem de Amsterdam Centraal a Almere Centrum: 20 min",
              "De Almere a Lelystad Centrum: mais 14 min",
              "Para o parque: desça em Almere Oostvaarders + 20 min caminhada"
            ]
          }
        ]
      },
      tips: {
        title: "Dicas gerais para bater e voltar sem stress",
        items: [
          { icon: "📅", title: "Prefira dias úteis", text: "Excursões de fim de semana elevam tempo de fila e número de pessoas." },
          { icon: "⏰", title: "Comece cedo", text: "Sair antes das 09h garante cidades e atrações mais vazias." },
          { icon: "🕐", title: "Planeje pelo tempo útil", text: "Destinos que exigem mais de 1h30 de deslocamento por trajeto consomem boa parte do dia." },
          { icon: "💳", title: "Verifique pagamento e reservas", text: "Muitos locais adotam pagamento sem dinheiro e exigem ingresso online (Zaanse Schans, Keukenhof, museus)." },
          { icon: "🌧️", title: "Cheque previsão do tempo", text: "A Holanda é famosa por vento e chuva inesperados. Leve casaco impermeável." }
        ]
      },
      ranking: {
        title: "Ranking Prático: Qual bate-volta escolher?",
        items: [
          { condition: "Apenas um dia livre", dest: "Haarlem ou Utrecht (chegada rápida, muita atmosfera)" },
          { condition: "Primavera (março-maio)", dest: "Keukenhof (dia útil, cedo)" },
          { condition: "Canais e atmosfera jovem", dest: "Utrecht (25 min de trem)" },
          { condition: "Arquitetura moderna", dest: "Rotterdam (40 min de trem)" },
          { condition: "Cartão-postal com moinhos", dest: "Zaanse Schans (checar regras 2026)" },
          { condition: "Vilarejo pitoresco", dest: "Giethoorn (só se tiver tempo de sobra)" }
        ]
      },
      faq: {
        title: "Perguntas Frequentes",
        items: [
          { q: "Qual o melhor bate-volta para quem tem pouco tempo?", a: "Haarlem ou Utrecht são excelentes: os trens levam cerca de 20–25 minutos e você aproveita o dia inteiro." },
          { q: "O Keukenhof vale a pena?", a: "Sim, mas apenas durante a temporada oficial (19 de março a 10 de maio 2026). Vá em dia útil e compre ingresso online." },
          { q: "Zaanse Schans virou armadilha turística?", a: "Continua valendo pela paisagem, mas em 2026 será necessário pagar ingresso de €17,50. Planeje horário e saiba que haverá controle de acessos." },
          { q: "Giethoorn justifica o deslocamento?", a: "Só se você tiver dias sobrando ou quiser um passeio romântico. A viagem de trem dura até 2,5 h, e os canais podem ficar congestionados no verão." },
          { q: "Dá para combinar dois destinos no mesmo dia?", a: "Sim: Delft + Rotterdam, Haarlem + praia de Zandvoort, Zaanse Schans + Alkmaar (queijo). Verifique horários dos trens." },
          { q: "Preciso reservar com antecedência?", a: "Para Zaanse Schans, Keukenhof, museus como Rijksmuseum e Anne Frank House: sim. Para Haarlem, Utrecht ou Waterland: não, basta ir." },
          { q: "Como funciona o transporte?", a: "Trem NS é o padrão. Use OVpay (cartão contactless) ou compre bilhete no app NS. Keukenhof tem ônibus especial (852 do RAI)." },
          { q: "Qual a melhor época para cada destino?", a: "Primavera para Keukenhof; verão para Marken e Waterland; outono para Utrecht e Haarlem. Zaanse Schans e castelos funcionam o ano todo, mas evite dias de chuva forte." }
        ]
      },
      sources: {
        title: "Fontes oficiais e referências",
        text: "As informações deste guia foram obtidas de sites oficiais de turismo e órgãos públicos: I amsterdam (transporte regional), Prefeitura de Zaanstad (ingresso €17,50), Keukenhof (datas 2026), GVB/NS (tempos de viagem), Rijksmuseum Muiderslot (acesso via Weesp), Giethoorn.nl (tempos de viagem)."
      }
    },
    en: {
      title: "Day Trips from Amsterdam in 2026",
      description: "Complete guide with door-to-door times, crowds and strategies",
      intro: "Amsterdam is an excellent starting point for exploring other places in the Netherlands. In 2026 this remains true, but there are important changes: beyond the increase in tourist taxes in the capital, some adjacent attractions now have access control. Therefore, planning your day trip well — considering crowds, travel time and 2026 rules — is the secret to an incredible day.",
      pillarIntro: "This guide summarizes classic destinations, explains how to get there (approximate door-to-door time), points out what changed in 2026 and presents strategies to escape the crowds. Information comes exclusively from official sources — tourism portals of the Amsterdam municipality, provincial government or the attractions themselves.",
      howToChoose: {
        title: "How to choose the ideal day trip",
        items: [
          "Think about time and travel profile. From Amsterdam center you reach nearby destinations in 15–40 minutes by train or bus, while more remote places may require 2 hours or more.",
          "For those with only one free day or visiting the Netherlands for the first time, cities like Haarlem and Utrecht deliver a lot of return with little travel.",
          "Check the season. Keukenhof, for example, is only open from March 19 to May 10, 2026.",
          "Consider crowds and experience. Classic locations attract tour groups and can get saturated mid-day."
        ]
      },
      quickPick: {
        title: "Which day trip to choose? (Practical Ranking)",
        items: [
          { condition: "Only one free day", dest: "Haarlem or Utrecht", reason: "Quick arrival (~20–25 min), lots of history and atmosphere" },
          { condition: "Spring (March–May)", dest: "Keukenhof", reason: "Tulip season, arrive early and go on a weekday" },
          { condition: "Canals and young vibe", dest: "Utrecht", reason: "Low canals and university cafés (25 min)" },
          { condition: "Modern architecture", dest: "Rotterdam", reason: "Futuristic skyline (~40 min by train)" },
          { condition: "Postcard with windmills", dest: "Zaanse Schans", reason: "Requires ticket in 2026; go early" },
          { condition: "Picturesque village (with time)", dest: "Giethoorn", reason: "2–2.5h by train; only if you have days to spare" }
        ]
      },
      tabs: {
        classics: "Classics",
        miniAms: "Mini-Amsterdams",
        modern: "Modern",
        bike: "By Bike"
      },
      classics: {
        title: "Featured destinations",
        subtitle: "The most popular, but require timing planning.",
        items: [
          {
            name: "Zaanse Schans",
            emoji: "🏭",
            subtitle: "Classic and Must-See",
            time: "17 min train + 15 min walk",
            what: "Train from Central Station to Zaandijk – Zaanse Schans in approx. 17 minutes, followed by a walk to the windmill village. Alternative: get off at Zaandam (12 min) and take bus/taxi.",
            reality: "Zaanstad municipality approved access control: from 2026, entry costs €17.50 (local residents enter free).",
            strategy: [
              "Visit early (before 10am) or late afternoon to avoid tour groups",
              "Buy tickets in advance online, especially on sunny weekends",
              "For photos and walking, two hours suffice; for museums and windmills, reserve half a day"
            ],
            warning2026: "Paid entry of €17.50 for adults from 2026. Check current rules before going.",
            mustSee: true
          },
          {
            name: "Keukenhof",
            emoji: "🌷",
            subtitle: "Seasonal Tulips",
            time: "~1h door to door (bus 852 from RAI)",
            what: "The Keukenhof Express (bus 852) departs from Amsterdam RAI station and takes about 35 minutes to the park entrance. Including travel from the center to RAI, calculate about 1 hour door to door.",
            seasonal: "Open March 19 to May 10, 2026, daily 08:00 to 19:00 (entry until 18:15). Tickets have fixed date and time.",
            strategy: [
              "Visit on weekdays, preferably at opening",
              "Weekends between April and early May fill up quickly",
              "Buy tickets and combi-ticket (transport + entry) in advance (pre-sale in February)"
            ],
            practical: [
              "Operates cashless (no cash payments)",
              "Parking €9 bought online",
              "If you want striped 'tulip fields', that's outside the park"
            ],
            mustSee: true
          },
          {
            name: "Giethoorn",
            emoji: "🚣",
            subtitle: "Venice of the Netherlands (with caveats)",
            time: "2 to 2.5h by train (~€25/person)",
            what: "By train, the Amsterdam → Giethoorn journey takes 2 to 2.5 hours, including transfers at Zwolle. By car: 1h25. By tour bus: ~1h40.",
            reality: "Giethoorn is beautiful, but the travel consumes the day. In summer and holidays, the canals get congested with visitor boats.",
            alternative: "If you have little time in the Netherlands, consider closer destinations (Utrecht or Haarlem), which also offer charming canals and architecture without complicated logistics.",
            mustSee: false
          }
        ]
      },
      miniAms: {
        title: "Cities near Amsterdam",
        subtitle: "Historic, easy, with less tourist pressure.",
        items: [
          {
            name: "Haarlem",
            emoji: "🏛️",
            subtitle: "The Best Neighbor",
            time: "~20 min by train",
            why: "Haarlem is considered a 'mini-Amsterdam': canals, 17th-century architecture and good cultural scene, with fewer tourists. The Grote Markt is perfect to explore on foot.",
            todo: [
              "Historic center and Grote Markt",
              "Frans Hals Museum or Jopenkerk brewery",
              "Combine with Zuid-Kennemerland (dunes) or Zandvoort beach"
            ],
            mustSee: true
          },
          {
            name: "Utrecht",
            emoji: "🎓",
            subtitle: "Unique Canals and Young Vibe",
            time: "~25 min Intercity train",
            why: "Utrecht combines a university vibe with canals different from Amsterdam: the banks are lower and full of cafés. Ideal for walking without a route.",
            todo: [
              "Walk along the canals and sit by the water",
              "Visit the Domtoren (cathedral tower)",
              "Speelklok music museum"
            ],
            mustSee: true
          },
          {
            name: "Delft",
            emoji: "🏺",
            subtitle: "Blue Ceramics and Historic Charm",
            time: "~1h by train",
            why: "Small and photogenic, Delft is the birthplace of blue ceramics (Delftware) and Vermeer. The historic center is compact, with a beautiful market and narrow canals.",
            combo: "Morning in Delft, afternoon in The Hague (Mauritshuis and Binnenhof). In 2026, great destination for a peaceful day.",
            mustSee: false
          }
        ]
      },
      modern: {
        title: "Rotterdam – The Modern Anti-Amsterdam",
        subtitle: "For those who want the 'anti-Amsterdam'.",
        item: {
          name: "Rotterdam",
          emoji: "🏙️",
          subtitle: "Architecture and City of the Future",
          time: "~40 min by train (25-30 min from Amsterdam Zuid with Intercity Direct)",
          why: "Rotterdam impresses precisely for being the opposite of Amsterdam: vertical skyline, futuristic architecture (cube houses, Markthal), ports and design museums.",
          todo: [
            "Markthal (impressive covered market)",
            "Cube houses and skyline",
            "Combine with Delft same day (morning in Delft, afternoon in Rotterdam)"
          ]
        }
      },
      bike: {
        title: "Day trips by bike from Amsterdam",
        subtitle: "The Netherlands is flat, but wind and weather change the game.",
        items: [
          {
            name: "Marken and Waterland",
            emoji: "🚴",
            subtitle: "Rural, Close and Quiet",
            why: "Delivers 'rural Netherlands' without mass excursions. Villages preserve colorful wooden houses and dikes.",
            howTo: [
              "Take the free GVB ferry to Amsterdam Noord",
              "Bus 315 or 316 to Marken (~30 min) or rent a bike",
              "Nearby villages: Volendam and Edam (~30 min by bus), Monnickendam and Purmerend (~15 min)"
            ]
          },
          {
            name: "Muiden & Muiderslot",
            emoji: "🏰",
            subtitle: "A Real Castle",
            why: "Muiderslot castle dates from the 13th century and is maintained as part of the Rijksmuseum. Excellent half-day trip for those who like medieval history.",
            tip: "Train to Weesp + bus 110 to Muiden Centrum. Total time from Amsterdam center: ~45 min. Check schedules and book tickets online."
          },
          {
            name: "Almere & Lelystad (New Land)",
            emoji: "🦅",
            subtitle: "Engineering and Nature",
            why: "Cities on reclaimed land from the sea, with modern architecture and Nieuw Land park (bird watching).",
            howTo: [
              "Train from Amsterdam Centraal to Almere Centrum: 20 min",
              "From Almere to Lelystad Centrum: another 14 min",
              "For the park: get off at Almere Oostvaarders + 20 min walk"
            ]
          }
        ]
      },
      tips: {
        title: "General tips for stress-free day trips",
        items: [
          { icon: "📅", title: "Prefer weekdays", text: "Weekend excursions increase queue time and number of people." },
          { icon: "⏰", title: "Start early", text: "Leaving before 09:00 guarantees emptier cities and attractions." },
          { icon: "🕐", title: "Plan by useful time", text: "Destinations requiring more than 1.5h travel each way consume most of the day." },
          { icon: "💳", title: "Check payment and reservations", text: "Many places are cashless and require online tickets (Zaanse Schans, Keukenhof, museums)." },
          { icon: "🌧️", title: "Check weather forecast", text: "The Netherlands is famous for unexpected wind and rain. Bring a waterproof jacket." }
        ]
      },
      ranking: {
        title: "Practical Ranking: Which day trip to choose?",
        items: [
          { condition: "Only one free day", dest: "Haarlem or Utrecht (quick arrival, lots of atmosphere)" },
          { condition: "Spring (March-May)", dest: "Keukenhof (weekday, early)" },
          { condition: "Canals and young atmosphere", dest: "Utrecht (25 min by train)" },
          { condition: "Modern architecture", dest: "Rotterdam (40 min by train)" },
          { condition: "Postcard with windmills", dest: "Zaanse Schans (check 2026 rules)" },
          { condition: "Picturesque village", dest: "Giethoorn (only if you have time to spare)" }
        ]
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          { q: "What's the best day trip for those short on time?", a: "Haarlem or Utrecht are excellent: trains take about 20–25 minutes and you can enjoy the whole day." },
          { q: "Is Keukenhof worth it?", a: "Yes, but only during the official season (March 19 to May 10, 2026). Go on a weekday and buy tickets online." },
          { q: "Has Zaanse Schans become a tourist trap?", a: "It still delivers for the landscape, but in 2026 you'll need to pay €17.50 entry. Plan your timing and know there will be access control." },
          { q: "Is Giethoorn worth the travel?", a: "Only if you have days to spare or want a romantic outing. The train journey takes up to 2.5 hours, and canals can get congested in summer." },
          { q: "Can I combine two destinations in one day?", a: "Yes: Delft + Rotterdam, Haarlem + Zandvoort beach, Zaanse Schans + Alkmaar (cheese). Check train schedules." },
          { q: "Do I need to book in advance?", a: "For Zaanse Schans, Keukenhof, museums like Rijksmuseum and Anne Frank House: yes. For Haarlem, Utrecht or Waterland: no, just go." },
          { q: "How does transport work?", a: "NS train is standard. Use OVpay (contactless card) or buy tickets in NS app. Keukenhof has special bus (852 from RAI)." },
          { q: "What's the best time for each destination?", a: "Spring for Keukenhof; summer for Marken and Waterland; autumn for Utrecht and Haarlem. Zaanse Schans and castles work year-round, but avoid heavy rain days." }
        ]
      },
      sources: {
        title: "Official sources and references",
        text: "Information in this guide was obtained from official tourism websites and public agencies: I amsterdam (regional transport), Zaanstad Municipality (€17.50 ticket), Keukenhof (2026 dates), GVB/NS (travel times), Rijksmuseum Muiderslot (access via Weesp), Giethoorn.nl (travel times)."
      }
    },
    nl: {
      title: "Dagtrips vanuit Amsterdam in 2026",
      description: "Complete gids met deur-tot-deur reistijden, drukte en strategieën",
      intro: "Amsterdam is een uitstekend vertrekpunt om andere plekken in Nederland te verkennen. In 2026 blijft dit waar, maar er zijn belangrijke veranderingen: naast de verhoging van toeristenbelasting in de hoofdstad, hebben sommige nabijgelegen attracties nu toegangscontrole. Daarom is het goed plannen van je dagtrip — rekening houdend met drukte, reistijd en regels van 2026 — het geheim voor een geweldige dag.",
      pillarIntro: "Deze gids vat klassieke bestemmingen samen, legt uit hoe je er komt (geschatte deur-tot-deur reistijd), geeft aan wat er in 2026 is veranderd en presenteert strategieën om de menigte te ontwijken. Informatie komt uitsluitend van officiële bronnen — toerismeportalen van de gemeente Amsterdam, de provincie of de attracties zelf.",
      howToChoose: {
        title: "Hoe kies je de ideale dagtrip",
        items: [
          "Denk na over tijd en reisprofiel. Vanuit het centrum van Amsterdam bereik je nabije bestemmingen in 15–40 minuten per trein of bus, terwijl afgelegen plekken 2 uur of meer kunnen vragen.",
          "Voor wie maar één vrije dag heeft of Nederland voor het eerst bezoekt, leveren steden als Haarlem en Utrecht veel op met weinig reistijd.",
          "Check het seizoen. Keukenhof is bijvoorbeeld alleen open van 19 maart tot 10 mei 2026.",
          "Overweeg drukte en ervaring. Klassieke locaties trekken toergroepen aan en kunnen midden op de dag verzadigd raken."
        ]
      },
      quickPick: {
        title: "Welke dagtrip kiezen? (Praktische Ranglijst)",
        items: [
          { condition: "Maar één vrije dag", dest: "Haarlem of Utrecht", reason: "Snelle aankomst (~20–25 min), veel geschiedenis en sfeer" },
          { condition: "Lente (maart–mei)", dest: "Keukenhof", reason: "Tulpenseizoen, kom vroeg en ga doordeweeks" },
          { condition: "Grachten en jonge sfeer", dest: "Utrecht", reason: "Lage grachten en universiteitscafés (25 min)" },
          { condition: "Moderne architectuur", dest: "Rotterdam", reason: "Futuristische skyline (~40 min per trein)" },
          { condition: "Ansichtkaart met molens", dest: "Zaanse Schans", reason: "Vereist ticket in 2026; ga vroeg" },
          { condition: "Pittoresk dorp (met tijd)", dest: "Giethoorn", reason: "2–2,5 uur per trein; alleen als je dagen over hebt" }
        ]
      },
      tabs: {
        classics: "Klassiekers",
        miniAms: "Mini-Amsterdams",
        modern: "Modern",
        bike: "Per Fiets"
      },
      classics: {
        title: "Uitgelichte bestemmingen",
        subtitle: "De populairste, maar vereisen planning.",
        items: [
          {
            name: "Zaanse Schans",
            emoji: "🏭",
            subtitle: "Klassiek en Must-See",
            time: "17 min trein + 15 min wandeling",
            what: "Trein van Centraal Station naar Zaandijk – Zaanse Schans in ca. 17 minuten, gevolgd door een wandeling naar het molendorp. Alternatief: uitstappen in Zaandam (12 min) en bus/taxi nemen.",
            reality: "De gemeente Zaanstad heeft toegangscontrole goedgekeurd: vanaf 2026 kost de toegang €17,50 (lokale bewoners gratis).",
            strategy: [
              "Bezoek vroeg (voor 10u) of laat in de middag om toergroepen te vermijden",
              "Koop tickets van tevoren online, vooral op zonnige weekenden",
              "Voor foto's en wandelen: twee uur genoeg; voor musea en molens: reserveer een halve dag"
            ],
            warning2026: "Betaalde toegang van €17,50 voor volwassenen vanaf 2026. Check huidige regels voor je gaat.",
            mustSee: true
          },
          {
            name: "Keukenhof",
            emoji: "🌷",
            subtitle: "Seizoensgebonden Tulpen",
            time: "~1 uur deur tot deur (bus 852 van RAI)",
            what: "De Keukenhof Express (bus 852) vertrekt van station Amsterdam RAI en doet er ongeveer 35 minuten over naar de parkingang. Inclusief reistijd van het centrum naar RAI: reken op ongeveer 1 uur deur tot deur.",
            seasonal: "Open 19 maart tot 10 mei 2026, dagelijks 08:00 tot 19:00 (toegang tot 18:15). Tickets hebben vaste datum en tijd.",
            strategy: [
              "Bezoek doordeweeks, bij voorkeur bij opening",
              "Weekenden tussen april en begin mei vullen snel",
              "Koop tickets en combi-ticket (vervoer + toegang) van tevoren (voorverkoop in februari)"
            ],
            practical: [
              "Werkt cashless (geen contant)",
              "Parkeren €9 online kopen",
              "Als je gestreepte 'tulpenvelden' wilt: dat is buiten het park"
            ],
            mustSee: true
          },
          {
            name: "Giethoorn",
            emoji: "🚣",
            subtitle: "Venetië van Nederland (met kanttekeningen)",
            time: "2 tot 2,5 uur per trein (~€25/persoon)",
            what: "Per trein duurt de reis Amsterdam → Giethoorn 2 tot 2,5 uur, inclusief overstappen in Zwolle. Per auto: 1u25. Per tourbus: ~1u40.",
            reality: "Giethoorn is prachtig, maar de reis kost de hele dag. In de zomer en op feestdagen raken de grachten verstopt met bootjes.",
            alternative: "Als je weinig tijd hebt in Nederland, overweeg dichterbij gelegen bestemmingen (Utrecht of Haarlem), die ook charmante grachten en architectuur bieden zonder ingewikkelde logistiek.",
            mustSee: false
          }
        ]
      },
      miniAms: {
        title: "Steden bij Amsterdam",
        subtitle: "Historisch, makkelijk, met minder toeristendruk.",
        items: [
          {
            name: "Haarlem",
            emoji: "🏛️",
            subtitle: "De Beste Buur",
            time: "~20 min per trein",
            why: "Haarlem wordt beschouwd als een 'mini-Amsterdam': grachten, 17e-eeuwse architectuur en goede culturele scene, met minder toeristen. De Grote Markt is perfect om te voet te verkennen.",
            todo: [
              "Historisch centrum en Grote Markt",
              "Frans Hals Museum of brouwerij Jopenkerk",
              "Combineer met Zuid-Kennemerland (duinen) of strand Zandvoort"
            ],
            mustSee: true
          },
          {
            name: "Utrecht",
            emoji: "🎓",
            subtitle: "Unieke Grachten en Jonge Sfeer",
            time: "~25 min Intercity trein",
            why: "Utrecht combineert een universiteitssfeer met grachten die anders zijn dan Amsterdam: de oevers zijn lager en vol cafés. Ideaal om zonder route te wandelen.",
            todo: [
              "Wandel langs de grachten en ga aan het water zitten",
              "Bezoek de Domtoren",
              "Muziekmuseum Speelklok"
            ],
            mustSee: true
          },
          {
            name: "Delft",
            emoji: "🏺",
            subtitle: "Delfts Blauw en Historische Charme",
            time: "~1 uur per trein",
            why: "Klein en fotogeniek, Delft is de geboorteplaats van Delfts Blauw en Vermeer. Het historische centrum is compact, met een mooie markt en smalle grachten.",
            combo: "Ochtend in Delft, middag in Den Haag (Mauritshuis en Binnenhof). In 2026: geweldige bestemming voor een rustige dag.",
            mustSee: false
          }
        ]
      },
      modern: {
        title: "Rotterdam – Het Moderne Anti-Amsterdam",
        subtitle: "Voor wie het 'anti-Amsterdam' wil.",
        item: {
          name: "Rotterdam",
          emoji: "🏙️",
          subtitle: "Architectuur en Stad van de Toekomst",
          time: "~40 min per trein (25-30 min vanaf Amsterdam Zuid met Intercity Direct)",
          why: "Rotterdam maakt indruk juist door het tegenovergestelde van Amsterdam te zijn: verticale skyline, futuristische architectuur (kubuswoningen, Markthal), havens en designmusea.",
          todo: [
            "Markthal (indrukwekkende overdekte markt)",
            "Kubuswoningen en skyline",
            "Combineer met Delft op dezelfde dag (ochtend Delft, middag Rotterdam)"
          ]
        }
      },
      bike: {
        title: "Dagtrips per fiets vanuit Amsterdam",
        subtitle: "Nederland is vlak, maar wind en weer veranderen het spel.",
        items: [
          {
            name: "Marken en Waterland",
            emoji: "🚴",
            subtitle: "Landelijk, Dichtbij en Rustig",
            why: "Levert 'landelijk Nederland' zonder massaexcursies. Dorpen bewaren kleurrijke houten huizen en dijken.",
            howTo: [
              "Neem de gratis GVB-pont naar Amsterdam Noord",
              "Bus 315 of 316 naar Marken (~30 min) of huur een fiets",
              "Nabije dorpen: Volendam en Edam (~30 min per bus), Monnickendam en Purmerend (~15 min)"
            ]
          },
          {
            name: "Muiden & Muiderslot",
            emoji: "🏰",
            subtitle: "Een Echt Kasteel",
            why: "Het Muiderslot dateert uit de 13e eeuw en wordt onderhouden als onderdeel van het Rijksmuseum. Uitstekende halve dag trip voor wie van middeleeuwse geschiedenis houdt.",
            tip: "Trein naar Weesp + bus 110 naar Muiden Centrum. Totale tijd vanaf Amsterdam centrum: ~45 min. Check openingstijden en boek tickets online."
          },
          {
            name: "Almere & Lelystad (Nieuw Land)",
            emoji: "🦅",
            subtitle: "Techniek en Natuur",
            why: "Steden op land herwonnen van de zee, met moderne architectuur en Nieuw Land park (vogels spotten).",
            howTo: [
              "Trein van Amsterdam Centraal naar Almere Centrum: 20 min",
              "Van Almere naar Lelystad Centrum: nog 14 min",
              "Voor het park: uitstappen bij Almere Oostvaarders + 20 min lopen"
            ]
          }
        ]
      },
      tips: {
        title: "Algemene tips voor stressvrije dagtrips",
        items: [
          { icon: "📅", title: "Kies voor doordeweeks", text: "Weekend-excursies verhogen wachttijd en aantal mensen." },
          { icon: "⏰", title: "Begin vroeg", text: "Vertrekken voor 09:00 garandeert lege steden en attracties." },
          { icon: "🕐", title: "Plan op nuttige tijd", text: "Bestemmingen met meer dan 1,5 uur reistijd per kant kosten het grootste deel van de dag." },
          { icon: "💳", title: "Check betaling en reserveringen", text: "Veel plekken zijn cashless en vereisen online tickets (Zaanse Schans, Keukenhof, musea)." },
          { icon: "🌧️", title: "Check weersvoorspelling", text: "Nederland staat bekend om onverwachte wind en regen. Neem een regenjas mee." }
        ]
      },
      ranking: {
        title: "Praktische Ranglijst: Welke dagtrip kiezen?",
        items: [
          { condition: "Maar één vrije dag", dest: "Haarlem of Utrecht (snelle aankomst, veel sfeer)" },
          { condition: "Lente (maart-mei)", dest: "Keukenhof (doordeweeks, vroeg)" },
          { condition: "Grachten en jonge sfeer", dest: "Utrecht (25 min per trein)" },
          { condition: "Moderne architectuur", dest: "Rotterdam (40 min per trein)" },
          { condition: "Ansichtkaart met molens", dest: "Zaanse Schans (check 2026 regels)" },
          { condition: "Pittoresk dorp", dest: "Giethoorn (alleen als je tijd over hebt)" }
        ]
      },
      faq: {
        title: "Veelgestelde Vragen",
        items: [
          { q: "Wat is de beste dagtrip voor wie weinig tijd heeft?", a: "Haarlem of Utrecht zijn uitstekend: treinen doen er ongeveer 20–25 minuten over en je kunt de hele dag genieten." },
          { q: "Is Keukenhof de moeite waard?", a: "Ja, maar alleen tijdens het officiële seizoen (19 maart tot 10 mei 2026). Ga doordeweeks en koop tickets online." },
          { q: "Is Zaanse Schans een toeristenval geworden?", a: "Het is nog steeds de moeite waard voor het landschap, maar in 2026 moet je €17,50 toegang betalen. Plan je timing en weet dat er toegangscontrole komt." },
          { q: "Is Giethoorn de reis waard?", a: "Alleen als je dagen over hebt of een romantisch uitje wilt. De treinreis duurt tot 2,5 uur en grachten kunnen in de zomer verstopt raken." },
          { q: "Kan ik twee bestemmingen combineren op één dag?", a: "Ja: Delft + Rotterdam, Haarlem + strand Zandvoort, Zaanse Schans + Alkmaar (kaas). Check treinschema's." },
          { q: "Moet ik van tevoren boeken?", a: "Voor Zaanse Schans, Keukenhof, musea als Rijksmuseum en Anne Frank Huis: ja. Voor Haarlem, Utrecht of Waterland: nee, gewoon gaan." },
          { q: "Hoe werkt het vervoer?", a: "NS-trein is standaard. Gebruik OVpay (contactloze kaart) of koop tickets in de NS-app. Keukenhof heeft speciale bus (852 van RAI)." },
          { q: "Wat is de beste tijd voor elke bestemming?", a: "Lente voor Keukenhof; zomer voor Marken en Waterland; herfst voor Utrecht en Haarlem. Zaanse Schans en kastelen werken het hele jaar, maar vermijd dagen met zware regen." }
        ]
      },
      sources: {
        title: "Officiële bronnen en referenties",
        text: "Informatie in deze gids komt van officiële toerisme websites en overheidsinstanties: I amsterdam (regionaal vervoer), Gemeente Zaanstad (€17,50 ticket), Keukenhof (data 2026), GVB/NS (reistijden), Rijksmuseum Muiderslot (toegang via Weesp), Giethoorn.nl (reistijden)."
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

      <IntroSection intro={content.intro} pillarIntro={content.pillarIntro} />
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

      {/* Affiliate Section */}
      <section className="py-8 lg:py-12">
        <div className="container max-w-4xl">
          <AffiliateBanner type="zaanseSchans" />
        </div>
      </section>

      {/* Sources Section */}
      <section className="py-8 lg:py-12 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-xl font-heading font-semibold mb-4">{content.sources.title}</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">{content.sources.text}</p>
        </div>
      </section>

      <FAQSection title={content.faq.title} items={content.faq.items} />
      
      <RelatedContent currentPage="arredores" />
      
      <RelatedPagesSection 
        currentPath="/arredores"
        suggestedPaths={["/transporte", "/planejamento", "/atracoes", "/gastronomia"]}
      />
    </PageLayout>
  );
};

export default Arredores;
