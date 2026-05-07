import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <>
      <SEO 
        title="Let's Master Spanish - Speak Spanish, Live Spanish, Love Spanish"
        description="Proven strategies and resources to take you from beginner to fluent Spanish speaker. Join our community of successful learners today."
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        <Hero />
        
        {/* Main content area - to be built in next iteration */}
        <main className="max-w-7xl mx-auto px-4 py-12">
          <p className="text-center text-foreground/60">Main content sections coming next...</p>
        </main>
      </div>
    </>
  );
}