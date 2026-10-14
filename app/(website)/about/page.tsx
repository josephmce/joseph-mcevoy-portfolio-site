import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "About",
};

const professionalTags = ["Web Design", "Web Development", "UX/UI", "3D", "VFX"];
const personalTags = ["Music", "Gym", "Walking"];

export default function AboutPage() {
  return (
    <main className="about-page star-field">
    <section className="about-hero">
      <Container className="about-hero-grid">
        <div className="about-hero-copy">
          <h1>About Me</h1>
          <p>
            Learn more about my journey, my skills, and how I combine design
            and development to build great digital experiences.
          </p>
        </div>

        <div className="about-hero-art">
          <Image
            src="/images/about/profile-picture.jpg"
            alt="Joseph McEvoy"
            fill
            priority
            sizes="(max-width: 800px) 100vw, min(57.5vw, 690px)"
          />
        </div>
      </Container>
    </section>

      <section className="about-section">
        <Container className="about-grid professional-grid">
          <div className="about-image-card">
            <Image
              src="/images/about/joseph-2.jpg"
              alt="Placeholder for professional portrait"
              width={900}
              height={700}
            />
          </div>
          <div className="about-copy">
            <span className="mini-label">Professional</span>
            <h2>About Me</h2>
            <p>
              I&apos;m a multidisciplinary digital professional working across web
              design, frontend development and user experience. I specialise in
              creating responsive, accessible websites and intuitive interfaces,
              combining strong visual design skills with hands-on coding ability.
            </p>
            <p>
              My background includes UX initiatives, designing and developing websites and web 
              applications, including CMS-driven websites, while collaborating across 
              marketing, development and product teams. I work with modern
              frontend technologies including React.js and Next.js, alongside 
              .NET and .NET Core applications. I also have experience with 
              Node.js and Express, Python and Django, with Figma, Adobe
              Creative Suite and 3D tools supporting the wider design workflow.
            </p>
            <p>On the backend and infrastructure side, I have experience working 
              with SQL Server, MySQL, PostgreSQL and MongoDB, including relational 
              database design, tables, stored procedures, views and queries. I also 
              work with IIS, Docker and containerised application environments, 
              supporting the development, deployment and hosting of data-driven 
              websites and web applications.</p>
            <p>
              Whether designing in Figma, coding in VS Code or optimising SEO, I
              favour a problem-solving mindset and a user-first approach to every
              project.
            </p>
            <div className="tag-list about-tags">
              {professionalTags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
            </div>
          </div>
        </Container>
      </section>

      <section className="about-section personal-section">
        <Container className="about-grid personal-grid">
          <div className="about-copy">
            <span className="mini-label">Personal Life</span>
            <h2>Outside of Work</h2>
            <p>Outside of work, I enjoy lifting weights and getting out for long walks with my dog. I like keeping active in general and getting outdoors whenever I can.</p>
            <p>
              I also enjoy travelling, going to see live music and picking up new creative skills and interests outside of web and product work. I’m always interested in learning something new, whether it’s creative, technical or just something completely different.
            </p>
            <p>
              Formula 1 is a big interest of mine as well and have recently attended the British GP in 2024 and 2025.
            </p>
            <div className="tag-list about-tags">
              {personalTags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
            </div>
          </div>
          <div className="about-image-card personal-collage">
            <Image
              src="/images/about/about-personal.jpg"
              alt="Placeholder for personal photo collage"
              width={900}
              height={700}
            />
          </div>
        </Container>
      </section>

      <section className="about-action">
        <Container>
          <Link className="button button-small" href="/work">View All Projects ↗</Link>
        </Container>
      </section>
    </main>
  );
}
