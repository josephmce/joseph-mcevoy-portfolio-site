import type { MetadataRoute } from "next";
import { getPosts, getProjects } from "@/lib/content";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getProjects();
  const posts = getPosts();

  const staticRoutes = ["", "/work", "/about", "/services", "/blog", "/contact"];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
    })),
    ...projects.map((project) => ({
      url: `${siteUrl}/work/${project.slug}`,
      lastModified: project.projectDate
        ? new Date(project.projectDate)
        : new Date(),
    })),
    ...posts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
    })),
  ];
}
