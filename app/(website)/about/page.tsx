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
              My background includes UX initiatives, developing CMS-driven
              websites and collaborating across marketing, development and product
              teams. I use modern frontend tools alongside established .NET
              systems, with Figma, Adobe Creative Suite and 3D tools forming part
              of the wider design workflow.
            </p>
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
            <p>I enjoy lifting weights and going out for long walks with my dog.</p>
            <p>
              I also enjoy travelling, live music and learning new creative
              skills outside of web and product work.
            </p>
            <p>
              Formula 1, music and getting outdoors are usually somewhere in the
              mix when I&apos;m away from a screen.
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
