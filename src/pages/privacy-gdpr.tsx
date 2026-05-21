import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PrivacyGDPRPage() {
  return (
    <>
      <SEO
        title="Privacy & GDPR Policy - Let's Master Spanish"
        description="Privacy and GDPR policy for letsmasterspanish.com"
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
              Privacy & GDPR Policy
            </h1>
            <p className="text-lg text-muted-foreground mb-2">
              Platform: letsmasterspanish.com
            </p>
            <p className="text-lg text-muted-foreground">
              Last Updated: May 2026
            </p>
          </div>

          {/* Content */}
          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-foreground font-heading mb-4">
                1. Introduction and Data Controller
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Welcome to the privacy notice for letsmasterspanish.com. This digital publication operates strictly as a media division, content channel, and digital product of the Academia del Español Language Network.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                For the purposes of the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018, the central administration team of Academia del Español acts as the primary Data Controller. We treat your reader privacy with the highest level of care and respect.
              </p>
              <ul className="list-disc pl-6 space-y-1 text-foreground/80">
                <li>Network Parent Portal: <a href="https://academiadelespanol.com" className="text-primary hover:underline">academiadelespanol.com</a></li>
                <li>Dedicated Editorial Email: <a href="mailto:editor@academiadelespanol.com" className="text-primary hover:underline">editor@academiadelespanol.com</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground font-heading mb-4">
                2. The Personal Data We Collect
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                As a free linguistic publication, we collect:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li><strong>Marketing and Subscription Data:</strong> Your name and email address when you explicitly subscribe to our free Spanish learning newsletter, grammar deep-dives, or cultural updates.</li>
                <li><strong>Commentary Data:</strong> If you leave comments on blog entries, we log the text inputs provided alongside your public username.</li>
                <li><strong>Technical Tracking Data:</strong> Your device IP address, geolocation tags, and reading patterns processed by analytical cookies to identify which grammar topics are trending.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground font-heading mb-4">
                3. Purpose of Processing and Lawful Basis
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We handle your personal information under these specific UK GDPR guidelines:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-foreground/80">
                <li><strong>Consent:</strong> You choose to opt in to receive digital updates or editorial newsletters from our brand. You can unsubscribe instantly via the link in any email.</li>
                <li><strong>Legitimate Interests:</strong> To prevent comment spam, safeguard the website from server exploits, and analyze audience behavior to improve the quality of our free vocabulary articles.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground font-heading mb-4">
                4. Email lists and Third-Party Processors
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Our email marketing updates are managed via GDPR-compliant distribution platforms (such as Mailchimp or ConvertKit). We do not share, sell, or rent your subscriber details to outside companies for separate promotional gains. Data retention loops automatically delete your profile from active distribution within 30 days of clicking an unsubscribe button.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground font-heading mb-4">
                5. Your Legal Rights Under UK GDPR
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                You maintain complete rights over your reading data footprint. You have the right to request access to your logs, correct inaccurate information, object to processing tracking, or request the permanent deletion of your subscriber history.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                To execute a data request, contact our editorial team directly at: <a href="mailto:editor@academiadelespanol.com" className="text-primary hover:underline">editor@academiadelespanol.com</a>. Statutory complaints may be routed directly to the UK Information Commissioner's Office (ICO) if required (<a href="https://www.ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.ico.org.uk</a>).
              </p>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}