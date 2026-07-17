import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TermsOfBusinessPage() {
  return (
    <>
      <SEO
        title="Terms of Business - Let's Master Spanish"
        description="Review the terms of business for letsmasterspanish.com, covering editorial use, copyright, user communications, and the legal framework of our publication."
      />

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-1 max-w-3xl mx-auto px-4 py-16 w-full">
          {/* Back Link */}
          <Link href="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>

          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-4">
              Terms of Business
            </h1>
            <p className="text-lg text-muted-foreground">
              Last Updated: May 2026
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground font-heading mb-4">
                1. Network Identity
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                The digital publication letsmasterspanish.com operates strictly as a free media division, content channel, and digital product of the Academia del Español Language Network.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground font-heading mb-4">
                2. Editorial Use & Educational Disclaimer
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                The content published on this blog (including grammar deep-dives, vocabulary breakdowns, and cultural insight pieces) is intended solely for general informational and language enrichment purposes. While we strive for extreme linguistic precision, language is fluid and evolving; we do not guarantee the absolute error-free nature of historical or regional slang archives.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground font-heading mb-4">
                3. Copyright & Re-Posting Limitations
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                All original editorial articles, graphics, and custom cultural explanations are copyrighted assets of the Academia del Español Language Network. Short snippets may be shared on social media or language forums provided a direct, clean hyperlink attribute is pointed back to the original source article on letsmasterspanish.com. Complete scraping or wholesale republication of articles is strictly forbidden.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground font-heading mb-4">
                4. User-Generated Communications
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Any commentary, message boards input, or content queries submitted to our publication interfaces must remain lawful, respectful, and free of promotional tracking codes. We reserve absolute rights to erase any user-generated text fields that violate these boundaries.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground font-heading mb-4">
                5. Editorial Enquiries
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                For all editorial suggestions, resource corrections, or content submission parameters, contact: <a href="mailto:editor@academiadelespanol.com" className="text-primary hover:underline">editor@academiadelespanol.com</a>. These terms are governed by the legal frameworks of England and Wales.
              </p>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}