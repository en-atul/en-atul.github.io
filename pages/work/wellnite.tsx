import Image from "next/image";
import React from "react";
import { DefaultLayout } from "../../components";

const skills = [
  {
    label: "Reactjs",
    borderColor: "border-cyan-500",
  },

  {
    label: "ReduxToolkit",
    borderColor: "border-purple-500",
  },
  {
    label: "TailwindCSS",
    borderColor: "border-cyan-500",
  },
  {
    label: "Jest",
    borderColor: "border-red-800",
  },
  {
    label: "React Testing Library",
    borderColor: "border-red-500",
  },
  {
    label: "Typescript",
    borderColor: "border-blue-500",
  },
  {
    label: "Javascript",
    borderColor: "border-yellow-500",
  },
  {
    label: "Firebase",
    borderColor: "border-yellow-500",
  },
  {
    label: "MongoDB",
    borderColor: "border-green-500",
  },
  {
    label: "Storybook",
    borderColor: "border-pink-500",
  },

  {
    label: "rxjs",
    borderColor: "border-pink-500",
  },

  {
    label: "Nodejs",
    borderColor: "border-green-600",
  },
];

export default function Wellnite() {
  return (
    <DefaultLayout>
      <div className="container mx-auto p-10">
        <Image
          src="/images/wellnite.jpeg"
          width={100}
          height={100}
          alt="wellnite logo"
        />
        <p className="mt-10 text-gray-700">
          Wellnite is a mental health platform, aim's to make high-quality
          mental healthcare accessible to everyone. Wellnite makes it accessible
          and frictionless for everyone to take action and overcome anxiety and
          depression.
        </p>

        <h3 className="mt-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">
          Facility Provides by Wellnite to their members
        </h3>
        <section className="flex justify-start items-center space-x-5 mt-4">
          <article className="px-4 py-1 rounded-full border border-gray-300">
            Book Appointment
          </article>
          <article className="px-4 py-1 rounded-full border border-gray-300">
            Video Call
          </article>
          <article className="px-4 py-1 rounded-full border border-gray-300">
            Plan Manage
          </article>
          <article className="px-4 py-1 rounded-full border border-gray-300">
            Cancel Subscription
          </article>
        </section>

        <h3 className="mt-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">
          My Responsibilities
        </h3>
        <ul className="list-disc pl-4">
          <li>Ensuring web design is optimized for smartphones</li>
          <li>Write reusable components that can be used in the future</li>
          <li>Applying best practices and standard operating procedures</li>
          <li>fix critical bugs</li>
          <li>Optimizing web pages for maximum speed and scalability</li>
          <li>Maintaining brand consistency throughout the design</li>
          <li>Developing features to enhance the user experience</li>
          <li>Create Packages for future use</li>
          <li>Unit & Integration test for performance, capabilities.</li>
          <li>Write endpoints</li>
          <li>Stay up to date with current best practices</li>
        </ul>

        <h3 className="mt-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">
          Team Members
        </h3>
        <ul className="list-disc pl-4">
          <li>Orinayo Oyelade</li>
          <li>Victory Osikwheme</li>
          <li>Atul Kumar</li>
          <li>David Adeleye</li>
          <li>Andrew Ogaga</li>
          <li>Wilfred</li>
          <li>Peter Ogaga</li>
          <li>Micheal</li>
          <li>Juan Llerena</li>
        </ul>

        <h3 className="mt-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">
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
