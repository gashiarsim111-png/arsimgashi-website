import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arsim Gashi | Violinist • Soloist • Concertmaster",
  description:
    "Official website of Arsim Gashi, Kosovar violinist, soloist and concertmaster. Biography, concerts, performances and artistic career.",

  keywords: [
    "Arsim Gashi",
    "Violinist",
    "Kosovo Violinist",
    "Concertmaster",
    "Classical Music",
    "Violin Soloist",
  ],

  authors: [
    {
      name: "Arsim Gashi",
    },
  ],

  creator: "Arsim Gashi",

  openGraph: {
    title: "Arsim Gashi | Violinist • Soloist • Concertmaster",
    description:
      "Official website of Arsim Gashi, violinist, soloist and concertmaster from Kosovo.",
    url: "https://arsimgashi.com",
    siteName: "Arsim Gashi",
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
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