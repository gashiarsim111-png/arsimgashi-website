import Image from "next/image";

const images = [
  {
    src: "/gallery1.jpg",
    title: "Concert Performance",
  },
  {
    src: "/gallery2.jpg",
    title: "Violin Recital",
  },
  {
    src: "/gallery3.jpg",
    title: "Orchestra Performance",
  },
  {
    src: "/gallery4.jpg",
    title: "Artistic Moments",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 bg-black text-white">

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <p className="uppercase tracking-[6px] text-sm text-gray-400">
            Gallery
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Performances
          </h2>
        </div>


        <div className="grid md:grid-cols-2 gap-8">

          {images.map((image) => (
            <div
              key={image.src}
              className="group relative overflow-hidden rounded-2xl"
            >

              <Image
                src={image.src}
                alt={image.title}
                width={800}
                height={600}
                className="w-full h-[350px] object-cover transition duration-700 group-hover:scale-110"
              />


              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition duration-500 flex items-end">

                <h3 className="p-6 text-xl opacity-0 group-hover:opacity-100 transition">
                  {image.title}
                </h3>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}