import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Mission */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-heading mb-4">Our Mission</h3>
            <p className="text-background/80 leading-relaxed">
              Let's Master Spanish is dedicated to empowering adult learners with proven strategies, 
              high-quality lessons, and a supportive community to achieve Spanish fluency.
            </p>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-heading mb-4">Legal</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/privacy-gdpr" className="text-background/80 hover:text-background transition-colors">
                Privacy & GDPR Policy
              </Link>
              <Link href="/terms-of-business" className="text-background/80 hover:text-background transition-colors">
                Terms of Business
              </Link>
              <Link href="/disclosure-policy" className="text-background/80 hover:text-background transition-colors">
                Disclosure Policy
              </Link>
              <Link href="/cookie-consent-policy" className="text-background/80 hover:text-background transition-colors">
                Cookie & Consent Policy
              </Link>
            </nav>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-heading mb-4">Contact Us</h3>
            <p className="text-background/80 mb-6">
              Have questions or feedback? We'd love to hear from you!
            </p>
            <a 
              href="mailto:letsmasterspanish@europe.com"
              className="inline-block text-background/80 hover:text-primary transition-colors underline"
            >
              letsmasterspanish@europe.com
            </a>
          </div>
        </div>

        {/* Centered bottom section with copyright and Network widget */}
        <div className="mt-12 pt-8 border-t border-background/20 flex flex-col items-center gap-6">
          <p className="text-sm text-background/60 text-center">
            © {new Date().getFullYear()} letsmasterspanish.com is a proud member of the Academia Español Language Network. All rights reserved.
          </p>

          {/* Academia del Español Network Widget */}
          <div className="bg-[#fcf9f2] border border-[#eef2f6] rounded-2xl p-6 w-full max-w-7xl shadow-md text-left">
            <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-primary mb-2">
              Network Property
            </span>
            <h4 className="font-serif text-lg font-bold text-[#1e3a8a] leading-tight mb-3 mt-0">
              Let's Master Spanish
            </h4>
            <p className="text-[13px] leading-relaxed text-[#4a5568] mb-4 mt-0">
              This publication operates as a proud, free media division of the <strong className="text-[#1e3a8a]">Academia del Español Language Network</strong>. We deliver continuous, real-time linguistic immersion to complement your path to fluency.
            </p>
            <a 
              href="https://academiadelespanol.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-[12px] font-bold text-[#1e3a8a] no-underline border-b-2 border-primary pb-0.5 transition-colors hover:opacity-80"
            >
              Visit the Parent Hub ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}