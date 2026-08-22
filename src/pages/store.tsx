import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ShoppingBag, BookOpen, Headphones, Disc, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StorePage() {
  const products = [
    {
      title: "Complete Spanish Course Bundle",
      description: "Everything you need to reach conversational fluency: video lessons, audio drills, and a comprehensive workbook.",
      price: "$97",
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      badge: "Bestseller",
    },
    {
      title: "Spanish Audio Immersion Pack",
      description: "30+ hours of native dialogues, shadowing exercises, and pronunciation training for confident speaking.",
      price: "$47",
      icon: <Headphones className="w-8 h-8 text-primary" />,
      badge: "Popular",
    },
    {
      title: "Verb Mastery DVD Series",
      description: "Visual breakdown of the 50 most essential Spanish verbs with conjugation patterns and real-life usage examples.",
      price: "$37",
      icon: <Disc className="w-8 h-8 text-primary" />,
      badge: null,
    },
    {
      title: "Travel Spanish Quick Guide",
      description: "Phrases, vocabulary, and cultural tips specifically designed for travelers visiting Spanish-speaking countries.",
      price: "$19",
      icon: <ShoppingBag className="w-8 h-8 text-primary" />,
      badge: "New",
    },
  ];

  return (
    <>
      <SEO
        title="Spanish Learning Store - Let's Master Spanish"
        description="Shop curated Spanish learning courses, audio packs, DVDs, and digital guides. Hand-picked materials to accelerate your path to fluency."
        canonical="/store"
      />

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        {/* Back to Home Link */}
        <div className="max-w-5xl mx-auto px-4 pt-8 w-full">
          <Link href="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        <main className="flex-1 max-w-5xl mx-auto px-4 py-12 w-full">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-heading">
              Spanish Learning Store
            </h1>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Curated courses, audio packs, and guides designed by language experts to help you master Spanish faster.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl">{product.icon}</div>
                  {product.badge && (
                    <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {product.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 font-heading">{product.title}</h3>
                <p className="text-foreground/70 mb-4 leading-relaxed">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                  <button className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-muted p-8 rounded-2xl border border-border text-center">
            <h2 className="text-2xl font-bold text-foreground mb-3 font-heading">Free Resources First?</h2>
            <p className="text-foreground/80 mb-6 max-w-xl mx-auto">
              Not ready to purchase? Explore hundreds of free articles, grammar guides, and vocabulary lessons on our blog.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
            >
              Browse Free Content <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}