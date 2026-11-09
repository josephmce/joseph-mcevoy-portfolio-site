"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { GalleryItem } from "@/types/content";

type ImageSliderProps = {
  items: GalleryItem[];
  label?: string;
};

export function ImageSlider({ items, label = "Project screenshots" }: ImageSliderProps) {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  if (!items.length) return null;

  function goTo(index: number) {
    const element = track.current;
    if (!element) return;
    element.scrollTo({
      left: Math.max(0, Math.min(index, items.length - 1)) * element.clientWidth,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  }

  return (
    <div className="image-slider" role="region" aria-roledescription="carousel" aria-label={label}>
      <div
        className="image-slider-track"
        ref={track}
        tabIndex={0}
        aria-label="Images. Use left and right arrow keys to browse."
        onScroll={(event) => {
          const element = event.currentTarget;
          setActive(Math.round(element.scrollLeft / element.clientWidth));
        }}
        onKeyDown={(event) => {
          if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
          event.preventDefault();
          goTo(event.key === "Home" ? 0 : event.key === "End" ? items.length - 1 : active + (event.key === "ArrowRight" ? 1 : -1));
        }}
      >
        {items.map((item, index) => (
          <figure className="image-slider-slide" key={item.src} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${items.length}`}>
            <div className="image-slider-image">
              <Image src={item.src} alt={item.alt} fill unoptimized={item.src.toLowerCase().endsWith(".gif")} sizes="(max-width: 1152px) 100vw, 1120px" />
            </div>
            {item.caption ? <figcaption>{item.caption}</figcaption> : null}
          </figure>
        ))}
      </div>
      {items.length > 1 ? (
        <div className="image-slider-controls">
          <button type="button" onClick={() => goTo(active - 1)} disabled={active === 0} aria-label="Previous image">←</button>
          <div className="image-slider-dots" aria-label="Choose an image">
            {items.map((item, index) => (
              <button type="button" key={item.src} aria-label={`Show image ${index + 1}: ${item.alt}`} aria-current={active === index ? "true" : undefined} onClick={() => goTo(index)}><span /></button>
            ))}
          </div>
          <button type="button" onClick={() => goTo(active + 1)} disabled={active === items.length - 1} aria-label="Next image">→</button>
          <span className="image-slider-count" aria-live="polite" aria-atomic="true">{active + 1} / {items.length}</span>
        </div>
      ) : null}
    </div>
  );
}
