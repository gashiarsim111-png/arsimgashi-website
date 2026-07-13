import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Press from "./components/Press";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  const musicEvent = {
    "@context": "https://schema.org",
    "@type": "MusicEvent",
    "name": "DAM Festival",
    "description":
      "Arsim Gashi performed as a featured violinist at the DAM International Music Festival in Prishtina, Kosovo.",
    "startDate": "2023-05-20",
    "endDate": "2023-05-20",
    "eventStatus": "https://schema.org/EventCompleted",
    "image": "https://www.arsimgashi.com/og-image.jpg",

    "location": {
      "@type": "Place",
      "name": "Prishtina",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Prishtina",
        "addressCountry": "XK"
      }
    },

    "organizer": {
      "@type": "Organization",
      "name": "DAM Festival"
    },

    "performer": {
      "@type": "Person",
      "name": "Arsim Gashi",
      "url": "https://www.arsimgashi.com"
    },

    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/SoldOut",
      "price": "0",
      "priceCurrency": "EUR",
      "url": "https://www.arsimgashi.com"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(musicEvent),
        }}
      />

      <Intro />

      <main>
        <Navbar />
        <Hero />
        <About />
        <Achievements />
        <Press />
        <Gallery />
        <Contact />
        <Footer />
      </main>
    </>
  );
}