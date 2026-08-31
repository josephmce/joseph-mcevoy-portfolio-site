# Framer-inspired redesign notes

This version applies the visual language from the supplied Framer portfolio screenshots to the existing Next.js + Sanity project.

## Preserved

- Sanity configuration, schemas, queries, client and CMS-driven project/testimonial content.
- Existing `/api/contact` validation endpoint and the existing React contact-form submission flow.
- Existing project, blog, service and Sanity Studio routes.

## Updated

- Dark `#1c1c1e` visual system with teal `#33a3a5` accent, soft teal glows, subtle star field, dark cards and compact labels.
- Sticky desktop navigation and responsive mobile hamburger navigation.
- Framer-style staggered hero text reveal.
- Native browser scrolling for maximum responsiveness and consistency.
- Home page layout: centred hero, company strip, selected projects, testimonials, graphic/3D showcases and contact CTA.
- Projects page card layout and responsive styling.
- About page layout based on supplied desktop/mobile references.
- Contact page keeps the newer project form but restyles it to match the Framer-inspired theme.
- Footer structure and teal glow treatment.
- GitHub and LinkedIn links added to the contact page and footer.

## Placeholder images

Replace these files with final assets whenever ready:

- `public/images/about-hero-placeholder.svg`
- `public/images/about-professional-placeholder.svg`
- `public/images/about-personal-placeholder.svg`
- `public/images/graphic-design-placeholder.svg`
- `public/images/3d-placeholder.svg`

Project imagery still comes from Sanity when configured, with the project's existing fallback images used otherwise.

## Social links

- GitHub: `https://github.com/josephmce`
- LinkedIn: `https://www.linkedin.com/in/joseph-mcevoy-236aab195/`

## Before production

The existing project still uses `https://www.example.com` in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts`. Replace this with the final production domain when known.

## Smooth-scroll performance pass (v3)

The experimental inertial scrolling layer was tested and then removed after review because native scrolling felt more consistent on the target devices.


## Native scrolling update

Lenis and the custom inertial scrolling layer were removed entirely. The site now uses native browser scrolling for the most responsive and consistent experience, while the existing entrance/text animations remain in place.
