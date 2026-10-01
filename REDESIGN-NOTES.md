# Framer-inspired redesign notes

This version keeps the existing dark Framer-inspired visual design while
simplifying the content architecture for a personal portfolio.

## Current content approach

Sanity has been removed completely. Projects, blog posts, and testimonials now
live in local TypeScript files under `content/`.

This means there is no CMS login, external content API, CORS configuration,
dataset, Studio route, or Sanity environment configuration to maintain.

## Visual system

- Dark `#1c1c1e` visual system with teal `#33a3a5` accent
- Soft teal glows and subtle star field
- Sticky desktop navigation and responsive mobile menu
- Framer-style staggered hero text reveal
- Native browser scrolling
- Responsive project cards and case-study pages
- Graphic design and 3D showcase sections
- Existing contact page and footer styling

## Content editing

- `content/projects.ts` — project cards and case studies
- `content/posts.ts` — blog articles
- `content/testimonials.ts` — testimonial cards
- `public/images/` — local project, article, and showcase imagery

Case-study and article copy uses normal `string[]` paragraph arrays instead of
Sanity Portable Text objects.

## Placeholder images

Replace these files with final assets whenever ready:

- `public/images/about-hero-placeholder.svg`
- `public/images/about-professional-placeholder.svg`
- `public/images/about-personal-placeholder.svg`
- `public/images/graphic-design-placeholder.svg`
- `public/images/3d-placeholder.svg`

## Social links

- GitHub: `https://github.com/josephmce`
- LinkedIn: `https://www.linkedin.com/in/joseph-mcevoy-236aab195/`

## Production setup

Set `SITE_URL` in `.env.local` or the deployment environment to the final
production domain. Metadata, sitemap, and robots use that shared value.
