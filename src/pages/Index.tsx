import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturedPosts } from "@/components/FeaturedPosts";
import { Categories } from "@/components/Categories";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturedPosts />
        <Categories />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
