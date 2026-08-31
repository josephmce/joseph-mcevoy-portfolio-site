"use client";

import type { CSSProperties } from "react";

export function AnimatedHeroTitle({ text }: { text: string }) {
  return (
    <h1 className="animated-hero-title" aria-label={text}>
      {text.split(" ").map((word, index) => (
        <span
          className="hero-word"
          aria-hidden="true"
          key={`${word}-${index}`}
          style={{ "--word-delay": `${100 + index * 42}ms` } as CSSProperties}
        >
          {word}&nbsp;
        </span>
      ))}
    </h1>
  );
}
