import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableContent } from "@/components/content/PortableContent";
import { Container } from "@/components/layout/Container";
import { getPost, getPosts } from "@/lib/content";
import { formatDate } from "@/lib/format-date";
import { getImageUrl } from "@/lib/media";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  const imageUrl = getImageUrl(
    post.coverImage,
    post.coverImageUrl || "/images/post-placeholder.svg",
    1600,
  );

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
          src={imageUrl || "/images/post-placeholder.svg"}
          width={1600}
          height={950}
          alt=""
          priority
        />

        <article className="article-body">
          <PortableContent value={post.body} />
        </article>
      </Container>
    </main>
  );
}
