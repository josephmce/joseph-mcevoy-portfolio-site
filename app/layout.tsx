import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.example.com"),
  title: {
    default: "Joseph McEvoy — Developer & Designer",
    template: "%s | Joseph McEvoy",
  },
  description:
    "Portfolio of web development, UX/UI, web design, and graphic design work.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
