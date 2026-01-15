import { useState, useEffect, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/hooks/useLanguage";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HomeVideo {
  id: string;
  video_url: string;
  title: string | null;
  title_en: string | null;
  title_nl: string | null;
  description: string | null;
  description_en: string | null;
  description_nl: string | null;
  is_active: boolean;
}

export function WelcomeVideoSection() {
  const { language } = useLanguage();
  const [video, setVideo] = useState<HomeVideo | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    fetchVideo();
  }, []);

  const fetchVideo = async () => {
    try {
      const { data, error } = await supabase
        .from("home_video")
        .select("*")
        .eq("is_active", true)
        .order("created_at", { ascending: false })
        .limit(1);

      if (error) throw error;
      
      if (data && data.length > 0) {
        setVideo(data[0] as HomeVideo);
      }
    } catch (error) {
      console.error("Error fetching video:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getTitle = () => {
    if (!video) return "";
    if (language === "en") return video.title_en || video.title;
    if (language === "nl") return video.title_nl || video.title;
    return video.title;
  };

  const getDescription = () => {
    if (!video) return "";
    if (language === "en") return video.description_en || video.description;
    if (language === "nl") return video.description_nl || video.description;
    return video.description;
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  // Don't render if no video or still loading
  if (isLoading || !video) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Title */}
          {getTitle() && (
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              {getTitle()}
            </h2>
          )}
          
          {/* Description */}
          {getDescription() && (
            <p className="text-lg text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              {getDescription()}
            </p>
          )}

          {/* Video Player */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black aspect-video group">
            <video
              ref={videoRef}
              src={video.video_url}
              className="w-full h-full object-cover"
              muted={isMuted}
              playsInline
              onEnded={handleVideoEnd}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Overlay with play button */}
            <div 
              className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 ${
                isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
              }`}
            >
              <Button
                size="lg"
                variant="secondary"
                className="rounded-full w-20 h-20 bg-white/90 hover:bg-white text-primary shadow-lg"
                onClick={togglePlay}
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8" />
                ) : (
                  <Play className="w-8 h-8 ml-1" />
                )}
              </Button>
            </div>

            {/* Controls bar */}
            <div className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${
              isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
            }`}>
              <div className="flex items-center justify-between">
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-white hover:bg-white/20"
                  onClick={togglePlay}
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5" />
                  )}
                </Button>
                
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-white hover:bg-white/20"
                  onClick={toggleMute}
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5" />
                  ) : (
                    <Volume2 className="w-5 h-5" />
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* AI Character badge */}
          <div className="mt-6 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              {language === "nl" ? "AI-personage" : language === "en" ? "AI Character" : "Personagem IA"}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
