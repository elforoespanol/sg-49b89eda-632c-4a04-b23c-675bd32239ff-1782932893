import { SEO } from "@/components/SEO";
import Link from "next/link";
import { supabase } from "@/integrations/supabase/client";

interface SitemapPageProps {
  posts: { slug: string; title: string }[];
  categories: { slug: string; name: string }[];
}

export default function SitemapPage({ posts, categories }: SitemapPageProps) {
  const staticLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/vlog", label: "Vlog" },
    { href: "/store", label: "Store" },
    { href: "/learn-spanish-dvds-cds-and-more", label: "Learn Spanish DVDs, CDs & More" },
    { href: "/privacy-gdpr", label: "Privacy & GDPR Policy" },
    { href: "/terms-of-business", label: "Terms of Business" },
    { href: "/disclosure-policy", label: "Disclosure Policy" },
    { href: "/cookie-consent-policy", label: "Cookie Consent Policy" },
  ];

  return (
    <>
      <SEO
        title="Sitemap - Let's Master Spanish"
        description="Browse all pages, articles, and categories on Let's Master Spanish. Find exactly what you need to accelerate your Spanish learning journey."
        canonical="/sitemap/"
      />

      <main className="min-h-screen bg-background py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 font-heading">
            Sitemap
          </h1>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-heading border-b border-border pb-2">
              Main Pages
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {staticLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary hover:underline font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-heading border-b border-border pb-2">
              Categories
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/categories/${cat.slug}`}
                    className="text-primary hover:underline font-medium"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-heading border-b border-border pb-2">
              Blog Posts
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary hover:underline font-medium"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const { data: posts } = await supabase
    .from("blog_posts")
    .select("slug, title")
    .eq("status", "published")
    .order("published_at", { ascending: false });

  const { data: categories } = await supabase
    .from("categories")
    .select("slug, name")
    .order("name", { ascending: true });

  return {
    props: {
      posts: posts || [],
      categories: categories || [],
    },
    revalidate: 3600,
  };
}