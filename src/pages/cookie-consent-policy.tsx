import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CookieConsentPolicyPage() {
  return (
    <>
      <SEO
        title="Cookie & Consent Policy - Let's Master Spanish"
        description="Learn how letsmasterspanish.com uses cookies and tracking technologies, what data we collect, and how you can manage or withdraw your consent at any time."
      />

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-1 max-w-3xl mx-auto px-4 py-16 w-full">
          <Link href="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-4">
              Cookie & Consent Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Last Updated: May 2026
            </p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-foreground font-heading mb-4">
                1. How We Use Cookies on Our Publication
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                To keep our Spanish learning blog a high-quality, free resource, letsmasterspanish.com utilizes tracking cookies to analyze reader engagement patterns, determine which grammar guides are trending, and prevent comment-section spam.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground font-heading mb-4">
                2. Our Cookie Matrix
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                By interacting with our editorial publication, you may encounter:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li><strong>Performance & Analytics Cookies:</strong> Powered by GDPR-compliant tools (such as Google Analytics) to monitor aggregate reading times, bounce rates, and traffic sources. These are blocked by default until you grant explicit consent.</li>
                <li><strong>Functional Cookies:</strong> Used to remember user inputs, such as saving your name or email address within comment forms for your future convenience.</li>
                <li><strong>Essential Security Cookies:</strong> Operational scripts deployed to protect our blog databases from automated malicious attacks.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground font-heading mb-4">
                3. Your Rights & Opt-Out Process
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                You hold total authority over your reading data loop. You can modify, adjust, or completely revoke your cookie tracking consent choices at any moment by clicking the "Cookie Settings" link located in our footer, or by clicking "Reject Non-Essential" on our automated landing pop-up banner.
              </p>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}