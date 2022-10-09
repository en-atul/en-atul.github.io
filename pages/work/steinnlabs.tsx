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

export default function Steinnlabs() {
  return (
    <DefaultLayout>
      <div className="container mx-auto p-10">
        <Image
          src="/images/steinnlabs.jpeg"
          width={100}
          height={100}
          alt="wellnite logo"
        />
        <a
          href="https://www.steinnlabs.com/"
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
            <p>Steinnlabs Website</p>
          </article>
        </a>
        <p className="mt-10 text-gray-700">
          Steinnlabs is a full-service product engineering agency, which helps
          connecting businesses with software engineers, designers, finance
          experts, product managers, and project managers.
        </p>

        <h3 className="mt-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-gray-500">
          Facility Provides by Steinnlabs
        </h3>
        <section className="flex justify-start items-center space-x-5 mt-4">
          <article className="px-4 py-1 rounded-full border border-gray-300">
            Web App Development
          </article>
          <article className="px-4 py-1 rounded-full border border-gray-300">
            Mobile App Development
          </article>
          <article className="px-4 py-1 rounded-full border border-gray-300">
            UI/UX Design
          </article>
          <article className="px-4 py-1 rounded-full border border-gray-300">
            Quality Assurance
          </article>
        </section>

        <h3 className="mt-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-gray-500">
          My Responsibilities
        </h3>
        <ul className="list-disc pl-4">
          <li>Write Reusable UI Components for web and mobile application</li>
          <li>
            Write Unit & Integration test for best performance, environment,
            user interaction
          </li>
          <li>Applying best practices and standard operating procedures</li>
          <li>fix critical bugs</li>
          <li>
            Prepares and installs solutions by determining and designing system
            specifications, standards, and programming
          </li>
          <li>
            Integrate software components into a fully functional software
            system
          </li>
          <li>Developing features to enhance the user experience</li>
          <li>write Endpoint</li>
          <li>Unit & Integration test for performance, capabilities.</li>
          <li>interact with client for the requirements</li>
          <li>Comply with project plans and industry standards</li>
        </ul>

        <h1 className="mt-8 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-gray-500">
          Projects
        </h1>
        <ul className="list-decimal pl-7 mt-4 space-y-5">
          <li>
            DOPE SECURITY
            <p className="my-3 text-gray-700">
              Dope Security is a secure web gateway (SWG) app is designed to
              filter, or block access to harmful websites and applications per
              company policy.
            </p>
            <h3 className="mt-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-gray-500">
              Team Members
            </h3>
            <ul className="list-disc pl-4">
              <li>Atul Kumar (Lead Frontend Developer)</li>
              <li>Pranav Borole (Frontend Developer)</li>
              <li>Krishna Sapkal (Frontend Developer)</li>
              <li>Srinija Patnala (Frontend Developer)</li>
              <li>Gaurav (Frontend Developer)</li>
              <li>Abhishek Muley (Product Manager)</li>
              <li>Sunil Kumar (Cloud Engineering)</li>
              <li>Sandeep Mandge (Engineering Operations)</li>
              <li>Erica Remmele (UI/UX)</li>
            </ul>
          </li>
          <li>
            CHANNLWORKS
            <p className="my-3 text-gray-700">
              ChannlWorks is a SaaS platform, built grounds up specifically for
              your alliance management needs. Use ChannlWorks to efficiently
              monitor and manage your Principal relationships; from Principal
              Tiers to MDF Funds, deal registration, payables & receivables,
              compliance, and much more.
            </p>
            <h3 className="mt-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-gray-500">
              Team Members
            </h3>
            <ul className="list-disc pl-4">
              <li>Atul Kumar (Lead Frontend Developer)</li>
              <li>Salman Khan (Backend Developer)</li>
              <li>Ashish choudhary (QA Engineer)</li>
            </ul>
          </li>
          <li>
            Supermanage
            <p className="my-3 text-gray-700">
              Supermanage is the all in one best free staff management solution
              for business. It offers a quick & easy way to record attendance,
              employee advances, overtime and remarks for your employees. Under
              the report section of the platform users of the platform can
              download all the reports related to payroll, advances, overtime
              and remarks in PDF and excel formats.
            </p>
            <h3 className="mt-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-gray-500">
              Team Members
            </h3>
            <ul className="list-disc pl-4">
              <li>Atul Kumar (Lead Frontend Developer)</li>
            </ul>
          </li>
        </ul>

        <h3 className="mt-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-gray-500">
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
