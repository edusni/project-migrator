import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Category {
  id: string;
  name: string;
  slug: string;
  emoji: string | null;
  color: string | null;
}

interface CategoryFilterProps {
  selected: string | null;
  onSelect: (slug: string | null) => void;
}

export const CategoryFilter = ({ selected, onSelect }: CategoryFilterProps) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const { language } = useLanguage();

  const allLabel = language === "nl" ? "Alles" : language === "pt" ? "Todos" : "All";

  useEffect(() => {
    const fetchCategories = async () => {
      const { data, error } = await supabase
        .from("blog_categories")
        .select("id, name, slug, emoji, color")
        .order("sort_order", { ascending: true });

      if (error) {
        console.error("Error fetching categories:", error);
      } else {
        setCategories(data || []);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onSelect(null)}
        className={cn(
          "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border",
          selected === null
            ? "bg-primary text-primary-foreground border-primary shadow-md"
            : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
        )}
      >
        {allLabel}
      </motion.button>

      {categories.map((cat) => (
        <motion.button
          key={cat.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelect(cat.slug)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border flex items-center gap-1.5",
            selected === cat.slug
              ? "text-white border-transparent shadow-md"
              : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
          )}
          style={selected === cat.slug ? { backgroundColor: cat.color || 'hsl(var(--primary))' } : {}}
        >
          <span>{cat.emoji}</span>
          <span className="hidden sm:inline">{cat.name}</span>
        </motion.button>
      ))}
    </div>
  );
};
