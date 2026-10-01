"use client";

import Image from "next/image";
import {
  type KeyboardEvent,
  type PointerEvent,
  useRef,
  useState,
} from "react";

type ShowcaseItem = {
  src: string;
  alt: string;
  type?: "image" | "video";
};

const graphicItems: ShowcaseItem[] = [
  {
    src: "/images/visual-showcase/graphic-design/graphic-01.png",
    alt: "Graphic design portfolio artwork 1",
  },
  {
    src: "/images/visual-showcase/graphic-design/graphic-02.png",
    alt: "Graphic design portfolio artwork 2",
  },
  {
    src: "/images/visual-showcase/graphic-design/graphic-03.png",
    alt: "Graphic design portfolio artwork 3",
  },
  {
    src: "/images/visual-showcase/graphic-design/graphic-04.png",
    alt: "Graphic design portfolio artwork 4",
  },
  {
    src: "/images/visual-showcase/graphic-design/graphic-05.png",
    alt: "Graphic design portfolio artwork 5",
  },
  {
    src: "/images/visual-showcase/graphic-design/graphic-06.png",
    alt: "Graphic design portfolio artwork 6",
  },
  {
    src: "/images/visual-showcase/graphic-design/graphic-07.png",
    alt: "Graphic design portfolio artwork 7",
  },
  {
    src: "/images/visual-showcase/graphic-design/graphic-08.png",
    alt: "Graphic design portfolio artwork 8",
  },
  {
    src: "/images/visual-showcase/graphic-design/graphic-09.png",
    alt: "Graphic design portfolio artwork 9",
  },
  {
    src: "/images/visual-showcase/graphic-design/graphic-10.png",
    alt: "Graphic design portfolio artwork 10",
  },
];

const threeDItems: ShowcaseItem[] = [
  {
    src: "/videos/3d-showcase.mp4",
    alt: "3D graphics animation",
    type: "video",
  },
  {
    src: "/images/visual-showcase/3d-graphics/3d-01.png",
    alt: "3D graphics portfolio artwork 1",
    type: "image",
  },
  {
    src: "/images/visual-showcase/3d-graphics/3d-02.png",
    alt: "3D graphics portfolio artwork 2",
    type: "image",
  },
  {
    src: "/images/visual-showcase/3d-graphics/3d-03.png",
    alt: "3D graphics portfolio artwork 3",
    type: "image",
  },
];

function Showcase({
  title,
  intro,
  items,
}: {
  title: string;
  intro: string;
  items: ShowcaseItem[];
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef(0);
  const dragStartScrollLeft = useRef(0);
  const [isDragging, setIsDragging] = useState(false);

  function scrollBySlide(direction: -1 | 1) {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const firstSlide = scroller.querySelector<HTMLElement>(".showcase-frame");
    const slideWidth = firstSlide?.getBoundingClientRect().width ?? scroller.clientWidth;
    const styles = window.getComputedStyle(scroller);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || "0") || 0;

    scroller.scrollBy({
      left: direction * (slideWidth + gap),
      behavior: "smooth",
    });
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    setIsDragging(true);
    dragStartX.current = event.clientX;
    dragStartScrollLeft.current = scroller.scrollLeft;
    scroller.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!isDragging) return;

    const scroller = scrollerRef.current;
    if (!scroller) return;

    const distance = event.clientX - dragStartX.current;
    scroller.scrollLeft = dragStartScrollLeft.current - distance;
  }

  function endDrag(event: PointerEvent<HTMLDivElement>) {
    const scroller = scrollerRef.current;

    setIsDragging(false);

    if (scroller?.hasPointerCapture(event.pointerId)) {
      scroller.releasePointerCapture(event.pointerId);
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollBySlide(-1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollBySlide(1);
    }
  }

  return (
    <section className="visual-showcase">
      <header className="visual-showcase-heading">
        <h2>{title}</h2>
        <p>{intro}</p>
      </header>

      <div className="showcase-carousel-shell">
        <div
          ref={scrollerRef}
          className={`showcase-scroll${isDragging ? " is-dragging" : ""}`}
          tabIndex={0}
          role="region"
          aria-label={`${title} gallery`}
          onKeyDown={handleKeyDown}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onPointerLeave={(event) => {
            if (isDragging) endDrag(event);
          }}
        >
          {items.map((item, index) => (
            <figure className="showcase-frame" key={item.src}>
              {item.type === "video" ? (
                <video
                  className="showcase-media"
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={item.alt}
                />
              ) : (
                <Image
                  className="showcase-media"
                  src={item.src}
                  alt={item.alt}
                  width={1200}
                  height={760}
                  sizes="(max-width: 760px) 88vw, 72vw"
                  draggable={false}
                  priority={index === 0}
                />
              )}
            </figure>
          ))}
        </div>
      </div>

      <div className="showcase-controls">
        <button
          className="showcase-arrow"
          type="button"
          aria-label={`Previous ${title} image`}
          onClick={() => scrollBySlide(-1)}
        >
          ←
        </button>

        <p className="drag-hint">DRAG TO EXPLORE</p>

        <button
          className="showcase-arrow"
          type="button"
          aria-label={`Next ${title} image`}
          onClick={() => scrollBySlide(1)}
        >
          →
        </button>
      </div>
    </section>
  );
}

export function VisualShowcase() {
  return (
    <div className="showcase-stack">
      <Showcase
        title="Graphic Design"
        intro="A selection of visual solutions crafted to communicate, captivate, and inspire."
        items={graphicItems}
      />

      <Showcase
        title="3D Graphics"
        intro="Shaping space, light & form into compelling digital visuals."
        items={threeDItems}
      />
    </div>
  );
}
