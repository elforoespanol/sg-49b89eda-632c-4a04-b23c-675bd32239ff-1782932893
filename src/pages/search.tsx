import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArticleCard } from "@/components/ArticleCard";
import { blogService } from "@/services/blogService";
import { Search as SearchIcon } from "lucide-react";
import type { Database } from "@/integrations/supabase/types";

type BlogPost = Database["public"]["Tables"]["blog_posts"]["Row"] & {
  categories: { name: string; slug: string } | null;
};

export default function SearchPage() {
  const router = useRouter();
  const { q } = router.query;
  const [results, setResults] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    if (q && typeof q === "string") {
      performSearch(q);
    }
  }, [q]);

  async function performSearch(query: string) {
    setLoading(true);
    setSearched(true);
    try {
      const data = await blogService.searchPosts(query);
      setResults(data);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <SEO 
        title={q ? `Search: ${q} - Let's Master Spanish` : "Search - Let's Master Spanish"}
        description={`Search results for "${q || ""}" on Let's Master Spanish`}
        canonical={`/search?q=${encodeURIComponent(q || "")}`}
      />

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-1 max-w-7xl mx-auto px-4 py-16 w-full">
          {/* Search Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <SearchIcon className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-4xl font-bold text-foreground font-heading">
                Search Results
              </h1>
            </div>
            {q && (
              <p className="text-lg text-muted-foreground">
                {loading ? (
                  "Searching..."
                ) : (
                  <>
                    {results.length} {results.length === 1 ? "result" : "results"} for{" "}
                    <span className="font-semibold text-foreground">"{q}"</span>
                  </>
                )}
              </p>
            )}
          </div>

          {/* Results */}
          {loading ? (
            <p className="text-muted-foreground">Searching...</p>
          ) : searched && results.length === 0 ? (
            <div className="text-center py-16">
              <SearchIcon className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-xl text-muted-foreground">
                No results found for "{q}"
              </p>
              <p className="text-muted-foreground mt-2">
                Try different keywords or browse our categories.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {results.map((post) => (
                <ArticleCard
                  key={post.id}
                  postId={post.id}
                  title={post.title}
                  excerpt={post.excerpt || post.content.substring(0, 200) + "..."}
                  category={post.categories?.name || "Uncategorized"}
                  image={post.featured_image || "/generated/hero-spanish-conversation.png"}
                  date={post.published_at ? new Date(post.published_at).toLocaleDateString() : new Date(post.created_at).toLocaleDateString()}
                  slug={`/blog/${post.slug}`}
                  authorName={post.author_name || undefined}
                  videoUrl={post.video_url || undefined}
                />
              ))}
            </div>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
}