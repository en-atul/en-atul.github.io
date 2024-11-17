import Image from "next/image";
import Link from "next/link";
import React from "react";
import { dateDiff } from "../../../utils";
import steinnlabs from "../../../public/images/steinnlabs.jpeg";
import wellnite from "../../../public/images/wellnite.png";
import distronix from "../../../public/images/distronix.jpeg";
import mki_legal from "../../../public/images/mki-legal.jpeg";
import epam from "../../../public/images/epam.png";

const companiesDetails = [
  {
    name: "Epam",
    img: epam,
    role: "Senior Software Engineer",
    duration: "April 2024 - Present ·",
    startDate: new Date("04-01-2024"),
    endDate: new Date(),
    path: "/work/epam",
    dimension: {
      width: 80,
      height: 80,
    },
  },
  {
    name: "Wellnite",
    img: wellnite,
    role: "Software Engineer",
    duration: "Oct 2020 - Mar 2024 ·",
    startDate: new Date("10-01-2020"),
    endDate: new Date("03-30-2024"),
    path: "/work/wellnite",
    dimension: {
      width: 60,
      height: 50,
    },
  },
  {
    name: "Steinnlabs",
    img: steinnlabs,
    role: "FullStack Developer",
    duration: "Mar 2021 - Jul 2022 ·",
    startDate: new Date("03-01-2021"),
    endDate: new Date("07-31-2022"),
    path: "/work/steinnlabs",
    dimension: {
      width: 50,
      height: 50,
    },
  },
  {
    name: "MKI Legal",
    img: mki_legal,
    role: "Software Developer | Freelance",
    duration: "Apr 2021 - Jun 2022 ·",
    startDate: new Date("04-01-2020"),
    endDate: new Date("06-30-2021"),
    path: "/work/mki-legal",
    dimension: {
      width: 70,
      height: 70,
    },
  },
  {
    name: "Distronix",
    img: distronix,
    role: "Frontend Developer",
    duration: "Jun 2020 - Sep 2020 ·",
    startDate: new Date("06-01-2020"),
    endDate: new Date("09-30-2020"),
    path: "/work/distronix",
    dimension: {
      width: 100,
      height: 100,
    },
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
    <section
      id="experience"
      className="flex flex-wrap justify-center gap-8 my-16"
    >
      {companiesDetails.map((company, idx) => {
        const { months, years } = dateDiff(company.startDate, company.endDate);

        return (
          <article
            key={idx}
            className="w-[30%] flex flex-col justify-center items-center p-10 bg-white border rounded-md"
          >
            <Image
              src={company.img}
              width={company.dimension.width}
              height={company.dimension.height}
              alt={company.img.src}
              className={
                company.duration.includes("Present") ? "" : "grayscale"
              }
              style={{ objectFit: "contain" }}
            />

            <p className="text-xl font-semibold mt-5">{company.name}</p>
            <p>{company.role}</p>
            <p>
              {company.duration} {formatDateString(years, months)}
            </p>

            <Link href={company.path}>
              <p className="mt-4 text-blue-500 font-light border-b border-blue-500 cursor-pointer">
                More Details
              </p>
            </Link>
          </article>
        );
      })}
    </section>
  );
}
