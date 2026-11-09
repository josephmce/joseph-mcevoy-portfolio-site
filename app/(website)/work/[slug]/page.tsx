import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TextContent } from "@/components/content/TextContent";
import { Container } from "@/components/layout/Container";
import { ImageSlider } from "@/components/projects/ImageSlider";
import { getProject, getProjects } from "@/lib/content";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

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
          src={project.coverImage || "/images/project-placeholder.svg"}
          width={1800}
          height={1100}
          alt={`${project.title} project cover`}
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
            {project.sections?.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                <div className="prose">
                  {section.blocks.map((block, index) => {
                    if (block.type === "slider") return <ImageSlider key={index} items={block.items} label={block.label} />;
                    if (block.type === "heading") return <h3 key={index}>{block.text}</h3>;
                    if (block.type === "link") return (
                      <p key={index}>
                        <a href={block.href} target="_blank" rel="noreferrer">{block.text}</a>
                      </p>
                    );
                    if (block.type === "list") return (
                      <ul key={index}>
                        {block.items.map((item) => <li key={item}><strong>{item}</strong></li>)}
                      </ul>
                    );
                    return <p key={index}>{block.text}</p>;
                  })}
                </div>
              </section>
            ))}
            {project.overview?.length ? (
              <section>
                <p className="eyebrow">Overview</p>
                <TextContent paragraphs={project.overview} />
              </section>
            ) : null}
            {project.challenge?.length ? (
              <section>
                <h2>The challenge</h2>
                <TextContent paragraphs={project.challenge} />
              </section>
            ) : null}
            {project.process?.length ? (
              <section>
                <h2>Process</h2>
                <TextContent paragraphs={project.process} />
              </section>
            ) : null}
            {project.solution?.length ? (
              <section>
                <h2>The solution</h2>
                <TextContent paragraphs={project.solution} />
              </section>
            ) : null}
            {project.outcome?.length ? (
              <section>
                <h2>Outcome</h2>
                <TextContent paragraphs={project.outcome} />
              </section>
            ) : null}
          </article>
        </div>

        {project.imageSlider?.length ? (
          <section className="project-image-slider" aria-label={`${project.title} screenshots`}>
            <h2>Project screenshots</h2>
            <ImageSlider items={project.imageSlider} label={`${project.title} screenshots`} />
          </section>
        ) : null}

        {project.gallery?.length ? (
          <div className="gallery">
            {project.gallery.map((item) => (
              <figure key={item.src}>
                <Image
                  src={item.src}
                  width={1600}
                  height={1000}
                  alt={item.alt}
                />
                {item.caption ? <figcaption>{item.caption}</figcaption> : null}
              </figure>
            ))}
          </div>
        ) : null}

        <div className="back-link">
          <Link href="/work">← Back to all work</Link>
        </div>
      </Container>
    </main>
  );
}
