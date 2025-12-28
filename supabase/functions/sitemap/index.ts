import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
};

// Prerendered HTML pages with specific last edit dates
// UPDATE THESE DATES when you edit the corresponding pages!
const htmlPages: Record<string, string> = {
  "en/index.html": "2024-12-22",
  "en/planning.html": "2024-12-28", // Updated ETIAS info
  "en/coffeeshops.html": "2024-12-27", // SEO optimizations
  "en/attractions.html": "2024-12-22",
  "en/transport.html": "2024-12-22",
  "en/food.html": "2024-12-22",
  "en/daytrips.html": "2024-12-22",
  "en/about.html": "2024-12-22",
  "en/accommodation.html": "2024-12-22",
  "en/cost-of-living.html": "2024-12-22",
  "en/de-pijp.html": "2024-12-22",
  "nl/index.html": "2024-12-22",
  "nl/planning.html": "2024-12-28", // Updated ETIAS info
  "nl/coffeeshops.html": "2024-12-27",
  "nl/attractions.html": "2024-12-22",
  "nl/transport.html": "2024-12-22",
  "nl/food.html": "2024-12-22",
  "nl/daytrips.html": "2024-12-22",
  "nl/about.html": "2024-12-22",
  "nl/accommodation.html": "2024-12-22",
  "nl/kosten-van-levensonderhoud.html": "2024-12-22",
  "nl/de-pijp.html": "2024-12-22",
  "pt/index.html": "2024-12-22",
  "pt/planejamento.html": "2024-12-28", // Updated ETIAS info
  "pt/coffeeshops.html": "2024-12-27",
  "pt/atracoes.html": "2024-12-22",
  "pt/transporte.html": "2024-12-22",
  "pt/gastronomia.html": "2024-12-22",
  "pt/arredores.html": "2024-12-22",
  "pt/sobre.html": "2024-12-22",
  "pt/hospedagem.html": "2024-12-22",
  "pt/custo-de-vida.html": "2024-12-22",
  "pt/de-pijp.html": "2024-12-22",
};

const baseUrl = "https://amsterdu.com";

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Initialize Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Fetch all published blog posts
    const { data: posts, error } = await supabase
      .from("blog_posts")
      .select("slug, updated_at, published_at")
      .eq("status", "published")
      .order("published_at", { ascending: false });

    if (error) {
      console.error("Error fetching posts:", error);
    }

    const today = new Date().toISOString().split("T")[0];

    // Helper to get lastmod for HTML pages
    const getLastmod = (path: string): string => {
      return htmlPages[path] || today;
    };

    // Start building XML
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">

  <!-- LLM/AI Crawler Static Pages -->
  <url>
    <loc>${baseUrl}/llms.txt</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>${baseUrl}/llm.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>${baseUrl}/llm-en.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>${baseUrl}/llm-nl.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.3</priority>
  </url>

  <!-- English HTML Pages -->
  <url>
    <loc>${baseUrl}/en/index.html</loc>
    <lastmod>${getLastmod("en/index.html")}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/index.html"/>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${baseUrl}/pt/index.html"/>
    <xhtml:link rel="alternate" hreflang="nl-NL" href="${baseUrl}/nl/index.html"/>
  </url>
  <url>
    <loc>${baseUrl}/en/planning.html</loc>
    <lastmod>${getLastmod("en/planning.html")}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/planning.html"/>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${baseUrl}/pt/planejamento.html"/>
    <xhtml:link rel="alternate" hreflang="nl-NL" href="${baseUrl}/nl/planning.html"/>
  </url>
  <url>
    <loc>${baseUrl}/en/coffeeshops.html</loc>
    <lastmod>${getLastmod("en/coffeeshops.html")}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/coffeeshops.html"/>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${baseUrl}/pt/coffeeshops.html"/>
    <xhtml:link rel="alternate" hreflang="nl-NL" href="${baseUrl}/nl/coffeeshops.html"/>
  </url>
  <url>
    <loc>${baseUrl}/en/attractions.html</loc>
    <lastmod>${getLastmod("en/attractions.html")}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/attractions.html"/>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${baseUrl}/pt/atracoes.html"/>
    <xhtml:link rel="alternate" hreflang="nl-NL" href="${baseUrl}/nl/attractions.html"/>
  </url>
  <url>
    <loc>${baseUrl}/en/transport.html</loc>
    <lastmod>${getLastmod("en/transport.html")}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/transport.html"/>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${baseUrl}/pt/transporte.html"/>
    <xhtml:link rel="alternate" hreflang="nl-NL" href="${baseUrl}/nl/transport.html"/>
  </url>
  <url>
    <loc>${baseUrl}/en/food.html</loc>
    <lastmod>${getLastmod("en/food.html")}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/food.html"/>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${baseUrl}/pt/gastronomia.html"/>
    <xhtml:link rel="alternate" hreflang="nl-NL" href="${baseUrl}/nl/food.html"/>
  </url>
  <url>
    <loc>${baseUrl}/en/daytrips.html</loc>
    <lastmod>${getLastmod("en/daytrips.html")}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/daytrips.html"/>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${baseUrl}/pt/arredores.html"/>
    <xhtml:link rel="alternate" hreflang="nl-NL" href="${baseUrl}/nl/daytrips.html"/>
  </url>
  <url>
    <loc>${baseUrl}/en/about.html</loc>
    <lastmod>${getLastmod("en/about.html")}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/about.html"/>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${baseUrl}/pt/sobre.html"/>
    <xhtml:link rel="alternate" hreflang="nl-NL" href="${baseUrl}/nl/about.html"/>
  </url>
  <url>
    <loc>${baseUrl}/en/accommodation.html</loc>
    <lastmod>${getLastmod("en/accommodation.html")}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/accommodation.html"/>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${baseUrl}/pt/hospedagem.html"/>
    <xhtml:link rel="alternate" hreflang="nl-NL" href="${baseUrl}/nl/accommodation.html"/>
  </url>
  <url>
    <loc>${baseUrl}/en/cost-of-living.html</loc>
    <lastmod>${getLastmod("en/cost-of-living.html")}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/cost-of-living.html"/>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${baseUrl}/pt/custo-de-vida.html"/>
    <xhtml:link rel="alternate" hreflang="nl-NL" href="${baseUrl}/nl/kosten-van-levensonderhoud.html"/>
  </url>
  <url>
    <loc>${baseUrl}/en/de-pijp.html</loc>
    <lastmod>${getLastmod("en/de-pijp.html")}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/de-pijp.html"/>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${baseUrl}/pt/de-pijp.html"/>
    <xhtml:link rel="alternate" hreflang="nl-NL" href="${baseUrl}/nl/de-pijp.html"/>
  </url>

  <!-- Dutch HTML Pages -->
  <url>
    <loc>${baseUrl}/nl/index.html</loc>
    <lastmod>${getLastmod("nl/index.html")}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/index.html"/>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${baseUrl}/pt/index.html"/>
    <xhtml:link rel="alternate" hreflang="nl-NL" href="${baseUrl}/nl/index.html"/>
  </url>
  <url>
    <loc>${baseUrl}/nl/planning.html</loc>
    <lastmod>${getLastmod("nl/planning.html")}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/planning.html"/>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${baseUrl}/pt/planejamento.html"/>
    <xhtml:link rel="alternate" hreflang="nl-NL" href="${baseUrl}/nl/planning.html"/>
  </url>
  <url>
    <loc>${baseUrl}/nl/coffeeshops.html</loc>
    <lastmod>${getLastmod("nl/coffeeshops.html")}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/coffeeshops.html"/>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${baseUrl}/pt/coffeeshops.html"/>
    <xhtml:link rel="alternate" hreflang="nl-NL" href="${baseUrl}/nl/coffeeshops.html"/>
  </url>
  <url>
    <loc>${baseUrl}/nl/attractions.html</loc>
    <lastmod>${getLastmod("nl/attractions.html")}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/attractions.html"/>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${baseUrl}/pt/atracoes.html"/>
    <xhtml:link rel="alternate" hreflang="nl-NL" href="${baseUrl}/nl/attractions.html"/>
  </url>
  <url>
    <loc>${baseUrl}/nl/transport.html</loc>
    <lastmod>${getLastmod("nl/transport.html")}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/transport.html"/>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${baseUrl}/pt/transporte.html"/>
    <xhtml:link rel="alternate" hreflang="nl-NL" href="${baseUrl}/nl/transport.html"/>
  </url>
  <url>
    <loc>${baseUrl}/nl/food.html</loc>
    <lastmod>${getLastmod("nl/food.html")}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/food.html"/>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${baseUrl}/pt/gastronomia.html"/>
    <xhtml:link rel="alternate" hreflang="nl-NL" href="${baseUrl}/nl/food.html"/>
  </url>
  <url>
    <loc>${baseUrl}/nl/daytrips.html</loc>
    <lastmod>${getLastmod("nl/daytrips.html")}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/daytrips.html"/>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${baseUrl}/pt/arredores.html"/>
    <xhtml:link rel="alternate" hreflang="nl-NL" href="${baseUrl}/nl/daytrips.html"/>
  </url>
  <url>
    <loc>${baseUrl}/nl/about.html</loc>
    <lastmod>${getLastmod("nl/about.html")}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/about.html"/>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${baseUrl}/pt/sobre.html"/>
    <xhtml:link rel="alternate" hreflang="nl-NL" href="${baseUrl}/nl/about.html"/>
  </url>
  <url>
    <loc>${baseUrl}/nl/accommodation.html</loc>
    <lastmod>${getLastmod("nl/accommodation.html")}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/accommodation.html"/>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${baseUrl}/pt/hospedagem.html"/>
    <xhtml:link rel="alternate" hreflang="nl-NL" href="${baseUrl}/nl/accommodation.html"/>
  </url>
  <url>
    <loc>${baseUrl}/nl/kosten-van-levensonderhoud.html</loc>
    <lastmod>${getLastmod("nl/kosten-van-levensonderhoud.html")}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/cost-of-living.html"/>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${baseUrl}/pt/custo-de-vida.html"/>
    <xhtml:link rel="alternate" hreflang="nl-NL" href="${baseUrl}/nl/kosten-van-levensonderhoud.html"/>
  </url>
  <url>
    <loc>${baseUrl}/nl/de-pijp.html</loc>
    <lastmod>${getLastmod("nl/de-pijp.html")}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/de-pijp.html"/>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${baseUrl}/pt/de-pijp.html"/>
    <xhtml:link rel="alternate" hreflang="nl-NL" href="${baseUrl}/nl/de-pijp.html"/>
  </url>

  <!-- Portuguese HTML Pages (Primary) -->
  <url>
    <loc>${baseUrl}/pt/index.html</loc>
    <lastmod>${getLastmod("pt/index.html")}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/index.html"/>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${baseUrl}/pt/index.html"/>
    <xhtml:link rel="alternate" hreflang="nl-NL" href="${baseUrl}/nl/index.html"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/pt/index.html"/>
  </url>
  <url>
    <loc>${baseUrl}/pt/planejamento.html</loc>
    <lastmod>${getLastmod("pt/planejamento.html")}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/planning.html"/>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${baseUrl}/pt/planejamento.html"/>
    <xhtml:link rel="alternate" hreflang="nl-NL" href="${baseUrl}/nl/planning.html"/>
  </url>
  <url>
    <loc>${baseUrl}/pt/coffeeshops.html</loc>
    <lastmod>${getLastmod("pt/coffeeshops.html")}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/coffeeshops.html"/>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${baseUrl}/pt/coffeeshops.html"/>
    <xhtml:link rel="alternate" hreflang="nl-NL" href="${baseUrl}/nl/coffeeshops.html"/>
  </url>
  <url>
    <loc>${baseUrl}/pt/atracoes.html</loc>
    <lastmod>${getLastmod("pt/atracoes.html")}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/attractions.html"/>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${baseUrl}/pt/atracoes.html"/>
    <xhtml:link rel="alternate" hreflang="nl-NL" href="${baseUrl}/nl/attractions.html"/>
  </url>
  <url>
    <loc>${baseUrl}/pt/transporte.html</loc>
    <lastmod>${getLastmod("pt/transporte.html")}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/transport.html"/>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${baseUrl}/pt/transporte.html"/>
    <xhtml:link rel="alternate" hreflang="nl-NL" href="${baseUrl}/nl/transport.html"/>
  </url>
  <url>
    <loc>${baseUrl}/pt/gastronomia.html</loc>
    <lastmod>${getLastmod("pt/gastronomia.html")}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/food.html"/>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${baseUrl}/pt/gastronomia.html"/>
    <xhtml:link rel="alternate" hreflang="nl-NL" href="${baseUrl}/nl/food.html"/>
  </url>
  <url>
    <loc>${baseUrl}/pt/arredores.html</loc>
    <lastmod>${getLastmod("pt/arredores.html")}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/daytrips.html"/>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${baseUrl}/pt/arredores.html"/>
    <xhtml:link rel="alternate" hreflang="nl-NL" href="${baseUrl}/nl/daytrips.html"/>
  </url>
  <url>
    <loc>${baseUrl}/pt/sobre.html</loc>
    <lastmod>${getLastmod("pt/sobre.html")}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/about.html"/>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${baseUrl}/pt/sobre.html"/>
    <xhtml:link rel="alternate" hreflang="nl-NL" href="${baseUrl}/nl/about.html"/>
  </url>
  <url>
    <loc>${baseUrl}/pt/hospedagem.html</loc>
    <lastmod>${getLastmod("pt/hospedagem.html")}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/accommodation.html"/>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${baseUrl}/pt/hospedagem.html"/>
    <xhtml:link rel="alternate" hreflang="nl-NL" href="${baseUrl}/nl/accommodation.html"/>
  </url>
  <url>
    <loc>${baseUrl}/pt/custo-de-vida.html</loc>
    <lastmod>${getLastmod("pt/custo-de-vida.html")}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/cost-of-living.html"/>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${baseUrl}/pt/custo-de-vida.html"/>
    <xhtml:link rel="alternate" hreflang="nl-NL" href="${baseUrl}/nl/kosten-van-levensonderhoud.html"/>
  </url>
  <url>
    <loc>${baseUrl}/pt/de-pijp.html</loc>
    <lastmod>${getLastmod("pt/de-pijp.html")}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/de-pijp.html"/>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${baseUrl}/pt/de-pijp.html"/>
    <xhtml:link rel="alternate" hreflang="nl-NL" href="${baseUrl}/nl/de-pijp.html"/>
  </url>
`;

    // Add blog posts for each locale
    if (posts && posts.length > 0) {
      for (const post of posts) {
        const lastmod = (post.updated_at || post.published_at || today).split("T")[0];
        const locales = ["pt", "en", "nl"];
        
        for (const locale of locales) {
          const url = `${baseUrl}/${locale}/blog/${post.slug}`;
          
          xml += `
  <url>
    <loc>${url}</loc>`;
          
          // Add hreflang alternates
          for (const altLocale of locales) {
            const altUrl = `${baseUrl}/${altLocale}/blog/${post.slug}`;
            const hreflang = altLocale === "pt" ? "pt-BR" : altLocale === "nl" ? "nl-NL" : "en";
            xml += `
    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${altUrl}"/>`;
          }
          xml += `
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/pt/blog/${post.slug}"/>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
        }
      }
    }

    xml += `
</urlset>`;

    return new Response(xml, {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, max-age=3600", // Cache for 1 hour
      },
    });

  } catch (error) {
    console.error("Sitemap generation error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to generate sitemap" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
