import React from "react";

export function Footer() {
  return (
    <footer id="contact" className="container mx-auto py-8">
      <p className="text-black text-3xl mb-4">Let&apos;s Connect</p>
      <ul className="list-none flex items-center text-black text-lg">
        <li className="mr-3 border-b border-gray-700">
          <a
            href="https://www.linkedin.com/in/en-atul/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li className="mx-3 border-b border-gray-700">
          <a rel="noopener noreferrer" target="_blank" download>
            Resume
          </a>
        </li>
        <li className="mx-3 border-b border-gray-700">
          <a href="mailto: atkr5496@gmail.com" rel="noopener noreferrer">
            Email
          </a>
        </li>
      </ul>
    </footer>
  );
}
