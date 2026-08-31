import Image from "next/image";
import Link from "next/link";
import { getImageUrl } from "@/lib/media";
import type { Project } from "@/types/content";

export function FeaturedProjects({ projects }: { projects: Project[] }) {
  return (
    <div className="featured-project-list">
      {projects.slice(0, 3).map((project, index) => {
        const imageUrl = getImageUrl(
          project.coverImage,
          project.coverImageUrl || "/images/project-placeholder.svg",
          1200,
        );

        return (
          <article className="featured-project" key={project._id}>
            <div className="featured-project-copy">
              <p className="mini-label">{project.role || "Web Design & Development"}</p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <Link className="button button-small" href={`/work/${project.slug}`}>
                View Project ↗
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
                src={imageUrl || "/images/project-placeholder.svg"}
                alt=""
                width={1200}
                height={800}
                priority={index === 0}
              />
            </Link>
          </article>
        );
      })}
    </div>
  );
}
