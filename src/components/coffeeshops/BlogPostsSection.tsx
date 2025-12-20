import { Newspaper } from "lucide-react";
import { PostList } from "@/components/blog/PostList";

interface BlogPostsSectionProps {
  language: string;
}

export const BlogPostsSection = ({ language }: BlogPostsSectionProps) => {
  const content = {
    pt: {
      title: "Artigos sobre Cannabis",
      subtitle: "Dicas, experiências e informações atualizadas do nosso blog"
    },
    en: {
      title: "Cannabis Articles",
      subtitle: "Tips, experiences and updated information from our blog"
    },
    nl: {
      title: "Cannabis Artikelen",
      subtitle: "Tips, ervaringen en actuele informatie van onze blog"
    }
  };

  const lang = language === "pt" ? "pt" : language === "nl" ? "nl" : "en";
  const t = content[lang];

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container max-w-6xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-center mb-2 flex items-center justify-center gap-2">
          <Newspaper className="h-6 w-6 md:h-7 md:w-7" />
          {t.title}
        </h2>
        <p className="text-center text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto text-base md:text-lg">
          {t.subtitle}
        </p>
        <PostList categoryFilter="cannabis" limit={6} />
      </div>
    </section>
  );
};
