import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { BookOpen, Users, Globe, Heart } from "lucide-react";
import Head from "next/head";

export default function AboutPage() {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Let's Master Spanish",
    "url": "https://letsmasterspanish.com",
    "logo": "https://letsmasterspanish.com/logo.jpg",
    "description": "Educational blog empowering Spanish language learners from beginner to fluent through proven strategies, high-quality lessons, and community engagement.",
    "foundingDate": "2024",
    "sameAs": [
      "https://facebook.com/letsmasterspanish",
      "https://twitter.com/LetsMasterSpanish",
      "https://instagram.com/letsmasterspanish"
    ]
  };

  return (
    <>
      <SEO 
        title="About Us - Let's Master Spanish"
        description="Learn about our mission to empower Spanish language learners with proven strategies, high-quality lessons, and a supportive community."
        canonical="/about"
      />
      
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </Head>
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-20">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-6">
                About Let's Master Spanish
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto">
                We're on a mission to make Spanish fluency achievable for every adult learner through 
                proven strategies, quality content, and genuine community support.
              </p>
            </div>
          </section>

          {/* Our Story */}
          <section className="max-w-4xl mx-auto px-4 py-16">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-foreground font-heading mb-6">
                Our Story
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Let's Master Spanish was born from a simple belief: learning a new language shouldn't 
                feel overwhelming or lonely. As adult learners ourselves, we experienced firsthand the 
                frustration of scattered resources, confusing grammar explanations, and the isolation 
                of studying without a supportive community.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                That's why we created this platform — to be the resource we wished we had. Every article, 
                lesson, and tip on this site comes from real experience navigating the journey from 
                beginner to fluent Spanish speaker.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                We're proud to be part of the <strong>Academia Español Language Network</strong>, 
                delivering continuous, real-time linguistic immersion to complement your path to fluency.
              </p>
            </div>
          </section>

          {/* What We Offer */}
          <section className="bg-muted py-16">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-foreground font-heading mb-12 text-center">
                What We Offer
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="p-6 bg-card text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground font-heading mb-2">
                    Structured Lessons
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Step-by-step guides from basics to advanced topics, organized for progressive learning.
                  </p>
                </Card>

                <Card className="p-6 bg-card text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground font-heading mb-2">
                    Community Support
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Connect with fellow learners, share experiences, and grow together on your journey.
                  </p>
                </Card>

                <Card className="p-6 bg-card text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground font-heading mb-2">
                    Cultural Immersion
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Learn not just the language, but the culture, traditions, and real-world usage.
                  </p>
                </Card>

                <Card className="p-6 bg-card text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground font-heading mb-2">
                    Proven Strategies
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Techniques tested and refined by real learners who've achieved fluency.
                  </p>
                </Card>
              </div>
            </div>
          </section>

          {/* Our Team */}
          <section className="max-w-4xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-foreground font-heading mb-8 text-center">
              Meet Our Writers
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 bg-card text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">WG</span>
                </div>
                <h3 className="font-bold text-foreground font-heading mb-1">
                  Wesley Gómez
                </h3>
                <p className="text-sm text-muted-foreground">
                  Spanish language educator specializing in beginner-friendly content and learning strategies.
                </p>
              </Card>

              <Card className="p-6 bg-card text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">EG</span>
                </div>
                <h3 className="font-bold text-foreground font-heading mb-1">
                  Emillio García
                </h3>
                <p className="text-sm text-muted-foreground">
                  Grammar expert and curriculum designer with a passion for making complex topics accessible.
                </p>
              </Card>

              <Card className="p-6 bg-card text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">MR</span>
                </div>
                <h3 className="font-bold text-foreground font-heading mb-1">
                  Mauricio Rodríguez
                </h3>
                <p className="text-sm text-muted-foreground">
                  Cultural immersion specialist focusing on vocabulary, conversation, and real-world Spanish.
                </p>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-foreground py-16">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-background font-heading mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-background/80 mb-8 text-lg">
                Join thousands of learners who are mastering Spanish with our proven methods.
              </p>
              <a 
                href="https://learnspanishlikeidid.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Start Learning Now
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}