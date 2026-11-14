import type { Metadata } from "next";

export const defaultDescription =
  "Joseph McEvoy, full-stack web developer and UX/UI designer building multilingual websites, content management tools and B2B applications.";

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  image?: { url: string; alt: string },
): Metadata {
  const shareTitle = path === "/" ? "Joseph McEvoy - Developer & Designer" : `${title} | Joseph McEvoy`;
  const shareImage = image || {
    url: "/images/social/portfolio-card.png",
    alt: "Joseph McEvoy - Full-stack web developer and UX/UI designer",
    width: 1200,
    height: 630,
  };

  return {
    title: path === "/" ? { absolute: title } : title,
    description,
    openGraph: {
      title: shareTitle,
      description,
      url: path,
      siteName: "Joseph McEvoy",
      type: "website",
      locale: "en_GB",
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: [{ url: shareImage.url, alt: shareImage.alt }],
    },
  };
}
