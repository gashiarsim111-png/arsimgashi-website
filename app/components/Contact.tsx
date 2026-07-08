export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white text-black">
      <div className="max-w-4xl mx-auto text-center">

        <p className="uppercase tracking-[6px] text-sm text-gray-500">
          Contact
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-10">
          Get In Touch
        </h2>

        <div className="space-y-5 text-lg text-gray-700">

          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:Info@arsimgashi.com"
              className="hover:underline"
            >
              Info@arsimgashi.com
            </a>
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            <a
              href="tel:+38345963933"
              className="hover:underline"
            >
              +383 45 963 933
            </a>
          </p>

          <p>
            <strong>Location:</strong> Prishtinë, Kosovë
          </p>

        </div>

      </div>
    </section>
  );
}