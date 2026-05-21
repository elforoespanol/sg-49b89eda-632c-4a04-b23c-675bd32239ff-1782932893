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
            <p className="text-sm text-background/60 mt-4">
              © {new Date().getFullYear()} letsmasterspanish.com is a proud member of the Academia Español Language Network. All rights reserved.
            </p>

            {/* Academia del Español Network Widget */}
            <div className="mt-6 bg-[#fcf9f2] border border-[#eef2f6] rounded-2xl p-6 max-w-xs shadow-md text-left">
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
            </nav>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-heading mb-4">Follow Us</h3>
            <p className="text-background/80 mb-6">
              Join our community on social media for daily Spanish tips and inspiration!
            </p>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}