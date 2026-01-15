import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { Headphones, Play, CloudRain, Moon, Music, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const translations = {
  pt: {
    title: "Amsterdu Soundscapes",
    subtitle: "Sons ambientes de Amsterdam para relaxar, focar ou viajar sem sair de casa",
    tagline: "Chuva nos canais • Noites de outono • Cafés aconchegantes",
    listenNow: "Ouvir no Spotify",
    explorePage: "Ver projeto completo",
    features: [
      { icon: CloudRain, label: "Chuva", desc: "Gotas nas pedras" },
      { icon: Moon, label: "Canais", desc: "Noites silenciosas" },
      { icon: Music, label: "Cafés", desc: "Ambiente acolhedor" },
      { icon: Volume2, label: "Parques", desc: "Folhas ao vento" },
    ],
  },
  en: {
    title: "Amsterdu Soundscapes",
    subtitle: "Ambient sounds of Amsterdam to relax, focus or travel without leaving home",
    tagline: "Rain on canals • Autumn nights • Cozy cafés",
    listenNow: "Listen on Spotify",
    explorePage: "See full project",
    features: [
      { icon: CloudRain, label: "Rain", desc: "Drops on cobblestones" },
      { icon: Moon, label: "Canals", desc: "Silent nights" },
      { icon: Music, label: "Cafés", desc: "Cozy atmosphere" },
      { icon: Volume2, label: "Parks", desc: "Leaves in the wind" },
    ],
  },
  nl: {
    title: "Amsterdu Soundscapes",
    subtitle: "Omgevingsgeluiden van Amsterdam om te ontspannen, focussen of reizen zonder het huis te verlaten",
    tagline: "Regen op grachten • Herfstnachten • Gezellige cafés",
    listenNow: "Luister op Spotify",
    explorePage: "Bekijk volledig project",
    features: [
      { icon: CloudRain, label: "Regen", desc: "Druppels op kasseien" },
      { icon: Moon, label: "Grachten", desc: "Stille nachten" },
      { icon: Music, label: "Cafés", desc: "Gezellige sfeer" },
      { icon: Volume2, label: "Parken", desc: "Bladeren in de wind" },
    ],
  },
};

export const SoundscapePreview = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const t = translations[language];

  return (
    <section className="py-12 lg:py-20 bg-gradient-to-b from-muted/30 via-primary/5 to-background overflow-hidden">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 lg:mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Headphones className="w-4 h-4" />
            <span className="text-sm font-medium">Ambient Music Project</span>
          </div>
          
          <h2 className="text-2xl lg:text-4xl font-heading font-bold mb-3 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            {t.title}
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto mb-2">
            {t.subtitle}
          </p>
          
          <p className="text-sm text-muted-foreground/70 italic">
            {t.tagline}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Spotify Embed */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-xl bg-card border border-border/50"
          >
            <iframe 
              style={{ borderRadius: '16px' }}
              src="https://open.spotify.com/embed/artist/41b3qFSMQGI1UKVVNjBYiE?utm_source=generator&theme=0" 
              width="100%" 
              height="352" 
              frameBorder="0" 
              allowFullScreen 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              title="Amsterdu Soundscapes"
            />
          </motion.div>

          {/* Features & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Feature grid */}
            <div className="grid grid-cols-2 gap-3">
              {t.features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-card/80 border border-border/30 hover:border-primary/30 transition-all hover:shadow-md group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{feature.label}</p>
                      <p className="text-xs text-muted-foreground">{feature.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Decorative quote */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                {language === "pt" 
                  ? '"Cada faixa é uma janela para um momento específico da cidade — o som da chuva nas pedras, o silêncio dos canais à meia-noite..."'
                  : language === "nl"
                    ? '"Elk nummer is een venster naar een specifiek moment van de stad — het geluid van regen op kasseien, de stilte van grachten om middernacht..."'
                    : '"Each track is a window into a specific moment of the city — the sound of rain on cobblestones, the silence of canals at midnight..."'
                }
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="flex-1 gap-2"
                onClick={() => window.open('https://open.spotify.com/artist/41b3qFSMQGI1UKVVNjBYiE', '_blank')}
                aria-label={`${t.listenNow} - Spotify`}
              >
                <Play className="w-4 h-4" aria-hidden="true" />
                {t.listenNow}
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="flex-1 gap-2"
                onClick={() => navigate(`/${language}/soundscape`)}
                aria-label={t.explorePage}
              >
                <Headphones className="w-4 h-4" aria-hidden="true" />
                {t.explorePage}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
