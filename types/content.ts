export type CategorySlug =
  | "web-development"
  | "web-design"
  | "ux-ui"
  | "graphic-design"
  | "branding";

export type ProjectCategory = {
  title: string;
  slug: CategorySlug | string;
};

export type Project = {
  _id: string;
  title: string;
  slug: string;
  summary: string;
  featured?: boolean;
  projectDate?: string;
  client?: string;
  employer?: string;
  role?: string;
  duration?: string;
  categories: ProjectCategory[];
  services?: string[];
  technologies?: string[];
  designTools?: string[];
  coverImage?: unknown;
  coverImageUrl?: string;
  gallery?: Array<{
    _key?: string;
    image?: unknown;
    imageUrl?: string;
    alt?: string;
    caption?: string;
  }>;
  overview?: unknown[];
  challenge?: unknown[];
  process?: unknown[];
  solution?: unknown[];
  outcome?: unknown[];
  liveUrl?: string;
  repositoryUrl?: string;
  prototypeUrl?: string;
};

export type Post = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  categories?: string[];
  coverImage?: unknown;
  coverImageUrl?: string;
  body?: unknown[];
};


export type Testimonial = {
  _id: string;
  quote: string;
  name?: string;
  role?: string;
  company?: string;
};
