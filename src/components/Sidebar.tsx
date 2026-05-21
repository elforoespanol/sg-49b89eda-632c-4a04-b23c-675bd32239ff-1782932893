import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";

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
            <p className="text-sm text-foreground/70 mt-2 leading-relaxed">
              Native Spanish speaker with 10+ years teaching experience. Passionate about making Spanish accessible to everyone.
            </p>
          </div>
        </div>
      </Card>

      {/* Popular Posts */}
      <Card className="p-6 border-border">
        <h3 className="font-bold text-lg font-heading text-foreground mb-4">Popular Posts</h3>
        <div className="space-y-3">
          {popularLessons.map((lesson, idx) => (
            <a 
              key={idx} 
              href="#" 
              className="flex items-center gap-3 group hover:bg-muted/50 p-2 rounded transition-colors"
            >
              <div className="w-16 h-16 rounded bg-muted flex-shrink-0">
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 rounded flex items-center justify-center text-xs text-foreground/40">
                  Lesson {idx + 1}
                </div>
              </div>
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                {lesson.title}
              </span>
            </a>
          ))}
        </div>
      </Card>

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