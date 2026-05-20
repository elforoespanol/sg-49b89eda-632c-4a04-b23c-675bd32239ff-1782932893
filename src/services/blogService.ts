import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";

type BlogPost = Database["public"]["Tables"]["blog_posts"]["Row"];
type BlogPostInsert = Database["public"]["Tables"]["blog_posts"]["Insert"];
type BlogPostUpdate = Database["public"]["Tables"]["blog_posts"]["Update"];
type Category = Database["public"]["Tables"]["categories"]["Row"];

export const blogService = {
  // Get all published blog posts for homepage
  async getPublishedPosts(limit = 6) {
    const { data, error } = await supabase
      .from("blog_posts")
      .select(`
        *,
        categories!blog_posts_category_id_fkey(name, slug)
      `)
      .eq("status", "published")
      .order("published_at", { ascending: false })
      .limit(limit);

    console.log("getPublishedPosts:", { data, error });
    if (error) throw error;
    return data || [];
  },

  // Get all posts (admin only)
  async getAllPosts() {
    const { data, error } = await supabase
      .from("blog_posts")
      .select(`
        *,
        categories!blog_posts_category_id_fkey(name, slug)
      `)
      .order("created_at", { ascending: false });

    console.log("getAllPosts:", { data, error });
    if (error) throw error;
    return data || [];
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
  async uploadImage(file: File, path: string) {
    const fileExt = file.name.split(".").pop();
    const fileName = `${path}-${Date.now()}.${fileExt}`;
    const filePath = `${fileName}`;

    const { data, error } = await supabase.storage
      .from("blog-images")
      .upload(filePath, file);

    console.log("uploadImage:", { data, error });
    if (error) throw error;

    const { data: { publicUrl } } = supabase.storage
      .from("blog-images")
      .getPublicUrl(filePath);

    return publicUrl;
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