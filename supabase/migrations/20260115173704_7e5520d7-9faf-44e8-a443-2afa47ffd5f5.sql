-- Create storage bucket for videos
INSERT INTO storage.buckets (id, name, public)
VALUES ('videos', 'videos', true)
ON CONFLICT (id) DO NOTHING;

-- RLS policies for videos bucket
CREATE POLICY "Anyone can view videos"
ON storage.objects FOR SELECT
USING (bucket_id = 'videos');

CREATE POLICY "Admins can upload videos"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'videos' 
  AND EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() 
    AND role = 'admin'
  )
);

CREATE POLICY "Admins can update videos"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'videos' 
  AND EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() 
    AND role = 'admin'
  )
);

CREATE POLICY "Admins can delete videos"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'videos' 
  AND EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() 
    AND role = 'admin'
  )
);

-- Table to store home video reference
CREATE TABLE public.home_video (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  video_url TEXT NOT NULL,
  title TEXT,
  title_en TEXT,
  title_nl TEXT,
  description TEXT,
  description_en TEXT,
  description_nl TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.home_video ENABLE ROW LEVEL SECURITY;

-- Anyone can view active videos
CREATE POLICY "Anyone can view active home videos"
ON public.home_video FOR SELECT
USING (is_active = true);

-- Admins can manage home videos
CREATE POLICY "Admins can manage home videos"
ON public.home_video FOR ALL
USING (
  EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() 
    AND role = 'admin'
  )
);

-- Trigger for updated_at
CREATE TRIGGER update_home_video_updated_at
BEFORE UPDATE ON public.home_video
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();