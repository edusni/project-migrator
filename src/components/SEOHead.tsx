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
      title: "Como Planejar Viagem para Amsterdam 2026 (Passo a Passo)",
      description: "Planeje Amsterdam sem erro: melhor época, documentos, orçamento real, roteiros testados. Tudo que você precisa saber antes de ir. Guia atualizado 2026.",
      keywords: "planejar viagem amsterdam, quando ir amsterdam, quanto custa amsterdam, documentos amsterdam, roteiro amsterdam, orçamento amsterdam 2026, viagem holanda",
    },
    en: {
      title: "How to Plan Your Amsterdam Trip 2026 (Step by Step)",
      description: "Plan Amsterdam without mistakes: best time, documents, real budget, tested itineraries. Everything you need to know. Updated guide 2026.",
      keywords: "amsterdam trip planning, when to visit amsterdam, amsterdam cost, amsterdam documents, amsterdam itinerary, amsterdam budget 2026, netherlands travel",
    },
    nl: {
      title: "Hoe Plan Je Je Amsterdam Reis 2026 (Stap voor Stap)",
      description: "Plan Amsterdam zonder fouten: beste tijd, documenten, echt budget, geteste routes. Alles wat je moet weten. Bijgewerkte gids 2026.",
      keywords: "amsterdam reis plannen, wanneer naar amsterdam, amsterdam kosten, amsterdam documenten, amsterdam route, amsterdam budget 2026, nederland reizen",
    },
  },
  hospedagem: {
    pt: {
      title: "Onde Ficar em Amsterdam 2026: Guia dos 7 Melhores Bairros",
      description: "⭐ Jordaan, De Pijp ou Noord? Compare bairros com preços reais (€80-250/noite). Evite zonas turísticas caras. Mapa + dicas de quem mora lá →",
      keywords: "onde ficar em amsterdam, melhores bairros amsterdam, onde se hospedar em amsterdam, hotéis amsterdam, airbnb amsterdam, hospedagem amsterdam 2026, jordaan, de pijp, amsterdam noord, melhores bairros para se hospedar em amsterdam, best zone to stay in amsterdam, best area to stay near area of jordaan",
    },
    en: {
      title: "Where to Stay in Amsterdam 2026: Best 7 Neighborhoods Guide",
      description: "⭐ Jordaan, De Pijp or Noord? Compare areas with real prices (€80-250/night). Avoid overpriced tourist zones. Map + insider tips →",
      keywords: "where to stay amsterdam, best areas amsterdam, amsterdam hotels, amsterdam airbnb, amsterdam accommodation 2026, jordaan, de pijp, amsterdam noord, best neighborhoods amsterdam, best zone to stay in amsterdam",
    },
    nl: {
      title: "Waar Verblijven in Amsterdam 2026: Gids voor de 7 Beste Wijken",
      description: "⭐ Jordaan, De Pijp of Noord? Vergelijk wijken met echte prijzen (€80-250/nacht). Vermijd te dure toeristenzones. Kaart + insider tips →",
      keywords: "waar verblijven amsterdam, beste wijken amsterdam, amsterdam hotels, amsterdam airbnb, amsterdam accommodatie 2026, jordaan, de pijp, amsterdam noord, beste buurten amsterdam",
    },
  },
  gastronomia: {
    pt: {
      title: "O Que Comer em Amsterdam 2026: Guia de Comida Holandesa",
      description: "Onde comer em Amsterdam sem cair em armadilha turística. Stroopwafel, bitterballen, rijsttafel: o que provar e onde encontrar. Preços e dicas locais.",
      keywords: "onde comer amsterdam, o que comer em amsterdam, comida holandesa, stroopwafel, bitterballen, rijsttafel, restaurantes amsterdam, gastronomia amsterdam 2026, foodhallen",
    },
    en: {
      title: "What to Eat in Amsterdam 2026: Dutch Food Guide",
      description: "Where to eat in Amsterdam without falling into tourist traps. Stroopwafel, bitterballen, rijsttafel: what to try and where to find it. Prices and local tips.",
      keywords: "where to eat amsterdam, what to eat amsterdam, dutch food, stroopwafel, bitterballen, rijsttafel, amsterdam restaurants, amsterdam food 2026, foodhallen",
    },
    nl: {
      title: "Wat te Eten in Amsterdam 2026: Nederlandse Eetgids",
      description: "Waar eten in Amsterdam zonder in toeristenvallen te trappen. Stroopwafel, bitterballen, rijsttafel: wat proberen en waar te vinden. Prijzen en lokale tips.",
      keywords: "waar eten amsterdam, wat eten amsterdam, nederlandse gerechten, stroopwafel, bitterballen, rijsttafel, amsterdam restaurants, amsterdam eten 2026, foodhallen",
    },
  },
  atracoes: {
    pt: {
      title: "Atrações Amsterdam 2026: O Que Fazer + Mapa Interativo",
      description: "Guia completo de atrações em Amsterdam. Museus, parques, experiências: descubra o que vale a pena. Com filtros por preço, área e tipo. Mapa interativo incluso.",
      keywords: "atrações amsterdam, o que fazer em amsterdam, atrações em amsterdam, museus amsterdam, van gogh museum, rijksmuseum, anne frank house, parques amsterdam 2026, atividades amsterdam, coisas para fazer em amsterdam",
    },
    en: {
      title: "Amsterdam Attractions 2026: What to Do + Interactive Map",
      description: "Complete Amsterdam attractions guide. Museums, parks, experiences: discover what's worth it. With filters by price, area and type. Interactive map included.",
      keywords: "amsterdam attractions, what to do amsterdam, amsterdam museums, van gogh museum, rijksmuseum, anne frank house, amsterdam parks 2026, amsterdam activities, things to do amsterdam",
    },
    nl: {
      title: "Amsterdam Bezienswaardigheden 2026: Wat te Doen + Interactieve Kaart",
      description: "Complete Amsterdam attracties gids. Musea, parken, ervaringen: ontdek wat de moeite waard is. Met filters op prijs, gebied en type. Interactieve kaart inbegrepen.",
      keywords: "amsterdam bezienswaardigheden, wat te doen amsterdam, amsterdam musea, van gogh museum, rijksmuseum, anne frank huis, amsterdam parken 2026, amsterdam activiteiten, dingen om te doen amsterdam",
    },
  },
  transporte: {
    pt: {
      title: "Transporte Amsterdam 2026: Metrô, Tram, Bike + Como Economizar",
      description: "🚋 Schiphol → Centro por €5,50. OVpay ou bilhete? Bike grátis! Evite multas de €50. Guia com mapas e dicas de morador →",
      keywords: "transporte amsterdam, como se locomover em amsterdam, como andar amsterdam, ovpay, tram amsterdam, metro amsterdam, bike amsterdam, schiphol centro 2026, amsterdam transporte público",
    },
    en: {
      title: "Amsterdam Transport 2026: Metro, Tram, Bike + How to Save",
      description: "🚋 Schiphol → Center for €5.50. OVpay or ticket? Free bikes! Avoid €50 fines. Guide with maps and local tips →",
      keywords: "amsterdam transport, getting around amsterdam, ovpay, amsterdam tram, amsterdam metro, amsterdam bike, schiphol center 2026, amsterdam public transport",
    },
    nl: {
      title: "Amsterdam Vervoer 2026: Metro, Tram, Fiets + Hoe te Besparen",
      description: "🚋 Schiphol → Centrum voor €5,50. OVpay of kaartje? Gratis fietsen! Vermijd €50 boetes. Gids met kaarten en lokale tips →",
      keywords: "amsterdam vervoer, rondkomen amsterdam, ovpay, amsterdam tram, amsterdam metro, amsterdam fiets, schiphol centrum 2026, amsterdam openbaar vervoer",
    },
  },
  coffeeshops: {
    pt: {
      title: "Coffeeshops Amsterdam 2026: Guia Completo + Regras e Preços",
      description: "Tudo sobre coffeeshops em Amsterdam: como funcionam, regras 2026, preços de cannabis, melhores opções e o que turistas precisam saber. Guia sem julgamento.",
      keywords: "coffeeshops amsterdam, coffeeshop guide, como funciona coffeeshop, regras coffeeshop 2026, melhores coffeeshops amsterdam, bulldog, dampkring, amsterdam weed, amsterdam weed prices 2026, maconha em amsterdam, amsterdam coffeeshop cannabis prices 2026",
    },
    en: {
      title: "Amsterdam Coffeeshops 2026: Complete Guide + Rules & Prices",
      description: "Everything about Amsterdam coffeeshops: how they work, 2026 rules, cannabis prices, best options and what tourists need to know. Judgment-free guide.",
      keywords: "amsterdam coffeeshops, coffeeshop guide, how coffeeshops work, coffeeshop rules 2026, best coffeeshops amsterdam, bulldog, dampkring, amsterdam weed, amsterdam weed prices 2026, amsterdam coffeeshop cannabis prices 2026",
    },
    nl: {
      title: "Amsterdam Coffeeshops 2026: Complete Gids + Regels & Prijzen",
      description: "Alles over Amsterdam coffeeshops: hoe ze werken, regels 2026, cannabis prijzen, beste opties en wat toeristen moeten weten. Oordeelvrije gids.",
      keywords: "amsterdam coffeeshops, coffeeshop gids, hoe werken coffeeshops, coffeeshop regels 2026, beste coffeeshops amsterdam, bulldog, dampkring, amsterdam wiet, amsterdam wiet prijzen 2026",
    },
  },
  arredores: {
    pt: {
      title: "Bate-Volta Amsterdam 2026: 10 Melhores Passeios de 1 Dia",
      description: "Melhores bate-voltas de Amsterdam: Zaanse Schans, Keukenhof, Haarlem, Rotterdam, Giethoorn. Como ir, quanto custa e se vale a pena. Guia prático testado.",
      keywords: "bate volta amsterdam, bate e volta de amsterdam, bate volta de amsterdam, passeios amsterdam, cidades perto de amsterdam, zaanse schans, keukenhof, haarlem, utrecht, rotterdam, giethoorn 2026",
    },
    en: {
      title: "Amsterdam Day Trips 2026: 10 Best One-Day Excursions",
      description: "Best day trips from Amsterdam: Zaanse Schans, Keukenhof, Haarlem, Rotterdam, Giethoorn. How to go, costs and if it's worth it. Tested practical guide.",
      keywords: "amsterdam day trips, day trips from amsterdam, amsterdam excursions, cities near amsterdam, zaanse schans, keukenhof, haarlem, utrecht, rotterdam, giethoorn 2026",
    },
    nl: {
      title: "Amsterdam Dagtrips 2026: 10 Beste Eendaagse Uitjes",
      description: "Beste dagtrips vanuit Amsterdam: Zaanse Schans, Keukenhof, Haarlem, Rotterdam, Giethoorn. Hoe te gaan, kosten en of het de moeite waard is. Geteste praktische gids.",
      keywords: "amsterdam dagtrips, dagtrips vanuit amsterdam, amsterdam excursies, steden bij amsterdam, zaanse schans, keukenhof, haarlem, utrecht, rotterdam, giethoorn 2026",
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
      title: "Quem é o Du? | A História por trás do Amsterdu",
      description: "Conheça o Du: brasileiro apaixonado por Amsterdam, futuro morador da cidade. Descubra por que o Amsterdu existe e como ele pode ajudar sua viagem.",
      keywords: "quem é du, amsterdu, sobre amsterdu, guia amsterdam, brasileiro amsterdam",
    },
    en: {
      title: "Who is Du? | The Story Behind Amsterdu",
      description: "Meet Du: a Brazilian passionate about Amsterdam, future city resident. Discover why Amsterdu exists and how it can help your trip.",
      keywords: "who is du, amsterdu, about amsterdu, amsterdam guide, brazilian amsterdam",
    },
    nl: {
      title: "Wie is Du? | Het Verhaal Achter Amsterdu",
      description: "Maak kennis met Du: een Braziliaan met passie voor Amsterdam, toekomstig inwoner. Ontdek waarom Amsterdu bestaat en hoe het je reis kan helpen.",
      keywords: "wie is du, amsterdu, over amsterdu, amsterdam gids, braziliaan amsterdam",
    },
  },
  custoDeVida: {
    pt: {
      title: "Custo de Vida Amsterdam 2026: Aluguel, Salário e Orçamento Real",
      description: "💰 Aluguel médio €1.800. Salário mínimo €2.070. Vale a pena? Calculadora interativa + planilha de gastos mensais reais →",
      keywords: "custo de vida amsterdam, quanto custa morar em amsterdam, custo de vida em amsterdam, aluguel amsterdam, salário amsterdam, morar holanda 2026, orçamento amsterdam, amsterdam custo de vida, cost of living amsterdam, living costs in amsterdam, amsterdam cost of living",
    },
    en: {
      title: "Cost of Living Amsterdam 2026: Rent, Salary & Real Budget",
      description: "💰 Average rent €1,800. Minimum wage €2,070. Worth it? Interactive calculator + real monthly expenses breakdown →",
      keywords: "cost of living amsterdam, cost of living in amsterdam, amsterdam cost of living, how much to live amsterdam, amsterdam rent, average rent in amsterdam, amsterdam salary, living netherlands 2026, amsterdam budget, living costs in amsterdam, living expenses amsterdam, amsterdam living cost, is amsterdam expensive to live",
    },
    nl: {
      title: "Kosten Levensonderhoud Amsterdam 2026: Huur, Salaris & Echt Budget",
      description: "💰 Gemiddelde huur €1.800. Minimumloon €2.070. De moeite waard? Interactieve calculator + echte maandelijkse uitgaven →",
      keywords: "kosten levensonderhoud amsterdam, hoeveel kost wonen amsterdam, amsterdam huur, amsterdam salaris, wonen nederland 2026, amsterdam budget",
    },
  },
};
