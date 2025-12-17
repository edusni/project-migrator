import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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
  const canonicalUrl = `https://amsterdu.com${location.pathname}`;
  const fullTitle = title.includes("Amsterdu") ? title : `${title} | Amsterdu`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

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

    // Twitter
    updateMetaTag("twitter:title", fullTitle);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", image);

    // Canonical
    updateCanonicalLink(canonicalUrl);

    // Article-specific meta tags
    if (type === "article") {
      if (publishedTime) updateMetaTag("article:published_time", publishedTime, "property");
      if (modifiedTime) updateMetaTag("article:modified_time", modifiedTime, "property");
      if (author) updateMetaTag("article:author", author, "property");
      if (section) updateMetaTag("article:section", section, "property");
    }

    // Structured Data - FAQ
    if (faqItems && faqItems.length > 0) {
      injectFAQSchema(faqItems);
    }

    // Structured Data - Breadcrumbs
    if (breadcrumbs && breadcrumbs.length > 0) {
      injectBreadcrumbSchema(breadcrumbs);
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
      });
    }

    // Cleanup function
    return () => {
      removeSchemaById("faq-schema");
      removeSchemaById("breadcrumb-schema");
      removeSchemaById("article-schema");
    };
  }, [title, description, keywords, image, type, publishedTime, modifiedTime, author, section, faqItems, breadcrumbs, noindex, canonicalUrl, fullTitle]);

  return null;
}

function updateMetaTag(name: string, content: string, type: "name" | "property" = "name") {
  if (!content) return;
  
  const selector = type === "property" ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let element = document.querySelector(selector) as HTMLMetaElement;
  
  if (!element) {
    element = document.createElement("meta");
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

function removeSchemaById(id: string) {
  const existing = document.getElementById(id);
  if (existing) existing.remove();
}

function injectFAQSchema(faqItems: FAQItem[]) {
  removeSchemaById("faq-schema");
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
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

function injectBreadcrumbSchema(breadcrumbs: { name: string; url: string }[]) {
  removeSchemaById("breadcrumb-schema");
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
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
}) {
  removeSchemaById("article-schema");
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.title,
    description: data.description,
    url: data.url,
    image: data.image,
    datePublished: data.publishedTime || new Date().toISOString(),
    dateModified: data.modifiedTime || new Date().toISOString(),
    author: {
      "@type": "Person",
      name: data.author,
      url: "https://amsterdu.com/sobre",
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
  },
  hospedagem: {
    pt: {
      title: "Onde Ficar em Amsterdam 2026: Melhores Bairros + Preços Reais",
      description: "Descubra os melhores bairros para se hospedar em Amsterdam. Jordaan, De Pijp, Noord: qual escolher? Preços atualizados, dicas de economia e erros a evitar.",
      keywords: "onde ficar em amsterdam, melhores bairros amsterdam, onde se hospedar em amsterdam, hotéis amsterdam, airbnb amsterdam, hospedagem amsterdam 2026, jordaan, de pijp, amsterdam noord, melhores bairros para se hospedar em amsterdam",
    },
    en: {
      title: "Where to Stay in Amsterdam 2026: Best Areas + Real Prices",
      description: "Discover the best neighborhoods to stay in Amsterdam. Jordaan, De Pijp, Noord: which to choose? Updated prices, money-saving tips and mistakes to avoid.",
      keywords: "where to stay amsterdam, best areas amsterdam, amsterdam hotels, amsterdam airbnb, amsterdam accommodation 2026, jordaan, de pijp, amsterdam noord, best neighborhoods amsterdam",
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
  },
  transporte: {
    pt: {
      title: "Como se Locomover em Amsterdam 2026: Guia de Transporte",
      description: "Transporte em Amsterdam explicado: metrô, tram, bike, ferry e OVpay. Como ir de Schiphol ao centro, quanto custa e os erros que custam caro. Guia completo.",
      keywords: "transporte amsterdam, como se locomover em amsterdam, como andar amsterdam, ovpay, tram amsterdam, metro amsterdam, bike amsterdam, schiphol centro 2026, amsterdam transporte público",
    },
    en: {
      title: "How to Get Around Amsterdam 2026: Transport Guide",
      description: "Amsterdam transport explained: metro, tram, bike, ferry and OVpay. How to get from Schiphol to center, costs and expensive mistakes to avoid. Complete guide.",
      keywords: "amsterdam transport, getting around amsterdam, ovpay, amsterdam tram, amsterdam metro, amsterdam bike, schiphol center 2026, amsterdam public transport",
    },
  },
  coffeeshops: {
    pt: {
      title: "Coffeeshops Amsterdam 2026: Guia Completo + Regras e Preços",
      description: "Tudo sobre coffeeshops em Amsterdam: como funcionam, regras 2026, preços de cannabis, melhores opções e o que turistas precisam saber. Guia sem julgamento.",
      keywords: "coffeeshops amsterdam, coffeeshop guide, como funciona coffeeshop, regras coffeeshop 2026, melhores coffeeshops amsterdam, bulldog, dampkring, amsterdam weed, amsterdam weed prices 2025, maconha em amsterdam, amsterdam coffeeshop cannabis prices 2025",
    },
    en: {
      title: "Amsterdam Coffeeshops 2026: Complete Guide + Rules & Prices",
      description: "Everything about Amsterdam coffeeshops: how they work, 2026 rules, cannabis prices, best options and what tourists need to know. Judgment-free guide.",
      keywords: "amsterdam coffeeshops, coffeeshop guide, how coffeeshops work, coffeeshop rules 2026, best coffeeshops amsterdam, bulldog, dampkring, amsterdam weed, amsterdam weed prices 2025, amsterdam coffeeshop cannabis prices 2025",
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
  },
  blog: {
    pt: {
      title: "Blog do Du: Vida em Amsterdam e Dicas de Brasileiro",
      description: "Blog pessoal do Du: histórias reais sobre morar em Amsterdam, mudança do Brasil, dicas exclusivas e reflexões sobre a vida holandesa. Sem filtro.",
      keywords: "blog amsterdam, morar amsterdam, brasileiros amsterdam, vida holanda, mudança amsterdam, custo de vida em amsterdam, experiência amsterdam",
    },
    en: {
      title: "Du's Blog: Life in Amsterdam & Brazilian Tips",
      description: "Du's personal blog: real stories about living in Amsterdam, moving from Brazil, exclusive tips and reflections on Dutch life. No filter.",
      keywords: "amsterdam blog, living amsterdam, brazilians amsterdam, netherlands life, moving amsterdam, cost of living amsterdam, amsterdam experience",
    },
  },
  sobre: {
    pt: {
      title: "Quem é o Du? A História por Trás do Amsterdu",
      description: "Conheça o Du, brasileiro apaixonado por Amsterdam. Descubra por que criei este guia brutalmente honesto e como ele pode transformar sua viagem.",
      keywords: "sobre amsterdu, quem é du, quem e o du, criador amsterdu, guia amsterdam brasileiro, amsterdu blog",
    },
    en: {
      title: "Who is Du? The Story Behind Amsterdu",
      description: "Meet Du, a Brazilian passionate about Amsterdam. Discover why I created this brutally honest guide and how it can transform your trip.",
      keywords: "about amsterdu, who is du, amsterdu creator, amsterdam brazilian guide, amsterdu blog",
    },
  },
};
