import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Types
interface FAQItem {
  q: string;
  a: string;
}

interface Section {
  title: string;
  content: string;
}

interface RelatedPage {
  url: string;
  title: string;
}

interface PageContent {
  title: string;
  description: string;
  h1: string;
  subtitle: string;
  intro: string;
  sections: Section[];
  faq: FAQItem[];
  relatedPages: RelatedPage[];
}

type LanguageCode = 'pt' | 'en' | 'nl';
type PageName = 'coffeeshops';

// Page content definitions - this is the source of truth for static HTML generation
const pageContent: Record<PageName, Record<LanguageCode, PageContent>> = {
  coffeeshops: {
    pt: {
      title: "Regras de Coffeeshops em Amsterdam (Turistas) 2026: onde pode fumar e como evitar multa",
      description: "Entenda as regras de coffeeshops em Amsterdam em 2026: idade, limite de compra (5g), onde é proibido fumar (multa até €100) e etiqueta para não passar perrengue. Lista por bairros.",
      h1: "Regras de Coffeeshops em Amsterdam 2026",
      subtitle: "Onde pode fumar, limite de compra (5g) e como evitar multa de até €100.",
      intro: "Turista pode entrar em coffeeshop em Amsterdam em 2026, desde que tenha 18+ e documento. O limite é 5g por pessoa, e fumar na rua em áreas centrais como Red Light District pode gerar multa de até €100. Neste guia você vê onde pode, onde não pode e como consumir sem dor de cabeça.",
      sections: [
        {
          title: "O Que é um Coffeeshop?",
          content: `<p>Coffeeshop, em Amsterdam, é um estabelecimento licenciado para vender cannabis sob regras de tolerância (Gedoogbeleid). A cannabis NÃO é "totalmente legal" — é <strong>descriminalizada e TOLERADA</strong> sob condições estritas.</p>
          <p><strong>Importante:</strong> "Coffeeshop" (uma palavra) vende cannabis. "Coffee shop" ou "Koffiehuis" (duas palavras) serve apenas café e bolos — SEM cannabis!</p>`
        },
        {
          title: "Turistas Podem Comprar?",
          content: `<div class="card">
            <h3>✅ SIM, Turistas São Permitidos!</h3>
            <p>Em Amsterdam, isso é permitido. A regra de residência (wietpas) varia por município na Holanda, mas Amsterdam optou CONSCIENTEMENTE por NÃO implementar esta proibição.</p>
            <p><strong>Requisitos:</strong> Idade mínima 18 anos. Leve documento com foto (passaporte resolve).</p>
          </div>`
        },
        {
          title: "A Regra Mais Importante de 2026: Onde Você NÃO Pode Fumar",
          content: `<div class="danger">
            <strong>⚠️ Zonas Proibidas (Multa até €100!):</strong>
            <ul>
              <li>Red Light District (De Wallen)</li>
              <li>Praça Dam</li>
              <li>Damrak</li>
              <li>Nieuwmarkt</li>
            </ul>
            <p>O lugar mais seguro para consumir no centro é DENTRO do coffeeshop (se houver lounge) ou em local privado permitido.</p>
          </div>`
        },
        {
          title: "Gedoogbeleid: A Política de Tolerância",
          content: `<p>"Gedoogbeleid" significa "Política de Tolerância". Criada nos anos 1970 como solução pragmática de SAÚDE PÚBLICA para separar mercados de drogas "leves" (cannabis) das "pesadas" (heroína, cocaína).</p>
          <h4>Critérios AHOJG (A Lei dos Coffeeshops)</h4>
          <ul>
            <li><strong>A</strong> - Geen Advertising: PROIBIDO fazer publicidade</li>
            <li><strong>H</strong> - Geen Harddrugs: PROIBIDO vender drogas pesadas</li>
            <li><strong>O</strong> - Geen Overlast: PROIBIDO causar perturbação</li>
            <li><strong>J</strong> - Geen Jeugdigen: PROIBIDO vender a menores de 18</li>
            <li><strong>G</strong> - Geen Grote hoeveelheden: PROIBIDO vender mais de 5g/pessoa ou ter mais de 500g em estoque</li>
          </ul>`
        },
        {
          title: "Etiqueta do Coffeeshop",
          content: `<div class="card">
            <h4>Os 6 Passos</h4>
            <ol>
              <li><strong>A Porta:</strong> Tenha identificação pronta (passaporte). Entrada estritamente 18+.</li>
              <li><strong>O Balcão:</strong> Aproxime-se do balcão onde a cannabis é vendida. O "budtender" é seu GUIA!</li>
              <li><strong>O Menu:</strong> Peça para ver o menu. Dividido por: Weed, Hash, Edibles, Pre-rolled.</li>
              <li><strong>O Pedido:</strong> NÃO apenas aponte para um nome! Diga os EFEITOS que procura: "Algo relaxante" ou "Sou iniciante, o que você recomenda?"</li>
              <li><strong>A Compra:</strong> Limite legal: 5g por pessoa/dia. Dinheiro é mais seguro.</li>
              <li><strong>A Estadia:</strong> Se planeja ficar, vá ao balcão do BAR e compre uma bebida. É boa educação!</li>
            </ol>
          </div>
          <div class="danger">
            <strong>❌ NÃO Faça:</strong>
            <ul>
              <li>NÃO Fume Tabaco — é ILEGAL fumar tabaco em estabelecimentos públicos na Holanda!</li>
              <li>NÃO Consuma Álcool — coffeeshops são PROIBIDOS de vender álcool</li>
              <li>NÃO Tire Fotos — respeite a privacidade dos outros</li>
            </ul>
          </div>`
        },
        {
          title: "Edibles (Space Cakes): Cuidado!",
          content: `<div class="warning">
            <strong>O Erro Clássico:</strong> Comer mais após 30 minutos porque "não está funcionando". Edibles levam 20 minutos a 2 HORAS para fazer efeito!
            <ul>
              <li>Comece com uma porção PEQUENA (1/4 de um brownie)</li>
              <li>Espere PELO MENOS 90 minutos antes de repetir</li>
              <li>Pergunte ao budtender a DOSAGEM</li>
            </ul>
          </div>`
        },
        {
          title: "Preços em 2026 (Médias)",
          content: `<table>
            <tr><th>Produto</th><th>Faixa de Preço</th></tr>
            <tr><td>Weed (1g)</td><td>€8 - €20</td></tr>
            <tr><td>Hash (1g)</td><td>€10 - €25</td></tr>
            <tr><td>Pré-enrolado</td><td>€4 - €8</td></tr>
            <tr><td>Space Cake</td><td>€5 - €15</td></tr>
          </table>
          <p><em>No centro é mais caro. Fora do centro turístico, qualidade melhor por preço menor.</em></p>`
        },
        {
          title: "Guia por Bairro",
          content: `<div class="card">
            <h4>🏙️ Centrum (Armadilha Turística)</h4>
            <p>LOTADO, barulhento, preços inflacionados. É NESTA área que a proibição de fumar em público está em vigor!</p>
            <p><strong>Shops:</strong> The Bulldog (histórico), Grey Area (filas), Dampkring (filme Ocean's 12), Coffeeshop Amsterdam (iniciantes)</p>
          </div>
          <div class="card">
            <h4>🎨 Jordaan (Charme Boêmio)</h4>
            <p>Artística, histórica, canais pitorescos, ruas calmas. Vibe relaxada.</p>
            <p><strong>Shops:</strong> Siberië (lounge), Tweede Kamer (clássico), Paradox (space cakes), La Tertulia (orgânico)</p>
          </div>
          <div class="card">
            <h4>❤️ De Pijp (Favorito dos Locais)</h4>
            <p>Coração boêmio e MULTICULTURAL. Albert Cuypmarkt. FAVORECIDO PELOS LOCAIS!</p>
            <p><strong>Shops:</strong> Katsu (favorito absoluto), Coffeeshop IBIZA (2 andares), Yo-Yo, Club Media</p>
          </div>
          <div class="card">
            <h4>🏠 West/Oost (Melhor Preço)</h4>
            <p>Áreas residenciais. Qualidade ALTA, preços MELHORES que no centro!</p>
            <p><strong>Shops:</strong> Boerejongens (luxo), 1e Hulp (potência), The Stud (desde 1982)</p>
          </div>`
        },
        {
          title: "Glossário",
          content: `<table>
            <tr><th>Termo</th><th>Definição</th></tr>
            <tr><td>Budtender</td><td>Funcionário que vende cannabis no balcão</td></tr>
            <tr><td>Gedoogbeleid</td><td>A política de tolerância holandesa</td></tr>
            <tr><td>Haze</td><td>Família de strains Sativa (energéticas)</td></tr>
            <tr><td>Kush</td><td>Família de strains Indica (relaxantes)</td></tr>
            <tr><td>Space Cake</td><td>Comestível com infusão de cannabis</td></tr>
            <tr><td>Spliff</td><td>Joint misturado com tabaco (ILEGAL fumar dentro!)</td></tr>
            <tr><td>Pure Joint</td><td>Joint contendo APENAS cannabis</td></tr>
            <tr><td>Koffiehuis</td><td>Casa de café (SEM cannabis!)</td></tr>
          </table>`
        }
      ],
      faq: [
        { q: "Maconha é legal em Amsterdam?", a: "Não é 'legalizada'. O que existe é tolerância (Gedoogbeleid) sob regras estritas em coffeeshops licenciados." },
        { q: "Turista pode comprar em coffeeshops?", a: "Em Amsterdam, sim. Leve documento (18+) e siga as regras." },
        { q: "Posso fumar na rua?", a: "No centro e Red Light District, a cidade proibiu o consumo em espaços públicos. Multa até €100. Prefira consumir em locais apropriados." },
        { q: "Posso fumar tabaco dentro do coffeeshop?", a: "NÃO! É ilegal fumar tabaco em qualquer estabelecimento público na Holanda." },
        { q: "Qual é o maior erro com space cake?", a: "Repetir dose cedo demais. Espere pelo menos 90 minutos." },
        { q: "Quanto posso comprar?", a: "O limite é 5g por pessoa por dia." },
        { q: "Posso levar para outro país?", a: "NÃO! Regras de fronteira são rigorosas. Consuma onde é permitido." },
        { q: "Quais são os melhores coffeeshops?", a: "Iniciantes: Katsu, Coffeeshop Amsterdam. Premium: Grey Area, Boerejongens. Relaxar: Siberië, Paradox." }
      ],
      relatedPages: [
        { url: "/pt/planejamento.html", title: "Planejamento da Viagem" },
        { url: "/pt/hospedagem.html", title: "Onde Ficar" },
        { url: "/pt/transporte.html", title: "Como se Locomover" },
        { url: "/pt/gastronomia.html", title: "Guia de Gastronomia" }
      ]
    },
    en: {
      title: "Amsterdam Coffeeshop Rules for Tourists 2026: where to smoke and how to avoid fines",
      description: "Understand Amsterdam coffeeshop rules in 2026: age, purchase limit (5g), where smoking is banned (fines up to €100) and etiquette. Neighborhood guide included.",
      h1: "Amsterdam Coffeeshop Rules 2026",
      subtitle: "Where you can smoke, purchase limits and how to avoid fines up to €100.",
      intro: "Tourists can enter coffeeshops in Amsterdam in 2026, as long as they're 18+ with valid ID. The limit is 5g per person, and smoking on the street in central areas like the Red Light District can result in fines up to €100. In this guide you'll see where you can, where you can't, and how to consume without trouble.",
      sections: [
        {
          title: "What is a Coffeeshop?",
          content: `<p>A coffeeshop in Amsterdam is a licensed establishment to sell cannabis under tolerance rules (Gedoogbeleid). Cannabis is NOT "fully legal" — it's <strong>decriminalized and TOLERATED</strong> under strict conditions.</p>
          <p><strong>Important:</strong> "Coffeeshop" (one word) sells cannabis. "Coffee shop" or "Koffiehuis" (two words) only serves coffee and cakes — NO cannabis!</p>`
        },
        {
          title: "Can Tourists Buy?",
          content: `<div class="card">
            <h3>✅ YES, Tourists Are Allowed!</h3>
            <p>In Amsterdam, this is permitted. The residency rule (wietpas) varies by municipality in the Netherlands, but Amsterdam CONSCIOUSLY chose NOT to implement this ban.</p>
            <p><strong>Requirements:</strong> Minimum age 18. Bring photo ID (passport works).</p>
          </div>`
        },
        {
          title: "The Most Important Rule of 2026: Where You CAN'T Smoke",
          content: `<div class="danger">
            <strong>⚠️ Banned Zones (Fine up to €100!):</strong>
            <ul>
              <li>Red Light District (De Wallen)</li>
              <li>Dam Square</li>
              <li>Damrak</li>
              <li>Nieuwmarkt</li>
            </ul>
            <p>The safest place to consume in the center is INSIDE the coffeeshop (if there's a lounge) or in a permitted private location.</p>
          </div>`
        },
        {
          title: "Gedoogbeleid: The Tolerance Policy",
          content: `<p>"Gedoogbeleid" means "Tolerance Policy". Created in the 1970s as a pragmatic PUBLIC HEALTH solution to separate "soft" drug markets (cannabis) from "hard" ones (heroin, cocaine).</p>
          <h4>AHOJG Criteria (The Coffeeshop Law)</h4>
          <ul>
            <li><strong>A</strong> - No Advertising: FORBIDDEN to advertise</li>
            <li><strong>H</strong> - No Harddrugs: FORBIDDEN to sell hard drugs</li>
            <li><strong>O</strong> - No Overlast: FORBIDDEN to cause disturbance</li>
            <li><strong>J</strong> - No Jeugdigen: FORBIDDEN to sell to under 18</li>
            <li><strong>G</strong> - No Grote hoeveelheden: FORBIDDEN to sell more than 5g/person or stock more than 500g</li>
          </ul>`
        },
        {
          title: "Coffeeshop Etiquette",
          content: `<div class="card">
            <h4>The 6 Steps</h4>
            <ol>
              <li><strong>The Door:</strong> Have your ID ready (passport). Entry strictly 18+.</li>
              <li><strong>The Counter:</strong> Approach the counter where cannabis is sold. The "budtender" is your GUIDE!</li>
              <li><strong>The Menu:</strong> Ask to see the menu. Divided by: Weed, Hash, Edibles, Pre-rolled.</li>
              <li><strong>The Order:</strong> DON'T just point to a name! State the EFFECTS you want: "Something relaxing" or "I'm a beginner, what do you recommend?"</li>
              <li><strong>The Purchase:</strong> Legal limit: 5g per person/day. Cash is safer.</li>
              <li><strong>The Stay:</strong> If you plan to stay, go to the BAR counter and buy a drink. It's good etiquette!</li>
            </ol>
          </div>
          <div class="danger">
            <strong>❌ DON'T:</strong>
            <ul>
              <li>DON'T Smoke Tobacco — it's ILLEGAL to smoke tobacco in public establishments in the Netherlands!</li>
              <li>DON'T Consume Alcohol — coffeeshops are FORBIDDEN from selling alcohol</li>
              <li>DON'T Take Photos — respect others' privacy</li>
            </ul>
          </div>`
        },
        {
          title: "Edibles (Space Cakes): Be Careful!",
          content: `<div class="warning">
            <strong>The Classic Mistake:</strong> Eating more after 30 minutes because "it's not working". Edibles take 20 minutes to 2 HOURS to kick in!
            <ul>
              <li>Start with a SMALL portion (1/4 of a brownie)</li>
              <li>Wait AT LEAST 90 minutes before repeating</li>
              <li>Ask the budtender for DOSAGE</li>
            </ul>
          </div>`
        },
        {
          title: "2026 Prices (Averages)",
          content: `<table>
            <tr><th>Product</th><th>Price Range</th></tr>
            <tr><td>Weed (1g)</td><td>€8 - €20</td></tr>
            <tr><td>Hash (1g)</td><td>€10 - €25</td></tr>
            <tr><td>Pre-rolled</td><td>€4 - €8</td></tr>
            <tr><td>Space Cake</td><td>€5 - €15</td></tr>
          </table>
          <p><em>Center is more expensive. Outside tourist areas, better quality at lower prices.</em></p>`
        },
        {
          title: "Neighborhood Guide",
          content: `<div class="card">
            <h4>🏙️ Centrum (Tourist Trap)</h4>
            <p>CROWDED, noisy, inflated prices. This is where the public smoking ban is in effect!</p>
            <p><strong>Shops:</strong> The Bulldog (historic), Grey Area (queues), Dampkring (Ocean's 12 movie), Coffeeshop Amsterdam (beginners)</p>
          </div>
          <div class="card">
            <h4>🎨 Jordaan (Bohemian Charm)</h4>
            <p>Artistic, historic, picturesque canals, calm streets. Relaxed vibe.</p>
            <p><strong>Shops:</strong> Siberië (lounge), Tweede Kamer (classic), Paradox (space cakes), La Tertulia (organic)</p>
          </div>
          <div class="card">
            <h4>❤️ De Pijp (Local Favorite)</h4>
            <p>Bohemian and MULTICULTURAL heart. Albert Cuypmarkt. FAVORED BY LOCALS!</p>
            <p><strong>Shops:</strong> Katsu (absolute favorite), Coffeeshop IBIZA (2 floors), Yo-Yo, Club Media</p>
          </div>
          <div class="card">
            <h4>🏠 West/Oost (Best Value)</h4>
            <p>Residential areas. HIGH quality, BETTER prices than downtown!</p>
            <p><strong>Shops:</strong> Boerejongens (luxury), 1e Hulp (potency), The Stud (since 1982)</p>
          </div>`
        },
        {
          title: "Glossary",
          content: `<table>
            <tr><th>Term</th><th>Definition</th></tr>
            <tr><td>Budtender</td><td>Staff who sells cannabis at the counter</td></tr>
            <tr><td>Gedoogbeleid</td><td>Dutch tolerance policy</td></tr>
            <tr><td>Haze</td><td>Sativa strain family (energetic)</td></tr>
            <tr><td>Kush</td><td>Indica strain family (relaxing)</td></tr>
            <tr><td>Space Cake</td><td>Cannabis-infused edible</td></tr>
            <tr><td>Spliff</td><td>Joint mixed with tobacco (ILLEGAL to smoke inside!)</td></tr>
            <tr><td>Pure Joint</td><td>Joint containing ONLY cannabis</td></tr>
            <tr><td>Koffiehuis</td><td>Coffee house (NO cannabis!)</td></tr>
          </table>`
        }
      ],
      faq: [
        { q: "Is weed legal in Amsterdam?", a: "It's not 'legalized'. What exists is tolerance (Gedoogbeleid) under strict rules at licensed coffeeshops." },
        { q: "Can tourists buy at coffeeshops?", a: "In Amsterdam, yes. Bring ID (18+) and follow the rules." },
        { q: "Can I smoke on the street?", a: "In the center and Red Light District, the city banned public consumption. Fine up to €100. Prefer appropriate venues." },
        { q: "Can I smoke tobacco inside the coffeeshop?", a: "NO! It's illegal to smoke tobacco in any public establishment in the Netherlands." },
        { q: "What's the biggest mistake with space cake?", a: "Repeating dose too early. Wait at least 90 minutes." },
        { q: "How much can I buy?", a: "The limit is 5g per person per day." },
        { q: "Can I take it to another country?", a: "NO! Border rules are strict. Consume where it's allowed." },
        { q: "What are the best coffeeshops?", a: "Beginners: Katsu, Coffeeshop Amsterdam. Premium: Grey Area, Boerejongens. Relax: Siberië, Paradox." }
      ],
      relatedPages: [
        { url: "/en/planning.html", title: "Trip Planning" },
        { url: "/en/accommodation.html", title: "Where to Stay" },
        { url: "/en/transport.html", title: "Getting Around" },
        { url: "/en/food.html", title: "Food Guide" }
      ]
    },
    nl: {
      title: "Amsterdam Coffeeshop Regels voor Toeristen 2026: waar roken en hoe boetes te vermijden",
      description: "Begrijp Amsterdam coffeeshop regels in 2026: leeftijd, aankoop limiet (5g), waar roken verboden is (boetes tot €100) en etiquette. Buurtgids inbegrepen.",
      h1: "Amsterdam Coffeeshop Regels 2026",
      subtitle: "Waar je kunt roken, aankooplimieten en hoe je boetes tot €100 vermijdt.",
      intro: "Toeristen kunnen in 2026 coffeeshops in Amsterdam bezoeken, zolang ze 18+ zijn met geldig ID. De limiet is 5g per persoon, en roken op straat in centrale gebieden zoals de Red Light District kan boetes tot €100 opleveren.",
      sections: [
        {
          title: "Wat is een Coffeeshop?",
          content: `<p>Een coffeeshop in Amsterdam is een gelicentieerde vestiging om cannabis te verkopen onder gedoogregels (Gedoogbeleid). Cannabis is NIET "volledig legaal" — het is <strong>gedecriminaliseerd en GEDOOGD</strong> onder strikte voorwaarden.</p>`
        },
        {
          title: "Mogen Toeristen Kopen?",
          content: `<div class="card">
            <h3>✅ JA, Toeristen Zijn Toegestaan!</h3>
            <p>In Amsterdam is dit toegestaan. De ingezetenenregeling (wietpas) varieert per gemeente, maar Amsterdam koos BEWUST om dit verbod NIET te implementeren.</p>
          </div>`
        },
        {
          title: "De Belangrijkste Regel van 2026: Waar Je NIET Mag Roken",
          content: `<div class="danger">
            <strong>⚠️ Verboden Zones (Boete tot €100!):</strong>
            <ul>
              <li>Red Light District (De Wallen)</li>
              <li>Dam</li>
              <li>Damrak</li>
              <li>Nieuwmarkt</li>
            </ul>
          </div>`
        }
      ],
      faq: [
        { q: "Is wiet legaal in Amsterdam?", a: "Het is niet 'gelegaliseerd'. Wat bestaat is gedogen onder strikte regels bij gelicentieerde coffeeshops." },
        { q: "Mogen toeristen kopen bij coffeeshops?", a: "In Amsterdam, ja. Neem ID mee (18+) en volg de regels." },
        { q: "Mag ik op straat roken?", a: "In het centrum is openbaar gebruik verboden. Boete tot €100." }
      ],
      relatedPages: [
        { url: "/nl/planning.html", title: "Reisplanning" },
        { url: "/nl/accommodation.html", title: "Waar Verblijven" },
        { url: "/nl/transport.html", title: "Vervoer" },
        { url: "/nl/food.html", title: "Eten Gids" }
      ]
    }
  }
};

const footerLangs: Record<LanguageCode, Record<LanguageCode, string>> = {
  pt: { pt: 'Português', en: 'English', nl: 'Nederlands' },
  en: { pt: 'Português', en: 'English', nl: 'Nederlands' },
  nl: { pt: 'Português', en: 'English', nl: 'Nederlands' }
};

// HTML Template generator
function generateHTML(page: PageName, lang: LanguageCode): string {
  const content = pageContent[page]?.[lang];
  if (!content) return '';

  const langCode = lang === 'pt' ? 'pt-BR' : lang === 'nl' ? 'nl-NL' : 'en';
  const ogLocale = lang === 'pt' ? 'pt_BR' : lang === 'nl' ? 'nl_NL' : 'en_US';
  
  const alternates = (['pt', 'en', 'nl'] as LanguageCode[]).map(l => {
    const hreflang = l === 'pt' ? 'pt-BR' : l === 'nl' ? 'nl-NL' : 'en';
    return `<link rel="alternate" hreflang="${hreflang}" href="https://amsterdu.com/${l}/${page}.html">`;
  }).join('\n    ');

  const faqSchema = content.faq?.length ? `
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            ${content.faq.map((item: FAQItem) => `{
                "@type": "Question",
                "name": "${item.q.replace(/"/g, '\\"')}",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "${item.a.replace(/"/g, '\\"')}"
                }
            }`).join(',\n            ')}
        ]
    }
    </script>` : '';

  const sectionsHTML = content.sections?.map((section: Section) => `
        <section>
            <h2>${section.title}</h2>
            ${section.content}
        </section>`).join('\n') || '';

  const faqHTML = content.faq?.length ? `
        <section>
            <h2>${lang === 'pt' ? 'Perguntas Frequentes' : lang === 'nl' ? 'Veelgestelde Vragen' : 'Frequently Asked Questions'}</h2>
            ${content.faq.map((item: FAQItem) => `
            <div class="card">
                <h3>${item.q}</h3>
                <p>${item.a}</p>
            </div>`).join('\n')}
        </section>` : '';

  const relatedHTML = content.relatedPages?.length ? `
        <section>
            <h2>${lang === 'pt' ? 'Continue Lendo' : lang === 'nl' ? 'Lees Verder' : 'Continue Reading'}</h2>
            <ul>
                ${content.relatedPages.map((p: RelatedPage) => `<li><a href="${p.url}">${p.title}</a></li>`).join('\n                ')}
            </ul>
        </section>` : '';

  return `<!DOCTYPE html>
<html lang="${langCode}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${content.title}</title>
    <meta name="description" content="${content.description}">
    <meta name="robots" content="index, follow, max-image-preview:large">
    <meta name="author" content="Du">
    
    <link rel="canonical" href="https://amsterdu.com/${lang}/${page}.html">
    ${alternates}
    <link rel="alternate" hreflang="x-default" href="https://amsterdu.com/pt/${page}.html">
    
    <meta property="og:title" content="${content.h1} | Amsterdu">
    <meta property="og:description" content="${content.description}">
    <meta property="og:url" content="https://amsterdu.com/${lang}/${page}.html">
    <meta property="og:image" content="https://amsterdu.com/og-image.jpg">
    <meta property="og:type" content="article">
    <meta property="og:locale" content="${ogLocale}">
    
    <link rel="icon" type="image/png" href="/favicon.png">
    <meta name="theme-color" content="#F97316">
    
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: system-ui, -apple-system, sans-serif; line-height: 1.7; color: #1a1a1a; background: #fff; }
        .container { max-width: 900px; margin: 0 auto; padding: 0 20px; }
        header { background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); color: white; padding: 60px 0; text-align: center; }
        h1 { font-size: 2.5rem; margin-bottom: 1rem; color: #F97316; }
        .breadcrumb { margin-bottom: 20px; font-size: 0.9rem; }
        .breadcrumb a { color: #F97316; }
        main { padding: 40px 0; }
        section { margin-bottom: 50px; }
        h2 { font-size: 1.75rem; color: #1a1a1a; margin-bottom: 1.5rem; border-left: 4px solid #F97316; padding-left: 15px; }
        h3 { font-size: 1.25rem; color: #F97316; margin: 20px 0 10px; }
        h4 { font-size: 1.1rem; color: #1a1a1a; margin: 20px 0 10px; }
        p { margin-bottom: 1rem; color: #444; }
        ul, ol { margin-left: 20px; margin-bottom: 1rem; }
        li { padding: 5px 0; color: #444; }
        a { color: #F97316; }
        .card { background: #f9f9f9; padding: 25px; border-radius: 12px; border: 1px solid #eee; margin-bottom: 20px; }
        .warning { background: linear-gradient(135deg, #fff3e6, #fff9f0); border-left: 4px solid #F97316; padding: 20px 25px; margin: 25px 0; border-radius: 0 12px 12px 0; }
        .danger { background: linear-gradient(135deg, #fee, #fff5f5); border-left: 4px solid #e53e3e; padding: 20px 25px; margin: 25px 0; border-radius: 0 12px 12px 0; }
        table { width: 100%; border-collapse: collapse; margin: 20px 0; border-radius: 12px; overflow: hidden; }
        th, td { padding: 14px 16px; text-align: left; border-bottom: 1px solid #eee; }
        th { background: linear-gradient(135deg, #1a1a1a, #2d2d2d); color: white; }
        footer { background: #1a1a1a; color: white; padding: 30px 0; text-align: center; margin-top: 60px; }
        footer a { color: #F97316; }
        @media (max-width: 768px) { h1 { font-size: 1.75rem; } }
    </style>
    ${faqSchema}
</head>
<body>
    <header>
        <div class="container">
            <p class="breadcrumb"><a href="/${lang}/index.html">Home</a> → ${content.h1.split(' ')[0]}</p>
            <h1>${content.h1}</h1>
            <p>${content.subtitle}</p>
        </div>
    </header>
    
    <main class="container">
        <div class="warning">
            <strong>${lang === 'pt' ? 'Resposta rápida:' : lang === 'nl' ? 'Snel antwoord:' : 'Quick answer:'}</strong> ${content.intro}
        </div>
        ${sectionsHTML}
        ${faqHTML}
        ${relatedHTML}
    </main>
    
    <footer>
        <div class="container">
            <p>© 2026 Amsterdu — ${lang === 'pt' ? 'O Guia Brutalmente Honesto de Amsterdam' : lang === 'nl' ? 'De Brutaal Eerlijke Gids van Amsterdam' : 'The Brutally Honest Amsterdam Guide'}</p>
            <p><a href="/pt/${page}.html">${footerLangs[lang].pt}</a> | <a href="/en/${page}.html">${footerLangs[lang].en}</a> | <a href="/nl/${page}.html">${footerLangs[lang].nl}</a></p>
        </div>
    </footer>
</body>
</html>`;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const page = (url.searchParams.get('page') || 'coffeeshops') as PageName;
    const langParam = url.searchParams.get('lang') || 'all';
    const action = url.searchParams.get('action') || 'preview';
    
    console.log(`[Generate Static HTML] Page: ${page}, Lang: ${langParam}, Action: ${action}`);
    
    const languages: LanguageCode[] = langParam === 'all' ? ['pt', 'en', 'nl'] : [langParam as LanguageCode];
    const results: Record<string, string> = {};
    
    for (const l of languages) {
      const html = generateHTML(page, l);
      if (html) {
        results[l] = html;
      }
    }
    
    if (action === 'preview') {
      return new Response(JSON.stringify({
        success: true,
        page,
        languages: Object.keys(results),
        preview: Object.fromEntries(
          Object.entries(results).map(([lang, html]) => [
            lang,
            {
              length: html.length,
              firstLines: html.split('\n').slice(0, 20).join('\n'),
              title: html.match(/<title>(.*?)<\/title>/)?.[1] || ''
            }
          ])
        ),
        message: "Use action=download to get full HTML files"
      }, null, 2), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    
    if (action === 'download') {
      if (languages.length === 1) {
        return new Response(results[languages[0]], {
          headers: {
            ...corsHeaders,
            "Content-Type": "text/html; charset=utf-8",
            "Content-Disposition": `attachment; filename="${page}-${languages[0]}.html"`
          },
        });
      }
      
      return new Response(JSON.stringify({
        success: true,
        files: results
      }, null, 2), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    
    return new Response(JSON.stringify({
      error: "Invalid action. Use 'preview' or 'download'",
      availablePages: Object.keys(pageContent),
      availableLanguages: ['pt', 'en', 'nl', 'all']
    }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("[Generate Static HTML] Error:", errorMessage);
    return new Response(JSON.stringify({ 
      error: "Generation failed",
      message: errorMessage 
    }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
