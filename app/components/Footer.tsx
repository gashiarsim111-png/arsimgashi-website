export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h3 className="text-2xl font-semibold tracking-wide">
          Arsim Gashi
        </h3>

        <p className="mt-2 text-gray-400">
          Violinist • Soloist • Concertmaster
        </p>

        <p className="mt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Arsim Gashi. All rights reserved.
        </p>

      </div>
    </footer>
  );
}