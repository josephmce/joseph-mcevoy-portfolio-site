# Next.js + Sanity Portfolio Starter

A portfolio starter for a web developer, web/UX designer, and graphic designer.

## Included

- Next.js App Router and TypeScript
- Responsive portfolio homepage
- Filterable work index
- Dynamic project case-study pages
- Blog index and dynamic blog pages
- Web development, web design, UX/UI, graphic design, and branding categories
- Embedded Sanity Studio at `/studio`
- Sanity schemas for projects, posts, categories, services, testimonials, authors, and site settings
- Homepage testimonials section populated from Sanity
- Dynamic metadata, sitemap, robots.txt, and a contact form route
- Local sample content used until Sanity environment variables are supplied

## 1. Install

```bash
npm install
```

## 2. Create a Sanity project

Either create a project at Sanity's management website or run:

```bash
npx sanity init
```

Copy `.env.example` to `.env.local` and add the project ID:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-01-01
```

Add `http://localhost:3000` as a CORS origin in the Sanity project settings. Add the production domain later.

## 3. Run locally

```bash
npm run dev
```

Open:

- Website: http://localhost:3000
- Studio: http://localhost:3000/studio

Without Sanity variables, the public website displays local sample content. The Studio requires a valid Sanity project.

## 4. Add content

Create project categories first, then projects and posts. Slugs are generated from titles in Studio.

## 5. Contact form

`app/api/contact/route.ts` validates submissions but deliberately does not send email. Connect it to Resend, Mailchimp Transactional, SendGrid, or your preferred provider before production.

## Suggested next steps

- Replace placeholder SVG artwork with your screenshots and graphic design images
- Add Sanity preview/visual editing
- Add spam protection and an email service to the contact form
- Generate Sanity types with Sanity TypeGen
- Deploy the frontend to Vercel and configure the production Sanity CORS origin
