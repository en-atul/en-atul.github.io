import React from "react";

export function CurrentlyAt() {
  return (
    <section className="flex flex-col justify-center items-center py-32">
      <h1 className="font-sans text-6xl leading-[70px] font-light capitalize text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-black">
        Software Engineer
      </h1>
      <p className="text-black text-sm md:text-xl text-center mt-12">
        Currently → <span>Engineer</span> @&nbsp;
        <span className="bg-blue-600 text-white px-5 py-1">Wellnite</span>
      </p>
      <p className="max-w-3xl mx-auto mt-5 text-center">
        Software Engineer, currently working with Wellnite Health Inc. in the
        area of web development & Mobile application development using react.
        Graduated from Bengal college of engineering and technology Integrated
        Bachelors course of Computer science which has prepared me for a career
        in the field of IT. I&apos;m a fast learner and can easily adapt to any
        work environment and always want to be a part of a company that values
        quality, performance and ethics. I believe this would help me explore
        new avenues and allow myself to build an experience for a long time.
      </p>
    </section>
  );
}
