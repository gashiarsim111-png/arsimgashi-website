import React from "react";

export default function Schema() {
  const schema = {
    "@context": "https://schema.org",

    "@type": "Person",

    name: "Arsim Gashi",

    url: "https://arsimgashi.com",

    image: {
      "@type": "ImageObject",
      url: "https://arsimgashi.com/og-image.jpg",
    },

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://arsimgashi.com",
    },

    jobTitle: [
      "Violinist",
      "Soloist",
      "Concertmaster",
    ],

    description:
      "Arsim Gashi is a professional violinist, soloist and concertmaster. Official website featuring biography, performances, gallery and artistic activities.",

    knowsAbout: [
      "Violin Performance",
      "Classical Music",
      "Chamber Music",
      "Orchestral Performance",
      "Solo Performance",
    ],

    sameAs: [
      "https://www.instagram.com/arsimgashiviolinist/",
      "https://www.facebook.com/arsimgashiofficial",
      "https://www.youtube.com/@arsimgashiviolinist",
      "https://www.tiktok.com/@arsimgashiviolinist",
    ],

    hasOccupation: {
      "@type": "Occupation",
      name: "Violinist",
      description:
        "Professional musician specializing in classical violin performance.",
    },

    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Booking and professional inquiries",
      url: "https://arsimgashi.com/contact",
    },

    knowsLanguage: [
      "English",
      "Albanian",
      "German",
    ],
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