import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Leaf } from "lucide-react";
import { useLanguage, Language } from "@/hooks/useLanguage";
import { SEOHead, seoData } from "@/components/SEOHead";
import { RelatedContent } from "@/components/RelatedContent";
import { RelatedBlogPostsSection } from "@/components/RelatedBlogPostsSection";
import coffeeshopHeroImg from "@/assets/coffeeshop-neon.png";
import {
  IntroSection,
  WhatIsSection,
  TouristsAllowedSection,
  StreetRuleSection,
  ExplorerSection,
  MainTabsSection,
  GlossarySection,
  FAQSection,
  FamousGallerySection,
  BlogPostsSection,
  NeighborhoodListSection
} from "@/components/coffeeshops";

// Helper function for trilingual content - Updated 2026
const getContent = (lang: Language) => {
  const content = {
    pt: {
      title: "Regras de Coffeeshops em Amsterdam 2026",
      description: "Onde pode fumar, limite de compra (5g) e como evitar multa de até €100",
      intro: "Amsterdam continua sendo uma das únicas cidades holandesas onde turistas de 18 anos ou mais podem comprar e consumir cannabis em coffeeshops. A cannabis permanece ilegal, mas é tolerada em pequenos volumes sob um conjunto de regras conhecido como gedoogbeleid. Entender essas regras é fundamental para evitar multas de até €100 nas áreas centrais e para consumir com segurança.",
      whatIs: {
        title: "O que um coffeeshop é (e o que ele não é)",
        text: "Coffeeshop, em Amsterdam, é um estabelecimento licenciado para vender cannabis sob regras de tolerância. A cannabis NÃO vira 'totalmente legal' por causa disso. O sistema existe para redução de danos e separar o mercado de cannabis do mercado de drogas mais perigosas.",
        warning: "É descriminalizada e TOLERADA (Gedoogbeleid) sob condições estritas — não legalizada!"
      },
      tourists: {
        title: "Quem Pode Comprar e Quanto",
        yes: "SIM, Turistas São Permitidos!",
        desc: "A regra do residente (ingezetenencriterium) obriga que apenas residentes holandeses possam comprar cannabis. Essa norma foi estabelecida nacionalmente em 2013, mas cada município decide se a aplica. Amsterdam NÃO aplica o requisito de residência, o que significa que visitantes maiores de idade podem comprar cannabis legalmente.",
        requirements: "Idade mínima: 18 anos. Limite de compra: 5g por pessoa/dia. Documento obrigatório (passaporte ou cartão de identidade)."
      },
      streetRule: {
        title: "Onde é Permitido e Onde é Proibido Fumar",
        text: "Desde maio de 2023 o município de Amsterdam implantou um banimento de fumar cannabis nas ruas em áreas turísticas sensíveis. A polícia adota abordagem educativa: em caso de desobediência, o fumante recebe um aviso; persistindo, pode ser multado.",
        fine: "Multa: até €100!",
        zones: ["Red Light District (De Wallen)", "Dam", "Damrak", "Nieuwmarkt"],
        implication: "O lugar mais seguro para consumir no centro é DENTRO do coffeeshop (se houver lounge) ou em local privado permitido.",
        checklist: [
          "Não fume na rua no Red Light District",
          "Consumo dentro do coffeeshop ou em propriedade privada",
          "Muitos coffeeshops oferecem misturas de ervas sem tabaco como alternativa"
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
          title: "Wietexperiment (2026)",
          text: "O governo está testando um Experimento de Cadeia de Suprimento Regulada, em que produtores licenciados fornecem cannabis regulamentada para coffeeshops em alguns municípios participantes. A fase experimental começou em 2025. Amsterdam NÃO participa deste experimento até o momento."
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
        title: "Etiqueta do Coffeeshop (Como Se Comportar)",
        steps: [
          { num: "1", title: "Documento Pronto", desc: "Sempre mostre seu passaporte ou carteira de identidade ao entrar. Entrada estritamente 18+." },
          { num: "2", title: "Use o Budtender", desc: "Explique o efeito desejado; não peça apenas pela variedade. O funcionário vai sugerir algo compatível." },
          { num: "3", title: "Compre Algo", desc: "Os lounges funcionam como cafés – é educado pedir uma bebida se for ficar." },
          { num: "4", title: "Não Misture Tabaco", desc: "Fumar tabaco dentro de coffeeshops é ilegal. Use apenas cannabis ou misturas de ervas permitidas." },
          { num: "5", title: "Respeite o Limite", desc: "5g por pessoa. Guardar grandes quantidades pode gerar problemas e é ilegal." },
          { num: "6", title: "Não Tire Fotos", desc: "Muitos clientes preferem discrição; fotografia é mal vista." }
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
        problem: "Fumar: Efeito quase IMEDIATO (5-10 min). Edibles: Precisam ser DIGERIDOS. Efeito leva 30 minutos a 2 HORAS!",
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
        title: "Preços em 2026 (Médias Realistas)",
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
          { q: "Maconha é legal em Amsterdam?", a: "Não. A posse e venda de pequenas quantidades de cannabis são toleradas mediante respeito às regras do gedoogbeleid." },
          { q: "Turista pode comprar em coffeeshops?", a: "Sim, Amsterdam não aplica o critério de residência. Basta ter 18 anos e apresentar documento de identidade." },
          { q: "Quanto posso comprar?", a: "Até 5g por pessoa/dia." },
          { q: "Posso fumar na rua?", a: "No Red Light District, Dam, Damrak e Nieuwmarkt não – a multa pode chegar a €100. Nas demais áreas, ainda é comum ver consumo em espaços abertos, mas é mais seguro usar o lounge do coffeeshop ou um local privado." },
          { q: "Posso fumar tabaco dentro do coffeeshop?", a: "Não. A legislação antitabaco proíbe fumar tabaco em locais fechados; use cannabis pura ou misturas autorizadas." },
          { q: "Quais bairros têm melhores coffeeshops?", a: "O Centro (Centrum) concentra muitos estabelecimentos, mas tende a ser mais caro e turístico. Bairros como Jordaan, De Pijp, Oud-West e Oost oferecem ambientes mais tranquilos, preços melhores e atendimento mais local." },
          { q: "Posso pagar com cartão?", a: "A maioria dos coffeeshops aceita pagamentos em dinheiro; alguns aceitam cartão de débito local (pin). Leve dinheiro para evitar surpresas." },
          { q: "E se eu levar cannabis para outro país?", a: "É ilegal transportar cannabis para fora da Holanda. Você pode ser punido em controles fronteiriços de seu país de destino." },
          { q: "Qual é o maior erro com space cake?", a: "Repetir dose cedo demais. Comestível pode demorar bem mais para 'bater'. Coma 1/4, espere 90 minutos e veja como se sente." },
          { q: "O que é um 'brown café'?", a: "É um bar tradicional holandês (não um coffeeshop!). Serve álcool, café e petiscos. Nada a ver com cannabis." }
        ]
      }
    },
    en: {
      title: "Amsterdam Coffeeshop Rules 2026",
      description: "Where you can smoke, purchase limits (5g) and how to avoid fines up to €100",
      intro: "Amsterdam remains one of the only Dutch cities where tourists aged 18 and over can buy and consume cannabis in coffeeshops. Cannabis remains illegal, but is tolerated in small quantities under a set of rules known as gedoogbeleid. Understanding these rules is essential to avoid fines up to €100 in central areas and to consume safely.",
      whatIs: {
        title: "What a coffeeshop is (and what it isn't)",
        text: "A coffeeshop in Amsterdam is a licensed establishment to sell cannabis under tolerance rules. Cannabis does NOT become 'fully legal' because of this. The system exists for harm reduction and to separate the cannabis market from more dangerous drug markets.",
        warning: "It's decriminalized and TOLERATED (Gedoogbeleid) under strict conditions — not legalized!"
      },
      tourists: {
        title: "Who Can Buy and How Much",
        yes: "YES, Tourists Are Allowed!",
        desc: "The residency rule (ingezetenencriterium) requires that only Dutch residents can buy cannabis. This rule was established nationally in 2013, but each municipality decides whether to apply it. Amsterdam does NOT apply the residency requirement, meaning adult visitors can legally purchase cannabis.",
        requirements: "Minimum age: 18. Purchase limit: 5g per person/day. Valid ID required (passport or identity card)."
      },
      streetRule: {
        title: "Where Smoking is Allowed and Prohibited",
        text: "Since May 2023, the municipality of Amsterdam implemented a ban on smoking cannabis on streets in sensitive tourist areas. Police take an educational approach: in case of disobedience, the smoker receives a warning; if persistent, they can be fined.",
        fine: "Fine: up to €100!",
        zones: ["Red Light District (De Wallen)", "Dam Square", "Damrak", "Nieuwmarkt"],
        implication: "The safest place to consume in the center is INSIDE the coffeeshop (if there's a lounge) or in a permitted private location.",
        checklist: [
          "Don't smoke on the street in the Red Light District",
          "Consume inside the coffeeshop or on private property",
          "Many coffeeshops offer tobacco-free herbal mixes as alternatives"
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
          title: "Wietexperiment (2026)",
          text: "The government is testing a Regulated Supply Chain Experiment, where licensed producers supply regulated cannabis to coffeeshops in some participating municipalities. The experimental phase started in 2025. Amsterdam is NOT participating in this experiment so far."
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
        title: "Coffeeshop Etiquette (How to Behave)",
        steps: [
          { num: "1", title: "ID Ready", desc: "Always show your passport or ID card when entering. Entry strictly 18+." },
          { num: "2", title: "Use the Budtender", desc: "Explain the desired effect; don't just ask for the strain. The staff will suggest something suitable." },
          { num: "3", title: "Buy Something", desc: "Lounges work like cafés – it's polite to order a drink if you're staying." },
          { num: "4", title: "Don't Mix Tobacco", desc: "Smoking tobacco inside coffeeshops is illegal. Use only pure cannabis or permitted herbal mixes." },
          { num: "5", title: "Respect the Limit", desc: "5g per person. Carrying large quantities can cause problems and is illegal." },
          { num: "6", title: "Don't Take Photos", desc: "Many customers prefer discretion; photography is frowned upon." }
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
        problem: "Smoking: Effect almost IMMEDIATE (5-10 min). Edibles: Need to be DIGESTED. Effect takes 30 minutes to 2 HOURS!",
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
        title: "Prices in 2026 (Realistic Averages)",
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
          { q: "Is marijuana legal in Amsterdam?", a: "No. Possession and sale of small amounts of cannabis are tolerated under the gedoogbeleid rules." },
          { q: "Can tourists buy at coffeeshops?", a: "Yes, Amsterdam does not apply the residency criterion. You just need to be 18 and present valid ID." },
          { q: "How much can I buy?", a: "Up to 5g per person/day." },
          { q: "Can I smoke on the street?", a: "In the Red Light District, Dam, Damrak and Nieuwmarkt, no – fines can reach €100. In other areas, public consumption is still common, but it's safer to use the coffeeshop lounge or a private location." },
          { q: "Can I smoke tobacco inside the coffeeshop?", a: "No. Anti-tobacco legislation prohibits smoking tobacco indoors; use pure cannabis or authorized mixes." },
          { q: "Which neighborhoods have the best coffeeshops?", a: "Centrum has many establishments but tends to be more expensive and touristy. Neighborhoods like Jordaan, De Pijp, Oud-West and Oost offer calmer environments, better prices and more local service." },
          { q: "Can I pay by card?", a: "Most coffeeshops accept cash; some accept local debit cards (pin). Bring cash to avoid surprises." },
          { q: "Can I take cannabis to another country?", a: "It's illegal to transport cannabis outside the Netherlands. You can be prosecuted at border controls in your destination country." },
          { q: "What's the biggest mistake with space cakes?", a: "Repeating the dose too early. Edibles can take much longer to 'hit'. Eat 1/4, wait 90 minutes and see how you feel." },
          { q: "What's a 'brown café'?", a: "It's a traditional Dutch bar (not a coffeeshop!). Serves alcohol, coffee and snacks. Nothing to do with cannabis." }
        ]
      }
    },
    nl: {
      title: "Amsterdam Coffeeshop Regels 2026",
      description: "Waar je mag roken, aankooplimieten (5g) en hoe boetes tot €100 te vermijden",
      intro: "Amsterdam blijft een van de weinige Nederlandse steden waar toeristen van 18 jaar en ouder cannabis kunnen kopen en consumeren in coffeeshops. Cannabis blijft illegaal, maar wordt in kleine hoeveelheden gedoogd onder een reeks regels bekend als het gedoogbeleid. Het begrijpen van deze regels is essentieel om boetes tot €100 in centrale gebieden te vermijden en veilig te consumeren.",
      whatIs: {
        title: "Wat een coffeeshop is (en wat het niet is)",
        text: "Een coffeeshop in Amsterdam is een gelicentieerde zaak om cannabis te verkopen onder gedoogregels. Cannabis wordt NIET 'volledig legaal' hierdoor. Het systeem bestaat voor harm reduction en om de cannabismarkt te scheiden van gevaarlijkere drugsmarkten.",
        warning: "Het is gedecriminaliseerd en GEDOOGD (Gedoogbeleid) onder strikte voorwaarden — niet gelegaliseerd!"
      },
      tourists: {
        title: "Wie Mag Kopen en Hoeveel",
        yes: "JA, Toeristen Zijn Welkom!",
        desc: "Het ingezetenencriterium vereist dat alleen Nederlandse ingezetenen cannabis mogen kopen. Deze regel werd in 2013 landelijk ingesteld, maar elke gemeente beslist of ze deze toepast. Amsterdam past het ingezetenencriterium NIET toe, wat betekent dat volwassen bezoekers legaal cannabis kunnen kopen.",
        requirements: "Minimumleeftijd: 18 jaar. Aankooplimiet: 5g per persoon/dag. Geldig ID verplicht (paspoort of identiteitskaart)."
      },
      streetRule: {
        title: "Waar Roken Toegestaan en Verboden Is",
        text: "Sinds mei 2023 heeft de gemeente Amsterdam een verbod op het roken van cannabis op straat in gevoelige toeristische gebieden ingevoerd. De politie hanteert een educatieve aanpak: bij overtreding krijgt de roker een waarschuwing; bij volharding kan een boete worden opgelegd.",
        fine: "Boete: tot €100!",
        zones: ["Red Light District (De Wallen)", "Dam", "Damrak", "Nieuwmarkt"],
        implication: "De veiligste plek om in het centrum te consumeren is BINNEN de coffeeshop (als er een lounge is) of op een toegestane privélocatie.",
        checklist: [
          "Rook niet op straat in de Wallen",
          "Consumeer binnen in de coffeeshop of op privéterrein",
          "Veel coffeeshops bieden tabaksvrije kruidenmengsels als alternatief"
        ]
      },
      gedoogbeleid: {
        title: "Het Gedoogbeleid Begrijpen Zonder Verwarring",
        definition: "'Gedoogbeleid' = 'Tolerantiebeleid'. Ontstaan in de jaren 1970 als pragmatische VOLKSGEZONDHEID-oplossing.",
        objective: "Scheiding van 'softdrugs'-markten (cannabis) van 'harddrugs' (heroïne, cocaïne). Door een veilige koopplek te bieden, haalden ze de consument weg bij gevaarlijke straatdealers.",
        rules: {
          title: "AHOJG-Criteria (De Coffeeshopwet)",
          items: [
            { letter: "A", rule: "Geen Affichering", desc: "VERBODEN om reclame te maken" },
            { letter: "H", rule: "Geen Harddrugs", desc: "VERBODEN om harddrugs te verkopen" },
            { letter: "O", rule: "Geen Overlast", desc: "VERBODEN om overlast te veroorzaken" },
            { letter: "J", rule: "Geen Jeugdigen", desc: "VERBODEN om te verkopen aan minderjarigen" },
            { letter: "G", rule: "Geen Grote hoeveelheden", desc: "VERBODEN om meer dan 5g/persoon te verkopen of meer dan 500g in voorraad te hebben" }
          ]
        },
        paradox: {
          title: "De 'Achterdeur Paradox'",
          text: "De 'voordeur' (5g verkopen aan toerist) is GEDOOGD. MAAR de 'achterdeur' (eigenaar koopt van producent) blijft 100% ILLEGAAL. Dit dwingt eigenaren om van illegale producenten te kopen."
        },
        experiment: {
          title: "Wietexperiment (2026)",
          text: "De overheid test een Experiment Gesloten Coffeeshopketen, waarbij gelicentieerde producenten gereguleerde cannabis leveren aan coffeeshops in deelnemende gemeenten. De experimentele fase begon in 2025. Amsterdam doet tot nu toe NIET mee aan dit experiment."
        }
      },
      terminology: {
        title: "Terminologie Ontcijferen",
        warning: "Let op bij zoeken! 'Coffeeshop' ≠ 'Koffiehuis' ≠ 'Café'",
        items: [
          { emoji: "🍃", name: "Coffeeshop", desc: "GELICENTIEERDE zaak voor cannabisverkoop en -consumptie" },
          { emoji: "☕", name: "Koffiehuis", desc: "TRADITIONEEL café met alleen koffie en gebak. GEEN cannabis!" },
          { emoji: "🍺", name: "Café", desc: "Kroeg of pub ('Bruin Café') met ALCOHOL, eten en koffie" }
        ]
      },
      etiquette: {
        title: "Coffeeshop Etiquette (Hoe Je Gedraagt)",
        steps: [
          { num: "1", title: "ID Klaar", desc: "Toon altijd je paspoort of identiteitskaart bij binnenkomst. Toegang strikt 18+." },
          { num: "2", title: "Gebruik de Budtender", desc: "Leg het gewenste effect uit; vraag niet alleen naar de soort. Het personeel zal iets passends suggereren." },
          { num: "3", title: "Koop Iets", desc: "Lounges werken als cafés – het is beleefd om een drankje te bestellen als je blijft." },
          { num: "4", title: "Geen Tabak Mengen", desc: "Tabak roken in coffeeshops is illegaal. Gebruik alleen pure cannabis of toegestane kruidenmengsels." },
          { num: "5", title: "Respecteer de Limiet", desc: "5g per persoon. Grote hoeveelheden bij je hebben kan problemen veroorzaken en is illegaal." },
          { num: "6", title: "Geen Foto's", desc: "Veel klanten geven de voorkeur aan discretie; fotografie wordt afgekeurd." }
        ],
        dos: [
          "Koop Iets (REGEL #1!) — coffeeshops zijn BEDRIJVEN, geen openbare lounges",
          "Neem ID mee — ook als je er 18+ uitziet",
          "Vraag om Advies — budtenders zijn EXPERTS"
        ],
        donts: [
          "Rook GEEN Tabak (GOUDEN REGEL!) — het is VERBODEN om tabak te roken in openbare gelegenheden in Nederland!",
          "GEEN Alcohol — coffeeshops mogen GEEN alcohol verkopen",
          "GEEN Foto's — respecteer de privacy van anderen"
        ]
      },
      tobacco: {
        title: "Tabak: Waarom Het een Probleem Is",
        text: "Tabak roken in gesloten horecagelegenheden is wettelijk verboden in Nederland. Daarom accepteren veel coffeeshops geen 'spliffs' met tabak en bieden ze kruidenmengsels als alternatief.",
        tip: "Gebruik alleen pure cannabis of kruidenmengsels van de shop."
      },
      edibles: {
        title: "Edibles (Space Cakes): Het Deel Dat Het Vaakst Misgaat",
        warning: "Het risico is geen 'fatale overdosis'. Het risico is angst, paniek, desoriëntatie en een verschrikkelijke ervaring door onbewust te hoge dosering.",
        problem: "Roken: Effect bijna DIRECT (5-10 min). Edibles: Moeten worden VERTEERD. Effect duurt 30 minuten tot 2 UUR!",
        mistake: "De Klassieke Fout: Na 30 minuten meer eten omdat 'het niet werkt'. Resultaat: paranoia en EXTREME angst.",
        rules: [
          "Begin met een KLEINE portie (1/4 van een brownie)",
          "Wacht MINIMAAL 90 minuten voordat je herhaalt",
          "Vraag de budtender naar de DOSERING (bijv.: 'is het 10mg?')"
        ],
        badTrip: {
          title: "Wat Als Ik een 'Bad Trip' Heb?",
          tips: [
            "Blijf KALM (het is tijdelijk!)",
            "Blijf op een VEILIGE plek (hotel of coffeeshop)",
            "Drink iets ZOETS (sap, frisdrank)",
            "Adem diep en onthoud: Het gevoel GAAT VOORBIJ"
          ]
        }
      },
      prices: {
        title: "Prijzen in 2026 (Realistische Gemiddelden)",
        note: "Varieert STERK. Centrum is duurder. Reclame is illegaal, dus prijzen zijn niet gestandaardiseerd.",
        items: [
          { name: "Wiet (1g)", range: "€8 - €20" },
          { name: "Hasj (1g)", range: "€10 - €25" },
          { name: "Voorgedraaid", range: "€4 - €8" },
          { name: "Space Cake", range: "€5 - €15" }
        ],
        factors: "Factoren die prijs verhogen: toeristische locatie, 'gehypte' soorten (geïmporteerde 'Cali'), Cannabis Cup winnaars"
      },
      menu: {
        title: "Het Menu Ontcijferen",
        basics: [
          { emoji: "🌱", name: "Wiet", desc: "De GEDROOGDE bloem van de cannabisplant" },
          { emoji: "🧱", name: "Hasj", desc: "GECONCENTREERDE hars geperst in blokken" },
          { emoji: "🚬", name: "Voorgedraaide Joint", desc: "Kant-en-klare sigaret (vraag of het PUUR is of met TABAK!)" },
          { emoji: "🧑‍💼", name: "Budtender", desc: "De medewerker/specialist die je aan de balie helpt" }
        ],
        effects: {
          title: "Sativa vs. Indica",
          note: "Vraag niet naar naam, vraag naar het EFFECT dat je wilt:",
          sativa: { name: "Sativa (Energie)", desc: "'Energiek', cerebraal, euforisch effect. Goed voor OVERDAG, stad verkennen." },
          indica: { name: "Indica (Relax)", desc: "'Ontspannend', lichamelijk, sedatief effect. Beter voor 's AVONDS, film of slapen." },
          hybrid: "Let op: Tegenwoordig is bijna alles een Hybride (mix van beide)."
        }
      },
      neighborhoods: {
        title: "Wijkengids",
        goldenRule: "Ga NIET de EERSTE binnen die je ziet! Ga weg uit het toeristencentrum. Loop 10 minuten naar Jordaan of De Pijp en je krijgt betere kwaliteit, betere prijzen en authentiekere sfeer.",
        areas: [
          {
            name: "Centrum",
            subtitle: "De Toeristenval",
            vibe: "Epicentrum van massatoerisme. DRUK, lawaaierig, ongeveer de HELFT van de coffeeshops in de stad. Kwaliteit kan twijfelachtig zijn, opgeblazen prijzen.",
            warning: "Dit is het gebied waar het rookverbod op straat geldt!",
            shops: ["The Bulldog (historisch)", "Grey Area (cult, rijen)", "Dampkring (Ocean's 12 film)", "Coffeeshop Amsterdam (goed voor beginners)"]
          },
          {
            name: "Jordaan",
            subtitle: "Bohemien Charme",
            vibe: "Artistiek, historisch, BOHEMIEN. Pittoreske grachten, rustige straten. Coffeeshops weerspiegelen deze ontspannen charme.",
            warning: "Veel beroemde 'cafés' hier zijn koffiehuizen (koffie en gebak), GEEN coffeeshops!",
            shops: ["Siberië (relaxte lounge)", "Tweede Kamer (klassiek, intiem)", "Paradox (sterke space cakes)", "La Tertulia (biologisch)"]
          },
          {
            name: "De Pijp",
            subtitle: "Het Lokale Hart",
            vibe: "Voormalige arbeidersbuurt, nu bohemien en MULTICULTUREEL hart. Thuisbasis van de Albert Cuypmarkt. FAVORIET BIJ LOCALS!",
            warning: "",
            shops: ["Katsu (absolute local favorite)", "Coffeeshop IBIZA (GROOTSTE, 2 verdiepingen)", "Yo-Yo (intimiteit)", "Club Media (modern)"]
          },
          {
            name: "West/Oost",
            subtitle: "Waar Prijzen Beter Worden",
            vibe: "Woonwijken. Coffeeshops werken als lokale 'dispensaries'. HOGE kwaliteit, BETERE prijzen dan centrum!",
            warning: "",
            shops: ["Boerejongens (luxe, professionele service)", "1e Hulp (extreme potentie)", "The Stud (sinds 1982)", "Het Ballonnetje (academisch)"]
          }
        ]
      },
      smokerBars: {
        title: "Smoker's Bars (Creatieve Oplossing)",
        problem: "Coffeeshops mogen GEEN alcohol verkopen. Kroegen mogen GEEN cannabis verkopen.",
        solution: "'Smoker's Bars' ontstonden! Het zijn kroegen die TOESTAAN dat je cannabis rookt (meestal puur) die je ERGENS ANDERS hebt gekocht.",
        examples: ["Kadinsky Cafe Zoutsteeg", "CoffeeshopAmsterdam Café", "Barney's Uptown"],
        note: "Regels variëren en de zaak kan voorwaarden stellen."
      },
      history: {
        title: "Historische Mijlpalen",
        items: [
          { year: "1972", name: "Mellow Yellow", desc: "Erkend als 's werelds EERSTE coffeeshop! Helaas door brand verwoest." },
          { year: "1975", name: "Rusland", desc: "'s Werelds tweede coffeeshop. Nog steeds in BEDRIJF!" },
          { year: "1975", name: "The Bulldog", desc: "Maanden later opgericht. Werd het eerste coffeeshop 'imperium'. Voormalig politiebureau!" }
        ]
      },
      glossary: {
        title: "Coffeeshop Woordenlijst",
        items: [
          { term: "Budtender", def: "Medewerker die cannabis verkoopt aan de balie" },
          { term: "Gedoogbeleid", def: "Nederlands tolerantiebeleid" },
          { term: "Haze", def: "Familie van Sativa-soorten (energiek)" },
          { term: "Kush", def: "Familie van Indica-soorten (ontspannend)" },
          { term: "Space Cake", def: "Met cannabis geïnfuseerd eetbaar product" },
          { term: "Spliff", def: "Joint gemengd met tabak (VERBODEN om binnen te roken!)" },
          { term: "Pure Joint", def: "Joint met ALLEEN cannabis" },
          { term: "Koffiehuis", def: "Koffiehuis (GEEN cannabis!)" }
        ]
      },
      faq: {
        title: "Veelgestelde Vragen",
        items: [
          { q: "Is marihuana legaal in Amsterdam?", a: "Nee. Bezit en verkoop van kleine hoeveelheden cannabis worden gedoogd onder de regels van het gedoogbeleid." },
          { q: "Mogen toeristen kopen bij coffeeshops?", a: "In Amsterdam, ja. Het ingezetenencriterium geldt niet in Amsterdam. Je hoeft alleen 18+ te zijn en geldig ID te tonen." },
          { q: "Hoeveel mag ik kopen?", a: "Tot 5g per persoon/dag." },
          { q: "Mag ik op straat roken?", a: "In de Wallen, Dam, Damrak en Nieuwmarkt niet – boetes kunnen oplopen tot €100. In andere gebieden is openbaar gebruik nog gebruikelijk, maar het is veiliger om de coffeeshop lounge of een privélocatie te gebruiken." },
          { q: "Mag ik tabak roken in de coffeeshop?", a: "Nee. Antitabakswetgeving verbiedt het roken van tabak binnenshuis; gebruik pure cannabis of geautoriseerde mengsels." },
          { q: "Welke wijken hebben de beste coffeeshops?", a: "Centrum heeft veel zaken maar is duurder en toeristischer. Wijken als Jordaan, De Pijp, Oud-West en Oost bieden rustigere omgevingen, betere prijzen en meer lokale service." },
          { q: "Kan ik pinnen?", a: "De meeste coffeeshops accepteren contant; sommige accepteren lokale pinpassen. Neem contant mee om verrassingen te voorkomen." },
          { q: "Kan ik cannabis meenemen naar een ander land?", a: "Het is illegaal om cannabis buiten Nederland te vervoeren. Je kunt worden vervolgd bij grenscontroles in je bestemmingsland." },
          { q: "Wat is de grootste fout met space cakes?", a: "Te vroeg herhalen. Edibles kunnen veel langer duren om 'aan te slaan'. Eet 1/4, wacht 90 minuten en kijk hoe je je voelt." },
          { q: "Wat is een 'bruin café'?", a: "Het is een traditionele Nederlandse kroeg (geen coffeeshop!). Serveert alcohol, koffie en hapjes. Niets met cannabis te maken." }
        ]
      }
    }
  };
  
  return content[lang];
};

const Coffeeshops = () => {
  const { language } = useLanguage();
  const content = getContent(language);

  const seo = seoData.coffeeshops[language];
  const faqItems = content.faq.items.map(item => ({ question: item.q, answer: item.a }));

  return (
    <PageLayout>
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        type="article"
        faqItems={faqItems}
        aggregateRating={{
          ratingValue: 4.9,
          ratingCount: 312,
          reviewCount: 256,
          bestRating: 5,
          worstRating: 1
        }}
        itemReviewed={{
          name: language === "nl" ? "Coffeeshops Amsterdam Gids 2026" : language === "pt" ? "Guia Coffeeshops Amsterdam 2026" : "Amsterdam Coffeeshops Guide 2026",
          description: language === "nl" ? "Complete gids over coffeeshops in Amsterdam" : language === "pt" ? "Guia completo de coffeeshops em Amsterdam" : "Complete guide to coffeeshops in Amsterdam"
        }}
        breadcrumbs={[
          { name: "Home", url: "https://amsterdu.com" },
          { name: "Coffeeshops", url: "https://amsterdu.com/coffeeshops" }
        ]}
      />
      <PageHero
        icon={Leaf}
        title={content.title}
        description={content.description}
        backgroundImage={coffeeshopHeroImg}
      />

      <IntroSection intro={content.intro} />
      
      {/* SEO Priority: Rules first - what tourists need to know immediately */}
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
      
      {/* Context sections after the key rules */}
      <WhatIsSection 
        title={content.whatIs.title}
        text={content.whatIs.text}
        warning={content.whatIs.warning}
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
      
      {/* SEO-friendly static list of coffeeshops by neighborhood */}
      <NeighborhoodListSection language={language} />
      
      <GlossarySection 
        title={content.glossary.title}
        items={content.glossary.items}
      />

      <FamousGallerySection />

      <RelatedBlogPostsSection currentPath="/coffeeshops" />
      
      <FAQSection 
        title={content.faq.title}
        items={content.faq.items}
      />
      
      <RelatedContent currentPage="coffeeshops" maxItems={4} />
    </PageLayout>
  );
};

export default Coffeeshops;
