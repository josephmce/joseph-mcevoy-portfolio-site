import Image from "next/image";
import Link from "next/link";
import { getImageUrl } from "@/lib/media";
import type { Project } from "@/types/content";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const imageUrl = getImageUrl(
    project.coverImage,
    project.coverImageUrl || "/images/project-placeholder.svg",
    1200,
  );

  return (
    <article className="project-card">
      <Link className="project-card-image" href={`/work/${project.slug}`}>
        <Image
          src={imageUrl || "/images/project-placeholder.svg"}
          alt=""
          width={1200}
          height={800}
        />
      </Link>
      <div className="project-card-copy">
        <div className="tag-list" aria-label="Project categories">
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
