---
title: Rich Text Editor for Blog Posts
status: done
priority: high
type: feature
tags: [editor, admin, markdown]
created_by: agent
created_at: 2026-11-24T21:18:00Z
position: 10
---

## Notes
Build a toolbar-based markdown editor for the admin post creation page. Clicking Bold/Italic/Heading/Link/Image buttons wraps selected text with markdown syntax. Also update blog post pages to render markdown properly.

## Checklist
- [x] Install react-markdown + remark-gfm for markdown rendering
- [x] Create RichTextEditor component with toolbar + textarea + live preview
- [x] Wire RichTextEditor into admin/posts/new.tsx for the content field
- [x] Update blog/[slug].tsx to render content as markdown
- [x] Verify no build errors

## Acceptance
- Admin can click "Bold" button to make selected text bold in the editor
- Admin can click "Italic" button to italicize selected text
- Admin can insert headings, links, and images via toolbar buttons
- Blog post pages render all markdown formatting correctly