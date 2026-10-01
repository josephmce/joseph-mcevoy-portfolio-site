import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/format-date";
import type { Post } from "@/types/content";

export function BlogCard({ post }: { post: Post }) {
  return (
    <article className="blog-card">
      <Link href={`/blog/${post.slug}`}>
        <Image
          src={post.coverImage || "/images/post-placeholder.svg"}
          width={1000}
          height={640}
          alt={`${post.title} article cover`}
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
