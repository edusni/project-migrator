import { createContext, useContext, useState, ReactNode } from "react";

type Language = "pt" | "en";

interface Translations {
  [key: string]: {
    pt: string;
    en: string;
  };
}

const translations: Translations = {
  // Navigation
  "nav.home": { pt: "Início", en: "Home" },
  "nav.about": { pt: "Sobre", en: "About" },
  "nav.planning": { pt: "Planejamento", en: "Planning" },
  "nav.accommodation": { pt: "Hospedagem", en: "Stay" },
  "nav.attractions": { pt: "Atrações", en: "See & Do" },
  "nav.transport": { pt: "Transporte", en: "Get Around" },
  "nav.food": { pt: "Gastronomia", en: "Eat & Drink" },
  "nav.coffeeshops": { pt: "Coffeeshops", en: "Coffeeshops" },
  "nav.daytrips": { pt: "Arredores", en: "Day Trips" },
  "nav.gallery": { pt: "Galeria", en: "Gallery" },
  "nav.blog": { pt: "Blog", en: "Blog" },
  
  // Hero
  "hero.title": { pt: "Guia Completo de Amsterdam 2025", en: "Complete Amsterdam Guide 2025" },
  "hero.subtitle": { pt: "O Guia Brutalmente Honesto", en: "The Brutally Honest Guide" },
  "hero.description": { 
    pt: "Esqueça os \"contos de fada\". Aqui você encontra as dificuldades reais, multas, armadilhas e segredos locais que realmente importam para sua viagem.",
    en: "Forget the \"fairy tales\". Here you will find the real struggles, fines, traps and local secrets that really matter for your trip."
  },
  "hero.sections": { pt: "9 seções", en: "9 sections" },
  "hero.noFilter": { pt: "Sem filtro", en: "No filter" },
  "hero.firstTrip": { pt: "Primeira viagem?", en: "First Trip?" },
  "hero.startHere": { pt: "Comece aqui", en: "Start here" },
  "hero.whereToStay": { pt: "Onde ficar", en: "Where to Stay" },
  "hero.bestNeighborhoods": { pt: "Melhores bairros", en: "Best neighborhoods" },
  "hero.gettingAround": { pt: "Como se locomover", en: "Getting Around" },
  "hero.tramBikeMetro": { pt: "Tram, bike, metrô", en: "Tram, bike, metro" },
  
  // About Page
  "about.title": { pt: "Quem é o Du?", en: "Who is Du?" },
  "about.subtitle": { pt: "E por que o Amsterdu existe", en: "And why Amsterdu exists" },
  "about.greeting": { pt: "Olá, eu sou o Du.", en: "Hi, I am Du." },
  "about.intro": {
    pt: "Se há uma coisa que você precisa saber sobre mim: sou apaixonado por Amsterdam.",
    en: "If there is one thing you need to know about me right away: I am in love with Amsterdam."
  },
  "about.story1": {
    pt: "Minha história com a cidade não é sobre uma visita rápida de fim de semana. Já estive lá muitas vezes, construí amizades verdadeiras com locais, e a cada viagem, descubro uma nova camada dessa cidade incrível.",
    en: "My history with the city is not about a quick weekend visit. I have been there many times, built true friendships with locals, and with each trip, I discover a new layer of this incredible city."
  },
  "about.story2": {
    pt: "Em breve, Amsterdam vai deixar de ser apenas meu destino favorito e oficialmente se tornar minha casa.",
    en: "Soon, Amsterdam will stop being just my favorite destination and officially become my home."
  },
  "about.story3": {
    pt: "Mas enquanto a mudança final não acontece, vivo em constante \"modo pesquisa\". Não sou um guia tradicional e distante. Sou alguém como você, mas que decidiu mergulhar fundo: converso com pessoas que moram lá, estudo a história, entendo as dificuldades, e testo cada recomendação antes de compartilhar aqui.",
    en: "But while the final move does not happen, I live in constant \"research mode\". I am not a traditional, distant tour guide. I am someone like you, but who decided to dive deep: I talk to people who live there, study the history, understand the struggles, and test each recommendation before sharing it here."
  },
  "about.whatYouWillFind": { pt: "O que você vai encontrar no Amsterdu?", en: "What will you find at Amsterdu?" },
  "about.result": {
    pt: "O resultado da minha busca incansável para descobrir o que realmente vale a pena.",
    en: "The result of my relentless search to discover what is truly worth it."
  },
  "about.validatedTips": { pt: "Dicas Validadas", en: "Validated Tips" },
  "about.validatedTipsDesc": { pt: "Por mim e meus amigos holandeses.", en: "By me and my Dutch friends." },
  "about.curiousPerspective": { pt: "Perspectiva Curiosa", en: "Curious Perspective" },
  "about.curiousPerspectiveDesc": { pt: "Que vai muito além do óbvio turístico.", en: "That goes far beyond the tourist obvious." },
  "about.realPreparation": { pt: "Preparação Real", en: "Real Preparation" },
  "about.realPreparationDesc": { pt: "De alguém que está fazendo as malas.", en: "Of someone who is packing their bags." },
  "about.invitation": {
    pt: "Amsterdu é meu convite para você descobrir a cidade ao meu lado, aprendendo com meus acertos e evitando as armadilhas.",
    en: "Amsterdu is my invitation for you to discover the city alongside me, learning from my successes and avoiding the traps."
  },
  "about.welcomeHome": { pt: "Bem-vindo à minha futura casa.", en: "Welcome to my future home." },
  "about.readyToStart": { pt: "Pronto para Começar?", en: "Ready to Start?" },
  "about.painFree": { pt: "Sem Dor", en: "Pain-Free" },
  "about.theRealDeal": { pt: "A Verdade", en: "The Real Deal" },
  "about.theEssentials": { pt: "O Essencial", en: "The Essentials" },

  // Planning Page
  "planning.title": { pt: "Planejando Amsterdam: O Que Você PRECISA Saber", en: "Planning Amsterdam: What You NEED to Know" },
  "planning.description": {
    pt: "Amsterdam em 2025 será EXTREMAMENTE CARA com novas regras. Se você não planejar direito, vai gastar uma fortuna por uma experiência medíocre.",
    en: "Amsterdam in 2025 will be EXTREMELY EXPENSIVE with new rules. If you do not plan properly, you will spend a fortune for a mediocre experience."
  },
  "planning.realityCheck": {
    pt: "Taxa turística agora é 12,5% em cima de tudo. IVA aumentou para 21%. Total de impostos: mais de 33% na hospedagem. Aquele hotel de €100/noite na verdade custa €133+.",
    en: "Tourist tax is now 12.5% on top of everything. VAT increased to 21%. Total taxes: over 33% on accommodation. That €100/night hotel actually costs €133+."
  },
  "planning.whenToVisit": { pt: "Quando Visitar (A Verdade)", en: "When to Visit (The Real Deal)" },
  "planning.seasonsGuide": {
    pt: "Guia honesto das estações: tulipas com multidões, ou museus sem filas?",
    en: "Honest guide to seasons: tulips with crowds, or museums without lines?"
  },
  "planning.weatherMyth": {
    pt: "O \"Mito\" do Clima Holandês: Amsterdam não é uma cidade de sol garantido. É uma cidade de atmosfera garantida. O clima é imprevisível. A melhor época depende do que você procura.",
    en: "The Dutch Weather \"Myth\": Amsterdam is not a city of guaranteed sun. It is a city of guaranteed atmosphere. The weather is unpredictable. The best time depends on what you are looking for."
  },
  "planning.spring": { pt: "Primavera", en: "Spring" },
  "planning.springPeriod": { pt: "Março - Maio", en: "March - May" },
  "planning.springHighlight": { pt: "A cidade desperta • Tulipas • Dia do Rei", en: "The city awakens • Tulips • King's Day" },
  "planning.springDesc": {
    pt: "Tulipas florescem, terraços abrem, e o Dia do Rei (27 de abril) deixa a cidade laranja.",
    en: "Tulips bloom, terraces open, and King's Day (April 27) turns the city orange."
  },
  "planning.summer": { pt: "Verão", en: "Summer" },
  "planning.summerPeriod": { pt: "Junho - Agosto", en: "June - August" },
  "planning.summerHighlight": { pt: "Alta temporada • Festivais • Terraços", en: "Peak season • Festivals • Terraces" },
  "planning.summerDesc": {
    pt: "Dias longos (pôr do sol às 22h!), festivais ao ar livre, terraços lotados. Mais caro.",
    en: "Long days (sunset at 10pm!), outdoor festivals, packed terraces. Most expensive."
  },
  "planning.autumn": { pt: "Outono", en: "Autumn" },
  "planning.autumnPeriod": { pt: "Setembro - Novembro", en: "September - November" },
  "planning.autumnHighlight": { pt: "Segredo dos locais • Museus tranquilos", en: "Insider's secret • Quiet museums" },
  "planning.autumnDesc": {
    pt: "O favorito dos locais. Menos turistas, cores bonitas, museus sem filas.",
    en: "The locals' favorite. Fewer tourists, beautiful colors, museums without lines."
  },
  "planning.winter": { pt: "Inverno", en: "Winter" },
  "planning.winterPeriod": { pt: "Dezembro - Fevereiro", en: "December - February" },
  "planning.winterHighlight": { pt: "Natal • Luzes • Gezelligheid", en: "Christmas • Lights • Gezelligheid" },
  "planning.winterDesc": {
    pt: "Amsterdam Light Festival, mercados de Natal, e aconchego holandês (gezelligheid).",
    en: "Amsterdam Light Festival, Christmas markets, and Dutch coziness (gezelligheid)."
  },
  "planning.documentation": { pt: "Documentação", en: "Documentation" },
  "planning.documentationDesc": { pt: "Tudo que você precisa para entrar na Holanda", en: "Everything you need to enter the Netherlands" },
  "planning.brazilianGoodNews": {
    pt: "Boa Notícia para Brasileiros: Não precisa de visto para estadas turísticas de até 90 dias! Mas você vai precisar provar que é um turista legítimo.",
    en: "Good News for Brazilians: No visa required for tourist stays up to 90 days! But you will need to prove you are a legitimate tourist."
  },
  "planning.validPassport": { pt: "Passaporte Válido", en: "Valid Passport" },
  "planning.validPassportDesc": {
    pt: "Deve ser válido por PELO MENOS 3 meses APÓS a data de retorno. Verifique agora!",
    en: "Must be valid for AT LEAST 3 months AFTER your return date. Check now!"
  },
  "planning.accommodationProof": { pt: "Comprovante de Hospedagem", en: "Accommodation Proof" },
  "planning.accommodationProofDesc": {
    pt: "Reserva de hotel, confirmação Airbnb, ou carta convite do anfitrião.",
    en: "Hotel booking, Airbnb confirmation, or invitation letter from host."
  },
  "planning.financialProof": { pt: "Comprovante Financeiro", en: "Financial Proof" },
  "planning.financialProofDesc": {
    pt: "Extrato bancário ou cartão de crédito. Podem pedir na imigração.",
    en: "Bank statement or credit card. They may ask at immigration."
  },
  "planning.returnTicket": { pt: "Passagem de Volta", en: "Return Ticket" },
  "planning.returnTicketDesc": {
    pt: "Comprovante de que você vai sair do Espaço Schengen em até 90 dias.",
    en: "Proof you are leaving the Schengen Area within 90 days."
  },
  "planning.gettingThere": { pt: "Como Chegar", en: "Getting There" },
  "planning.schiphol": { pt: "Aeroporto Schiphol", en: "Schiphol Airport" },
  "planning.schipholDesc": {
    pt: "Um dos melhores aeroportos da Europa. Trem para o centro: 20min, €5,50",
    en: "One of Europe's best airports. Train to center: 20min, €5.50"
  },
  "planning.trains": { pt: "Trens Internacionais", en: "International Trains" },
  "planning.trainsDesc": {
    pt: "Thalys de Paris (3h), Eurostar de Londres (4h), ICE da Alemanha",
    en: "Thalys from Paris (3h), Eurostar from London (4h), ICE from Germany"
  },
  "planning.bus": { pt: "Ônibus (Econômico)", en: "Bus (Budget)" },
  "planning.busDesc": {
    pt: "FlixBus de grandes cidades europeias. Barato mas longo.",
    en: "FlixBus from major European cities. Cheap but long."
  },
  "planning.car": { pt: "De Carro", en: "By Car" },
  "planning.carDesc": {
    pt: "Use Park & Ride. Estacionar no centro: €7,50/hora (!)",
    en: "Use Park & Ride. Parking in center: €7.50/hour (!)"
  },

  // Accommodation Page
  "accommodation.title": { pt: "Onde Ficar em Amsterdam: O Guia Sem Rodeios", en: "Where to Stay in Amsterdam: The No-BS Guide" },
  "accommodation.description": {
    pt: "Vou te dizer EXATAMENTE onde ficar baseado no seu perfil, orçamento e o que você quer fazer. Nada de papo vago de \"depende\".",
    en: "I will tell you EXACTLY where to stay based on your profile, budget and what you want to do. No vague 'it depends' talk."
  },
  "accommodation.realityTitle": { pt: "A Verdade Sobre Hospedagem em Amsterdam 2025", en: "The Real Deal About Amsterdam Accommodation 2025" },
  "accommodation.realityIntro": {
    pt: "Antes de mostrar os bairros, você precisa entender algo: Amsterdam é MUITO CARA e é de propósito. A prefeitura QUER que você gaste mais ou não venha. Não é paranoia, é política oficial.",
    en: "Before I show you the neighborhoods, you need to understand something: Amsterdam is VERY EXPENSIVE and it is on purpose. The city council WANTS you to spend more or not come. It is not paranoia, it is official policy."
  },
  "accommodation.absurdTaxes": { pt: "Os Impostos São Absurdos", en: "The Taxes Are Absurd" },
  "accommodation.touristTax": { pt: "Taxa turística: 12,5% EM CIMA DE TUDO", en: "Tourist tax: 12.5% on TOP of EVERYTHING" },
  "accommodation.vat": { pt: "IVA: 21% (aumentou em 2025)", en: "VAT: 21% (increased in 2025)" },
  "accommodation.totalTax": { pt: "Total: Mais de 33% DE IMPOSTO no preço base", en: "Total: Over 33% TAX on top of base price" },
  "accommodation.airbnbDead": { pt: "Airbnb Está Morto (Quase)", en: "Airbnb Is Dead (Almost)" },
  "accommodation.airbnb1": { pt: "30 noites/ano máx (logo 15 no centro)", en: "30 nights/year max (soon 15 in center)" },
  "accommodation.airbnb2": { pt: "Precisa de licença específica", en: "Needs specific license" },
  "accommodation.airbnb3": { pt: "Inventário caiu 54% desde 2019", en: "Inventory dropped 54% since 2019" },
  "accommodation.airbnb4": { pt: "Hotéis são mais seguros em 2025", en: "Hotels are safer in 2025" },
  "accommodation.neighborhoodsDecoded": { pt: "Bairros Decodificados", en: "Neighborhoods Decoded" },
  "accommodation.neighborhoodsIntro": {
    pt: "A boa notícia? Se você entender ONDE ficar baseado no que quer fazer, pode economizar MUITO e ter uma experiência melhor que 90% dos turistas.",
    en: "The good news? If you understand WHERE to stay based on what you want to do, you can save A LOT and have a better experience than 90% of tourists."
  },
  "accommodation.pros": { pt: "Prós:", en: "Pros:" },
  "accommodation.cons": { pt: "Contras:", en: "Cons:" },
  "accommodation.goodFor": { pt: "Bom para:", en: "Good for:" },
  "accommodation.types": { pt: "Tipos de Hospedagem", en: "Accommodation Types" },

  // Neighborhoods
  "neighborhood.centrum.name": { pt: "Centrum", en: "Centrum" },
  "neighborhood.centrum.desc": { pt: "O coração histórico. Caminhe para tudo. Mas caro e lotado.", en: "The historic heart. Walk to everything. But expensive and crowded." },
  "neighborhood.centrum.verdict": { pt: "Bom para: Primeira viagem, quer conveniência, não preço", en: "Good for: First-timers who want convenience over price" },
  "neighborhood.jordaan.name": { pt: "Jordaan", en: "Jordaan" },
  "neighborhood.jordaan.desc": { pt: "O bairro famoso do Instagram. Canais charmosos, cafés aconchegantes, galerias de arte.", en: "The Instagram-famous neighborhood. Charming canals, cozy cafes, art galleries." },
  "neighborhood.jordaan.verdict": { pt: "Bom para: Casais, amantes de arte, quem busca Amsterdam \"autêntica\"", en: "Good for: Couples, art lovers, those seeking 'authentic' Amsterdam" },
  "neighborhood.depijp.name": { pt: "De Pijp", en: "De Pijp" },
  "neighborhood.depijp.desc": { pt: "Multicultural, jovem, vibrante. Mercado Albert Cuyp. Ótima cena gastronômica.", en: "Multicultural, young, vibrant. Albert Cuyp Market. Great food scene." },
  "neighborhood.depijp.verdict": { pt: "Bom para: Foodies, jovens viajantes, orçamento consciente", en: "Good for: Foodies, young travelers, budget-conscious" },
  "neighborhood.oudwest.name": { pt: "Oud-West", en: "Oud-West" },
  "neighborhood.oudwest.desc": { pt: "Hipster, gentrificado, perto do Vondelpark. Foodhallen fica aqui.", en: "Hip, gentrified, near Vondelpark. Foodhallen is here." },
  "neighborhood.oudwest.verdict": { pt: "Bom para: Estadias longas, famílias, amantes de parques", en: "Good for: Longer stays, families, park lovers" },
  "neighborhood.noord.name": { pt: "Noord", en: "Noord" },
  "neighborhood.noord.desc": { pt: "A fronteira criativa. Ferries, street art, NDSM. Amsterdam diferente.", en: "The creative frontier. Ferries, street art, NDSM wharf. Different Amsterdam." },
  "neighborhood.noord.verdict": { pt: "Bom para: Aventureiros, artistas, viajantes econômicos", en: "Good for: Adventurers, artists, budget travelers" },
  "neighborhood.oost.name": { pt: "Oost", en: "Oost" },
  "neighborhood.oost.desc": { pt: "Diverso, residencial, Oosterpark. O bairro dos locais.", en: "Diverse, residential, Oosterpark. The locals' neighborhood." },
  "neighborhood.oost.verdict": { pt: "Bom para: Famílias, estadias longas, experiência autêntica", en: "Good for: Families, long stays, authentic experience" },

  // Transport Page
  "transport.title": { pt: "Como se Locomover em Amsterdam", en: "Getting Around Amsterdam" },
  "transport.description": {
    pt: "O guia completo para você não se perder, não levar multa, e não ser atropelado.",
    en: "The complete guide so you do not get lost, do not get fined, and do not get run over."
  },
  "transport.goldenRule": { pt: "Hierarquia do Trânsito de Amsterdam (Regra de Ouro):", en: "Amsterdam Traffic Hierarchy (Golden Rule):" },
  "transport.bicycle": { pt: "Bicicleta", en: "Bicycle" },
  "transport.tram": { pt: "Tram", en: "Tram" },
  "transport.pedestrian": { pt: "Pedestre", en: "Pedestrian" },
  "transport.car": { pt: "Carro", en: "Car" },
  "transport.vitalRule": {
    pt: "Entender isso é VITAL para sua sobrevivência. Turistas que ignoram essa regra causam acidentes!",
    en: "Understanding this is VITAL for your survival. Tourists who ignore this rule cause accidents!"
  },
  "transport.pyramid": { pt: "A Pirâmide de Prioridades", en: "The Priority Pyramid" },
  "transport.bicycleTop": { pt: "Topo: BICICLETA", en: "Top: BICYCLE" },
  "transport.bicycleDesc": {
    pt: "Rei absoluto das ruas. Tem prioridade sobre TODOS. 880.000 bicicletas para 900.000 habitantes não é brincadeira!",
    en: "Absolute king of the streets. Has priority over EVERYONE else. 880,000 bikes for 900,000 inhabitants is no joke!"
  },
  "transport.tramLevel": { pt: "Segundo Nível: TRAM", en: "Second Level: TRAM" },
  "transport.tramDesc": {
    pt: "30+ toneladas nos trilhos. NÃO PODE desviar. NÃO PODE parar rápido. Prioridade garantida pela física, não só pela lei!",
    en: "30+ tons on rails. CANNOT swerve. CANNOT stop quickly. Priority guaranteed by physics, not just law!"
  },
  "transport.pedestrianLevel": { pt: "Terceiro Nível: PEDESTRE", en: "Third Level: PEDESTRIAN" },
  "transport.pedestrianDesc": {
    pt: "Você (turista) está AQUI. Vulnerável mas protegido por lei nas faixas. Sua arma: atenção constante e respeito à hierarquia.",
    en: "You (tourist) are HERE. Vulnerable but protected by law at crosswalks. Your weapon: constant attention and respect for the hierarchy."
  },
  "transport.carLevel": { pt: "Base: CARRO", en: "Base: CAR" },
  "transport.carDesc": {
    pt: "Menor prioridade. Visto como \"visitante tolerado\" nas ruas. Amsterdam foi REDESENHADA para bicicletas, não carros!",
    en: "Lowest priority. Seen as \"tolerated visitor\" on the streets. Amsterdam was REDESIGNED for bikes, not cars!"
  },
  "transport.options": { pt: "Opções de Transporte", en: "Transport Options" },
  "transport.bikeRental": { pt: "Aluguel de Bicicleta", en: "Bike Rental" },
  "transport.tramMetro": { pt: "Tram e Metrô", en: "Tram & Metro" },
  "transport.freeFerries": { pt: "Ferries Grátis", en: "Free Ferries" },
  "transport.bus": { pt: "Ônibus", en: "Bus" },
  "transport.taxi": { pt: "Táxi/Uber", en: "Taxi/Uber" },
  "transport.schipholCity": { pt: "Schiphol <> Cidade", en: "Schiphol <> City" },
  "transport.survivalTips": { pt: "Dicas de Sobrevivência", en: "Survival Tips" },
  "transport.tip1": {
    pt: "NUNCA ande na ciclovia! Pavimento vermelho/marrom = território de bicicleta. Locais VÃO gritar com você.",
    en: "NEVER walk in the bike lane! Red/brown pavement = bike territory. Locals WILL yell at you."
  },
  "transport.tip2": {
    pt: "Olhe para AMBOS os lados antes de atravessar qualquer coisa. Bicicletas vêm rápido e silenciosas.",
    en: "Look BOTH ways before crossing anything. Bikes come fast and silent."
  },
  "transport.tip3": {
    pt: "Trilhos de tram são escorregadios quando molhados. Atravesse em ângulo de 90° para evitar quedas.",
    en: "Tram tracks are slippery when wet. Cross at 90° angles to avoid falls."
  },
  "transport.tip4": {
    pt: "OVpay é mágico: Apenas encoste seu cartão contactless. Não precisa comprar bilhetes. Limita gastos diários automaticamente.",
    en: "OVpay is magic: Just tap your contactless card. No need to buy tickets. Automatically caps daily spending."
  },
  "transport.tip5": {
    pt: "Do aeroporto: Trem é mais rápido (20min) e mais barato (€5,50). Táxi = €50+.",
    en: "From airport: Train is fastest (20min) and cheapest (€5.50). Taxi = €50+."
  },
  "transport.tip6": {
    pt: "Uber funciona mas muitas vezes bicicletas são mais rápidas no centro!",
    en: "Uber works but often bikes are faster in the center!"
  },

  // Attractions Page
  "attractions.title": { pt: "O Que Fazer em Amsterdam: O Guia REAL", en: "What to Do in Amsterdam: The REAL Guide" },
  "attractions.description": {
    pt: "Esqueça esses guias genéricos. Amsterdam mudou - não é mais só \"Canais + Luz Vermelha\". Vou te mostrar EXATAMENTE como aproveitar cada canto.",
    en: "Forget those generic guides. Amsterdam has changed - it is no longer just 'Canals + Red Light'. I will show you EXACTLY how to enjoy every corner."
  },
  "attractions.changesTitle": { pt: "O Que Mudou em 2025:", en: "What Changed in 2025:" },
  "attractions.change1": { pt: "Museu Van Gogh saiu do I amsterdam Card - muda cálculos do passe", en: "Van Gogh Museum left the I amsterdam Card - changes pass calculations" },
  "attractions.change2": { pt: "Noord, Oost, West se tornaram destinos por si só", en: "Noord, Oost, West became destinations themselves" },
  "attractions.change3": { pt: "Tudo ficou mais caro e \"premium\"", en: "Everything got more expensive and \"premium\"" },
  "attractions.change4": { pt: "SAIL Amsterdam volta em agosto 2025 - cidade vai estar LOTADA", en: "SAIL Amsterdam returns August 2025 - city will be PACKED" },
  "attractions.essentials": { pt: "O Essencial", en: "The Essentials" },
  "attractions.essentialsDesc": { pt: "Se você só tem alguns dias, NÃO perca estes.", en: "If you only have a few days, do NOT miss these." },
  "attractions.worthYourTime": { pt: "Vale Seu Tempo", en: "Worth Your Time" },
  "attractions.worthYourTimeDesc": { pt: "Além do óbvio - o que 99% dos turistas perdem.", en: "Beyond the obvious - what 99% of tourists miss." },
  "attractions.tip": { pt: "Dica:", en: "Tip:" },

  // Food Page
  "food.title": { pt: "Onde Comer em Amsterdam: O Guia Sem Rodeios", en: "Where to Eat in Amsterdam: The No-Nonsense Guide" },
  "food.description": {
    pt: "Amsterdam não é só batatas cozidas e queijo. A cidade tem uma cena gastronômica SÉRIA. Vou te mostrar EXATAMENTE onde ir e como evitar armadilhas turísticas.",
    en: "Amsterdam is not just boiled potatoes and cheese. The city has a SERIOUS food scene. I will show you EXACTLY where to go and how to avoid tourist traps."
  },
  "food.realDeal": {
    pt: "A Verdade: A melhor comida em Amsterdam não está em restaurantes caros. Está em barracas de mercado, padarias de bairro e cafés históricos. O segredo é saber ONDE ir.",
    en: "The Real Deal: The best food in Amsterdam is not in expensive restaurants. It is at market stalls, neighborhood bakeries, and historic cafes. The secret is knowing WHERE to go."
  },
  "food.streetFood": { pt: "Street Food: O Essencial", en: "Street Food: The Essentials" },
  "food.howToDoItRight": { pt: "Como fazer certo:", en: "How to do it right:" },
  "food.touristTrap": { pt: "Armadilha turística:", en: "Tourist trap:" },

  // Coffeeshops Page
  "coffeeshops.title": { pt: "Coffeeshops de Amsterdam 2025", en: "Amsterdam Coffeeshops 2025" },
  "coffeeshops.description": {
    pt: "O guia definitivo: entenda a gedoogbeleid (política de tolerância holandesa), regras de 2025, etiqueta e consumo responsável.",
    en: "The definitive guide: understand the gedoogbeleid (Dutch tolerance policy), 2025 rules, etiquette, and responsible consumption."
  },
  "coffeeshops.intro": {
    pt: "Para muitos viajantes, Amsterdam é a capital da cannabis da Europa. Porém, a realidade da cultura das coffeeshops é MUITO mais complexa, nuançada e burocrática do que a maioria imagina. É uma cultura enraizada no pragmatismo holandês único e na redução de danos.",
    en: "For many travelers, Amsterdam is the cannabis capital of Europe. However, the reality of coffeeshop culture is MUCH more complex, nuanced, and bureaucratic than most imagine. It is a culture rooted in unique Dutch pragmatism and harm reduction."
  },
  "coffeeshops.touristsAllowed": { pt: "SIM, Turistas São Permitidos!", en: "YES, Tourists Are Allowed!" },
  "coffeeshops.touristsAllowedDesc": {
    pt: "Turistas 18+ com documento válido (Passaporte) são bem-vindos para comprar e consumir nas coffeeshops da cidade. Máximo 5g por compra. Consumo apenas dentro do estabelecimento.",
    en: "Tourists 18+ with a valid ID (Passport) are welcome to buy and consume in the city coffeeshops. Maximum 5g per purchase. Consumption only inside the establishment."
  },
  "coffeeshops.essentialRules": { pt: "Regras Essenciais", en: "Essential Rules" },
  "coffeeshops.rule1": { pt: "18+ com documento válido (passaporte)", en: "18+ with valid ID (passport)" },
  "coffeeshops.rule2": { pt: "Máximo 5g por compra por pessoa", en: "Maximum 5g per purchase per person" },
  "coffeeshops.rule3": { pt: "SEM misturar tabaco desde 2023", en: "NO tobacco mixing since 2023" },
  "coffeeshops.rule4": { pt: "SEM fumar na rua - multas pesadas!", en: "NO smoking on the street - heavy fines!" },
  "coffeeshops.rule5": { pt: "NUNCA compre de vendedores de rua", en: "NEVER buy from street dealers" },
  "coffeeshops.rule6": { pt: "Edibles levam 1-2 horas para fazer efeito - espere!", en: "Edibles take 1-2 hours to hit - wait!" },

  // Day Trips Page
  "daytrips.title": { pt: "Bate-volta de Amsterdam", en: "Day Trips from Amsterdam" },
  "daytrips.description": {
    pt: "A Holanda é pequena e o sistema de trens é fantástico. Em menos de 1 hora, você pode estar em cidades medievais, campos de tulipas ou arquitetura futurista.",
    en: "The Netherlands is small and the train system is fantastic. In less than 1 hour, you can be in medieval cities, tulip fields, or futuristic architecture."
  },
  "daytrips.mustSee": { pt: "Imperdível", en: "Must See" },
  "daytrips.classic": { pt: "Clássico", en: "Classic" },
  "daytrips.seasonal": { pt: "Sazonal", en: "Seasonal" },
  "daytrips.modern": { pt: "Moderno", en: "Modern" },
  "daytrips.historic": { pt: "Histórico", en: "Historic" },
  "daytrips.miniAmsterdam": { pt: "Mini-Amsterdam", en: "Mini-Amsterdam" },

  // Day Trips Descriptions
  "daytrips.zaanseschans.name": { pt: "Zaanse Schans", en: "Zaanse Schans" },
  "daytrips.zaanseschans.desc": { pt: "A Holanda dos cartões postais. Moinhos funcionando, queijo, tamancos.", en: "The Netherlands of postcards. Working windmills, cheese, clogs." },
  "daytrips.keukenhof.name": { pt: "Keukenhof", en: "Keukenhof" },
  "daytrips.keukenhof.desc": { pt: "7 milhões de tulipas. Só março-maio. Reserve com antecedência!", en: "7 million tulips. Only March-May. Book ahead!" },
  "daytrips.giethoorn.name": { pt: "Giethoorn", en: "Giethoorn" },
  "daytrips.giethoorn.desc": { pt: "Veneza do Norte. Sem carros, só barcos e pontes.", en: "Venice of the North. No cars, only boats and bridges." },
  "daytrips.haarlem.name": { pt: "Haarlem", en: "Haarlem" },
  "daytrips.haarlem.desc": { pt: "Tudo que Amsterdam tem, menos as multidões. Ótimos cafés.", en: "Everything Amsterdam has, minus the crowds. Great cafes." },
  "daytrips.rotterdam.name": { pt: "Rotterdam", en: "Rotterdam" },
  "daytrips.rotterdam.desc": { pt: "Arquitetura futurista. Cube houses, Markthal. Contraste total.", en: "Futuristic architecture. Cube houses, Markthal. Total contrast." },
  "daytrips.delft.name": { pt: "Delft", en: "Delft" },
  "daytrips.delft.desc": { pt: "Cerâmica azul, Vermeer, canais charmosos. Muito fotogênica.", en: "Blue pottery, Vermeer, charming canals. Very photogenic." },

  // Common
  "common.readMore": { pt: "Saiba mais", en: "Read more" },
  "common.viewAll": { pt: "Ver todos", en: "View all" },
  "common.tip": { pt: "Dica", en: "Tip" },
  "common.mustSee": { pt: "Imperdível", en: "Must See" },
  "common.free": { pt: "Grátis", en: "Free" },
  "common.realityCheck": { pt: "Realidade 2025:", en: "2025 Reality Check:" },
  
  // Footer
  "footer.rights": { pt: "Todos os direitos reservados", en: "All rights reserved" },
  "footer.madeWith": { pt: "Feito com", en: "Made with" },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) return key;
    return translation[language] || translation.en || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
