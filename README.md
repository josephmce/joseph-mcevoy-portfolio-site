# Joseph McEvoy Portfolio

A personal portfolio built with Next.js, React, and TypeScript.

The project intentionally has **no CMS and no database**. Portfolio projects,
blog posts, and testimonials are maintained directly in small TypeScript content
files, which keeps the site simple and removes the previous Sanity dependency.

## Stack

- Next.js App Router
- React
- TypeScript
- Plain CSS in `app/globals.css`
- Local content files in `content/`

## Install and run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Where content lives

```text
content/
├── projects.ts       Portfolio projects and case-study copy
├── posts.ts          Blog articles
└── testimonials.ts   Homepage testimonials
```

### Add a project

1. Add project images beneath `public/images/`.
2. Add an object to `content/projects.ts`.
3. Give it a unique `id` and `slug`.
4. Set `featured: true` if it should appear on the home page.
5. Add case-study paragraphs using the simple string arrays such as
   `overview`, `challenge`, `process`, `solution`, and `outcome`.

Example:

```ts
{
  id: "my-project",
  title: "My Project",
  slug: "my-project",
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

The project will automatically be available at `/work/my-project`.

### Add a blog post

Add an object to `content/posts.ts`. Each item in `body` is rendered as a
paragraph.

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

The article will automatically be available at `/blog/my-post`.

### Edit testimonials

Edit `content/testimonials.ts`. If the array is empty, the testimonials section
will not appear on the home page.

## Images

Static images belong in `public/images/`. Reference them from content files with
paths beginning with `/images/`.

## Site URL / SEO

The site no longer hardcodes `example.com`.

For production, copy `.env.example` to `.env.local` and set:

```env
SITE_URL=https://your-domain.com
```

If `SITE_URL` is not set, local development falls back to
`http://localhost:3000`.

The value is used by metadata, `robots.txt`, and `sitemap.xml`.

## Contact form

The existing contact form and `/api/contact` route are unchanged. The route
validates submissions but does not yet send email. An email service can be added
later without changing the rest of the portfolio content system.

## Main routes

- `/` — Home
- `/about` — About
- `/work` — Projects
- `/work/[slug]` — Project case study
- `/services` — Services
- `/blog` — Blog
- `/blog/[slug]` — Article
- `/contact` — Contact

## Useful commands

```bash
npm run dev
npm run typecheck
npm run lint
npm run build
```
