import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { ParentPageInfo } from "@/data/blogPostsMapping";

interface PillarPageLinkProps {
  parentPage: ParentPageInfo;
  postSlug: string;
}

// Textos personalizados para links de volta à página pilar (SEO: diferenciar papéis)
const pillarLinkTexts: Record<string, { pt: string; en: string; nl: string; descPt: string; descEn: string; descNl: string }> = {
  "onde-ficar-amsterdam-guia-bairros-honesto": {
    pt: "Hospedagem 2026: impostos e preço final no checkout",
    en: "Accommodation 2026: taxes and final checkout price",
    nl: "Accommodatie 2026: belastingen en uiteindelijke prijs",
    descPt: "Veja quanto vai pagar de imposto na diária e como calcular o preço real",
    descEn: "See how much tax you'll pay per night and how to calculate the real price",
    descNl: "Bekijk hoeveel belasting je per nacht betaalt en hoe je de werkelijke prijs berekent"
  },
  "morar-de-pijp-amsterda-2026-realidade-precos": {
    pt: "Hospedagem 2026: guia completo de impostos e bairros",
    en: "Accommodation 2026: complete guide to taxes and neighborhoods",
    nl: "Accommodatie 2026: complete gids voor belastingen en wijken",
    descPt: "Entenda as regras de 2026 e compare todos os bairros",
    descEn: "Understand the 2026 rules and compare all neighborhoods",
    descNl: "Begrijp de regels van 2026 en vergelijk alle wijken"
  },
  "como-se-locomover-em-amsterdam-em-2026": {
    pt: "Transporte 2026: OVpay, multas e aeroporto",
    en: "Transport 2026: OVpay, fines and airport",
    nl: "Vervoer 2026: OVpay, boetes en luchthaven",
    descPt: "Guia completo com calculadora de custos e todas as regras",
    descEn: "Complete guide with cost calculator and all rules",
    descNl: "Complete gids met kostencalculator en alle regels"
  },
  "custo-vida-amsterdam-2026": {
    pt: "Custo de Vida 2026: calculadora e números reais",
    en: "Cost of Living 2026: calculator and real numbers",
    nl: "Kosten 2026: calculator en echte cijfers",
    descPt: "Simule seu orçamento mensal com dados atualizados",
    descEn: "Simulate your monthly budget with updated data",
    descNl: "Simuleer je maandelijks budget met bijgewerkte gegevens"
  }
};

export function PillarPageLink({ parentPage, postSlug }: PillarPageLinkProps) {
  const { language } = useLanguage();
  
  const customText = pillarLinkTexts[postSlug];
  
  // Se não tiver texto customizado, usa o título da página mãe genérico
  const linkText = customText
    ? (language === "nl" ? customText.nl : language === "en" ? customText.en : customText.pt)
    : (language === "nl" ? parentPage.titleNl : language === "en" ? parentPage.titleEn : parentPage.titlePt);
  
  const descText = customText
    ? (language === "nl" ? customText.descNl : language === "en" ? customText.descEn : customText.descPt)
    : null;

  return (
    <div className="my-8 p-4 bg-primary/5 rounded-xl border border-primary/20">
      <Link 
        to={parentPage.path}
        className="flex items-center gap-3 group"
      >
        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
          <ArrowLeft className="w-5 h-5 text-primary" />
        </div>
        <div>
          <p className="font-medium text-foreground group-hover:text-primary transition-colors">
            {linkText}
          </p>
          {descText && (
            <p className="text-sm text-muted-foreground mt-0.5">
              {descText}
            </p>
          )}
        </div>
      </Link>
    </div>
  );
}
