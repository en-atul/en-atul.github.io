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
          alt="wellnite logo"
        />
        <p className="mt-10 text-gray-700">
          DISTRONIX is a provider of IoT, software, and robotics development
          solutions. It provides smart bus systems, asset tracking, and
          management systems, drones, automated timer, and smart PPE tracking
          systems. It has partnered with TCS, KPMG, Berger Paints, and Cape
          Gemini.
        </p>

        <h3 className="mt-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-gray-500">
          Facility Provides by Distronix
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
