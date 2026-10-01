import { ProjectCard } from "@/components/projects/ProjectCard";
import type { Project } from "@/types/content";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  if (!projects.length) {
    return <p>No projects have been added in this category yet.</p>;
  }

  return (
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
