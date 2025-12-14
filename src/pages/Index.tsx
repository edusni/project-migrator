import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ExploreGuide } from "@/components/ExploreGuide";
import { QuickLinks } from "@/components/QuickLinks";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ExploreGuide />
        <QuickLinks />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
