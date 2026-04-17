import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RITAM — Markets don't repeat. They rhyme.",
  description:
    "RITAM perceives Ṛtam — the cosmic pattern underlying all market movement. AI-powered Nifty 50 perception engine. Request early access.",
  openGraph: {
    title: "RITAM — Markets don't repeat. They rhyme.",
    description:
      "RITAM perceives Ṛtam — the cosmic pattern underlying all market movement. AI-powered Nifty 50 perception engine. Request early access.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
