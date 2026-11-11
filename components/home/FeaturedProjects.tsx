import { ArrowIcon } from "@/components/ui/ArrowIcon";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/content";

export function FeaturedProjects({ projects }: { projects: Project[] }) {
  return (
    <div className="featured-project-list">
      {projects.slice(0, 3).map((project, index) => (
        <article className="featured-project" key={project.id}>
          <div className="featured-project-copy">
            <p className="mini-label">{project.role || "Web Design & Development"}</p>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            {project.headlineOutcome ? <p className="featured-project-outcome"><strong>Outcome</strong> {project.headlineOutcome}</p> : null}
            <Link className="button button-small" href={`/work/${project.slug}`}>
              View Project <ArrowIcon />
            </Link>
            <div className="tag-list" aria-label="Project categories">
              {project.categories.map((category) => (
                <span className="tag" key={category.slug}>
                  {category.title}
                </span>
              ))}
            </div>
          </div>
          <Link
            className="featured-project-image"
            href={`/work/${project.slug}`}
            aria-label={`View ${project.title}`}
          >
            <Image
              src={project.coverImage || "/images/project-placeholder.svg"}
              alt={`${project.title} project preview`}
              width={1200}
              height={800}
              priority={index === 0}
            />
          </Link>
        </article>
      ))}
    </div>
  );
}
