---
title: SEO - Robots.txt, Sitemap & Canonical URLs
status: in_progress
priority: urgent
type: chore
tags: [seo, robots, sitemap, canonical]
created_by: agent
created_at: 2026-07-09T18:40:00Z
position: 1
---

## Notes:
Critical SEO infrastructure: robots.txt for crawler access, dynamic sitemap.xml for page discovery, canonical URLs to prevent duplicate content.

## Checklist:
- [ ] Create public/robots.txt with sitemap reference and crawl rules
- [ ] Create pages/api/sitemap.xml.ts as dynamic sitemap pulling all published posts and categories from Supabase
- [ ] Update SEO component to support canonical URL prop and add missing OG tags (og:locale, og:site_name, twitter:site)
- [ ] Update _document.tsx SEO defaults to use real site title/description
- [ ] Add canonical URLs to all page components (index, blog/[slug], categories/[slug], vlog)

## Acceptance:
- robots.txt is accessible at /robots.txt
- sitemap.xml is dynamically generated with all published posts
- Every page has a canonical URL meta tag