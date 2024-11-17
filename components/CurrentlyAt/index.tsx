import React from "react";
import epam from "../../public/images/epam-h.png";
import Image from "next/image";

export function CurrentlyAt() {
  return (
    <section className="flex flex-col justify-center items-center py-32">
      <h1 className="font-sans text-6xl leading-[70px] font-light capitalize text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-black">
        Software Engineer
      </h1>
      <div className="text-black text-sm md:text-xl text-center mt-12 flex items-center">
        Currently&nbsp;→&nbsp;<span>Engineer</span> @&nbsp;
        <span className="relative pt-3">
          <Image
            src={epam}
            width={100}
            height={50}
            alt="epam logo"
            className="h-fit"
          />
        </span>
        {/* <span className="bg-[#cbfa12] px-5 py-1">Epam</span> */}
        {/* <span className="bg-[#0b66e4] px-5 py-1 text-white">Atlassian</span> */}
      </div>
      <p className="max-w-3xl mx-auto mt-5 text-center">
        Software Engineer at Epam and have a strong focus on both web and mobile
        applications using Javascript with 4+ years experience. Graduated from a
        Bachelor&apos;s course in Computer Science, which has equipped me with
        the necessary skills for a successful career in the IT field. I am a
        fast learner and can easily adapt to different work environments. I am
        always seeking to be part of a company that values quality, performance,
        and ethics. I believe this will enable me to explore new opportunities
        and build long-lasting experience.
        <br />
        <br />
        Extensive experience includes working with a wide range of technologies,
        including Javascript, Typescript, Reactjs, React Native, Redux toolkit,
        Rxjs, Nodejs, MongoDB, Jest, Nextjs, NestJS, GraphQL, and Firebase. This
        expertise has enabled me to create high-quality, scalable, and reliable
        applications that meet the unique requirements of our clients.
      </p>
    </section>
  );
}
