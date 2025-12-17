import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "pt" | "en" | "nl";

interface Translations {
  [key: string]: {
    pt: string;
    en: string;
    nl: string;
  };
}

const translations: Translations = {
  // Navigation
  "nav.home": { pt: "Início", en: "Home", nl: "Home" },
  "nav.about": { pt: "Sobre", en: "About", nl: "Over" },
  "nav.planning": { pt: "Planejamento", en: "Planning", nl: "Planning" },
  "nav.accommodation": { pt: "Hospedagem", en: "Stay", nl: "Verblijf" },
  "nav.attractions": { pt: "Atrações", en: "See & Do", nl: "Zien & Doen" },
  "nav.transport": { pt: "Transporte", en: "Get Around", nl: "Vervoer" },
  "nav.food": { pt: "Gastronomia", en: "Eat & Drink", nl: "Eten & Drinken" },
  "nav.coffeeshops": { pt: "Coffeeshops", en: "Coffeeshops", nl: "Coffeeshops" },
  "nav.daytrips": { pt: "Arredores", en: "Day Trips", nl: "Dagtrips" },
  "nav.costOfLiving": { pt: "Custo de Vida", en: "Cost of Living", nl: "Kosten" },
  "nav.gallery": { pt: "Galeria", en: "Gallery", nl: "Galerij" },
  "nav.blog": { pt: "Blog", en: "Blog", nl: "Blog" },
  
  // Hero
  "hero.title": { pt: "Guia Completo de Amsterdam 2026", en: "Complete Amsterdam Guide 2026", nl: "Complete Amsterdam Gids 2026" },
  "hero.subtitle": { pt: "O Guia Brutalmente Honesto", en: "The Brutally Honest Guide", nl: "De Brutaal Eerlijke Gids" },
  "hero.description": { 
    pt: "Esqueça os \"contos de fada\". Aqui você encontra as dificuldades reais, multas, armadilhas e segredos locais que realmente importam para sua viagem.",
    en: "Forget the \"fairy tales\". Here you will find the real struggles, fines, traps and local secrets that really matter for your trip.",
    nl: "Vergeet de \"sprookjes\". Hier vind je de echte uitdagingen, boetes, valkuilen en lokale geheimen die er echt toe doen voor je reis."
  },
  "hero.sections": { pt: "9 seções", en: "9 sections", nl: "9 secties" },
  "hero.noFilter": { pt: "Sem filtro", en: "No filter", nl: "Geen filter" },
  "hero.firstTrip": { pt: "Primeira viagem?", en: "First Trip?", nl: "Eerste reis?" },
  "hero.startHere": { pt: "Comece aqui", en: "Start here", nl: "Begin hier" },
  "hero.whereToStay": { pt: "Onde ficar", en: "Where to Stay", nl: "Waar te verblijven" },
  "hero.bestNeighborhoods": { pt: "Melhores bairros", en: "Best neighborhoods", nl: "Beste buurten" },
  "hero.gettingAround": { pt: "Como se locomover", en: "Getting Around", nl: "Vervoer" },
  "hero.tramBikeMetro": { pt: "Tram, bike, metrô", en: "Tram, bike, metro", nl: "Tram, fiets, metro" },
  
  // About Page
  "about.title": { pt: "Quem é o Du?", en: "Who is Du?", nl: "Wie is Du?" },
  "about.subtitle": { pt: "E por que o Amsterdu existe", en: "And why Amsterdu exists", nl: "En waarom Amsterdu bestaat" },
  "about.greeting": { pt: "Olá, eu sou o Du.", en: "Hi, I am Du.", nl: "Hoi, ik ben Du." },
  "about.intro": {
    pt: "Se há uma coisa que você precisa saber sobre mim: sou apaixonado por Amsterdam.",
    en: "If there is one thing you need to know about me right away: I am in love with Amsterdam.",
    nl: "Als er één ding is dat je meteen over mij moet weten: ik ben verliefd op Amsterdam."
  },
  "about.story1": {
    pt: "Minha história com a cidade não é sobre uma visita rápida de fim de semana. Já estive lá muitas vezes, construí amizades verdadeiras com locais, e a cada viagem, descubro uma nova camada dessa cidade incrível.",
    en: "My history with the city is not about a quick weekend visit. I have been there many times, built true friendships with locals, and with each trip, I discover a new layer of this incredible city.",
    nl: "Mijn geschiedenis met de stad gaat niet over een snel weekendbezoek. Ik ben er vele malen geweest, heb echte vriendschappen opgebouwd met locals, en bij elke reis ontdek ik een nieuwe laag van deze ongelooflijke stad."
  },
  "about.story2": {
    pt: "Em breve, Amsterdam vai deixar de ser apenas meu destino favorito e oficialmente se tornar minha casa.",
    en: "Soon, Amsterdam will stop being just my favorite destination and officially become my home.",
    nl: "Binnenkort wordt Amsterdam niet meer alleen mijn favoriete bestemming, maar officieel mijn thuis."
  },
  "about.story3": {
    pt: "Mas enquanto a mudança final não acontece, vivo em constante \"modo pesquisa\". Não sou um guia tradicional e distante. Sou alguém como você, mas que decidiu mergulhar fundo: converso com pessoas que moram lá, estudo a história, entendo as dificuldades, e testo cada recomendação antes de compartilhar aqui.",
    en: "But while the final move does not happen, I live in constant \"research mode\". I am not a traditional, distant tour guide. I am someone like you, but who decided to dive deep: I talk to people who live there, study the history, understand the struggles, and test each recommendation before sharing it here.",
    nl: "Maar terwijl de definitieve verhuizing nog niet heeft plaatsgevonden, leef ik in constante \"onderzoeksmodus\". Ik ben geen traditionele, afstandelijke gids. Ik ben iemand zoals jij, maar die besloot diep te duiken: ik praat met mensen die er wonen, bestudeer de geschiedenis, begrijp de uitdagingen en test elke aanbeveling voordat ik die hier deel."
  },
  "about.whatYouWillFind": { pt: "O que você vai encontrar no Amsterdu?", en: "What will you find at Amsterdu?", nl: "Wat vind je bij Amsterdu?" },
  "about.result": {
    pt: "O resultado da minha busca incansável para descobrir o que realmente vale a pena.",
    en: "The result of my relentless search to discover what is truly worth it.",
    nl: "Het resultaat van mijn onvermoeibare zoektocht om te ontdekken wat echt de moeite waard is."
  },
  "about.validatedTips": { pt: "Dicas Validadas", en: "Validated Tips", nl: "Gevalideerde Tips" },
  "about.validatedTipsDesc": { pt: "Por mim e meus amigos holandeses.", en: "By me and my Dutch friends.", nl: "Door mij en mijn Nederlandse vrienden." },
  "about.curiousPerspective": { pt: "Perspectiva Curiosa", en: "Curious Perspective", nl: "Nieuwsgierig Perspectief" },
  "about.curiousPerspectiveDesc": { pt: "Que vai muito além do óbvio turístico.", en: "That goes far beyond the tourist obvious.", nl: "Dat veel verder gaat dan het toeristische voor de hand liggende." },
  "about.realPreparation": { pt: "Preparação Real", en: "Real Preparation", nl: "Echte Voorbereiding" },
  "about.realPreparationDesc": { pt: "De alguém que está fazendo as malas.", en: "Of someone who is packing their bags.", nl: "Van iemand die zijn koffers aan het pakken is." },
  "about.invitation": {
    pt: "Amsterdu é meu convite para você descobrir a cidade ao meu lado, aprendendo com meus acertos e evitando as armadilhas.",
    en: "Amsterdu is my invitation for you to discover the city alongside me, learning from my successes and avoiding the traps.",
    nl: "Amsterdu is mijn uitnodiging om de stad samen met mij te ontdekken, te leren van mijn successen en de valkuilen te vermijden."
  },
  "about.welcomeHome": { pt: "Bem-vindo à minha futura casa.", en: "Welcome to my future home.", nl: "Welkom in mijn toekomstige thuis." },
  "about.readyToStart": { pt: "Pronto para Começar?", en: "Ready to Start?", nl: "Klaar om te beginnen?" },
  "about.painFree": { pt: "Sem Dor", en: "Pain-Free", nl: "Pijnloos" },
  "about.theRealDeal": { pt: "A Verdade", en: "The Real Deal", nl: "De Echte Waarheid" },
  "about.theEssentials": { pt: "O Essencial", en: "The Essentials", nl: "De Basis" },

  // Planning Page
  "planning.title": { pt: "Planejando Amsterdam: O Que Você PRECISA Saber", en: "Planning Amsterdam: What You NEED to Know", nl: "Amsterdam Plannen: Wat Je MOET Weten" },
  "planning.description": {
    pt: "Amsterdam em 2026 será EXTREMAMENTE CARA com novas regras. Se você não planejar direito, vai gastar uma fortuna por uma experiência medíocre.",
    en: "Amsterdam in 2026 will be EXTREMELY EXPENSIVE with new rules. If you do not plan properly, you will spend a fortune for a mediocre experience.",
    nl: "Amsterdam in 2026 wordt EXTREEM DUUR met nieuwe regels. Als je niet goed plant, geef je een fortuin uit voor een middelmatige ervaring."
  },
  "planning.realityCheck": {
    pt: "Taxa turística agora é 12,5% em cima de tudo. IVA aumentou para 21%. Total de impostos: mais de 33% na hospedagem. Aquele hotel de €100/noite na verdade custa €133+.",
    en: "Tourist tax is now 12.5% on top of everything. VAT increased to 21%. Total taxes: over 33% on accommodation. That €100/night hotel actually costs €133+.",
    nl: "Toeristenbelasting is nu 12,5% bovenop alles. BTW verhoogd naar 21%. Totale belastingen: meer dan 33% op accommodatie. Dat hotel van €100/nacht kost eigenlijk €133+."
  },
  "planning.whenToVisit": { pt: "Quando Visitar (A Verdade)", en: "When to Visit (The Real Deal)", nl: "Wanneer Bezoeken (De Waarheid)" },
  "planning.seasonsGuide": {
    pt: "Guia honesto das estações: tulipas com multidões, ou museus sem filas?",
    en: "Honest guide to seasons: tulips with crowds, or museums without lines?",
    nl: "Eerlijke seizoenengids: tulpen met drukte, of musea zonder rijen?"
  },
  "planning.weatherMyth": {
    pt: "O \"Mito\" do Clima Holandês: Amsterdam não é uma cidade de sol garantido. É uma cidade de atmosfera garantida. O clima é imprevisível. A melhor época depende do que você procura.",
    en: "The Dutch Weather \"Myth\": Amsterdam is not a city of guaranteed sun. It is a city of guaranteed atmosphere. The weather is unpredictable. The best time depends on what you are looking for.",
    nl: "De Nederlandse Weer \"Mythe\": Amsterdam is geen stad van gegarandeerde zon. Het is een stad met gegarandeerde sfeer. Het weer is onvoorspelbaar. De beste tijd hangt af van wat je zoekt."
  },
  "planning.spring": { pt: "Primavera", en: "Spring", nl: "Lente" },
  "planning.springPeriod": { pt: "Março - Maio", en: "March - May", nl: "Maart - Mei" },
  "planning.springHighlight": { pt: "A cidade desperta • Tulipas • Dia do Rei", en: "The city awakens • Tulips • King's Day", nl: "De stad ontwaakt • Tulpen • Koningsdag" },
  "planning.springDesc": {
    pt: "Tulipas florescem, terraços abrem, e o Dia do Rei (27 de abril) deixa a cidade laranja.",
    en: "Tulips bloom, terraces open, and King's Day (April 27) turns the city orange.",
    nl: "Tulpen bloeien, terrassen openen, en Koningsdag (27 april) kleurt de stad oranje."
  },
  "planning.summer": { pt: "Verão", en: "Summer", nl: "Zomer" },
  "planning.summerPeriod": { pt: "Junho - Agosto", en: "June - August", nl: "Juni - Augustus" },
  "planning.summerHighlight": { pt: "Alta temporada • Festivais • Terraços", en: "Peak season • Festivals • Terraces", nl: "Hoogseizoen • Festivals • Terrassen" },
  "planning.summerDesc": {
    pt: "Dias longos (pôr do sol às 22h!), festivais ao ar livre, terraços lotados. Mais caro.",
    en: "Long days (sunset at 10pm!), outdoor festivals, packed terraces. Most expensive.",
    nl: "Lange dagen (zonsondergang om 22:00!), buitenfestivals, volle terrassen. Duurste periode."
  },
  "planning.autumn": { pt: "Outono", en: "Autumn", nl: "Herfst" },
  "planning.autumnPeriod": { pt: "Setembro - Novembro", en: "September - November", nl: "September - November" },
  "planning.autumnHighlight": { pt: "Segredo dos locais • Museus tranquilos", en: "Insider's secret • Quiet museums", nl: "Geheim van locals • Rustige musea" },
  "planning.autumnDesc": {
    pt: "O favorito dos locais. Menos turistas, cores bonitas, museus sem filas.",
    en: "The locals' favorite. Fewer tourists, beautiful colors, museums without lines.",
    nl: "De favoriet van de locals. Minder toeristen, mooie kleuren, musea zonder rijen."
  },
  "planning.winter": { pt: "Inverno", en: "Winter", nl: "Winter" },
  "planning.winterPeriod": { pt: "Dezembro - Fevereiro", en: "December - February", nl: "December - Februari" },
  "planning.winterHighlight": { pt: "Natal • Luzes • Gezelligheid", en: "Christmas • Lights • Gezelligheid", nl: "Kerst • Lichten • Gezelligheid" },
  "planning.winterDesc": {
    pt: "Amsterdam Light Festival, mercados de Natal, e aconchego holandês (gezelligheid).",
    en: "Amsterdam Light Festival, Christmas markets, and Dutch coziness (gezelligheid).",
    nl: "Amsterdam Light Festival, kerstmarkten en gezelligheid."
  },
  "planning.documentation": { pt: "Documentação", en: "Documentation", nl: "Documentatie" },
  "planning.documentationDesc": { pt: "Tudo que você precisa para entrar na Holanda", en: "Everything you need to enter the Netherlands", nl: "Alles wat je nodig hebt om Nederland binnen te komen" },
  "planning.brazilianGoodNews": {
    pt: "Boa Notícia para Brasileiros: Não precisa de visto para estadas turísticas de até 90 dias! Mas você vai precisar provar que é um turista legítimo.",
    en: "Good News for Brazilians: No visa required for tourist stays up to 90 days! But you will need to prove you are a legitimate tourist.",
    nl: "Goed Nieuws voor Brazilianen: Geen visum nodig voor toeristenverblijf tot 90 dagen! Maar je moet bewijzen dat je een legitieme toerist bent."
  },
  "planning.validPassport": { pt: "Passaporte Válido", en: "Valid Passport", nl: "Geldig Paspoort" },
  "planning.validPassportDesc": {
    pt: "Deve ser válido por PELO MENOS 3 meses APÓS a data de retorno. Verifique agora!",
    en: "Must be valid for AT LEAST 3 months AFTER your return date. Check now!",
    nl: "Moet MINSTENS 3 maanden geldig zijn NA je retourdatum. Check nu!"
  },
  "planning.accommodationProof": { pt: "Comprovante de Hospedagem", en: "Accommodation Proof", nl: "Accommodatiebewijs" },
  "planning.accommodationProofDesc": {
    pt: "Reserva de hotel, confirmação Airbnb, ou carta convite do anfitrião.",
    en: "Hotel booking, Airbnb confirmation, or invitation letter from host.",
    nl: "Hotelboeking, Airbnb-bevestiging of uitnodigingsbrief van gastheer."
  },
  "planning.financialProof": { pt: "Comprovante Financeiro", en: "Financial Proof", nl: "Financieel Bewijs" },
  "planning.financialProofDesc": {
    pt: "Extrato bancário ou cartão de crédito. Podem pedir na imigração.",
    en: "Bank statement or credit card. They may ask at immigration.",
    nl: "Bankafschrift of creditcard. Ze kunnen ernaar vragen bij immigratie."
  },
  "planning.returnTicket": { pt: "Passagem de Volta", en: "Return Ticket", nl: "Retourticket" },
  "planning.returnTicketDesc": {
    pt: "Comprovante de que você vai sair do Espaço Schengen em até 90 dias.",
    en: "Proof you are leaving the Schengen Area within 90 days.",
    nl: "Bewijs dat je het Schengengebied binnen 90 dagen verlaat."
  },
  "planning.gettingThere": { pt: "Como Chegar", en: "Getting There", nl: "Hoe Kom Je Er" },
  "planning.schiphol": { pt: "Aeroporto Schiphol", en: "Schiphol Airport", nl: "Luchthaven Schiphol" },
  "planning.schipholDesc": {
    pt: "Um dos melhores aeroportos da Europa. Trem para o centro: 20min, €5,50",
    en: "One of Europe's best airports. Train to center: 20min, €5.50",
    nl: "Een van de beste luchthavens van Europa. Trein naar centrum: 20min, €5,50"
  },
  "planning.trains": { pt: "Trens Internacionais", en: "International Trains", nl: "Internationale Treinen" },
  "planning.trainsDesc": {
    pt: "Thalys de Paris (3h), Eurostar de Londres (4h), ICE da Alemanha",
    en: "Thalys from Paris (3h), Eurostar from London (4h), ICE from Germany",
    nl: "Thalys uit Parijs (3u), Eurostar uit Londen (4u), ICE uit Duitsland"
  },
  "planning.bus": { pt: "Ônibus (Econômico)", en: "Bus (Budget)", nl: "Bus (Budget)" },
  "planning.busDesc": {
    pt: "FlixBus de grandes cidades europeias. Barato mas longo.",
    en: "FlixBus from major European cities. Cheap but long.",
    nl: "FlixBus vanuit grote Europese steden. Goedkoop maar lang."
  },
  "planning.car": { pt: "De Carro", en: "By Car", nl: "Met de Auto" },
  "planning.carDesc": {
    pt: "Use Park & Ride. Estacionar no centro: €7,50/hora (!)",
    en: "Use Park & Ride. Parking in center: €7.50/hour (!)",
    nl: "Gebruik P+R. Parkeren in centrum: €7,50/uur (!)"
  },

  // Accommodation Page
  "accommodation.title": { pt: "Onde Ficar em Amsterdam: O Guia Sem Rodeios", en: "Where to Stay in Amsterdam: The No-BS Guide", nl: "Waar Overnachten in Amsterdam: De Eerlijke Gids" },
  "accommodation.description": {
    pt: "Vou te dizer EXATAMENTE onde ficar baseado no seu perfil, orçamento e o que você quer fazer. Nada de papo vago de \"depende\".",
    en: "I will tell you EXACTLY where to stay based on your profile, budget and what you want to do. No vague 'it depends' talk.",
    nl: "Ik vertel je PRECIES waar je moet verblijven op basis van je profiel, budget en wat je wilt doen. Geen vaag 'het hangt ervan af' gedoe."
  },
  "accommodation.realityTitle": { pt: "A Verdade Sobre Hospedagem em Amsterdam 2026", en: "The Real Deal About Amsterdam Accommodation 2026", nl: "De Waarheid Over Accommodatie in Amsterdam 2026" },
  "accommodation.realityIntro": {
    pt: "Antes de mostrar os bairros, você precisa entender algo: Amsterdam é MUITO CARA e é de propósito. A prefeitura QUER que você gaste mais ou não venha. Não é paranoia, é política oficial.",
    en: "Before I show you the neighborhoods, you need to understand something: Amsterdam is VERY EXPENSIVE and it is on purpose. The city council WANTS you to spend more or not come. It is not paranoia, it is official policy.",
    nl: "Voordat ik je de buurten laat zien, moet je iets begrijpen: Amsterdam is HEEL DUUR en dat is met opzet. De gemeente WIL dat je meer uitgeeft of niet komt. Het is geen paranoia, het is officieel beleid."
  },
  "accommodation.absurdTaxes": { pt: "Os Impostos São Absurdos", en: "The Taxes Are Absurd", nl: "De Belastingen Zijn Absurd" },
  "accommodation.touristTax": { pt: "Taxa turística: 12,5% EM CIMA DE TUDO", en: "Tourist tax: 12.5% on TOP of EVERYTHING", nl: "Toeristenbelasting: 12,5% BOVENOP ALLES" },
  "accommodation.vat": { pt: "IVA: 21% (em vigor desde 2025)", en: "VAT: 21% (in effect since 2025)", nl: "BTW: 21% (sinds 2025)" },
  "accommodation.totalTax": { pt: "Total: Mais de 33% DE IMPOSTO no preço base", en: "Total: Over 33% TAX on top of base price", nl: "Totaal: Meer dan 33% BELASTING bovenop de basisprijs" },
  "accommodation.airbnbDead": { pt: "Airbnb Está Morto (Quase)", en: "Airbnb Is Dead (Almost)", nl: "Airbnb Is (Bijna) Dood" },
  "accommodation.airbnb1": { pt: "30 noites/ano máx (logo 15 no centro)", en: "30 nights/year max (soon 15 in center)", nl: "30 nachten/jaar max (binnenkort 15 in centrum)" },
  "accommodation.airbnb2": { pt: "Precisa de licença específica", en: "Needs specific license", nl: "Vereist specifieke vergunning" },
  "accommodation.airbnb3": { pt: "Inventário caiu 54% desde 2019", en: "Inventory dropped 54% since 2019", nl: "Aanbod daalde 54% sinds 2019" },
  "accommodation.airbnb4": { pt: "Hotéis são mais seguros em 2026", en: "Hotels are safer in 2026", nl: "Hotels zijn veiliger in 2026" },
  "accommodation.neighborhoodsDecoded": { pt: "Bairros Decodificados", en: "Neighborhoods Decoded", nl: "Buurten Uitgelegd" },
  "accommodation.neighborhoodsIntro": {
    pt: "A boa notícia? Se você entender ONDE ficar baseado no que quer fazer, pode economizar MUITO e ter uma experiência melhor que 90% dos turistas.",
    en: "The good news? If you understand WHERE to stay based on what you want to do, you can save A LOT and have a better experience than 90% of tourists.",
    nl: "Het goede nieuws? Als je begrijpt WAAR je moet verblijven op basis van wat je wilt doen, kun je VEEL besparen en een betere ervaring hebben dan 90% van de toeristen."
  },
  "accommodation.pros": { pt: "Prós:", en: "Pros:", nl: "Voordelen:" },
  "accommodation.cons": { pt: "Contras:", en: "Cons:", nl: "Nadelen:" },
  "accommodation.goodFor": { pt: "Bom para:", en: "Good for:", nl: "Goed voor:" },
  "accommodation.types": { pt: "Tipos de Hospedagem", en: "Accommodation Types", nl: "Accommodatietypes" },

  // Neighborhoods
  "neighborhood.centrum.name": { pt: "Centrum", en: "Centrum", nl: "Centrum" },
  "neighborhood.centrum.desc": { pt: "O coração histórico. Caminhe para tudo. Mas caro e lotado.", en: "The historic heart. Walk to everything. But expensive and crowded.", nl: "Het historische hart. Loop naar alles. Maar duur en druk." },
  "neighborhood.centrum.verdict": { pt: "Bom para: Primeira viagem, quer conveniência, não preço", en: "Good for: First-timers who want convenience over price", nl: "Goed voor: Eerste keer, gemak boven prijs" },
  "neighborhood.jordaan.name": { pt: "Jordaan", en: "Jordaan", nl: "Jordaan" },
  "neighborhood.jordaan.desc": { pt: "O bairro famoso do Instagram. Canais charmosos, cafés aconchegantes, galerias de arte.", en: "The Instagram-famous neighborhood. Charming canals, cozy cafes, art galleries.", nl: "De Instagram-beroemde buurt. Charmante grachten, gezellige cafés, kunstgalerijen." },
  "neighborhood.jordaan.verdict": { pt: "Bom para: Casais, amantes de arte, quem busca Amsterdam \"autêntica\"", en: "Good for: Couples, art lovers, those seeking 'authentic' Amsterdam", nl: "Goed voor: Stellen, kunstliefhebbers, wie 'authentiek' Amsterdam zoekt" },
  "neighborhood.depijp.name": { pt: "De Pijp", en: "De Pijp", nl: "De Pijp" },
  "neighborhood.depijp.desc": { pt: "Multicultural, jovem, vibrante. Mercado Albert Cuyp. Ótima cena gastronômica.", en: "Multicultural, young, vibrant. Albert Cuyp Market. Great food scene.", nl: "Multicultureel, jong, levendig. Albert Cuypmarkt. Geweldige foodscene." },
  "neighborhood.depijp.verdict": { pt: "Bom para: Foodies, jovens viajantes, orçamento consciente", en: "Good for: Foodies, young travelers, budget-conscious", nl: "Goed voor: Foodies, jonge reizigers, budgetbewust" },
  "neighborhood.oudwest.name": { pt: "Oud-West", en: "Oud-West", nl: "Oud-West" },
  "neighborhood.oudwest.desc": { pt: "Hipster, gentrificado, perto do Vondelpark. Foodhallen fica aqui.", en: "Hip, gentrified, near Vondelpark. Foodhallen is here.", nl: "Hip, gegentrificeerd, bij Vondelpark. Foodhallen is hier." },
  "neighborhood.oudwest.verdict": { pt: "Bom para: Estadias longas, famílias, amantes de parques", en: "Good for: Longer stays, families, park lovers", nl: "Goed voor: Langere verblijven, gezinnen, parkliefhebbers" },
  "neighborhood.noord.name": { pt: "Noord", en: "Noord", nl: "Noord" },
  "neighborhood.noord.desc": { pt: "A fronteira criativa. Ferries, street art, NDSM. Amsterdam diferente.", en: "The creative frontier. Ferries, street art, NDSM wharf. Different Amsterdam.", nl: "De creatieve grens. Ponten, street art, NDSM-werf. Anders Amsterdam." },
  "neighborhood.noord.verdict": { pt: "Bom para: Aventureiros, artistas, viajantes econômicos", en: "Good for: Adventurers, artists, budget travelers", nl: "Goed voor: Avonturiers, kunstenaars, budgetreizigers" },
  "neighborhood.oost.name": { pt: "Oost", en: "Oost", nl: "Oost" },
  "neighborhood.oost.desc": { pt: "Diverso, residencial, Oosterpark. O bairro dos locais.", en: "Diverse, residential, Oosterpark. The locals' neighborhood.", nl: "Divers, residentieel, Oosterpark. De buurt van de locals." },
  "neighborhood.oost.verdict": { pt: "Bom para: Famílias, estadias longas, experiência autêntica", en: "Good for: Families, long stays, authentic experience", nl: "Goed voor: Gezinnen, lange verblijven, authentieke ervaring" },

  // Transport Page
  "transport.title": { pt: "Como se Locomover em Amsterdam", en: "Getting Around Amsterdam", nl: "Reizen in Amsterdam" },
  "transport.description": {
    pt: "O guia completo para você não se perder, não levar multa, e não ser atropelado.",
    en: "The complete guide so you do not get lost, do not get fined, and do not get run over.",
    nl: "De complete gids zodat je niet verdwaalt, geen boete krijgt en niet wordt aangereden."
  },
  "transport.goldenRule": { pt: "Hierarquia do Trânsito de Amsterdam (Regra de Ouro):", en: "Amsterdam Traffic Hierarchy (Golden Rule):", nl: "Amsterdam Verkeershiërarchie (Gouden Regel):" },
  "transport.bicycle": { pt: "Bicicleta", en: "Bicycle", nl: "Fiets" },
  "transport.tram": { pt: "Tram", en: "Tram", nl: "Tram" },
  "transport.pedestrian": { pt: "Pedestre", en: "Pedestrian", nl: "Voetganger" },
  "transport.car": { pt: "Carro", en: "Car", nl: "Auto" },
  "transport.vitalRule": {
    pt: "Entender isso é VITAL para sua sobrevivência. Turistas que ignoram essa regra causam acidentes!",
    en: "Understanding this is VITAL for your survival. Tourists who ignore this rule cause accidents!",
    nl: "Dit begrijpen is VITAAL voor je overleving. Toeristen die deze regel negeren veroorzaken ongelukken!"
  },
  "transport.pyramid": { pt: "A Pirâmide de Prioridades", en: "The Priority Pyramid", nl: "De Prioriteitspyramide" },
  "transport.bicycleTop": { pt: "Topo: BICICLETA", en: "Top: BICYCLE", nl: "Top: FIETS" },
  "transport.bicycleDesc": {
    pt: "Rei absoluto das ruas. Tem prioridade sobre TODOS. 880.000 bicicletas para 900.000 habitantes não é brincadeira!",
    en: "Absolute king of the streets. Has priority over EVERYONE else. 880,000 bikes for 900,000 inhabitants is no joke!",
    nl: "Absolute koning van de straat. Heeft voorrang op IEDEREEN. 880.000 fietsen voor 900.000 inwoners is geen grap!"
  },
  "transport.tramLevel": { pt: "Segundo Nível: TRAM", en: "Second Level: TRAM", nl: "Tweede Niveau: TRAM" },
  "transport.tramDesc": {
    pt: "30+ toneladas nos trilhos. NÃO PODE desviar. NÃO PODE parar rápido. Prioridade garantida pela física, não só pela lei!",
    en: "30+ tons on rails. CANNOT swerve. CANNOT stop quickly. Priority guaranteed by physics, not just law!",
    nl: "30+ ton op rails. KAN NIET uitwijken. KAN NIET snel stoppen. Voorrang gegarandeerd door natuurkunde, niet alleen de wet!"
  },
  "transport.pedestrianLevel": { pt: "Terceiro Nível: PEDESTRE", en: "Third Level: PEDESTRIAN", nl: "Derde Niveau: VOETGANGER" },
  "transport.pedestrianDesc": {
    pt: "Você (turista) está AQUI. Vulnerável mas protegido por lei nas faixas. Sua arma: atenção constante e respeito à hierarquia.",
    en: "You (tourist) are HERE. Vulnerable but protected by law at crosswalks. Your weapon: constant attention and respect for the hierarchy.",
    nl: "Jij (toerist) bent HIER. Kwetsbaar maar beschermd door de wet op zebrapaden. Je wapen: constante aandacht en respect voor de hiërarchie."
  },
  "transport.carLevel": { pt: "Base: CARRO", en: "Base: CAR", nl: "Basis: AUTO" },
  "transport.carDesc": {
    pt: "Menor prioridade. Visto como \"visitante tolerado\" nas ruas. Amsterdam foi REDESENHADA para bicicletas, não carros!",
    en: "Lowest priority. Seen as \"tolerated visitor\" on the streets. Amsterdam was REDESIGNED for bikes, not cars!",
    nl: "Laagste prioriteit. Gezien als \"gedoogde bezoeker\" op straat. Amsterdam is HERONTWORPEN voor fietsen, niet voor autos!"
  },
  "transport.options": { pt: "Opções de Transporte", en: "Transport Options", nl: "Vervoersopties" },
  "transport.bikeRental": { pt: "Aluguel de Bicicleta", en: "Bike Rental", nl: "Fietsverhuur" },
  "transport.tramMetro": { pt: "Tram e Metrô", en: "Tram & Metro", nl: "Tram & Metro" },
  "transport.freeFerries": { pt: "Ferries Grátis", en: "Free Ferries", nl: "Gratis Ponten" },
  "transport.bus": { pt: "Ônibus", en: "Bus", nl: "Bus" },
  "transport.taxi": { pt: "Táxi/Uber", en: "Taxi/Uber", nl: "Taxi/Uber" },
  "transport.schipholCity": { pt: "Schiphol <> Cidade", en: "Schiphol <> City", nl: "Schiphol <> Stad" },
  "transport.survivalTips": { pt: "Dicas de Sobrevivência", en: "Survival Tips", nl: "Overlevingstips" },
  "transport.tip1": {
    pt: "NUNCA ande na ciclovia! Pavimento vermelho/marrom = território de bicicleta. Locais VÃO gritar com você.",
    en: "NEVER walk in the bike lane! Red/brown pavement = bike territory. Locals WILL yell at you.",
    nl: "LOOP NOOIT op het fietspad! Rood/bruin wegdek = fietsgebied. Locals ZULLEN naar je schreeuwen."
  },
  "transport.tip2": {
    pt: "Olhe para AMBOS os lados antes de atravessar qualquer coisa. Bicicletas vêm rápido e silenciosas.",
    en: "Look BOTH ways before crossing anything. Bikes come fast and silent.",
    nl: "Kijk BEIDE kanten op voordat je oversteekt. Fietsen komen snel en stil."
  },
  "transport.tip3": {
    pt: "Trilhos de tram são escorregadios quando molhados. Atravesse em ângulo de 90° para evitar quedas.",
    en: "Tram tracks are slippery when wet. Cross at 90° angles to avoid falls.",
    nl: "Tramrails zijn glad als ze nat zijn. Steek onder een hoek van 90° over om vallen te voorkomen."
  },
  "transport.tip4": {
    pt: "OVpay é mágico: Apenas encoste seu cartão contactless. Não precisa comprar bilhetes. Limita gastos diários automaticamente.",
    en: "OVpay is magic: Just tap your contactless card. No need to buy tickets. Automatically caps daily spending.",
    nl: "OVpay is magisch: Tik gewoon je contactloze kaart. Geen tickets kopen. Beperkt automatisch dagelijkse uitgaven."
  },
  "transport.tip5": {
    pt: "Do aeroporto: Trem é mais rápido (20min) e mais barato (€5,50). Táxi = €50+.",
    en: "From airport: Train is fastest (20min) and cheapest (€5.50). Taxi = €50+.",
    nl: "Vanaf de luchthaven: Trein is snelst (20min) en goedkoopst (€5,50). Taxi = €50+."
  },
  "transport.tip6": {
    pt: "Uber funciona mas muitas vezes bicicletas são mais rápidas no centro!",
    en: "Uber works but often bikes are faster in the center!",
    nl: "Uber werkt maar vaak zijn fietsen sneller in het centrum!"
  },

  // Attractions Page
  "attractions.title": { pt: "O Que Fazer em Amsterdam: O Guia REAL", en: "What to Do in Amsterdam: The REAL Guide", nl: "Wat Te Doen in Amsterdam: De ECHTE Gids" },
  "attractions.description": {
    pt: "Esqueça esses guias genéricos. Amsterdam mudou - não é mais só \"Canais + Luz Vermelha\". Vou te mostrar EXATAMENTE como aproveitar cada canto.",
    en: "Forget those generic guides. Amsterdam has changed - it is no longer just 'Canals + Red Light'. I will show you EXACTLY how to enjoy every corner.",
    nl: "Vergeet die generieke gidsen. Amsterdam is veranderd - het is niet meer alleen 'Grachten + Red Light'. Ik laat je PRECIES zien hoe je van elke hoek kunt genieten."
  },
  "attractions.changesTitle": { pt: "O Que Mudou em 2026:", en: "What Changed in 2026:", nl: "Wat Veranderde in 2026:" },
  "attractions.change1": { pt: "Museu Van Gogh saiu do I amsterdam Card - muda cálculos do passe", en: "Van Gogh Museum left the I amsterdam Card - changes pass calculations", nl: "Van Gogh Museum verliet de I amsterdam Card - verandert pasberekeningen" },
  "attractions.change2": { pt: "Noord, Oost, West se tornaram destinos por si só", en: "Noord, Oost, West became destinations themselves", nl: "Noord, Oost, West werden zelf bestemmingen" },
  "attractions.change3": { pt: "Tudo ficou mais caro e \"premium\"", en: "Everything got more expensive and \"premium\"", nl: "Alles werd duurder en \"premium\"" },
  "attractions.change4": { pt: "WorldPride Amsterdam em agosto 2026 - cidade vai estar LOTADA", en: "WorldPride Amsterdam in August 2026 - city will be PACKED", nl: "WorldPride Amsterdam in augustus 2026 - stad wordt OVERVOL" },
  "attractions.essentials": { pt: "O Essencial", en: "The Essentials", nl: "De Basis" },
  "attractions.essentialsDesc": { pt: "Se você só tem alguns dias, NÃO perca estes.", en: "If you only have a few days, do NOT miss these.", nl: "Als je maar een paar dagen hebt, mis deze NIET." },
  "attractions.worthYourTime": { pt: "Vale Seu Tempo", en: "Worth Your Time", nl: "Waard Je Tijd" },
  "attractions.worthYourTimeDesc": { pt: "Além do óbvio - o que 99% dos turistas perdem.", en: "Beyond the obvious - what 99% of tourists miss.", nl: "Voorbij het voor de hand liggende - wat 99% van de toeristen mist." },
  "attractions.tip": { pt: "Dica:", en: "Tip:", nl: "Tip:" },

  // Food Page
  "food.title": { pt: "Onde Comer em Amsterdam: O Guia Sem Rodeios", en: "Where to Eat in Amsterdam: The No-Nonsense Guide", nl: "Waar Eten in Amsterdam: De No-Nonsense Gids" },
  "food.description": {
    pt: "Amsterdam não é só batatas cozidas e queijo. A cidade tem uma cena gastronômica SÉRIA. Vou te mostrar EXATAMENTE onde ir e como evitar armadilhas turísticas.",
    en: "Amsterdam is not just boiled potatoes and cheese. The city has a SERIOUS food scene. I will show you EXACTLY where to go and how to avoid tourist traps.",
    nl: "Amsterdam is niet alleen gekookte aardappelen en kaas. De stad heeft een SERIEUZE foodscene. Ik laat je PRECIES zien waar je heen moet en hoe je toeristenvallen vermijdt."
  },
  "food.realDeal": {
    pt: "A Verdade: A melhor comida em Amsterdam não está em restaurantes caros. Está em barracas de mercado, padarias de bairro e cafés históricos. O segredo é saber ONDE ir.",
    en: "The Real Deal: The best food in Amsterdam is not in expensive restaurants. It is at market stalls, neighborhood bakeries, and historic cafes. The secret is knowing WHERE to go.",
    nl: "De Waarheid: Het beste eten in Amsterdam zit niet in dure restaurants. Het zit in marktkramen, buurtbakkers en historische cafés. Het geheim is weten WAAR je heen moet."
  },
  "food.streetFood": { pt: "Street Food: O Essencial", en: "Street Food: The Essentials", nl: "Streetfood: De Basis" },
  "food.howToDoItRight": { pt: "Como fazer certo:", en: "How to do it right:", nl: "Hoe je het goed doet:" },
  "food.touristTrap": { pt: "Armadilha turística:", en: "Tourist trap:", nl: "Toeristenval:" },

  // Coffeeshops Page
  "coffeeshops.title": { pt: "Coffeeshops de Amsterdam 2026", en: "Amsterdam Coffeeshops 2026", nl: "Amsterdam Coffeeshops 2026" },
  "coffeeshops.description": {
    pt: "O guia definitivo: entenda a gedoogbeleid (política de tolerância holandesa), regras de 2026, etiqueta e consumo responsável.",
    en: "The definitive guide: understand the gedoogbeleid (Dutch tolerance policy), 2026 rules, etiquette, and responsible consumption.",
    nl: "De definitieve gids: begrijp het gedoogbeleid, 2026-regels, etiquette en verantwoord gebruik."
  },
  "coffeeshops.intro": {
    pt: "Para muitos viajantes, Amsterdam é a capital da cannabis da Europa. Porém, a realidade da cultura das coffeeshops é MUITO mais complexa, nuançada e burocrática do que a maioria imagina. É uma cultura enraizada no pragmatismo holandês único e na redução de danos.",
    en: "For many travelers, Amsterdam is the cannabis capital of Europe. However, the reality of coffeeshop culture is MUCH more complex, nuanced, and bureaucratic than most imagine. It is a culture rooted in unique Dutch pragmatism and harm reduction.",
    nl: "Voor veel reizigers is Amsterdam de cannabishoofdstad van Europa. De realiteit van de coffeeshopscultuur is echter VEEL complexer, genuanceerder en bureaucratischer dan de meesten denken. Het is een cultuur geworteld in uniek Nederlands pragmatisme en schadebeperking."
  },
  "coffeeshops.touristsAllowed": { pt: "SIM, Turistas São Permitidos!", en: "YES, Tourists Are Allowed!", nl: "JA, Toeristen Zijn Welkom!" },
  "coffeeshops.touristsAllowedDesc": {
    pt: "Turistas 18+ com documento válido (Passaporte) são bem-vindos para comprar e consumir nas coffeeshops da cidade. Máximo 5g por compra. Consumo apenas dentro do estabelecimento.",
    en: "Tourists 18+ with a valid ID (Passport) are welcome to buy and consume in the city coffeeshops. Maximum 5g per purchase. Consumption only inside the establishment.",
    nl: "Toeristen 18+ met geldig ID (paspoort) zijn welkom om te kopen en te consumeren in de coffeeshops. Maximaal 5g per aankoop. Consumptie alleen binnen."
  },
  "coffeeshops.essentialRules": { pt: "Regras Essenciais", en: "Essential Rules", nl: "Essentiële Regels" },
  "coffeeshops.rule1": { pt: "18+ com documento válido (passaporte)", en: "18+ with valid ID (passport)", nl: "18+ met geldig ID (paspoort)" },
  "coffeeshops.rule2": { pt: "Máximo 5g por compra por pessoa", en: "Maximum 5g per purchase per person", nl: "Maximaal 5g per aankoop per persoon" },
  "coffeeshops.rule3": { pt: "SEM misturar tabaco desde 2023", en: "NO tobacco mixing since 2023", nl: "GEEN tabak mengen sinds 2023" },
  "coffeeshops.rule4": { pt: "SEM fumar na rua - multas pesadas!", en: "NO smoking on the street - heavy fines!", nl: "NIET roken op straat - hoge boetes!" },
  "coffeeshops.rule5": { pt: "NUNCA compre de vendedores de rua", en: "NEVER buy from street dealers", nl: "NOOIT kopen van straatdealers" },
  "coffeeshops.rule6": { pt: "Edibles levam 1-2 horas para fazer efeito - espere!", en: "Edibles take 1-2 hours to hit - wait!", nl: "Edibles doen er 1-2 uur over - wacht!" },

  // Day Trips Page
  "daytrips.title": { pt: "Bate-volta de Amsterdam", en: "Day Trips from Amsterdam", nl: "Dagtripjes vanuit Amsterdam" },
  "daytrips.description": {
    pt: "A Holanda é pequena e o sistema de trens é fantástico. Em menos de 1 hora, você pode estar em cidades medievais, campos de tulipas ou arquitetura futurista.",
    en: "The Netherlands is small and the train system is fantastic. In less than 1 hour, you can be in medieval cities, tulip fields, or futuristic architecture.",
    nl: "Nederland is klein en het treinsysteem is fantastisch. In minder dan 1 uur kun je in middeleeuwse steden, tulpenvelden of futuristische architectuur zijn."
  },
  "daytrips.mustSee": { pt: "Imperdível", en: "Must See", nl: "Niet Te Missen" },
  "daytrips.classic": { pt: "Clássico", en: "Classic", nl: "Klassiek" },
  "daytrips.seasonal": { pt: "Sazonal", en: "Seasonal", nl: "Seizoensgebonden" },
  "daytrips.modern": { pt: "Moderno", en: "Modern", nl: "Modern" },
  "daytrips.historic": { pt: "Histórico", en: "Historic", nl: "Historisch" },
  "daytrips.miniAmsterdam": { pt: "Mini-Amsterdam", en: "Mini-Amsterdam", nl: "Mini-Amsterdam" },

  // Day Trips Descriptions
  "daytrips.zaanseschans.name": { pt: "Zaanse Schans", en: "Zaanse Schans", nl: "Zaanse Schans" },
  "daytrips.zaanseschans.desc": { pt: "A Holanda dos cartões postais. Moinhos funcionando, queijo, tamancos.", en: "The Netherlands of postcards. Working windmills, cheese, clogs.", nl: "Het Nederland van de ansichtkaarten. Werkende molens, kaas, klompen." },
  "daytrips.keukenhof.name": { pt: "Keukenhof", en: "Keukenhof", nl: "Keukenhof" },
  "daytrips.keukenhof.desc": { pt: "7 milhões de tulipas. Só março-maio. Reserve com antecedência!", en: "7 million tulips. Only March-May. Book ahead!", nl: "7 miljoen tulpen. Alleen maart-mei. Boek vooruit!" },
  "daytrips.giethoorn.name": { pt: "Giethoorn", en: "Giethoorn", nl: "Giethoorn" },
  "daytrips.giethoorn.desc": { pt: "Veneza do Norte. Sem carros, só barcos e pontes.", en: "Venice of the North. No cars, only boats and bridges.", nl: "Venetië van het Noorden. Geen autos, alleen boten en bruggen." },
  "daytrips.haarlem.name": { pt: "Haarlem", en: "Haarlem", nl: "Haarlem" },
  "daytrips.haarlem.desc": { pt: "Tudo que Amsterdam tem, menos as multidões. Ótimos cafés.", en: "Everything Amsterdam has, minus the crowds. Great cafes.", nl: "Alles wat Amsterdam heeft, zonder de drukte. Geweldige cafés." },
  "daytrips.rotterdam.name": { pt: "Rotterdam", en: "Rotterdam", nl: "Rotterdam" },
  "daytrips.rotterdam.desc": { pt: "Arquitetura futurista. Cube houses, Markthal. Contraste total.", en: "Futuristic architecture. Cube houses, Markthal. Total contrast.", nl: "Futuristische architectuur. Kubuswoningen, Markthal. Totaal contrast." },
  "daytrips.delft.name": { pt: "Delft", en: "Delft", nl: "Delft" },
  "daytrips.delft.desc": { pt: "Cerâmica azul, Vermeer, canais charmosos. Muito fotogênica.", en: "Blue pottery, Vermeer, charming canals. Very photogenic.", nl: "Delfts Blauw, Vermeer, charmante grachten. Erg fotogeniek." },

  // Common
  "common.readMore": { pt: "Saiba mais", en: "Read more", nl: "Lees meer" },
  "common.viewAll": { pt: "Ver todos", en: "View all", nl: "Bekijk alles" },
  "common.tip": { pt: "Dica", en: "Tip", nl: "Tip" },
  "common.mustSee": { pt: "Imperdível", en: "Must See", nl: "Niet Missen" },
  "common.free": { pt: "Grátis", en: "Free", nl: "Gratis" },
  "common.realityCheck": { pt: "Realidade 2026:", en: "2026 Reality Check:", nl: "2026 Realiteitscheck:" },
  
  // Footer
  "footer.rights": { pt: "Todos os direitos reservados", en: "All rights reserved", nl: "Alle rechten voorbehouden" },
  "footer.madeWith": { pt: "Feito com", en: "Made with", nl: "Gemaakt met" },
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
