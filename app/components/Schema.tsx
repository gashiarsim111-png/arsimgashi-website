export default function Schema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",

    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.arsimgashi.com"
    },

    "name": "Arsim Gashi",

    "alternateName": [
      "Arsim Gashi Violinist",
      "Arsim Gashi Official"
    ],

    "url": "https://www.arsimgashi.com",

    "image": {
      "@type": "ImageObject",
      "url": "https://www.arsimgashi.com/og-image.jpg"
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


    "worksFor": [
      {
        "@type": "Organization",
        "name": "Kosovo Philharmonic"
      },
      {
        "@type": "Organization",
        "name": "Kosovo Opera Orchestra"
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


    "award": [
      "Finalist - Arthur Grumiaux International Violin Competition, Belgium (2018)",
      "Special Prize from violinist Dora Schwarzberg - Arthur Grumiaux Competition",
      "First Absolute Prize - Ars Kosova Competition",
      "Young Talent - ESTA Austria",
      "Promising Talent - ESTA Kosovo",
      "Second Prize - Whitgift International Competition, South London",
      "First Absolute Prize - Ohrid te Sakam Competition"
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
      },

      {
        "@type": "Article",
        "name": "Arthur Grumiaux International Competition Candidates",
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
      "url": "https://www.arsimgashi.com/contact"
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