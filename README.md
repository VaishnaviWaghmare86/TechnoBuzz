# Technobuzz Systems Website

Modern enterprise website for Technobuzz Systems built with Next.js 15, React, TypeScript, Tailwind CSS, Framer Motion, shadcn-style UI primitives, Radix Dialog, Lucide icons, and dark/light theme support.

## Features

- Fully responsive App Router website
- Premium enterprise SaaS and cybersecurity visual system
- Sticky navbar with services mega menu
- Dark and light mode with `next-themes`
- Framer Motion reveal animations and scroll progress
- Interactive particles background
- Careers portal with search, department filters, animated cards, apply modal, and resume upload UI
- Home, About, Services, Careers, Case Studies, Blog, and Contact pages
- SEO metadata and Open Graph defaults
- Reusable component architecture
- Environment configuration sample

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

Build for production:

```bash
npm run build
npm run start
```

## Environment

Copy `.env.example` to `.env.local` and update values for the production domain and contact details.

```bash
NEXT_PUBLIC_SITE_URL=https://technobuzzsystems.com
NEXT_PUBLIC_CONTACT_EMAIL=contact@technobuzzsystems.com
NEXT_PUBLIC_CONTACT_PHONE=+91-98765-43210
```

## Project Structure

```text
app/
  about/
  blog/
  careers/
  case-studies/
  contact/
  services/
  globals.css
  layout.tsx
  page.tsx
components/
  ui/
  careers-board.tsx
  footer.tsx
  navbar.tsx
  particles.tsx
  providers.tsx
  scroll-progress.tsx
  section.tsx
  theme-toggle.tsx
lib/
  data.ts
  utils.ts
docs/
  COMPONENTS.md
  DESIGN_SYSTEM.md
public/
  brand/
```

## Notes

The previous static/PHP website files remain in the repository for reference. The Next.js implementation is the production-ready site.
