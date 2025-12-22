-- Create table to store site image references
CREATE TABLE public.site_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  image_key text UNIQUE NOT NULL, -- e.g., 'hero-de-pijp', 'hero-jordaan', 'food-stroopwafel'
  original_path text NOT NULL, -- Original path in src/assets
  storage_path text, -- Path in Supabase storage (when uploaded)
  description text,
  category text NOT NULL DEFAULT 'general', -- 'hero', 'neighborhood', 'food', 'coffeeshop', 'daytrip', 'season'
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.site_images ENABLE ROW LEVEL SECURITY;

-- Anyone can view images (needed for the site to work)
CREATE POLICY "Anyone can view site images"
ON public.site_images
FOR SELECT
USING (true);

-- Only admins can manage images
CREATE POLICY "Admins can manage site images"
ON public.site_images
FOR ALL
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create trigger for updated_at
CREATE TRIGGER update_site_images_updated_at
BEFORE UPDATE ON public.site_images
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create storage bucket for site images
INSERT INTO storage.buckets (id, name, public)
VALUES ('site-images', 'site-images', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies for site-images bucket
CREATE POLICY "Anyone can view site images storage"
ON storage.objects
FOR SELECT
USING (bucket_id = 'site-images');

CREATE POLICY "Admins can upload site images"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'site-images' AND has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update site images"
ON storage.objects
FOR UPDATE
USING (bucket_id = 'site-images' AND has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete site images"
ON storage.objects
FOR DELETE
USING (bucket_id = 'site-images' AND has_role(auth.uid(), 'admin'::app_role));