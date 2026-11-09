import Link from "next/link";
import { AnimatedHeroTitle } from "@/components/effects/AnimatedHeroTitle";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { VisualShowcase } from "@/components/home/VisualShowcase";
import { Container } from "@/components/layout/Container";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { getFeaturedProjects, getTestimonials } from "@/lib/content";
import { ClientLogoMarquee } from "@/components/home/ClientLogoMarquee";

export default function HomePage() {
  const projects = getFeaturedProjects();
  const testimonials = getTestimonials();

  return (
    <main>
      <section className="home-hero star-field">
        <div className="hero-glow" aria-hidden="true">
          <div className="hero-glow-big"></div>
          <div className="hero-glow-small"></div>
        </div>
        <Container className="home-hero-inner">
          <AnimatedHeroTitle text="A creative Full Stack Web Developer & UX/UI Designer with 14 years of experience designing smart, modern websites & apps and coding them into reality." />
          <Link className="button button-small" href="/contact">
            Get in touch ↗
          </Link>
        </Container>
      </section>

      <section className="client-strip star-field">
        <Container>
          <p className="client-strip-label">
            Companies I&apos;ve worked with
          </p>

          <ClientLogoMarquee />
        </Container>
      </section>

      <section className="section selected-projects star-field">
        <Container>
          <header className="framer-heading centered-heading">
            <span className="mini-label">Projects</span>
            <h2>Selected Web Projects</h2>
            <p>
              A curated collection of work that highlights my approach to solving
              real-world problems through thoughtful design and clean execution.
            </p>
          </header>

          <FeaturedProjects projects={projects} />

          <div className="centered-action">
            <Link className="button button-small" href="/work">
              View All Projects ↗
            </Link>
          </div>
        </Container>
      </section>

      {testimonials.length ? (
        <section className="section testimonial-section star-field">
          <Container>
            <header className="framer-heading centered-heading">
              <span className="mini-label">Testimonials</span>
              <h2>Some Kind Words</h2>
              <p>Endorsements from those who know my work best.</p>
            </header>
            <Testimonials testimonials={testimonials} />
          </Container>
        </section>
      ) : null}

      <section className="section visual-section star-field">
        <Container>
          <VisualShowcase />
        </Container>
      </section>

      <section className="section home-contact star-field">
        <Container>
          <div className="contact-cta">
            <div className="contact-cta-glow" aria-hidden="true" />
            <h2>Let&apos;s get in touch!</h2>
            <div className="contact-cta-actions">
              <a
                className="button button-small"
                href="https://www.linkedin.com/in/joseph-mcevoy-236aab195/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
              <Link className="text-link" href="/contact">
                Send a message →
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
