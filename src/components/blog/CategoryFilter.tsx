import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

interface Category {
  id: string;
  name: string;
  slug: string;
  emoji: string | null;
}

interface CategoryFilterProps {
  selected: string | null;
  onSelect: (categoryId: string | null) => void;
}

export const CategoryFilter = ({ selected, onSelect }: CategoryFilterProps) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const { language } = useLanguage();

  const allLabel = language === "nl" ? "Alles" : language === "pt" ? "Todos" : "All";

  useEffect(() => {
    const fetchCategories = async () => {
      const { data, error } = await supabase
        .from("blog_categories")
        .select("id, name, slug, emoji")
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
    <div className="flex flex-wrap gap-2">
      <Button
        variant={selected === null ? "default" : "outline"}
        size="sm"
        onClick={() => onSelect(null)}
      >
        {allLabel}
      </Button>
      
      {categories.map((cat) => (
        <Button
          key={cat.id}
          variant={selected === cat.id ? "default" : "outline"}
          size="sm"
          onClick={() => onSelect(cat.id)}
        >
          {cat.emoji} {cat.name}
        </Button>
      ))}
    </div>
  );
};
