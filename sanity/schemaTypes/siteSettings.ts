import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({ name: "siteTitle", title: "Site title", type: "string" }),
    defineField({ name: "intro", title: "Introduction", type: "text", rows: 4 }),
    defineField({ name: "email", title: "Email", type: "email" }),
    defineField({ name: "linkedInUrl", title: "LinkedIn URL", type: "url" }),
    defineField({ name: "githubUrl", title: "GitHub URL", type: "url" }),
    defineField({ name: "instagramUrl", title: "Instagram URL", type: "url" }),
    defineField({ name: "defaultSeo", title: "Default SEO", type: "seo" }),
  ],
});
