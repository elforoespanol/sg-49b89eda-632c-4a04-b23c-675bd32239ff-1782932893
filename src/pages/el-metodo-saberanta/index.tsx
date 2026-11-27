import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Head from "next/head";

const STAGES = [
  {
    number: "01",
    title: "CONTEXT",
    description: "Discover Spanish through meaningful situations, familiar experiences and everyday communication.",
  },
  {
    number: "02",
    title: "LEARN",
    description: "Build a clear understanding of vocabulary, grammar, pronunciation and sentence structure.",
  },
  {
    number: "03",
    title: "APPLY",
    description: "Put new knowledge into practice through exercises, sentence construction and practical activities.",
  },
  {
    number: "04",
    title: "REFINE",
    description: "Strengthen understanding through repetition, feedback, correction and knowledge checks.",
  },
  {
    number: "05",
    title: "OWN",
    description: "Develop the confidence and ability to use Spanish independently in real-life situations.",
  },
];

export default function MetodoSaberantaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "El Método Saberanta | A More Thoughtful Way to Learn Spanish",
    "description": "Discover El Método Saberanta, the five-stage Spanish teaching methodology developed by Academia del Español.",
    "url": "https://letsmasterspanish.com/el-metodo-saberanta/",
    "publisher": {
      "@type": "Organization",
      "name": "Let's Master Spanish",
      "url": "https://letsmasterspanish.com"
    }
  };

  return (
    <>
      <SEO
        title="El Método Saberanta | A More Thoughtful Way to Learn Spanish"
        description="Discover El Método Saberanta, the five-stage Spanish teaching methodology developed by Academia del Español. Understand, practise and build confidence in Spanish."
        canonical="/el-metodo-saberanta/"
      />

      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <div className="max-w-4xl mx-auto px-4 pt-8 w-full">
          <Link href="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-[#173E52]/5 to-primary/5 py-20">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-4">
                El Método Saberanta
              </h1>
              <p className="text-xl md:text-2xl text-[#173E52] font-heading mb-8">
                A More Thoughtful Way to Learn Spanish
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto">
                Learning Spanish is about more than memorising vocabulary and grammar rules. It is about understanding how the language works, putting that knowledge into practice and gradually developing the confidence to communicate independently.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto mt-4">
                This philosophy is reflected in <strong>El Método Saberanta</strong>, the Spanish teaching methodology developed by <strong>Academia del Español</strong>.
              </p>
            </div>
          </section>

          {/* Five Stages */}
          <section className="max-w-4xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-foreground font-heading mb-12 text-center">
              The Five Stages
            </h2>
            <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
              Saberanta brings together five connected stages to create a structured and practical approach to language learning.
            </p>

            <div className="space-y-8">
              {STAGES.map((stage) => (
                <Card key={stage.number} className="p-6 md:p-8 bg-card border-l-4 border-l-[#B87557]">
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                    <div className="flex-shrink-0">
                      <span className="text-5xl md:text-6xl font-bold text-[#173E52]/20 font-heading">
                        {stage.number}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#173E52] font-heading mb-2 uppercase tracking-wide">
                        {stage.title}
                      </h3>
                      <p className="text-foreground/80 leading-relaxed">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Why This Approach Matters */}
          <section className="bg-muted py-16">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-foreground font-heading mb-8 text-center">
                Why This Approach Matters
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Many learners spend considerable time memorising words and studying grammar without always understanding how to bring everything together in conversation.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Saberanta aims to connect these elements into a coherent learning journey.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  It encourages learners to understand new language, practise actively, reinforce what they know and gradually become more independent users of Spanish.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  The emphasis is on meaningful progress rather than unrealistic promises of instant fluency.
                </p>
              </div>
            </div>
          </section>

          {/* The Philosophy */}
          <section className="max-w-4xl mx-auto px-4 py-16 text-center">
            <h2 className="text-3xl font-bold text-foreground font-heading mb-8">
              The Philosophy
            </h2>
            <blockquote className="text-3xl md:text-4xl font-bold text-[#173E52] font-heading mb-8">
              Understand it. Practise it. Own it.
            </blockquote>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto">
              This simple principle captures the thinking behind Saberanta. Learning should begin with understanding, develop through active practice and ultimately lead to the ability to use Spanish independently.
            </p>
          </section>

          {/* Developed by Academia del Español */}
          <section className="bg-[#173E52] py-16">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-white font-heading mb-6">
                Developed by Academia del Español
              </h2>
              <div className="text-white/80 leading-relaxed max-w-2xl mx-auto space-y-4 mb-8">
                <p>
                  El Método Saberanta was developed by <strong className="text-white">Academia del Español</strong> as part of the <strong className="text-white">Academia del Español Digital Language Learning Network</strong>.
                </p>
                <p>
                  It provides the educational philosophy behind the network&apos;s Spanish-learning programmes, including the flagship course:
                </p>
                <p className="text-xl font-bold text-white font-heading">
                  Learn Spanish Like I Did
                </p>
                <p>
                  For more information about the methodology and the educational programmes offered by Academia del Español, visit:
                </p>
              </div>
              <a
                href="https://academiadelespanol.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Discover Academia del Español
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}