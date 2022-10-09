import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

export function DesktopHeader() {
  const { pathname } = useRouter();
  const [a, r, app] = pathname.split("/");
  console.log(app);
  return (
    <header className="w-full h-20 bg-white font-semibold sticky left-0 top-0 z-50 shadow-sm">
      <section className="container h-full mx-auto flex justify-between items-center">
        <Link href="/">
          <p className="cursor-pointer transition-all hover:text-gray-700">
            Atul's Portfolio
          </p>
        </Link>
        {r === "work" ? (
          <ul className="flex items-center space-x-6 capitalize">
            <li>
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer hover:text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </Link>
            </li>
            <li>{app}</li>
          </ul>
        ) : (
          <ul className="flex items-center space-x-6 ">
            <li>Experience</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        )}
      </section>
    </header>
  );
}
