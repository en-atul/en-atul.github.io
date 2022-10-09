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
    label: "ReduxToolkit",
    borderColor: "border-purple-500",
  },
  {
    label: "TailwindCSS",
    borderColor: "border-cyan-500",
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
    label: "Firebase Cloud Functions",
    borderColor: "border-yellow-500",
  },
  {
    label: "Nodejs",
    borderColor: "border-green-600",
  },
];

export default function MKILegal() {
  return (
    <DefaultLayout>
      <div className="container mx-auto p-10">
        <Image
          src="/images/mki-legal.jpeg"
          width={100}
          height={100}
          alt="wellnite logo"
        />
        <p className="mt-10 text-gray-700">
          MKI Legal is a law firm specialising in employment law and family law.
        </p>

        <h3 className="mt-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-gray-500">
          Facility Provides by MKI Legal
        </h3>
        <section className="flex justify-start items-center space-x-5 mt-4">
          <article className="px-4 py-1 rounded-full border border-gray-300">
            Helps Divorced/Separated Couples in Splitting Assets/Debts
          </article>
          <article className="px-4 py-1 rounded-full border border-gray-300">
            Helps in Creating Will & Cremations in Australia
          </article>
        </section>

        <h3 className="mt-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-gray-500">
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

        <h3 className="mt-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-gray-500">
          Team Members
        </h3>
        <ul className="list-disc pl-4">
          <li>Atul Kumar (FullStack Developer)</li>
        </ul>

        <h3 className="mt-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-gray-500">
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
