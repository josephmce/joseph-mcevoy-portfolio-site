import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableContent } from "@/components/content/PortableContent";
import { Container } from "@/components/layout/Container";
import { getProject, getProjects } from "@/lib/content";
import { getImageUrl } from "@/lib/media";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) notFound();

  const imageUrl = getImageUrl(
    project.coverImage,
    project.coverImageUrl || "/images/project-placeholder.svg",
    1800,
  );

  const details = [
    ["Role", project.role],
    ["Client", project.client || project.employer],
    ["Duration", project.duration],
    ["Services", project.services?.join(", ")],
    ["Technologies", project.technologies?.join(", ")],
    ["Design tools", project.designTools?.join(", ")],
  ].filter((item): item is [string, string] => Boolean(item[1]));

  return (
    <main>
      <section className="project-hero">
        <Container>
          <div className="tag-list">
            {project.categories.map((category) => (
              <span className="tag" key={category.slug}>
                {category.title}
              </span>
            ))}
          </div>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
        </Container>
      </section>

      <Container>
        <Image
          className="project-cover"
          src={imageUrl || "/images/project-placeholder.svg"}
          width={1800}
          height={1100}
          alt=""
          priority
        />

        <div className="case-study-layout">
          <aside>
            <dl className="project-meta">
              {details.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>

            <div className="project-links">
              {project.liveUrl ? (
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  Visit live project ↗
                </a>
              ) : null}
              {project.prototypeUrl ? (
                <a href={project.prototypeUrl} target="_blank" rel="noreferrer">
                  View prototype ↗
                </a>
              ) : null}
              {project.repositoryUrl ? (
                <a href={project.repositoryUrl} target="_blank" rel="noreferrer">
                  View repository ↗
                </a>
              ) : null}
            </div>
          </aside>

          <article className="case-study-content">
            {project.overview?.length ? (
              <section>
                <p className="eyebrow">Overview</p>
                <PortableContent value={project.overview} />
              </section>
            ) : null}
            {project.challenge?.length ? (
              <section>
                <h2>The challenge</h2>
                <PortableContent value={project.challenge} />
              </section>
            ) : null}
            {project.process?.length ? (
              <section>
                <h2>Process</h2>
                <PortableContent value={project.process} />
              </section>
            ) : null}
            {project.solution?.length ? (
              <section>
                <h2>The solution</h2>
                <PortableContent value={project.solution} />
              </section>
            ) : null}
            {project.outcome?.length ? (
              <section>
                <h2>Outcome</h2>
                <PortableContent value={project.outcome} />
              </section>
            ) : null}
          </article>
        </div>

        {project.gallery?.length ? (
          <div className="gallery">
            {project.gallery.map((item, index) => {
              const galleryImage = getImageUrl(
                item.image,
                item.imageUrl,
                1600,
              );

              if (!galleryImage) return null;

              return (
                <figure key={item._key || galleryImage}>
                  <Image
                    src={galleryImage}
                    width={1600}
                    height={1000}
                    alt={item.alt || ""}
                  />
                  {item.caption ? <figcaption>{item.caption}</figcaption> : null}
                </figure>
              );
            })}
          </div>
        ) : null}

        <div className="back-link">
          <Link href="/work">← Back to all work</Link>
        </div>
      </Container>
    </main>
  );
}
