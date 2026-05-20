# Component Documentation

## Layout Components

- `components/navbar.tsx`: Sticky responsive navigation with active states, mobile menu, services mega menu, theme toggle, and consultation CTA.
- `components/footer.tsx`: Enterprise footer with company summary, service links, careers/company links, newsletter UI, social icons, and compliance badges.
- `components/providers.tsx`: Wraps the app in `next-themes`.
- `components/scroll-progress.tsx`: Framer Motion page scroll indicator.

## Page Building Blocks

- `components/section.tsx`: Consistent section shell with eyebrow badge, title, description, and responsive container spacing.
- `components/motion.tsx`: `Reveal` wrapper for scroll-triggered Framer Motion entrance animations.
- `components/particles.tsx`: Lightweight decorative particle layer used in hero surfaces.

## UI Primitives

- `components/ui/button.tsx`: shadcn-style button primitive using `class-variance-authority` variants.
- `components/ui/card.tsx`: Card, CardHeader, CardTitle, CardDescription, and CardContent primitives.
- `components/ui/badge.tsx`: Small brand badge used for section labels and categories.

## Interactive Components

- `components/careers-board.tsx`: Client-side careers portal with search, department filters, animated job cards, Radix apply modal, and resume upload UI.

## Content Data

`lib/data.ts` centralizes navigation, services, jobs, case studies, testimonials, blog articles, values, leadership, compliance badges, and global office content.
