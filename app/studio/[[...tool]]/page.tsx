"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";
import { isSanityConfigured } from "@/sanity/env";

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <main style={{ padding: "4rem", fontFamily: "sans-serif" }}>
        <h1>Sanity is not configured</h1>
        <p>
          Copy <code>.env.example</code> to <code>.env.local</code> and add your
          Sanity project ID.
        </p>
      </main>
    );
  }

  return <NextStudio config={config} />;
}
