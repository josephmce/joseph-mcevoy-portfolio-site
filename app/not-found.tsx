import Link from "next/link";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <main className="page">
      <Container>
        <div className="page-header narrow">
          <p className="eyebrow">404</p>
          <h1>That page could not be found.</h1>
          <Link className="button" href="/">
            Return home
          </Link>
        </div>
      </Container>
    </main>
  );
}
