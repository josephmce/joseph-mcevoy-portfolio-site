import { client } from "@/sanity/lib/client";
import { isSanityConfigured } from "@/sanity/env";
import {
  featuredProjectsQuery,
  postBySlugQuery,
  postsQuery,
  projectBySlugQuery,
  projectsQuery,
  testimonialsQuery,
} from "@/sanity/lib/queries";
import {
  samplePosts,
  sampleProjects,
  sampleTestimonials,
} from "@/lib/sample-data";
import type { Post, Project, Testimonial } from "@/types/content";

export async function getProjects(): Promise<Project[]> {
  if (!isSanityConfigured) return sampleProjects;
  return (await client.fetch(projectsQuery)) as Project[];
}

export async function getFeaturedProjects(): Promise<Project[]> {
  if (!isSanityConfigured) {
    return sampleProjects.filter((project) => project.featured);
  }

  return (await client.fetch(featuredProjectsQuery)) as Project[];
}

export async function getProject(slug: string): Promise<Project | null> {
  if (!isSanityConfigured) {
    return sampleProjects.find((project) => project.slug === slug) ?? null;
  }

  return (await client.fetch(projectBySlugQuery, { slug })) as Project | null;
}

export async function getPosts(): Promise<Post[]> {
  if (!isSanityConfigured) return samplePosts;
  return (await client.fetch(postsQuery)) as Post[];
}

export async function getPost(slug: string): Promise<Post | null> {
  if (!isSanityConfigured) {
    return samplePosts.find((post) => post.slug === slug) ?? null;
  }

  return (await client.fetch(postBySlugQuery, { slug })) as Post | null;
}


export async function getTestimonials(): Promise<Testimonial[]> {
  if (!isSanityConfigured) return sampleTestimonials;
  return (await client.fetch(testimonialsQuery)) as Testimonial[];
}
