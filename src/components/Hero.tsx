import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-heading leading-tight">
              Speak Spanish, Live Spanish, Love Spanish!
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
              Proven strategies and resources to take you from beginner to fluent.
            </p>

            <Link href="https://learnspanishlikeidid.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold">
                Start Learning Now
              </Button>
            </Link>
          </div>

          {/* Right: Hero image */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
            <img 
              src="/generated/hero-spanish-conversation.png" 
              alt="People conversing in Spanish at a vibrant outdoor café"
              loading="eager"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}