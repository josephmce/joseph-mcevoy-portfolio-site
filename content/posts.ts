import type { Post } from "@/types/content";

// Add, remove, or edit blog posts here.
// Each string in body becomes a paragraph on the article page.
export const posts: Post[] = [
  {
    id: "designing-portfolio-case-studies",
    title: "Designing portfolio case studies that explain your contribution",
    slug: "designing-portfolio-case-studies",
    excerpt:
      "A practical structure for showing the problem, your responsibilities, the process, and the outcome instead of presenting an unexplained image gallery.",
    publishedAt: "2026-06-20",
    categories: ["Portfolio", "UX/UI"],
    coverImage: "/images/post-case-study.svg",
    body: [
      "A useful portfolio case study should make your personal contribution unmistakable. Start with a short project summary, then state the context, constraints, role, process, and measurable or observable outcome.",
      "For development work, explain architecture and difficult implementation decisions. For UX work, show how evidence influenced the design. For graphic design, connect the visual direction to the brief and production requirements.",
    ],
  },
];
