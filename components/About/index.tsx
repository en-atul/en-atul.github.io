import Image from "next/image";
import React from "react";
import { dateDiff } from "../../utils";

const companiesDetails = [
  {
    name: "Bachelor In Computer Science",
    role: "Bengal College of Engineering & Technology",
    duartion: "2020",
  },
  {
    name: "Higher Secondary School",
    role: "Millia Convent School",
    duartion: "2015",
  },
  {
    name: "High School",
    role: "St. Joseph's School",
    duartion: "2013",
  },
];

export function About() {
  return (
    <section className="container mx-auto my-8">
      <h1 className="text-center">About</h1>
      <section className="container mx-auto grid grid-cols-3 gap-8 my-8">
        {companiesDetails.map((company, idx) => {
          return (
            <article
              key={idx}
              className="col-span-1 flex flex-col justify-center items-center p-10 bg-white"
            >
              <Image
                src="/images/building.png"
                width={50}
                height={50}
                alt={company.name}
              />

              <p className="text-xl mt-5">{company.name}</p>
              <p>{company.role}</p>
              <p>Completed In {company.duartion}</p>
            </article>
          );
        })}
      </section>
    </section>
  );
}
