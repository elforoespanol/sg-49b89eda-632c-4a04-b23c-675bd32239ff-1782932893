import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { blogService } from "@/services/blogService";
import { Plus, Edit, Trash2, Eye } from "lucide-react";
import type { Database } from "@/integrations/supabase/types";

type BlogPost = Database["public"]["Tables"]["blog_posts"]["Row"] & {
  categories: { name: string; slug: string } | null;
};

export default function AdminDashboard() {
  const router = useRouter();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    checkAuth();
    loadPosts();
  }, []);

  async function checkAuth() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      router.push("/admin/login");
      return;
    }
    setUser(user);
  }

  async function loadPosts() {
    try {
      const data = await blogService.getAllPosts();
      setPosts(data);
    } catch (error) {
      console.error("Error loading posts:", error);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Are you sure you want to delete this post?")) return;
    
    try {
      await blogService.deletePost(id);
      setPosts(posts.filter(p => p.id !== id));
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Failed to delete post");
    }
  }

  if (!user) return null;

  return (
    <>
      <SEO 
        title="Blog Management Dashboard - Let's Master Spanish"
        description="Manage your blog posts and content"
      />
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1 max-w-7xl mx-auto px-4 py-12 w-full">
          {/* Page Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-foreground font-heading mb-2">
                Blog Management Dashboard
              </h1>
              <p className="text-muted-foreground">
                Create and manage your blog posts
              </p>
            </div>
            <Link href="/admin/posts/new">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Plus className="mr-2 h-5 w-5" />
                Create New Post
              </Button>
            </Link>
          </div>

          {/* Posts List */}
          {loading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading posts...</p>
            </div>
          ) : posts.length === 0 ? (
            <Card className="p-12 text-center">
              <p className="text-muted-foreground mb-4">No blog posts yet</p>
              <Link href="/admin/posts/new">
                <Button>Create your first post</Button>
              </Link>
            </Card>
          ) : (
            <div className="space-y-4">
              {posts.map((post) => (
                <Card key={post.id} className="p-6">
                  <div className="flex gap-6">
                    {post.featured_image && (
                      <img
                        src={post.featured_image}
                        alt={post.title}
                        className="w-32 h-32 object-cover rounded-lg"
                      />
                    )}
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-foreground font-heading mb-1">
                            {post.title}
                          </h3>
                          <div className="flex gap-2 items-center">
                            <Badge variant={post.status === "published" ? "default" : "secondary"}>
                              {post.status}
                            </Badge>
                            {post.categories && (
                              <Badge variant="outline">{post.categories.name}</Badge>
                            )}
                            <span className="text-sm text-muted-foreground flex items-center gap-1">
                              <Eye className="h-4 w-4" />
                              {post.view_count} views
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <Link 
                            href={{
                              pathname: "/admin/posts/new",
                              query: { edit: post.id }
                            }}
                          >
                            <Button variant="outline" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </Link>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDelete(post.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-2">
                        {post.excerpt || post.content.substring(0, 150) + "..."}
                      </p>
                      
                      <div className="text-sm text-muted-foreground">
                        {post.published_at 
                          ? `Published: ${new Date(post.published_at).toLocaleDateString()}`
                          : `Created: ${new Date(post.created_at).toLocaleDateString()}`
                        }
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
}