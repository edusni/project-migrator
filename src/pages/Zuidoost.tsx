import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/hooks/useLanguage";
import { useSiteImage } from "@/hooks/useSiteImage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Train,
  Home,
  Euro,
  MapPin,
  TrendingUp,
  Users,
  Building2,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Construction,
  Landmark,
  Music,
  BookOpen,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";
import { RelatedPagesSection } from "@/components/RelatedPagesSection";
import { RelatedContent } from "@/components/RelatedContent";
import heroZuidoost from "@/assets/hero-zuidoost.webp";

const Zuidoost = () => {
  const { language } = useLanguage();
  const heroImage = useSiteImage("hero-zuidoost", heroZuidoost);

  const content = {
    pt: {
      title: "Amsterdam Zuidoost 2026",
      subtitle: "A Verticalização da Bijlmer: Cosmopolita, Vibrante e em Transformação",
      intro: "Zuidoost está redefinindo-se como o distrito mais cosmopolita e vertical de Amsterdam. A transformação de Amstel III num bairro residencial vibrante é a narrativa central de 2026.",
      neighborhoods: "Áreas de Zuidoost",
      neighborhoodsList: [
        {
          name: "Amstel III / Hondsrugpark",
          emoji: "🏗️",
          description: "Zona de escritórios em metamorfose para bairro residencial com torres modernas",
          highlights: ["SPOT", "Hondsrugpark", "The Ensemble"],
          priceRange: "€€€",
          vibe: "Pioneiro & Moderno"
        },
        {
          name: "Bijlmer Centrum",
          emoji: "🏟️",
          description: "Hub de entretenimento com Arena, AFAS Live e Pathé. Coração vibrante do distrito",
          highlights: ["Johan Cruijff Arena", "AFAS Live", "Bijlmer Parktheater"],
          priceRange: "€€",
          vibe: "Entretenimento & Cultura"
        },
        {
          name: "Holendrecht",
          emoji: "🌳",
          description: "Bairro residencial mais tranquilo com áreas verdes e habitação social renovada",
          highlights: ["Parque Nelson Mandela", "Centros comunitários", "Mercados"],
          priceRange: "€€",
          vibe: "Familiar & Tranquilo"
        },
        {
          name: "Gaasperdam",
          emoji: "🏞️",
          description: "À beira do Gaasperplas, oferece natureza e lazer aquático na cidade",
          highlights: ["Gaasperplas", "Gaasperpark", "Praias urbanas"],
          priceRange: "€€",
          vibe: "Natural & Relaxado"
        },
        {
          name: "Driemond",
          emoji: "🏡",
          description: "Pequena vila suburbana com caráter próprio, casas unifamiliares",
          highlights: ["Vida de vila", "Casas com jardim", "Natureza"],
          priceRange: "€€€",
          vibe: "Suburbano & Tranquilo"
        }
      ],
      projects: "Projetos Chave 2026",
      projectsList: [
        {
          name: "SPOT (Amstel III)",
          status: "Entrega 2026/27",
          description: "Mega-projeto de uso misto com mais de 1.000 casas, torres residenciais altas e espaços comerciais.",
          impact: "Densidade populacional imediata que sustentará novos serviços"
        },
        {
          name: "Hondsrugpark",
          status: "Fase intermédia",
          description: "Conversão da via rápida Hondsrugweg num parque residencial. Torres já em consolidação.",
          impact: "Paisagismo final 2027/28, placemaking temporário em 2026"
        },
        {
          name: "OBA Next Lab",
          status: "Operacional",
          description: "Centro comunitário de inovação e tecnologia para jovens em Kraaiennest.",
          impact: "Mitiga falta da biblioteca definitiva (OBA Next 2030)"
        },
        {
          name: "Masterplan Zuidoost",
          status: "Medição 1-meting",
          description: "Investimento de €20-30M em iluminação e redesenho de 13 estações de metro.",
          impact: "Melhoria significativa na segurança das estações"
        }
      ],
      transport: "Conectividade Metro",
      transportInfo: "Metro 50, 53 e 54 operam nas configurações atuais. Fusão das linhas 50/53 adiada para dezembro 2027. Obras preparatórias na estação Van der Madeweg ao longo de 2026 causarão interrupções pontuais de fim de semana.",
      housing: "Mercado Imobiliário",
      housingData: {
        priceM2: "€4.500 - €7.500",
        trend: "+8-10% em novas torres",
        opportunity: "Entrada antes da conclusão do Hondsrugpark oferece valorização",
        warning: "Atrasos na infraestrutura social vs. ritmo de construção"
      },
      culture: "Infraestrutura Cultural",
      cultureInfo: "Bijlmer Parktheater, AFAS Live, Kwakoe Festival. A cultura afro-caribenha e surinamesa define a identidade única do distrito. Mercados multiculturais aos fins de semana.",
      verdict: "Veredito 2026",
      verdictText: "Zuidoost é para o investidor de longo prazo. Entrada em 2026, antes da conclusão do Hondsrugpark e OBA Next, oferece potencial de valorização significativo. Big City Life cosmopolita para quem busca diversidade e entretenimento.",
      profile: "Perfil ideal: Investidor ou jovem profissional cosmopolita"
    },
    en: {
      title: "Amsterdam Zuidoost 2026",
      subtitle: "The Verticalization of Bijlmer: Cosmopolitan, Vibrant and Transforming",
      intro: "Zuidoost is redefining itself as Amsterdam's most cosmopolitan and vertical district. The transformation of Amstel III into a vibrant residential neighborhood is the central narrative of 2026.",
      neighborhoods: "Zuidoost Areas",
      neighborhoodsList: [
        {
          name: "Amstel III / Hondsrugpark",
          emoji: "🏗️",
          description: "Office zone metamorphosing into residential neighborhood with modern towers",
          highlights: ["SPOT", "Hondsrugpark", "The Ensemble"],
          priceRange: "€€€",
          vibe: "Pioneer & Modern"
        },
        {
          name: "Bijlmer Centrum",
          emoji: "🏟️",
          description: "Entertainment hub with Arena, AFAS Live and Pathé. Vibrant heart of the district",
          highlights: ["Johan Cruijff Arena", "AFAS Live", "Bijlmer Parktheater"],
          priceRange: "€€",
          vibe: "Entertainment & Culture"
        },
        {
          name: "Holendrecht",
          emoji: "🌳",
          description: "Quieter residential neighborhood with green areas and renovated social housing",
          highlights: ["Nelson Mandela Park", "Community centers", "Markets"],
          priceRange: "€€",
          vibe: "Family & Quiet"
        },
        {
          name: "Gaasperdam",
          emoji: "🏞️",
          description: "By the Gaasperplas, offering nature and water recreation in the city",
          highlights: ["Gaasperplas", "Gaasperpark", "Urban beaches"],
          priceRange: "€€",
          vibe: "Natural & Relaxed"
        },
        {
          name: "Driemond",
          emoji: "🏡",
          description: "Small suburban village with its own character, single-family homes",
          highlights: ["Village life", "Houses with gardens", "Nature"],
          priceRange: "€€€",
          vibe: "Suburban & Quiet"
        }
      ],
      projects: "Key Projects 2026",
      projectsList: [
        {
          name: "SPOT (Amstel III)",
          status: "Delivery 2026/27",
          description: "Mixed-use mega-project with over 1,000 homes, tall residential towers and commercial spaces.",
          impact: "Immediate population density that will sustain new services"
        },
        {
          name: "Hondsrugpark",
          status: "Intermediate phase",
          description: "Conversion of Hondsrugweg expressway into residential park. Towers already consolidating.",
          impact: "Final landscaping 2027/28, temporary placemaking in 2026"
        },
        {
          name: "OBA Next Lab",
          status: "Operational",
          description: "Community innovation and technology center for youth in Kraaiennest.",
          impact: "Mitigates lack of definitive library (OBA Next 2030)"
        },
        {
          name: "Masterplan Zuidoost",
          status: "1-measurement",
          description: "Investment of €20-30M in lighting and redesign of 13 metro stations.",
          impact: "Significant improvement in station safety"
        }
      ],
      transport: "Metro Connectivity",
      transportInfo: "Metro 50, 53 and 54 operate in current configurations. Lines 50/53 merger postponed to December 2027. Preparatory works at Van der Madeweg station throughout 2026 will cause occasional weekend disruptions.",
      housing: "Real Estate Market",
      housingData: {
        priceM2: "€4,500 - €7,500",
        trend: "+8-10% in new towers",
        opportunity: "Entry before Hondsrugpark completion offers appreciation",
        warning: "Social infrastructure delays vs. construction pace"
      },
      culture: "Cultural Infrastructure",
      cultureInfo: "Bijlmer Parktheater, AFAS Live, Kwakoe Festival. Afro-Caribbean and Surinamese culture defines the district's unique identity. Multicultural markets on weekends.",
      verdict: "2026 Verdict",
      verdictText: "Zuidoost is for the long-term investor. Entry in 2026, before Hondsrugpark and OBA Next completion, offers significant appreciation potential. Cosmopolitan Big City Life for those seeking diversity and entertainment.",
      profile: "Ideal profile: Investor or cosmopolitan young professional"
    },
    nl: {
      title: "Amsterdam Zuidoost 2026",
      subtitle: "De Verticalisering van de Bijlmer: Kosmopolitisch, Levendig en in Transformatie",
      intro: "Zuidoost herdefinieert zichzelf als het meest kosmopolitische en verticale stadsdeel van Amsterdam. De transformatie van Amstel III naar een levendige woonwijk is het centrale verhaal van 2026.",
      neighborhoods: "Zuidoost Gebieden",
      neighborhoodsList: [
        {
          name: "Amstel III / Hondsrugpark",
          emoji: "🏗️",
          description: "Kantorenzone in metamorfose naar woonwijk met moderne torens",
          highlights: ["SPOT", "Hondsrugpark", "The Ensemble"],
          priceRange: "€€€",
          vibe: "Pionier & Modern"
        },
        {
          name: "Bijlmer Centrum",
          emoji: "🏟️",
          description: "Entertainment hub met Arena, AFAS Live en Pathé. Bruisend hart van het stadsdeel",
          highlights: ["Johan Cruijff Arena", "AFAS Live", "Bijlmer Parktheater"],
          priceRange: "€€",
          vibe: "Entertainment & Cultuur"
        },
        {
          name: "Holendrecht",
          emoji: "🌳",
          description: "Rustigere woonwijk met groene gebieden en gerenoveerde sociale woningbouw",
          highlights: ["Nelson Mandelapark", "Buurthuizen", "Markten"],
          priceRange: "€€",
          vibe: "Gezinsvriendelijk & Rustig"
        },
        {
          name: "Gaasperdam",
          emoji: "🏞️",
          description: "Aan de Gaasperplas, biedt natuur en waterrecreatie in de stad",
          highlights: ["Gaasperplas", "Gaasperpark", "Stadstranden"],
          priceRange: "€€",
          vibe: "Natuurlijk & Ontspannen"
        },
        {
          name: "Driemond",
          emoji: "🏡",
          description: "Klein voorstedelijk dorp met eigen karakter, eengezinswoningen",
          highlights: ["Dorpsleven", "Huizen met tuinen", "Natuur"],
          priceRange: "€€€",
          vibe: "Voorstedelijk & Rustig"
        }
      ],
      projects: "Belangrijke Projecten 2026",
      projectsList: [
        {
          name: "SPOT (Amstel III)",
          status: "Oplevering 2026/27",
          description: "Gemengd megaproject met meer dan 1.000 woningen, hoge woontorens en commerciële ruimtes.",
          impact: "Directe bevolkingsdichtheid die nieuwe voorzieningen ondersteunt"
        },
        {
          name: "Hondsrugpark",
          status: "Tussenfase",
          description: "Conversie van snelweg Hondsrugweg naar woonpark. Torens al in consolidatie.",
          impact: "Definitieve inrichting 2027/28, tijdelijke placemaking in 2026"
        },
        {
          name: "OBA Next Lab",
          status: "Operationeel",
          description: "Gemeenschappelijk innovatie- en technologiecentrum voor jongeren in Kraaiennest.",
          impact: "Compenseert gebrek aan definitieve bibliotheek (OBA Next 2030)"
        },
        {
          name: "Masterplan Zuidoost",
          status: "1-meting",
          description: "Investering van €20-30M in verlichting en herontwerp van 13 metrostations.",
          impact: "Significante verbetering van stationsveiligheid"
        }
      ],
      transport: "Metro Connectiviteit",
      transportInfo: "Metro 50, 53 en 54 opereren in huidige configuraties. Fusie lijnen 50/53 uitgesteld naar december 2027. Voorbereidende werkzaamheden bij station Van der Madeweg veroorzaken incidentele weekendverstoringen in 2026.",
      housing: "Woningmarkt",
      housingData: {
        priceM2: "€4.500 - €7.500",
        trend: "+8-10% in nieuwe torens",
        opportunity: "Instappen voor voltooiing Hondsrugpark biedt waardevermeerdering",
        warning: "Vertragingen sociale infrastructuur vs. bouwtempo"
      },
      culture: "Culturele Infrastructuur",
      cultureInfo: "Bijlmer Parktheater, AFAS Live, Kwakoe Festival. Afro-Caribische en Surinaamse cultuur definieert de unieke identiteit van het stadsdeel. Multiculturele markten in weekenden.",
      verdict: "Oordeel 2026",
      verdictText: "Zuidoost is voor de lange-termijn investeerder. Instappen in 2026, voor voltooiing van Hondsrugpark en OBA Next, biedt significant waarderingspotentieel. Kosmopolitisch Big City Life voor wie diversiteit en entertainment zoekt.",
      profile: "Ideaal profiel: Investeerder of kosmopolitische jonge professional"
    }
  };

  const c = content[language] || content.pt;

  return (
    <PageLayout>
      <SEOHead
        title={c.title}
        description={c.intro}
        keywords="Amsterdam Zuidoost, Bijlmer, Amstel III, Johan Cruijff Arena, Hondsrugpark, woningmarkt Amsterdam 2026"
      />

      <PageHero
        icon={Building2}
        title={c.title}
        description={c.subtitle}
        backgroundImage={heroImage}
      />

      <div className="container mx-auto px-4 py-12 space-y-16">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8">
              <p className="text-lg text-foreground/90 leading-relaxed">
                {c.intro}
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Neighborhoods */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 flex items-center gap-3">
            <MapPin className="w-7 h-7 text-primary" />
            {c.neighborhoods}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {c.neighborhoodsList.map((neighborhood, index) => (
              <motion.div
                key={neighborhood.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="text-2xl">{neighborhood.emoji}</span>
                      {neighborhood.name}
                    </CardTitle>
                    <Badge variant="outline">{neighborhood.vibe}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{neighborhood.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {neighborhood.highlights.map((h) => (
                        <Badge key={h} variant="secondary" className="text-xs">{h}</Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {language === "pt" ? "Preço" : language === "en" ? "Price" : "Prijs"}
                      </span>
                      <Badge>{neighborhood.priceRange}</Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 flex items-center gap-3">
            <Construction className="w-7 h-7 text-primary" />
            {c.projects}
          </h2>
          <div className="space-y-4">
            {c.projectsList.map((project) => (
              <Card key={project.name} className="border-l-4 border-l-primary">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{project.name}</CardTitle>
                    <Badge variant="outline">{project.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">{project.description}</p>
                  <p className="text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    {project.impact}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Transport */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 flex items-center gap-3">
            <Train className="w-7 h-7 text-primary" />
            {c.transport}
          </h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground leading-relaxed">{c.transportInfo}</p>
            </CardContent>
          </Card>
        </section>

        {/* Housing Market */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 flex items-center gap-3">
            <Home className="w-7 h-7 text-primary" />
            {c.housing}
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-primary/5">
              <CardContent className="pt-6 text-center">
                <Euro className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-2xl font-bold">{c.housingData.priceM2}</p>
                <p className="text-sm text-muted-foreground">
                  {language === "pt" ? "Preço/m²" : language === "en" ? "Price/m²" : "Prijs/m²"}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-green-500/10">
              <CardContent className="pt-6 text-center">
                <TrendingUp className="w-8 h-8 mx-auto mb-2 text-green-600" />
                <p className="text-2xl font-bold">{c.housingData.trend}</p>
                <p className="text-sm text-muted-foreground">
                  {language === "pt" ? "Tendência" : language === "en" ? "Trend" : "Trend"}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-blue-500/10">
              <CardContent className="pt-6 text-center">
                <CheckCircle2 className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <p className="text-sm font-medium">{c.housingData.opportunity}</p>
              </CardContent>
            </Card>
            <Card className="bg-amber-500/10">
              <CardContent className="pt-6 text-center">
                <AlertTriangle className="w-8 h-8 mx-auto mb-2 text-amber-600" />
                <p className="text-sm font-medium">{c.housingData.warning}</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Culture */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 flex items-center gap-3">
            <Music className="w-7 h-7 text-primary" />
            {c.culture}
          </h2>
          <Card className="bg-gradient-to-r from-purple-500/10 to-pink-500/10">
            <CardContent className="p-6">
              <p className="text-muted-foreground leading-relaxed">{c.cultureInfo}</p>
            </CardContent>
          </Card>
        </section>

        {/* Verdict */}
        <section className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-6 h-6 text-primary" />
                {c.verdict}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-4">{c.verdictText}</p>
              <Badge variant="outline" className="text-sm py-2 px-4">
                <Users className="w-4 h-4 mr-2" />
                {c.profile}
              </Badge>
            </CardContent>
          </Card>
        </section>

        {/* Related Pages */}
        <RelatedContent currentPage="zuidoost" />
        
        <RelatedPagesSection
          currentPath="/zuidoost"
          suggestedPaths={["/amsterdam-oost", "/weesp", "/hospedagem"]}
        />
      </div>
    </PageLayout>
  );
};

export default Zuidoost;
