export default function Achievements() {
  const awards = [
    {
      title: "Arthur Grumiaux International Violin Competition",
      description:
        "Finalist and recipient of Special Prize from violinist Dora Schwarzberg, Belgium (2018).",
    },
    {
      title: "Ars Kosova Competition",
      description:
        "First Absolute Prize winner (three times).",
    },
    {
      title: "ESTA Austria - Young Talent",
      description:
        "Young Talent recognition (three times).",
    },
    {
      title: "ESTA Kosovo - Promising Talent",
      description:
        "Promising Talent recognition.",
    },
    {
      title: "Whitgift International Competition, South London",
      description:
        "Second Prize winner (three times).",
    },
    {
      title: "Ohrid te Sakam Competition",
      description:
        "First Absolute Prize winner.",
    },
  ];

  return (
    <section
      id="achievements"
      className="py-24 px-6 bg-black text-white"
      aria-label="Arsim Gashi international awards"
    >

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">

          <p className="uppercase tracking-[6px] text-sm text-gray-400">
            Awards
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            International Achievements
          </h2>

        </div>


        <div className="grid md:grid-cols-2 gap-8">

          {awards.map((award) => (

            <div
              key={award.title}
              className="border border-white/20 rounded-2xl p-8"
            >

              <h3 className="text-2xl font-semibold">
                {award.title}
              </h3>

              <p className="mt-4 text-gray-300 leading-relaxed">
                {award.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}