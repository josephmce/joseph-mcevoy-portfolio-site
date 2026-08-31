import type { Testimonial } from "@/types/content";

type TestimonialsProps = {
  testimonials: Testimonial[];
};

export function Testimonials({ testimonials }: TestimonialsProps) {
  if (!testimonials.length) return null;

  return (
    <div className="testimonial-grid">
      {testimonials.map((testimonial) => (
        <figure className="testimonial-card" key={testimonial._id}>
          <blockquote>“{testimonial.quote}”</blockquote>
          <figcaption>
            {testimonial.name ? <strong>{testimonial.name}</strong> : null}
            {testimonial.role || testimonial.company ? (
              <span>
                {[testimonial.role, testimonial.company]
                  .filter(Boolean)
                  .join(" · ")}
              </span>
            ) : null}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
