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
            <p className="text-sm text-background/60">
              © {new Date().getFullYear()} Let's Master Spanish. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-heading mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/spanish-basics" className="text-background/80 hover:text-background transition-colors">
                Spanish Basics
              </Link>
              <Link href="/grammar" className="text-background/80 hover:text-background transition-colors">
                Grammar
              </Link>
              <Link href="/vocabulary" className="text-background/80 hover:text-background transition-colors">
                Vocabulary
              </Link>
              <Link href="/about" className="text-background/80 hover:text-background transition-colors">
                About
              </Link>
              <Link href="/privacy" className="text-background/80 hover:text-background transition-colors">
                Privacy Policy
              </Link>
              <Link href="/contact" className="text-background/80 hover:text-background transition-colors">
                Contact
              </Link>
              <Link href="/sitemap" className="text-background/80 hover:text-background transition-colors">
                Sitemap
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