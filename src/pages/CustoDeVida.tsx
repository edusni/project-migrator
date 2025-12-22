import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Euro, Home, Heart, Zap, Wifi, Trash2, Droplets, ShoppingCart, Bike, Users, User, Calculator, AlertTriangle, Lightbulb } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { SEOHead, seoData } from "@/components/SEOHead";
import { RelatedPagesSection } from "@/components/RelatedPagesSection";
import { RelatedBlogPostsSection } from "@/components/RelatedBlogPostsSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { CostOfLivingCalculator } from "@/components/custo-de-vida/CostOfLivingCalculator";
import amsterdamBikesImg from "@/assets/amsterdam-bikes.webp";

const CustoDeVida = () => {
  const { language } = useLanguage();
  const seo = seoData.custoDeVida[language];

  const content = {
    nl: {
      heroTitle: "Kosten van Levensonderhoud in Amsterdam 2026",
      heroSubtitle: "Hoeveel kost het echt om in de Nederlandse hoofdstad te wonen?",
      intro: {
        title: "De Waarheid Over Wonen in Amsterdam",
        text: "Veel mensen dromen ervan om aan de grachten van Amsterdam te wonen, maar financiële planning gaat veel verder dan valuta omrekenen. Voor 2026 laat het scenario energiestabilisatie zien maar hoge druk op huurprijzen. In deze Amsterdu gids openen we de \"zwarte doos\" van uitgaven: van huur tot afvalbelasting die niemand je vertelt voordat je verhuist."
      },
      housing: {
        title: "De Grote Boosdoener: Huisvesting (Huur)",
        subtitle: "Als je hoort dat Amsterdam duur is, is dit item de schuldige.",
        price: {
          title: "De Echte Prijs (2026)",
          text: "Om een appartement met 1 of 2 slaapkamers (~70m²) in de vrije sector te krijgen, bereid je voor op iets rond de",
          value: "€ 1.940",
          suffix: "maandelijks (gemiddeld € 27,75 per m²)"
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
          text: "In Nederland is de verzekering privé en verplicht.",
          value: "~€ 159/maand per volwassene",
          warning: "Er is een verplicht eigen risico van € 385 per jaar. Je betaalt de eerste € 385 aan medische kosten uit eigen zak voordat de verzekering alles dekt (behalve huisartsbezoeken, die zijn gratis)."
        },
        energy: {
          title: "Energie (Elektriciteit en Gas)",
          value: "~€ 172/maand",
          text: "Het gemiddelde voor een 1-2 persoons huishouden. Nieuwere huizen (met energielabel A of B) betalen minder; historische huizen in het centrum (met slechte isolatie) betalen meer."
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
        subtitle: "We hebben twee realistische scenario's voorbereid om de totale kosten van levensonderhoud in 2026 te visualiseren. Onthoud: waarden voor een comfortabele levensstijl, zonder buitensporige luxe, maar zonder te moeten worstelen.",
        singleTitle: "Scenario A: Alleenstaand",
        singleDesc: "Alleen wonen in een vrije sector appartement",
        coupleTitle: "Scenario B: Stel",
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
      heroSubtitle: "Quanto custa realmente morar na capital da Holanda?",
      intro: {
        title: "A Verdade Sobre Morar em Amsterdam",
        text: "Muita gente sonha em morar nos canais de Amsterdam, mas o planejamento financeiro vai muito além de converter Reais em Euros. Para 2026, o cenário é de estabilização na energia, mas pressão alta nos aluguéis. Neste guia do Amsterdu, abrimos a \"caixa preta\" das despesas: do aluguel às taxas de lixo que ninguém te conta antes de mudar."
      },
      housing: {
        title: "O Grande Vilão: Moradia (Aluguel)",
        subtitle: "Se você ouvir que Amsterdam está cara, a culpa é deste item.",
        price: {
          title: "O Preço Real (2026)",
          text: "Para conseguir um apartamento de 1 ou 2 quartos (~70m²) no mercado livre (vrije sector), prepare-se para algo em torno de",
          value: "€ 1.940",
          suffix: "mensais (média de € 27,75 por m²)"
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
          text: "Na Holanda, o seguro é privado e obrigatório.",
          value: "~€ 159/mês por adulto",
          warning: "Existe a franquia obrigatória (Eigen Risico) de € 385 por ano. Você paga os primeiros € 385 de gastos médicos do seu bolso antes do seguro cobrir tudo (exceto médico de família, que é grátis)."
        },
        energy: {
          title: "Energia (Luz e Gás)",
          value: "~€ 172/mês",
          text: "A média para uma residência de 1-2 pessoas. Casas mais novas (com etiqueta energética A ou B) pagam menos; casas históricas no centro (com isolamento ruim) pagam mais."
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
        subtitle: "Preparamos dois cenários realistas para você visualizar o custo total de vida em 2026. Lembrando: valores para um padrão de vida confortável, sem luxos excessivos, mas sem passar aperto.",
        singleTitle: "Cenário A: Solteiro",
        singleDesc: "Morando sozinho em um apê de mercado livre",
        coupleTitle: "Cenário B: Casal",
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
      heroSubtitle: "How much does it really cost to live in the Netherlands capital?",
      intro: {
        title: "The Truth About Living in Amsterdam",
        text: "Many people dream of living on Amsterdam's canals, but financial planning goes far beyond converting currencies. For 2026, the scenario shows energy stabilization but high pressure on rents. In this Amsterdu guide, we open the \"black box\" of expenses: from rent to waste fees that nobody tells you before moving."
      },
      housing: {
        title: "The Big Villain: Housing (Rent)",
        subtitle: "If you hear Amsterdam is expensive, this item is to blame.",
        price: {
          title: "The Real Price (2026)",
          text: "To get a 1 or 2 bedroom apartment (~70m²) in the free market (vrije sector), prepare for something around",
          value: "€ 1,940",
          suffix: "monthly (average of € 27.75 per m²)"
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
          text: "In the Netherlands, insurance is private and mandatory.",
          value: "~€ 159/month per adult",
          warning: "There's a mandatory deductible (Eigen Risico) of € 385 per year. You pay the first € 385 of medical expenses out of pocket before insurance covers everything (except GP visits, which are free)."
        },
        energy: {
          title: "Energy (Electricity and Gas)",
          value: "~€ 172/month",
          text: "The average for a 1-2 person residence. Newer houses (with energy label A or B) pay less; historic houses in the center (with poor insulation) pay more."
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
        subtitle: "We prepared two realistic scenarios for you to visualize the total cost of living in 2026. Remember: values for a comfortable lifestyle, without excessive luxuries, but without struggling.",
        singleTitle: "Scenario A: Single",
        singleDesc: "Living alone in a free market apartment",
        coupleTitle: "Scenario B: Couple",
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
    { label: language === "nl" ? "Huur" : language === "pt" ? "Aluguel" : "Rent", value: 1940 },
    { label: language === "nl" ? "Rekeningen (Energie/Net/Zorg)" : language === "pt" ? "Contas (Luz/Net/Saúde)" : "Bills (Energy/Net/Health)", value: 390 },
    { label: language === "nl" ? "Boodschappen/Huis" : language === "pt" ? "Mercado/Casa" : "Groceries/Home", value: 450 },
    { label: language === "nl" ? "Vervoer (Fiets + incidenteel)" : language === "pt" ? "Transporte (Bike + eventual)" : "Transport (Bike + occasional)", value: 50 },
    { label: language === "nl" ? "Gemeentelijke Heffingen (gem.)" : language === "pt" ? "Impostos Municipais (média)" : "Municipal Taxes (avg)", value: 55 },
  ];

  const coupleBudget = [
    { label: language === "nl" ? "Huur" : language === "pt" ? "Aluguel" : "Rent", value: 1940 },
    { label: language === "nl" ? "Rekeningen (Energie/Net/2x Zorg)" : language === "pt" ? "Contas (Luz/Net/2x Saúde)" : "Bills (Energy/Net/2x Health)", value: 560 },
    { label: language === "nl" ? "Boodschappen/Huis" : language === "pt" ? "Mercado/Casa" : "Groceries/Home", value: 770 },
    { label: language === "nl" ? "Vervoer (2 GVB passen)" : language === "pt" ? "Transporte (2 passes GVB)" : "Transport (2 GVB passes)", value: 258 },
    { label: language === "nl" ? "Gemeentelijke Heffingen (gem.)" : language === "pt" ? "Impostos Municipais (média)" : "Municipal Taxes (avg)", value: 80 },
  ];

  const faqItems = language === "nl" ? [
    { question: "Hoeveel kost het om te wonen in Amsterdam in 2026?", answer: "Voor een alleenstaande liggen de kosten van levensonderhoud in Amsterdam rond € 2.885/maand, inclusief huur, rekeningen, eten en vervoer. Voor een stel dat kosten deelt is het totaal ongeveer € 3.608/maand." },
    { question: "Wat is het minimumsalaris om te huren in Amsterdam?", answer: "Makelaars eisen dat je bruto inkomen 3 tot 4 keer de huurwaarde is. Voor een appartement van € 1.900 moet je een inkomen van ongeveer € 6.000 bruto per maand aantonen." },
    { question: "Hoeveel is de huur in Amsterdam 2026?", answer: "De gemiddelde huur voor een appartement met 1-2 slaapkamers (~70m²) in de vrije sector is € 1.940 per maand, gelijk aan € 27,75 per m²." },
    { question: "Welke belastingen betalen huurders in Amsterdam?", answer: "Huurders betalen Afvalstoffenheffing (€ 352-469/jaar) en Zuiveringsheffing (€ 280-465/jaar), totaal € 60-70 per maand voor een stel." },
    { question: "Hoeveel kost de zorgverzekering in Nederland in 2026?", answer: "Verplichte zorgverzekering kost ongeveer € 159/maand per volwassene, plus een verplicht eigen risico van € 385 per jaar." }
  ] : language === "pt" ? [
    { question: "Quanto custa morar em Amsterdam em 2026?", answer: "Para um solteiro, o custo de vida em Amsterdam fica em torno de € 2.885/mês, incluindo aluguel, contas, alimentação e transporte. Para um casal dividindo despesas, o total fica aproximadamente € 3.608/mês." },
    { question: "Qual o salário mínimo necessário para alugar em Amsterdam?", answer: "As imobiliárias exigem que sua renda bruta seja 3 a 4 vezes o valor do aluguel. Para um apartamento de € 1.900, você precisa comprovar renda de aproximadamente € 6.000 brutos por mês." },
    { question: "Quanto custa o aluguel em Amsterdam 2026?", answer: "O aluguel médio para um apartamento de 1-2 quartos (~70m²) no mercado livre é de € 1.940 por mês, equivalente a € 27,75 por m²." },
    { question: "Quais são os impostos que inquilinos pagam em Amsterdam?", answer: "Inquilinos pagam Taxa de Lixo (€ 352-469/ano) e Taxa de Tratamento de Água (€ 280-465/ano), totalizando € 60-70 mensais para um casal." },
    { question: "Quanto custa o seguro saúde na Holanda em 2026?", answer: "O seguro saúde obrigatório custa aproximadamente € 159/mês por adulto, mais uma franquia anual obrigatória (Eigen Risico) de € 385." }
  ] : [
    { question: "How much does it cost to live in Amsterdam in 2026?", answer: "For a single person, the cost of living in Amsterdam is around € 2,885/month, including rent, bills, food and transport. For a couple sharing expenses, the total is approximately € 3,608/month." },
    { question: "What's the minimum salary needed to rent in Amsterdam?", answer: "Real estate agencies require your gross income to be 3 to 4 times the rent value. For an apartment of € 1,900, you need to prove an income of approximately € 6,000 gross per month." },
    { question: "How much is rent in Amsterdam 2026?", answer: "The average rent for a 1-2 bedroom apartment (~70m²) in the free market is € 1,940 per month, equivalent to € 27.75 per m²." },
    { question: "What taxes do tenants pay in Amsterdam?", answer: "Tenants pay Waste Tax (€ 352-469/year) and Water Treatment Tax (€ 280-465/year), totaling € 60-70 monthly for a couple." },
    { question: "How much does health insurance cost in the Netherlands in 2026?", answer: "Mandatory health insurance costs approximately € 159/month per adult, plus a mandatory annual deductible (Eigen Risico) of € 385." }
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
      />

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              {c.intro.title}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {c.intro.text}
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
            <p className="text-muted-foreground mb-8">{c.summary.subtitle}</p>

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

      <RelatedBlogPostsSection currentPath="/custo-vida-amsterdam" />

      <RelatedPagesSection
        currentPath="/custo-vida-amsterdam"
        suggestedPaths={["/hospedagem", "/planejamento", "/sobre"]}
      />
    </PageLayout>
  );
};

export default CustoDeVida;
