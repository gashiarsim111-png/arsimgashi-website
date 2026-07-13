export default function Schema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",

    "@id": "https://arsimgashi.com/#person",

    "name": "Arsim Gashi",

    "alternateName": [
      "Arsim Gashi Violinist",
      "Arsim Gashi Official"
    ],

    "url": "https://arsimgashi.com",

    "image": {
      "@type": "ImageObject",
      "url": "https://arsimgashi.com/og-image.jpg",
      "width": 1200,
      "height": 630
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
      "name": "Professional Violinist"
    },


    "instrument": "Violin",


    "knowsAbout": [
      "Classical Music",
      "Violin Performance",
      "Chamber Music",
      "Orchestral Music"
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


    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Bachelor Degree in Violin Performance",
        "dateCreated": "2024"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Master Degree in Violin Performance",
        "dateCreated": "2026"
      }
    ],


    "award": [
      "Arthur Grumiaux International Competition for Young Violinists - Finalist (Belgium, 2018)",
      "Special Prize from violinist Dora Schwarzberg - Arthur Grumiaux Competition",
      "Ars Kosova - First Absolute Prize",
      "ESTA Austria - Young Talent",
      "ESTA Kosovo - Promising Talent",
      "Whitgift International Competition South London - Second Prize",
      "Ohrid te Sakam - First Absolute Prize"
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
        "name": "Kosovo Opera Orchestra"
      },

      {
        "@type": "Organization",
        "name": "Orkestra Prishtina"
      }
    ],


    "subjectOf": [
      {
        "@type": "Article",
        "name": "Arthur Grumiaux International Violin Competition Finalists",
        "publisher": {
          "@type": "Organization",
          "name": "The Violin Channel"
        }
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
      "contactType": "Booking and professional inquiries",
      "url": "https://arsimgashi.com/#contact"
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