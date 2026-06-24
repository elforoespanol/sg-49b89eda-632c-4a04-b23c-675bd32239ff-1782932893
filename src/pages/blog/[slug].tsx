import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogService } from "@/services/blogService";
import { authService } from "@/services/authService";
import { Calendar, Eye, User, Edit } from "lucide-react";
import type { Database } from "@/integrations/supabase/types";

type BlogPost = Database["public"]["Tables"]["blog_posts"]["Row"] & {
  categories: { name: string; slug: string } | null;
};

export default function BlogPostPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (slug && typeof slug === "string") {
      loadPost(slug);
    }
    checkAdminStatus();
  }, [slug]);

  async function checkAdminStatus() {
    const adminStatus = await authService.isAdmin();
    setIsAdmin(adminStatus);
  }

  async function loadPost(slug: string) {
    try {
      const data = await blogService.getPostBySlug(slug);
      setPost(data);
      
      // Increment view count
      if (data?.id) {
        await blogService.incrementViewCount(data.id);
      }
    } catch (error) {
      console.error("Error loading post:", error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <>
        <SEO title="Loading... - Let's Master Spanish" />
        <div className="min-h-screen flex flex-col bg-background">
          <Header />
          <main className="flex-1 max-w-4xl mx-auto px-4 py-12">
            <p className="text-center text-muted-foreground">Loading post...</p>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  if (!post) {
    return (
      <>
        <SEO title="Post Not Found - Let's Master Spanish" />
        <div className="min-h-screen flex flex-col bg-background">
          <Header />
          <main className="flex-1 max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-foreground font-heading mb-4">
              Post Not Found
            </h1>
            <p className="text-muted-foreground">
              The blog post you're looking for doesn't exist.
            </p>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <SEO 
        title={`${post.title} - Let's Master Spanish`}
        description={post.meta_description || post.excerpt || post.content.substring(0, 160)}
        image={post.featured_image || undefined}
      />
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <article className="flex-1 max-w-4xl mx-auto px-4 py-12 w-full">
          {/* Admin Edit Button */}
          {isAdmin && (
            <div className="mb-6">
              <Link 
                href={{
                  pathname: "/admin/posts/new",
                  query: { edit: post.id }
                }}
              >
                <Button size="sm" variant="secondary" className="gap-2">
                  <Edit className="h-4 w-4" />
                  Edit Post
                </Button>
              </Link>
            </div>
          )}

          {/* Post Header */}
          <header className="mb-8">
            {post.categories && (
              <Badge className="mb-4 bg-primary hover:bg-primary/90">
                {post.categories.name}
              </Badge>
            )}
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-4">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              {post.author_name && (
                <span className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {post.author_name}
                </span>
              )}
              
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {post.published_at 
                  ? new Date(post.published_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric"
                    })
                  : new Date(post.created_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric"
                    })
                }
              </span>
              
              <span className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                {post.view_count} views
              </span>
            </div>
          </header>

          {/* Featured Image */}
          {post.featured_image && (
            <div className="mb-8 rounded-lg overflow-hidden">
              <img
                src={post.featured_image}
                alt={post.title}
                className="w-full h-auto"
                loading="eager"
              />
            </div>
          )}

          {/* Video Embed */}
          {post.video_url && (
            <div className="mb-8 rounded-lg overflow-hidden">
              {(post.video_url.includes("youtube.com") || post.video_url.includes("youtu.be")) ? (
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={post.video_url.replace("watch?v=", "embed/")}
                    title={post.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <video
                  src={post.video_url}
                  controls
                  className="w-full rounded-lg"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          )}

          {/* Post Content */}
          <div className="prose prose-lg max-w-none">
            <div className="whitespace-pre-wrap text-foreground/90 leading-relaxed">
              {post.content}
            </div>
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-sm font-semibold text-foreground mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </article>

        <Footer />
      </div>
    </>
  );
}