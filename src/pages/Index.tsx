import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import {
  HeroSection,
  Changes2026Section,
  ChecklistSection,
  GuideSectionsGrid,
  TrapsSection,
} from "@/components/home";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <Changes2026Section />
        <ChecklistSection />
        <GuideSectionsGrid />
        <TrapsSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
