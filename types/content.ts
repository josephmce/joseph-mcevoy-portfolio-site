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

export type GalleryItem = {
  src: string;
  alt: string;
  caption?: string;
};

export type CaseStudySection = {
  title: string;
  blocks: (
    | { type: "paragraph" | "heading"; text: string }
    | { type: "link"; text: string; href: string }
    | { type: "list"; items: string[] }
    | { type: "slider"; items: GalleryItem[]; label?: string }
    | { type: "image"; item: GalleryItem & { width: number; height: number } }
  )[];
};

export type Project = {
  id: string;
  order: number;
  title: string;
  slug: string;
  summary: string;
  featured?: boolean;
  projectDate?: string;
  client?: string;
  employer?: string;
  role?: string;
  status?: string;
  standards?: string[];
  scope?: string;
  headlineOutcome?: string;
  relatedProjectSlugs?: string[];
  contentStatus?: { label: string; status: string }[];
  workflow?: {
    title: string;
    steps: { title: string; description: string; image?: GalleryItem; href?: string }[];
  };
  duration?: string;
  categories: ProjectCategory[];
  services?: string[];
  technologies?: string[];
  designTools?: string[];
  coverImage: string;
  gallery?: GalleryItem[];
  imageSlider?: GalleryItem[];
  sections?: CaseStudySection[];
  overview?: string[];
  challenge?: string[];
  process?: string[];
  solution?: string[];
  outcome?: string[];
  liveUrl?: string;
  repositoryUrl?: string;
  prototypeUrl?: string;
};

export type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  categories?: string[];
  coverImage: string;
  body: string[];
};

export type Testimonial = {
  id: string;
  quote: string;
  name?: string;
  role?: string;
  company?: string;
  image?: string;
  link?: string;
};
