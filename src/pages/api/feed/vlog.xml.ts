import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/integrations/supabase/client";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { data: posts, error } = await supabase
      .from("blog_posts")
      .select("*, categories(name, slug)")
      .eq("status", "published")
      .not("video_url", "is", null)
      .order("published_at", { ascending: false })
      .limit(50);

    if (error) throw error;

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://letsmasterspanish.com";
    
    const rssItems = posts
      .map((post: any) => {
        const postUrl = `${baseUrl}/blog/${post.slug}`;
        const pubDate = new Date(post.published_at || post.created_at).toUTCString();
        
        return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <description>${escapeXml(post.excerpt || post.content.substring(0, 500))}</description>
      <link>${postUrl}</link>
      <guid>${postUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <category>${post.categories?.name || "Spanish Learning"}</category>
      ${post.author_name ? `<author>${escapeXml(post.author_name)}</author>` : ""}
      ${post.featured_image ? `<image><url>${post.featured_image}</url><title>${escapeXml(post.title)}</title><link>${postUrl}</link></image>` : ""}
      <enclosure url="${post.video_url}" type="video/mp4" />
    </item>`;
      })
      .join("\n");

    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Let's Master Spanish - Vlog</title>
    <link>${baseUrl}/vlog</link>
    <description>Spanish learning video lessons and vlogs covering pronunciation, grammar tips, cultural insights, and real-world conversations to accelerate your learning journey.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/api/feed/vlog.xml" rel="self" type="application/rss+xml" />
    ${rssItems}
  </channel>
</rss>`;

    res.setHeader("Content-Type", "application/rss+xml; charset=utf-8");
    res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
    res.status(200).send(rss);
  } catch (error) {
    console.error("Error generating vlog RSS feed:", error);
    res.status(500).json({ error: "Failed to generate RSS feed" });
  }
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}