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
        <section className="section-spacing bg-muted/30">
          <div className="container container-padding">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto stagger-animation">
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
