import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
};

// Bot User-Agent patterns
const BOT_PATTERNS = [
  'googlebot',
  'bingbot',
  'yandexbot',
  'duckduckbot',
  'slurp', // Yahoo
  'baiduspider',
  'facebookexternalhit',
  'twitterbot',
  'linkedinbot',
  'applebot',
  'msnbot',
  'pinterest',
  'whatsapp',
  'telegrambot',
  'discordbot',
  'slackbot',
  'rogerbot',
  'embedly',
  'quora link preview',
  'showyoubot',
  'outbrain',
  'vkShare',
  'W3C_Validator',
  'redditbot',
  'sogou',
  'exabot',
  'ia_archiver',
  'archive.org_bot',
  'petalbot',
  'semrushbot',
  'ahrefsbot',
  'dotbot',
  'screaming frog',
];

// Static HTML page mappings
const STATIC_PAGES: Record<string, Record<string, string>> = {
  en: {
    '': '/en/index.html',
    '/': '/en/index.html',
    '/planejamento': '/en/planning.html',
    '/coffeeshops': '/en/coffeeshops.html',
    '/hospedagem': '/en/accommodation.html',
  },
  // Portuguese uses llm.html as fallback
  pt: {
    '': '/llm.html',
    '/': '/llm.html',
  },
  // Dutch uses llm-nl.html as fallback  
  nl: {
    '': '/llm-nl.html',
    '/': '/llm-nl.html',
  }
};

const BASE_URL = "https://amsterdu.com";

function isBot(userAgent: string): boolean {
  const lowerUA = userAgent.toLowerCase();
  return BOT_PATTERNS.some(pattern => lowerUA.includes(pattern));
}

function parseLocalePath(path: string): { locale: string; pagePath: string } {
  const match = path.match(/^\/(pt|en|nl)(\/.*)?$/);
  if (match) {
    return {
      locale: match[1],
      pagePath: match[2] || ''
    };
  }
  return { locale: 'pt', pagePath: path };
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const path = url.searchParams.get('path') || '/';
    const userAgent = req.headers.get('user-agent') || '';
    
    console.log(`[Prerender] Path: ${path}, UA: ${userAgent.substring(0, 50)}...`);
    
    // Check if it's a bot
    const isBotRequest = isBot(userAgent);
    
    if (!isBotRequest) {
      // Not a bot - return redirect to SPA
      return new Response(JSON.stringify({ 
        redirect: true,
        url: `${BASE_URL}${path}`,
        reason: 'not_a_bot'
      }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    
    // It's a bot - find the appropriate static page
    const { locale, pagePath } = parseLocalePath(path);
    const localePages = STATIC_PAGES[locale] || STATIC_PAGES['pt'];
    const staticPath = localePages[pagePath];
    
    if (staticPath) {
      // Fetch the static HTML
      const staticUrl = `${BASE_URL}${staticPath}`;
      console.log(`[Prerender] Serving static page: ${staticUrl}`);
      
      const response = await fetch(staticUrl);
      const html = await response.text();
      
      return new Response(html, {
        headers: {
          ...corsHeaders,
          "Content-Type": "text/html; charset=utf-8",
          "Cache-Control": "public, max-age=3600",
          "X-Prerender": "true",
        },
      });
    }
    
    // No static page available - return info for fallback
    console.log(`[Prerender] No static page for: ${path}, locale: ${locale}, pagePath: ${pagePath}`);
    
    return new Response(JSON.stringify({ 
      redirect: true,
      url: `${BASE_URL}${path}`,
      reason: 'no_static_page',
      availablePages: Object.keys(localePages)
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("[Prerender] Error:", errorMessage);
    return new Response(JSON.stringify({ 
      error: "Prerender failed",
      message: errorMessage 
    }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
