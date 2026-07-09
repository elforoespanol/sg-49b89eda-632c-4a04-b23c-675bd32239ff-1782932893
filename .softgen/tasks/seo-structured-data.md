---
title: SEO - JSON-LD Structured Data
status: done
priority: high
type: feature
tags: [seo, json-ld, structured-data]
created_by: agent
created_at: 2026-07-09T18:38:00Z
position: 2
---

## Notes:
Add JSON-LD structured data for rich search results. Article schema for blog posts, WebSite schema for homepage, Organization schema for brand.

## Checklist:
- [ ] Add Organization JSON-LD to _document.tsx or _app.tsx (site-wide)
- [ ] Add WebSite JSON-LD with SearchAction to homepage (index.tsx)
- [ ] Add Article JSON-LD to blog post pages (blog/[slug].tsx) with author, datePublished, image
- [ ] Add BreadcrumbList JSON-LD to blog post and category pages

## Acceptance:
- Google Rich Results Test validates all structured data
- Blog posts show author, date, and image in search results