import { posts } from "@/content/posts";
import { projects } from "@/content/projects";
import { testimonials } from "@/content/testimonials";
import type { Post, Project, Testimonial } from "@/types/content";

function newestFirst<T extends { projectDate?: string; publishedAt?: string }>(
  items: T[],
): T[] {
  return [...items].sort((a, b) => {
    const aDate = a.projectDate || a.publishedAt || "";
    const bDate = b.projectDate || b.publishedAt || "";

    return bDate.localeCompare(aDate);
  });
}

export function getProjects(): Project[] {
  return [...projects].sort((a, b) => a.order - b.order);
}

export function getFeaturedProjects(): Project[] {
  return getProjects().filter((project) => project.featured);
}

export function getProject(slug: string): Project | null {
  return projects.find((project) => project.slug === slug) ?? null;
}

export function getPosts(): Post[] {
  return newestFirst(posts);
}

export function getPost(slug: string): Post | null {
  return posts.find((post) => post.slug === slug) ?? null;
}

export function getTestimonials(): Testimonial[] {
  return testimonials;
}