import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ExploreGuide } from "@/components/ExploreGuide";
import { QuickLinks } from "@/components/QuickLinks";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { WeatherWidget } from "@/components/WeatherWidget";
import { CurrencyWidget } from "@/components/CurrencyWidget";
import { TrainSchedule } from "@/components/TrainSchedule";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        
        {/* Widgets Section */}
        <section className="py-8 bg-muted/30">
          <div className="container px-4 md:px-8">
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <WeatherWidget />
              <CurrencyWidget />
              <TrainSchedule />
            </div>
          </div>
        </section>
        
        <ExploreGuide />
        <QuickLinks />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
