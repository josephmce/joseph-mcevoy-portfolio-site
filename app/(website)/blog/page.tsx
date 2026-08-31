import type { Metadata } from "next";
import { BlogCard } from "@/components/blog/BlogCard";
import { Container } from "@/components/layout/Container";
import { getPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles about web development, UX/UI, and graphic design.",
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="page">
      <Container>
        <header className="page-header">
          <p className="eyebrow">Writing</p>
          <h1>Development and design notes</h1>
          <p>
            Practical articles covering web development, product design,
            portfolio building, UX/UI, and visual communication.
          </p>
        </header>

        <div className="blog-grid">
          {posts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      </Container>
    </main>
  );
}
