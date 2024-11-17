import React from "react";
import Image from "next/image";
import WebDevelopment from "../../../public/images/web_app_development.png";
import MobileAppDevelopment from "../../../public/images/mobile_app_development.png";
import BackendDevelopment from "../../../public/images/backend_development.png";
import E2ETesting from "../../../public/images/e2e_testing.png";

const companiesDetails = [
  {
    name: "Web Development",
    role: "Reactjs | ReduxToolkit | Typescript | Javascript | TailwindCSS | Web Accessibility | Next.js | rxjs",
    img: WebDevelopment,
    duartion: "Oct 2020 - Present ·",
  },
  {
    name: "Mobile Development",
    role: "React Native | ReduxToolkit | Typescript | Javascript",
    img: MobileAppDevelopment,
    duartion: "Mar 2021 - Jul 2022 ·",
  },
  {
    name: "Backend Development",
    role: "Nodejs | Nestjs | Typescript | Javascript",
    img: BackendDevelopment,
    duartion: "Apr 2021 - Jun 2022 ·",
  },
  {
    name: "Unit/Integration/E2E Testing",
    role: "Cypress | Detox | Jest | React Testing Library",
    img: E2ETesting,
    duartion: "Apr 2021 - Jun 2022 ·",
  },
];

export function Development() {
  return (
    <section className="flex flex-wrap justify-center gap-8 my-16">
      {companiesDetails.map((company, idx) => {
        return (
          <article
            key={idx}
            className="w-[30%] flex flex-col justify-center items-center p-10 bg-white border rounded-md"
          >
            <Image
              src={company.img}
              width={50}
              height={50}
              alt={company.name}
              priority
              placeholder="blur"
            />
            <h5 className="text-xl mt-5">{company.name}</h5>
            <p className="text-center mt-2">{company.role}</p>
          </article>
        );
      })}
    </section>
  );
}
