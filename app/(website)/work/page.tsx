import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ProjectFilters } from "@/components/projects/ProjectFilters";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { getProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Web development, web design, UX/UI, graphic design, and branding projects.",
};

type WorkPageProps = {
  searchParams: Promise<{ category?: string }>;
};

export default async function WorkPage({ searchParams }: WorkPageProps) {
  const { category } = await searchParams;
  const projects = getProjects();

  const filteredProjects = category
    ? projects.filter((project) =>
        project.categories.some((item) => item.slug === category),
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

        <ProjectFilters active={category} />
        <ProjectGrid projects={filteredProjects} />
      </Container>
    </main>
  );
}
