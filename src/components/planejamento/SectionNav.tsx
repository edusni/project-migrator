import { cn } from "@/lib/utils";

interface Section {
  id: string;
  icon: string;
  label: string;
}

interface SectionNavProps {
  sections: Section[];
  activeSection: string;
  showNav: boolean;
  onSectionClick: (id: string) => void;
}

export const SectionNav = ({ sections, activeSection, showNav, onSectionClick }: SectionNavProps) => {
  return (
    <nav 
      className={cn(
        "sticky top-16 z-40 bg-background/95 backdrop-blur-xl border-b border-border/50 transition-all duration-300",
        showNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
      )}
    >
      <div className="container container-padding">
        <div className="flex items-center gap-1 sm:gap-2 py-3 overflow-x-auto scrollbar-hide">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionClick(section.id)}
              className={cn(
                "flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200",
                activeSection === section.id
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              <span className="text-base">{section.icon}</span>
              <span className="hidden sm:inline">{section.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};
