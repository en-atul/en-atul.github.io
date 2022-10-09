import React from "react";
import Image from "next/image";

const companiesDetails = [
  {
    name: "Web App Development",
    role: "Reactjs | ReduxToolkit | Typescript | Javascript | TailwindCSS | Web Accessibility | Next.js | rxjs",
    img: "/images/web_app_development.png",
    duartion: "Oct 2020 - Present ·",
  },
  {
    name: "Mobile App Development",
    role: "React Native | ReduxToolkit | Typescript | Javascript",
    img: "/images/mobile_app_development.png",
    duartion: "Mar 2021 - Jul 2022 ·",
  },
  {
    name: "Backend Development",
    role: "Nodejs | Nestjs | Typescript | Javascript",
    img: "/images/backend_development.png",
    duartion: "Apr 2021 - Jun 2022 ·",
  },
  {
    name: "E2E Testing",
    role: "Jest | React Testing Library",
    img: "/images/e2e_testing.png",
    duartion: "Apr 2021 - Jun 2022 ·",
  },
];

export function Development() {
  return (
    <section className="grid grid-cols-3 gap-8 my-16">
      {companiesDetails.map((company, idx) => {
        return (
          <article
            key={idx}
            className="col-span-1 flex flex-col justify-center items-center p-10 bg-white shadow-sm"
          >
            <Image src={company.img} width={50} height={50} alt={company.img} />
            <p className="text-xl mt-5">{company.name}</p>
            <p className="text-center mt-2">{company.role}</p>
          </article>
        );
      })}
    </section>
  );
}
