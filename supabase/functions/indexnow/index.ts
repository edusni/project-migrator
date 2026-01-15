import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const INDEXNOW_KEY = "3529f58a7ac448e1af983bc2188900eb";
const SITE_HOST = "amsterdu.com";
const KEY_LOCATION = `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { urls, action } = await req.json();

    // If action is "all", submit all important pages
    let urlsToSubmit: string[] = urls || [];
    
    if (action === "all" || action === "sitemap") {
      // All important pages from the sitemap
      urlsToSubmit = [
        // Home pages
        `https://${SITE_HOST}/pt/index.html`,
        `https://${SITE_HOST}/en/index.html`,
        `https://${SITE_HOST}/nl/index.html`,
        // Main content pages - PT
        `https://${SITE_HOST}/pt/planejamento.html`,
        `https://${SITE_HOST}/pt/hospedagem.html`,
        `https://${SITE_HOST}/pt/atracoes.html`,
        `https://${SITE_HOST}/pt/transporte.html`,
        `https://${SITE_HOST}/pt/gastronomia.html`,
        `https://${SITE_HOST}/pt/coffeeshops.html`,
        `https://${SITE_HOST}/pt/arredores.html`,
        `https://${SITE_HOST}/pt/sobre.html`,
        `https://${SITE_HOST}/pt/custo-de-vida.html`,
        `https://${SITE_HOST}/pt/de-pijp.html`,
        // Main content pages - EN
        `https://${SITE_HOST}/en/planning.html`,
        `https://${SITE_HOST}/en/accommodation.html`,
        `https://${SITE_HOST}/en/attractions.html`,
        `https://${SITE_HOST}/en/transport.html`,
        `https://${SITE_HOST}/en/food.html`,
        `https://${SITE_HOST}/en/coffeeshops.html`,
        `https://${SITE_HOST}/en/daytrips.html`,
        `https://${SITE_HOST}/en/about.html`,
        `https://${SITE_HOST}/en/cost-of-living.html`,
        `https://${SITE_HOST}/en/de-pijp.html`,
        // Main content pages - NL
        `https://${SITE_HOST}/nl/planning.html`,
        `https://${SITE_HOST}/nl/accommodation.html`,
        `https://${SITE_HOST}/nl/attractions.html`,
        `https://${SITE_HOST}/nl/transport.html`,
        `https://${SITE_HOST}/nl/food.html`,
        `https://${SITE_HOST}/nl/coffeeshops.html`,
        `https://${SITE_HOST}/nl/daytrips.html`,
        `https://${SITE_HOST}/nl/about.html`,
        `https://${SITE_HOST}/nl/kosten-van-levensonderhoud.html`,
        `https://${SITE_HOST}/nl/de-pijp.html`,
        // LLM pages
        `https://${SITE_HOST}/llm.html`,
        `https://${SITE_HOST}/llm-en.html`,
        `https://${SITE_HOST}/llm-nl.html`,
        `https://${SITE_HOST}/llms.txt`,
      ];
    }

    if (!urlsToSubmit || urlsToSubmit.length === 0) {
      return new Response(
        JSON.stringify({ error: "No URLs provided. Use 'urls' array or 'action': 'all'" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // IndexNow accepts up to 10,000 URLs per request
    const payload = {
      host: SITE_HOST,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList: urlsToSubmit.slice(0, 10000), // Limit to 10k
    };

    console.log(`Submitting ${payload.urlList.length} URLs to IndexNow...`);

    // Submit to IndexNow API (works for Bing, Yandex, and other participating search engines)
    const response = await fetch("https://api.indexnow.org/IndexNow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    const statusCode = response.status;
    let message = "";
    
    switch (statusCode) {
      case 200:
        message = "URLs submitted successfully!";
        break;
      case 202:
        message = "URLs accepted for processing";
        break;
      case 400:
        message = "Bad request - invalid format";
        break;
      case 403:
        message = "Forbidden - key not valid";
        break;
      case 422:
        message = "Unprocessable - URLs don't belong to host or key mismatch";
        break;
      case 429:
        message = "Too many requests - potential spam";
        break;
      default:
        message = `Unexpected response: ${statusCode}`;
    }

    console.log(`IndexNow response: ${statusCode} - ${message}`);

    return new Response(
      JSON.stringify({
        success: statusCode === 200 || statusCode === 202,
        statusCode,
        message,
        urlsSubmitted: payload.urlList.length,
        urls: payload.urlList,
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("IndexNow error:", errorMessage);
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
