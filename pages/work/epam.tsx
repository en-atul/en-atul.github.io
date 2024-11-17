import Image from "next/image";
import React from "react";
import { DefaultLayout } from "../../components";
import Logo from "../../public/images/epam.png";
import Atlassian from "../../public/images/atlassian.png";
import Jira from "../../public/images/jira.png";

import W1 from "../../public/images/app/wellnite/1.webp";
import W2 from "../../public/images/app/wellnite/2.webp";
import W3 from "../../public/images/app/wellnite/3.webp";
import W4 from "../../public/images/app/wellnite/4.webp";
import W5 from "../../public/images/app/wellnite/5.webp";
import W6 from "../../public/images/app/wellnite/6.webp";
import W7 from "../../public/images/app/wellnite/7.webp";
import W8 from "../../public/images/app/wellnite/8.webp";

const skills = [
  {
    label: "Reactjs",
    borderColor: "border-cyan-500",
  },
  {
    label: "CSS/Compiled CSS",
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
    label: "Cypress",
    borderColor: "border-black",
  },
  {
    label: "Storybook",
    borderColor: "border-pink-500",
  },
  {
    label: "GraphQL",
    borderColor: "border-pink-500",
  },
  {
    label: "rxjs",
    borderColor: "border-pink-500",
  },
];

const app = [
  {
    path: W1,
    title: "Dashboard",
  },
  {
    path: W2,
    title: "Appointment Duration",
  },
  {
    path: W3,
    title: "Select Provider for Appointment",
  },
  {
    path: W4,
    title: "Select Appointment Date",
  },
  {
    path: W5,
    title: "Appointment Booked",
  },
  {
    path: W6,
    title: "Upcoming Appointment",
  },
  {
    path: W7,
    title: "Appointment Call With Provider",
  },
  {
    path: W8,
    title: "Plans",
  },
];

export default function Wellnite() {
  return (
    <DefaultLayout>
      <div className="container mx-auto p-10">
        <div className="w-fit flex items-center mb-2">
          <Image
            src={Logo}
            width={120}
            height={120}
            alt="Epam logo"
            priority
            placeholder="blur"
          />
          <p className="mx-5 text-3xl">→</p>
          <Image
            src={Atlassian}
            width={120}
            height={120}
            alt="Atlassian logo"
            priority
            placeholder="blur"
            className="ml-3"
          />
        </div>
        <a
          href="https://www.epam.com/"
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
            <p>Epam&apos;s Website</p>
          </article>
        </a>

        <p className="mt-10 text-gray-700">
          In April, I joined EPAM Systems through Epam Anywhere program, a
          global service-based company, as a Senior Software Engineer.
          Subsequently, I transitioned to{" "}
          <span className="bg-[#0b66e4] px-2 py-1 text-white">Atlassian</span> ,
          taking up the role of Senior Software Engineer for the Jira{" "}
          <span>
            <Image
              src={Jira}
              width={20}
              height={20}
              alt="jira"
              priority
              placeholder="blur"
            />
          </span>{" "}
          Project, specifically contributing to the &quot;Eng - Application
          Framework&quot; team (UI Platform Department) focused on performance
          optimization.
        </p>

        <h3 className="mt-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">
          My Responsibilities
        </h3>
        <ul className="list-disc pl-4">
          <li>
            <span className="font-semibold">Feature Flag Implementation</span>:
            Integrated feature flags to safely deploy changes. This ensured that
            any unexpected issues could be quickly mitigated by reverting to the
            previous stable state.
          </li>
          <li>
            <span className="font-semibold">Controlled Rollouts</span>: Managed
            changes using a gradual rollout strategy, starting with a 10%
            release on the first day and scaling up incrementally. This phased
            approach helped identify potential problems early on.
          </li>
          <li>
            <span className="font-semibold">Monitoring and Metrics</span>:
            Actively monitored the impact of changes through performance metrics
            using tools like Splunk and Sentry, ensuring improvements met
            performance goals.
          </li>
          <li>
            <span className="font-semibold">Feature Flag Maintenance</span>:
            Conducted periodic cleanups of obsolete feature flags to maintain
            codebase clarity and efficiency.
          </li>
        </ul>

        <h3 className="mt-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">
          Team Members
        </h3>
        <ul className="list-disc pl-4">
          <li>Patrick Huang</li>
          <li>Anubhav Pilani</li>
          <li>Deepak Venkatesh</li>
          <li>Shucheng Cui</li>
          <li>Jessi Bells</li>
          {/* <li>Jack Brown</li> */}
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
