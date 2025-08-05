import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Twitter, Linkedin } from 'lucide-react';

const TeamSection = () => {
  const team = [
    {
      name: 'Chad McFleek',
      role: 'Chief Fleek Officer',
      bio: 'Former meme lord turned crypto visionary. Expert in making numbers go up.',
      avatar: '/placeholder.svg',
      initials: 'CM',
      twitter: '#',
      linkedin: '#'
    },
    {
      name: 'Luna Moonwalker',
      role: 'Head of Vibes',
      bio: 'Professional hype woman and moon mission coordinator.',
      avatar: '/placeholder.svg', 
      initials: 'LM',
      twitter: '#',
      linkedin: '#'
    },
    {
      name: 'Doge Fleekinson',
      role: 'Community Guardian',
      bio: 'Much community, very engage, such fleek. Wow.',
      avatar: '/placeholder.svg',
      initials: 'DF', 
      twitter: '#',
      linkedin: '#'
    },
    {
      name: 'Satoshi Fleekmoto',
      role: 'Blockchain Wizard',
      bio: 'Anonymous developer who codes in memes and dreams in lambos.',
      avatar: '/placeholder.svg',
      initials: 'SF',
      twitter: '#',
      linkedin: '#'
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Meet the Fleek Team</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Our team of meme experts and crypto enthusiasts working 24/7 to make FleekcOin the most fleek coin in the universe
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border text-center">
              <CardContent className="p-6">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.initials}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold mb-1 text-foreground">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                <div className="flex justify-center gap-3">
                  <a href={member.twitter} className="text-muted-foreground hover:text-blue-400 transition-colors">
                    <Twitter size={18} />
                  </a>
                  <a href={member.linkedin} className="text-muted-foreground hover:text-blue-600 transition-colors">
                    <Linkedin size={18} />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;