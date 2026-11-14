import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { pageMetadata } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

export const metadata = pageMetadata("About", "Meet Joseph McEvoy, a full-stack developer and UX/UI designer with 14 years of experience spanning research, interface design, database architecture and deployment.", "/about");

const professionalTags = ["Full-stack development", "UX/UI", "Database design", "Multilingual websites"];
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
              alt="Joseph McEvoy"
              width={900}
              height={700}
            />
          </div>
          <div className="about-copy">
            <span className="mini-label">Professional</span>
            <h2>Design and development, from research to release</h2>
            <p>
              I&apos;m a full-stack web developer and UX/UI designer with 14 years
              of experience building websites and applications, from user research
              and interface design through database architecture and deployment.
            </p>
            <p>
              At CCL Design, I converted the entire website to ASP.NET Core on
              .NET 10 and brought four languages onto shared templates. I developed
              the SQL Server schemas and publishing workflows behind news and
              translations, alongside the vacancy schema I originally built in 2022.
            </p>
            <p>
              I also built WebHub, the administration application editors use to
              manage news, vacancies, translations and URLs. The website reads
              translations directly from the database, so saved changes appear instantly.
            </p>
            <p>
              At Ekco, I led research and UX/UI design across three portal redesigns,
              turning interviews and affinity mapping into wireframes, prototypes
              and a reusable design system. My work combines ASP.NET Core, SQL Server
              and React with a practical understanding of how people use a product.
            </p>
            <p>
              I take responsibility for the whole journey: understanding the problem,
              designing the interface, building the data and application layers, and
              supporting deployment in IIS.
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
              I also enjoy Formula 1 and attended the British Grand Prix in 2024 and 2025.
            </p>
            <div className="tag-list about-tags">
              {personalTags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
            </div>
          </div>
          <div className="about-image-card personal-collage">
            <Image
              src="/images/about/about-personal.jpg"
              alt="Photos from Joseph's life outside work"
              width={900}
              height={700}
            />
          </div>
        </Container>
      </section>

      <section className="about-action">
        <Container>
          <Link className="button button-small" href="/work">View All Projects <ArrowIcon /></Link>
        </Container>
      </section>
    </main>
  );
}
