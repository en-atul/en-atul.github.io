import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects = [
  {
    title: "What Are Odds",
    type: "/images/mobile_app_development.png",
    description:
      "It's a game app where opponent has to complete the challenge, if he lost",
    thumbnail: "",
    appLink: "",
    path: "",
  },
  {
    title: "Wellnite",
    type: "/images/web_app_development.png",
    description:
      "Wellnite is a mental health app which helps people to overcome anxiety & depression",
    thumbnail: "",
    appLink: "https://www.wellnite.com/",
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
    title: "DOPE SECURITY",
    type: "/images/web_app_development.png",
    description: `Dope Security is a secure web gateway (SWG) app is designed to filter, or block access to harmful websites and applications per company policy.`,
    thumbnail: "",
    appLink: "https://dope.security/",
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
  {
    title: "Satoshi Solutions",
    type: "/images/web_app_development.png",
    description: `Satoshi Solutions is a crypto specialist recruitment app.`,
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
      <h1 className="text-center">Projects</h1>
      <section className="my-16 grid grid-cols-3 gap-4">
        {projects.map((p, idx) => (
          <article key={idx} className="bg-white p-10">
            <div className="flex justify-between ">
              <p className="text-xl">{p.title}</p>
              <Image src={p.type} width={25} height={25} alt={p.title} />
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
