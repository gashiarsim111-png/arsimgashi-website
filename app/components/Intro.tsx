"use client";

import { useEffect, useState } from "react";

export default function Intro() {
  const [fade, setFade] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFade(true);
    }, 4300);

    const hideTimer = setTimeout(() => {
      setHidden(true);
    }, 5300);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-1000 ${
        fade ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-center select-none">

        <div className="intro-line"></div>

        <h1 className="intro-name">
          ARSIM GASHI
        </h1>

        <p className="intro-role">
          VIOLINIST
        </p>

      </div>
    </div>
  );
}