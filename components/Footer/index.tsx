import React from "react";

export function Footer() {
  return (
    <footer className="container mx-auto py-8">
      <p className="text-black text-3xl mb-4">Let's Connect</p>
      <ul className="list-none flex items-center text-black text-lg">
        <li className="mr-3 border-b border-gray-700">
          <a
            href="https://www.linkedin.com/in/atul-b98221172/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li className="mx-3 border-b border-gray-700">
          <a rel="noreferrer" target="_blank" download>
            Resume
          </a>
        </li>
        <li className="mx-3 border-b border-gray-700">
          <a href="mailto: atkr3001@gmail.com">Email</a>
        </li>
      </ul>
    </footer>
  );
}
