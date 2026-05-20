-- Create blog categories table
CREATE TABLE IF NOT EXISTS public.categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create blog posts table
CREATE TABLE IF NOT EXISTS public.blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content TEXT NOT NULL,
  excerpt TEXT,
  featured_image TEXT,
  author_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  category_id UUID REFERENCES public.categories(id) ON DELETE SET NULL,
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  tags TEXT[] DEFAULT '{}',
  meta_description TEXT,
  view_count INTEGER DEFAULT 0,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON public.blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_status ON public.blog_posts(status);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON public.blog_posts(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_author ON public.blog_posts(author_id);

-- Enable RLS
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- RLS Policies for categories (public read, authenticated write)
CREATE POLICY "public_read_categories" ON public.categories FOR SELECT USING (true);
CREATE POLICY "auth_insert_categories" ON public.categories FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);
CREATE POLICY "auth_update_categories" ON public.categories FOR UPDATE USING (auth.uid() IS NOT NULL);
CREATE POLICY "auth_delete_categories" ON public.categories FOR DELETE USING (auth.uid() IS NOT NULL);

-- RLS Policies for blog_posts (public read published, authenticated full access to own posts)
CREATE POLICY "public_read_published" ON public.blog_posts FOR SELECT USING (status = 'published');
CREATE POLICY "auth_read_all" ON public.blog_posts FOR SELECT USING (auth.uid() IS NOT NULL);
CREATE POLICY "auth_insert_posts" ON public.blog_posts FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);
CREATE POLICY "auth_update_own_posts" ON public.blog_posts FOR UPDATE USING (auth.uid() = author_id);
CREATE POLICY "auth_delete_own_posts" ON public.blog_posts FOR DELETE USING (auth.uid() = author_id);

-- Insert default categories
INSERT INTO public.categories (name, slug, description) VALUES
  ('Spanish Basics', 'spanish-basics', 'Foundational concepts for beginning learners'),
  ('Grammar', 'grammar', 'Spanish grammar rules and explanations'),
  ('Vocabulary', 'vocabulary', 'Essential words and phrases'),
  ('Travel Phrases', 'travel-phrases', 'Useful phrases for travelers'),
  ('Culture', 'culture', 'Spanish and Latin American culture')
ON CONFLICT (slug) DO NOTHING;

-- Create storage bucket for blog images
INSERT INTO storage.buckets (id, name, public) VALUES ('blog-images', 'blog-images', true)
ON CONFLICT (id) DO NOTHING;

-- Storage RLS policies
CREATE POLICY "public_read_blog_images" ON storage.objects FOR SELECT USING (bucket_id = 'blog-images');
CREATE POLICY "auth_upload_blog_images" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'blog-images' AND auth.uid() IS NOT NULL);
CREATE POLICY "auth_update_blog_images" ON storage.objects FOR UPDATE USING (bucket_id = 'blog-images' AND auth.uid() IS NOT NULL);
CREATE POLICY "auth_delete_blog_images" ON storage.objects FOR DELETE USING (bucket_id = 'blog-images' AND auth.uid() IS NOT NULL);