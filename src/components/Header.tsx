import Link from "next/link";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      {/* Top row: Search Bar */}
      <div className="bg-muted">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/40" />
            <Input 
              type="search" 
              placeholder="Search Posts...." 
              className="pl-9 bg-background border-border w-full"
            />
          </div>
        </div>
      </div>

      {/* Bottom row: Logo + Navigation */}
      <div className="bg-background">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4 group">
            <img src="/logo.jpg" alt="Let's Master Spanish Logo" className="h-32 w-auto" />
            <span className="text-2xl font-bold text-foreground font-heading">
              Let's Master <span className="text-primary">Spanish</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-foreground/80 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/categories/spanish-basics" className="text-foreground/80 hover:text-primary transition-colors">
              Spanish Basics
            </Link>
            <Link href="/categories/grammar" className="text-foreground/80 hover:text-primary transition-colors">
              Grammar
            </Link>
            <Link href="/categories/vocabulary" className="text-foreground/80 hover:text-primary transition-colors">
              Vocabulary
            </Link>
            <Link href="/vlog" className="text-foreground/80 hover:text-primary transition-colors">
              Vlog
            </Link>
            <Link href="/about" className="text-foreground/80 hover:text-primary transition-colors">
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}