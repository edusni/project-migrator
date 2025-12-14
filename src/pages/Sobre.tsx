import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { ContentCard } from "@/components/ContentCard";
import { User, Heart, MapPin, Lightbulb, Target, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Sobre = () => {
  return (
    <PageLayout>
      <PageHero
        icon={User}
        title="Who is Du?"
        description="And why Amsterdu exists"
      />

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Intro */}
            <Card className="mb-12 overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-amsterdam-orange to-amsterdam-blue flex items-center justify-center text-6xl">
                    👋
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                      Hi, I am Du.
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      If there is one thing you need to know about me right away: <strong>I am in love with Amsterdam.</strong>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Story */}
            <div className="prose prose-lg max-w-none mb-12">
              <Card className="mb-8">
                <CardContent className="p-8">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    My history with the city is not about a quick weekend visit. I have been there many times, built true friendships with locals, and with each trip, I discover a new layer of this incredible city.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Soon, Amsterdam will stop being just my favorite destination and officially become my home.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    But while the final move does not happen, I live in constant "research mode". I am not a traditional, distant tour guide. I am someone like you, but who decided to dive deep: I talk to people who live there, study the history, understand the struggles, and test each recommendation before sharing it here.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* What you will find */}
            <Card className="mb-12 bg-gradient-to-br from-amsterdam-orange/5 to-amsterdam-blue/5 border-2 border-amsterdam-orange/20">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8">
                  What will you find at Amsterdu?
                </h2>
                <p className="text-center text-muted-foreground mb-8">
                  The result of my relentless search to discover what is truly worth it.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <CheckCircle className="w-10 h-10 text-amsterdam-orange mx-auto mb-3" />
                    <h3 className="font-bold mb-2">Validated Tips</h3>
                    <p className="text-sm text-muted-foreground">By me and my Dutch friends.</p>
                  </div>
                  <div className="text-center">
                    <Lightbulb className="w-10 h-10 text-amsterdam-orange mx-auto mb-3" />
                    <h3 className="font-bold mb-2">Curious Perspective</h3>
                    <p className="text-sm text-muted-foreground">That goes far beyond the tourist obvious.</p>
                  </div>
                  <div className="text-center">
                    <MapPin className="w-10 h-10 text-amsterdam-orange mx-auto mb-3" />
                    <h3 className="font-bold mb-2">Real Preparation</h3>
                    <p className="text-sm text-muted-foreground">Of someone who is packing their bags.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="text-center">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground mb-6">
                  Amsterdu is my invitation for you to discover the city alongside me, learning from my successes and avoiding the traps.
                </p>
                <p className="text-xl font-heading font-bold text-amsterdam-orange mb-6">
                  Welcome to my future home.
                </p>
                <p className="text-muted-foreground mb-8">- Du</p>
                
                <h3 className="font-heading font-bold text-xl mb-6">Ready to Start?</h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  <Link to="/planejamento">
                    <Button variant="outline" className="w-full h-auto py-4 flex flex-col">
                      <span className="font-bold">📅 Planning</span>
                      <span className="text-xs text-muted-foreground">Pain-Free</span>
                    </Button>
                  </Link>
                  <Link to="/hospedagem">
                    <Button variant="outline" className="w-full h-auto py-4 flex flex-col">
                      <span className="font-bold">🏨 Where to Stay</span>
                      <span className="text-xs text-muted-foreground">The Real Deal</span>
                    </Button>
                  </Link>
                  <Link to="/atracoes">
                    <Button variant="outline" className="w-full h-auto py-4 flex flex-col">
                      <span className="font-bold">🎨 What to Do</span>
                      <span className="text-xs text-muted-foreground">The Essentials</span>
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Sobre;
