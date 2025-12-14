import { Link } from "react-router-dom";
import { Instagram, Youtube, Mail, Heart } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const footerLinks = {
  explore: [
    { href: "/planejamento", labelKey: "nav.planning" },
    { href: "/hospedagem", labelKey: "nav.accommodation" },
    { href: "/atracoes", labelKey: "nav.attractions" },
    { href: "/transporte", labelKey: "nav.transport" },
  ],
  experience: [
    { href: "/gastronomia", labelKey: "nav.food" },
    { href: "/coffeeshops", labelKey: "nav.coffeeshops" },
    { href: "/arredores", labelKey: "nav.daytrips" },
    { href: "/galeria", labelKey: "nav.gallery" },
  ],
  about: [
    { href: "/sobre", labelKey: "nav.about" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Mail, href: "#", label: "Email" },
];

export function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-amsterdam-blue text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-heading font-black">
                Amster<span className="text-amsterdam-orange">du</span>
              </span>
            </Link>
            <p className="text-white/70 text-sm mb-4">
              {language === "pt" 
                ? "O guia brutalmente honesto de Amsterdam. Sem filtro, sem jabá."
                : "The brutally honest Amsterdam guide. No filter, no BS."
              }
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-full bg-white/10 hover:bg-amsterdam-orange transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">
              {language === "pt" ? "Explorar" : "Explore"}
            </h3>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-amsterdam-orange transition-colors text-sm"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Experience */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">
              {language === "pt" ? "Experiências" : "Experience"}
            </h3>
            <ul className="space-y-2">
              {footerLinks.experience.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-amsterdam-orange transition-colors text-sm"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">
              {language === "pt" ? "Sobre" : "About"}
            </h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-amsterdam-orange transition-colors text-sm"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Amsterdu. {t("footer.rights")}.
          </p>
          <p className="text-white/50 text-sm flex items-center gap-1">
            {t("footer.madeWith")} <Heart className="w-4 h-4 text-amsterdam-orange fill-amsterdam-orange" /> in Amsterdam
          </p>
        </div>
      </div>
    </footer>
  );
}
