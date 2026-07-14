import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import "./globals.css";
import Schema from "./components/Schema";


const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});


export const metadata: Metadata = {

  metadataBase: new URL("https://www.arsimgashi.com"),


  title: {
    default: "Arsim Gashi | Violinist",
    template: "%s | Arsim Gashi",
  },


  description:
    "Official website of Arsim Gashi, Kosovan violinist, soloist and concertmaster. Discover biography, performances, gallery and contact information.",


  keywords: [
    "Arsim Gashi",
    "Arsim Gashi Violinist",
    "Kosovo Violinist",
    "Classical Violinist",
    "Violin Soloist",
    "Concertmaster",
    "Classical Music",
  ],


  authors: [
    {
      name: "Arsim Gashi",
    },
  ],


  creator: "Arsim Gashi",

  publisher: "Arsim Gashi",


  alternates: {
    canonical: "https://www.arsimgashi.com",
  },


  openGraph: {

    type: "website",

    url: "https://www.arsimgashi.com",

    title: "Arsim Gashi | Violinist",

    description:
      "Official website of Arsim Gashi, violinist, soloist and concertmaster.",

    siteName: "Arsim Gashi",

    locale: "en_US",


    images: [
      {
        url: "https://www.arsimgashi.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Arsim Gashi Violinist",
      },
    ],

  },


  twitter: {

    card: "summary_large_image",

    title: "Arsim Gashi | Violinist",

    description:
      "Official website of Arsim Gashi, violinist, soloist and concertmaster.",


    images: [
      "https://www.arsimgashi.com/og-image.jpg",
    ],

  },


  robots: {

    index: true,

    follow: true,


    googleBot: {

      index: true,

      follow: true,

      "max-image-preview": "large",

      "max-snippet": -1,

      "max-video-preview": -1,

    },

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