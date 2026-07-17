import { useState, useEffect } from "react";
import { SEO } from "@/components/SEO";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturedGrid } from "@/components/FeaturedGrid";
import { ArticleCard } from "@/components/ArticleCard";
import { SidebarWidgets } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import { blogService } from "@/services/blogService";
import type { Database } from "@/integrations/supabase/types";
import Head from "next/head";

type BlogPost = Database["public"]["Tables"]["blog_posts"]["Row"] & {
  categories: { name: string; slug: string } | null;
};

const POPULAR_SLUGS = [
  "spain-vs-latin-american-spanish",
  "learn-spanish-learning-at-night-school",
  "learn-spanish-private-tuition",
  "learn-spanish-audiobooks-podcasts-youtube",
  "learn-spanish-tips-and-tricks",
  "meet-langua-the-worlds-best-ai-platform-for-language-learning",
];

export default function Home() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [popularPosts, setPopularPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPosts();
    loadPopularPosts();
  }, []);

  async function loadPosts() {
    try {
      const data = await blogService.getPublishedPosts(8);
      setPosts(data);
    } catch (error) {
      console.error("Error loading posts:", error);
    } finally {
      setLoading(false);
    }
  }

  async function loadPopularPosts() {
    try {
      const data = await blogService.getPopularPosts(POPULAR_SLUGS);
      setPopularPosts(data);
    } catch (error) {
      console.error("Error loading popular posts:", error);
    }
  }

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Let's Master Spanish",
    "url": "https://letsmasterspanish.com",
    "description": "Empowering Spanish language learners from beginner to fluent through proven strategies, high-quality lessons, and community engagement.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://letsmasterspanish.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Let's Master Spanish",
    "url": "https://letsmasterspanish.com",
    "logo": "https://letsmasterspanish.com/logo.jpg",
    "description": "Educational blog empowering Spanish language learners from beginner to fluent through proven strategies, high-quality lessons, and community engagement.",
    "sameAs": [
      "https://facebook.com/letsmasterspanish",
      "https://twitter.com/LetsMasterSpanish",
      "https://instagram.com/letsmasterspanish"
    ]
  };

  return (
    <>
      <SEO 
        title="Let's Master Spanish - Learn Spanish with Proven Strategies"
        description="Discover proven strategies, high-quality lessons, and practical tips to take your Spanish from beginner to fluent. Join our community of adult Spanish learners today."
        canonical="/"
      />
      
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </Head>
      
      <div className="min-h-screen flex flex-col bg-background">
        <AnnouncementBar />
        <Header />
        <Hero />
        <FeaturedGrid />
        
        <main className="flex-1 max-w-7xl mx-auto px-4 py-16 w-full">
          {/* Recent Articles - Full Width */}
          <div>
            <h2 className="text-3xl font-bold text-foreground font-heading mb-8">
              Recent Articles
            </h2>
            
            {loading ? (
              <p className="text-muted-foreground">Loading articles...</p>
            ) : posts.length === 0 ? (
              <p className="text-muted-foreground">No articles published yet.</p>
            ) : (
              <div className="grid md:grid-cols-2 gap-8">
                {posts.map((post) => (
                  <ArticleCard
                    key={post.id}
                    postId={post.id}
                    title={post.title}
                    excerpt={post.excerpt || (post.content ? post.content.substring(0, 200) + "..." : "")}
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
          </div>
        </main>

        <SidebarWidgets popularPosts={popularPosts} />
        <Footer />
      </div>
    </>
  );
}