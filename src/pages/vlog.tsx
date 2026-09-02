import { useState, useEffect } from "react";
import Link from "next/link";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArticleCard } from "@/components/ArticleCard";
import { blogService } from "@/services/blogService";
import { Play, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Database } from "@/integrations/supabase/types";

type BlogPost = Database["public"]["Tables"]["blog_posts"]["Row"] & {
  categories: { name: string; slug: string } | null;
};

export default function VlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadVlogPosts();
  }, []);

  async function loadVlogPosts() {
    try {
      const allPosts = await blogService.getPublishedPosts(50);
      const videoPosts = allPosts.filter((post) => post.video_url);
      setPosts(videoPosts);
    } catch (error) {
      console.error("Error loading vlog posts:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <SEO
        title="Vlog - Let's Master Spanish"
        description="Watch our Spanish learning video lessons and vlogs. Visual guides to help you master Spanish faster."
        canonical="/vlog"
      />

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        {/* Back to Home Link */}
        <div className="max-w-7xl mx-auto px-4 pt-8 w-full">
          <Link href="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        <main className="flex-1 max-w-7xl mx-auto px-4 py-16 w-full">
          {/* Vlog Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Play className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-5xl font-bold text-foreground font-heading">
                Vlog
              </h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Watch our video lessons and vlogs covering Spanish pronunciation,
              grammar tips, cultural insights, and real-world conversations to
              accelerate your learning journey.
            </p>
          </div>

          {/* Vlog Posts */}
          {loading ? (
            <p className="text-muted-foreground">Loading videos...</p>
          ) : posts.length === 0 ? (
            <div className="text-center py-16">
              <Play className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-xl text-muted-foreground">
                No video posts published yet.
              </p>
              <p className="text-muted-foreground mt-2">
                Check back soon for new video content!
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {posts.map((post) => (
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

          {/* Subscribe Section */}
          <div className="bg-muted rounded-lg p-8 space-y-4">
            <h3 className="text-xl font-bold text-foreground font-heading">
              Stay Updated with New Videos
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              Subscribe to our Vlog RSS feed to get new video lessons delivered automatically to your favorite reader.
            </p>
            <div className="flex gap-3">
              <a 
                href="/api/feed/vlog.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-background rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="6.18" cy="17.82" r="2.18" />
                  <path d="M4 4.44v2.46c5.523 0 10 4.477 10 10s-4.477 10-10 10H4v2.44h.44C15.97 29.32 24 21.35 24 11.22S15.97 0 6.44 0H4zm0-2H2v5.66h2V2.44z" />
                </svg>
                Subscribe Vlog RSS
              </a>
              <a 
                href="/api/feed/blog.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-background rounded-lg hover:bg-secondary/90 transition-colors font-medium"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="6.18" cy="17.82" r="2.18" />
                  <path d="M4 4.44v2.46c5.523 0 10 4.477 10 10s-4.477 10-10 10H4v2.44h.44C15.97 29.32 24 21.35 24 11.22S15.97 0 6.44 0H4zm0-2H2v5.66h2V2.44z" />
                </svg>
                Subscribe Blog RSS
              </a>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}