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
      "Arsim Gashi is a professional violinist, soloist and concertmaster. Official website featuring biography, performances, gallery and artistic activities.",

    award: [
      "Finalist - Arthur Grumiaux International Violin Competition, Belgium (2018)",
      "Special Prize - Arthur Grumiaux International Violin Competition",
      "First Absolute Prize - Ars Kosova Competition",
      "Young Talent - ESTA Austria",
      "Promising Talent - ESTA Kosova",
      "Second Prize - Whitgift International Competition, South London",
      "First Absolute Prize - Ohrid te Sakam Competition",
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