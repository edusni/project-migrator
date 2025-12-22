-- Add native slug columns for EN and NL
ALTER TABLE public.blog_posts 
ADD COLUMN slug_en text,
ADD COLUMN slug_nl text;

-- Create indexes for better query performance
CREATE INDEX idx_blog_posts_slug_en ON public.blog_posts(slug_en) WHERE slug_en IS NOT NULL;
CREATE INDEX idx_blog_posts_slug_nl ON public.blog_posts(slug_nl) WHERE slug_nl IS NOT NULL;

-- Add comments for documentation
COMMENT ON COLUMN public.blog_posts.slug_en IS 'Native English URL slug for SEO';
COMMENT ON COLUMN public.blog_posts.slug_nl IS 'Native Dutch URL slug for SEO';