import { author } from "@/sanity/schemaTypes/author";
import { blockContent } from "@/sanity/schemaTypes/blockContent";
import { post } from "@/sanity/schemaTypes/post";
import { project } from "@/sanity/schemaTypes/project";
import { projectCategory } from "@/sanity/schemaTypes/projectCategory";
import { seo } from "@/sanity/schemaTypes/seo";
import { service } from "@/sanity/schemaTypes/service";
import { siteSettings } from "@/sanity/schemaTypes/siteSettings";
import { testimonial } from "@/sanity/schemaTypes/testimonial";

export const schemaTypes = [
  project,
  projectCategory,
  post,
  author,
  service,
  testimonial,
  siteSettings,
  blockContent,
  seo,
];
