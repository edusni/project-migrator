-- Enable pg_net extension for HTTP calls from database
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;

-- Create function to notify IndexNow when blog post is published
CREATE OR REPLACE FUNCTION public.notify_indexnow_on_publish()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  post_url TEXT;
  request_id BIGINT;
BEGIN
  -- Only trigger when status changes to 'published' or content is updated on published post
  IF (NEW.status = 'published' AND (OLD.status IS DISTINCT FROM 'published' OR OLD.content IS DISTINCT FROM NEW.content OR OLD.title IS DISTINCT FROM NEW.title)) THEN
    
    -- Build the URL for the published post (Portuguese is primary)
    post_url := 'https://amsterdu.com/pt/blog/' || NEW.slug;
    
    -- Call IndexNow edge function via pg_net
    SELECT net.http_post(
      url := 'https://lguwbgthckwsixmuvurx.supabase.co/functions/v1/indexnow',
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxndXdiZ3RoY2t3c2l4bXV2dXJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU3MzExNjksImV4cCI6MjA4MTMwNzE2OX0.8V_ld2rf6m4raRo9lAPbUNQjzTzhbJuixg5_Ea0sCV0'
      ),
      body := jsonb_build_object(
        'urls', ARRAY[
          post_url,
          'https://amsterdu.com/en/blog/' || COALESCE(NEW.slug_en, NEW.slug),
          'https://amsterdu.com/nl/blog/' || COALESCE(NEW.slug_nl, NEW.slug)
        ]
      )
    ) INTO request_id;
    
    RAISE LOG 'IndexNow notification sent for post: %, request_id: %', NEW.slug, request_id;
  END IF;
  
  RETURN NEW;
END;
$$;

-- Create trigger on blog_posts table
DROP TRIGGER IF EXISTS trigger_indexnow_on_publish ON public.blog_posts;

CREATE TRIGGER trigger_indexnow_on_publish
  AFTER INSERT OR UPDATE ON public.blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION public.notify_indexnow_on_publish();

-- Add comment for documentation
COMMENT ON FUNCTION public.notify_indexnow_on_publish() IS 'Automatically notifies IndexNow (Bing, Yandex) when a blog post is published or updated';