export default function Press() {
  const recognitions = [
    {
      title: "The Violin Channel",
      description:
        "Arsim Gashi was featured as a finalist and participant at the Arthur Grumiaux International Competition for Young Violinists, Belgium (2018).",
      link:
        "https://theviolinchannel.com/grumiaux-international-violin-competition-belgium-finalists-2018/",
      button: "Read publication",
    },

    {
      title: "Arthur Grumiaux International Competition",
      description:
        "Participation in one of the most recognized international violin competitions for young violinists, held in Belgium.",
      link:
        "https://theviolinchannel.com/candidates-2018-grumiaux-international-competition-young-violinists/",
      button: "View competition source",
    },

    {
      title: "KamerFest",
      description:
        "Featured artist biography highlighting Arsim Gashi’s violin studies, competitions, performances and artistic development within Kosovo’s classical music scene.",
      link:
        "https://www.arskosovafoundation.com/",
      button: "View source",
    },

    {
      title: "DAM Festival",
      description:
        "Arsim Gashi performed as a featured violinist at DAM International Music Festival in Prishtina, presenting a recital with pianist Andi Duraku and String Orchestra during the 2023 edition.",
      link:
        "https://www.koha.net/en/kulture/violina-ne-dialog-me-piano-realizon-nje-enderr-paralajmeron-skenen",
      button: "Read publication",
    },
  ];


  return (
    <section
      id="press"
      aria-labelledby="press-title"
      className="py-24 px-6 bg-gray-50 text-black"
    >

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">

          <p className="uppercase tracking-[6px] text-sm text-gray-500">
            Recognition
          </p>


          <h2
            id="press-title"
            className="text-4xl md:text-5xl font-bold mt-4"
          >
            Press & International Recognition
          </h2>


          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            International media coverage, competitions and artistic
            achievements recognizing Arsim Gashi’s career as a classical
            violinist.
          </p>

        </div>


        <div
          className="grid md:grid-cols-2 gap-8"
          aria-label="Press publications and recognitions"
        >

          {recognitions.map((item) => (

            <article
              key={item.title}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition"
            >

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>


              <p className="mt-4 text-gray-700 leading-relaxed">
                {item.description}
              </p>


              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${item.button} - ${item.title}`}
                className="inline-block mt-5 underline font-medium hover:text-gray-600 transition"
              >
                {item.button}
              </a>


            </article>

          ))}

        </div>

      </div>

    </section>
  );
}