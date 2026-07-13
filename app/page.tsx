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
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "MusicEvent",
    name: "DAM Festival 2023",
    description:
      "Violin recital by Arsim Gashi at the DAM International Music Festival in Prishtina, Kosovo.",
    startDate: "2023-09-05T19:00:00+02:00",
    endDate: "2023-09-05T21:00:00+02:00",
    eventStatus: "https://schema.org/EventCompleted",
    eventAttendanceMode:
      "https://schema.org/OfflineEventAttendanceMode",

    location: {
      "@type": "Place",
      name: "DAM Festival",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Prishtina",
        addressCountry: "XK"
      }
    },

    organizer: {
      "@type": "Organization",
      name: "DAM Festival"
    },

    performer: {
      "@type": "Person",
      name: "Arsim Gashi",
      url: "https://www.arsimgashi.com"
    },

    image: [
      "https://www.arsimgashi.com/og-image.jpg"
    ],

    offers: {
      "@type": "Offer",
      url: "https://www.arsimgashi.com",
      availability: "https://schema.org/InStock",
      price: "0",
      priceCurrency: "EUR"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventSchema),
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