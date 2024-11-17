import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects = [
  {
    title: "Jira",
    type: "/images/web_app_development.png",
    description:
      "Jira is a project management tool used in software development to track issues, tasks, and bugs. It supports Agile methodologies like Scrum and Kanban, helping teams plan sprints and manage backlogs. Jira allows teams to customize workflows to fit their processes. It provides detailed reports for tracking progress and performance. Additionally, Jira integrates well with other tools like Bitbucket and Confluence.",
    thumbnail: "",
    appLink:
      "https://www.atlassian.com/software/jira/service-management?campaign=17879825186&adgroup=139892810296&targetid=kwd-337837004861&matchtype=p&network=g&device=c&device_model=&creative=688006323065&keyword=jira%20service&placement=&target=&ds_eid=700000001721198&ds_e1=GOOGLE&gad_source=1&gclid=Cj0KCQiArby5BhCDARIsAIJvjISMnqRvn_VQLmvk2YW5N6msY7LoReBZzlX_FWpRMmAy-LOhdpn-PqAaAsS3EALw_wcB",
    path: "",
  },
  {
    title: "Wellnite",
    type: "/images/web_app_development.png",
    description:
      "Wellnite Health is a mental health platform that offers accessible and personalized care, aiming to support individuals dealing with various challenges like anxiety, depression, and relationship issues. It provides services such as therapy sessions with licensed professionals and tools for tracking emotional well-being and mental health progress. Wellnite is designed to be flexible and affordable, with options for insurance coverage or out-of-pocket payment plans, making mental health care more reachable to a broader audience.",
    thumbnail: "",
    appLink: "https://www.wellnite.com/",
    path: "",
  },
  {
    title: "DOPE.SECURITY",
    type: "/images/web_app_development.png",
    description: `Dope Security offers a next-gen Secure Web Gateway (SWG) that works directly on user devices, without using data centers. It provides faster, efficient security features like on-device SSL inspection and URL filtering. This setup keeps data secure and private, while also optimizing performance. It’s designed for both Mac and Windows, using minimal system resources. All security policies and monitoring can be managed from a central cloud console.`,
    thumbnail: "",
    appLink: "https://dope.security/",
    path: "",
  },
  {
    title: "Estate",
    type: "/images/web_app_development.png",
    description: `Estate Plus helps With Probate, Letters of Admininstration Creating Your Will & Cremations in Australia. It comes with two app versions web and mobile.`,
    thumbnail: "",
    appLink: "https://www.estatesplus.com.au/",
    path: "",
  },
  {
    title: "Supermanage",
    type: "/images/mobile_app_development.png",
    description: `Supermanage is the all in one best free staff management solution for business.
    It offers a quick & easy way to record attendance, employee advances, overtime and remarks for your employees.
    Under the report section of the platform users of the platform can download all the reports related to payroll, advances, overtime and remarks in PDF and excel formats.`,
    thumbnail: "",
    appLink:
      "https://play.google.com/store/apps/details?id=com.business.supermanage.android",
    path: "",
  },
  // {
  //   title: "What Are Odds",
  //   type: "/images/mobile_app_development.png",
  //   description:
  //     "It's a game app where opponent has to complete the challenge, if he lost",
  //   thumbnail: "",
  //   appLink: "",
  //   path: "",
  // },
  {
    title: "Family Law Assist",
    type: "/images/web_app_development.png",
    description:
      "Family Law Assist helps Australian people settle the assets & debts, between the partners after divorce. It provides services like consent orders, legal representation, and negotiation.",
    thumbnail: "",
    appLink: "https://online.familylawassist.com.au",
    path: "",
  },
  {
    title: "Resolvy",
    type: "/images/web_app_development.png",
    description:
      "Resolvy helps separated and divorced couples to understand the options about splitting assets, dividing the family home, superannuation, sharing custody of your children and much more.",
    thumbnail: "",
    appLink: "https://www.resolvy.com.au/",
    path: "",
  },

  {
    title: "Satoshi Solutions",
    type: "/images/web_app_development.png",
    description: `Satoshi Solutions is a global recruitment company focused on blockchain talent, serving both startups and large enterprises. They specialize in connecting businesses with skilled professionals to meet technical needs. Their mission is to become the leading blockchain recruitment firm worldwide.`,
    thumbnail: "",
    appLink: "https://satoshisolutions.xyz/",
    path: "",
  },
  {
    title: "Paribesh",
    type: "/images/mobile_app_development.png",
    description: `It's a mobile app which gives news about environment status (i.e. air pollution, water pollution and noise pollution) and any environment initiative. `,
    thumbnail: "",
    appLink:
      "https://play.google.com/store/apps/details?id=in.gov.wbpcb.paribeshapp",
    path: "",
  },
];

export function Projects() {
  return (
    <section id="projects" className="container mx-auto my-16">
      <h2 className="text-center">Projects</h2>
      <section className="my-16 grid grid-cols-3 gap-4">
        {projects.map((p, idx) => (
          <article key={idx} className="bg-white p-10 border rounded-md">
            <div className="flex justify-between ">
              <p className="text-xl">{p.title}</p>
              <Image
                src={p.type}
                width={25}
                height={25}
                alt={p.title}
                priority
              />
            </div>

            <p className="text-gray-500 mt-4">{p.description}</p>

            <div className="flex items-center space-x-3">
              {p.appLink ? (
                <a
                  href={p.appLink}
                  className="mt-4 text-blue-500 font-light transition-all border-b border-white hover:border-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go to App
                </a>
              ) : null}
              <Link href="">
                <p className="mt-4 text-blue-500 font-light border-b border-white hover:border-blue-500 cursor-pointer">
                  More Details
                </p>
              </Link>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
}
