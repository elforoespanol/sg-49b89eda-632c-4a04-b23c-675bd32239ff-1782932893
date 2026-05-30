import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";
import Link from "next/link";

export function Sidebar() {
  const popularLessons = [
    { title: "Spanish Alphabet for Beginners", thumbnail: "/generated/lesson-alphabet.png" },
    { title: "Master the Present Tense", thumbnail: "/generated/lesson-present-tense.png" },
    { title: "Essential Travel Phrases", thumbnail: "/generated/lesson-travel.png" },
    { title: "Common Spanish Mistakes", thumbnail: "/generated/lesson-mistakes.png" },
    { title: "Past Tense Explained Simply", thumbnail: "/generated/lesson-past-tense.png" },
  ];

  return (
    <aside className="space-y-6">
      {/* About Widget */}
      <Card className="p-6 border-border">
        <div className="text-center space-y-4">
          <a href="https://www.italki.com/en/affshare?ref=af23205158" target="_blank" rel="noopener noreferrer" className="block group">
            <img src="/italki-banner.jpg" alt="About the Instructor" className="w-24 h-24 mx-auto rounded-full object-cover ring-2 ring-primary/20 group-hover:ring-primary transition-all" />
          </a>
          
          <div>
            <h3 className="font-bold text-lg font-heading text-foreground">About the Instructor</h3>
            <div className="text-sm text-foreground/70 mt-2 leading-relaxed space-y-1">
              <p>Start real learning, see clear progress</p>
              <p>Flexibility: No subscriptions. Choose your own schedule</p>
              <p>Tired of app learning? Speak with a native teacher</p>
              <p>A wide variety of tutors for all levels and learning styles</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Popular Lessons */}
      <div>
        <h3 className="font-bold text-lg font-heading text-foreground mb-4">Popular Lessons</h3>
        <div className="space-y-4">
          <Link href="/blog/spain-vs-latin-american-spanish" className="flex gap-3 group">
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
          
          <Link href="/blog/learn-spanish-learning-at-night-school" className="flex gap-3 group">
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
          
          <Link href="/blog/learn-spanish-private-tuition" className="flex gap-3 group">
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
          
          <Link href="/blog/learn-spanish-audiobooks-podcasts-youtube" className="flex gap-3 group">
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
          
          <Link href="/blog/learn-spanish-tips-and-tricks" className="flex gap-3 group">
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
      <Card className="p-6 border-border bg-gradient-to-br from-primary/5 to-accent/5">
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
    </aside>
  );
}