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
export const seoData = {
  home: {
    pt: {
      title: "Amsterdu - O Guia Brutalmente Honesto de Amsterdam 2026",
      description: "Guia completo de Amsterdam para 2026: evite armadilhas turísticas, economize dinheiro e viva experiências autênticas. Dicas reais de quem conhece a cidade.",
      keywords: "guia amsterdam 2026, viagem amsterdam, dicas amsterdam, roteiro amsterdam, amsterdam turismo, o que fazer amsterdam, hospedagem amsterdam, coffeeshops amsterdam, museus amsterdam, transporte amsterdam",
    },
    en: {
      title: "Amsterdu - The Brutally Honest Amsterdam Guide 2026",
      description: "Complete Amsterdam guide for 2026: avoid tourist traps, save money and have authentic experiences. Real tips from someone who knows the city.",
      keywords: "amsterdam guide 2026, amsterdam travel, amsterdam tips, amsterdam itinerary, amsterdam tourism, what to do amsterdam, amsterdam hotels, amsterdam coffeeshops, amsterdam museums, amsterdam transport",
    },
  },
  planejamento: {
    pt: {
      title: "Planejamento de Viagem para Amsterdam 2026 - Guia Completo",
      description: "Planeje sua viagem para Amsterdam em 2026: melhor época, documentos, orçamento, roteiros e tudo que você precisa saber antes de ir. Sem perrengue!",
      keywords: "planejar viagem amsterdam, quando ir amsterdam, quanto custa amsterdam, documentos amsterdam, roteiro amsterdam, orçamento amsterdam 2026",
    },
    en: {
      title: "Amsterdam Travel Planning 2026 - Complete Guide",
      description: "Plan your Amsterdam trip in 2026: best time to visit, documents, budget, itineraries and everything you need to know. Stress-free planning!",
      keywords: "amsterdam trip planning, when to visit amsterdam, amsterdam cost, amsterdam documents, amsterdam itinerary, amsterdam budget 2026",
    },
  },
  hospedagem: {
    pt: {
      title: "Onde Ficar em Amsterdam 2026 - Melhores Bairros e Hotéis",
      description: "Guia de hospedagem em Amsterdam: melhores bairros, tipos de acomodação, preços reais e dicas para não cair em cilada. Atualizado para 2026.",
      keywords: "onde ficar amsterdam, melhores bairros amsterdam, hotéis amsterdam, airbnb amsterdam, hospedagem amsterdam 2026, jordaan, de pijp, amsterdam noord",
    },
    en: {
      title: "Where to Stay in Amsterdam 2026 - Best Areas & Hotels",
      description: "Amsterdam accommodation guide: best neighborhoods, accommodation types, real prices and tips to avoid traps. Updated for 2026.",
      keywords: "where to stay amsterdam, best areas amsterdam, amsterdam hotels, amsterdam airbnb, amsterdam accommodation 2026, jordaan, de pijp, amsterdam noord",
    },
  },
  gastronomia: {
    pt: {
      title: "Onde Comer em Amsterdam 2026 - Guia de Gastronomia",
      description: "Guia gastronômico de Amsterdam: stroopwafel, bitterballen, rijsttafel e mais. Onde comer bem sem cair em armadilha turística.",
      keywords: "onde comer amsterdam, comida holandesa, stroopwafel, bitterballen, rijsttafel, restaurantes amsterdam, gastronomia amsterdam 2026",
    },
    en: {
      title: "Where to Eat in Amsterdam 2026 - Food Guide",
      description: "Amsterdam food guide: stroopwafel, bitterballen, rijsttafel and more. Where to eat well without falling into tourist traps.",
      keywords: "where to eat amsterdam, dutch food, stroopwafel, bitterballen, rijsttafel, amsterdam restaurants, amsterdam food 2026",
    },
  },
  atracoes: {
    pt: {
      title: "Atrações de Amsterdam 2026 - O Que Fazer e Ver",
      description: "Guia de atrações de Amsterdam: museus, parques, experiências e tudo que vale a pena. Com filtros e mapa interativo.",
      keywords: "atrações amsterdam, o que fazer amsterdam, museus amsterdam, van gogh museum, rijksmuseum, anne frank house, parques amsterdam 2026",
    },
    en: {
      title: "Amsterdam Attractions 2026 - What to Do and See",
      description: "Amsterdam attractions guide: museums, parks, experiences and everything worth seeing. With filters and interactive map.",
      keywords: "amsterdam attractions, what to do amsterdam, amsterdam museums, van gogh museum, rijksmuseum, anne frank house, amsterdam parks 2026",
    },
  },
  transporte: {
    pt: {
      title: "Transporte em Amsterdam 2026 - Como se Locomover",
      description: "Guia de transporte em Amsterdam: metrô, tram, bike, ferry e OVpay. Como ir do aeroporto ao centro e se locomover na cidade.",
      keywords: "transporte amsterdam, como andar amsterdam, ovpay, tram amsterdam, metro amsterdam, bike amsterdam, schiphol centro 2026",
    },
    en: {
      title: "Amsterdam Transport 2026 - How to Get Around",
      description: "Amsterdam transport guide: metro, tram, bike, ferry and OVpay. How to get from airport to center and move around the city.",
      keywords: "amsterdam transport, getting around amsterdam, ovpay, amsterdam tram, amsterdam metro, amsterdam bike, schiphol center 2026",
    },
  },
  coffeeshops: {
    pt: {
      title: "Coffeeshops em Amsterdam 2026 - Guia Completo para Turistas",
      description: "Guia de coffeeshops em Amsterdam: como funcionam, regras, melhores opções e o que você precisa saber. Atualizado para 2026.",
      keywords: "coffeeshops amsterdam, como funciona coffeeshop, regras coffeeshop, melhores coffeeshops amsterdam, bulldog, dampkring 2026",
    },
    en: {
      title: "Amsterdam Coffeeshops 2026 - Complete Tourist Guide",
      description: "Amsterdam coffeeshops guide: how they work, rules, best options and what you need to know. Updated for 2026.",
      keywords: "amsterdam coffeeshops, how coffeeshops work, coffeeshop rules, best coffeeshops amsterdam, bulldog, dampkring 2026",
    },
  },
  arredores: {
    pt: {
      title: "Bate-Voltas de Amsterdam 2026 - Melhores Passeios",
      description: "Melhores bate-voltas de Amsterdam: Zaanse Schans, Keukenhof, Haarlem, Utrecht, Rotterdam e mais. Como ir e o que esperar.",
      keywords: "bate volta amsterdam, passeios amsterdam, zaanse schans, keukenhof, haarlem, utrecht, rotterdam, giethoorn 2026",
    },
    en: {
      title: "Day Trips from Amsterdam 2026 - Best Excursions",
      description: "Best day trips from Amsterdam: Zaanse Schans, Keukenhof, Haarlem, Utrecht, Rotterdam and more. How to go and what to expect.",
      keywords: "amsterdam day trips, amsterdam excursions, zaanse schans, keukenhof, haarlem, utrecht, rotterdam, giethoorn 2026",
    },
  },
  blog: {
    pt: {
      title: "Blog do Du - Histórias da Minha Futura Vida em Amsterdam",
      description: "Blog pessoal do Du: histórias sobre morar em Amsterdam, mudança do Brasil, dicas exclusivas e reflexões sobre a vida na Holanda.",
      keywords: "blog amsterdam, morar amsterdam, brasileiros amsterdam, vida holanda, mudança amsterdam, experiência amsterdam",
    },
    en: {
      title: "Du's Blog - Stories from My Future Life in Amsterdam",
      description: "Du's personal blog: stories about living in Amsterdam, moving from Brazil, exclusive tips and reflections on life in the Netherlands.",
      keywords: "amsterdam blog, living amsterdam, brazilians amsterdam, netherlands life, moving amsterdam, amsterdam experience",
    },
  },
  sobre: {
    pt: {
      title: "Sobre o Amsterdu - Quem é o Du",
      description: "Conheça o Du, criador do Amsterdu. Descubra por que este guia existe e como ele pode transformar sua viagem para Amsterdam.",
      keywords: "sobre amsterdu, quem é du, criador amsterdu, guia amsterdam brasileiro",
    },
    en: {
      title: "About Amsterdu - Who is Du",
      description: "Meet Du, creator of Amsterdu. Discover why this guide exists and how it can transform your Amsterdam trip.",
      keywords: "about amsterdu, who is du, amsterdu creator, amsterdam brazilian guide",
    },
  },
};
