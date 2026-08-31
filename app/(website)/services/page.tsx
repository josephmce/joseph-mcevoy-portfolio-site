import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Services",
};

const services = [
  {
    title: "Web development",
    description:
      "Responsive frontend development, component systems, CMS integration, API-driven interfaces, and maintenance of established web applications.",
  },
  {
    title: "UX/UI and web design",
    description:
      "Discovery, user flows, wireframes, prototypes, responsive interface design, design systems, and developer-ready specifications.",
  },
  {
    title: "Graphic design",
    description:
      "Campaign artwork, brochures, technical literature, social assets, presentations, exhibition graphics, and brand applications.",
  },
];

export default function ServicesPage() {
  return (
    <main className="page">
      <Container>
        <header className="page-header">
          <p className="eyebrow">Services</p>
          <h1>Design and development without the handoff gap.</h1>
          <p>
            Support can cover one focused discipline or the route from early
            concept through design and implementation.
          </p>
        </header>

        <div className="services-list">
          {services.map((service, index) => (
            <article key={service.title}>
              <span>0{index + 1}</span>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </main>
  );
}
