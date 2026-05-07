import Link from "next/link";
import { Search, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      {/* Top row: Social icons + Search */}
      <div className="bg-muted">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
          
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/40" />
            <Input 
              type="search" 
              placeholder="Search lessons..." 
              className="pl-9 bg-background border-border"
            />
          </div>
        </div>
      </div>

      {/* Bottom row: Logo + Navigation */}
      <div className="bg-background">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-foreground font-heading">
            Let's Master <span className="text-primary">Spanish</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link href="/spanish-basics" className="text-foreground hover:text-primary transition-colors font-medium">
              Spanish Basics
            </Link>
            <Link href="/grammar" className="text-foreground hover:text-primary transition-colors font-medium">
              Grammar
            </Link>
            <Link href="/vocabulary" className="text-foreground hover:text-primary transition-colors font-medium">
              Vocabulary
            </Link>
            <Link href="/reviews" className="text-foreground hover:text-primary transition-colors font-medium">
              Reviews
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </Link>
          </nav>

          <Button variant="default" size="sm" className="hidden md:inline-flex">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}