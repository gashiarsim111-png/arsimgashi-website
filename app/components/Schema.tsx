export default function Schema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",

    "@id": "https://www.arsimgashi.com/#person",

    identifier: {
      "@type": "PropertyValue",
      propertyID: "Wikidata",
      value: "Q97440789",
    },

    name: "Arsim Gashi",

    alternateName: [
      "Arsim Gashi Violinist",
      "Arsim Gashi Official",
      "Arsim Gashi Kosovo Violinist",
    ],

    url: "https://www.arsimgashi.com",

    image: {
      "@type": "ImageObject",
      url: "https://www.arsimgashi.com/og-image.jpg",
      width: 1200,
      height: 630,
    },

    description:
      "Arsim Gashi is a Kosovan violinist, soloist and concertmaster known for classical violin performances, solo concerts, chamber music and orchestral activities.",


    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.arsimgashi.com",
    },


    birthDate: "2001-03-24",


    birthPlace: {
      "@type": "Place",
      name: "Prishtina",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Prishtina",
        addressCountry: "XK",
      },
    },


    nationality: {
      "@type": "Country",
      name: "Kosovo",
    },


    jobTitle: [
      "Violinist",
      "Soloist",
      "Concertmaster",
      "Chamber Musician",
    ],


    hasOccupation: {
      "@type": "Occupation",
      name: "Professional Violinist",
      occupationLocation: {
        "@type": "Country",
        name: "Kosovo",
      },
    },


    knowsAbout: [
      "Classical Music",
      "Violin Performance",
      "Solo Violin",
      "Chamber Music",
      "Orchestral Music",
      "Max Bruch Violin Concerto",
    ],


    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Faculty of Arts, University of Prishtina",
      },
      {
        "@type": "EducationalOrganization",
        name: "Prenk Jakova Music School",
      },
    ],


    education: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Master Degree in Violin Performance",
        educationalLevel: "Master",
        recognizedBy: {
          "@type": "Organization",
          name: "University of Prishtina",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Bachelor Degree in Violin Performance",
        educationalLevel: "Bachelor",
        recognizedBy: {
          "@type": "Organization",
          name: "University of Prishtina",
        },
      },
    ],


    award: [
      "Finalist at Arthur Grumiaux International Violin Competition, Belgium (2018)",
      "Special Prize from violinist Dora Schwarzberg at Arthur Grumiaux International Violin Competition",
      "First Absolute Prize at Ars Kosova Competition",
      "Young Talent Award - ESTA Austria",
      "Promising Talent Award - ESTA Kosovo",
      "Second Prize at Whitgift International Competition, South London",
      "First Absolute Prize at Ohrid te Sakam Competition",
    ],


    subjectOf: [
      {
        "@type": "Article",
        name: "Arthur Grumiaux International Violin Competition Finalists",
        publisher: {
          "@type": "Organization",
          name: "The Violin Channel",
        },
        url: "https://theviolinchannel.com/grumiaux-international-violin-competition-belgium-finalists-2018/",
      },
      {
        "@type": "Article",
        name: "Arthur Grumiaux International Competition Candidates",
        publisher: {
          "@type": "Organization",
          name: "The Violin Channel",
        },
        url: "https://theviolinchannel.com/candidates-2018-grumiaux-international-competition-young-violinists/",
      },
    ],


    performerIn: [
      {
        "@type": "Event",
        name: "DAM Festival",
      },
      {
        "@type": "Event",
        name: "KamerFest",
      },
      {
        "@type": "Event",
        name: "Western Balkans Youth Orchestra",
      },
    ],


    sameAs: [
      "https://www.wikidata.org/wiki/Q97440789",
      "https://sq.wikipedia.org/wiki/Arsim_Gashi",
      "https://www.instagram.com/arsimgashiviolinist/",
      "https://www.facebook.com/arsimgashiofficial",
      "https://www.youtube.com/@arsimgashiviolinist",
      "https://www.tiktok.com/@arsimgashiviolinist",
    ],


    knowsLanguage: [
      "Albanian",
      "English",
    ],


    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Booking and professional inquiries",
      url: "https://www.arsimgashi.com/contact",
      availableLanguage: [
        "English",
        "Albanian",
      ],
    },
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