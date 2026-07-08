export default function Footer() {
  return (
    <footer
      className="bg-black text-white py-8 px-6"
      aria-label="Arsim Gashi official footer"
    >
      <div className="max-w-6xl mx-auto text-center">

        <h3 className="text-2xl font-semibold tracking-wide">
          Arsim Gashi
        </h3>

        <p className="mt-2 text-gray-400">
          Violinist • Soloist • Concertmaster
        </p>

        <div className="flex justify-center gap-6 mt-6 text-sm text-gray-300">

          <a
            href="https://www.instagram.com/arsimgashiviolinist/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Arsim Gashi"
            className="hover:text-white transition"
          >
            Instagram
          </a>

          <a
            href="https://www.facebook.com/arsimgashiofficial"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Arsim Gashi"
            className="hover:text-white transition"
          >
            Facebook
          </a>

          <a
            href="https://www.youtube.com/@arsimgashiviolinist"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube Arsim Gashi"
            className="hover:text-white transition"
          >
            YouTube
          </a>

          <a
            href="https://www.tiktok.com/@arsimgashiviolinist"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok Arsim Gashi"
            className="hover:text-white transition"
          >
            TikTok
          </a>

        </div>

        <p className="mt-6 text-sm text-gray-500">
          ©️ {new Date().getFullYear()} Arsim Gashi. All rights reserved.
        </p>

      </div>
    </footer>
  );
}