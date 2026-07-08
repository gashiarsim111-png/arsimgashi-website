import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import "./globals.css";
import Schema from "./components/Schema";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arsimgashi.com"),

  title: {
    default: "Arsim Gashi | Violinist",
    template: "%s | Arsim Gashi",
  },

  description:
    "Official website of Arsim Gashi, violinist, soloist and concertmaster. Discover biography, performances, gallery and contact information.",

  keywords: [
    "Arsim Gashi",
    "Arsim Gashi Violinist",
    "Violinist",
    "Classical Violinist",
    "Soloist",
    "Concertmaster",
    "Kosovo Violinist",
    "Official Website",
  ],

  authors: [{ name: "Arsim Gashi" }],
  creator: "Arsim Gashi",
  publisher: "Arsim Gashi",
  applicationName: "Arsim Gashi Official Website",
  category: "Music",

  alternates: {
    canonical: "https://arsimgashi.com",
  },

  openGraph: {
    title: "Arsim Gashi | Violinist",
    description:
      "Official website of Arsim Gashi, violinist, soloist and concertmaster.",
    url: "https://arsimgashi.com",
    siteName: "Arsim Gashi",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Arsim Gashi | Violinist",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Arsim Gashi | Violinist",
    description:
      "Official website of Arsim Gashi, violinist, soloist and concertmaster.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    noimageindex: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cinzel.className}>
        <Schema />
        {children}
      </body>
    </html>
  );
}