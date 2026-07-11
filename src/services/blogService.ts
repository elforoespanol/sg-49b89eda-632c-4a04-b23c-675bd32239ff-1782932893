import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";

type BlogPost = Database["public"]["Tables"]["blog_posts"]["Row"];
type BlogPostInsert = Database["public"]["Tables"]["blog_posts"]["Insert"];
type BlogPostUpdate = Database["public"]["Tables"]["blog_posts"]["Update"];
type Category = Database["public"]["Tables"]["categories"]["Row"];

export const blogService = {
  // Get all published blog posts for homepage
  async getPublishedPosts(limit: number = 10) {
    const { data, error } = await supabase
      .from("blog_posts")
      .select(`*, categories(name, slug)`)
      .eq("status", "published")
      .order("published_at", { ascending: false })
      .limit(limit);

    if (error) throw error;
    return data || [];
  },

  async searchPosts(query: string) {
    const searchTerm = `%${query}%`;
    const { data, error } = await supabase
      .from("blog_posts")
      .select(`*, categories(name, slug)`)
      .eq("status", "published")
      .or(`title.ilike.${searchTerm},content.ilike.${searchTerm},excerpt.ilike.${searchTerm}`)
      .order("published_at", { ascending: false });

    if (error) throw error;
    return data || [];
  },

  async getPopularPosts(slugs: string[]) {
    const { data, error } = await supabase
      .from("blog_posts")
      .select(`*, categories(name, slug)`)
      .eq("status", "published")
      .in("slug", slugs);

    if (error) throw error;
    return data || [];
  },

  async getAllPosts() {
    const { data, error } = await supabase
      .from("blog_posts")
      .select(`*, categories(name, slug)`)
      .order("created_at", { ascending: false });

    if (error) throw error;
    return data || [];
  },

  async getPostsByCategory(categoryId: string) {
    const { data, error } = await supabase
      .from("blog_posts")
      .select(`*, categories(name, slug)`)
      .eq("category_id", categoryId)
      .eq("status", "published")
      .order("published_at", { ascending: false });

    if (error) throw error;
    return data || [];
  },

  async getCategoryBySlug(slug: string) {
    const { data, error } = await supabase
      .from("categories")
      .select("*")
      .eq("slug", slug)
      .single();

    if (error) return null;
    return data;
  },

  // Get single post by slug
  async getPostBySlug(slug: string) {
    const { data, error } = await supabase
      .from("blog_posts")
      .select(`
        *,
        categories!blog_posts_category_id_fkey(name, slug)
      `)
      .eq("slug", slug)
      .single();

    console.log("getPostBySlug:", { data, error });
    if (error) throw error;
    return data;
  },

  // Create new post
  async createPost(post: BlogPostInsert) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error("User not authenticated");

    const { data, error } = await supabase
      .from("blog_posts")
      .insert({
        ...post,
        author_id: user.id,
      })
      .select()
      .single();

    console.log("createPost:", { data, error });
    if (error) throw error;
    return data;
  },

  // Update post
  async updatePost(id: string, post: BlogPostUpdate) {
    const { data, error } = await supabase
      .from("blog_posts")
      .update({
        ...post,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select()
      .single();

    console.log("updatePost:", { data, error });
    if (error) throw error;
    return data;
  },

  // Delete post
  async deletePost(id: string) {
    const { error } = await supabase
      .from("blog_posts")
      .delete()
      .eq("id", id);

    console.log("deletePost:", { error });
    if (error) throw error;
  },

  // Get all categories
  async getCategories() {
    const { data, error } = await supabase
      .from("categories")
      .select("*")
      .order("name");

    console.log("getCategories:", { data, error });
    if (error) throw error;
    return data || [];
  },

  // Upload image to Supabase Storage
  async uploadImage(file: File, folder: string): Promise<string> {
    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${folder}/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from("blog-images")
      .upload(filePath, file);

    if (uploadError) {
      throw uploadError;
    }

    const { data } = supabase.storage.from("blog-images").getPublicUrl(filePath);

    return data.publicUrl;
  },

  async uploadVideo(file: File): Promise<string> {
    const res = await fetch("/api/r2/presigned-url", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fileName: file.name,
        contentType: file.type || "video/mp4",
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || "Failed to get upload URL");
    }

    const { uploadUrl, videoUrl } = await res.json();

    await fetch(uploadUrl, {
      method: "PUT",
      headers: { "Content-Type": file.type || "video/mp4" },
      body: file,
    });

    return videoUrl;
  },

  async deleteVideo(videoUrl: string): Promise<void> {
    const res = await fetch("/api/r2/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ videoUrl }),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || "Failed to delete video");
    }
  },

  // Increment view count
  async incrementViewCount(id: string) {
    const { error } = await supabase.rpc("increment_view_count", { post_id: id });
    console.log("incrementViewCount:", { error });
    if (error) console.error("Failed to increment view count:", error);
  },
};

// Create RPC function for incrementing view count
// Run this SQL separately if the function doesn't exist:
// CREATE OR REPLACE FUNCTION increment_view_count(post_id UUID)
// RETURNS void AS $$
// BEGIN
//   UPDATE blog_posts SET view_count = view_count + 1 WHERE id = post_id;
// END;
// $$ LANGUAGE plpgsql SECURITY DEFINER;