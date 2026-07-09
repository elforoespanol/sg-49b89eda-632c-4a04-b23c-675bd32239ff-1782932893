import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArticleCard } from "@/components/ArticleCard";
import { blogService } from "@/services/blogService";
import type { Database } from "@/integrations/supabase/types";
import Head from "next/head";

type Category = Database["public"]["Tables"]["categories"]["Row"];
type BlogPost = Database["public"]["Tables"]["blog_posts"]["Row"] & {
  categories: { name: string; slug: string } | null;
};

export default function CategoryPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [category, setCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    loadCategoryPosts();
  }, [slug]);

  async function loadCategoryPosts() {
    try {
      const categorySlug = slug as string;
      const categoryData = await blogService.getCategoryBySlug(categorySlug);
      setCategory(categoryData);

      if (categoryData) {
        const postsData = await blogService.getPostsByCategory(categoryData.id);
        setPosts(postsData);
      }
    } catch (error) {
      console.error("Error loading category posts:", error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <>
        <SEO title="Loading - Let's Master Spanish" />
        <div className="min-h-screen flex flex-col bg-background">
          <Header />
          <main className="flex-1 max-w-7xl mx-auto px-4 py-16 w-full">
            <p className="text-muted-foreground">Loading...</p>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  if (!category) {
    return (
      <>
        <SEO title="Category Not Found - Let's Master Spanish" />
        <div className="min-h-screen flex flex-col bg-background">
          <Header />
          <main className="flex-1 max-w-7xl mx-auto px-4 py-16 w-full">
            <h1 className="text-4xl font-bold text-foreground font-heading mb-4">
              Category Not Found
            </h1>
            <p className="text-muted-foreground">
              The category you're looking for doesn't exist.
            </p>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  const breadcrumbJsonLd = category ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://letsmasterspanish.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": category.name
      }
    ]
  } : null;

  return (
    <>
      <SEO 
        title={`${category.name} - Let's Master Spanish`}
        description={`Browse all articles in the ${category.name} category`}
        canonical={`/categories/${category.slug}`}
      />
      
      <Head>
        {breadcrumbJsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
          />
        )}
      </Head>
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1 max-w-7xl mx-auto px-4 py-16 w-full">
          {/* Category Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-foreground font-heading mb-4">
              {category.name}
            </h1>
            <p className="text-lg text-muted-foreground">
              {posts.length} {posts.length === 1 ? "article" : "articles"} in this category
            </p>
          </div>

          {/* Posts Grid */}
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No articles published in this category yet.
              </p>
              <p className="text-muted-foreground mt-2">
                Check back soon for new content!
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <ArticleCard
                  key={post.id}
                  title={post.title}
                  excerpt={post.excerpt || post.content.substring(0, 200) + "..."}
                  category={category.name}
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