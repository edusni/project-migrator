// Mapeamento de posts do blog para suas páginas-mãe
// Baseado na categoria e conteúdo do post

export interface ParentPageInfo {
  path: string;
  titlePt: string;
  titleEn: string;
  titleNl: string;
}

// Mapeamento de categorias para páginas-mãe
export const categoryToParentPage: Record<string, ParentPageInfo> = {
  "transporte": {
    path: "/transporte",
    titlePt: "Transporte",
    titleEn: "Transport",
    titleNl: "Vervoer"
  },
  "gastronomia": {
    path: "/gastronomia",
    titlePt: "Gastronomia",
    titleEn: "Food & Drink",
    titleNl: "Eten & Drinken"
  },
  "cannabis": {
    path: "/coffeeshops",
    titlePt: "Coffeeshops",
    titleEn: "Coffeeshops",
    titleNl: "Coffeeshops"
  },
  "viagens": {
    path: "/hospedagem",
    titlePt: "Hospedagem",
    titleEn: "Accommodation",
    titleNl: "Accommodatie"
  },
  "moradia": {
    path: "/hospedagem",
    titlePt: "Hospedagem",
    titleEn: "Accommodation",
    titleNl: "Accommodatie"
  },
  "vida-amsterdam": {
    path: "/custo-vida-amsterdam",
    titlePt: "Custo de Vida",
    titleEn: "Cost of Living",
    titleNl: "Kosten"
  },
  "idioma": {
    path: "/custo-vida-amsterdam",
    titlePt: "Custo de Vida",
    titleEn: "Cost of Living",
    titleNl: "Kosten"
  },
  "clima-estacoes": {
    path: "/planejamento",
    titlePt: "Planejamento",
    titleEn: "Planning",
    titleNl: "Planning"
  },
  "dicas-praticas": {
    path: "/planejamento",
    titlePt: "Planejamento",
    titleEn: "Planning",
    titleNl: "Planning"
  },
  "cultura-eventos": {
    path: "/atracoes",
    titlePt: "Atrações",
    titleEn: "Attractions",
    titleNl: "Attracties"
  },
  "natureza": {
    path: "/arredores",
    titlePt: "Arredores",
    titleEn: "Day Trips",
    titleNl: "Dagtrips"
  }
};

// Mapeamento específico por slug de post (para casos especiais)
export const postSlugToParentPage: Record<string, ParentPageInfo> = {
  "onde-ficar-amsterdam-guia-bairros-honesto": {
    path: "/hospedagem",
    titlePt: "Hospedagem",
    titleEn: "Accommodation",
    titleNl: "Accommodatie"
  },
  "morar-de-pijp-amsterda-2026-realidade-precos": {
    path: "/hospedagem",
    titlePt: "Hospedagem",
    titleEn: "Accommodation",
    titleNl: "Accommodatie"
  },
  "custo-vida-amsterdam-2026": {
    path: "/custo-vida-amsterdam",
    titlePt: "Custo de Vida",
    titleEn: "Cost of Living",
    titleNl: "Kosten"
  },
  "melhores-escolas-de-holandes-em-amsterdam-para-o-inburgeringsexamen-o-guia-definitivo": {
    path: "/custo-vida-amsterdam",
    titlePt: "Custo de Vida",
    titleEn: "Cost of Living",
    titleNl: "Kosten"
  },
  "cursos-de-holandes-em-amsterdam-em-2026-como-escolher-sem-perder-tempo-nem-dinheiro": {
    path: "/custo-vida-amsterdam",
    titlePt: "Custo de Vida",
    titleEn: "Cost of Living",
    titleNl: "Kosten"
  }
};

// Mapeamento de páginas-mãe para slugs de posts relacionados
export const parentPageToBlogSlugs: Record<string, string[]> = {
  "/hospedagem": [
    "onde-ficar-amsterdam-guia-bairros-honesto",
    "morar-de-pijp-amsterda-2026-realidade-precos"
  ],
  "/gastronomia": [
    "onde-comer-amsterda-2026-guia-gastronomico"
  ],
  "/transporte": [
    "como-se-locomover-em-amsterdam-em-2026"
  ],
  "/coffeeshops": [
    "o-que-significa-420-em-amsterdam",
    "amsterda-weed-o-que-e-permitido-o-que-e-mito-e-o-que-pode-dar-problema",
    "precos-maconha-coffeeshop-holanda-2026"
  ],
  "/custo-vida-amsterdam": [
    "custo-vida-amsterdam-2026",
    "melhores-escolas-de-holandes-em-amsterdam-para-o-inburgeringsexamen-o-guia-definitivo",
    "cursos-de-holandes-em-amsterdam-em-2026-como-escolher-sem-perder-tempo-nem-dinheiro"
  ],
  "/planejamento": [
    "como-se-locomover-em-amsterdam-em-2026",
    "custo-vida-amsterdam-2026"
  ],
  "/atracoes": [],
  "/arredores": []
};

export function getParentPage(categorySlug: string | null, postSlug: string): ParentPageInfo | null {
  // First check specific post mapping
  if (postSlugToParentPage[postSlug]) {
    return postSlugToParentPage[postSlug];
  }
  
  // Then check category mapping
  if (categorySlug && categoryToParentPage[categorySlug]) {
    return categoryToParentPage[categorySlug];
  }
  
  return null;
}
