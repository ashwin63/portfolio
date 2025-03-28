import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ashwin Senthil Arumugam | Portfolio",
  description: "Professional portfolio of Ashwin Senthil Arumugam - Software Developer, AI Researcher, and Full Stack Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
