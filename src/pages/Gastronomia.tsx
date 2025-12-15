import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { UtensilsCrossed } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import {
  IntroSection,
  GoldenRuleSection,
  StrategySection,
  FoodTabsSection,
  TouristTrapsSection,
  PracticalRulesSection,
  FAQSection
} from "@/components/gastronomia";

const Gastronomia = () => {
  const { language } = useLanguage();

  const content = language === "pt" ? {
    title: "Gastronomia em Amsterdam",
    description: "Onde comer em Amsterdam: o guia sem papo furado",
    intro: "Amsterdam não é só batata e queijo. A cidade tem um ecossistema de comida bem específico: mercados de rua, cafés históricos, herança indonésia e uma cena moderna que valoriza ingredientes locais e sazonalidade.",
    goldenRule: {
      title: "A regra que evita 80% das decepções",
      text: "Se o lugar precisa te convencer na porta (foto plastificada do prato, alguém chamando na rua, cardápio em 8 idiomas na Damrak), quase sempre você paga caro por comida mediana. Anda 2 ruas para dentro do bairro e a média de qualidade sobe."
    },
    strategy: {
      title: "Como comer bem sem gastar à toa",
      tips: [
        { title: "Almoço forte, jantar mais leve", desc: "Muitos restaurantes têm menu do dia no almoço com melhor custo-benefício." },
        { title: "Mercado e padaria para 'comida boa de verdade'", desc: "Grande parte do que é icônico em Amsterdam funciona melhor em feira de rua e padaria." },
        { title: "Reserva para jantar sério", desc: "Restaurantes disputados lotam com facilidade, então planejar evita perder tempo tentando 'dar sorte'." }
      ]
    },
    tabs: {
      street: "Comida de Rua",
      dinner: "Jantar Sério",
      drinks: "Bebidas",
      foodhalls: "Food Halls"
    },
    streetFood: [
      {
        emoji: "🧇",
        name: "Stroopwafel Autêntico",
        what: "Dois waffles finos prensados com caramelo quente e especiarias.",
        trap: "Comer stroopwafel de pacote na hora. Ele perde textura porque o caramelo endurece quando esfria.",
        right: "Compre fresco e quente em mercado ou padaria. Para 'reviver' depois: apoie sobre uma xícara de café quente por 2 minutos.",
        where: "Albert Cuypmarkt é o cenário clássico."
      },
      {
        emoji: "🐟",
        name: "Haring (Arenque Curado)",
        what: "Arenque curado, com textura bem macia quando está bom. Temporada do Hollandse Nieuwe (maio a julho) valorizada por ter mais gordura (mínimo 16%).",
        trap: "Comer sem saber o que esperar e não gostar da textura.",
        right: "Peça cortado (partjes) com cebola e picles. É o modo mais amigável para iniciantes.",
        where: "Qualquer haringhandel de boa reputação."
      },
      {
        emoji: "🍟",
        name: "Frites Holandesas",
        what: "Batata realmente crocante vem de fritura em duas etapas: primeiro cozinha por dentro, depois doura por fora (reação de Maillard).",
        trap: "Comprar só pelo visual da fila sem avaliar se a batata sai crocante.",
        right: "Patatje oorlog (maionese + satay + cebola). Parece caos, mas funciona por contraste de gordura, sal e aromáticos.",
        where: "Vlaams Friteshuis Vleminckx"
      },
      {
        emoji: "🍩",
        name: "Bitterballen",
        what: "Bolinha empanada com ragu. O recheio vira 'lava' porque é uma emulsão espessa com amido e gelatina.",
        trap: "Morder logo e queimar a boca. Isso não é frescura, é física do calor.",
        right: "Espere alguns minutos, morda de leve e use mostarda.",
        where: "Qualquer brown café (bruine kroeg)"
      },
      {
        emoji: "🥞",
        name: "Poffertjes",
        what: "Mini panquecas bem aeradas. A graça é a combinação de manteiga derretida com açúcar.",
        trap: "Versões muito carregadas de toppings que escondem o sabor original.",
        right: "Clássica com manteiga e açúcar de confeiteiro.",
        where: "Mercados de rua e feiras"
      },
      {
        emoji: "🤖",
        name: "FEBO (Automat)",
        what: "A 'parede de comida' onde você pega croquete em compartimentos. Nasceu em Amsterdam como padaria em 1941, primeiro automatiek nos anos 1960.",
        trap: "Esperar refeição gastronômica. É fast food.",
        right: "Vá pela experiência cultural: rápido, barato e bem holandês. Kroket e kaassouflé são os clássicos.",
        where: "Várias unidades pela cidade"
      }
    ],
    dinner: {
      rijsttafel: {
        name: "Rijsttafel Indonésio",
        why: "A relação histórica Holanda-Indonésia deixou marca real no paladar local. O rijsttafel virou forma popular de provar muitos preparos na mesma refeição, equilibrando picante, doce, ácido, crocante e cremoso.",
        how: "Procure casas com boa reputação em cozinha indonésia e reserve, porque é jantar demorado e concorrido.",
        tip: "Se você não gosta de ardor, avise antes. Não é vergonha, é ajuste de experiência."
      },
      brownCafe: {
        name: "Brown Cafés",
        what: "Bares antigos, madeira escura, clima de 'conversa e cerveja'. São o lugar certo para um borrel (fim de tarde com petiscos).",
        examples: "Café Hoppe (Spui) e De Drie Fleschjes são dos mais conhecidos e históricos.",
        order: "Bitterballen + cerveja é o combo clássico."
      }
    },
    drinks: {
      jenever: {
        name: "Jenever",
        what: "Destilado holandês que antecede o gin em popularidade histórica.",
        where: "Wynand Fockink é um proeflokaal histórico tradicional no centro.",
        tip: "Peça com respeito ao ritual da casa."
      },
      beer: {
        name: "Cerveja Artesanal",
        places: [
          { name: "Brouwerij 't IJ", desc: "Cervejaria famosa perto do moinho De Gooyer. Costuma fechar cedo (por volta de 20:00)." },
          { name: "Oedipus (Noord)", desc: "Ambiente mais moderno e experimental." }
        ]
      }
    },
    foodhalls: {
      foodhallen: {
        name: "Foodhallen",
        what: "Mercado interno de comida dentro do complexo De Hallen. Cerca de 20 bancas.",
        tip: "Fim de semana fica cheio. Vá cedo ou em horários fora do pico.",
        bonus: "Combine com o Ten Katemarkt (logo perto) para compras com preços mais 'de bairro'."
      },
      worldOfFood: {
        name: "World of Food",
        warning: "Esse lugar foi muito recomendado por anos, mas teve fechamento e processo de demolição/reconstrução. Trate como 'talvez indisponível' ao montar roteiro.",
        alt: "Explore mercados e áreas de bairros com forte presença de imigração usando avaliação recente no Google Maps."
      }
    },
    traps: {
      title: "Zonas de Perigo: Armadilhas Turísticas",
      items: [
        { icon: "🧇", text: "Waffle gigante com Nutella e montanha de doce — fotogênico, caro e raramente memorável." },
        { icon: "🍽️", text: "Restaurante genérico colado na Damrak e Leidseplein — alta chance de preço inflado e cozinha sem cuidado." },
        { icon: "📋", text: "Cardápio com foto plastificada e alguém te puxando para entrar — sinal clássico de armadilha." }
      ]
    },
    rules: {
      title: "Regras Práticas (Que Salvam Viagem)",
      items: [
        { icon: "💰", title: "Gorjeta", text: "Não é obrigatória na cultura local, mas é bem-vinda. Arredondar em cafés e deixar 5% a 10% em restaurante é visto como generoso." },
        { icon: "💳", title: "Cartão x Dinheiro", text: "A Holanda caminha forte para pagamentos digitais. 'Pin only' é comum. Tenha cartão contactless funcionando e um plano B." },
        { icon: "💧", title: "Água", text: "Pedir água de torneira (kraanwater) costuma ser normal, mas alguns lugares cobram pequena taxa. Varia por casa." }
      ]
    },
    faq: {
      title: "Perguntas Frequentes",
      items: [
        { q: "O que eu preciso comer em Amsterdam se tenho poucos dias?", a: "Se você fizer só 4 coisas: stroopwafel fresco, frites com um molho clássico, bitterballen num brown café e um jantar indonésio. Isso cobre rua, bar e 'jantar de verdade'." },
        { q: "Onde comer barato sem cair em cilada?", a: "Mercados de rua, padarias e lanchonetes sem 'show para turista'. Foodhallen funciona, mas não é 'barato'; é prático e variado." },
        { q: "Foodhallen vale a pena?", a: "Vale quando você está em grupo ou indeciso e quer variedade no mesmo lugar. Só alinhe expectativa: é cheio, e a conta pode subir porque você compra em várias bancas." },
        { q: "O que é brown café e por que eu deveria ir?", a: "É o bar tradicional, ótimo para 'fim de tarde', cerveja, petiscos e clima local. Não é para alta gastronomia; é para viver o ritmo da cidade." },
        { q: "Vale fazer tour gastronômico?", a: "Vale se você quer contexto histórico e não quer gastar energia pesquisando. Não vale se você topa fazer roteiro próprio e testar 2 ou 3 lugares por dia." },
        { q: "Amsterdam é boa para vegetariano e vegano?", a: "Sim. É comum encontrar opções bem pensadas, não só 'tirar a carne do prato'. Você não fica refém de salada." },
        { q: "Gorjeta é obrigatória?", a: "Não. Arredondar é comum; 5% a 10% em restaurante é visto como gesto generoso." },
        { q: "Restaurantes aceitam cartão?", a: "A maioria sim, e muitos preferem cartão (pin). Tenha cartão contactless e um segundo cartão, porque 'pin only' existe." },
        { q: "Dá para pedir água da torneira?", a: "Em muitos lugares, sim. Alguns cobram taxa pequena, então depende do restaurante." },
        { q: "O World of Food está funcionando?", a: "Houve fechamento e processo de reconstrução divulgado. Verifique status recente antes de ir." },
        { q: "Qual cervejaria eu não deveria perder?", a: "Se você quer 'ícone', Brouwerij 't IJ. Só não deixe para tarde, porque costuma fechar cedo." },
        { q: "FEBO vale como experiência?", a: "Vale como 'folclore urbano': rápido, barato e bem holandês. Só não espere refeição gastronômica." }
      ]
    }
  } : {
    title: "Food in Amsterdam",
    description: "Where to eat in Amsterdam: the no-nonsense guide",
    intro: "Amsterdam isn't just fries and cheese. The city has a specific food ecosystem: street markets, historic cafés, Indonesian heritage, and a modern scene that values local ingredients and seasonality.",
    goldenRule: {
      title: "The rule that avoids 80% of disappointments",
      text: "If the place needs to convince you at the door (laminated food photos, someone calling you from the street, menu in 8 languages on Damrak), you almost always pay too much for mediocre food. Walk 2 streets into the neighborhood and quality average rises."
    },
    strategy: {
      title: "How to eat well without overspending",
      tips: [
        { title: "Heavy lunch, lighter dinner", desc: "Many restaurants have lunch specials with better value." },
        { title: "Markets and bakeries for 'real good food'", desc: "Much of what's iconic in Amsterdam works better at street fairs and bakeries." },
        { title: "Reservations for serious dinner", desc: "Popular restaurants fill up easily, so planning avoids wasting time hoping to 'get lucky'." }
      ]
    },
    tabs: {
      street: "Street Food",
      dinner: "Serious Dinner",
      drinks: "Drinks",
      foodhalls: "Food Halls"
    },
    streetFood: [
      {
        emoji: "🧇",
        name: "Authentic Stroopwafel",
        what: "Two thin waffles pressed with hot caramel and spices.",
        trap: "Eating packaged stroopwafel right away. It loses texture because caramel hardens when cold.",
        right: "Buy fresh and hot at a market or bakery. To 'revive' later: rest it over a hot coffee cup for 2 minutes.",
        where: "Albert Cuypmarkt is the classic spot."
      },
      {
        emoji: "🐟",
        name: "Haring (Cured Herring)",
        what: "Cured herring with soft texture when good. Hollandse Nieuwe season (May-July) is prized for higher fat content (minimum 16%).",
        trap: "Eating without knowing what to expect and not liking the texture.",
        right: "Order cut (partjes) with onions and pickles. Most beginner-friendly way.",
        where: "Any reputable haringhandel."
      },
      {
        emoji: "🍟",
        name: "Dutch Frites",
        what: "Really crispy fries come from double frying: first cook inside, then brown outside (Maillard reaction).",
        trap: "Buying just because of the queue without checking if fries are actually crispy.",
        right: "Patatje oorlog (mayo + satay + onion). Looks like chaos but works through fat, salt and aromatic contrast.",
        where: "Vlaams Friteshuis Vleminckx"
      },
      {
        emoji: "🍩",
        name: "Bitterballen",
        what: "Breaded ball with ragout. Filling becomes 'lava' because it's a thick emulsion with starch and gelatin.",
        trap: "Biting immediately and burning your mouth. This isn't fussiness, it's heat physics.",
        right: "Wait a few minutes, bite gently and use mustard.",
        where: "Any brown café (bruine kroeg)"
      },
      {
        emoji: "🥞",
        name: "Poffertjes",
        what: "Airy mini pancakes. The charm is the combo of melted butter with powdered sugar.",
        trap: "Versions too loaded with toppings that hide the original flavor.",
        right: "Classic with butter and powdered sugar.",
        where: "Street markets and fairs"
      },
      {
        emoji: "🤖",
        name: "FEBO (Automat)",
        what: "The 'food wall' where you grab croquettes from compartments. Started as bakery in Amsterdam 1941, first automatiek in the 1960s.",
        trap: "Expecting gourmet meal. It's fast food.",
        right: "Go for the cultural experience: fast, cheap and very Dutch. Kroket and kaassouflé are classics.",
        where: "Multiple locations around the city"
      }
    ],
    dinner: {
      rijsttafel: {
        name: "Indonesian Rijsttafel",
        why: "The historical Dutch-Indonesian relationship left real mark on local palate. Rijsttafel became popular way to try many dishes in one meal, balancing spicy, sweet, sour, crunchy and creamy.",
        how: "Look for places with good Indonesian reputation and book ahead, as it's a long and busy dinner.",
        tip: "If you don't like spice, say so beforehand. It's not embarrassing, it's adjusting the experience."
      },
      brownCafe: {
        name: "Brown Cafés",
        what: "Old bars, dark wood, 'conversation and beer' atmosphere. The right place for borrel (late afternoon with snacks).",
        examples: "Café Hoppe (Spui) and De Drie Fleschjes are among the most famous and historic.",
        order: "Bitterballen + beer is the classic combo."
      }
    },
    drinks: {
      jenever: {
        name: "Jenever",
        what: "Dutch spirit that predates gin in historical popularity.",
        where: "Wynand Fockink is a traditional historic proeflokaal downtown.",
        tip: "Order with respect for the house ritual."
      },
      beer: {
        name: "Craft Beer",
        places: [
          { name: "Brouwerij 't IJ", desc: "Famous brewery near De Gooyer windmill. Usually closes early (around 8 PM)." },
          { name: "Oedipus (Noord)", desc: "More modern and experimental atmosphere." }
        ]
      }
    },
    foodhalls: {
      foodhallen: {
        name: "Foodhallen",
        what: "Indoor food market inside De Hallen complex. About 20 stalls.",
        tip: "Weekends get crowded. Go early or off-peak hours.",
        bonus: "Combine with Ten Katemarkt (nearby) for more 'neighborhood' prices."
      },
      worldOfFood: {
        name: "World of Food",
        warning: "This place was highly recommended for years, but had closure and demolition/reconstruction process. Treat as 'possibly unavailable' when planning.",
        alt: "Explore markets and neighborhoods with strong immigrant presence using recent Google Maps reviews."
      }
    },
    traps: {
      title: "Danger Zones: Tourist Traps",
      items: [
        { icon: "🧇", text: "Giant waffle with Nutella and mountain of toppings — photogenic, expensive and rarely memorable." },
        { icon: "🍽️", text: "Generic restaurant on Damrak and Leidseplein — high chance of inflated prices and careless cooking." },
        { icon: "📋", text: "Laminated menu photos and someone pulling you in — classic trap sign." }
      ]
    },
    rules: {
      title: "Practical Rules (That Save Your Trip)",
      items: [
        { icon: "💰", title: "Tipping", text: "Not mandatory in local culture, but welcome. Rounding up at cafés and leaving 5-10% at restaurants is seen as generous." },
        { icon: "💳", title: "Card vs Cash", text: "Netherlands is going strong on digital payments. 'Pin only' is common. Have working contactless card and a backup." },
        { icon: "💧", title: "Water", text: "Asking for tap water (kraanwater) is usually normal, but some places charge small fee. Varies by place." }
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        { q: "What must I eat in Amsterdam if I have few days?", a: "If you do only 4 things: fresh stroopwafel, frites with classic sauce, bitterballen at a brown café and Indonesian dinner. This covers street, bar and 'real dinner'." },
        { q: "Where to eat cheap without getting trapped?", a: "Street markets, bakeries and eateries without 'tourist show'. Foodhallen works but isn't 'cheap'; it's practical and varied." },
        { q: "Is Foodhallen worth it?", a: "Worth it when you're in a group or undecided and want variety in one place. Just align expectations: it's crowded, and bill can rise since you buy from multiple stalls." },
        { q: "What's a brown café and why should I go?", a: "It's the traditional bar, great for 'late afternoon', beer, snacks and local vibe. Not for fine dining; it's for living the city rhythm." },
        { q: "Is a food tour worth it?", a: "Worth it if you want historical context and don't want to spend energy researching. Not worth it if you're okay making your own route and testing 2-3 places per day." },
        { q: "Is Amsterdam good for vegetarians and vegans?", a: "Yes. Common to find well-thought options, not just 'remove the meat'. You won't be stuck with salads." },
        { q: "Is tipping mandatory?", a: "No. Rounding up is common; 5-10% at restaurants is seen as generous gesture." },
        { q: "Do restaurants accept cards?", a: "Most do, and many prefer card (pin). Have contactless card and second card, as 'pin only' exists." },
        { q: "Can I ask for tap water?", a: "In many places, yes. Some charge small fee, so it depends on the restaurant." },
        { q: "Is World of Food open?", a: "There was closure and reconstruction process announced. Check recent status before going." },
        { q: "Which brewery shouldn't I miss?", a: "If you want 'iconic', Brouwerij 't IJ. Just don't leave it too late, as it usually closes early." },
        { q: "Is FEBO worth it as an experience?", a: "Worth it as 'urban folklore': fast, cheap and very Dutch. Just don't expect gourmet meal." }
      ]
    }
  };

  return (
    <PageLayout>
      <PageHero
        icon={UtensilsCrossed}
        title={content.title}
        description={content.description}
        gradient="from-[#8B4513] to-[#D2691E]"
      />

      <IntroSection intro={content.intro} />
      
      <GoldenRuleSection 
        title={content.goldenRule.title} 
        text={content.goldenRule.text} 
      />
      
      <StrategySection 
        title={content.strategy.title} 
        tips={content.strategy.tips} 
      />
      
      <FoodTabsSection
        tabs={content.tabs}
        streetFood={content.streetFood}
        dinner={content.dinner}
        drinks={content.drinks}
        foodhalls={content.foodhalls}
        language={language}
      />
      
      <TouristTrapsSection 
        title={content.traps.title} 
        items={content.traps.items} 
      />
      
      <PracticalRulesSection 
        title={content.rules.title} 
        items={content.rules.items} 
      />
      
      <FAQSection 
        title={content.faq.title} 
        items={content.faq.items} 
      />
    </PageLayout>
  );
};

export default Gastronomia;
