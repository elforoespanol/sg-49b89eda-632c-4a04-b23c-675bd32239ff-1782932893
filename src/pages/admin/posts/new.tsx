import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { blogService } from "@/services/blogService";
import { ArrowLeft, Upload, Save } from "lucide-react";
import Link from "next/link";
import type { Database } from "@/integrations/supabase/types";

type Category = Database["public"]["Tables"]["categories"]["Row"];

export default function CreateNewBlogPost() {
  const router = useRouter();
  const { edit } = router.query;
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [imageUploading, setImageUploading] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [editMode, setEditMode] = useState(false);
  const [postId, setPostId] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    content: "",
    excerpt: "",
    featured_image: "",
    category_id: "",
    tags: "",
    meta_description: "",
    status: "draft" as "draft" | "published",
    author_name: "",
    video_url: "",
  });

  const AUTHORS = ["Wesley Gómez", "Emillio García", "Mauricio Rodríguez"];

  useEffect(() => {
    checkAuth();
    loadCategories();
  }, []);

  useEffect(() => {
    if (edit && typeof edit === "string") {
      setEditMode(true);
      setPostId(edit);
      loadPost(edit);
    }
  }, [edit]);

  async function checkAuth() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      router.push("/admin/login");
      return;
    }
    setUser(user);
  }

  async function loadCategories() {
    try {
      const data = await blogService.getCategories();
      setCategories(data);
    } catch (error) {
      console.error("Error loading categories:", error);
    }
  }

  async function loadPost(id: string) {
    try {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;

      if (data) {
        setFormData({
          title: data.title,
          slug: data.slug,
          content: data.content,
          excerpt: data.excerpt || "",
          featured_image: data.featured_image || "",
          category_id: data.category_id || "",
          tags: Array.isArray(data.tags) ? data.tags.join(", ") : "",
          meta_description: data.meta_description || "",
          status: data.status as "draft" | "published",
          author_name: data.author_name || "",
          video_url: data.video_url || "",
        });
      }
    } catch (error) {
      console.error("Error loading post:", error);
      alert("Failed to load post");
    }
  }

  function handleTitleChange(title: string) {
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    
    setFormData({ ...formData, title, slug });
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageUploading(true);
    try {
      const imageUrl = await blogService.uploadImage(file, "featured");
      setFormData({ ...formData, featured_image: imageUrl });
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload image");
    } finally {
      setImageUploading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent, status: "draft" | "published") {
    e.preventDefault();
    setLoading(true);

    try {
      const postData = {
        ...formData,
        status,
        tags: formData.tags.split(",").map(t => t.trim()).filter(Boolean),
        published_at: status === "published" ? new Date().toISOString() : null,
      };

      if (editMode && postId) {
        // Update existing post
        await blogService.updatePost(postId, postData);
      } else {
        // Create new post
        await blogService.createPost(postData);
      }
      
      router.push("/admin");
    } catch (error) {
      console.error(`Error ${editMode ? 'updating' : 'creating'} post:`, error);
      alert(`Failed to ${editMode ? 'update' : 'create'} post`);
    } finally {
      setLoading(false);
    }
  }

  if (!user) return null;

  return (
    <>
      <SEO 
        title={`${editMode ? 'Edit' : 'Create New'} Blog Post - Let's Master Spanish`}
        description={editMode ? "Edit blog post" : "Create a new blog post"}
      />
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1 max-w-4xl mx-auto px-4 py-12 w-full">
          {/* Page Header */}
          <div className="mb-8">
            <Link href="/admin">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Dashboard
              </Button>
            </Link>
            
            <h1 className="text-4xl font-bold text-foreground font-heading mb-2">
              {editMode ? 'Edit Blog Post' : 'Create New Blog Post'}
            </h1>
            <p className="text-muted-foreground">
              {editMode ? 'Update the details below to edit the blog post' : 'Fill in the details below to create a new blog post'}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={(e) => handleSubmit(e, "draft")}>
            <Card className="p-6 space-y-6">
              {/* Basic Information Section */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground font-heading">
                  Basic Information
                </h2>
                
                <div>
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    placeholder="Enter post title"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="slug">URL Slug *</Label>
                  <Input
                    id="slug"
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    placeholder="auto-generated-from-title"
                    required
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Auto-generated from title, but you can customize it
                  </p>
                </div>

                <div>
                  <Label htmlFor="excerpt">Excerpt</Label>
                  <Textarea
                    id="excerpt"
                    value={formData.excerpt}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    placeholder="Brief summary for article cards (optional)"
                    rows={3}
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground font-heading">
                  Content
                </h2>
                
                <div>
                  <Label htmlFor="content">Post Content *</Label>
                  <Textarea
                    id="content"
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    placeholder="Write your blog post content here..."
                    rows={15}
                    required
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Tip: Use markdown formatting for better structure
                  </p>
                </div>
              </div>

              {/* Featured Image Section */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground font-heading">
                  Featured Image
                </h2>
                
                <div>
                  <Label htmlFor="featured-image">Upload Image</Label>
                  <div className="flex gap-4 items-start">
                    <Input
                      id="featured-image"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      disabled={imageUploading}
                    />
                    {imageUploading && (
                      <p className="text-sm text-muted-foreground">Uploading...</p>
                    )}
                  </div>
                  
                  {formData.featured_image && (
                    <div className="mt-4">
                      <img
                        src={formData.featured_image}
                        alt="Featured"
                        className="max-w-sm rounded-lg"
                      />
                    </div>
                  )}
                </div>

                <div>
                  <Label htmlFor="video-url">YouTube Video URL (Optional)</Label>
                  <Input
                    id="video-url"
                    value={formData.video_url}
                    onChange={(e) => setFormData({ ...formData, video_url: e.target.value })}
                    placeholder="https://www.youtube.com/watch?v=..."
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Add a YouTube video URL to create a vlog post
                  </p>
                </div>
              </div>

              {/* Blog Post Settings Section */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground font-heading">
                  Blog Post Settings
                </h2>
                
                <div>
                  <Label htmlFor="category">Category</Label>
                  <select
                    id="category"
                    value={formData.category_id}
                    onChange={(e) => setFormData({ ...formData, category_id: e.target.value })}
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                  >
                    <option value="">Select a category</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label htmlFor="tags">Tags</Label>
                  <Input
                    id="tags"
                    value={formData.tags}
                    onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                    placeholder="beginner, grammar, verbs (comma-separated)"
                  />
                </div>

                <div>
                  <Label htmlFor="meta-description">Meta Description (SEO)</Label>
                  <Textarea
                    id="meta-description"
                    value={formData.meta_description}
                    onChange={(e) => setFormData({ ...formData, meta_description: e.target.value })}
                    placeholder="Brief description for search engines"
                    rows={2}
                  />
                </div>

                <div>
                  <Label htmlFor="author">Author *</Label>
                  <select
                    id="author"
                    value={formData.author_name}
                    onChange={(e) => setFormData({ ...formData, author_name: e.target.value })}
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    required
                  >
                    <option value="">Select an author</option>
                    {AUTHORS.map((author) => (
                      <option key={author} value={author}>
                        {author}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <Button
                  type="submit"
                  variant="outline"
                  disabled={loading}
                  onClick={(e) => handleSubmit(e, "draft")}
                >
                  <Save className="mr-2 h-4 w-4" />
                  Save as Draft
                </Button>
                <Button
                  type="button"
                  disabled={loading}
                  onClick={(e) => handleSubmit(e, "published")}
                  className="bg-primary hover:bg-primary/90"
                >
                  <Upload className="mr-2 h-4 w-4" />
                  {editMode ? 'Update Post' : 'Publish Now'}
                </Button>
              </div>
            </Card>
          </form>
        </main>

        <Footer />
      </div>
    </>
  );
}