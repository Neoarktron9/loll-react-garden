import { Card, CardContent } from '@/components/ui/card';

const PartnershipShowcase = () => {
  const partners = [
    { name: 'MoonDEX', logo: '🚀', description: 'Premier meme coin exchange' },
    { name: 'FleekySwap', logo: '💫', description: 'Decentralized trading platform' },
    { name: 'CryptoMemes Inc', logo: '😎', description: 'Meme marketing agency' },
    { name: 'LunarLabs', logo: '🌙', description: 'Blockchain development studio' },
    { name: 'Vibe Capital', logo: '✨', description: 'Crypto venture capital' },
    { name: 'FleekcDAO', logo: '🏛️', description: 'Decentralized governance' }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Our Fleek Partners</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Collaborating with the most fleek organizations in the crypto space to bring you maximum value
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border text-center hover:scale-105 transition-transform">
              <CardContent className="p-4">
                <div className="text-3xl mb-2">{partner.logo}</div>
                <h3 className="font-semibold text-sm mb-1 text-foreground">{partner.name}</h3>
                <p className="text-xs text-muted-foreground">{partner.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipShowcase;