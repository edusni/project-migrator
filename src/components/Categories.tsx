import { Home, Utensils, Bike, Palette, MapPin, Briefcase } from "lucide-react";

const categories = [
  {
    icon: Home,
    name: "Moradia",
    description: "Dicas para alugar e viver",
    count: 24,
    color: "bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-400",
  },
  {
    icon: Utensils,
    name: "Gastronomia",
    description: "Restaurantes e cafés",
    count: 31,
    color: "bg-rose-100 text-rose-600 dark:bg-rose-950 dark:text-rose-400",
  },
  {
    icon: Bike,
    name: "Lifestyle",
    description: "O jeito holandês de viver",
    count: 18,
    color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400",
  },
  {
    icon: Palette,
    name: "Cultura",
    description: "Arte, museus e eventos",
    count: 27,
    color: "bg-violet-100 text-violet-600 dark:bg-violet-950 dark:text-violet-400",
  },
  {
    icon: MapPin,
    name: "Turismo",
    description: "Roteiros e passeios",
    count: 42,
    color: "bg-sky-100 text-sky-600 dark:bg-sky-950 dark:text-sky-400",
  },
  {
    icon: Briefcase,
    name: "Trabalho",
    description: "Carreira na Holanda",
    count: 15,
    color: "bg-amber-100 text-amber-600 dark:bg-amber-950 dark:text-amber-400",
  },
];

export function Categories() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Explore por Categoria</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Encontre exatamente o que você procura sobre a vida em Amsterdam
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <a
              key={category.name}
              href="#"
              className="group flex flex-col items-center p-6 bg-background rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-300"
            >
              <div className={`p-3 rounded-xl mb-4 ${category.color} transition-transform group-hover:scale-110`}>
                <category.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-1">{category.name}</h3>
              <p className="text-xs text-muted-foreground text-center mb-2">
                {category.description}
              </p>
              <span className="text-xs font-medium text-primary">
                {category.count} artigos
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
