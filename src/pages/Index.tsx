import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WeatherWidget } from "@/components/WeatherWidget";
import { CurrencyWidget } from "@/components/CurrencyWidget";
import { TrainSchedule } from "@/components/TrainSchedule";
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
        
        {/* Widgets Section */}
        <section className="py-14 lg:py-20 bg-muted/30">
          <div className="container container-padding">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto stagger-animation">
              <WeatherWidget />
              <CurrencyWidget />
              <TrainSchedule />
            </div>
          </div>
        </section>
        
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
