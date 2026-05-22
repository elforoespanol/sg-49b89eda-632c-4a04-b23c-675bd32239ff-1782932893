---
title: Cookie consent banner
status: done
priority: high
type: feature
tags: [ui, compliance]
created_by: agent
created_at: "2026-05-22T07:10:00Z"
position: 3
---

## Notes
Implement a fixed bottom cookie consent banner that appears on first visit. Must persist user choice in localStorage to prevent re-display. Links to the existing /cookie-consent-policy page. Styled to match the site's EdTech aesthetic (Electric Blue primary, clean white background, 8px radius).

## Checklist
- [ ] Create CookieConsentBanner component with Accept/Reject buttons
- [ ] Integrate into _app.tsx layout for site-wide display
- [ ] Persist consent choice in localStorage with hydration-safe logic
- [ ] Verify styling and mobile responsiveness

## Acceptance
- Banner appears on initial load and dismisses permanently after clicking Accept or Reject
- Clicking links to Cookie Policy works
- No hydration mismatch errors in dev console