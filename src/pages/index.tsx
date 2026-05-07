import { SEO } from "@/components/SEO";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ArticleCard } from "@/components/ArticleCard";
import { Sidebar } from "@/components/Sidebar";
import { FeaturedGrid } from "@/components/FeaturedGrid";
import { TestimonialsSlider } from "@/components/TestimonialsSlider";
import { Footer } from "@/components/Footer";

export default function Home() {
  const recentArticles = [
    {
      title: "How to Learn Spanish Fast: 10 Proven Strategies",
      excerpt: "Discover the most effective techniques used by polyglots to accelerate your Spanish learning journey. From immersion tactics to smart study habits.",
      category: "Learning Tips",
      imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
      readTime: "8 min read",
      slug: "how-to-learn-spanish-fast"
    },
    {
      title: "Spanish Alphabet Made Simple: Complete Beginner's Guide",
      excerpt: "Master the Spanish alphabet with our step-by-step guide including pronunciation tips, audio examples, and practice exercises.",
      category: "Basics",
      imageUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80",
      readTime: "6 min read",
      slug: "spanish-alphabet-guide"
    },
    {
      title: "Present Tense Conjugation: Your Essential Spanish Grammar Guide",
      excerpt: "Learn how to conjugate regular and irregular verbs in the present tense. Includes downloadable conjugation charts and practice quizzes.",
      category: "Grammar",
      imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
      readTime: "12 min read",
      slug: "present-tense-conjugation"
    },
    {
      title: "50 Essential Spanish Phrases for Travelers",
      excerpt: "Navigate airports, hotels, restaurants, and local markets with confidence. Audio pronunciations included for each phrase.",
      category: "Vocabulary",
      imageUrl: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
      readTime: "10 min read",
      slug: "essential-travel-phrases"
    },
    {
      title: "Common Spanish Mistakes (And How to Avoid Them)",
      excerpt: "Even advanced learners make these errors. Learn the most common pitfalls and how to correct them for more natural Spanish.",
      category: "Tips",
      imageUrl: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&q=80",
      readTime: "7 min read",
      slug: "common-spanish-mistakes"
    },
    {
      title: "Spanish vs English: Understanding Key Grammar Differences",
      excerpt: "Discover why Spanish grammar works differently from English and how to rewire your thinking for faster fluency.",
      category: "Grammar",
      imageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&q=80",
      readTime: "9 min read",
      slug: "spanish-vs-english-grammar"
    }
  ];

  return (
    <>
      <SEO 
        title="Let's Master Spanish - Speak Spanish, Live Spanish, Love Spanish"
        description="Proven strategies and resources to take you from beginner to fluent Spanish speaker. Join our community of successful learners today."
      />
      
      <div className="min-h-screen bg-background">
        <AnnouncementBar />
        <Header />
        <Hero />
        <FeaturedGrid />
        
        {/* Main 2-column layout: 70% Articles + 30% Sidebar */}
        <main className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-[1fr_400px] gap-12">
            {/* Left: Recent Articles Feed (70%) */}
            <div className="space-y-8">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-2">
                  Recent Articles
                </h2>
                <p className="text-foreground/70">
                  Latest lessons, tips, and strategies for Spanish learners
                </p>
              </div>
              
              <div className="grid gap-8">
                {recentArticles.map((article, idx) => (
                  <ArticleCard key={idx} {...article} />
                ))}
              </div>
            </div>

            {/* Right: Sidebar (30%) */}
            <Sidebar />
          </div>
        </main>

        <TestimonialsSlider />
        <Footer />
      </div>
    </>
  );
}