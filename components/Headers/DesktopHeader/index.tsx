import Link from "next/link";
import React from "react";

export function DesktopHeader() {
  return (
    <header className="w-full h-20 bg-white font-semibold sticky left-0 top-0 z-50 shadow-sm">
      <section className="container h-full mx-auto flex justify-between items-center">
        <Link href="/">
          <p className="cursor-pointer transition-all hover:text-gray-700">Atul's Portfolio</p>
        </Link>
        <ul className="flex items-center space-x-6 ">
          <li>Experience</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </section>
    </header>
  );
}
