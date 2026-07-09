---
title: SEO - Functional Search
status: todo
priority: medium
type: feature
tags: [seo, search, ux]
created_by: agent
created_at: 2026-07-09T18:40:00Z
position: 3
---

## Notes:
The search bar in the header is non-functional. Implement client-side search that queries published posts by title and content.

## Checklist:
- [ ] Create SearchResults component with search overlay/modal
- [ ] Add search query logic using Supabase text search on blog_posts
- [ ] Wire up Header search input to trigger search and display results
- [ ] Add search page at /search?q= for crawlable search results

## Acceptance:
- Typing in search bar shows matching posts
- Results link to correct blog post URLs
- Search page is accessible via URL