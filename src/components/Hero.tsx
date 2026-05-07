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

            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold">
              Start Learning Now
            </Button>
          </div>

          {/* Right: Hero image placeholder - will replace with actual image */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <p className="text-foreground/40 text-center px-8">
                [Lifestyle image: People conversing in Spain]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}