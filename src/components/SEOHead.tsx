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

// Static pages that should have .html extension in canonical/hreflang
const STATIC_PAGE_SLUGS = [
  'index', 'planejamento', 'planning', 'hospedagem', 'accommodation',
  'atracoes', 'attractions', 'transporte', 'transport', 'gastronomia', 
  'food', 'coffeeshops', 'arredores', 'daytrips', 'sobre', 'about',
  'custo-de-vida', 'cost-of-living', 'kosten-van-levensonderhoud',
  'de-pijp', 'weesp', 'zuidoost'
];

// Mapping for cross-locale page equivalents (PT slug → EN/NL slug)
const PAGE_LOCALE_MAP: Record<string, Record<string, string>> = {
  'planejamento': { en: 'planning', nl: 'planning' },
  'hospedagem': { en: 'accommodation', nl: 'accommodation' },
  'atracoes': { en: 'attractions', nl: 'attractions' },
  'transporte': { en: 'transport', nl: 'transport' },
  'gastronomia': { en: 'food', nl: 'food' },
  'arredores': { en: 'daytrips', nl: 'daytrips' },
  'sobre': { en: 'about', nl: 'about' },
  'custo-de-vida': { en: 'cost-of-living', nl: 'kosten-van-levensonderhoud' },
  // Pages with same slug in all locales
  'coffeeshops': { en: 'coffeeshops', nl: 'coffeeshops' },
  'de-pijp': { en: 'de-pijp', nl: 'de-pijp' },
  'weesp': { en: 'weesp', nl: 'weesp' },
  'zuidoost': { en: 'zuidoost', nl: 'zuidoost' },
};

// Get the correct slug for a given locale
function getLocalizedSlug(slug: string, targetLocale: Language): string {
  // If it's a PT slug, translate to target locale
  if (PAGE_LOCALE_MAP[slug]) {
    if (targetLocale === 'pt') return slug;
    return PAGE_LOCALE_MAP[slug][targetLocale] || slug;
  }
  
  // If it's an EN/NL slug, find the PT equivalent first
  for (const [ptSlug, translations] of Object.entries(PAGE_LOCALE_MAP)) {
    if (translations.en === slug || translations.nl === slug) {
      if (targetLocale === 'pt') return ptSlug;
      return translations[targetLocale] || slug;
    }
  }
  
  return slug;
}

// Determine if a path should have .html extension
function shouldHaveHtmlExtension(path: string): boolean {
  const cleanPath = path.replace(/^\//, '').replace(/\.html$/, '');
  // Root/index pages
  if (!cleanPath || cleanPath === 'index') return true;
  // Check if it's a known static page
  return STATIC_PAGE_SLUGS.some(slug => cleanPath === slug || cleanPath.endsWith(`/${slug}`));
}

// Get alternate URLs for hreflang with proper .html extensions and localized slugs
function getAlternateUrls(pathname: string) {
  // Get current locale and path without locale
  const currentLocale = getLocaleFromPath(pathname);
  let cleanPath = getPathWithoutLocale(pathname)
    .toLowerCase()
    .replace(/\/+$/, '')  // Remove trailing slash
    .replace(/\.html$/, ''); // Remove .html for processing
  
  // Extract the slug (last part of path)
  const slug = cleanPath.replace(/^\//, '') || 'index';
  const isStaticPage = shouldHaveHtmlExtension(cleanPath);
  
  // Build URLs for each locale with correct slugs
  const buildUrl = (locale: Language): string => {
    const localizedSlug = getLocalizedSlug(slug, locale);
    const path = localizedSlug === 'index' ? '' : `/${localizedSlug}`;
    const extension = isStaticPage ? '.html' : '';
    
    if (localizedSlug === 'index') {
      return `https://amsterdu.com/${locale}/index.html`;
    }
    
    return `https://amsterdu.com/${locale}${path}${extension}`;
  };
  
  return {
    pt: buildUrl('pt'),
    en: buildUrl('en'),
    nl: buildUrl('nl'),
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
  
  // Normalize pathname: lowercase, no trailing slash
  const normalizedPath = location.pathname
    .toLowerCase()
    .replace(/\/+$/, '');
  
  // For static pages, canonical should include .html extension
  const pathWithoutLocale = getPathWithoutLocale(normalizedPath).replace(/\.html$/, '');
  const slug = pathWithoutLocale.replace(/^\//, '') || 'index';
  const isStaticPage = shouldHaveHtmlExtension(pathWithoutLocale);
  
  // Build canonical URL with proper extension
  let canonicalUrl: string;
  if (slug === 'index' || !pathWithoutLocale) {
    canonicalUrl = `https://amsterdu.com/${locale}/index.html`;
  } else if (isStaticPage) {
    canonicalUrl = `https://amsterdu.com/${locale}/${slug}.html`;
  } else {
    // Dynamic pages (blog, neighborhoods as SPA routes) without .html
    canonicalUrl = `https://amsterdu.com${normalizedPath}`;
  }
  
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

    // Structured Data - Organization (inject on ALL pages for brand recognition)
    injectOrganizationSchema();
    
    // Structured Data - WebSite (inject on ALL pages for site recognition)
    injectWebSiteSchema();

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
      removeSchemaById("website-schema");
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
    "@id": "https://amsterdu.com/#organization",
    name: "Amsterdu",
    alternateName: ["AmsterDu", "Amsterdu Guide", "Guia Amsterdu"],
    url: "https://amsterdu.com",
    logo: {
      "@type": "ImageObject",
      url: "https://amsterdu.com/favicon.png",
      width: 512,
      height: 512,
    },
    image: "https://amsterdu.com/og-image.jpg",
    description: "Amsterdu é o guia brutalmente honesto de Amsterdam. Dicas práticas, custos reais e segredos locais para 2026.",
    slogan: "O guia brutalmente honesto de Amsterdam",
    foundingDate: "2024",
    knowsAbout: [
      "Amsterdam",
      "Amsterdam travel guide",
      "Amsterdam tourism",
      "Amsterdam coffeeshops",
      "Amsterdam transport",
      "Amsterdam accommodation",
      "Netherlands travel",
      "Day trips from Amsterdam",
      "Cost of living Amsterdam"
    ],
    areaServed: {
      "@type": "City",
      name: "Amsterdam",
      addressCountry: "NL"
    },
    founder: {
      "@type": "Person",
      "@id": "https://amsterdu.com/#founder",
      name: "Du",
      url: "https://amsterdu.com/pt/sobre",
      jobTitle: "Founder & Content Creator",
      knowsAbout: ["Amsterdam", "Travel", "Netherlands"]
    },
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: ["Portuguese", "English", "Dutch"]
    }
  };

  const script = document.createElement("script");
  script.id = "organization-schema";
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

// Inject WebSite schema for site-wide recognition
function injectWebSiteSchema() {
  removeSchemaById("website-schema");
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://amsterdu.com/#website",
    name: "Amsterdu",
    alternateName: "AmsterDu",
    url: "https://amsterdu.com",
    description: "O guia brutalmente honesto de Amsterdam para 2026",
    inLanguage: ["pt-BR", "en", "nl"],
    publisher: {
      "@id": "https://amsterdu.com/#organization"
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://amsterdu.com/pt/blog?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const script = document.createElement("script");
  script.id = "website-schema";
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
      title: "Coffeeshops Amsterdam 2026: Regras, Preços e Onde Fumar (Guia Turista)",
      description: "Guia completo 2026: turistas podem comprar weed, limite 5g, preços €8-18/g, multa €100 por fumar na rua. Mapa por bairros + melhores coffeeshops + etiqueta.",
      keywords: "coffeeshops amsterdam 2026, regras coffeeshop amsterdam turista, onde fumar amsterdam, multa fumar amsterdam, limite 5g coffeeshop, preços maconha amsterdam, melhores coffeeshops amsterdam, bulldog, dampkring, grey area, katsu, weed prices amsterdam 2026, can tourists buy weed amsterdam",
    },
    en: {
      title: "Amsterdam Coffeeshops 2026: Rules, Prices, Map & Where Tourists Can Smoke",
      description: "Updated 2026 guide: tourists CAN buy weed (5g limit), prices €8-18/g, €100 fine for street smoking. Best coffeeshops by area + etiquette + what's legal.",
      keywords: "amsterdam coffeeshop rules tourists 2026, can tourists buy weed amsterdam, amsterdam weed prices 2026, where to smoke amsterdam, amsterdam smoking fine, 5g limit coffeeshop, best coffeeshops amsterdam, coffeeshop map amsterdam, bulldog, dampkring, grey area, katsu",
    },
    nl: {
      title: "Coffeeshops Amsterdam 2026: Regels, Prijzen & Kaart voor Toeristen",
      description: "Gids 2026: toeristen mogen weed kopen (5g limiet), prijzen €8-18/g, €100 boete voor roken op straat. Beste coffeeshops per wijk + etiquette + wat mag.",
      keywords: "coffeeshops amsterdam 2026, coffeeshop regels toeristen, wiet prijzen amsterdam, waar roken amsterdam, amsterdam rookboete, 5g limiet coffeeshop, beste coffeeshops amsterdam, coffeeshop kaart amsterdam",
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
      title: "Blog do Du sobre Amsterdam | Guias, Histórias e Dicas 2026",
      description: "Guias aprofundados, análises práticas e relatos reais sobre viver, circular e planejar Amsterdam em 2026. Por quem está transformando a cidade em casa.",
      keywords: "blog amsterdam, morar em amsterdam, vida em amsterdam, brasileiro em amsterdam, dicas amsterdam 2026, guia amsterdam, custo de vida amsterdam, transporte amsterdam, experiências amsterdam",
    },
    en: {
      title: "Du's Blog about Amsterdam | Guides, Stories & Tips 2026",
      description: "In-depth guides, practical analyses and real stories about living, traveling and planning Amsterdam in 2026. From someone turning the city into home.",
      keywords: "amsterdam blog, living in amsterdam, amsterdam life, expat amsterdam, amsterdam tips 2026, amsterdam guide, cost of living amsterdam, amsterdam transport, amsterdam experiences",
    },
    nl: {
      title: "Du's Blog over Amsterdam | Gidsen, Verhalen & Tips 2026",
      description: "Diepgaande gidsen, praktische analyses en echte verhalen over wonen, reizen en plannen in Amsterdam in 2026. Van iemand die de stad in thuis verandert.",
      keywords: "amsterdam blog, wonen in amsterdam, amsterdams leven, expat amsterdam, amsterdam tips 2026, amsterdam gids, kosten levensonderhoud amsterdam, amsterdam vervoer, amsterdam ervaringen",
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
