import React from "react";

export function DesktopHeader() {
  return (
    <header className="w-full h-20 bg-white font-semibold">
      <section className="container h-full mx-auto flex justify-between items-center">
      <p>Atul's Portfolio</p>
      <ul className="flex items-center space-x-6 ">
        <li>Work Experience</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      </section>
    </header>
  );
}
