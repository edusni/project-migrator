import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

// Cache for site images to avoid repeated queries
const fetchSiteImages = async () => {
  const { data, error } = await supabase
    .from('site_images')
    .select('image_key, storage_path, original_path');
  
  if (error) {
    console.error('Error fetching site images:', error);
    return {};
  }
  
  // Create a map of image_key to storage_path (or null if not updated)
  const imageMap: Record<string, string | null> = {};
  data?.forEach(img => {
    imageMap[img.image_key] = img.storage_path;
  });
  
  return imageMap;
};

export const useSiteImages = () => {
  return useQuery({
    queryKey: ['site-images'],
    queryFn: fetchSiteImages,
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 30, // 30 minutes
  });
};

// Hook to get a single image URL
export const useSiteImage = (imageKey: string, fallbackImport: string) => {
  const { data: imageMap, isLoading } = useSiteImages();
  
  if (isLoading || !imageMap) {
    return fallbackImport;
  }
  
  // If we have a storage_path for this image, use it; otherwise use the fallback
  return imageMap[imageKey] || fallbackImport;
};

// Utility function for non-hook contexts (requires imageMap from useSiteImages)
export const getSiteImageUrl = (
  imageKey: string, 
  fallbackImport: string, 
  imageMap: Record<string, string | null> | undefined
): string => {
  if (!imageMap) {
    return fallbackImport;
  }
  return imageMap[imageKey] || fallbackImport;
};
