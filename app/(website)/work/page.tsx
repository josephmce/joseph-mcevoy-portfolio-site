import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ProjectFilters } from "@/components/projects/ProjectFilters";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { getProjects } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("Projects", "Explore Joseph McEvoy's web development and UX/UI projects, from production website migrations to content management tools and enterprise applications.", "/work");

type WorkPageProps = {
  searchParams: Promise<{ category?: string }>;
};

export default async function WorkPage({ searchParams }: WorkPageProps) {
  const { category } = await searchParams;
  const projects = getProjects();
  const availableCategories = [...new Set(projects.flatMap((project) => project.categories.map((item) => item.slug)))];
  const activeCategory = category && availableCategories.includes(category) ? category : undefined;

  const filteredProjects = activeCategory
    ? projects.filter((project) =>
        project.categories.some((item) => item.slug === activeCategory),
      )
    : projects;

  return (
    <main className="projects-page page star-field">
      <Container>
        <header className="framer-heading centered-heading projects-heading">
          <span className="mini-label">Projects</span>
          <h1>My Work</h1>
          <p>
            A selection of design-led work focused on usability, clarity, and
            impact. From concept to code.
          </p>
        </header>

        <ProjectFilters active={activeCategory} availableCategories={availableCategories} />
        <ProjectGrid projects={filteredProjects} />
      </Container>
    </main>
  );
}
