import Image from "next/image";
import Link from "next/link";
import React from "react";
import { dateDiff } from "../../../utils";

const companiesDetails = [
  {
    name: "Wellnite",
    img: "/images/wellnite.jpeg",
    role: "Software Engineer",
    duartion: "Oct 2020 - Present ·",
    startDate: new Date("10-01-2020"),
    endDate: new Date(),
    path: "/work/wellnite",
  },
  {
    name: "Steinnlabs",
    img: "/images/steinnlabs.jpeg",
    role: "FullStack Developer",
    duartion: "Mar 2021 - Jul 2022 ·",
    startDate: new Date("03-01-2021"),
    endDate: new Date("07-31-2022"),
    path: "/work/steinnlabs",
  },
  {
    name: "MKI Legal",
    img: "/images/mki_legal.jpeg",
    role: "Software Developer | Freelance",
    duartion: "Apr 2021 - Jun 2022 ·",
    startDate: new Date("04-01-2020"),
    endDate: new Date("06-30-2021"),
    path: "/work/mki-legal",
  },
  {
    name: "Distronix",
    img: "/images/distronix.jpeg",
    role: "Frontend Developer",
    duartion: "Jun 2020 - Sep 2020 ·",
    startDate: new Date("06-01-2020"),
    endDate: new Date("09-30-2020"),
    path: "/work/distronix",
  },
];

const formatDateString = (y: number, m: number) => {
  if (y > 1 && m > 1) return `${y} yrs ${m} mos`;
  else if (y > 1 && m === 1) return `${y} yrs ${m} mo`;
  else if (y > 1 && m === 0) return `${y} yrs`;
  else if (y === 1 && m === 1) return `${y} yr ${m} mo`;
  else if (y === 1 && m > 1) return `${y} yr ${m} mos`;
  else if (y === 1 && m === 0) return `${y} yr`;
  else if (y === 0 && m > 1) return `${m} mos`;
  else if (y === 0 && m === 1) return `${m} mo`;
  else return ``;
};

export function Companies() {
  return (
    <section className="grid grid-cols-3 gap-8 my-16">
      {companiesDetails.map((company, idx) => {
        const { months, years } = dateDiff(company.startDate, company.endDate);

        return (
          <article
            key={idx}
            className="col-span-1 flex flex-col justify-center items-center p-10 bg-white shadow-sm"
          >
            {/* <Image
              src={company.img}
              width={30}
              height={30}
              alt={company.img}
              className="grayscale"
            /> */}

            <p className="text-xl mt-5">{company.name}</p>
            <p>{company.role}</p>
            <p>
              {company.duartion} {formatDateString(years, months)}
            </p>

            <Link href={company.path}>
              <p className="mt-4 text-blue-500 font-light border-b border-white hover:border-blue-500 cursor-pointer">
                More Details
              </p>
            </Link>
          </article>
        );
      })}
    </section>
  );
}
