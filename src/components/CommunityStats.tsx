import { Card, CardContent } from '@/components/ui/card';
import { Users, MessageCircle, Twitter, TrendingUp } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const CommunityStats = () => {
  const stats = [
    {
      icon: Users,
      label: 'Holders',
      value: 42069,
      suffix: '',
      color: 'text-purple-400'
    },
    {
      icon: Twitter,
      label: 'Twitter Followers',
      value: 13420,
      suffix: '',
      color: 'text-blue-400'
    },
    {
      icon: MessageCircle,
      label: 'Telegram Members',
      value: 6969,
      suffix: '',
      color: 'text-pink-400'
    },
    {
      icon: TrendingUp,
      label: 'Market Cap',
      value: 420690,
      prefix: '$',
      color: 'text-green-400'
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Community Stats</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border text-center">
              <CardContent className="p-6">
                <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                <div className="mb-2">
                  <AnimatedCounter 
                    end={stat.value} 
                    prefix={stat.prefix} 
                    suffix={stat.suffix}
                  />
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityStats;