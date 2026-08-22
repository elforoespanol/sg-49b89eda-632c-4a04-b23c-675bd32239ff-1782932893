import Link from "next/link";
import { useRouter } from "next/router";
import { Search, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitch";

export function Header() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const isHomePage = router.pathname === "/";

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      {/* Back to Home Button - Show on all non-home pages */}
      {!isHomePage && (
        <div className="bg-muted border-b border-border">
          <div className="max-w-7xl mx-auto px-4 py-2">
            <Link href="/">
              <Button variant="ghost" className="gap-2 text-primary hover:text-primary/80">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      )}

      {/* Top row: Search Bar */}
      <div className="bg-muted">
        <form onSubmit={handleSearch} className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/40" />
            <Input 
              type="search" 
              placeholder="Search Posts...." 
              className="pl-9 bg-background border-border w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </form>
      </div>

      {/* Bottom row: Logo + Navigation */}
      <div className="bg-background">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-4 group flex-shrink-0">
            <img src="/logo.jpg" alt="Let's Master Spanish Logo" className="h-12 w-auto" />
            <span className="text-2xl font-bold text-foreground font-heading whitespace-nowrap">
              Let's Master <span className="text-primary">Spanish</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-foreground/80 hover:text-primary transition-colors text-sm">
              Home
            </Link>
            <Link href="/categories/spanish-basics" className="text-foreground/80 hover:text-primary transition-colors text-sm">
              Spanish Basics
            </Link>
            <Link href="/categories/grammar" className="text-foreground/80 hover:text-primary transition-colors text-sm">
              Grammar
            </Link>
            <Link href="/categories/vocabulary" className="text-foreground/80 hover:text-primary transition-colors text-sm">
              Vocabulary
            </Link>
            <Link href="/categories/spanish-learning-tips" className="text-foreground/80 hover:text-primary transition-colors text-sm">
              Spanish Learning Tips
            </Link>
            <Link href="/categories/vlog" className="text-foreground/80 hover:text-primary transition-colors text-sm">
              Vlog
            </Link>
            <Link href="/about" className="text-foreground/80 hover:text-primary transition-colors text-sm">
              About
            </Link>
          </nav>

          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}