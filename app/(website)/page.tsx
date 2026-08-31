import Link from "next/link";
import { AnimatedHeroTitle } from "@/components/effects/AnimatedHeroTitle";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { VisualShowcase } from "@/components/home/VisualShowcase";
import { Container } from "@/components/layout/Container";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { getFeaturedProjects, getTestimonials } from "@/lib/content";

export default async function HomePage() {
  const [projects, testimonials] = await Promise.all([
    getFeaturedProjects(),
    getTestimonials(),
  ]);

  return (
    <main>
      <section className="home-hero star-field">
        <div className="hero-glow" aria-hidden="true" />
        <Container className="home-hero-inner">
          <AnimatedHeroTitle text="A creative Web Designer & Developer with 14 years of experience designing smart, modern websites & coding them into reality." />
          <Link className="button button-small" href="/contact">
            Get in touch ↗
          </Link>
        </Container>
      </section>

      <section className="client-strip star-field">
        <Container>
          <p>Companies I&apos;ve worked with</p>
          <div className="client-logos" aria-label="Companies worked with">
            <span>KCO</span>
            <span>CCL Design</span>
            <span>Contact Advantage</span>
            <span>CCL</span>
          </div>
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
