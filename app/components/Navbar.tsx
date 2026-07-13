"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

        <Link
          href="/"
          className="text-2xl font-bold tracking-[6px] text-white"
        >
          AG
        </Link>


        <div className="hidden md:flex gap-10 uppercase text-sm tracking-widest text-white">

          <a
            href="#about"
            className="hover:text-gray-300 transition"
          >
            About
          </a>


          <a
            href="#gallery"
            className="hover:text-gray-300 transition"
          >
            Gallery
          </a>


          <a
            href="#contact"
            className="hover:text-gray-300 transition"
          >
            Contact
          </a>

        </div>


        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
          aria-label="Open menu"
        >
          ☰
        </button>

      </nav>


      {open && (
        <div className="md:hidden bg-black/90 text-white text-center py-6 space-y-5 uppercase tracking-widest">

          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="block"
          >
            About
          </a>


          <a
            href="#gallery"
            onClick={() => setOpen(false)}
            className="block"
          >
            Gallery
          </a>


          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block"
          >
            Contact
          </a>

        </div>
      )}

    </header>
  );
}