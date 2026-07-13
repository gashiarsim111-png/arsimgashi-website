import Image from "next/image";

const images = [
  {
    src: "/gallery1.jpg",
    title: "Arsim Gashi performing violin concert",
    alt: "Arsim Gashi professional violinist performing live classical violin concert",
  },
  {
    src: "/gallery2.jpg",
    title: "Arsim Gashi violin recital",
    alt: "Arsim Gashi violin recital performance in Kosovo",
  },
  {
    src: "/gallery3.jpg",
    title: "Arsim Gashi orchestra performance",
    alt: "Arsim Gashi as violinist and concertmaster performing with orchestra",
  },
  {
    src: "/gallery4.jpg",
    title: "Arsim Gashi artistic performance",
    alt: "Arsim Gashi classical violin artistic performance",
  },
];

export default function Gallery() {
  return (
    <section 
      id="gallery" 
      className="py-24 px-6 bg-black text-white"
      aria-label="Arsim Gashi violin performances gallery"
    >

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

          {images.map((image, index) => (

            <div
              key={image.src}
              className="group relative overflow-hidden rounded-2xl"
            >

              <Image

                src={image.src}

                alt={image.alt}

                width={1200}

                height={800}

                priority={index === 0}

                sizes="(max-width: 768px) 100vw, 50vw"

                className="
                w-full 
                h-[350px] 
                object-cover 
                transition 
                duration-700 
                group-hover:scale-110
                "

              />


              <div 
                className="
                absolute 
                inset-0 
                bg-black/0 
                group-hover:bg-black/50 
                transition 
                duration-500 
                flex 
                items-end
                "
              >

                <h3
                  className="
                  p-6 
                  text-xl 
                  opacity-0 
                  group-hover:opacity-100 
                  transition
                  "
                >
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