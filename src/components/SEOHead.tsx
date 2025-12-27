import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage, Language } from "@/hooks/useLanguage";

interface FAQItem {
  question: string;
  answer: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  faqItems?: FAQItem[];
  breadcrumbs?: { name: string; url: string }[];
  noindex?: boolean;
}

// Get locale from path
function getLocaleFromPath(pathname: string): Language {
  const match = pathname.match(/^\/(pt|en|nl)/);
  return (match?.[1] as Language) || "pt";
}

// Get path without locale prefix
function getPathWithoutLocale(pathname: string): string {
  return pathname.replace(/^\/(pt|en|nl)/, "") || "";
}

// Get alternate URLs for hreflang
function getAlternateUrls(pathname: string) {
  const cleanPath = getPathWithoutLocale(pathname);
  return {
    pt: `https://amsterdu.com/pt${cleanPath}`,
    en: `https://amsterdu.com/en${cleanPath}`,
    nl: `https://amsterdu.com/nl${cleanPath}`,
  };
}

// Get HTML lang code
function getHtmlLang(locale: Language): string {
  switch (locale) {
    case "pt": return "pt-BR";
    case "nl": return "nl-NL";
    case "en": 
    default: return "en";
  }
}

export function SEOHead({
  title,
  description,
  keywords,
  image = "https://amsterdu.com/og-image.jpg",
  type = "website",
  publishedTime,
  modifiedTime,
  author = "Du",
  section,
  faqItems,
  breadcrumbs,
  noindex = false,
}: SEOHeadProps) {
  const location = useLocation();
  const { language } = useLanguage();
  const locale = getLocaleFromPath(location.pathname);
  const canonicalUrl = `https://amsterdu.com${location.pathname}`;
  const fullTitle = title.includes("Amsterdu") ? title : `${title} | Amsterdu`;
  const alternateUrls = getAlternateUrls(location.pathname);
  const htmlLang = getHtmlLang(locale);
  const inLanguage = htmlLang;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;
    
    // Update html lang attribute
    document.documentElement.lang = htmlLang;

    // Update meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords || "");
    updateMetaTag("robots", noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");

    // Open Graph
    updateMetaTag("og:title", fullTitle, "property");
    updateMetaTag("og:description", description, "property");
    updateMetaTag("og:url", canonicalUrl, "property");
    updateMetaTag("og:image", image, "property");
    updateMetaTag("og:type", type, "property");
    updateMetaTag("og:locale", htmlLang.replace("-", "_"), "property");
    
    // OG alternate locales
    const otherLocales = Object.entries(alternateUrls).filter(([l]) => l !== locale);
    otherLocales.forEach(([l]) => {
      const altLang = getHtmlLang(l as Language).replace("-", "_");
      updateMetaTag(`og:locale:alternate`, altLang, "property", `og-locale-${l}`);
    });

    // Twitter
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:site", "@amsterdu");
    updateMetaTag("twitter:title", fullTitle);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", image);

    // Canonical
    updateCanonicalLink(canonicalUrl);
    
    // Hreflang alternates
    updateHreflangLinks(alternateUrls);

    // Article-specific meta tags
    if (type === "article") {
      if (publishedTime) updateMetaTag("article:published_time", publishedTime, "property");
      if (modifiedTime) updateMetaTag("article:modified_time", modifiedTime, "property");
      if (author) updateMetaTag("article:author", author, "property");
      if (section) updateMetaTag("article:section", section, "property");
    }

    // Structured Data - Organization (always inject on homepage)
    if (location.pathname === `/${locale}` || location.pathname === `/${locale}/`) {
      injectOrganizationSchema();
    }

    // Structured Data - FAQ
    if (faqItems && faqItems.length > 0) {
      injectFAQSchema(faqItems, inLanguage);
    }

    // Structured Data - Breadcrumbs
    if (breadcrumbs && breadcrumbs.length > 0) {
      injectBreadcrumbSchema(breadcrumbs, locale);
    }

    // Structured Data - Article
    if (type === "article") {
      injectArticleSchema({
        title: fullTitle,
        description,
        url: canonicalUrl,
        image,
        publishedTime,
        modifiedTime,
        author,
        inLanguage,
      });
    }
    
    // Structured Data - WebPage (for non-article pages)
    if (type === "website") {
      injectWebPageSchema({
        title: fullTitle,
        description,
        url: canonicalUrl,
        inLanguage,
      });
    }

    // Cleanup function
    return () => {
      removeSchemaById("faq-schema");
      removeSchemaById("breadcrumb-schema");
      removeSchemaById("article-schema");
      removeSchemaById("organization-schema");
      removeSchemaById("webpage-schema");
      removeHreflangLinks();
    };
  }, [title, description, keywords, image, type, publishedTime, modifiedTime, author, section, faqItems, breadcrumbs, noindex, canonicalUrl, fullTitle, location.pathname, htmlLang, locale, inLanguage, alternateUrls]);

  return null;
}

function updateMetaTag(name: string, content: string, type: "name" | "property" = "name", id?: string) {
  if (!content) return;
  
  const elementId = id || `meta-${type}-${name}`;
  let element = document.getElementById(elementId) as HTMLMetaElement;
  
  if (!element) {
    const selector = type === "property" ? `meta[property="${name}"]` : `meta[name="${name}"]`;
    element = document.querySelector(selector) as HTMLMetaElement;
  }
  
  if (!element) {
    element = document.createElement("meta");
    element.id = elementId;
    element.setAttribute(type, name);
    document.head.appendChild(element);
  }
  
  element.setAttribute("content", content);
}

function updateCanonicalLink(url: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  
  link.setAttribute("href", url);
}

function updateHreflangLinks(alternateUrls: { pt: string; en: string; nl: string }) {
  // Remove existing hreflang links
  removeHreflangLinks();
  
  // Add hreflang for each language
  const hreflangMap: { hreflang: string; href: string }[] = [
    { hreflang: "pt-BR", href: alternateUrls.pt },
    { hreflang: "en", href: alternateUrls.en },
    { hreflang: "nl-NL", href: alternateUrls.nl },
    { hreflang: "x-default", href: alternateUrls.pt }, // Portuguese as default
  ];
  
  hreflangMap.forEach(({ hreflang, href }) => {
    const link = document.createElement("link");
    link.setAttribute("rel", "alternate");
    link.setAttribute("hreflang", hreflang);
    link.setAttribute("href", href);
    link.setAttribute("data-hreflang", "true");
    document.head.appendChild(link);
  });
}

function removeHreflangLinks() {
  const existingLinks = document.querySelectorAll('link[data-hreflang="true"]');
  existingLinks.forEach(link => link.remove());
}

function removeSchemaById(id: string) {
  const existing = document.getElementById(id);
  if (existing) existing.remove();
}

function injectOrganizationSchema() {
  removeSchemaById("organization-schema");
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Amsterdu",
    url: "https://amsterdu.com",
    logo: "https://amsterdu.com/logo.png",
    description: "The brutally honest Amsterdam guide. Practical tips, real costs, and local secrets.",
    sameAs: [],
    founder: {
      "@type": "Person",
      name: "Du",
      url: "https://amsterdu.com/pt/sobre",
    },
  };

  const script = document.createElement("script");
  script.id = "organization-schema";
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

function injectWebPageSchema(data: {
  title: string;
  description: string;
  url: string;
  inLanguage: string;
}) {
  removeSchemaById("webpage-schema");
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: data.title,
    description: data.description,
    url: data.url,
    inLanguage: data.inLanguage,
    isPartOf: {
      "@type": "WebSite",
      name: "Amsterdu",
      url: "https://amsterdu.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Amsterdu",
      url: "https://amsterdu.com",
    },
  };

  const script = document.createElement("script");
  script.id = "webpage-schema";
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

function injectFAQSchema(faqItems: FAQItem[], inLanguage: string) {
  removeSchemaById("faq-schema");
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage,
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const script = document.createElement("script");
  script.id = "faq-schema";
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

function injectBreadcrumbSchema(breadcrumbs: { name: string; url: string }[], locale: string) {
  removeSchemaById("breadcrumb-schema");
  
  // Auto-fix breadcrumb URLs to include locale
  const fixedBreadcrumbs = breadcrumbs.map(item => {
    let url = item.url;
    // If URL doesn't have locale prefix, add it
    if (url.includes("amsterdu.com") && !url.match(/amsterdu\.com\/(pt|en|nl)/)) {
      url = url.replace("amsterdu.com", `amsterdu.com/${locale}`);
    }
    return { ...item, url };
  });
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: fixedBreadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  const script = document.createElement("script");
  script.id = "breadcrumb-schema";
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

function injectArticleSchema(data: {
  title: string;
  description: string;
  url: string;
  image: string;
  publishedTime?: string;
  modifiedTime?: string;
  author: string;
  inLanguage: string;
}) {
  removeSchemaById("article-schema");
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.title,
    description: data.description,
    url: data.url,
    image: data.image,
    inLanguage: data.inLanguage,
    datePublished: data.publishedTime || new Date().toISOString(),
    dateModified: data.modifiedTime || new Date().toISOString(),
    author: {
      "@type": "Person",
      name: data.author,
      url: "https://amsterdu.com/pt/sobre",
    },
    publisher: {
      "@type": "Organization",
      name: "Amsterdu",
      url: "https://amsterdu.com",
      logo: {
        "@type": "ImageObject",
        url: "https://amsterdu.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": data.url,
    },
  };

  const script = document.createElement("script");
  script.id = "article-schema";
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

// Export helper for generating page-specific SEO data
// Optimized for CTR with priority keywords from Search Console
export const seoData = {
  home: {
    pt: {
      title: "Guia Amsterdam 2026: Dicas, Roteiros e Como Economizar | Amsterdu",
      description: "O guia brutalmente honesto de Amsterdam. Evite armadilhas turísticas, economize até 40% e viva experiências autênticas. Por quem conhece a cidade de verdade.",
      keywords: "guia amsterdam 2026, viagem amsterdam, dicas amsterdam, roteiro amsterdam, amsterdam turismo, o que fazer amsterdam, onde ficar amsterdam, coffeeshops amsterdam, museus amsterdam, transporte amsterdam, custo de vida amsterdam",
    },
    en: {
      title: "Amsterdam Guide 2026: Tips, Itineraries & How to Save | Amsterdu",
      description: "The brutally honest Amsterdam guide. Avoid tourist traps, save up to 40% and have authentic experiences. From someone who really knows the city.",
      keywords: "amsterdam guide 2026, amsterdam travel, amsterdam tips, amsterdam itinerary, amsterdam tourism, what to do amsterdam, where to stay amsterdam, amsterdam coffeeshops, amsterdam museums, amsterdam transport, cost of living amsterdam",
    },
    nl: {
      title: "Amsterdam Gids 2026: Tips, Routes & Hoe te Besparen | Amsterdu",
      description: "De brutaal eerlijke Amsterdam gids. Vermijd toeristenvalkuilen, bespaar tot 40% en beleef authentieke ervaringen. Van iemand die de stad echt kent.",
      keywords: "amsterdam gids 2026, amsterdam reizen, amsterdam tips, amsterdam route, amsterdam toerisme, wat te doen amsterdam, waar verblijven amsterdam, amsterdam coffeeshops, amsterdam musea, amsterdam vervoer, kosten levensonderhoud amsterdam",
    },
  },
  planejamento: {
    pt: {
      title: "Planejar Amsterdam 2026: custos reais, impostos, documentos e roteiros",
      description: "Veja quanto custa viajar para Amsterdam em 2026 com VAT 21% e taxa turística 12,5%, melhores meses para ir, documentos Schengen, EES/ETIAS e roteiros prontos.",
      keywords: "quanto custa viajar para amsterdam 2026, amsterdam 2026 impostos hotel, documentos para amsterdam 2026, roteiro amsterdam 3 dias 2026, ovpay amsterdam como usar, planejar viagem amsterdam, quando ir amsterdam, orçamento amsterdam 2026, viagem holanda, schengen brasil, etias 2026",
    },
    en: {
      title: "Plan Amsterdam 2026: Real Costs, Taxes, Documents & Itineraries",
      description: "See how much it costs to travel to Amsterdam in 2026 with 21% VAT and 12.5% tourist tax, best months to visit, Schengen documents, EES/ETIAS and ready itineraries.",
      keywords: "how much amsterdam trip 2026, amsterdam 2026 hotel taxes, documents for amsterdam 2026, amsterdam 3 day itinerary 2026, ovpay amsterdam how to use, amsterdam trip planning, when to visit amsterdam, amsterdam budget 2026, netherlands travel, schengen visa, etias 2026",
    },
    nl: {
      title: "Amsterdam Plannen 2026: Echte Kosten, Belastingen, Documenten & Routes",
      description: "Bekijk wat een reis naar Amsterdam kost in 2026 met 21% BTW en 12,5% toeristenbelasting, beste maanden, Schengen-documenten, EES/ETIAS en kant-en-klare routes.",
      keywords: "amsterdam reis kosten 2026, amsterdam 2026 hotel belastingen, documenten voor amsterdam 2026, amsterdam 3 dagen route 2026, ovpay amsterdam gebruiken, amsterdam reis plannen, wanneer naar amsterdam, amsterdam budget 2026, nederland reizen, schengen visum, etias 2026",
    },
  },
  hospedagem: {
    pt: {
      title: "Hospedagem em Amsterdam 2026: impostos, Airbnb, bairros e preço final (sem pegadinhas)",
      description: "Veja o que muda em 2026: VAT 21%, imposto turístico 12,5%, taxa de day tourist €15, regras de Airbnb (30 noites/ano) e quais bairros valem para seu perfil. Inclui calculadora do preço real.",
      keywords: "onde ficar em amsterdam, hospedagem amsterdam 2026, melhores bairros amsterdam, onde se hospedar em amsterdam, hotéis amsterdam, airbnb amsterdam, taxa turistica amsterdam 2026, imposto hospedagem amsterdam, jordaan, de pijp, amsterdam noord, best zone to stay in amsterdam",
    },
    en: {
      title: "Amsterdam Accommodation 2026: Taxes, Airbnb, Areas & Final Price (No Hidden Fees)",
      description: "See what changes in 2026: 21% VAT, 12.5% tourist tax, €15 day tourist fee, Airbnb rules (30 nights/year) and which areas are best for your profile. Includes real price calculator.",
      keywords: "where to stay amsterdam, amsterdam accommodation 2026, best areas amsterdam, amsterdam hotels, amsterdam airbnb, amsterdam tourist tax 2026, amsterdam accommodation tax, jordaan, de pijp, amsterdam noord, best zone to stay in amsterdam",
    },
    nl: {
      title: "Accommodatie Amsterdam 2026: Belastingen, Airbnb, Wijken & Eindprijs (Geen Verrassingen)",
      description: "Bekijk wat verandert in 2026: 21% BTW, 12,5% toeristenbelasting, €15 dagtoeristentaks, Airbnb-regels (30 nachten/jaar) en welke wijken het beste bij je passen. Inclusief echte prijscalculator.",
      keywords: "waar overnachten amsterdam, amsterdam accommodatie 2026, beste wijken amsterdam, amsterdam hotels, amsterdam airbnb, amsterdam toeristenbelasting 2026, jordaan, de pijp, amsterdam noord",
    },
  },
  gastronomia: {
    pt: {
      title: "Onde Comer em Amsterdam em 2026: Comida Típica, Armadilhas e Dicas Locais",
      description: "Saiba onde comer em Amsterdam em 2026. Comida típica holandesa, mercados, brown cafés, rijsttafel indonésio e como evitar armadilhas turísticas.",
      keywords: "onde comer amsterdam 2026, o que comer em amsterdam, comida tipica holandesa, comida de rua amsterdam, stroopwafel, bitterballen, rijsttafel, restaurantes amsterdam, gastronomia amsterdam 2026, foodhallen, brown cafe amsterdam, armadilhas turisticas amsterdam",
    },
    en: {
      title: "Where to Eat in Amsterdam 2026: Dutch Food, Traps & Local Tips",
      description: "Find out where to eat in Amsterdam in 2026. Typical Dutch food, markets, brown cafés, Indonesian rijsttafel and how to avoid tourist traps.",
      keywords: "where to eat amsterdam 2026, what to eat amsterdam, typical dutch food, amsterdam street food, stroopwafel, bitterballen, rijsttafel, amsterdam restaurants, amsterdam food 2026, foodhallen, brown cafe amsterdam, tourist traps amsterdam",
    },
    nl: {
      title: "Waar Eten in Amsterdam 2026: Nederlandse Gerechten, Valkuilen & Lokale Tips",
      description: "Ontdek waar je in 2026 moet eten in Amsterdam. Typisch Nederlandse gerechten, markten, bruine kroegen, Indonesische rijsttafel en hoe je toeristenvallen vermijdt.",
      keywords: "waar eten amsterdam 2026, wat eten amsterdam, typisch nederlandse gerechten, amsterdam straateten, stroopwafel, bitterballen, rijsttafel, amsterdam restaurants, amsterdam eten 2026, foodhallen, bruine kroeg amsterdam, toeristenvallen amsterdam",
    },
  },
  atracoes: {
    pt: {
      title: "O Que Fazer em Amsterdam em 2026: Atrações, Roteiros e Dicas Locais",
      description: "Descubra o que fazer em Amsterdam em 2026: atrações imperdíveis, experiências gratuitas, mapas por bairro, filtros inteligentes e roteiros prontos sem ciladas.",
      keywords: "o que fazer em amsterdam 2026, atrações amsterdam, roteiro amsterdam 3 dias, mapa atrações amsterdam, museus amsterdam 2026, van gogh museum, rijksmuseum, anne frank house, experiências gratuitas amsterdam, pontos turísticos amsterdam, roteiro amsterdam 5 dias, eventos amsterdam 2026",
    },
    en: {
      title: "What to Do in Amsterdam 2026: Attractions, Itineraries & Local Tips",
      description: "Discover what to do in Amsterdam in 2026: must-see attractions, free experiences, neighborhood maps, smart filters and ready itineraries without tourist traps.",
      keywords: "what to do amsterdam 2026, amsterdam attractions, amsterdam 3 day itinerary, amsterdam attractions map, amsterdam museums 2026, van gogh museum, rijksmuseum, anne frank house, free things amsterdam, amsterdam sightseeing, amsterdam 5 day itinerary, amsterdam events 2026",
    },
    nl: {
      title: "Wat te Doen in Amsterdam 2026: Attracties, Routes & Lokale Tips",
      description: "Ontdek wat te doen in Amsterdam in 2026: must-see attracties, gratis ervaringen, wijkkaarten, slimme filters en kant-en-klare routes zonder toeristenvallen.",
      keywords: "wat te doen amsterdam 2026, amsterdam bezienswaardigheden, amsterdam 3 dagen route, amsterdam attracties kaart, amsterdam musea 2026, van gogh museum, rijksmuseum, anne frank huis, gratis activiteiten amsterdam, amsterdam bezichtigen, amsterdam 5 dagen route, amsterdam evenementen 2026",
    },
  },
  transporte: {
    pt: {
      title: "Como se Locomover em Amsterdam em 2026: transporte, OVpay, multas e aeroporto",
      description: "Guia prático para se locomover em Amsterdam em 2026: tram, metrô, trens, balsas grátis, OVpay/contactless, passes GVB, regras de bicicleta e como ir do aeroporto sem multa.",
      keywords: "como se locomover em amsterdam, transporte amsterdam, transporte público amsterdam, ovpay amsterdam, como ir do aeroporto ao centro amsterdam, multas bicicleta amsterdam, transporte amsterdam 2026, tram amsterdam, metro amsterdam, bike amsterdam, schiphol centro, ferries amsterdam",
    },
    en: {
      title: "Getting Around Amsterdam 2026: Transport, OVpay, Fines & Airport",
      description: "Practical guide to getting around Amsterdam in 2026: tram, metro, trains, free ferries, OVpay/contactless, GVB passes, bike rules and how to get from the airport without fines.",
      keywords: "getting around amsterdam, amsterdam public transport, ovpay amsterdam, schiphol to amsterdam center, amsterdam bike rules, amsterdam transport 2026, tram amsterdam, metro amsterdam, amsterdam bike, free ferries amsterdam",
    },
    nl: {
      title: "Vervoer in Amsterdam 2026: Transport, OVpay, Boetes & Luchthaven",
      description: "Praktische gids om je te verplaatsen in Amsterdam in 2026: tram, metro, treinen, gratis veerboten, OVpay/contactloos, GVB-passen, fietsregels en hoe je vanaf de luchthaven komt zonder boetes.",
      keywords: "vervoer amsterdam, openbaar vervoer amsterdam, ovpay amsterdam, schiphol naar centrum amsterdam, fietsregels amsterdam, amsterdam vervoer 2026, tram amsterdam, metro amsterdam, gratis veerboten amsterdam",
    },
  },
  coffeeshops: {
    pt: {
      title: "Regras de Coffeeshops em Amsterdam (Turistas) 2026: onde pode fumar e como evitar multa",
      description: "Entenda as regras de coffeeshops em Amsterdam em 2026: idade, limite de compra (5g), onde é proibido fumar (multa até €100) e etiqueta para não passar perrengue. Lista por bairros.",
      keywords: "regras coffeeshop amsterdam turista, coffeeshops amsterdam 2026, onde fumar amsterdam, multa fumar amsterdam, limite 5g coffeeshop, coffeeshop rules tourists, melhores coffeeshops amsterdam, bulldog, dampkring, grey area, katsu, amsterdam weed prices 2026",
    },
    en: {
      title: "Amsterdam Coffeeshop Rules for Tourists 2026: Where to Smoke & How to Avoid Fines",
      description: "Understand Amsterdam coffeeshop rules in 2026: age, purchase limit (5g), where smoking is banned (up to €100 fine) and etiquette to avoid trouble. List by neighborhood.",
      keywords: "amsterdam coffeeshop rules tourists, coffeeshops amsterdam 2026, where to smoke amsterdam, amsterdam smoking fine, 5g limit coffeeshop, best coffeeshops amsterdam, bulldog, dampkring, grey area, amsterdam weed prices 2026",
    },
    nl: {
      title: "Coffeeshop Regels Amsterdam voor Toeristen 2026: Waar Roken & Boetes Vermijden",
      description: "Begrijp de coffeeshopregels in Amsterdam 2026: leeftijd, aankooplimiet (5g), waar roken verboden is (boete tot €100) en etiquette om problemen te vermijden. Lijst per wijk.",
      keywords: "amsterdam coffeeshop regels toeristen, coffeeshops amsterdam 2026, waar roken amsterdam, amsterdam rookboete, 5g limiet coffeeshop, beste coffeeshops amsterdam, bulldog, dampkring, grey area",
    },
  },
  arredores: {
    pt: {
      title: "Bate-voltas de Amsterdam em 2026: melhores destinos, tempos e dicas",
      description: "Os melhores bate-voltas saindo de Amsterdam em 2026, com tempos reais de deslocamento, mapa, estratégias anti multidão e o que vale reservar.",
      keywords: "bate volta amsterdam, bate e volta de amsterdam, day trip amsterdam, melhores bate-voltas amsterdam, zaanse schans como ir, keukenhof 2026, haarlem bate volta, utrecht day trip, rotterdam amsterdam, giethoorn vale a pena, cidades perto de amsterdam, passeios amsterdam 2026",
    },
    en: {
      title: "Day Trips from Amsterdam 2026: Best Destinations, Times & Tips",
      description: "The best day trips from Amsterdam in 2026, with real travel times, maps, anti-crowd strategies and what to book in advance.",
      keywords: "day trips amsterdam, day trips from amsterdam, amsterdam day trip, best day trips amsterdam, zaanse schans how to go, keukenhof 2026, haarlem day trip, utrecht day trip, rotterdam amsterdam, giethoorn worth it, cities near amsterdam, amsterdam excursions 2026",
    },
    nl: {
      title: "Dagtrips vanaf Amsterdam 2026: Beste Bestemmingen, Reistijden & Tips",
      description: "De beste dagtrips vanuit Amsterdam in 2026, met echte reistijden, kaarten, anti-drukte strategieën en wat je moet reserveren.",
      keywords: "dagtrips amsterdam, dagtrips vanuit amsterdam, amsterdam dagtrip, beste dagtrips amsterdam, zaanse schans hoe te komen, keukenhof 2026, haarlem dagtrip, utrecht dagtrip, rotterdam amsterdam, giethoorn de moeite waard, steden bij amsterdam, amsterdam excursies 2026",
    },
  },
  blog: {
    pt: {
      title: "Blog do Du: Vida em Amsterdam e Dicas de Brasileiro",
      description: "Blog pessoal do Du: histórias reais sobre morar em Amsterdam, mudança do Brasil, dicas exclusivas e reflexões sobre a vida holandesa. Sem filtro.",
      keywords: "blog amsterdam, brasileiro em amsterdam, morar em amsterdam, vida holandesa, dicas amsterdam, experiências amsterdam",
    },
    en: {
      title: "Du's Blog: Life in Amsterdam and Brazilian Tips",
      description: "Du's personal blog: real stories about living in Amsterdam, moving from Brazil, exclusive tips and reflections on Dutch life. No filter.",
      keywords: "amsterdam blog, brazilian in amsterdam, living in amsterdam, dutch life, amsterdam tips, amsterdam experiences",
    },
    nl: {
      title: "Du's Blog: Leven in Amsterdam en Braziliaanse Tips",
      description: "Du's persoonlijke blog: echte verhalen over wonen in Amsterdam, verhuizen uit Brazilië, exclusieve tips en reflecties over het Nederlandse leven. Geen filter.",
      keywords: "amsterdam blog, braziliaan in amsterdam, wonen in amsterdam, nederlands leven, amsterdam tips, amsterdam ervaringen",
    },
  },
  sobre: {
    pt: {
      title: "Quem é o Du (criador do AmsterDu) | Guia sobre Amsterdam",
      description: "Conheça Du, o criador do AmsterDu. Por que este guia sobre Amsterdam existe: método, experiência real e foco em reduzir risco e aumentar experiência.",
      keywords: "quem é du, amsterdu, sobre amsterdu, guia amsterdam, brasileiro amsterdam, criador amsterdu",
    },
    en: {
      title: "Who is Du (creator of AmsterDu) | Amsterdam Guide",
      description: "Meet Du, the creator of AmsterDu. Why this Amsterdam guide exists: method, real experience and focus on reducing risk and increasing experience.",
      keywords: "who is du, amsterdu, about amsterdu, amsterdam guide, brazilian amsterdam, amsterdu creator",
    },
    nl: {
      title: "Wie is Du (maker van AmsterDu) | Amsterdam Gids",
      description: "Ontmoet Du, de maker van AmsterDu. Waarom deze Amsterdam gids bestaat: methode, echte ervaring en focus op risico verminderen en ervaring vergroten.",
      keywords: "wie is du, amsterdu, over amsterdu, amsterdam gids, braziliaan amsterdam, amsterdu maker",
    },
  },
  custoDeVida: {
    pt: {
      title: "Custo de Vida em Amsterdam 2026: aluguel, contas, impostos e quanto precisa por mês",
      description: "Veja quanto custa morar em Amsterdam em 2026 com números reais: aluguel médio €1.940, seguro saúde, energia, mercado, transporte (GVB) e impostos municipais. Inclui calculadora e 2 cenários (solteiro e casal).",
      keywords: "custo de vida amsterdam, custo de vida em amsterdam, quanto custa morar em amsterdam, custo de vida amsterdam 2026, aluguel amsterdam, salário amsterdam, morar holanda 2026, orçamento amsterdam, amsterdam custo de vida, cost of living amsterdam, living costs in amsterdam",
    },
    en: {
      title: "Cost of Living Amsterdam 2026: Rent, Bills, Taxes & Monthly Budget",
      description: "See how much it costs to live in Amsterdam in 2026 with real numbers: average rent €1,940, health insurance, energy, groceries, transport (GVB) and municipal taxes. Includes calculator and 2 scenarios (single and couple).",
      keywords: "cost of living amsterdam, cost of living in amsterdam, amsterdam cost of living, how much to live amsterdam, amsterdam rent, average rent in amsterdam, amsterdam salary, living netherlands 2026, amsterdam budget, living costs in amsterdam, living expenses amsterdam, amsterdam living cost, is amsterdam expensive to live",
    },
    nl: {
      title: "Kosten Levensonderhoud Amsterdam 2026: Huur, Rekeningen, Belastingen & Maandbudget",
      description: "Bekijk hoeveel het kost om in Amsterdam te wonen in 2026 met echte cijfers: gemiddelde huur €1.940, zorgverzekering, energie, boodschappen, vervoer (GVB) en gemeentelijke heffingen. Inclusief calculator en 2 scenario's.",
      keywords: "kosten levensonderhoud amsterdam, hoeveel kost wonen amsterdam, amsterdam huur, amsterdam salaris, wonen nederland 2026, amsterdam budget, gemiddelde huur amsterdam",
    },
  },
};
