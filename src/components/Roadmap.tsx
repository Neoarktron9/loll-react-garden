import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Circle, Clock } from 'lucide-react';

const Roadmap = () => {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'The Fleek Launch',
      status: 'completed',
      items: [
        'Token creation & liquidity launch',
        'Website development',
        'Social media presence',
        'Initial community building'
      ]
    },
    {
      phase: 'Phase 2', 
      title: 'Building the Hype',
      status: 'current',
      items: [
        'CoinGecko & CoinMarketCap listings',
        'Influencer partnerships',
        'Meme contest campaigns',
        'Community growth to 10K holders'
      ]
    },
    {
      phase: 'Phase 3',
      title: 'To the Moon',
      status: 'upcoming',
      items: [
        'Major exchange listings',
        'FleekcOin merchandise store',
        'Celebrity endorsements',
        'Fleek NFT collection'
      ]
    },
    {
      phase: 'Phase 4',
      title: 'Galactic Dominance',
      status: 'upcoming',
      items: [
        'FleekcOin blockchain launch',
        'Fleek DeFi ecosystem',
        'Intergalactic partnerships',
        'Fleek space mission'
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-green-400" />;
      case 'current':
        return <Clock className="w-6 h-6 text-yellow-400" />;
      default:
        return <Circle className="w-6 h-6 text-gray-400" />;
    }
  };

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Roadmap to the Moon</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  {getStatusIcon(phase.status)}
                  <span className="text-sm font-medium text-muted-foreground">{phase.phase}</span>
                </div>
                <CardTitle className="text-foreground">{phase.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;