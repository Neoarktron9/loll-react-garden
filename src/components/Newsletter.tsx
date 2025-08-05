import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Rocket } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome to the Fleek Squad! 🚀",
        description: "You'll be the first to know when we moon!",
      });
      setEmail('');
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-3xl mb-2 text-foreground">Stay Fleek, Stay Informed</CardTitle>
              <p className="text-muted-foreground">
                Get the latest FleekcOin updates, moon mission reports, and exclusive memes delivered to your inbox
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email to join the fleek squad"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                <Button type="submit" className="whitespace-nowrap">
                  <Rocket className="w-4 h-4 mr-2" />
                  Join the Squad
                </Button>
              </form>
              <p className="text-xs text-muted-foreground mt-4 text-center">
                No spam, only fleek vibes. Unsubscribe anytime.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;