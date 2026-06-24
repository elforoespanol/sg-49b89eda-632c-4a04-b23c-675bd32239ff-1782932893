---
title: Vlog Feature - YouTube Embeds & Dedicated Page
status: done
priority: high
type: feature
tags: [vlog, youtube, video]
created_by: agent
created_at: 2026-06-24T13:17:00Z
position: 4
---

## Notes
Add vlog capability to the blog with two components:
1. YouTube video embeds in individual blog posts (add `video_url` field to posts)
2. Dedicated /vlog page that lists only posts with videos

Database: Add `video_url` column to `blog_posts` table
Admin: Add video URL input field in post creation form
Blog post page: Show embedded YouTube player at top if video_url exists
Vlog page: Create /vlog page filtering posts with videos
Navigation: Add "Vlog" link to header

## Checklist
- [x] Add `video_url` column to `blog_posts` table in database
- [x] Update database types to include `video_url` field
- [x] Add video URL input field to admin post creation form (src/pages/admin/posts/new.tsx)
- [x] Update blog post page (src/pages/blog/[slug].tsx) to display YouTube embed if video_url exists
- [x] Create dedicated /vlog page (src/pages/vlog.tsx) listing only video posts
- [x] Add "Vlog" link to header navigation (src/components/Header.tsx)
- [x] Update ArticleCard component to show video indicator for vlog posts
- [x] Validate build and test functionality

## Acceptance
- Admin can add YouTube video URLs when creating/editing posts
- Blog posts with videos show embedded YouTube player at the top
- /vlog page displays only posts that have video URLs
- Header navigation includes "Vlog" link
- Article cards show a video icon for vlog posts