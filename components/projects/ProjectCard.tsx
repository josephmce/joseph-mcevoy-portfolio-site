import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/content";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <Link className="project-card-image" href={`/work/${project.slug}`}>
        <Image
          src={project.coverImage || "/images/project-placeholder.svg"}
          alt={`${project.title} project preview`}
          width={1200}
          height={800}
        />
      </Link>
      <div className="project-card-copy">
        <div className="tag-list" aria-label="Project categories">
          {project.status ? <span className="tag">{project.status}</span> : null}
          {project.categories.map((category) => (
            <span className="tag" key={category.slug}>
              {category.title}
            </span>
          ))}
        </div>
        <h3>
          <Link href={`/work/${project.slug}`}>{project.title}</Link>
        </h3>
        <p>{project.summary}</p>
      </div>
    </article>
  );
}
