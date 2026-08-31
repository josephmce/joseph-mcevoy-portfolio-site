import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/format-date";
import { getImageUrl } from "@/lib/media";
import type { Post } from "@/types/content";

export function BlogCard({ post }: { post: Post }) {
  const imageUrl = getImageUrl(
    post.coverImage,
    post.coverImageUrl || "/images/post-placeholder.svg",
    1000,
  );

  return (
    <article className="blog-card">
      <Link href={`/blog/${post.slug}`}>
        <Image
          src={imageUrl || "/images/post-placeholder.svg"}
          width={1000}
          height={640}
          alt=""
        />
      </Link>
      <p className="eyebrow">{formatDate(post.publishedAt)}</p>
      <h2>
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h2>
      <p>{post.excerpt}</p>
    </article>
  );
}
