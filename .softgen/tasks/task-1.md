---
title: Homepage - Educational Blog Layout
status: in_progress
priority: urgent
type: feature
tags: [homepage, layout, design-system]
created_by: agent
created_at: 2026-05-07T13:12:36Z
position: 1
---

## Notes
Build complete homepage for "Let's Master Spanish" educational blog following specified visual identity and layout architecture. Includes design system setup, sticky header, hero section, 2-column content layout, featured grid, testimonials, and footer. User provided exact colors (hex) and fonts (Montserrat/Open Sans).

## Checklist
- [x] Set up design system in globals.css (convert hex → HSL, theme shadcn tokens)
- [x] Register custom colors and fonts in tailwind.config.ts
- [ ] Create Header component: sticky, 2-row (social icons + search top, logo + nav bottom)
- [ ] Create Hero section: full-width lifestyle image, headline, subheadline, large CTA button
- [ ] Create ArticleCard component for Recent Articles feed (featured image, category tag, excerpt)
- [ ] Create Sidebar component: About widget, Popular Lessons list, Newsletter opt-in box
- [ ] Create FeaturedGrid: 3-card horizontal layout (Beginner Path, Verb Conjugation, Travel Phrases)
- [ ] Create TestimonialsSlider component with user success stories
- [ ] Create Footer: 3-column layout (mission, quick links, social buttons)
- [ ] Add floating announcement bar in Golden Yellow
- [ ] Implement mobile responsiveness across all sections
- [ ] Add lazy-loading for images, SEO-friendly heading hierarchy

## Acceptance
- Homepage displays full layout with header, hero, 2-column body, featured grid, testimonials, footer
- All colors match specified palette (Electric Blue CTAs, Golden Yellow accents, clean white backgrounds)
- Typography uses Montserrat headings and Open Sans body text
- Mobile view reorganizes to single column, maintains readability