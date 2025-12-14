import { Link } from "react-router-dom";
import { Instagram, Twitter, Youtube } from "lucide-react";

const footerLinks = {
  explorar: [
    { label: "Artigos", href: "#" },
    { label: "Categorias", href: "#" },
    { label: "Guias", href: "#" },
    { label: "Newsletter", href: "#" },
  ],
  sobre: [
    { label: "Sobre nós", href: "#" },
    { label: "Contato", href: "#" },
    { label: "Parcerias", href: "#" },
    { label: "Trabalhe conosco", href: "#" },
  ],
  legal: [
    { label: "Privacidade", href: "#" },
    { label: "Termos de uso", href: "#" },
    { label: "Cookies", href: "#" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                Amsterd<span className="text-primary">u</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6">
              Seu guia definitivo para descobrir, viver e amar Amsterdam.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Explorar</h4>
            <ul className="space-y-3">
              {footerLinks.explorar.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Sobre</h4>
            <ul className="space-y-3">
              {footerLinks.sobre.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Amsterdu. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Feito com 🧡 em Amsterdam
          </p>
        </div>
      </div>
    </footer>
  );
}
