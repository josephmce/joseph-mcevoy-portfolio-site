# Joseph McEvoy Portfolio

A personal portfolio built with Next.js, React, and TypeScript.

The project intentionally has **no CMS and no database**. Portfolio projects,
blog posts, and testimonials are maintained directly in small TypeScript content
files. This keeps the site simple, easy to maintain, and removes the previous
Sanity dependency.

The production site is deployed with **Vercel**, DNS and bot protection are
managed with **Cloudflare**, and contact-form email delivery is handled by
**Resend**.

## Stack

- Next.js App Router
- React
- TypeScript
- Plain CSS in `app/globals.css`
- Local content files in `content/`
- Vercel for hosting and deployments
- Cloudflare for DNS and Turnstile
- Resend for contact-form email delivery

## Install and run locally

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Where content lives

```text
content/
├── projects.ts       Portfolio projects and case-study copy
├── posts.ts          Blog articles
└── testimonials.ts   Homepage testimonials
```

## Add or edit a project

1. Add project images beneath `public/images/`.
2. Add or edit an object in `content/projects.ts`.
3. Give each project a unique `id` and `slug`.
4. Use `order` to control the display order.
5. Set `featured: true` if the project should appear on the home page.
6. Add case-study paragraphs using simple string arrays such as `overview`,
   `challenge`, `process`, `solution`, and `outcome`.

Example:

```ts
{
  id: "my-project",
  title: "My Project",
  slug: "my-project",
  order: 1,
  summary: "Short description of the work.",
  featured: true,
  role: "Full Stack Developer",
  categories: [
    { title: "Web Development", slug: "web-development" }
  ],
  technologies: ["Next.js", "TypeScript"],
  coverImage: "/images/my-project/cover.jpg",
  overview: [
    "First overview paragraph.",
    "Second overview paragraph."
  ]
}
```

The project will automatically be available at:

```text
/work/my-project
```

### Project ordering

Projects are ordered manually using:

```ts
order: 1
order: 2
order: 3
```

Lower numbers appear first.

The same ordering is used by the homepage featured-projects section, with
`featured: true` acting as the filter.

## Add a blog post

Add an object to `content/posts.ts`.

Each item in `body` is rendered as a paragraph.

```ts
{
  id: "my-post",
  title: "My Post",
  slug: "my-post",
  excerpt: "Short description.",
  publishedAt: "2026-09-29",
  categories: ["Development"],
  coverImage: "/images/my-post.jpg",
  body: [
    "First paragraph.",
    "Second paragraph."
  ]
}
```

The article will automatically be available at:

```text
/blog/my-post
```

Blog posts are sorted newest-first by `publishedAt`.

## Edit testimonials

Edit:

```text
content/testimonials.ts
```

Testimonials can include:

- name
- role
- company
- quote
- image
- external link

If the testimonials array is empty, the testimonials section will not appear on
the homepage.

Testimonial images are stored beneath:

```text
public/images/testimonials/
```

## Images and video

Static images belong beneath:

```text
public/images/
```

Reference them using paths beginning with:

```text
/images/
```

For example:

```tsx
<Image
  src="/images/about/profile-picture.jpg"
  alt="Joseph McEvoy"
  width={900}
  height={720}
/>
```

Video files can be stored beneath:

```text
public/videos/
```

For example:

```text
/videos/3d-showcase.mp4
```

The portfolio has been migrated away from Framer-hosted image assets where
possible, so production media should normally be served from this project.

## Favicon

The site favicon is stored at:

```text
app/favicon.ico
```

Next.js automatically uses this file as the browser favicon.

## Site URL and SEO

The production URL is configured using:

```env
SITE_URL=https://josephmcevoy.co.uk
```

If `www` is configured as the primary domain in Vercel instead, use:

```env
SITE_URL=https://www.josephmcevoy.co.uk
```

Use whichever domain is configured as the primary production URL in Vercel.

If `SITE_URL` is not set, local development falls back to:

```text
http://localhost:3000
```

The value is used by site metadata, `robots.txt`, and `sitemap.xml`.

## Deployment

The portfolio is hosted on **Vercel** and connected to the GitHub repository.

The normal deployment workflow is:

```bash
git add .
git commit -m "Describe the change"
git push
```

A push to the configured production branch triggers a new Vercel deployment.

The Vercel project can also be redeployed manually from:

```text
Vercel
→ Project
→ Deployments
→ latest deployment
→ Redeploy
```

Before pushing production changes, run:

```bash
npm run build
```

to catch production-only build issues locally.

## Domain and DNS

The domain is registered and managed through **Cloudflare**.

Vercel hosts the application, while Cloudflare manages the DNS records that
point the domain at Vercel.

The basic flow is:

```text
josephmcevoy.co.uk
        ↓
Cloudflare DNS
        ↓
Vercel
        ↓
Next.js portfolio
```

DNS records for Vercel are configured in:

```text
Cloudflare
→ josephmcevoy.co.uk
→ DNS
→ Records
```

Use the exact DNS values shown by Vercel.

For Vercel records, keep Cloudflare proxying set to:

```text
DNS only
```

unless the setup is intentionally changed later.

The primary domain and redirect behaviour are managed in:

```text
Vercel
→ Project
→ Settings
→ Domains
```

## Contact form

The contact form posts to:

```text
/api/contact
```

The production contact flow is:

```text
Contact form
    ↓
Honeypot
    ↓
Required-field validation
    ↓
Maximum-length validation
    ↓
Email validation
    ↓
Cloudflare Turnstile verification
    ↓
Resend
    ↓
Contact inbox
```

### Contact-form protections

The form currently includes:

- hidden honeypot field
- required-field validation
- client-side maximum lengths
- server-side maximum-length enforcement
- email-format validation
- Cloudflare Turnstile verification

Current field limits are:

```text
Name       100 characters
Email      254 characters
Message    5000 characters
```

A separate distributed rate-limiting service is not currently used. Turnstile,
the honeypot, and server-side validation provide the initial anti-spam layer.

## Cloudflare Turnstile

Turnstile provides bot protection for the contact form.

The widget uses:

```env
NEXT_PUBLIC_TURNSTILE_SITE_KEY=...
```

The server-side verification uses:

```env
TURNSTILE_SECRET_KEY=...
```

The public site key is intentionally exposed to the browser.

The secret key must remain server-side only.

Allowed hostnames are configured in:

```text
Cloudflare
→ Turnstile
→ portfolio widget
→ Hostnames
```

The production hostname should be included, for example:

```text
josephmcevoy.co.uk
```

and optionally:

```text
www.josephmcevoy.co.uk
joseph-mcevoy-portfolio.vercel.app
```

The server verifies Turnstile tokens against Cloudflare's Siteverify endpoint
before any email is sent.

## Resend email delivery

Contact-form emails are sent using **Resend**.

The domain:

```text
josephmcevoy.co.uk
```

has been verified in Resend for sending.

The sender is configured through:

```env
CONTACT_FROM_EMAIL=contact@josephmcevoy.co.uk
```

A physical mailbox does not need to exist at that address just to send through
Resend, because the domain itself is authenticated for sending.

The destination inbox is configured with:

```env
CONTACT_TO_EMAIL=your-real-email@example.com
```

The API route also sets the visitor's submitted email address as `replyTo`, so
replying to a contact-form email replies directly to the visitor.

The Resend API key is configured using:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
```

The API key must be treated as a secret and must never be committed to Git.

## Environment variables

Production environment variables are managed in:

```text
Vercel
→ Project
→ Settings
→ Environment Variables
```

The production setup uses:

```env
SITE_URL=https://josephmcevoy.co.uk

NEXT_PUBLIC_TURNSTILE_SITE_KEY=...
TURNSTILE_SECRET_KEY=...

RESEND_API_KEY=...
CONTACT_FROM_EMAIL=contact@josephmcevoy.co.uk
CONTACT_TO_EMAIL=your-real-email@example.com
```

If the `www` version of the domain is the Vercel primary, update `SITE_URL`
accordingly.

### Local environment variables

For local testing, environment variables can be placed in:

```text
.env.local
```

This file should remain ignored by Git.

Ensure `.gitignore` contains:

```gitignore
.env.local
```

Never place secret keys in variables prefixed with:

```text
NEXT_PUBLIC_
```

Only values that are intentionally available to browser-side code should use
that prefix.

## Main routes

- `/` — Home
- `/about` — About
- `/work` — Projects
- `/work/[slug]` — Project case study
- `/services` — Services
- `/blog` — Blog
- `/blog/[slug]` — Article
- `/contact` — Contact

## Homepage features

The homepage includes:

- animated hero heading
- animated rotating hero glow
- continuously scrolling company-logo marquee
- manually ordered featured projects
- testimonials
- Graphic Design carousel
- 3D Graphics carousel
- contact call-to-action

The Graphic Design and 3D galleries support:

- previous/next controls
- mouse dragging
- touch swiping
- keyboard arrow navigation
- scroll snapping

The 3D gallery can contain both images and video.

## Accessibility

Interactive components should continue to support:

- keyboard navigation
- visible focus states
- meaningful image `alt` text
- empty `alt=""` for decorative images
- sensible heading hierarchy
- `prefers-reduced-motion` for non-essential animation

## Useful commands

```bash
npm run dev
npm run typecheck
npm run lint
npm run build
```

## Production checklist

Before deploying significant updates:

```text
1. Run npm run build
2. Check the homepage and main routes
3. Test responsive layouts
4. Test project links and sliders
5. Test the live contact form
6. Confirm Turnstile succeeds
7. Confirm the Resend email arrives
8. Confirm Reply-To points to the submitted email address
9. Check sitemap and robots output
10. Commit and push to GitHub
```
