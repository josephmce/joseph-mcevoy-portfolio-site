import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { TextContent } from "@/components/content/TextContent";
import { Container } from "@/components/layout/Container";
import { getPost, getPosts } from "@/lib/content";
import { formatDate } from "@/lib/format-date";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  return (
    <main className="article-page">
      <Container className="article-container">
        <header className="article-header">
          <p className="eyebrow">{formatDate(post.publishedAt)}</p>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
        </header>

        <Image
          className="article-cover"
          src={post.coverImage || "/images/post-placeholder.svg"}
          width={1600}
          height={950}
          alt={`${post.title} article cover`}
          priority
        />

        <article className="article-body">
          <TextContent paragraphs={post.body} />
        </article>
      </Container>
    </main>
  );
}
