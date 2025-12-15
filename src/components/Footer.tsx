import { Link } from "react-router-dom";
import { Instagram, Youtube, Mail, Heart } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const }
  }
};

export function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container container-padding py-10 sm:py-12 md:py-16">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="col-span-2 sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-xl sm:text-2xl font-heading font-black">
                Amster<span className="text-primary">du</span>
              </span>
            </Link>
            <p className="text-secondary-foreground/70 text-sm mb-4">
              {language === "pt" 
                ? "O guia brutalmente honesto de Amsterdam. Sem filtro, sem jabá."
                : "The brutally honest Amsterdam guide. No filter, no BS."
              }
            </p>
            <div className="flex gap-2 sm:gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full bg-secondary-foreground/10 hover:bg-primary transition-colors duration-200"
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Explore */}
          <motion.div variants={itemVariants}>
            <h3 className="font-heading font-bold text-base sm:text-lg mb-3 sm:mb-4">
              {language === "pt" ? "Explorar" : "Explore"}
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors duration-200 text-sm inline-block hover:translate-x-1 transform transition-transform"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Experience */}
          <motion.div variants={itemVariants}>
            <h3 className="font-heading font-bold text-base sm:text-lg mb-3 sm:mb-4">
              {language === "pt" ? "Experiências" : "Experience"}
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerLinks.experience.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors duration-200 text-sm inline-block hover:translate-x-1 transform transition-transform"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* About */}
          <motion.div variants={itemVariants} className="col-span-2 sm:col-span-1">
            <h3 className="font-heading font-bold text-base sm:text-lg mb-3 sm:mb-4">
              {language === "pt" ? "Sobre" : "About"}
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors duration-200 text-sm inline-block hover:translate-x-1 transform transition-transform"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-secondary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4"
        >
          <p className="text-secondary-foreground/50 text-xs sm:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Amsterdu. {t("footer.rights")}.
          </p>
          <motion.p 
            className="text-secondary-foreground/50 text-xs sm:text-sm flex items-center gap-1"
          >
            {t("footer.madeWith")} 
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-primary fill-primary" />
            </motion.span>
            in Amsterdam
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
