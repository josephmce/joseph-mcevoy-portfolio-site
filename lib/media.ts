import { urlFor } from "@/sanity/lib/image";

export function getImageUrl(
  image: unknown,
  fallback?: string,
  width = 1600,
): string | undefined {
  if (image) {
    try {
      return urlFor(image as never).width(width).auto("format").url();
    } catch {
      return fallback;
    }
  }

  return fallback;
}
