import { useSiteImages, getSiteImageUrl } from '@/hooks/useSiteImage';

interface SiteImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  imageKey: string;
  fallbackSrc: string;
}

export function SiteImage({ imageKey, fallbackSrc, ...props }: SiteImageProps) {
  const { data: imageMap, isLoading } = useSiteImages();
  
  const src = getSiteImageUrl(imageKey, fallbackSrc, imageMap);
  
  return (
    <img 
      {...props} 
      src={src}
    />
  );
}

// Hook for getting image URL in components that need the raw URL
export { useSiteImage, useSiteImages, getSiteImageUrl } from '@/hooks/useSiteImage';
