---
title: Fix Short Meta Descriptions
status: in_progress
priority: high
type: chore
tags: [seo, meta-descriptions]
created_by: agent
created_at: 2026-07-17T21:41:15Z
position: 5
---
## Notes
Bing audit reports that the homepage, legal pages, category pages, and the Langua blog post have meta descriptions that are too short. Meta descriptions should be roughly 120–160 characters. Static pages have hardcoded descriptions; category pages generate them from the category name; the Langua post stores its description in the database.

## Checklist
- [x] Lengthen meta description on homepage (index.tsx)
- [x] Lengthen meta description on disclosure-policy.tsx
- [x] Lengthen meta description on cookie-consent-policy.tsx
- [x] Lengthen meta description on terms-of-business.tsx
- [x] Update category page template to generate richer descriptions
- [x] Update Langua blog post meta_description in Supabase
- [ ] Run check_for_errors

## Acceptance
- All listed pages have meta descriptions between 120–160 characters.
- No build or type errors are introduced.