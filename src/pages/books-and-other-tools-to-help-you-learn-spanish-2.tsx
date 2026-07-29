import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BookOpen, Headphones, Globe, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

const books = [
  {
    title: "Madrigal's Magic Key to Spanish",
    author: "Margarita Madrigal",
    description: "A classic, creative approach to learning Spanish through patterns and cognates. Ideal for beginners who want to build vocabulary fast through word associations.",
    level: "Beginner",
    rating: 4.7,
  },
  {
    title: "Practice Makes Perfect: Complete Spanish Grammar",
    author: "Gilda Nissenberg",
    description: "Comprehensive grammar workbook with hundreds of exercises covering every tense and mood. The go-to resource for mastering Spanish grammar systematically.",
    level: "All Levels",
    rating: 4.8,
  },
  {
    title: "501 Spanish Verbs",
    author: "Christopher Kendris",
    description: "The definitive verb conjugation reference. Contains fully conjugated verbs plus idioms and expressions. Essential for intermediate and advanced learners.",
    level: "Intermediate",
    rating: 4.6,
  },
  {
    title: "Easy Spanish Step-by-Step",
    author: "Barbara Bregstein",
    description: "A structured grammar-based approach that builds logically from basic to advanced concepts. Perfect for self-study students who want a clear progression path.",
    level: "Beginner to Intermediate",
    rating: 4.5,
  },
  {
    title: "Spanish Short Stories for Beginners",
    author: "Olly Richards",
    description: "Engaging short stories written specifically for beginner Spanish learners. Includes vocabulary lists and comprehension questions to reinforce learning.",
    level: "Beginner",
    rating: 4.4,
  },
  {
    title: "Breaking Out of Beginner's Spanish",
    author: "Joseph Keenan",
    description: "Practical tips for overcoming the intermediate plateau. Focuses on colloquial expressions, cultural nuances, and real-world communication strategies.",
    level: "Intermediate",
    rating: 4.5,
  },
];

const tools = [
  {
    title: "italki",
    type: "Online Tutoring",
    description: "Connect with native Spanish tutors for 1-on-1 lessons at affordable rates. Filter by accent, specialty, and price to find your perfect teacher.",
    rating: 4.8,
  },
  {
    title: "Anki",
    type: "Flashcard App",
    description: "Powerful spaced repetition flashcard app. Create custom decks for vocabulary, grammar, and phrases. The most effective tool for long-term memory retention.",
    rating: 4.7,
  },
  {
    title: "SpanishDict",
    type: "Dictionary & Translator",
    description: "Comprehensive Spanish-English dictionary with audio pronunciations, conjugation tables, and example sentences. Includes grammar guides and vocabulary quizzes.",
    rating: 4.6,
  },
  {
    title: "Netflix Language Learning",
    type: "Immersion Tool",
    description: "Use browser extensions like Language Reactor to watch Spanish shows with dual subtitles, instant translations, and vocabulary saving features.",
    rating: 4.5,
  },
  {
    title: "Tandem / HelloTalk",
    type: "Language Exchange",
    description: "Free apps that connect you with native Spanish speakers who want to learn English. Practice texting, voice messages, and video calls for real conversation practice.",
    rating: 4.4,
  },
  {
    title: "Pimsleur Spanish",
    type: "Audio Course",
    description: "Audio-based method focused on spoken Spanish and pronunciation. 30-minute daily lessons you can do while commuting. Excellent for developing listening skills.",
    rating: 4.3,
  },
];

export default function BooksAndToolsPage() {
  return (
    <>
      <SEO
        title="Best Books & Tools to Learn Spanish (2026 Guide) - Let's Master Spanish"
        description="Discover the top-rated books, apps, and tools for learning Spanish in 2026. Expert reviews of textbooks, online tutors, flashcard apps, and immersion resources for every level."
      />

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-1 max-w-6xl mx-auto px-4 py-12 w-full">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-4">
              Best Books & Tools to Help You Learn Spanish
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert-curated resources for every level — from beginner textbooks to advanced immersion tools. Find what works for your learning style.
            </p>
          </div>

          {/* Books Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="w-7 h-7 text-primary" />
              <h2 className="text-3xl font-bold text-foreground font-heading">
                Recommended Books
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {books.map((book) => (
                <div
                  key={book.title}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">
                      {book.level}
                    </span>
                    <div className="flex items-center gap-1 text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium">{book.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1 font-heading">
                    {book.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    by {book.author}
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    {book.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Tools Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Headphones className="w-7 h-7 text-primary" />
              <h2 className="text-3xl font-bold text-foreground font-heading">
                Essential Digital Tools
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool) => (
                <div
                  key={tool.title}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">
                      {tool.type}
                    </span>
                    <div className="flex items-center gap-1 text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium">{tool.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 font-heading">
                    {tool.title}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed text-sm">
                    {tool.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
            <Globe className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-3 font-heading">
              Start Your Spanish Journey Today
            </h2>
            <p className="text-foreground/80 mb-6 max-w-xl mx-auto">
              Combine these tools with our free grammar guides, vocabulary lessons, and cultural tips for the fastest path to fluency.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
            >
              Explore Free Lessons <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}