import Image from "next/image";
import React from "react";
import Building from "../../public/images/building.png";

const education = [
  {
    degree: "Bachelor In Computer Science",
    from: "Maulana Abul Kalam Azad University of Technology",
    year: "2020",
  },
  {
    degree: "Senior Secondary School",
    from: "Millia Convent School",
    year: "2015",
  },
  {
    degree: "Secondary School",
    from: "St. Joseph's School",
    year: "2013",
  },
];

export function About() {
  return (
    <section id="about" className="container mx-auto my-16">
      <h2 className="text-center">About/Education</h2>
      <section className="container mx-auto grid grid-cols-3 gap-8 my-8">
        {education.map((company, idx) => {
          return (
            <article
              key={idx}
              className="col-span-1 flex flex-col justify-center items-center p-10 bg-white border rounded-md"
            >
              <Image
                src={Building}
                width={50}
                height={50}
                alt={company.degree}
                priority
                placeholder="blur"
              />

              <h5 className="text-xl text-center mt-5">{company.degree}</h5>
              <p className="text-center">{company.from}</p>
              <p className="text-center">Completed In {company.year}</p>
            </article>
          );
        })}
      </section>
    </section>
  );
}
