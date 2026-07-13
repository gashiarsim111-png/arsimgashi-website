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

    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://arsimgashi.com"
    },

    "image": {
      "@type": "ImageObject",
      "url": "https://arsimgashi.com/hero.jpg",
      "width": 1200,
      "height": 1200
    },


    "description":
      "Arsim Gashi is a Kosovan classical violinist, soloist and concertmaster known for international competitions, orchestral performances and classical violin interpretation.",


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
      "Professional Violinist",
      "Soloist",
      "Concertmaster",
      "Chamber Musician"
    ],


    "hasOccupation": {
      "@type": "Occupation",
      "name": "Classical Violinist",
      "description":
        "Professional violin performer specializing in solo, chamber and orchestral music."
    },


    "knowsAbout": [
      "Classical Music",
      "Violin Performance",
      "Solo Violin",
      "Chamber Music",
      "Orchestral Performance",
      "Violin Concertos"
    ],


    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Master of Arts in Violin Performance",
        "credentialCategory": "Master Degree",
        "recognizedBy": {
          "@type": "Organization",
          "name": "University of Prishtina - Faculty of Arts"
        }
      },

      {
        "@type": "EducationalOccupationalCredential",
        "name": "Bachelor of Arts in Violin Performance",
        "credentialCategory": "Bachelor Degree",
        "recognizedBy": {
          "@type": "Organization",
          "name": "University of Prishtina - Faculty of Arts"
        }
      }
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
      "Arthur Grumiaux International Violin Competition - Finalist, Belgium (2018)",
      "Special Prize from violinist Dora Schwarzberg - Arthur Grumiaux Competition",
      "Ars Kosova Competition - First Absolute Prize (three times)",
      "ESTA Austria - Young Talent (three times)",
      "ESTA Kosovo - Promising Talent",
      "Whitgift International Competition South London - Second Prize (three times)",
      "Ohrid te Sakam Competition - First Absolute Prize"
    ],


    "affiliation": [
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


    "performerIn": [
      {
        "@type": "Event",
        "name": "DAM Festival"
      },

      {
        "@type": "Event",
        "name": "KamerFest"
      },

      {
        "@type": "Event",
        "name": "Western Balkan Youth Orchestra"
      }
    ],


    "subjectOf": [
      {
        "@type": "Article",
        "name": "Arthur Grumiaux International Violin Competition Finalists",
        "publisher": {
          "@type": "Organization",
          "name": "The Violin Channel"
        },
        "url":
          "https://theviolinchannel.com/grumiaux-international-violin-competition-belgium-finalists-2018/"
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
      "contactType": "Professional bookings",
      "email": "Info@arsimgashi.com",
      "telephone": "+38345963933"
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