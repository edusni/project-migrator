import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Leaf } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import coffeeshopHeroImg from "@/assets/coffeeshop-bulldog.png";
import {
  IntroSection,
  WhatIsSection,
  TouristsAllowedSection,
  StreetRuleSection,
  ExplorerSection,
  MainTabsSection,
  GlossarySection,
  FAQSection
} from "@/components/coffeeshops";

const Coffeeshops = () => {
  const { language } = useLanguage();

  const content = language === "pt" ? {
    title: "Coffeeshops em Amsterdam 2025",
    description: "Guia responsável para entender regras, etiqueta e como evitar multa e dor de cabeça",
    intro: "A cultura de coffeeshops é MUITO mais complexa, matizada e burocrática do que a maioria imagina. É uma cultura enraizada num pragmatismo holandês único, numa história de redução de danos.",
    whatIs: {
      title: "O que um coffeeshop é (e o que ele não é)",
      text: "Coffeeshop, em Amsterdam, é um estabelecimento licenciado para vender cannabis sob regras de tolerância. A cannabis NÃO vira 'totalmente legal' por causa disso. O sistema existe para redução de danos e separar o mercado de cannabis do mercado de drogas mais perigosas.",
      warning: "É descriminalizada e TOLERADA (Gedoogbeleid) sob condições estritas — não legalizada!"
    },
    tourists: {
      title: "Turistas Podem Comprar?",
      yes: "SIM, Turistas São Permitidos!",
      desc: "Em Amsterdam, isso costuma ser permitido. A regra de residência (ingezetenencriterium) varia por município na Holanda, mas Amsterdam optou CONSCIENTEMENTE por NÃO implementar esta proibição.",
      requirements: "Idade mínima: 18 anos. Leve documento com foto (passaporte resolve)."
    },
    streetRule: {
      title: "A Regra Mais Importante de 2025: Onde Você NÃO Pode Fumar",
      text: "Desde maio de 2023, Amsterdam apertou o consumo em áreas centrais, começando pelo Red Light District.",
      fine: "Multa: até €100!",
      zones: ["Red Light District (De Wallen)", "Praça Dam", "Damrak", "Nieuwmarkt"],
      implication: "O lugar mais seguro para consumir no centro é DENTRO do coffeeshop (se houver lounge) ou em local privado permitido.",
      checklist: [
        "Não fume na rua no Red Light District",
        "Se quiser consumir, prefira lounge do coffeeshop ou local privado permitido"
      ]
    },
    gedoogbeleid: {
      title: "Entendendo o 'Gedoogbeleid' Sem Confusão",
      definition: "'Gedoogbeleid' = 'Política de Tolerância'. Criada nos anos 1970 como solução pragmática de SAÚDE PÚBLICA.",
      objective: "Separar os mercados de drogas 'leves' (cannabis) das 'pesadas' (heroína, cocaína). Ao dar um local seguro para comprar, tiraram o consumidor do contato com traficante de rua.",
      rules: {
        title: "Critérios AHOJG (A Lei dos Coffeeshops)",
        items: [
          { letter: "A", rule: "Geen Advertising", desc: "PROIBIDO fazer publicidade" },
          { letter: "H", rule: "Geen Harddrugs", desc: "PROIBIDO vender drogas pesadas" },
          { letter: "O", rule: "Geen Overlast", desc: "PROIBIDO causar perturbação" },
          { letter: "J", rule: "Geen Jeugdigen", desc: "PROIBIDO vender a menores de 18" },
          { letter: "G", rule: "Geen Grote hoeveelheden", desc: "PROIBIDO vender mais de 5g/pessoa ou ter mais de 500g em estoque" }
        ]
      },
      paradox: {
        title: "O 'Paradoxo da Porta dos Fundos'",
        text: "A 'porta da frente' (vender 5g ao turista) é TOLERADA. MAS a 'porta dos fundos' (o dono comprar do produtor) continua 100% ILEGAL. Isso força os donos a comprarem de produtores ilegais."
      },
      experiment: {
        title: "Wietexperiment (2025)",
        text: "A Holanda vem testando uma cadeia mais regulada em cidades participantes, com fases e expansão. Isso é relevante para entender por que o tema muda com o tempo, mas não é uma regra 'igual para Amsterdam inteira'."
      }
    },
    terminology: {
      title: "Decodificando a Terminologia",
      warning: "Cuidado ao pesquisar! 'Coffeeshop' ≠ 'Koffiehuis' ≠ 'Café'",
      items: [
        { emoji: "🍃", name: "Coffeeshop", desc: "Estabelecimento LICENCIADO para venda e consumo de cannabis" },
        { emoji: "☕", name: "Koffiehuis", desc: "Café TRADICIONAL que serve apenas café e bolos. SEM cannabis!" },
        { emoji: "🍺", name: "Café", desc: "Bar casual ou pub ('Brown Café') que serve ÁLCOOL, comida e café" }
      ]
    },
    etiquette: {
      title: "Etiqueta do Coffeeshop",
      steps: [
        { num: "1", title: "A Porta", desc: "Tenha sua identificação pronta (passaporte). Entrada estritamente 18+." },
        { num: "2", title: "O Balcão", desc: "Aproxime-se do balcão onde a cannabis é vendida. O 'budtender' é seu GUIA!" },
        { num: "3", title: "O Menu", desc: "Peça para ver o menu. Dividido por: Weed, Hash, Edibles, Pre-rolled." },
        { num: "4", title: "O Pedido", desc: "NÃO apenas aponte para um nome! Diga ao budtender os EFEITOS que procura: 'Algo relaxante para a noite' ou 'Sou iniciante, o que você recomenda?'" },
        { num: "5", title: "A Compra", desc: "Limite legal: 5g por pessoa/dia. Dinheiro é mais seguro (alguns aceitam cartão)." },
        { num: "6", title: "A Estadia", desc: "Se planeja ficar, vá ao balcão do BAR e compre uma bebida. É de boa educação!" }
      ],
      dos: [
        "Compre Algo (REGRA Nº 1!) — coffeeshops são NEGÓCIOS, não salas públicas",
        "Traga Identidade — mesmo que pareça ter +18",
        "Peça Aconselhamento — budtenders são ESPECIALISTAS"
      ],
      donts: [
        "NÃO Fume Tabaco (REGRA DE OURO!) — é ILEGAL fumar tabaco em qualquer estabelecimento público na Holanda!",
        "NÃO Consumir Álcool — coffeeshops estão PROIBIDOS de vender álcool",
        "NÃO Tirar Fotos — respeite a privacidade dos outros"
      ]
    },
    tobacco: {
      title: "Tabaco: Por Que Dá Problema",
      text: "Fumar tabaco em locais fechados de hospitalidade é proibido por lei na Holanda. Por isso muitos coffeeshops não aceitam 'spliff' com tabaco e oferecem misturas de ervas como alternativa.",
      tip: "Use apenas cannabis pura ou misturas de ervas oferecidas pela loja."
    },
    edibles: {
      title: "Edibles (Space Cakes): A Parte que Mais Dá Ruim",
      warning: "O risco não é 'overdose fatal'. O risco é ansiedade, pânico, desorientação e uma experiência horrível por dose alta sem perceber.",
      problem: "Fumar: Efeito quase IMEDIATO (5-10 min). Edibles: Precisam ser DIGERIDOS. Efeito leva 20 minutos a 2 HORAS!",
      mistake: "O Erro Clássico: Comer mais após 30 minutos porque 'não está funcionando'. Resultado: paranoia e ansiedade EXTREMA.",
      rules: [
        "Comece com uma porção PEQUENA (1/4 de um brownie)",
        "Espere PELO MENOS 90 minutos antes de repetir",
        "Pergunte ao budtender a DOSAGEM (ex: 'é 10mg?')"
      ],
      badTrip: {
        title: "E se eu tiver uma 'Bad Trip'?",
        tips: [
          "Mantenha a CALMA (é temporário!)",
          "Fique num local SEGURO (hotel ou coffeeshop)",
          "Beba algo AÇUCARADO (suco, refrigerante)",
          "Respire fundo e lembre-se: A sensação VAI PASSAR"
        ]
      }
    },
    prices: {
      title: "Preços em 2025 (Médias Realistas)",
      note: "Varia DRASTICAMENTE. No centro é mais caro. A publicidade é ilegal, então preços não são padronizados.",
      items: [
        { name: "Weed (1g)", range: "€8 - €20" },
        { name: "Hash (1g)", range: "€10 - €25" },
        { name: "Pré-enrolado", range: "€4 - €8" },
        { name: "Space Cake", range: "€5 - €15" }
      ],
      factors: "Fatores que aumentam: localização turística, strains 'hypadas' (importadas 'Cali'), vencedoras de Cannabis Cup"
    },
    menu: {
      title: "Decifrando o Menu",
      basics: [
        { emoji: "🌱", name: "Weed (Maconha)", desc: "A flor SECA da planta de cannabis" },
        { emoji: "🧱", name: "Hash (Haxixe)", desc: "Resina CONCENTRADA prensada em blocos" },
        { emoji: "🚬", name: "Joint Pré-enrolado", desc: "Cigarro já pronto (pergunta se é PURO ou com TABACO!)" },
        { emoji: "🧑‍💼", name: "Budtender", desc: "O funcionário/especialista que te atende no balcão" }
      ],
      effects: {
        title: "Sativa vs. Indica",
        note: "Não peça pelo nome, peça pelo EFEITO que quer:",
        sativa: { name: "Sativa (Energia)", desc: "Efeito 'energético', cerebral, eufórico. Bom para o DIA, explorar a cidade." },
        indica: { name: "Indica (Relaxar)", desc: "Efeito 'relaxante', corporal, sedativo. Melhor para NOITE, filme ou dormir." },
        hybrid: "Nota: Hoje em dia, quase tudo é um Híbrido (mistura dos dois)."
      }
    },
    neighborhoods: {
      title: "Guia por Bairro",
      goldenRule: "NÃO entre no PRIMEIRO que vir! Saia do centro turístico. Anda 10 minutos para Jordaan ou De Pijp e terás melhor qualidade, melhor preço e vibe mais autêntica.",
      areas: [
        {
          name: "Centrum",
          subtitle: "A Armadilha Turística",
          vibe: "Epicentro do turismo de massa. LOTADO, barulhento, cerca de METADE dos coffeeshops da cidade. Qualidade pode ser duvidosa, preços inflacionados.",
          warning: "É NESTA área que a proibição de fumar em público está em vigor!",
          shops: ["The Bulldog (histórico)", "Grey Area (culto, filas)", "Dampkring (filme Ocean's 12)", "Coffeeshop Amsterdam (bom para iniciantes)"]
        },
        {
          name: "Jordaan",
          subtitle: "O Charme Boêmio",
          vibe: "Artística, histórica, BOÊMIA. Canais pitorescos, ruas calmas. Coffeeshops refletem esse charme relaxado.",
          warning: "Muitos 'cafés' famosos aqui são koffiehuizen (café e torta), NÃO coffeeshops!",
          shops: ["Siberië (lounge relaxado)", "Tweede Kamer (clássico, intimista)", "Paradox (space cakes potentes)", "La Tertulia (orgânico)"]
        },
        {
          name: "De Pijp",
          subtitle: "O Coração Local",
          vibe: "Antigo bairro operário, agora coração boêmio e MULTICULTURAL. Lar do Albert Cuypmarkt. FAVORECIDO PELOS LOCAIS!",
          warning: "",
          shops: ["Katsu (favorito absoluto dos locais)", "Coffeeshop IBIZA (o MAIOR, 2 andares)", "Yo-Yo (intimidade)", "Club Media (moderna)"]
        },
        {
          name: "West/Oost",
          subtitle: "Onde o Preço Melhora",
          vibe: "Áreas residenciais. Coffeeshops funcionam como 'dispensários' locais. Qualidade ALTA, preços MELHORES que no centro!",
          warning: "",
          shops: ["Boerejongens (luxo, serviço profissional)", "1e Hulp (potência extrema)", "The Stud (desde 1982)", "Het Ballonnetje (acadêmico)"]
        }
      ]
    },
    smokerBars: {
      title: "Smoker's Bars (Solução Criativa)",
      problem: "Coffeeshops NÃO podem vender álcool. Bares NÃO podem vender cannabis.",
      solution: "Surgiram os 'Smoker's Bars'! São bares que PERMITEM fumar cannabis (geralmente pura) que você comprou em OUTRO local.",
      examples: ["Kadinsky Cafe Zoutsteeg", "CoffeeshopAmsterdam Café", "Barney's Uptown"],
      note: "Regras variam e o local pode impor condições."
    },
    history: {
      title: "Marcos Históricos",
      items: [
        { year: "1972", name: "Mellow Yellow", desc: "Reconhecido como o PRIMEIRO coffeeshop do mundo! Infelizmente, foi destruído por incêndio." },
        { year: "1975", name: "Rusland", desc: "Segundo coffeeshop do mundo. Ainda em OPERAÇÃO!" },
        { year: "1975", name: "The Bulldog", desc: "Fundado meses depois. Tornou-se o primeiro 'império' de coffeeshops. Antiga delegacia!" }
      ]
    },
    glossary: {
      title: "Glossário do Coffeeshop",
      items: [
        { term: "Budtender", def: "Funcionário que vende cannabis no balcão" },
        { term: "Gedoogbeleid", def: "A política de tolerância holandesa" },
        { term: "Haze", def: "Família de strains Sativa (energéticas)" },
        { term: "Kush", def: "Família de strains Indica (relaxantes)" },
        { term: "Space Cake", def: "Comestível com infusão de cannabis" },
        { term: "Spliff", def: "Joint misturado com tabaco (ILEGAL fumar dentro!)" },
        { term: "Pure Joint", def: "Joint contendo APENAS cannabis" },
        { term: "Koffiehuis", def: "Casa de café (SEM cannabis!)" }
      ]
    },
    faq: {
      title: "Perguntas Frequentes",
      items: [
        { q: "Maconha é legal em Amsterdam?", a: "Não no sentido simples de 'legalizada'. O que existe é tolerância sob regras. Isso permite a operação de coffeeshops, mas ainda há limites e fiscalização." },
        { q: "Turista pode comprar em coffeeshops?", a: "Em Amsterdam, sim. A regra de residência varia por município, mas Amsterdam não implementou essa proibição. Leve documento e siga as regras." },
        { q: "Posso fumar na rua?", a: "No centro e no Red Light District, a cidade restringiu o consumo em espaços públicos e a multa pode chegar a €100. Prefira consumir em locais apropriados." },
        { q: "Posso fumar tabaco dentro do coffeeshop?", a: "NÃO! É ilegal fumar tabaco em qualquer estabelecimento público na Holanda. Se você misturar (fazer um 'spliff'), será convidado a se retirar." },
        { q: "Qual é o maior erro com space cake?", a: "Repetir dose cedo demais. Comestível pode demorar bem mais para 'bater'. Coma 1/4, espere 90 minutos e veja como se sente." },
        { q: "Quanto posso comprar?", a: "O limite é 5g por pessoa por dia em coffeeshops tolerados." },
        { q: "Dá para pagar no cartão?", a: "Varia. Alguns aceitam cartão, outros preferem dinheiro. Tenha as duas opções." },
        { q: "Posso levar para outro país?", a: "NÃO conte com isso. Regras de fronteira e aeroportos são outra categoria de risco. Consuma onde é permitido e não transporte." },
        { q: "Quais são os melhores coffeeshops?", a: "Depende do que você busca. Para iniciantes: Katsu, Coffeeshop Amsterdam. Para qualidade premium: Grey Area, Boerejongens. Para relaxar: Siberië, Paradox." },
        { q: "O que é um 'brown café'?", a: "É um bar tradicional holandês (não um coffeeshop!). Serve álcool, café e petiscos. Nada a ver com cannabis." }
      ]
    }
  } : {
    title: "Coffeeshops in Amsterdam 2025",
    description: "Responsible guide to understanding rules, etiquette and how to avoid fines and headaches",
    intro: "Coffeeshop culture is MUCH more complex, nuanced and bureaucratic than most imagine. It's a culture rooted in unique Dutch pragmatism, in a history of harm reduction.",
    whatIs: {
      title: "What a coffeeshop is (and what it isn't)",
      text: "A coffeeshop in Amsterdam is a licensed establishment to sell cannabis under tolerance rules. Cannabis does NOT become 'fully legal' because of this. The system exists for harm reduction and to separate the cannabis market from more dangerous drug markets.",
      warning: "It's decriminalized and TOLERATED (Gedoogbeleid) under strict conditions — not legalized!"
    },
    tourists: {
      title: "Can Tourists Buy?",
      yes: "YES, Tourists Are Allowed!",
      desc: "In Amsterdam, this is usually permitted. The residency rule (ingezetenencriterium) varies by municipality in the Netherlands, but Amsterdam CONSCIOUSLY chose NOT to implement this ban.",
      requirements: "Minimum age: 18. Bring photo ID (passport works)."
    },
    streetRule: {
      title: "The Most Important Rule of 2025: Where You CAN'T Smoke",
      text: "Since May 2023, Amsterdam tightened consumption in central areas, starting with the Red Light District.",
      fine: "Fine: up to €100!",
      zones: ["Red Light District (De Wallen)", "Dam Square", "Damrak", "Nieuwmarkt"],
      implication: "The safest place to consume in the center is INSIDE the coffeeshop (if there's a lounge) or in a permitted private location.",
      checklist: [
        "Don't smoke on the street in the Red Light District",
        "If you want to consume, prefer coffeeshop lounge or permitted private location"
      ]
    },
    gedoogbeleid: {
      title: "Understanding 'Gedoogbeleid' Without Confusion",
      definition: "'Gedoogbeleid' = 'Tolerance Policy'. Created in the 1970s as a pragmatic PUBLIC HEALTH solution.",
      objective: "Separate 'soft' drug markets (cannabis) from 'hard' ones (heroin, cocaine). By providing a safe place to buy, they removed the consumer from contact with dangerous street dealers.",
      rules: {
        title: "AHOJG Criteria (The Coffeeshop Law)",
        items: [
          { letter: "A", rule: "No Advertising", desc: "FORBIDDEN to advertise" },
          { letter: "H", rule: "No Harddrugs", desc: "FORBIDDEN to sell hard drugs" },
          { letter: "O", rule: "No Overlast", desc: "FORBIDDEN to cause disturbance" },
          { letter: "J", rule: "No Jeugdigen", desc: "FORBIDDEN to sell to under 18" },
          { letter: "G", rule: "No Grote hoeveelheden", desc: "FORBIDDEN to sell more than 5g/person or stock more than 500g" }
        ]
      },
      paradox: {
        title: "The 'Back Door Paradox'",
        text: "The 'front door' (selling 5g to tourist) is TOLERATED. BUT the 'back door' (owner buying from producer) remains 100% ILLEGAL. This forces owners to buy from illegal producers."
      },
      experiment: {
        title: "Wietexperiment (2025)",
        text: "The Netherlands has been testing a more regulated chain in participating cities, with phases and expansion. This is relevant to understand why the topic changes over time, but it's not a rule 'equal for all of Amsterdam'."
      }
    },
    terminology: {
      title: "Decoding Terminology",
      warning: "Careful when searching! 'Coffeeshop' ≠ 'Koffiehuis' ≠ 'Café'",
      items: [
        { emoji: "🍃", name: "Coffeeshop", desc: "LICENSED establishment for cannabis sales and consumption" },
        { emoji: "☕", name: "Koffiehuis", desc: "TRADITIONAL café serving only coffee and cakes. NO cannabis!" },
        { emoji: "🍺", name: "Café", desc: "Casual bar or pub ('Brown Café') serving ALCOHOL, food and coffee" }
      ]
    },
    etiquette: {
      title: "Coffeeshop Etiquette",
      steps: [
        { num: "1", title: "The Door", desc: "Have your ID ready (passport). Entry strictly 18+." },
        { num: "2", title: "The Counter", desc: "Approach the counter where cannabis is sold. The 'budtender' is your GUIDE!" },
        { num: "3", title: "The Menu", desc: "Ask to see the menu. Divided by: Weed, Hash, Edibles, Pre-rolled." },
        { num: "4", title: "The Order", desc: "DON'T just point at a name! Tell the budtender the EFFECTS you're looking for: 'Something relaxing for the evening' or 'I'm a beginner, what do you recommend?'" },
        { num: "5", title: "The Purchase", desc: "Legal limit: 5g per person/day. Cash is safer (some accept cards)." },
        { num: "6", title: "The Stay", desc: "If you plan to stay, go to the BAR counter and buy a drink. It's good etiquette!" }
      ],
      dos: [
        "Buy Something (RULE #1!) — coffeeshops are BUSINESSES, not public lounges",
        "Bring ID — even if you look 18+",
        "Ask for Advice — budtenders are EXPERTS"
      ],
      donts: [
        "DON'T Smoke Tobacco (GOLDEN RULE!) — it's ILLEGAL to smoke tobacco in any public establishment in the Netherlands!",
        "DON'T Consume Alcohol — coffeeshops are FORBIDDEN from selling alcohol",
        "DON'T Take Photos — respect others' privacy"
      ]
    },
    tobacco: {
      title: "Tobacco: Why It's a Problem",
      text: "Smoking tobacco in closed hospitality venues is prohibited by law in the Netherlands. That's why many coffeeshops don't accept 'spliffs' with tobacco and offer herbal mixes as alternatives.",
      tip: "Use only pure cannabis or herbal mixes offered by the shop."
    },
    edibles: {
      title: "Edibles (Space Cakes): The Part That Goes Wrong Most",
      warning: "The risk isn't 'fatal overdose'. The risk is anxiety, panic, disorientation and a horrible experience from unknowingly taking too high a dose.",
      problem: "Smoking: Effect almost IMMEDIATE (5-10 min). Edibles: Need to be DIGESTED. Effect takes 20 minutes to 2 HOURS!",
      mistake: "The Classic Mistake: Eating more after 30 minutes because 'it's not working'. Result: paranoia and EXTREME anxiety.",
      rules: [
        "Start with a SMALL portion (1/4 of a brownie)",
        "Wait AT LEAST 90 minutes before repeating",
        "Ask the budtender the DOSAGE (e.g.: 'is it 10mg?')"
      ],
      badTrip: {
        title: "What if I have a 'Bad Trip'?",
        tips: [
          "Stay CALM (it's temporary!)",
          "Stay in a SAFE place (hotel or coffeeshop)",
          "Drink something SUGARY (juice, soda)",
          "Breathe deeply and remember: The feeling WILL PASS"
        ]
      }
    },
    prices: {
      title: "Prices in 2025 (Realistic Averages)",
      note: "Varies DRASTICALLY. Center is more expensive. Advertising is illegal, so prices aren't standardized.",
      items: [
        { name: "Weed (1g)", range: "€8 - €20" },
        { name: "Hash (1g)", range: "€10 - €25" },
        { name: "Pre-rolled", range: "€4 - €8" },
        { name: "Space Cake", range: "€5 - €15" }
      ],
      factors: "Factors that increase price: tourist location, 'hyped' strains (imported 'Cali'), Cannabis Cup winners"
    },
    menu: {
      title: "Deciphering the Menu",
      basics: [
        { emoji: "🌱", name: "Weed", desc: "The DRIED flower of the cannabis plant" },
        { emoji: "🧱", name: "Hash", desc: "CONCENTRATED resin pressed into blocks" },
        { emoji: "🚬", name: "Pre-rolled Joint", desc: "Ready-made cigarette (ask if it's PURE or with TOBACCO!)" },
        { emoji: "🧑‍💼", name: "Budtender", desc: "The staff/specialist who serves you at the counter" }
      ],
      effects: {
        title: "Sativa vs. Indica",
        note: "Don't ask by name, ask for the EFFECT you want:",
        sativa: { name: "Sativa (Energy)", desc: "'Energetic', cerebral, euphoric effect. Good for DAY, exploring the city." },
        indica: { name: "Indica (Relax)", desc: "'Relaxing', body, sedative effect. Better for NIGHT, movie or sleep." },
        hybrid: "Note: Nowadays, almost everything is a Hybrid (mix of both)."
      }
    },
    neighborhoods: {
      title: "Neighborhood Guide",
      goldenRule: "DON'T enter the FIRST one you see! Get out of the tourist center. Walk 10 minutes to Jordaan or De Pijp and you'll get better quality, better prices and more authentic vibe.",
      areas: [
        {
          name: "Centrum",
          subtitle: "The Tourist Trap",
          vibe: "Mass tourism epicenter. CROWDED, noisy, about HALF of the city's coffeeshops. Quality can be questionable, inflated prices.",
          warning: "This is the area where the public smoking ban is in effect!",
          shops: ["The Bulldog (historic)", "Grey Area (cult, queues)", "Dampkring (Ocean's 12 movie)", "Coffeeshop Amsterdam (good for beginners)"]
        },
        {
          name: "Jordaan",
          subtitle: "Bohemian Charm",
          vibe: "Artistic, historic, BOHEMIAN. Picturesque canals, calm streets. Coffeeshops reflect this relaxed charm.",
          warning: "Many famous 'cafés' here are koffiehuizen (coffee and cake), NOT coffeeshops!",
          shops: ["Siberië (relaxed lounge)", "Tweede Kamer (classic, intimate)", "Paradox (potent space cakes)", "La Tertulia (organic)"]
        },
        {
          name: "De Pijp",
          subtitle: "The Local Heart",
          vibe: "Former working-class neighborhood, now bohemian and MULTICULTURAL heart. Home of Albert Cuypmarket. FAVORED BY LOCALS!",
          warning: "",
          shops: ["Katsu (absolute local favorite)", "Coffeeshop IBIZA (BIGGEST, 2 floors)", "Yo-Yo (intimacy)", "Club Media (modern)"]
        },
        {
          name: "West/Oost",
          subtitle: "Where Prices Improve",
          vibe: "Residential areas. Coffeeshops work as local 'dispensaries'. HIGH quality, BETTER prices than center!",
          warning: "",
          shops: ["Boerejongens (luxury, professional service)", "1e Hulp (extreme potency)", "The Stud (since 1982)", "Het Ballonnetje (academic)"]
        }
      ]
    },
    smokerBars: {
      title: "Smoker's Bars (Creative Solution)",
      problem: "Coffeeshops CAN'T sell alcohol. Bars CAN'T sell cannabis.",
      solution: "'Smoker's Bars' emerged! They're bars that ALLOW smoking cannabis (usually pure) that you bought somewhere ELSE.",
      examples: ["Kadinsky Cafe Zoutsteeg", "CoffeeshopAmsterdam Café", "Barney's Uptown"],
      note: "Rules vary and the venue may impose conditions."
    },
    history: {
      title: "Historical Landmarks",
      items: [
        { year: "1972", name: "Mellow Yellow", desc: "Recognized as the world's FIRST coffeeshop! Unfortunately, destroyed by fire." },
        { year: "1975", name: "Rusland", desc: "World's second coffeeshop. Still in OPERATION!" },
        { year: "1975", name: "The Bulldog", desc: "Founded months later. Became the first coffeeshop 'empire'. Former police station!" }
      ]
    },
    glossary: {
      title: "Coffeeshop Glossary",
      items: [
        { term: "Budtender", def: "Staff who sells cannabis at the counter" },
        { term: "Gedoogbeleid", def: "Dutch tolerance policy" },
        { term: "Haze", def: "Family of Sativa strains (energetic)" },
        { term: "Kush", def: "Family of Indica strains (relaxing)" },
        { term: "Space Cake", def: "Cannabis-infused edible" },
        { term: "Spliff", def: "Joint mixed with tobacco (ILLEGAL to smoke inside!)" },
        { term: "Pure Joint", def: "Joint containing ONLY cannabis" },
        { term: "Koffiehuis", def: "Coffee house (NO cannabis!)" }
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        { q: "Is marijuana legal in Amsterdam?", a: "Not in the simple sense of 'legalized'. What exists is tolerance under rules. This allows coffeeshop operation, but there are still limits and enforcement." },
        { q: "Can tourists buy at coffeeshops?", a: "In Amsterdam, yes. The residency rule varies by municipality, but Amsterdam didn't implement this ban. Bring ID and follow the rules." },
        { q: "Can I smoke on the street?", a: "In the center and Red Light District, the city restricted consumption in public spaces and the fine can reach €100. Prefer appropriate locations." },
        { q: "Can I smoke tobacco inside the coffeeshop?", a: "NO! It's illegal to smoke tobacco in any public establishment in the Netherlands. If you mix (make a 'spliff'), you'll be asked to leave." },
        { q: "What's the biggest mistake with space cakes?", a: "Repeating the dose too early. Edibles can take much longer to 'hit'. Eat 1/4, wait 90 minutes and see how you feel." },
        { q: "How much can I buy?", a: "The limit is 5g per person per day at tolerated coffeeshops." },
        { q: "Can I pay by card?", a: "Varies. Some accept cards, others prefer cash. Have both options." },
        { q: "Can I take it to another country?", a: "DON'T count on it. Border and airport rules are another category of risk. Consume where it's allowed and don't transport." },
        { q: "What are the best coffeeshops?", a: "Depends on what you're looking for. For beginners: Katsu, Coffeeshop Amsterdam. For premium quality: Grey Area, Boerejongens. For relaxing: Siberië, Paradox." },
        { q: "What's a 'brown café'?", a: "It's a traditional Dutch bar (not a coffeeshop!). Serves alcohol, coffee and snacks. Nothing to do with cannabis." }
      ]
    }
  };

  return (
    <PageLayout>
      <PageHero
        icon={Leaf}
        title={content.title}
        description={content.description}
        backgroundImage={coffeeshopHeroImg}
      />

      <IntroSection intro={content.intro} />
      
      <WhatIsSection 
        title={content.whatIs.title}
        text={content.whatIs.text}
        warning={content.whatIs.warning}
      />
      
      <TouristsAllowedSection 
        title={content.tourists.title}
        yes={content.tourists.yes}
        desc={content.tourists.desc}
        requirements={content.tourists.requirements}
      />
      
      <StreetRuleSection 
        title={content.streetRule.title}
        text={content.streetRule.text}
        fine={content.streetRule.fine}
        zones={content.streetRule.zones}
        implication={content.streetRule.implication}
        checklist={content.streetRule.checklist}
        language={language}
      />
      
      <ExplorerSection language={language} />
      
      <MainTabsSection
        gedoogbeleid={content.gedoogbeleid}
        terminology={content.terminology}
        etiquette={content.etiquette}
        tobacco={content.tobacco}
        edibles={content.edibles}
        menu={content.menu}
        prices={content.prices}
        neighborhoods={content.neighborhoods}
        smokerBars={content.smokerBars}
        history={content.history}
        language={language}
      />
      
      <GlossarySection 
        title={content.glossary.title}
        items={content.glossary.items}
      />
      
      <FAQSection 
        title={content.faq.title}
        items={content.faq.items}
      />
    </PageLayout>
  );
};

export default Coffeeshops;
