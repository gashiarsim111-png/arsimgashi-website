export default function Press() {
  return (
    <section
      id="press"
      className="py-24 px-6 bg-gray-50 text-black"
      aria-label="Arsim Gashi press and recognition"
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


          <div className="bg-white p-8 rounded-2xl shadow-sm">

            <h3 className="text-2xl font-bold">
              The Violin Channel
            </h3>

            <p className="mt-3 text-gray-700 leading-relaxed">
              Featured as a finalist and participant at the
              International Grumiaux Competition for Young Violinists,
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

          </div>



          <div className="bg-white p-8 rounded-2xl shadow-sm">

            <h3 className="text-2xl font-bold">
              KamerFest
            </h3>

            <p className="mt-3 text-gray-700 leading-relaxed">
              Featured artist biography highlighting Arsim Gashi’s
              violin studies, performances, competitions and artistic
              achievements.
            </p>

            <a
              href="https://www.arskosovafoundation.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 underline"
            >
              View source
            </a>

          </div>



          <div className="bg-white p-8 rounded-2xl shadow-sm">

            <h3 className="text-2xl font-bold">
              DAM Festival
            </h3>

            <p className="mt-3 text-gray-700 leading-relaxed">
              Featured as a performing violinist in Kosovo’s classical
              music scene through artistic appearances and concerts.
            </p>

          </div>


        </div>

      </div>
    </section>
  );
}