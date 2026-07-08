import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Arsim Gashi | Violinist • Soloist • Concertmaster",
  description:
    "Official website of Arsim Gashi, Kosovar violinist, soloist and concertmaster.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cinzel.className}>
        {children}
      </body>
    </html>
  );
}