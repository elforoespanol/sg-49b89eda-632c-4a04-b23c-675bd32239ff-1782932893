import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/integrations/supabase/client";

const SITE_URL = "https://letsmasterspanish.com";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data: posts } = await supabase
    .from("blog_posts")
    .select("slug, updated_at, published_at, created_at")
    .eq("status", "published")
    .order("published_at", { ascending: false });

  const { data: categories } = await supabase
    .from("categories")
    .select("slug");

  const staticPages = [
    { url: "/", changefreq: "daily", priority: "1.0" },
    { url: "/vlog", changefreq: "weekly", priority: "0.8" },
    { url: "/about", changefreq: "monthly", priority: "0.6" },
    { url: "/privacy-gdpr", changefreq: "yearly", priority: "0.3" },
    { url: "/terms-of-business", changefreq: "yearly", priority: "0.3" },
    { url: "/disclosure-policy", changefreq: "yearly", priority: "0.3" },
    { url: "/cookie-consent-policy", changefreq: "yearly", priority: "0.3" },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${staticPages
    .map(
      (page) => `
  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join("")}
  ${(posts || [])
    .map(
      (post) => `
  <url>
    <loc>${SITE_URL}/blog/${post.slug}</loc>
    <lastmod>${new Date(post.updated_at || post.published_at || post.created_at || new Date()).toISOString().split("T")[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`
    )
    .join("")}
  ${(categories || [])
    .map(
      (cat) => `
  <url>
    <loc>${SITE_URL}/categories/${cat.slug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`
    )
    .join("")}
</urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.setHeader("Cache-Control", "public, max-age=3600, s-maxage=3600");
  res.status(200).send(xml);
}