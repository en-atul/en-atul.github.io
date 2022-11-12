import Image from "next/image";
import React from "react";
import { DefaultLayout } from "../../components";
import Logo from "../../public/images/steinnlabs.jpeg";

import D1 from "../../public/images/app/steinnlabs/dope/1.png";
import D2 from "../../public/images/app/steinnlabs/dope/2.png";
import D3 from "../../public/images/app/steinnlabs/dope/3.png";
import D4 from "../../public/images/app/steinnlabs/dope/4.png";
import D5 from "../../public/images/app/steinnlabs/dope/5.png";
import D6 from "../../public/images/app/steinnlabs/dope/6.png";
import D7 from "../../public/images/app/steinnlabs/dope/7.png";
import D8 from "../../public/images/app/steinnlabs/dope/8.png";
import D9 from "../../public/images/app/steinnlabs/dope/9.png";
import D10 from "../../public/images/app/steinnlabs/dope/11.png";
import D11 from "../../public/images/app/steinnlabs/dope/12.png";
import D12 from "../../public/images/app/steinnlabs/dope/13.png";
import D13 from "../../public/images/app/steinnlabs/dope/14.png";

import DD15 from "../../public/images/app/steinnlabs/dope/15.png";
import DD16 from "../../public/images/app/steinnlabs/dope/16.png";
import DD17 from "../../public/images/app/steinnlabs/dope/17.png";
import DD18 from "../../public/images/app/steinnlabs/dope/18.png";
import DD19 from "../../public/images/app/steinnlabs/dope/19.png";
import DD20 from "../../public/images/app/steinnlabs/dope/20.png";
import DD21 from "../../public/images/app/steinnlabs/dope/21.png";
import DD22 from "../../public/images/app/steinnlabs/dope/22.png";
import DD23 from "../../public/images/app/steinnlabs/dope/23.png";
import DD24 from "../../public/images/app/steinnlabs/dope/24.png";
import DD25 from "../../public/images/app/steinnlabs/dope/25.png";

import S1 from "../../public/images/app/steinnlabs/supermanage/1.webp";
import S2 from "../../public/images/app/steinnlabs/supermanage/2.webp";
import S3 from "../../public/images/app/steinnlabs/supermanage/3.webp";
import S4 from "../../public/images/app/steinnlabs/supermanage/4.webp";
import S5 from "../../public/images/app/steinnlabs/supermanage/5.webp";
import S6 from "../../public/images/app/steinnlabs/supermanage/6.webp";
import S7 from "../../public/images/app/steinnlabs/supermanage/7.webp";
import S8 from "../../public/images/app/steinnlabs/supermanage/8.webp";

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

const supermanageApp = [
  {
    path: S1,
    title: "Dashboard",
  },
  {
    path: S2,
    title: "Appointment Duration",
  },
  {
    path: S3,
    title: "Select Provider for Appointment",
  },
  {
    path: S4,
    title: "Select Appointment Date",
  },
  {
    path: S5,
    title: "Appointment Booked",
  },
  {
    path: S6,
    title: "Upcoming Appointment",
  },
  {
    path: S7,
    title: "Appointment Call With Provider",
  },
  {
    path: S8,
    title: "Plans",
  },
];
const dopeApp = [
  {
    path: D1,
    title: "Login Page",
  },
  {
    path: D2,
    title: "Invite Admin Page",
  },
  {
    path: D3,
    title: "Policy Details & Update Page",
  },
  {
    path: D4,
    title: "Policy list & Create Page",
  },
  {
    path: D5,
    title: "Policy Assignment Page",
  },
  {
    path: D6,
    title: "Add Bypass Url Page",
  },
  {
    path: D7,
    title: "Imported Users/Groups Page",
  },
  {
    path: D8,
    title: "Custom Block Page Template",
  },
  {
    path: D9,
    title: "Default Block Page List",
  },
  {
    path: D10,
    title: "Overview Page",
  },
  {
    path: D11,
    title: "Shadow IT",
  },
  {
    path: D12,
    title: "Productivity Page",
  },
  {
    path: D13,
    title: "Policy Page",
  },
];

const dopeDetailsApp = [
  {
    path: DD15,
    title: "Login Page",
  },
  {
    path: DD16,
    title: "Invite Admin Page",
  },
  {
    path: DD17,
    title: "Policy Details & Update Page",
  },
  {
    path: DD18,
    title: "Policy list & Create Page",
  },
  {
    path: DD19,
    title: "Policy Assignment Page",
  },
  {
    path: DD20,
    title: "Add Bypass Url Page",
  },
  {
    path: DD21,
    title: "Imported Users/Groups Page",
  },
  {
    path: DD22,
    title: "Custom Block Page Template",
  },

  {
    path: DD23,
    title: "Overview Page",
  },
  {
    path: DD24,
    title: "Shadow IT",
  },
  {
    path: DD25,
    title: "Productivity Page",
  },
];
export default function Steinnlabs() {
  return (
    <DefaultLayout>
      <div className="container mx-auto p-10">
        <Image
          src={Logo}
          width={100}
          height={100}
          alt="steinnlabs logo"
          priority
          placeholder="blur"
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
          Services Provide by Steinnlabs
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
            <span className="flex">
              DOPE SECURITY |&nbsp;
              <a
                href="https://dope.security/"
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
                  <p>Website</p>
                </article>
              </a>
            </span>{" "}
            <p className="my-3 text-gray-700">
              Dope Security is a secure web gateway (SWG) app is designed to
              filter, or block access to harmful websites and applications per
              company policy.
            </p>
            <h3 className="mt-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">
              App Overview
            </h3>
            <section className="wrapper w-full flex flex-wrap gap-4 mt-4 justify-center">
              {dopeApp.map((s, idx) => (
                <article
                  key={idx}
                  className="item w-[30%] h-72 relative flex flex-col mb-7"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={s.path}
                      layout="fill"
                      alt={s.title}
                      quality={1}
                      placeholder="blur"
                    />
                  </div>
                  <p className="text-center my-3">{s.title}</p>
                </article>
              ))}
            </section>
            <section className="wrapper w-full flex flex-wrap gap-4 mt-4 justify-center">
              {dopeDetailsApp.map((s, idx) => (
                <article
                  key={idx}
                  className="item w-[30%] h-[500px] relative flex flex-col mb-7"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={s.path}
                      layout="fill"
                      alt={s.title}
                      quality={1}
                      placeholder="blur"
                    />
                  </div>
                  {/* <p className="text-center my-3">{s.title}</p> */}
                </article>
              ))}
            </section>
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
            <span className="flex">
              CHANNLWORKS |&nbsp;
              <a
                href="https://www.channlworks.com/"
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
                  <p>Website</p>
                </article>
              </a>
            </span>
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
              <li>Atul Kumar (Frontend Developer)</li>
              <li>Salman Khan (Backend Developer)</li>
              <li>Ashish choudhary (QA Engineer)</li>
            </ul>
          </li>
          <li>
            <span className="flex">
              Supermanage |&nbsp;
              <a
                href="https://play.google.com/store/apps/details?id=com.business.supermanage.android"
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
                  <p>Website</p>
                </article>
              </a>
            </span>
            <p className="my-3 text-gray-700">
              Supermanage is the all in one best free staff management solution
              for business. It offers a quick & easy way to record attendance,
              employee advances, overtime and remarks for your employees. Under
              the report section of the platform users of the platform can
              download all the reports related to payroll, advances, overtime
              and remarks in PDF and excel formats.
            </p>
            <h3 className="mt-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">
              App Overview
            </h3>
            <section className="w-full flex flex-wrap gap-4 mt-4 justify-center">
              {supermanageApp.map((s, idx) => (
                <article
                  key={idx}
                  className="w-[20%] h-[500px] relative flex flex-col mb-7"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={s.path}
                      layout="fill"
                      alt={s.title}
                      quality={1}
                    />
                  </div>
                  {/* <p className="text-center my-3">{s.title}</p> */}
                </article>
              ))}
            </section>
            <h3 className="mt-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-gray-500">
              Team Members
            </h3>
            <ul className="list-disc pl-4">
              <li>Atul Kumar (Frontend Developer)</li>
              <li>Santosh (Backend Developer)</li>
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
