import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, Zap, Users, TrendingUp, Twitter, MessageCircle, Globe } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4 text-purple-300 bg-purple-800/30 border-purple-500">
              🚀 The Next Big Meme Coin
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
              FleekcOin
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              The most fleek cryptocurrency that's about to send you to the moon! 🌙
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0">
                <Rocket className="w-5 h-5 mr-2" />
                Buy FleekcOin
              </Button>
              <Button size="lg" variant="outline" className="border-purple-300 text-purple-300 hover:bg-purple-800/30">
                <Globe className="w-5 h-5 mr-2" />
                View Chart
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ top: '20%', left: '10%', animationDelay: '0s' }}></div>
          <div className="absolute w-1 h-1 bg-pink-400 rounded-full animate-ping" style={{ top: '60%', left: '80%', animationDelay: '1s' }}></div>
          <div className="absolute w-3 h-3 bg-blue-400 rounded-full animate-ping" style={{ top: '80%', left: '20%', animationDelay: '2s' }}></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why FleekcOin is Different</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 border-purple-500/30 text-white">
              <CardHeader>
                <Zap className="w-12 h-12 text-yellow-400 mb-4" />
                <CardTitle>Lightning Fast</CardTitle>
                <CardDescription className="text-gray-300">
                  Transactions faster than your fleek TikTok scrolling
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-gradient-to-br from-pink-900/50 to-purple-900/50 border-pink-500/30 text-white">
              <CardHeader>
                <Users className="w-12 h-12 text-pink-400 mb-4" />
                <CardTitle>Community Driven</CardTitle>
                <CardDescription className="text-gray-300">
                  Built by the fleekest community in crypto
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 border-blue-500/30 text-white">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-blue-400 mb-4" />
                <CardTitle>Moon Potential</CardTitle>
                <CardDescription className="text-gray-300">
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
          <h2 className="text-4xl font-bold text-center mb-12">Tokenomics</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/30 text-white">
              <CardHeader>
                <CardTitle className="text-2xl text-center">FleekcOin Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Total Supply:</span>
                      <span className="font-bold text-purple-300">1,000,000,000 FLEEK</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Liquidity Pool:</span>
                      <span className="font-bold text-blue-300">80%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Marketing:</span>
                      <span className="font-bold text-pink-300">10%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Development:</span>
                      <span className="font-bold text-green-300">10%</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-4">Key Features</h3>
                      <ul className="space-y-2 text-gray-300">
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

      {/* Community Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Join the Fleek Revolution</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Connect with thousands of fleek holders and be part of the next big thing in crypto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
              <Twitter className="w-5 h-5 mr-2" />
              Follow on Twitter
            </Button>
            <Button size="lg" className="bg-purple-500 hover:bg-purple-600 text-white">
              <MessageCircle className="w-5 h-5 mr-2" />
              Join Telegram
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-purple-500/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 FleekcOin. All rights reserved. Remember, this is a meme coin - only invest what you can afford to lose!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
