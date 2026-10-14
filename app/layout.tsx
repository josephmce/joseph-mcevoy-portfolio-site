import type { Metadata } from "next";
import "@/app/globals.css";
import { siteUrl } from "@/lib/site";
import { Figtree } from "next/font/google";

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Joseph McEvoy - Developer & Designer",
    template: "%s | Joseph McEvoy",
  },
  description:
    "Portfolio of web development, UX/UI, web design, and graphic design work.",
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
