import { useState, useEffect } from "react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArticleCard } from "@/components/ArticleCard";
import { blogService } from "@/services/blogService";
import { Play } from "lucide-react";
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
      />

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

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
            <div className="grid md:grid-cols-2 gap-8">
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
        </main>

        <Footer />
      </div>
    </>
  );
}