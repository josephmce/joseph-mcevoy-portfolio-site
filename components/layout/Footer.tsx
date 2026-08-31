import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Brand } from "@/components/ui/Brand";

const github = "https://github.com/josephmce";
const linkedin = "https://www.linkedin.com/in/joseph-mcevoy-236aab195/";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-glow" aria-hidden="true" />
      <Container className="footer-main">
        <div className="footer-intro">
          <Brand />
          <p>You made it to the bottom. I like your commitment.</p>
          <p>Let&apos;s chat</p>
          <Link className="button button-small" href="/contact">
            Get in touch ↗
          </Link>
        </div>

        <div className="footer-column">
          <strong>Pages</strong>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/work">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="footer-column">
          <strong>Socials</strong>
          <a href={github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </Container>

      <div className="footer-bottom">
        <Container className="footer-bottom-inner">
          <span>Visioned and Crafted by <strong>Joseph McEvoy</strong></span>
          <span>© {new Date().getFullYear()} All rights reserved</span>
        </Container>
      </div>
    </footer>
  );
}
