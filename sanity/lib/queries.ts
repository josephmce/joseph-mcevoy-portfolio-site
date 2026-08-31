import { defineQuery } from "next-sanity";

export const projectsQuery = defineQuery(`
  *[_type == "project"] | order(projectDate desc) {
    _id,
    title,
    "slug": slug.current,
    summary,
    featured,
    projectDate,
    client,
    employer,
    role,
    duration,
    categories[]->{title, "slug": slug.current},
    services,
    technologies,
    designTools,
    coverImage
  }
`);

export const featuredProjectsQuery = defineQuery(`
  *[_type == "project" && featured == true] | order(projectDate desc)[0...6] {
    _id,
    title,
    "slug": slug.current,
    summary,
    featured,
    projectDate,
    categories[]->{title, "slug": slug.current},
    coverImage
  }
`);

export const projectBySlugQuery = defineQuery(`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    summary,
    featured,
    projectDate,
    client,
    employer,
    role,
    duration,
    categories[]->{title, "slug": slug.current},
    services,
    technologies,
    designTools,
    coverImage,
    gallery,
    overview,
    challenge,
    process,
    solution,
    outcome,
    liveUrl,
    repositoryUrl,
    prototypeUrl
  }
`);

export const projectSlugsQuery = defineQuery(`
  *[_type == "project" && defined(slug.current)][]{"slug": slug.current}
`);

export const postsQuery = defineQuery(`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    categories,
    coverImage
  }
`);

export const postBySlugQuery = defineQuery(`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    categories,
    coverImage,
    body
  }
`);

export const postSlugsQuery = defineQuery(`
  *[_type == "post" && defined(slug.current)][]{"slug": slug.current}
`);


export const testimonialsQuery = defineQuery(`
  *[_type == "testimonial"] | order(_createdAt desc) {
    _id,
    quote,
    name,
    role,
    company
  }
`);
