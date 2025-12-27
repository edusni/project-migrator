import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Verify authentication
    const authHeader = req.headers.get('authorization');
    if (!authHeader) {
      console.error('Missing authorization header');
      return new Response(
        JSON.stringify({ error: 'Unauthorized - missing authorization header' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Create Supabase client to verify user and role
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Get user from JWT token
    const token = authHeader.replace('Bearer ', '');
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);
    
    if (authError || !user) {
      console.error('Auth error:', authError?.message || 'No user found');
      return new Response(
        JSON.stringify({ error: 'Unauthorized - invalid token' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Check if user has admin role
    const { data: roleData, error: roleError } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', user.id)
      .eq('role', 'admin')
      .single();

    if (roleError || !roleData) {
      console.error('Role check failed:', roleError?.message || 'User is not admin');
      return new Response(
        JSON.stringify({ error: 'Forbidden - admin access required' }),
        { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`Admin user ${user.id} requesting translation`);

    const { content, title, excerpt, targetLanguage } = await req.json();
    
    if (!content || !targetLanguage) {
      return new Response(
        JSON.stringify({ error: 'Content and targetLanguage are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // If target is PT, return original content
    if (targetLanguage === 'pt') {
      return new Response(
        JSON.stringify({ content, title, excerpt }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    const languageNames: Record<string, string> = {
      en: 'English',
      nl: 'Dutch',
    };

    const targetLang = languageNames[targetLanguage] || 'English';

    const systemPrompt = `You are a professional translator specializing in travel and lifestyle content. 
Translate the following blog content from Portuguese to ${targetLang}.
Keep the same structure, formatting, and style.
Preserve any numbers, currency values (€), dates, and proper nouns.
Make the translation natural and engaging for native ${targetLang} speakers.
Do NOT add any explanations or notes - just provide the translation.`;

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: `Translate this blog post content:\n\n${content}` }
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: 'AI credits exhausted. Please add funds.' }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      const errorText = await response.text();
      console.error('AI gateway error:', response.status, errorText);
      throw new Error('Translation failed');
    }

    const data = await response.json();
    const translatedContent = data.choices?.[0]?.message?.content || content;

    // Translate title and excerpt if provided
    let translatedTitle = title;
    let translatedExcerpt = excerpt;

    if (title || excerpt) {
      const metaResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${LOVABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'google/gemini-2.5-flash',
          messages: [
            { role: 'system', content: `Translate the following from Portuguese to ${targetLang}. Return ONLY a JSON object with "title" and "excerpt" keys. No other text.` },
            { role: 'user', content: JSON.stringify({ title: title || '', excerpt: excerpt || '' }) }
          ],
        }),
      });

      if (metaResponse.ok) {
        const metaData = await metaResponse.json();
        const metaContent = metaData.choices?.[0]?.message?.content;
        try {
          // Clean the response - remove markdown code blocks if present
          const cleanedContent = metaContent
            .replace(/```json\n?/g, '')
            .replace(/```\n?/g, '')
            .trim();
          const parsed = JSON.parse(cleanedContent);
          translatedTitle = parsed.title || title;
          translatedExcerpt = parsed.excerpt || excerpt;
        } catch (e) {
          console.error('Failed to parse meta translation:', e);
        }
      }
    }

    return new Response(
      JSON.stringify({ 
        content: translatedContent,
        title: translatedTitle,
        excerpt: translatedExcerpt
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Translation error:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Translation failed' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
