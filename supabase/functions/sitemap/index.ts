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
  "en/index.html": "2025-01-22",
  "en/planning.html": "2025-01-22",
  "en/coffeeshops.html": "2025-01-22",
  "en/attractions.html": "2025-01-22",
  "en/transport.html": "2025-01-22",
  "en/food.html": "2025-01-22",
  "en/daytrips.html": "2025-01-22",
  "en/about.html": "2025-01-22",
  "en/accommodation.html": "2025-01-22",
  "en/cost-of-living.html": "2025-01-22",
  "en/de-pijp.html": "2025-01-22",
  "en/weesp.html": "2025-01-22",
  "nl/index.html": "2025-01-22",
  "nl/planning.html": "2025-01-22",
  "nl/coffeeshops.html": "2025-01-22",
  "nl/attractions.html": "2025-01-22",
  "nl/transport.html": "2025-01-22",
  "nl/food.html": "2025-01-22",
  "nl/daytrips.html": "2025-01-22",
  "nl/about.html": "2025-01-22",
  "nl/accommodation.html": "2025-01-22",
  "nl/kosten-van-levensonderhoud.html": "2025-01-22",
  "nl/de-pijp.html": "2025-01-22",
  "nl/weesp.html": "2025-01-22",
  "nl/zuidoost.html": "2025-01-22",
  "pt/index.html": "2025-01-22",
  "pt/planejamento.html": "2025-01-22",
  "pt/coffeeshops.html": "2025-01-22",
  "pt/atracoes.html": "2025-01-22",
  "pt/transporte.html": "2025-01-22",
  "pt/gastronomia.html": "2025-01-22",
  "pt/arredores.html": "2025-01-22",
  "pt/sobre.html": "2025-01-22",
  "pt/hospedagem.html": "2025-01-22",
  "pt/custo-de-vida.html": "2025-01-22",
  "pt/de-pijp.html": "2025-01-22",
  "pt/weesp.html": "2025-01-22",
};

const baseUrl = "https://amsterdu.com";

// Helper function to generate URL entry with all hreflang alternates
function generateUrlEntry(
  ptPath: string,
  enPath: string,
  nlPath: string,
  lastmod: string,
  changefreq: string,
  priority: string,
  currentLoc: string
): string {
  return `
  <url>
    <loc>${currentLoc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${baseUrl}/${ptPath}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/${enPath}"/>
    <xhtml:link rel="alternate" hreflang="nl-NL" href="${baseUrl}/${nlPath}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/${ptPath}"/>
  </url>`;
}

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

    // Fetch all published blog posts with native slugs
    const { data: posts, error } = await supabase
      .from("blog_posts")
      .select("slug, slug_en, slug_nl, updated_at, published_at")
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

  <!-- ============================================= -->
  <!-- HOME PAGES - All locales with x-default      -->
  <!-- ============================================= -->
  ${generateUrlEntry("pt/index.html", "en/index.html", "nl/index.html", getLastmod("pt/index.html"), "weekly", "1.0", `${baseUrl}/pt/index.html`)}
  ${generateUrlEntry("pt/index.html", "en/index.html", "nl/index.html", getLastmod("en/index.html"), "weekly", "0.9", `${baseUrl}/en/index.html`)}
  ${generateUrlEntry("pt/index.html", "en/index.html", "nl/index.html", getLastmod("nl/index.html"), "weekly", "0.9", `${baseUrl}/nl/index.html`)}

  <!-- ============================================= -->
  <!-- COFFEESHOPS - Priority cluster               -->
  <!-- ============================================= -->
  ${generateUrlEntry("pt/coffeeshops.html", "en/coffeeshops.html", "nl/coffeeshops.html", getLastmod("pt/coffeeshops.html"), "weekly", "0.9", `${baseUrl}/pt/coffeeshops.html`)}
  ${generateUrlEntry("pt/coffeeshops.html", "en/coffeeshops.html", "nl/coffeeshops.html", getLastmod("en/coffeeshops.html"), "weekly", "0.8", `${baseUrl}/en/coffeeshops.html`)}
  ${generateUrlEntry("pt/coffeeshops.html", "en/coffeeshops.html", "nl/coffeeshops.html", getLastmod("nl/coffeeshops.html"), "weekly", "0.8", `${baseUrl}/nl/coffeeshops.html`)}

  <!-- ============================================= -->
  <!-- TRANSPORT - Priority cluster                 -->
  <!-- ============================================= -->
  ${generateUrlEntry("pt/transporte.html", "en/transport.html", "nl/transport.html", getLastmod("pt/transporte.html"), "weekly", "0.9", `${baseUrl}/pt/transporte.html`)}
  ${generateUrlEntry("pt/transporte.html", "en/transport.html", "nl/transport.html", getLastmod("en/transport.html"), "weekly", "0.8", `${baseUrl}/en/transport.html`)}
  ${generateUrlEntry("pt/transporte.html", "en/transport.html", "nl/transport.html", getLastmod("nl/transport.html"), "weekly", "0.8", `${baseUrl}/nl/transport.html`)}

  <!-- ============================================= -->
  <!-- COST OF LIVING - Priority cluster            -->
  <!-- ============================================= -->
  ${generateUrlEntry("pt/custo-de-vida.html", "en/cost-of-living.html", "nl/kosten-van-levensonderhoud.html", getLastmod("pt/custo-de-vida.html"), "monthly", "0.8", `${baseUrl}/pt/custo-de-vida.html`)}
  ${generateUrlEntry("pt/custo-de-vida.html", "en/cost-of-living.html", "nl/kosten-van-levensonderhoud.html", getLastmod("en/cost-of-living.html"), "monthly", "0.7", `${baseUrl}/en/cost-of-living.html`)}
  ${generateUrlEntry("pt/custo-de-vida.html", "en/cost-of-living.html", "nl/kosten-van-levensonderhoud.html", getLastmod("nl/kosten-van-levensonderhoud.html"), "monthly", "0.7", `${baseUrl}/nl/kosten-van-levensonderhoud.html`)}

  <!-- ============================================= -->
  <!-- ACCOMMODATION                                -->
  <!-- ============================================= -->
  ${generateUrlEntry("pt/hospedagem.html", "en/accommodation.html", "nl/accommodation.html", getLastmod("pt/hospedagem.html"), "weekly", "0.9", `${baseUrl}/pt/hospedagem.html`)}
  ${generateUrlEntry("pt/hospedagem.html", "en/accommodation.html", "nl/accommodation.html", getLastmod("en/accommodation.html"), "weekly", "0.8", `${baseUrl}/en/accommodation.html`)}
  ${generateUrlEntry("pt/hospedagem.html", "en/accommodation.html", "nl/accommodation.html", getLastmod("nl/accommodation.html"), "weekly", "0.8", `${baseUrl}/nl/accommodation.html`)}

  <!-- ============================================= -->
  <!-- PLANNING                                     -->
  <!-- ============================================= -->
  ${generateUrlEntry("pt/planejamento.html", "en/planning.html", "nl/planning.html", getLastmod("pt/planejamento.html"), "weekly", "0.9", `${baseUrl}/pt/planejamento.html`)}
  ${generateUrlEntry("pt/planejamento.html", "en/planning.html", "nl/planning.html", getLastmod("en/planning.html"), "weekly", "0.8", `${baseUrl}/en/planning.html`)}
  ${generateUrlEntry("pt/planejamento.html", "en/planning.html", "nl/planning.html", getLastmod("nl/planning.html"), "weekly", "0.8", `${baseUrl}/nl/planning.html`)}

  <!-- ============================================= -->
  <!-- ATTRACTIONS                                  -->
  <!-- ============================================= -->
  ${generateUrlEntry("pt/atracoes.html", "en/attractions.html", "nl/attractions.html", getLastmod("pt/atracoes.html"), "weekly", "0.9", `${baseUrl}/pt/atracoes.html`)}
  ${generateUrlEntry("pt/atracoes.html", "en/attractions.html", "nl/attractions.html", getLastmod("en/attractions.html"), "weekly", "0.8", `${baseUrl}/en/attractions.html`)}
  ${generateUrlEntry("pt/atracoes.html", "en/attractions.html", "nl/attractions.html", getLastmod("nl/attractions.html"), "weekly", "0.8", `${baseUrl}/nl/attractions.html`)}

  <!-- ============================================= -->
  <!-- FOOD                                         -->
  <!-- ============================================= -->
  ${generateUrlEntry("pt/gastronomia.html", "en/food.html", "nl/food.html", getLastmod("pt/gastronomia.html"), "weekly", "0.8", `${baseUrl}/pt/gastronomia.html`)}
  ${generateUrlEntry("pt/gastronomia.html", "en/food.html", "nl/food.html", getLastmod("en/food.html"), "weekly", "0.7", `${baseUrl}/en/food.html`)}
  ${generateUrlEntry("pt/gastronomia.html", "en/food.html", "nl/food.html", getLastmod("nl/food.html"), "weekly", "0.7", `${baseUrl}/nl/food.html`)}

  <!-- ============================================= -->
  <!-- DAYTRIPS                                     -->
  <!-- ============================================= -->
  ${generateUrlEntry("pt/arredores.html", "en/daytrips.html", "nl/daytrips.html", getLastmod("pt/arredores.html"), "weekly", "0.8", `${baseUrl}/pt/arredores.html`)}
  ${generateUrlEntry("pt/arredores.html", "en/daytrips.html", "nl/daytrips.html", getLastmod("en/daytrips.html"), "weekly", "0.7", `${baseUrl}/en/daytrips.html`)}
  ${generateUrlEntry("pt/arredores.html", "en/daytrips.html", "nl/daytrips.html", getLastmod("nl/daytrips.html"), "weekly", "0.7", `${baseUrl}/nl/daytrips.html`)}

  <!-- ============================================= -->
  <!-- ABOUT                                        -->
  <!-- ============================================= -->
  ${generateUrlEntry("pt/sobre.html", "en/about.html", "nl/about.html", getLastmod("pt/sobre.html"), "monthly", "0.5", `${baseUrl}/pt/sobre.html`)}
  ${generateUrlEntry("pt/sobre.html", "en/about.html", "nl/about.html", getLastmod("en/about.html"), "monthly", "0.5", `${baseUrl}/en/about.html`)}
  ${generateUrlEntry("pt/sobre.html", "en/about.html", "nl/about.html", getLastmod("nl/about.html"), "monthly", "0.5", `${baseUrl}/nl/about.html`)}

  <!-- ============================================= -->
  <!-- DE PIJP (Neighborhood)                       -->
  <!-- ============================================= -->
  ${generateUrlEntry("pt/de-pijp.html", "en/de-pijp.html", "nl/de-pijp.html", getLastmod("pt/de-pijp.html"), "monthly", "0.7", `${baseUrl}/pt/de-pijp.html`)}
  ${generateUrlEntry("pt/de-pijp.html", "en/de-pijp.html", "nl/de-pijp.html", getLastmod("en/de-pijp.html"), "monthly", "0.6", `${baseUrl}/en/de-pijp.html`)}
  ${generateUrlEntry("pt/de-pijp.html", "en/de-pijp.html", "nl/de-pijp.html", getLastmod("nl/de-pijp.html"), "monthly", "0.6", `${baseUrl}/nl/de-pijp.html`)}

  <!-- ============================================= -->
  <!-- WEESP (Neighborhood)                         -->
  <!-- ============================================= -->
  ${generateUrlEntry("pt/weesp.html", "en/weesp.html", "nl/weesp.html", getLastmod("pt/weesp.html"), "monthly", "0.6", `${baseUrl}/pt/weesp.html`)}
  ${generateUrlEntry("pt/weesp.html", "en/weesp.html", "nl/weesp.html", getLastmod("en/weesp.html"), "monthly", "0.6", `${baseUrl}/en/weesp.html`)}
  ${generateUrlEntry("pt/weesp.html", "en/weesp.html", "nl/weesp.html", getLastmod("nl/weesp.html"), "monthly", "0.6", `${baseUrl}/nl/weesp.html`)}

  <!-- ============================================= -->
  <!-- ZUIDOOST (NL only for now)                   -->
  <!-- ============================================= -->
  <url>
    <loc>${baseUrl}/nl/zuidoost.html</loc>
    <lastmod>${getLastmod("nl/zuidoost.html")}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
    <xhtml:link rel="alternate" hreflang="nl-NL" href="${baseUrl}/nl/zuidoost.html"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/nl/zuidoost.html"/>
  </url>
`;

    // Add blog posts for each locale with native slugs
    if (posts && posts.length > 0) {
      xml += `
  <!-- ============================================= -->
  <!-- BLOG POSTS - Dynamic content                 -->
  <!-- ============================================= -->`;
      
      for (const post of posts) {
        const lastmod = (post.updated_at || post.published_at || today).split("T")[0];
        
        // Get native slug for each locale
        const getSlugForLocale = (locale: string): string => {
          if (locale === "en" && post.slug_en) return post.slug_en;
          if (locale === "nl" && post.slug_nl) return post.slug_nl;
          return post.slug; // PT fallback
        };
        
        const ptSlug = getSlugForLocale("pt");
        const enSlug = getSlugForLocale("en");
        const nlSlug = getSlugForLocale("nl");
        
        const locales = [
          { code: "pt", slug: ptSlug, hreflang: "pt-BR" },
          { code: "en", slug: enSlug, hreflang: "en" },
          { code: "nl", slug: nlSlug, hreflang: "nl-NL" },
        ];
        
        for (const locale of locales) {
          const url = `${baseUrl}/${locale.code}/blog/${locale.slug}`;
          
          xml += `
  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${baseUrl}/pt/blog/${ptSlug}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/blog/${enSlug}"/>
    <xhtml:link rel="alternate" hreflang="nl-NL" href="${baseUrl}/nl/blog/${nlSlug}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/pt/blog/${ptSlug}"/>
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
