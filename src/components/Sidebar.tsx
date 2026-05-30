import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";
import Link from "next/link";

export function SidebarWidgets() {
  return (
    <section className="bg-muted py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-[1fr_400px] gap-12">
          {/* Popular Lessons */}
          <div>
            <h2 className="text-3xl font-bold text-foreground font-heading mb-8">Popular Lessons</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/blog/spain-vs-latin-american-spanish" className="flex gap-3 group bg-card rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src="/generated/hero-spanish-conversation.png" 
                  alt="Spain vs Latin American Spanish"
                  className="w-16 h-16 object-cover rounded flex-shrink-0 group-hover:opacity-75 transition-opacity"
                />
                <div>
                  <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                    Spain vs Latin American Spanish
                  </h4>
                </div>
              </Link>
              
              <Link href="/blog/learn-spanish-learning-at-night-school" className="flex gap-3 group bg-card rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src="/generated/hero-spanish-conversation.png" 
                  alt="Learn Spanish: Learning At Night School"
                  className="w-16 h-16 object-cover rounded flex-shrink-0 group-hover:opacity-75 transition-opacity"
                />
                <div>
                  <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                    Learn Spanish: Learning At Night School
                  </h4>
                </div>
              </Link>
              
              <Link href="/blog/learn-spanish-private-tuition" className="flex gap-3 group bg-card rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src="/generated/hero-spanish-conversation.png" 
                  alt="Learn Spanish: Private Tuition"
                  className="w-16 h-16 object-cover rounded flex-shrink-0 group-hover:opacity-75 transition-opacity"
                />
                <div>
                  <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                    Learn Spanish: Private Tuition
                  </h4>
                </div>
              </Link>
              
              <Link href="/blog/learn-spanish-audiobooks-podcasts-youtube" className="flex gap-3 group bg-card rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src="/generated/hero-spanish-conversation.png" 
                  alt="Learn Spanish: Audiobooks, Podcasts & YouTube"
                  className="w-16 h-16 object-cover rounded flex-shrink-0 group-hover:opacity-75 transition-opacity"
                />
                <div>
                  <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                    Learn Spanish: Audiobooks, Podcasts & YouTube
                  </h4>
                </div>
              </Link>
              
              <Link href="/blog/learn-spanish-tips-and-tricks" className="flex gap-3 group bg-card rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src="/generated/hero-spanish-conversation.png" 
                  alt="Learn Spanish: Tips and Tricks"
                  className="w-16 h-16 object-cover rounded flex-shrink-0 group-hover:opacity-75 transition-opacity"
                />
                <div>
                  <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                    Learn Spanish: Tips and Tricks
                  </h4>
                </div>
              </Link>
            </div>
          </div>

          {/* Newsletter Opt-in */}
          <div>
            <Card className="p-6 border-border bg-gradient-to-br from-primary/5 to-accent/5 h-full flex flex-col justify-center">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-accent flex items-center justify-center">
                  <Mail className="h-6 w-6 text-accent-foreground" />
                </div>
                
                <div>
                  <h3 className="font-bold text-lg font-heading text-foreground">Join the Community</h3>
                  <p className="text-sm text-foreground/70 mt-1">
                    Get weekly Spanish tips delivered to your inbox!
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Input 
                    type="email" 
                    placeholder="Your email address" 
                    className="bg-background border-border"
                  />
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Subscribe Now
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}