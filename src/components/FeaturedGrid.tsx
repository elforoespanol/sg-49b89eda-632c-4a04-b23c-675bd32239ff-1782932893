import { BookOpen, BookMarked, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FeaturedGrid() {
  return (
    <section className="bg-muted py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading text-center mb-12">
          Popular Learning Paths
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Beginner Path */}
          <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            
            <h3 className="text-xl font-bold text-foreground font-heading mb-3">
              Beginner Path
            </h3>
            
            <p className="text-muted-foreground mb-4">
              Start your Spanish journey with our structured beginner curriculum covering basics, pronunciation, and essential grammar.
            </p>
            
            <Link href="https://learnspanishlikeidid.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full">
                Explore Now
              </Button>
            </Link>
          </div>

          {/* Verb Conjugation */}
          <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
              <BookMarked className="h-8 w-8 text-primary" />
            </div>
            
            <h3 className="text-xl font-bold text-foreground font-heading mb-3">
              Verb Conjugation
            </h3>
            
            <p className="text-muted-foreground mb-4">
              Master Spanish verbs with our comprehensive conjugation guides, practice exercises, and memory techniques.
            </p>
            
            <Link href="https://learnspanishlikeidid.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full">
                Explore Now
              </Button>
            </Link>
          </div>

          {/* Travel Phrases */}
          <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
              <Plane className="h-8 w-8 text-primary" />
            </div>
            
            <h3 className="text-xl font-bold text-foreground font-heading mb-3">
              Travel Phrases
            </h3>
            
            <p className="text-muted-foreground mb-4">
              Learn essential Spanish phrases for travel, dining, shopping, and navigating Spanish-speaking countries with confidence.
            </p>
            
            <Link href="https://learnspanishlikeidid.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full">
                Explore Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}