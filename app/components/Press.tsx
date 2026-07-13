export default function Press() {
  return (
    <section
      id="press"
      className="py-24 px-6 bg-gray-50 text-black"
      aria-label="Arsim Gashi press and international recognition"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">

          <p className="uppercase tracking-[6px] text-sm text-gray-500">
            Recognition
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Press & International Recognition
          </h2>

          <p className="mt-4 text-gray-600">
            International competitions, media features and artistic achievements.
          </p>

        </div>


        <div className="space-y-8">


          <article className="bg-white p-8 rounded-2xl shadow-sm">

            <h3 className="text-2xl font-bold">
              The Violin Channel
            </h3>

            <p className="mt-3 text-gray-700 leading-relaxed">
              Arsim Gashi was featured as a finalist and participant at the
              Arthur Grumiaux International Competition for Young Violinists,
              Belgium (2018).
            </p>

            <a
              href="https://theviolinchannel.com/grumiaux-international-violin-competition-belgium-finalists-2018/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 underline"
            >
              Read publication
            </a>

          </article>



          <article className="bg-white p-8 rounded-2xl shadow-sm">

            <h3 className="text-2xl font-bold">
              KamerFest
            </h3>

            <p className="mt-3 text-gray-700 leading-relaxed">
              Featured artist biography highlighting Arsim Gashi’s violin
              education, competitions, performances and artistic development.
            </p>

            <a
              href="https://www.arskosovafoundation.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 underline"
            >
              View source
            </a>

          </article>



          <article className="bg-white p-8 rounded-2xl shadow-sm">

            <h3 className="text-2xl font-bold">
              DAM Festival
            </h3>

            <p className="mt-3 text-gray-700 leading-relaxed">
              Arsim Gashi has appeared as a violin performer in Kosovo’s
              contemporary classical music scene through concerts and
              artistic collaborations.
            </p>

          </article>


        </div>

      </div>
    </section>
  );
}