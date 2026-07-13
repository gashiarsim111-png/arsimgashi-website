import React from "react";

export default function Schema() {
  const schema = {
    "@context": "https://schema.org",

    "@type": "Person",

    name: "Arsim Gashi",

    url: "https://arsimgashi.com",

    identifier: {
      "@type": "PropertyValue",
      propertyID: "Wikidata",
      value: "Q97440789",
    },

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

    nationality: {
      "@type": "Country",
      name: "Kosovo",
    },

    birthDate: "2001-03-24",

    birthPlace: {
      "@type": "Place",
      name: "Prishtina, Kosovo",
    },

    description:
      "Arsim Gashi is a Kosovan violinist, soloist and chamber musician. His official website features biography, performances, recordings and artistic activities.",

    award: [
      "Finalist - Arthur Grumiaux International Violin Competition, Belgium (2018)",
    ],

    subjectOf: [
      {
        "@type": "Article",
        name: "Arsim Gashi - Finalist at Arthur Grumiaux International Violin Competition",
        url:
          "https://theviolinchannel.com/grumiaux-international-violin-competition-belgium-finalists-2018/",
      },
      {
        "@type": "Article",
        name: "Arsim Gashi listed among candidates of Arthur Grumiaux International Competition",
        url:
          "https://theviolinchannel.com/candidates-2018-grumiaux-international-competition-young-violinists/",
      },
    ],

    knowsAbout: [
      "Violin Performance",
      "Classical Music",
      "Chamber Music",
      "Orchestral Performance",
      "Solo Performance",
    ],

    sameAs: [
      "https://arsimgashi.com",
      "https://sq.wikipedia.org/wiki/Arsim_Gashi",
      "https://www.wikidata.org/wiki/Q97440789",
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

    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "University of Prishtina - Faculty of Arts",
      },
      {
        "@type": "EducationalOrganization",
        name: "Prenk Jakova Music School",
      },
    ],

    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Booking and professional inquiries",
      url: "https://arsimgashi.com/contact",
    },

    knowsLanguage: [
      "Albanian",
      "English",
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