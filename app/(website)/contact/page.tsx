import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main className="contact-page page star-field">
      <Container>
        <header className="framer-heading centered-heading contact-heading">
          <span className="mini-label">Contact</span>
          <h1>Let&apos;s get in touch!</h1>
          <p>
            I&apos;d love to hear from you, whether it&apos;s about a project,
            collaboration, or just to connect!
          </p>
        </header>

        <div className="contact-shell">
          <section className="contact-form-panel">
            <div className="contact-panel-heading">
              <span className="mini-label">Start a conversation</span>
              <h2>Get in touch</h2>
              <p>
                Whether it's a project, role or just a quick chat, feel free to send me a message.
              </p>
            </div>
            <ContactForm />
          </section>

          <aside className="contact-socials">
            <div className="social-card linkedin-card">
              <span className="social-wordmark"><strong>in</strong> LinkedIn</span>
              <a
                className="button button-small"
                href="https://www.linkedin.com/in/joseph-mcevoy-236aab195/"
                target="_blank"
                rel="noreferrer"
              >
                Profile ↗
              </a>
            </div>
            <div className="social-card github-card">
              <span className="social-wordmark">GitHub</span>
              <a
                className="button button-small button-outline"
                href="https://github.com/josephmce"
                target="_blank"
                rel="noreferrer"
              >
                View GitHub ↗
              </a>
            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
}
