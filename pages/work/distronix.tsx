import Image from "next/image";
import React from "react";
import { DefaultLayout } from "../../components";

const skills = [
  {
    label: "Reactjs",
    borderColor: "border-cyan-500",
  },
  {
    label: "React Native",
    borderColor: "border-cyan-500",
  },
  {
    label: "Redux",
    borderColor: "border-purple-500",
  },
  {
    label: "TailwindCSS",
    borderColor: "border-cyan-500",
  },
  {
    label: "Javascript",
    borderColor: "border-yellow-500",
  },
];

export default function Distronix() {
  return (
    <DefaultLayout>
      <div className="container mx-auto p-10">
        <Image
          src="/images/distronix.jpeg"
          width={100}
          height={100}
          alt="distronix logo"
          priority
        />
        <a
          href="http://distronix.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
        >
          <article className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              />
            </svg>
            <p>Distronix Website</p>
          </article>
        </a>
        <p className="mt-10 text-gray-700">
          DISTRONIX is a provider of IoT, software, and robotics development
          solutions. It provides smart bus systems, asset tracking, and
          management systems, drones, automated timer, and smart PPE tracking
          systems. It has partnered with TCS, KPMG, Berger Paints, and Cape
          Gemini.
        </p>

        <h3 className="mt-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-gray-500">
          Services Provide by Distronix
        </h3>
        <section className="flex justify-start items-center space-x-5 mt-4">
          <article className="px-4 py-1 rounded-full border border-gray-300">
            IOT
          </article>
          <article className="px-4 py-1 rounded-full border border-gray-300">
            EMBEDDED SYSTEMS
          </article>
          <article className="px-4 py-1 rounded-full border border-gray-300">
            ROBOTICS
          </article>
        </section>

        <h3 className="mt-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-gray-500">
          My Responsibilities
        </h3>
        <ul className="list-disc pl-4">
          <li>Ensuring web & mobile app design is optimized</li>
          <li>Write reusable components that can be used in the future</li>
          <li>Applying best practices and standard operating procedures</li>
          <li>fix bugs</li>
          <li>Optimizing web pages for maximum speed and scalability</li>
          <li>Maintaining brand consistency throughout the design</li>
          <li>Developing features to enhance the user experience</li>
          <li>Stay up to date with current best practices</li>
        </ul>

        <h3 className="mt-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-gray-500">
          Team Members
        </h3>
        <ul className="list-disc pl-4">
          <li>Atul Kumar (Frontend Developer)</li>
          <li>Arpan Das (Backend Developer)</li>
        </ul>

        <h3 className="mt-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-gray-500">
          Development Stack
        </h3>
        <section className="mt-4 flex flex-wrap gap-4">
          {skills.map((skill, idx) => (
            <article
              key={idx}
              className={`px-4 py-2 border-2 ${skill.borderColor} rounded-full`}
            >
              {skill.label}
            </article>
          ))}
        </section>
      </div>
    </DefaultLayout>
  );
}
