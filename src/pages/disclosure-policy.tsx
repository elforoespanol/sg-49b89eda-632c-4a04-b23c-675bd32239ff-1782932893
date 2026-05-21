import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DisclosurePolicyPage() {
  return (
    <>
      <SEO
        title="Digital Disclosure Policy - Let's Master Spanish"
        description="Disclosure policy and affiliate transparency for letsmasterspanish.com"
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
              Digital Disclosure Policy
            </h1>
            <p className="text-muted-foreground mb-1">Platform: letsmasterspanish.com</p>
            <p className="text-muted-foreground mb-1">Network Identity: Part of the Academia del Español Language Network</p>
            <p className="text-lg text-muted-foreground">Last Updated: May 2026</p>
          </div>

          {/* Content */}
          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-foreground font-heading mb-4">
                1. Our Core Mission & Editorial Integrity
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                The content published on letsmasterspanish.com (including grammar deep-dives, vocabulary guides, and cultural analyses) is written, edited, and verified by our language instruction team. Our primary objective is to deliver high-quality, practical educational resources for independent Spanish learners. We value transparency above all else; our editorial integrity cannot be bought, influenced, or compromised.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground font-heading mb-4">
                2. Internal Network Affiliation Disclosure
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                This blog is a proud digital property and informational media division of the Academia del Español Language Network.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Throughout this site, you will see recommendations, links, and banners highlighting our structured Spanish curriculum, Learn Spanish Like I Did (learnspanishlikeidid.com). Because both platforms belong to the same overarching language ecosystem, we have a direct interest in promoting our own curriculum. We feature these links because we genuinely believe our course provides the absolute best step-by-step roadmap to complement the free lessons found on this blog.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground font-heading mb-4">
                3. External Recommendations & Affiliate Links
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                To maintain letsmasterspanish.com as a free resource for readers, we may occasionally recommend external language learning tools, books, dictionaries, or immersive software that we have thoroughly vetted and used ourselves.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
                <li><strong>The Incentive:</strong> If you click on an external link and make a purchase from that third party, we may receive a small commission at no additional cost to you.</li>
                <li><strong>Our Promise:</strong> We only recommend resources that align perfectly with our educational standards. We will never promote a tool or service simply for financial incentive.</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed">
                Every single article containing external affiliate tracking links will feature a clear statement at the very top of the page reading: "This post contains affiliate links. If you purchase through them, we earn a commission at zero extra cost to you."
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground font-heading mb-4">
                4. Sponsored Content Policy
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                We do not publish paid guest posts, pre-written corporate articles, or hidden promotional tracking scripts on behalf of third-party companies. If a language software or publishing brand ever sponsors an article on this blog, the piece will be explicitly and prominently labelled at the top as "Sponsored Content" or "Advertisement" to maintain complete alignment with UK consumer protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground font-heading mb-4">
                5. Questions or Contact
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                If you have any questions regarding our disclosure policies, corporate network framework, or commercial tracking parameters, please reach out to our editorial desk directly at: <a href="mailto:editor@academiadelespanol.com" className="text-primary hover:underline">editor@academiadelespanol.com</a>.
              </p>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}