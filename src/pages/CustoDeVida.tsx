import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Euro, Home, Heart, Zap, Wifi, Trash2, Droplets, ShoppingCart, Bike, Users, User, Calculator, AlertTriangle, Lightbulb, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocaleNavigation } from "@/hooks/useLocaleNavigation";
import { useLanguage } from "@/hooks/useLanguage";
import { SEOHead, seoData } from "@/components/SEOHead";
import { RelatedPagesSection } from "@/components/RelatedPagesSection";
import { RelatedBlogPostsSection } from "@/components/RelatedBlogPostsSection";
import { RelatedContent } from "@/components/RelatedContent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { CostOfLivingCalculator } from "@/components/custo-de-vida/CostOfLivingCalculator";
import amsterdamBikesImg from "@/assets/amsterdam-bikes.webp";

const CustoDeVida = () => {
  const { language } = useLanguage();
  const { getLocalizedPath, getCurrentLocale } = useLocaleNavigation();
  const locale = getCurrentLocale();
  const seo = seoData.custoDeVida[language];

  const content = {
    nl: {
      heroTitle: "Kosten van Levensonderhoud in Amsterdam 2026",
      heroSubtitle: "Huur, rekeningen, belastingen en hoeveel je per maand nodig hebt",
      quickAnswer: "In 2026 heeft een alleenstaande volwassene in Amsterdam ongeveer €2.885/maand nodig voor een comfortabel basisbestaan (zonder luxe), en een stel ongeveer €3.608/maand. Huur is de grootste variabele. Hieronder zie je de berekening per categorie en kun je simuleren met de calculator.",
        intro: {
        title: "Waarom Plannen Essentieel Is",
        text: "Wonen in Amsterdam kan een droom zijn, maar in 2026 vereist het rigoureuze financiële planning. De stad combineert hoge salarissen en levenskwaliteit, maar ook dure huur, verplichte belastingen en privédiensten zoals zorgverzekering. Deze gids legt elke component van het budget van een bewoner uit, uitsluitend gebaseerd op officiële bronnen: vastgoedmarktrapporten, gemeente, verzekeraars, waterschappen, energiestatistieken en GVB."
      },
      housing: {
        title: "De Grote Boosdoener: Huisvesting (Huur)",
        subtitle: "Als je hoort dat Amsterdam duur is, is dit item de schuldige.",
        price: {
          title: "De Echte Prijs (2026)",
          text: "Om een appartement met 1 of 2 slaapkamers (~70m²) in de vrije sector te krijgen, bereid je voor op iets rond de",
          value: "€ 1.940",
          suffix: "maandelijks (gemiddeld € 28,68 per m² - Pararius Q4 2025, +9,1% jaar-op-jaar)"
        },
        income: {
          title: "De Inkomensvalkuil (3x of 4x)",
          text: "Het huurgeld hebben is niet genoeg. Makelaars eisen dat je bruto maandinkomen 3 tot 4 keer de huurwaarde is. Dus om een appartement van € 1.900 te huren, moet je een gezinsinkomen van bijna € 6.000 bruto bewijzen."
        },
        tip: {
          title: "Amsterdu Tip",
          text: "Let op de oplevering van de woning. Veel worden \"Shell\" (geen vloer en lampen) of \"Gestoffeerd\" (met vloer en gordijnen) verhuurd. Gemeubileerd kost meer."
        }
      },
      fixedCosts: {
        title: "Verplichte Vaste Kosten",
        subtitle: "Wat je niet kunt wegsnijden",
        health: {
          title: "Zorgverzekering",
          text: "In Nederland is de verzekering privé en verplicht. De overheid meldt dat de gemiddelde premie 2026 € 1.884/jaar is.",
          value: "~€ 157/maand per volwassene",
          warning: "Er is een verplicht eigen risico van € 385 per jaar. Je betaalt de eerste € 385 aan medische kosten uit eigen zak voordat de verzekering alles dekt (behalve huisartsbezoeken, die zijn gratis)."
        },
        energy: {
          title: "Energie (Elektriciteit en Gas)",
          value: "~€ 172/maand",
          text: "Volgens officiële statistieken is de gemiddelde jaarlijkse energierekening ~€ 2.065. Nieuwere huizen (energielabel A/B) betalen minder (~€ 1.400/jaar); historische huizen met slechte isolatie kunnen boven € 3.500/jaar komen."
        },
        internet: {
          title: "Internet en Mobiel",
          internet: "Snelle thuisinternet: ~€ 40/maand",
          mobile: "Mobiel (Sim-Only): ~€ 15 tot € 20/maand"
        }
      },
      taxes: {
        title: "De 'Onzichtbare Belastingen' (Gemeentelijke Heffingen)",
        subtitle: "Veel expats schrikken in februari als brieven van de gemeente en Waternet aankomen. Ja, huurders betalen ook belasting.",
        waste: {
          title: "Afvalstoffenheffing",
          single: "~€ 352/jaar (alleenstaand)",
          couple: "~€ 469/jaar (stel/gezin)"
        },
        water: {
          title: "Zuiveringsheffing",
          single: "~€ 280/jaar (alleenstaand)",
          couple: "~€ 465/jaar (stel/gezin)"
        },
        tip: "Je kunt deze betalingen spreiden, maar ze wegen ongeveer € 60 tot € 70 per maand op het budget van een stel."
      },
      daily: {
        title: "Dagelijks Leven: Boodschappen en Vervoer",
        subtitle: "Hier is het nieuws wat beter: supermarkten in Nederland hebben eerlijke prijzen in vergelijking met inkomen.",
        grocery: {
          title: "Boodschappen",
          text: "Volgens het NIBUD instituut geeft een stel gemiddeld € 771/maand uit aan voeding, schoonmaak en persoonlijke verzorging. Een alleenstaande geeft ongeveer € 443/maand uit."
        },
        transport: {
          title: "Vervoer",
          text: "De onbeperkte maandpas van Amsterdam (GVB) kost € 129.",
          tip: "Pro Tip: Als je doet als een local en overal de fiets gebruikt, daalt deze kost naar nul (alleen fietsonderhoud)."
        }
      },
      summary: {
        title: "De Eindstand: Definitief Budget",
        subtitle: "We hebben twee realistische scenario's voorbereid om de totale kosten van levensonderhoud in 2026 te visualiseren. Waarden voor een comfortabele levensstijl, zonder buitensporige luxe, maar zonder te worstelen.",
        excludes: "Niet inbegrepen: frequente vrije tijd, reizen, school/opvang, auto, sportschool.",
        assumptions: "Aannames: vrije sector appartement ~70m² + standaard verzekering + NIBUD boodschappen + fiets met af en toe OV.",
        singleTitle: "Scenario A: Alleenstaand (2026)",
        singleDesc: "Alleen wonen in een vrije sector appartement",
        coupleTitle: "Scenario B: Stel (2026)",
        coupleDesc: "Twee volwassenen, één appartement"
      },
      conclusion: {
        title: "Amsterdu's Conclusie",
        text: "Amsterdam is niet goedkoop, maar biedt levenskwaliteit die past bij de kosten. Het geheim om hier in 2026 te wonen is niet alleen goed verdienen, maar het begrijpen van de huurinkomensregel.",
        cta: "Als je je verhuizing plant, begin je spreadsheet met huur en vergeet niet budget te reserveren voor jaarlijkse belastingen!"
      },
      calculator: {
        title: "Kosten van Levensonderhoud Calculator",
        subtitle: "Simuleer je maandelijks budget in Amsterdam"
      }
    },
    pt: {
      heroTitle: "Custo de Vida em Amsterdam 2026",
      heroSubtitle: "Aluguel, contas, impostos e quanto você precisa por mês",
      quickAnswer: "Em 2026, um adulto morando sozinho em Amsterdam precisa de cerca de €2.885–2.950/mês para viver com conforto básico (sem luxo), e um casal cerca de €3.600–3.620/mês. O aluguel é a maior variável. Abaixo você vê o cálculo por categoria e pode simular na calculadora.",
      intro: {
        title: "Por Que Planejar é Essencial",
        text: "Morar em Amsterdam pode ser um sonho, mas em 2026 exige planejamento financeiro rigoroso. A cidade combina salários altos e qualidade de vida, mas também aluguel caro, impostos obrigatórios e serviços privados como o seguro‐saúde. Este guia explica cada componente do orçamento de um residente, com base exclusiva em fontes oficiais: relatórios de mercado imobiliário, prefeitura, seguradoras, autoridades de água, estatísticas de energia e da GVB."
      },
      housing: {
        title: "O Grande Vilão: Moradia (Aluguel)",
        subtitle: "Se você ouvir que Amsterdam está cara, a culpa é deste item.",
        price: {
          title: "O Preço Real (2026)",
          text: "Para conseguir um apartamento de 1 ou 2 quartos (~70m²) no mercado livre (vrije sector), prepare-se para algo em torno de",
          value: "€ 1.940",
          suffix: "mensais (média de € 28,68 por m² - Pararius Q4 2025, alta de 9,1% no ano)"
        },
        income: {
          title: "A Pegadinha da Renda (3x ou 4x)",
          text: "Ter o dinheiro do aluguel não basta. As imobiliárias exigem que sua renda bruta mensal seja 3 a 4 vezes o valor do aluguel. Ou seja, para alugar um apê de € 1.900, você precisa provar uma renda familiar de quase € 6.000 brutos."
        },
        tip: {
          title: "Dica Amsterdu",
          text: "Fique atento à entrega do imóvel. Muitos são alugados \"Shell\" (sem piso e sem luzes) ou \"Upholstered\" (com piso e cortinas). Mobiliado (Furnished) custa mais caro."
        }
      },
      fixedCosts: {
        title: "Custos Fixos Obrigatórios",
        subtitle: "O que você não pode cortar",
        health: {
          title: "Seguro Saúde (Zorgverzekering)",
          text: "Na Holanda, o seguro é privado e obrigatório. O governo informa que o prêmio médio de 2026 é € 1.884/ano.",
          value: "~€ 157/mês por adulto",
          warning: "Existe a franquia obrigatória (Eigen Risico) de € 385 por ano. Você paga os primeiros € 385 de gastos médicos do seu bolso antes do seguro cobrir tudo (exceto médico de família, que é grátis)."
        },
        energy: {
          title: "Energia (Luz e Gás)",
          value: "~€ 172/mês",
          text: "Segundo estatísticas oficiais, a conta média anual de energia é ~€ 2.065 (considerando 2.500 kWh de eletricidade e 900 m³ de gás). Casas novas (etiqueta A/B) pagam menos (~€ 1.400/ano); casas históricas mal isoladas podem passar de € 3.500/ano."
        },
        internet: {
          title: "Internet e Celular",
          internet: "Internet residencial rápida: ~€ 40/mês",
          mobile: "Celular (Sim-Only): ~€ 15 a € 20/mês"
        }
      },
      taxes: {
        title: "As 'Taxas Invisíveis' (Impostos Municipais)",
        subtitle: "Muitos expatriados levam um susto em fevereiro, quando chegam as cartas da prefeitura (Gemeente) e da companhia de água (Waternet). Sim, inquilino paga imposto.",
        waste: {
          title: "Taxa de Lixo (Afvalstoffenheffing)",
          single: "~€ 352/ano (solteiro)",
          couple: "~€ 469/ano (casal/família)"
        },
        water: {
          title: "Taxa de Tratamento de Água",
          single: "~€ 280/ano (solteiro)",
          couple: "~€ 465/ano (casal/família)"
        },
        tip: "Você pode parcelar esses valores, mas eles pesam cerca de € 60 a € 70 mensais no orçamento do casal."
      },
      daily: {
        title: "Vida Diária: Mercado e Transporte",
        subtitle: "Aqui a notícia é um pouco melhor: o supermercado na Holanda tem preços justos comparado à renda.",
        grocery: {
          title: "Supermercado",
          text: "Segundo o instituto NIBUD, um casal gasta em média € 771/mês com comida, limpeza e itens pessoais. Um solteiro gasta cerca de € 443/mês."
        },
        transport: {
          title: "Transporte",
          text: "O passe mensal ilimitado de Amsterdam (GVB) custa € 129.",
          tip: "O Pulo do Gato: Se você fizer como um local e usar bicicleta para tudo, esse custo cai para zero (apenas manutenção da bike)."
        }
      },
      summary: {
        title: "Resumo da Ópera: O Orçamento Final",
        subtitle: "Preparamos dois cenários realistas para você visualizar o custo total de vida em 2026. Valores para um padrão de vida confortável, sem luxos excessivos, mas sem passar aperto.",
        excludes: "Não inclui: lazer frequente, viagens, escola/creche, carro, academia.",
        assumptions: "Assumimos: apê vrije sector ~70m² + seguro padrão + mercado NIBUD + bike com transporte eventual.",
        singleTitle: "Cenário A: Solteiro (2026)",
        singleDesc: "Morando sozinho em um apê de mercado livre",
        coupleTitle: "Cenário B: Casal (2026)",
        coupleDesc: "Dois adultos, um apartamento"
      },
      conclusion: {
        title: "Conclusão do Amsterdu",
        text: "Amsterdam não é barata, mas oferece qualidade de vida compatível com o custo. O segredo para morar aqui em 2026 não é apenas ganhar bem, mas entender a regra de renda do aluguel.",
        cta: "Se você está planejando sua mudança, comece sua planilha pelo aluguel e não esqueça de reservar verba para os impostos anuais!"
      },
      calculator: {
        title: "Calculadora de Custo de Vida",
        subtitle: "Simule seu orçamento mensal em Amsterdam"
      }
    },
    en: {
      heroTitle: "Cost of Living in Amsterdam 2026",
      heroSubtitle: "Rent, bills, taxes and how much you need per month",
      quickAnswer: "In 2026, a single adult living in Amsterdam needs around €2,885–2,950/month for basic comfort (no luxury), and a couple around €3,600–3,620/month. Rent is the biggest variable. Below you'll see the breakdown by category and can simulate with the calculator.",
      intro: {
        title: "Why Planning is Essential",
        text: "Living in Amsterdam can be a dream, but in 2026 it requires rigorous financial planning. The city combines high salaries and quality of life, but also expensive rent, mandatory taxes and private services like health insurance. This guide explains each component of a resident's budget, based exclusively on official sources: real estate market reports, municipality, insurers, water authorities, energy statistics and GVB."
      },
      housing: {
        title: "The Big Villain: Housing (Rent)",
        subtitle: "If you hear Amsterdam is expensive, this item is to blame.",
        price: {
          title: "The Real Price (2026)",
          text: "To get a 1 or 2 bedroom apartment (~70m²) in the free market (vrije sector), prepare for something around",
          value: "€ 1,940",
          suffix: "monthly (average of € 28.68 per m² - Pararius Q4 2025, +9.1% year-over-year)"
        },
        income: {
          title: "The Income Catch (3x or 4x)",
          text: "Having the rent money isn't enough. Real estate agencies require your gross monthly income to be 3 to 4 times the rent value. So, to rent an apartment of € 1,900, you need to prove a family income of almost € 6,000 gross."
        },
        tip: {
          title: "Amsterdu Tip",
          text: "Pay attention to property delivery. Many are rented \"Shell\" (no flooring and lights) or \"Upholstered\" (with flooring and curtains). Furnished costs more."
        }
      },
      fixedCosts: {
        title: "Mandatory Fixed Costs",
        subtitle: "What you can't cut",
        health: {
          title: "Health Insurance (Zorgverzekering)",
          text: "In the Netherlands, insurance is private and mandatory. The government reports the 2026 average premium is € 1,884/year.",
          value: "~€ 157/month per adult",
          warning: "There's a mandatory deductible (Eigen Risico) of € 385 per year. You pay the first € 385 of medical expenses out of pocket before insurance covers everything (except GP visits, which are free)."
        },
        energy: {
          title: "Energy (Electricity and Gas)",
          value: "~€ 172/month",
          text: "According to official statistics, the average annual energy bill is ~€ 2,065 (considering 2,500 kWh electricity and 900 m³ gas). Newer houses (label A/B) pay less (~€ 1,400/year); poorly insulated historic houses can exceed € 3,500/year."
        },
        internet: {
          title: "Internet and Mobile",
          internet: "Fast home internet: ~€ 40/month",
          mobile: "Mobile (Sim-Only): ~€ 15 to € 20/month"
        }
      },
      taxes: {
        title: "The 'Invisible Taxes' (Municipal Taxes)",
        subtitle: "Many expats get shocked in February when letters arrive from the municipality (Gemeente) and water company (Waternet). Yes, tenants pay taxes too.",
        waste: {
          title: "Waste Tax (Afvalstoffenheffing)",
          single: "~€ 352/year (single)",
          couple: "~€ 469/year (couple/family)"
        },
        water: {
          title: "Water Treatment Tax",
          single: "~€ 280/year (single)",
          couple: "~€ 465/year (couple/family)"
        },
        tip: "You can split these payments, but they weigh about € 60 to € 70 monthly on a couple's budget."
      },
      daily: {
        title: "Daily Life: Groceries and Transport",
        subtitle: "Here the news is a bit better: supermarkets in the Netherlands have fair prices compared to income.",
        grocery: {
          title: "Grocery",
          text: "According to NIBUD institute, a couple spends on average € 771/month on food, cleaning and personal items. A single person spends about € 443/month."
        },
        transport: {
          title: "Transport",
          text: "Amsterdam's unlimited monthly pass (GVB) costs € 129.",
          tip: "Pro Tip: If you do like a local and use a bicycle for everything, this cost drops to zero (just bike maintenance)."
        }
      },
      summary: {
        title: "The Bottom Line: Final Budget",
        subtitle: "We prepared two realistic scenarios for you to visualize the total cost of living in 2026. Values for a comfortable lifestyle, without excessive luxuries, but without struggling.",
        excludes: "Not included: frequent leisure, travel, school/daycare, car, gym.",
        assumptions: "Assumptions: vrije sector apartment ~70m² + standard insurance + NIBUD groceries + bike with occasional public transport.",
        singleTitle: "Scenario A: Single (2026)",
        singleDesc: "Living alone in a free market apartment",
        coupleTitle: "Scenario B: Couple (2026)",
        coupleDesc: "Two adults, one apartment"
      },
      conclusion: {
        title: "Amsterdu's Conclusion",
        text: "Amsterdam isn't cheap, but it offers quality of life compatible with the cost. The secret to living here in 2026 isn't just earning well, but understanding the rent income rule.",
        cta: "If you're planning your move, start your spreadsheet with rent and don't forget to budget for annual taxes!"
      },
      calculator: {
        title: "Cost of Living Calculator",
        subtitle: "Simulate your monthly budget in Amsterdam"
      }
    }
  };

  const c = content[language];

  const singleBudget = [
    { label: language === "nl" ? "Huur (70m², vrije sector)" : language === "pt" ? "Aluguel (70m², mercado livre)" : "Rent (70m², free market)", value: 1940 },
    { label: language === "nl" ? "Vaste Kosten (Energie + Internet + Tel)" : language === "pt" ? "Contas Fixas (Energia + Net + Tel)" : "Fixed Bills (Energy + Net + Tel)", value: 227 },
    { label: language === "nl" ? "Zorgverzekering basis" : language === "pt" ? "Seguro Saúde básico" : "Basic Health Insurance", value: 157 },
    { label: language === "nl" ? "Boodschappen/Huishouden" : language === "pt" ? "Supermercado/Casa" : "Groceries/Household", value: 443 },
    { label: language === "nl" ? "Gemeentelijke Heffingen (Afval + Water)" : language === "pt" ? "Impostos Municipais (Lixo + Água)" : "Municipal Taxes (Waste + Water)", value: 52 },
    { label: language === "nl" ? "Vervoer (GVB of Fiets)" : language === "pt" ? "Transporte (GVB ou Bike)" : "Transport (GVB or Bike)", value: 66 },
  ];

  const coupleBudget = [
    { label: language === "nl" ? "Huur (70m², vrije sector)" : language === "pt" ? "Aluguel (70m², mercado livre)" : "Rent (70m², free market)", value: 1940 },
    { label: language === "nl" ? "Vaste Kosten (Energie + Internet + Tel)" : language === "pt" ? "Contas Fixas (Energia + Net + Tel)" : "Fixed Bills (Energy + Net + Tel)", value: 242 },
    { label: language === "nl" ? "Zorgverzekering basis (2x)" : language === "pt" ? "Seguro Saúde básico (2x)" : "Basic Health Insurance (2x)", value: 314 },
    { label: language === "nl" ? "Boodschappen/Huishouden" : language === "pt" ? "Supermercado/Casa" : "Groceries/Household", value: 771 },
    { label: language === "nl" ? "Gemeentelijke Heffingen (Afval + Water)" : language === "pt" ? "Impostos Municipais (Lixo + Água)" : "Municipal Taxes (Waste + Water)", value: 78 },
    { label: language === "nl" ? "Vervoer (2x GVB)" : language === "pt" ? "Transporte (2x GVB)" : "Transport (2x GVB)", value: 258 },
  ];

  const faqItems = language === "nl" ? [
    { question: "Hoeveel kost het om te wonen in Amsterdam in 2026?", answer: "Voor een alleenstaande liggen de kosten van levensonderhoud in Amsterdam rond € 2.885–2.950/maand, inclusief huur (€ 1.940), rekeningen, zorgverzekering, boodschappen en vervoer. Voor een stel dat kosten deelt is het totaal ongeveer € 3.600–3.620/maand." },
    { question: "Wat is het minimumsalaris om te huren in Amsterdam?", answer: "Makelaars eisen dat je bruto inkomen 3 tot 4 keer de huurwaarde is. Voor een appartement van € 1.940 moet je een inkomen van ongeveer € 5.820–7.760 bruto per maand aantonen." },
    { question: "Hoeveel is de huur in Amsterdam 2026?", answer: "Volgens het Pararius Q4 2025 rapport is de gemiddelde huur € 28,68 per m². Voor een 70m² appartement in de vrije sector betekent dit ~€ 1.940 per maand (+9,1% jaar-op-jaar)." },
    { question: "Welke belastingen betalen huurders in Amsterdam?", answer: "Huurders betalen Afvalstoffenheffing (€ 352 alleenstaand / € 469 stel per jaar) en Waterschapsbelasting via AGV (€ 280 / € 465 per jaar), totaal € 52–78 per maand." },
    { question: "Hoeveel kost de zorgverzekering in Nederland in 2026?", answer: "Volgens de Rijksoverheid is de gemiddelde premie € 1.884/jaar, oftewel ~€ 157/maand per volwassene, plus een verplicht eigen risico van € 385 per jaar." },
    { question: "Hoeveel heb je nodig om comfortabel te leven in Amsterdam?", answer: "Een alleenstaande heeft ~€ 2.885/maand nodig, een stel ~€ 3.600/maand. Dit is voor een comfortabele levensstijl zonder luxe. Met de inkomensvereiste van makelaars (3-4x huur) moet een alleenstaande ~€ 5.800 bruto verdienen." }
  ] : language === "pt" ? [
    { question: "Quanto custa morar em Amsterdam em 2026?", answer: "Para um solteiro, o custo de vida em Amsterdam fica em torno de € 2.885–2.950/mês, incluindo aluguel (€ 1.940), contas, seguro saúde, supermercado e transporte. Para um casal dividindo despesas, o total fica em torno de € 3.600–3.620/mês." },
    { question: "Qual o salário mínimo necessário para alugar em Amsterdam?", answer: "As imobiliárias exigem que sua renda bruta seja 3 a 4 vezes o valor do aluguel. Para um apartamento de € 1.940, você precisa comprovar renda de aproximadamente € 5.820–7.760 brutos por mês." },
    { question: "Quanto custa o aluguel em Amsterdam 2026?", answer: "Segundo o relatório Pararius Q4 2025, o aluguel médio é € 28,68 por m². Para um apartamento de 70m² no mercado livre, isso significa ~€ 1.940 por mês (alta de 9,1% no ano)." },
    { question: "Quais são os impostos que inquilinos pagam em Amsterdam?", answer: "Inquilinos pagam Taxa de Lixo (€ 352 solteiro / € 469 casal por ano) e Taxa de Água via AGV (€ 280 / € 465 por ano), totalizando € 52–78 mensais." },
    { question: "Quanto custa o seguro saúde na Holanda em 2026?", answer: "Segundo a Rijksoverheid, o prêmio médio é € 1.884/ano, ou seja ~€ 157/mês por adulto, mais uma franquia anual obrigatória (Eigen Risico) de € 385." },
    { question: "Quanto precisa ganhar para viver bem em Amsterdam?", answer: "Um solteiro precisa de ~€ 2.885/mês, um casal ~€ 3.600/mês. Com a regra de renda das imobiliárias (3-4x aluguel), um solteiro deve ganhar ~€ 5.800 brutos. Casais podem combinar rendas." }
  ] : [
    { question: "How much does it cost to live in Amsterdam in 2026?", answer: "For a single person, the cost of living in Amsterdam is around € 2,885–2,950/month, including rent (€ 1,940), bills, health insurance, groceries and transport. For a couple sharing expenses, the total is around € 3,600–3,620/month." },
    { question: "What's the minimum salary needed to rent in Amsterdam?", answer: "Real estate agencies require your gross income to be 3 to 4 times the rent value. For an apartment of € 1,940, you need to prove an income of approximately € 5,820–7,760 gross per month." },
    { question: "How much is rent in Amsterdam 2026?", answer: "According to the Pararius Q4 2025 report, average rent is € 28.68 per m². For a 70m² free sector apartment, this means ~€ 1,940 per month (+9.1% year-over-year)." },
    { question: "What taxes do tenants pay in Amsterdam?", answer: "Tenants pay Waste Tax (€ 352 single / € 469 couple per year) and Water Tax via AGV (€ 280 / € 465 per year), totaling € 52–78 monthly." },
    { question: "How much does health insurance cost in the Netherlands in 2026?", answer: "According to Rijksoverheid, the average premium is € 1,884/year, or ~€ 157/month per adult, plus a mandatory annual deductible (Eigen Risico) of € 385." },
    { question: "How much do you need to earn to live comfortably in Amsterdam?", answer: "A single person needs ~€ 2,885/month, a couple ~€ 3,600/month. With the income rule from agencies (3-4x rent), a single person should earn ~€ 5,800 gross. Couples can combine incomes." }
  ];

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
          { name: language === "nl" ? "Kosten Levensonderhoud" : language === "pt" ? "Custo de Vida" : "Cost of Living", url: "https://amsterdu.com/custo-vida-amsterdam" }
        ]}
      />
      
      <PageHero
        icon={Euro}
        title={c.heroTitle}
        description={c.heroSubtitle}
        backgroundImage={amsterdamBikesImg}
        readTime={language === "nl" ? "10 min lezen" : language === "pt" ? "10 min de leitura" : "10 min read"}
        quickStats={[
          { value: "€1.940", label: language === "nl" ? "gem. huur" : language === "pt" ? "aluguel médio" : "avg rent" },
          { value: language === "nl" ? "Calculator" : language === "pt" ? "Calculadora" : "Calculator", label: language === "nl" ? "inbegrepen" : language === "pt" ? "inclusa" : "included" },
        ]}
      />

      {/* Quick Answer - SEO Priority */}
      <section className="py-8 md:py-10 bg-primary/5 border-y border-primary/20">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <div className="p-4 md:p-6 bg-card rounded-xl border border-primary/30 shadow-sm">
              <p className="text-base md:text-lg text-foreground leading-relaxed font-medium">
                {c.quickAnswer}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              {c.intro.title}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              {c.intro.text}
            </p>
            
            {/* Link to detailed blog post - SEO: differentiate pillar from post */}
            <Link 
              to={getLocalizedPath(locale, "/blog/custo-vida-amsterdam-2026")}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 hover:bg-primary/20 text-primary font-medium rounded-lg transition-colors border border-primary/20"
            >
              <span>
                {language === "nl" 
                  ? "Voorbeelden per profiel: alleenstaand, stel, gezin, student"
                  : language === "pt"
                  ? "Exemplos por perfil: solteiro, casal, família, estudante"
                  : "Examples by profile: single, couple, family, student"
                }
              </span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              {language === "nl"
                ? "Gedetailleerde cases met budgetten en tips voor verschillende situaties"
                : language === "pt"
                ? "Cases detalhados com orçamentos e dicas para diferentes situações"
                : "Detailed cases with budgets and tips for different situations"
              }
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Housing Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-2">
              <Home className="w-8 h-8 text-primary" />
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                {c.housing.title}
              </h2>
            </div>
            <p className="text-muted-foreground mb-8">{c.housing.subtitle}</p>

            <div className="grid gap-6">
              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                <CardHeader>
                  <CardTitle className="text-lg">{c.housing.price.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">{c.housing.price.text}</p>
                  <p className="text-4xl font-bold text-primary mb-1">{c.housing.price.value}</p>
                  <p className="text-sm text-muted-foreground">{c.housing.price.suffix}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-500" />
                    {c.housing.income.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{c.housing.income.text}</p>
                </CardContent>
              </Card>

              <Card className="border-accent/30 bg-accent/5">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-accent" />
                    {c.housing.tip.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{c.housing.tip.text}</p>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Fixed Costs Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
              {c.fixedCosts.title}
            </h2>
            <p className="text-muted-foreground mb-8">{c.fixedCosts.subtitle}</p>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Heart className="w-5 h-5 text-red-500" />
                    {c.fixedCosts.health.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">{c.fixedCosts.health.text}</p>
                  <p className="text-2xl font-bold text-foreground mb-3">{c.fixedCosts.health.value}</p>
                  <div className="p-3 bg-amber-500/10 rounded-lg border border-amber-500/20">
                    <p className="text-sm text-amber-700 dark:text-amber-300">{c.fixedCosts.health.warning}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-500" />
                    {c.fixedCosts.energy.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-foreground mb-2">{c.fixedCosts.energy.value}</p>
                  <p className="text-muted-foreground">{c.fixedCosts.energy.text}</p>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Wifi className="w-5 h-5 text-blue-500" />
                    {c.fixedCosts.internet.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex-1 min-w-[200px] p-3 bg-muted/50 rounded-lg">
                      <p className="text-muted-foreground">{c.fixedCosts.internet.internet}</p>
                    </div>
                    <div className="flex-1 min-w-[200px] p-3 bg-muted/50 rounded-lg">
                      <p className="text-muted-foreground">{c.fixedCosts.internet.mobile}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Invisible Taxes Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
              {c.taxes.title}
            </h2>
            <p className="text-muted-foreground mb-8">{c.taxes.subtitle}</p>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Trash2 className="w-5 h-5 text-green-600" />
                    {c.taxes.waste.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                      <span className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {language === "nl" ? "Alleenstaand" : language === "pt" ? "Solteiro" : "Single"}
                      </span>
                      <span className="font-semibold">{c.taxes.waste.single}</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                      <span className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        {language === "nl" ? "Stel" : language === "pt" ? "Casal" : "Couple"}
                      </span>
                      <span className="font-semibold">{c.taxes.waste.couple}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Droplets className="w-5 h-5 text-blue-500" />
                    {c.taxes.water.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                      <span className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {language === "nl" ? "Alleenstaand" : language === "pt" ? "Solteiro" : "Single"}
                      </span>
                      <span className="font-semibold">{c.taxes.water.single}</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                      <span className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        {language === "nl" ? "Stel" : language === "pt" ? "Casal" : "Couple"}
                      </span>
                      <span className="font-semibold">{c.taxes.water.couple}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 p-4 bg-accent/10 border border-accent/20 rounded-lg">
              <p className="text-muted-foreground flex items-start gap-2">
                <Lightbulb className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                {c.taxes.tip}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Daily Life Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
              {c.daily.title}
            </h2>
            <p className="text-muted-foreground mb-8">{c.daily.subtitle}</p>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <ShoppingCart className="w-5 h-5 text-orange-500" />
                    {c.daily.grocery.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{c.daily.grocery.text}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Bike className="w-5 h-5 text-primary" />
                    {c.daily.transport.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">{c.daily.transport.text}</p>
                  <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                    <p className="text-sm text-primary font-medium">{c.daily.transport.tip}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Budget Summary Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
              {c.summary.title}
            </h2>
            <p className="text-muted-foreground mb-4">{c.summary.subtitle}</p>
            
            {/* Exclusions and Assumptions */}
            <div className="mb-8 p-4 bg-amber-500/10 rounded-lg border border-amber-500/20">
              <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
                <strong>{c.summary.excludes}</strong>
              </p>
              <p className="text-sm text-muted-foreground">
                {c.summary.assumptions}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Single Budget */}
              <Card className="border-2 border-muted">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5 text-muted-foreground" />
                    {c.summary.singleTitle}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{c.summary.singleDesc}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {singleBudget.map((item, i) => (
                      <div key={i} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className="font-semibold">€ {item.value.toLocaleString()}</span>
                      </div>
                    ))}
                    <div className="flex justify-between items-center pt-4 border-t-2 border-primary/30">
                      <span className="font-bold text-lg">TOTAL</span>
                      <span className="text-2xl font-bold text-primary">
                        ~€ {singleBudget.reduce((a, b) => a + b.value, 0).toLocaleString()} / {language === "nl" ? "maand" : language === "pt" ? "mês" : "month"}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Couple Budget */}
              <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    {c.summary.coupleTitle}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{c.summary.coupleDesc}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {coupleBudget.map((item, i) => (
                      <div key={i} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className="font-semibold">€ {item.value.toLocaleString()}</span>
                      </div>
                    ))}
                    <div className="flex justify-between items-center pt-4 border-t-2 border-primary/30">
                      <span className="font-bold text-lg">TOTAL</span>
                      <span className="text-2xl font-bold text-primary">
                        ~€ {coupleBudget.reduce((a, b) => a + b.value, 0).toLocaleString()} / {language === "nl" ? "maand" : language === "pt" ? "mês" : "month"}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Interactive Calculator */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-2">
              <Calculator className="w-8 h-8 text-primary" />
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                {c.calculator.title}
              </h2>
            </div>
            <p className="text-muted-foreground mb-8">{c.calculator.subtitle}</p>
            
            <CostOfLivingCalculator language={language} />
          </AnimatedSection>
        </div>
      </section>

      {/* Sources Section - E-E-A-T */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-4">
              {language === "nl" ? "Bronnen en Methodologie (2026)" : language === "pt" ? "Fontes e Metodologia (2026)" : "Sources and Methodology (2026)"}
            </h2>
            <div className="bg-card rounded-xl border border-border p-5">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>{language === "nl" ? "Huur" : language === "pt" ? "Aluguel" : "Rent"}:</strong> {language === "nl" ? "Pararius Q4 2025 rapport – gemiddelde € 28,68/m² in Amsterdam (+9,1% jaar-op-jaar)" : language === "pt" ? "Relatório Pararius Q4 2025 – média € 28,68/m² em Amsterdam (+9,1% no ano)" : "Pararius Q4 2025 report – average € 28.68/m² in Amsterdam (+9.1% year-over-year)"}</li>
                <li>• <strong>{language === "nl" ? "Boodschappen" : language === "pt" ? "Supermercado" : "Groceries"}:</strong> {language === "nl" ? "NIBUD via Nationale-Nederlanden – € 443 alleenstaand, € 771 stel per maand" : language === "pt" ? "NIBUD via Nationale-Nederlanden – € 443 solteiro, € 771 casal por mês" : "NIBUD via Nationale-Nederlanden – € 443 single, € 771 couple per month"}</li>
                <li>• <strong>{language === "nl" ? "Zorgverzekering" : language === "pt" ? "Seguro Saúde" : "Health Insurance"}:</strong> {language === "nl" ? "Rijksoverheid – gemiddelde premie 2026 € 1.884/jaar (€ 157/maand)" : language === "pt" ? "Rijksoverheid – prêmio médio 2026 € 1.884/ano (€ 157/mês)" : "Rijksoverheid – 2026 average premium € 1,884/year (€ 157/month)"}</li>
                <li>• <strong>{language === "nl" ? "Energie" : language === "pt" ? "Energia" : "Energy"}:</strong> {language === "nl" ? "Officiële statistieken – gemiddeld € 2.065/jaar (€ 172/maand) voor 2.500 kWh + 900 m³ gas" : language === "pt" ? "Estatísticas oficiais – média € 2.065/ano (€ 172/mês) para 2.500 kWh + 900 m³ de gás" : "Official statistics – average € 2,065/year (€ 172/month) for 2,500 kWh + 900 m³ gas"}</li>
                <li>• <strong>{language === "nl" ? "Afvalstoffenheffing" : language === "pt" ? "Taxa de Lixo" : "Waste Tax"}:</strong> {language === "nl" ? "Gemeente Amsterdam 2026 – € 352 alleenstaand, € 469 meerpersoons per jaar" : language === "pt" ? "Prefeitura Amsterdam 2026 – € 352 solteiro, € 469 multipessoas por ano" : "Municipality Amsterdam 2026 – € 352 single, € 469 multi-person per year"}</li>
                <li>• <strong>{language === "nl" ? "Waterschapsbelasting" : language === "pt" ? "Taxa de Água (AGV)" : "Water Tax (AGV)"}:</strong> {language === "nl" ? "Waterschap AGV 2026 – € 279,64 (1 VE) / € 465,22 (2+ VE) per jaar" : language === "pt" ? "Waterschap AGV 2026 – € 279,64 (1 VE) / € 465,22 (2+ VE) por ano" : "Waterschap AGV 2026 – € 279.64 (1 pollution unit) / € 465.22 (2+ units) per year"}</li>
                <li>• <strong>{language === "nl" ? "Vervoer" : language === "pt" ? "Transporte" : "Transport"}:</strong> {language === "nl" ? "GVB Vrij – € 129/maand onbeperkt Amsterdam" : language === "pt" ? "GVB Vrij – € 129/mês ilimitado Amsterdam" : "GVB Vrij – € 129/month unlimited Amsterdam"}</li>
              </ul>
              <p className="mt-4 text-xs text-muted-foreground/70">
                {language === "nl" ? "Waarden zijn schattingen gebaseerd op officiële bronnen en marktgemiddelden. Individuele kosten kunnen variëren afhankelijk van locatie, consumptie en levensstijl." : language === "pt" ? "Valores são estimativas baseadas em fontes oficiais e médias de mercado. Custos individuais podem variar conforme localização, consumo e estilo de vida." : "Values are estimates based on official sources and market averages. Individual costs may vary depending on location, consumption and lifestyle."}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-12 md:py-16 bg-primary/5">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <Card className="border-primary/30">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">{c.conclusion.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{c.conclusion.text}</p>
                <p className="text-primary font-medium">{c.conclusion.cta}</p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <RelatedContent currentPage="custo-vida-amsterdam" />
      
      <RelatedBlogPostsSection currentPath="/custo-vida-amsterdam" />

      <RelatedPagesSection
        currentPath="/custo-vida-amsterdam"
        suggestedPaths={["/hospedagem", "/planejamento", "/sobre"]}
      />
    </PageLayout>
  );
};

export default CustoDeVida;
