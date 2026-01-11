import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/hooks/useLanguage";
import { Headphones, Music, Moon, CloudRain } from "lucide-react";

const Soundscape = () => {
  const { language } = useLanguage();

  const content = {
    pt: {
      title: "Amsterdu Soundscapes | Paisagens Sonoras de Amsterdam",
      description: "Relaxe com os sons ambientes de Amsterdam: canais, chuva, bairros tranquilos e momentos urbanos calmos traduzidos em música.",
      hero: "Amsterdu Soundscapes",
      subtitle: "Paisagens sonoras ambientes inspiradas em Amsterdam",
      tagline: "Ruas chuvosas, bairros tranquilos, canais à noite e momentos urbanos calmos traduzidos em música.",
      philosophy: "Filosofia",
      philosophyText: "O projeto explora atmosferas sonoras conectadas a lugares, estações e cenas do cotidiano da cidade, criando experiências de áudio projetadas para foco, leitura, relaxamento e momentos lentos.",
      experience: "Cada faixa é uma janela para um momento específico da cidade — o som da chuva nas pedras do calçamento, o silêncio dos canais à meia-noite, a luz âmbar das lanternas refletindo na água.",
      listenOn: "Ouça no Spotify",
    },
    en: {
      title: "Amsterdu Soundscapes | Amsterdam Sound Atmospheres",
      description: "Relax with ambient sounds of Amsterdam: canals, rain, quiet neighborhoods and calm urban moments translated into music.",
      hero: "Amsterdu Soundscapes",
      subtitle: "Ambient soundscapes inspired by Amsterdam",
      tagline: "Rainy streets, quiet neighborhoods, canals at night and calm urban moments translated into music.",
      philosophy: "Philosophy",
      philosophyText: "The project explores sound atmospheres connected to places, seasons and everyday scenes of the city, creating audio experiences designed for focus, reading, relaxation and slow moments.",
      experience: "Each track is a window into a specific moment of the city — the sound of rain on cobblestones, the silence of canals at midnight, the amber light of lanterns reflecting on the water.",
      listenOn: "Listen on Spotify",
    },
    nl: {
      title: "Amsterdu Soundscapes | Geluidslandschappen van Amsterdam",
      description: "Ontspan met de omgevingsgeluiden van Amsterdam: grachten, regen, rustige buurten en kalme stedelijke momenten vertaald in muziek.",
      hero: "Amsterdu Soundscapes",
      subtitle: "Ambient soundscapes geïnspireerd door Amsterdam",
      tagline: "Regenachtige straten, rustige buurten, grachten 's nachts en kalme stedelijke momenten vertaald in muziek.",
      philosophy: "Filosofie",
      philosophyText: "Het project verkent geluidssferen verbonden met plaatsen, seizoenen en alledaagse scènes van de stad, en creëert audio-ervaringen ontworpen voor focus, lezen, ontspanning en langzame momenten.",
      experience: "Elk nummer is een venster naar een specifiek moment van de stad — het geluid van regen op kinderkopjes, de stilte van grachten om middernacht, het amberkleurige licht van lantaarns dat weerspiegelt op het water.",
      listenOn: "Luister op Spotify",
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead
        title={t.title}
        description={t.description}
        keywords="amsterdam soundscapes, ambient music, relaxation, focus music, canal sounds, rain sounds, dutch ambient"
      />
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 bg-gradient-to-b from-primary/10 via-background to-background overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 animate-pulse">
              <Moon className="w-24 h-24 text-primary" />
            </div>
            <div className="absolute bottom-20 right-10 animate-pulse delay-500">
              <CloudRain className="w-32 h-32 text-primary" />
            </div>
          </div>
          
          <div className="container max-w-4xl text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Headphones className="w-5 h-5" />
              <span className="text-sm font-medium">Ambient Music Project</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              {t.hero}
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
              {t.subtitle}
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto">
              {t.tagline}
            </p>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 flex items-center justify-center gap-3">
                <Music className="w-7 h-7 text-primary" />
                {t.philosophy}
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t.philosophyText}
              </p>
              
              <p className="text-base text-muted-foreground/80 leading-relaxed italic border-l-4 border-primary/30 pl-6 text-left">
                {t.experience}
              </p>
            </div>
          </div>
        </section>

        {/* Spotify Embeds Section */}
        <section className="py-16 lg:py-24">
          <div className="container max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12 flex items-center justify-center gap-3">
              <span className="text-3xl">🎧</span>
              {t.listenOn}
            </h2>
            
            {/* Artist Profile */}
            <div className="mb-12 rounded-xl overflow-hidden shadow-lg bg-card border border-border/50">
              <iframe 
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/artist/41b3qFSMQGI1UKVVNjBYiE?utm_source=generator&theme=0" 
                width="100%" 
                height="352" 
                frameBorder="0" 
                allowFullScreen 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                title="Amsterdu Soundscapes Artist"
              />
            </div>

            {/* Albums */}
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-xl overflow-hidden shadow-lg bg-card border border-border/50">
                <iframe 
                  style={{ borderRadius: '12px' }}
                  src="https://open.spotify.com/embed/album/1wYKQIpEROXOufoiN2OVvx?utm_source=generator&theme=0" 
                  width="100%" 
                  height="352" 
                  frameBorder="0" 
                  allowFullScreen 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  loading="lazy"
                  title="Amsterdu Soundscapes Album 1"
                />
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-lg bg-card border border-border/50">
                <iframe 
                  style={{ borderRadius: '12px' }}
                  src="https://open.spotify.com/embed/album/4hkDqnOCLbHc16rpeLVc27?utm_source=generator&theme=0" 
                  width="100%" 
                  height="352" 
                  frameBorder="0" 
                  allowFullScreen 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  loading="lazy"
                  title="Amsterdu Soundscapes Album 2"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Atmosphere Features */}
        <section className="py-16 lg:py-20 bg-gradient-to-t from-primary/5 to-transparent">
          <div className="container max-w-5xl">
            <div className="grid gap-6 md:grid-cols-4">
              {[
                { emoji: "🌧️", label: language === "nl" ? "Regen" : language === "pt" ? "Chuva" : "Rain" },
                { emoji: "🌙", label: language === "nl" ? "Grachten" : language === "pt" ? "Canais" : "Canals" },
                { emoji: "☕", label: language === "nl" ? "Cafés" : language === "pt" ? "Cafés" : "Cafés" },
                { emoji: "🍂", label: language === "nl" ? "Parken" : language === "pt" ? "Parques" : "Parks" },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="text-center p-6 rounded-xl bg-card/50 border border-border/30 hover:border-primary/30 transition-colors"
                >
                  <span className="text-4xl mb-3 block">{item.emoji}</span>
                  <span className="text-sm font-medium text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Soundscape;
