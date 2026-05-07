import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FeaturedGrid() {
  const categories = [
    {
      title: "Beginner Path",
      description: "Start your Spanish journey with our structured beginner curriculum",
      icon: "🎯",
      href: "/spanish-basics",
      color: "from-primary/10 to-primary/5"
    },
    {
      title: "Verb Conjugation",
      description: "Master Spanish verbs with clear explanations and practice exercises",
      icon: "📚",
      href: "/grammar",
      color: "from-accent/10 to-accent/5"
    },
    {
      title: "Travel Phrases",
      description: "Essential expressions for traveling confidently in Spanish-speaking countries",
      icon: "✈️",
      href: "/vocabulary",
      color: "from-primary/10 to-primary/5"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 bg-background">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-4">
          Popular Learning Paths
        </h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Choose your focus area and start making progress today
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {categories.map((cat, idx) => (
          <Card key={idx} className={`p-8 border-border hover:shadow-lg transition-shadow bg-gradient-to-br ${cat.color}`}>
            <div className="space-y-4">
              <div className="text-5xl">{cat.icon}</div>
              
              <h3 className="text-2xl font-bold text-foreground font-heading">
                {cat.title}
              </h3>
              
              <p className="text-foreground/70 leading-relaxed">
                {cat.description}
              </p>
              
              <Link href={cat.href}>
                <Button variant="ghost" className="group p-0 h-auto font-semibold text-primary hover:text-primary/80">
                  Explore Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}