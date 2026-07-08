import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">

      <Image
        src="/hero.jpg"
        alt="Arsim Gashi violinist"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 text-center text-white px-6">

        <p className="uppercase tracking-[8px] text-sm md:text-base text-gray-300 mb-6">
          Official Website
        </p>

        <h1 className="text-5xl md:text-8xl font-bold tracking-[10px]">
          ARSIM GASHI
        </h1>

        <p className="mt-6 text-xl md:text-3xl font-light text-gray-200">
          Violinist • Soloist • Concertmaster
        </p>

        <p className="mt-6 max-w-2xl mx-auto text-gray-300 leading-relaxed">
          Classical violinist from Kosovo, dedicated to musical excellence,
          artistic expression and unforgettable performances.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

          <a
            href="#about"
            className="rounded-full bg-white px-10 py-4 text-black font-semibold hover:scale-105 transition"
          >
            Biography
          </a>

          <a
            href="#gallery"
            className="rounded-full border border-white px-10 py-4 hover:bg-white hover:text-black transition"
          >
            Performances
          </a>

        </div>

      </div>

    </section>
  );
}