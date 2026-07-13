export default function Schema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",

    "name": "Arsim Gashi",

    "alternateName": [
      "Arsim Gashi Violinist",
      "Arsim Gashi Official"
    ],

    "url": "https://arsimgashi.com",

    "image": {
      "@type": "ImageObject",
      "url": "https://arsimgashi.com/og-image.jpg"
    },

    "description":
      "Arsim Gashi is a Kosovan violinist, soloist and concertmaster known for classical violin performances, international competitions and orchestral activities.",


    "birthDate": "2001-03-24",

    "birthPlace": {
      "@type": "Place",
      "name": "Prishtina, Kosovo"
    },


    "nationality": {
      "@type": "Country",
      "name": "Kosovo"
    },


    "jobTitle": [
      "Violinist",
      "Soloist",
      "Concertmaster",
      "Chamber Musician"
    ],


    "hasOccupation": {
      "@type": "Occupation",
      "name": "Professional Violinist",
      "description":
        "Classical violin performer specializing in solo, chamber and orchestral performances."
    },


    "knowsAbout": [
      "Classical Music",
      "Violin Performance",
      "Chamber Music",
      "Orchestral Music",
      "Solo Violin"
    ],


    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Faculty of Arts, University of Prishtina"
      },
      {
        "@type": "EducationalOrganization",
        "name": "Prenk Jakova Music School"
      }
    ],


    "award": [
      {
        "@type": "Award",
        "name": "Arthur Grumiaux International Violin Competition",
        "description":
          "Finalist and recipient of a Special Prize from violinist Dora Schwarzberg, Belgium (2018)."
      },

      {
        "@type": "Award",
        "name": "Ars Kosova Competition",
        "description":
          "First Absolute Prize winner (three times)."
      },

      {
        "@type": "Award",
        "name": "ESTA Austria Young Talent",
        "description":
          "Young Talent recognition (three times)."
      },

      {
        "@type": "Award",
        "name": "ESTA Kosovo Promising Talent",
        "description":
          "Promising Talent recognition."
      },

      {
        "@type": "Award",
        "name": "Whitgift International Competition, South London",
        "description":
          "Second Prize winner (three times)."
      },

      {
        "@type": "Award",
        "name": "Ohrid te Sakam Competition",
        "description":
          "First Absolute Prize winner."
      }
    ],


    "performerIn": [
      {
        "@type": "MusicEvent",
        "name": "DAM Festival"
      },

      {
        "@type": "MusicEvent",
        "name": "KamerFest"
      },

      {
        "@type": "MusicEvent",
        "name": "Western Balkan Youth Orchestra"
      }
    ],


    "memberOf": [
      {
        "@type": "Organization",
        "name": "Kosovo Philharmonic"
      },

      {
        "@type": "Organization",
        "name": "Orkestra Prishtina"
      },

      {
        "@type": "Organization",
        "name": "Kosovo Opera Orchestra"
      }
    ],


    "subjectOf": [
      {
        "@type": "Article",

        "name":
          "Arthur Grumiaux International Violin Competition Finalists",

        "publisher": {
          "@type": "Organization",
          "name": "The Violin Channel"
        },

        "url":
          "https://theviolinchannel.com/grumiaux-international-violin-competition-belgium-finalists-2018/"
      },

      {
        "@type": "Article",

        "name":
          "Arthur Grumiaux International Competition Candidates",

        "publisher": {
          "@type": "Organization",
          "name": "The Violin Channel"
        },

        "url":
          "https://theviolinchannel.com/candidates-2018-grumiaux-international-competition-young-violinists/"
      }
    ],


    "sameAs": [
      "https://sq.wikipedia.org/wiki/Arsim_Gashi",

      "https://www.wikidata.org/wiki/Q97440789",

      "https://www.instagram.com/arsimgashiviolinist/",

      "https://www.facebook.com/arsimgashiofficial",

      "https://www.youtube.com/@arsimgashiviolinist",

      "https://www.tiktok.com/@arsimgashiviolinist"
    ],


    "knowsLanguage": [
      "Albanian",
      "English"
    ],


    "contactPoint": {
      "@type": "ContactPoint",

      "contactType":
        "Booking and professional inquiries",

      "url":
        "https://arsimgashi.com/contact"
    }
  };


  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  );
}