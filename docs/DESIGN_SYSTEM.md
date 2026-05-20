# Design System

## Brand Positioning

Technobuzz Systems should feel premium, corporate, technically mature, and trustworthy. The site combines enterprise SaaS clarity with cybersecurity visual cues.

## Colors

- Deep Blue: primary enterprise color for trust and authority.
- Electric Cyan: accent color for security, cloud, and technical signals.
- White: clean surfaces and high readability in light mode.
- Dark Gray / Slate: professional dark mode and command-center surfaces.

CSS variables are defined in `app/globals.css` and mapped into Tailwind through `tailwind.config.ts`.

## Typography

The site uses Inter through `next/font/google`. Headings are bold, tightly tracked, and sized responsively with fixed Tailwind breakpoints rather than viewport-based scaling.

## Layout

- Sections use generous vertical spacing: `py-20` to `py-24`.
- Cards use restrained `rounded-lg` corners and subtle borders.
- Enterprise tool surfaces use glassmorphism only where it supports the cybersecurity theme.
- Responsive grids collapse cleanly from desktop to tablet and mobile.

## Motion

Motion is subtle and functional:

- Scroll reveal animations use `components/motion.tsx`.
- The hero includes lightweight particles and grid textures.
- Careers cards animate when filters change.
- Scroll progress gives users page-position feedback.

## Accessibility

- Semantic landmarks: `header`, `main`, `footer`, `section`.
- Buttons include accessible labels where icon-only.
- Inputs use visible focus rings.
- Color contrast is tuned for dark and light mode.

## Reuse Guidelines

Use `Section` for most page blocks, `Card` for repeated content units, `Badge` for section categories, and centralized data from `lib/data.ts` when adding new enterprise content.
