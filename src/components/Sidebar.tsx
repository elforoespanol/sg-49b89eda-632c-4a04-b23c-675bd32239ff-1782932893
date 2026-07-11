import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Database } from "@/integrations/supabase/types";

type BlogPost = Database["public"]["Tables"]["blog_posts"]["Row"] & {
  categories: { name: string; slug: string } | null;
};

interface SidebarWidgetsProps {
  popularPosts: BlogPost[];
}

const FALLBACK_POSTS = [
  { slug: "spain-vs-latin-american-spanish", title: "Spain vs Latin American Spanish", featured_image: null },
  { slug: "learn-spanish-learning-at-night-school", title: "Learn Spanish: Learning At Night School", featured_image: null },
  { slug: "learn-spanish-private-tuition", title: "Learn Spanish: Private Tuition", featured_image: null },
  { slug: "learn-spanish-audiobooks-podcasts-youtube", title: "Learn Spanish: Audiobooks, Podcasts & YouTube", featured_image: null },
  { slug: "learn-spanish-tips-and-tricks", title: "Learn Spanish: Tips and Tricks", featured_image: null },
  { slug: "meet-langua-the-worlds-best-ai-platform-for-language-learning", title: "Meet Langua™, the world's best AI platform for language learning", featured_image: null },
];

export function SidebarWidgets({ popularPosts }: SidebarWidgetsProps) {
  const posts =
    popularPosts.length > 0
      ? popularPosts
      : FALLBACK_POSTS.map((p) => ({ ...p, id: p.slug, published_at: null, created_at: "" } as unknown as BlogPost));

  return (
    <section className="bg-muted py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-[1fr_400px] gap-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground font-heading mb-8">Popular Posts</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="flex gap-3 group bg-card rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative w-16 h-16 flex-shrink-0 overflow-hidden rounded">
                    <Image
                      src={post.featured_image || "/generated/hero-spanish-conversation.png"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:opacity-75 transition-opacity"
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                      {post.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <Card className="p-6 border-border bg-gradient-to-br from-primary/5 to-accent/5 h-full flex flex-col justify-center">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-accent flex items-center justify-center">
                  <Mail className="h-6 w-6 text-accent-foreground" />
                </div>

                <div>
                  <h3 className="font-bold text-lg font-heading text-foreground">Join the Community</h3>
                  <p className="text-sm text-foreground/70 mt-1">
                    Get weekly Spanish tips delivered to your inbox!
                  </p>
                </div>

                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="bg-background border-border"
                  />
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Subscribe Now
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}