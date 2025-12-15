export interface Coffeeshop {
  id: string;
  name: string;
  address: string;
  neighborhood: string;
  neighborhoodKey: string;
  priceTier: 1 | 2 | 3 | 4; // € to €€€€
  highlight: string;
  highlightEn: string;
  tags: string[];
  profile: "beginner" | "chill" | "hype" | "quick" | "premium";
  note?: string;
  noteEn?: string;
}

export const neighborhoods = {
  centrum: { pt: "Centrum / Red Light", en: "Centrum / Red Light" },
  jordaan: { pt: "Jordaan", en: "Jordaan" },
  depijp: { pt: "De Pijp", en: "De Pijp" },
  oudwest: { pt: "Oud-West", en: "Oud-West" },
  oost: { pt: "Amsterdam Oost", en: "Amsterdam Oost" },
  noord: { pt: "Amsterdam Noord", en: "Amsterdam Noord" },
  nieuwwest: { pt: "Nieuw-West", en: "Nieuw-West" },
};

export const neighborhoodDescriptions = {
  centrum: {
    pt: "Centro é prático, mas costuma ter mais fila e mais 'pegada turística'. Se for ficar por aqui, escolha lugar pela experiência (vibe, menu, lounge) e não pelo letreiro.",
    en: "Center is practical, but usually has more queues and a more 'touristy vibe'. If staying here, choose a place by experience (vibe, menu, lounge) not by the sign."
  },
  jordaan: {
    pt: "Bairro mais calmo e charmoso. Ótimo para quem quer sentar e relaxar.",
    en: "Calmer and charming neighborhood. Great for those who want to sit and relax."
  },
  depijp: {
    pt: "Mais local, boêmio e com energia de bairro. Bom para quem quer fugir do centrão.",
    en: "More local, bohemian and with neighborhood energy. Good for those who want to escape the center."
  },
  oudwest: {
    pt: "Região com boas opções e, em geral, melhor custo-benefício do que o centro.",
    en: "Area with good options and, in general, better value than the center."
  },
  oost: {
    pt: "Bairro residencial com cara mais 'local', geralmente com menos pressão turística.",
    en: "Residential neighborhood with a more 'local' feel, usually with less tourist pressure."
  },
  noord: {
    pt: "Para quem aceita atravessar o ferry e quer opções fora do radar do centrão.",
    en: "For those willing to cross the ferry and want options off the center's radar."
  },
  nieuwwest: {
    pt: "Boa pedida para fugir do turismo e achar lugar com espaço.",
    en: "Good choice to escape tourism and find a place with space."
  }
};

export const coffeeshops: Coffeeshop[] = [
  // CENTRUM / RED LIGHT
  {
    id: "bulldog-first",
    name: "The Bulldog (The First)",
    address: "Oudezijds Voorburgwal 90",
    neighborhood: "Centrum / Red Light",
    neighborhoodKey: "centrum",
    priceTier: 2,
    highlight: "Histórico e muito conhecido; bom para quem quer 'ver e dizer que foi'",
    highlightEn: "Historic and very famous; good for those who want to 'see and say they've been'",
    tags: ["histórico", "turístico", "clássico"],
    profile: "hype",
    note: "Muito lotado em horários de pico",
    noteEn: "Very crowded at peak hours"
  },
  {
    id: "greenhouse-centrum",
    name: "Green House Centrum",
    address: "Oudezijds Voorburgwal 191",
    neighborhood: "Centrum / Red Light",
    neighborhoodKey: "centrum",
    priceTier: 3,
    highlight: "Fama de 'genéticas de elite' e apelo de celebridade",
    highlightEn: "Known for 'elite genetics' and celebrity appeal",
    tags: ["genéticas clássicas", "cali weed", "premium"],
    profile: "hype"
  },
  {
    id: "baba",
    name: "Baba",
    address: "Warmoesstraat",
    neighborhood: "Centrum / Red Light",
    neighborhoodKey: "centrum",
    priceTier: 2,
    highlight: "Estética 'mística/oriental'; bom para quem curte ambiente temático",
    highlightEn: "Mystic/oriental aesthetic; good for those who enjoy themed environments",
    tags: ["genéticas clássicas", "ambiente temático"],
    profile: "chill"
  },
  {
    id: "420-cafe",
    name: "420 Cafe",
    address: "Oudebrugsteeg 27",
    neighborhood: "Centrum / Red Light",
    neighborhoodKey: "centrum",
    priceTier: 2,
    highlight: "Clássico perto da Estação Central, prático para primeira parada",
    highlightEn: "Classic near Central Station, practical for first stop",
    tags: ["genéticas clássicas", "localização central"],
    profile: "beginner"
  },
  {
    id: "dampkring",
    name: "Dampkring",
    address: "Haarlemmerstraat 44",
    neighborhood: "Centrum / Red Light",
    neighborhoodKey: "centrum",
    priceTier: 3,
    highlight: "Vibe cinematográfica e reputação forte em hash premium",
    highlightEn: "Cinematic vibe and strong reputation for premium hash",
    tags: ["hash premium", "cinematográfico"],
    profile: "premium"
  },
  {
    id: "abraxas",
    name: "Abraxas",
    address: "Jonge Roelensteeg 12-14",
    neighborhood: "Centrum / Red Light",
    neighborhoodKey: "centrum",
    priceTier: 2,
    highlight: "Ambiente diferente, 'fantasia ecológica', lembrado pela atmosfera",
    highlightEn: "Different environment, 'ecological fantasy', remembered for atmosphere",
    tags: ["genéticas clássicas", "atmosfera única"],
    profile: "chill"
  },
  {
    id: "grey-area",
    name: "Grey Area",
    address: "Oude Leliestraat 2",
    neighborhood: "Centrum / Red Light",
    neighborhoodKey: "centrum",
    priceTier: 4,
    highlight: "Pequeno e 'cult', muito buscado por strains estilo americano e exclusividade",
    highlightEn: "Small and 'cult', very sought after for American-style strains and exclusivity",
    tags: ["cali weed", "cult", "exclusivo"],
    profile: "premium",
    note: "Espera filas longas",
    noteEn: "Expect long queues"
  },
  {
    id: "the-plug",
    name: "The Plug (Utopia)",
    address: "Nieuwezijds Voorburgwal",
    neighborhood: "Centrum / Red Light",
    neighborhoodKey: "centrum",
    priceTier: 4,
    highlight: "'Nova guarda', cultura hype, foco em cali",
    highlightEn: "'New guard', hype culture, focus on cali",
    tags: ["cali weed", "hype", "nova guarda"],
    profile: "hype"
  },
  {
    id: "prix-dami",
    name: "Prix d'Ami",
    address: "Próximo à Estação Central",
    neighborhood: "Centrum / Red Light",
    neighborhoodKey: "centrum",
    priceTier: 2,
    highlight: "Grande, com pegada de entretenimento; bom para lugar espaçoso",
    highlightEn: "Large, with entertainment vibe; good for spacious place",
    tags: ["genéticas clássicas", "espaçoso"],
    profile: "beginner"
  },
  
  // JORDAAN
  {
    id: "la-tertulia",
    name: "La Tertulia",
    address: "Prinsengracht 312",
    neighborhood: "Jordaan",
    neighborhoodKey: "jordaan",
    priceTier: 2,
    highlight: "Atmosfera luminosa e acolhedora; destaque para edibles e pegada orgânica",
    highlightEn: "Bright and welcoming atmosphere; highlights for edibles and organic approach",
    tags: ["edibles", "orgânico", "acolhedor"],
    profile: "chill"
  },
  {
    id: "paradox",
    name: "Paradox",
    address: "Eerste Bloemdwarsstraat 2R",
    neighborhood: "Jordaan",
    neighborhoodKey: "jordaan",
    priceTier: 1,
    highlight: "Simples, direto e famoso pelos comestíveis",
    highlightEn: "Simple, straightforward and famous for edibles",
    tags: ["edibles", "simples"],
    profile: "beginner"
  },
  {
    id: "siberie",
    name: "Siberië",
    address: "Brouwersgracht 11",
    neighborhood: "Jordaan",
    neighborhoodKey: "jordaan",
    priceTier: 2,
    highlight: "Mistura de coffeeshop com galeria; bom para vibe 'arte e conversa'",
    highlightEn: "Mix of coffeeshop with gallery; good for 'art and conversation' vibe",
    tags: ["arte e cultura", "genéticas clássicas", "lounge"],
    profile: "chill"
  },
  {
    id: "mr-k",
    name: "Mr. K & Co.",
    address: "Tweede Laurierdwarsstraat 44",
    neighborhood: "Jordaan",
    neighborhoodKey: "jordaan",
    priceTier: 2,
    highlight: "'Sala de estar', conforto e clima doméstico",
    highlightEn: "'Living room', comfort and homely atmosphere",
    tags: ["genéticas clássicas", "cali weed", "aconchegante"],
    profile: "chill"
  },
  
  // DE PIJP
  {
    id: "katsu",
    name: "Katsu",
    address: "Eerste van der Helststraat 70",
    neighborhood: "De Pijp",
    neighborhoodKey: "depijp",
    priceTier: 1,
    highlight: "Identidade artística e comunitária; querido por locais",
    highlightEn: "Artistic and community identity; loved by locals",
    tags: ["genéticas clássicas", "local", "artístico"],
    profile: "chill"
  },
  {
    id: "club-media",
    name: "Club Media",
    address: "Gerard Doustraat",
    neighborhood: "De Pijp",
    neighborhoodKey: "depijp",
    priceTier: 2,
    highlight: "Moderno e 'polido', com pegada mais organizada",
    highlightEn: "Modern and 'polished', with a more organized approach",
    tags: ["orgânico", "moderno"],
    profile: "quick"
  },
  {
    id: "yo-yo",
    name: "Yo-Yo",
    address: "Tweede Jan van der Heijdenstraat 79",
    neighborhood: "De Pijp",
    neighborhoodKey: "depijp",
    priceTier: 1,
    highlight: "Intimista e acessível; bom para algo mais discreto",
    highlightEn: "Intimate and accessible; good for something more discreet",
    tags: ["genéticas clássicas", "discreto"],
    profile: "quick"
  },
  
  // OUD-WEST
  {
    id: "chapiteau",
    name: "Chapiteau",
    address: "Van Boetzelaerstraat 31, 1051 CT",
    neighborhood: "Oud-West",
    neighborhoodKey: "oudwest",
    priceTier: 1,
    highlight: "Custo-benefício forte, variedade grande e preços baixos para a cidade",
    highlightEn: "Strong value, large variety and low prices for the city",
    tags: ["hash premium", "genéticas clássicas", "cali weed", "custo-benefício"],
    profile: "quick"
  },
  {
    id: "boerejongens-west",
    name: "Boerejongens West",
    address: "Baarsjesweg 239",
    neighborhood: "Oud-West",
    neighborhoodKey: "oudwest",
    priceTier: 4,
    highlight: "Experiência 'premium', atendimento bem treinado e foco em edibles e hash",
    highlightEn: "Premium experience, well-trained service and focus on edibles and hash",
    tags: ["cali weed", "edibles", "hash premium", "premium"],
    profile: "premium"
  },
  {
    id: "1e-hulp",
    name: "1e Hulp (First Aid)",
    address: "Marnixstraat 194",
    neighborhood: "Oud-West",
    neighborhoodKey: "oudwest",
    priceTier: 3,
    highlight: "Conhecido por potência alta; bom para quem já tem experiência",
    highlightEn: "Known for high potency; good for those with experience",
    tags: ["moonrocks", "potência alta"],
    profile: "premium",
    note: "Não recomendado para iniciantes",
    noteEn: "Not recommended for beginners"
  },
  {
    id: "de-republiek",
    name: "De Republiek",
    address: "Tweede Nassaustraat",
    neighborhood: "Oud-West",
    neighborhoodKey: "oudwest",
    priceTier: 2,
    highlight: "Design moderno, boa acessibilidade para ir sem cerimônia",
    highlightEn: "Modern design, good accessibility for casual visits",
    tags: ["genéticas clássicas", "moderno"],
    profile: "quick"
  },
  {
    id: "bij",
    name: "BIJ",
    address: "Bonairestraat 78",
    neighborhood: "Oud-West",
    neighborhoodKey: "oudwest",
    priceTier: 4,
    highlight: "'Dispensário expresso' de alto padrão; bom para comprar e seguir o dia",
    highlightEn: "High-end 'express dispensary'; good for buying and moving on",
    tags: ["cali weed", "expresso", "premium"],
    profile: "quick"
  },
  
  // AMSTERDAM OOST
  {
    id: "the-stud",
    name: "The Stud",
    address: "Molukkenstraat 581",
    neighborhood: "Amsterdam Oost",
    neighborhoodKey: "oost",
    priceTier: 1,
    highlight: "Comunidade e tradição (desde 1982), perfil bem de bairro",
    highlightEn: "Community and tradition (since 1982), very neighborhood-oriented",
    tags: ["genéticas clássicas", "tradicional", "local"],
    profile: "chill"
  },
  {
    id: "het-ballonnetje",
    name: "Het Ballonnetje",
    address: "Roetersstraat 12",
    neighborhood: "Amsterdam Oost",
    neighborhoodKey: "oost",
    priceTier: 2,
    highlight: "Histórico e bem localizado, clima 'acadêmico'",
    highlightEn: "Historic and well located, 'academic' atmosphere",
    tags: ["genéticas clássicas", "histórico"],
    profile: "chill"
  },
  {
    id: "smoke-palace",
    name: "Smoke Palace",
    address: "Linnaeusstraat",
    neighborhood: "Amsterdam Oost",
    neighborhoodKey: "oost",
    priceTier: 2,
    highlight: "Destaque para espaço exterior; bom para sentar com calma",
    highlightEn: "Highlight for outdoor space; good for sitting calmly",
    tags: ["espaço exterior", "relaxante"],
    profile: "chill"
  },
  
  // AMSTERDAM NOORD
  {
    id: "hunters-noord",
    name: "Hunter's Noord",
    address: "Papaverweg 2",
    neighborhood: "Amsterdam Noord",
    neighborhoodKey: "noord",
    priceTier: 3,
    highlight: "'Varejo estilizado' na área hipster; foco em cali",
    highlightEn: "'Stylized retail' in the hipster area; focus on cali",
    tags: ["cali weed", "hipster"],
    profile: "hype"
  },
  {
    id: "coffeeshop-noord",
    name: "Coffeeshop Noord",
    address: "Ooievaarsweg 10",
    neighborhood: "Amsterdam Noord",
    neighborhoodKey: "noord",
    priceTier: 2,
    highlight: "Serviço premium e horário bom para previsibilidade",
    highlightEn: "Premium service and good hours for predictability",
    tags: ["genéticas clássicas", "serviço bom"],
    profile: "quick"
  },
  
  // NIEUW-WEST
  {
    id: "sensemillia",
    name: "Sensemillia",
    address: "Meer en Vaart 177B",
    neighborhood: "Nieuw-West",
    neighborhoodKey: "nieuwwest",
    priceTier: 2,
    highlight: "Vista panorâmica para o lago e espaço exterior",
    highlightEn: "Panoramic lake view and outdoor space",
    tags: ["espaço exterior", "vista", "tranquilo"],
    profile: "chill"
  }
];

export const allTags = [
  "hash premium",
  "genéticas clássicas", 
  "cali weed",
  "edibles",
  "orgânico",
  "arte e cultura",
  "espaço exterior",
  "moonrocks",
  "lounge",
  "premium",
  "local",
  "histórico"
];

export const profiles = {
  beginner: { pt: "Para Iniciantes", en: "For Beginners", color: "bg-green-500" },
  chill: { pt: "Relaxar", en: "Chill", color: "bg-blue-500" },
  hype: { pt: "Hype", en: "Hype", color: "bg-purple-500" },
  quick: { pt: "Rápido", en: "Quick", color: "bg-amber-500" },
  premium: { pt: "Premium", en: "Premium", color: "bg-rose-500" }
};
