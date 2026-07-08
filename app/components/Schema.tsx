export default function Schema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: "Arsim Gashi",

    alternateName: "Arsim Gashi Violinist",

    url: "https://arsimgashi.com",

    image: "https://arsimgashi.com/hero.jpg",

    description:
      "Official website of Arsim Gashi, violinist, soloist and concertmaster.",

    jobTitle: "Violinist",

    knowsAbout: [
      "Violin",
      "Classical Music",
      "Solo Performance",
      "Concertmaster",
      "Music"
    ],

    nationality: {
      "@type": "Country",
      name: "Kosovo"
    },

    sameAs: [
      "https://instagram.com/arsimgashiviolinist",
      "https://facebook.com/arsimgashiofficial",
      "https://tiktok.com/@arsimgashiviolinist",
      "https://youtube.com/@arsimgashiviolinist"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}