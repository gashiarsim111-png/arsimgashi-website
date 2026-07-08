export default function Schema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Arsim Gashi",
    "url": "https://arsimgashi.com",
    "image": "https://arsimgashi.com/hero.jpg",
    "jobTitle": "Violinist, Soloist, Concertmaster",
    "birthPlace": {
      "@type": "Place",
      "name": "Prishtinë, Kosovo"
    },
    "email": "mailto:Info@arsimgashi.com",
    "telephone": "+38345963933",
    "sameAs": []
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