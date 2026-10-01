import Image from "next/image";
import type { Testimonial } from "@/types/content";

type TestimonialsProps = {
  testimonials: Testimonial[];
};

export function Testimonials({ testimonials }: TestimonialsProps) {
  if (!testimonials.length) return null;

  return (
    <div className="testimonial-grid">
      {testimonials.map((testimonial) => {
        const card = (
          <figure className="testimonial-card">
            <figcaption className="testimonial-person">
              {testimonial.image ? (
                <Image
                  className="testimonial-avatar"
                  src={testimonial.image}
                  alt=""
                  width={52}
                  height={52}
                />
              ) : null}

              <div className="testimonial-person-copy">
                {testimonial.name ? (
                  <strong>{testimonial.name}</strong>
                ) : null}

                {testimonial.role || testimonial.company ? (
                  <span>
                    {testimonial.role}
                    {testimonial.role && testimonial.company ? " @ " : ""}
                    {testimonial.company}
                  </span>
                ) : null}
              </div>
            </figcaption>

            <blockquote>“{testimonial.quote}”</blockquote>

            <span className="testimonial-link">
              View on LinkedIn ↗
            </span>
          </figure>
        );

        return testimonial.link ? (
          <a
            key={testimonial.id}
            className="testimonial-card-link"
            href={testimonial.link}
            target="_blank"
            rel="noreferrer"
            aria-label={`View testimonial from ${testimonial.name} on LinkedIn`}
          >
            {card}
          </a>
        ) : (
          <div key={testimonial.id} className="testimonial-card-link">
            {card}
          </div>
        );
      })}
    </div>
  );
}