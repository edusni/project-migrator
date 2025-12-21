import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
};

// Static pages with their configurations
const staticPages = [
  { path: "", priority: "1.0", changefreq: "daily" },
  { path: "/planejamento", priority: "0.9", changefreq: "weekly" },
  { path: "/hospedagem", priority: "0.9", changefreq: "weekly" },
  { path: "/gastronomia", priority: "0.8", changefreq: "weekly" },
  { path: "/atracoes", priority: "0.9", changefreq: "weekly" },
  { path: "/transporte", priority: "0.8", changefreq: "weekly" },
  { path: "/arredores", priority: "0.8", changefreq: "weekly" },
  { path: "/coffeeshops", priority: "0.8", changefreq: "weekly" },
  { path: "/custo-de-vida", priority: "0.7", changefreq: "monthly" },
  { path: "/sobre", priority: "0.5", changefreq: "monthly" },
  { path: "/blog", priority: "0.9", changefreq: "daily" },
];

const locales = ["pt", "en", "nl"];
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

  <!-- Prerendered English Static Pages for SEO -->
  <url>
    <loc>${baseUrl}/en/index.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/index.html"/>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${baseUrl}/pt"/>
    <xhtml:link rel="alternate" hreflang="nl-NL" href="${baseUrl}/nl"/>
  </url>
  <url>
    <loc>${baseUrl}/en/planning.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/planning.html"/>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${baseUrl}/pt/planejamento"/>
    <xhtml:link rel="alternate" hreflang="nl-NL" href="${baseUrl}/nl/planejamento"/>
  </url>
  <url>
    <loc>${baseUrl}/en/coffeeshops.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/coffeeshops.html"/>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${baseUrl}/pt/coffeeshops"/>
    <xhtml:link rel="alternate" hreflang="nl-NL" href="${baseUrl}/nl/coffeeshops"/>
  </url>
  <url>
    <loc>${baseUrl}/en/attractions.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/en/transport.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/en/food.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/en/daytrips.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/en/about.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
`;

    // Add static pages for each locale
    for (const page of staticPages) {
      for (const locale of locales) {
        const url = `${baseUrl}/${locale}${page.path}`;
        
        xml += `
  <url>
    <loc>${url}</loc>`;
        
        // Add hreflang alternates
        for (const altLocale of locales) {
          const altUrl = `${baseUrl}/${altLocale}${page.path}`;
          const hreflang = altLocale === "pt" ? "pt-BR" : altLocale === "nl" ? "nl-NL" : "en";
          xml += `
    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${altUrl}"/>`;
        }
        xml += `
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/pt${page.path}"/>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
      }
    }

    // Add blog posts for each locale
    if (posts && posts.length > 0) {
      for (const post of posts) {
        const lastmod = (post.updated_at || post.published_at || today).split("T")[0];
        
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