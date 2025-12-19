-- Add translation columns to blog_posts
ALTER TABLE public.blog_posts 
ADD COLUMN IF NOT EXISTS title_en TEXT,
ADD COLUMN IF NOT EXISTS title_nl TEXT,
ADD COLUMN IF NOT EXISTS content_en TEXT,
ADD COLUMN IF NOT EXISTS content_nl TEXT,
ADD COLUMN IF NOT EXISTS excerpt_en TEXT,
ADD COLUMN IF NOT EXISTS excerpt_nl TEXT;