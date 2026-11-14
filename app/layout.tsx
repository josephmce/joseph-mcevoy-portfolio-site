import type { Metadata } from "next";
import "@/app/globals.css";
import { siteUrl } from "@/lib/site";
import { Figtree } from "next/font/google";
import { defaultDescription, pageMetadata } from "@/lib/metadata";

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  ...pageMetadata("Joseph McEvoy - Developer & Designer", defaultDescription, "/"),
  metadataBase: new URL(siteUrl),
  title: {
    default: "Joseph McEvoy - Developer & Designer",
    template: "%s | Joseph McEvoy",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={figtree.variable}>
      <body>{children}</body>
    </html>
  );
}
