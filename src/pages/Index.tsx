import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, Zap, Users, TrendingUp, Twitter, MessageCircle, Globe } from "lucide-react";
import PriceTicker from "@/components/PriceTicker";
import PriceChart from "@/components/PriceChart";
import TokenomicsChart from "@/components/TokenomicsChart";
import CommunityStats from "@/components/CommunityStats";
import Roadmap from "@/components/Roadmap";
import TeamSection from "@/components/TeamSection";
import PartnershipShowcase from "@/components/PartnershipShowcase";
import Newsletter from "@/components/Newsletter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20">
        <div className="container mx-auto px-4 py-20 text-center">
          <PriceTicker />
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4">
              🚀 The Next Big Meme Coin
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              FleekcOin
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              The most fleek cryptocurrency that's about to send you to the moon! 🌙
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Rocket className="w-5 h-5 mr-2" />
                Buy FleekcOin
              </Button>
              <Button size="lg" variant="outline">
                <Globe className="w-5 h-5 mr-2" />
                View Chart
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-2 h-2 bg-primary rounded-full animate-ping" style={{ top: '20%', left: '10%', animationDelay: '0s' }}></div>
          <div className="absolute w-1 h-1 bg-secondary rounded-full animate-ping" style={{ top: '60%', left: '80%', animationDelay: '1s' }}></div>
          <div className="absolute w-3 h-3 bg-accent rounded-full animate-ping" style={{ top: '80%', left: '20%', animationDelay: '2s' }}></div>
        </div>
      </section>

      {/* Price Chart Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            <PriceChart />
            <TokenomicsChart />
          </div>
        </div>
      </section>

      <CommunityStats />

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Why FleekcOin is Different</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <Zap className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Lightning Fast</CardTitle>
                <CardDescription>
                  Transactions faster than your fleek TikTok scrolling
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <Users className="w-12 h-12 text-secondary mb-4" />
                <CardTitle>Community Driven</CardTitle>
                <CardDescription>
                  Built by the fleekest community in crypto
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-accent mb-4" />
                <CardTitle>Moon Potential</CardTitle>
                <CardDescription>
                  Designed to go parabolic and stay fleek
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Tokenomics</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-center">FleekcOin Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Total Supply:</span>
                      <span className="font-bold text-primary">1,000,000,000 FLEEK</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Liquidity Pool:</span>
                      <span className="font-bold text-secondary">80%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Marketing:</span>
                      <span className="font-bold text-accent">10%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Development:</span>
                      <span className="font-bold text-primary">10%</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-4">Key Features</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>✅ No Team Tokens</li>
                        <li>✅ Liquidity Locked</li>
                        <li>✅ Contract Renounced</li>
                        <li>✅ Community Owned</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Roadmap />

      <TeamSection />

      <PartnershipShowcase />

      <Newsletter />

      {/* Community Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-foreground">Join the Fleek Revolution</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Connect with thousands of fleek holders and be part of the next big thing in crypto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Twitter className="w-5 h-5 mr-2" />
              Follow on Twitter
            </Button>
            <Button size="lg">
              <MessageCircle className="w-5 h-5 mr-2" />
              Join Telegram
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 FleekcOin. All rights reserved. Remember, this is a meme coin - only invest what you can afford to lose!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
