import React from "react";

const skills = [
  {
    label: "Reactjs",
    borderColor: "border-cyan-500",
  },
  {
    label: "React Native",
    borderColor: "border-cyan-500",
  },
  {
    label: "ReduxToolkit",
    borderColor: "border-purple-500",
  },
  {
    label: "TailwindCSS",
    borderColor: "border-cyan-500",
  },
  {
    label: "Jest",
    borderColor: "border-red-800",
  },
  {
    label: "React Testing Library",
    borderColor: "border-red-500",
  },
  {
    label: "Typescript",
    borderColor: "border-blue-500",
  },
  {
    label: "Javascript",
    borderColor: "border-yellow-500",
  },
  {
    label: "Firebase",
    borderColor: "border-yellow-500",
  },
  {
    label: "MongoDB",
    borderColor: "border-green-500",
  },
  {
    label: "Storybook",
    borderColor: "border-pink-500",
  },

  {
    label: "Nextjs",
    borderColor: "border-black",
  },
  {
    label: "rxjs",
    borderColor: "border-pink-500",
  },
  {
    label: "Nestjs",
    borderColor: "border-pink-500",
  },
  {
    label: "Nodejs",
    borderColor: "border-green-600",
  },

  {
    label: "NPM Packages",
    borderColor: "border-red-500",
  },
  {
    label: "Detox",
    borderColor: "border-blue-500",
  },
];

export function Skills() {
  return (
    <section className="my-16 flex flex-wrap justify-center gap-4">
      {skills.map((skill, idx) => (
        <article
          key={idx}
          className={`px-4 py-2 w-[15%] border-l-2 ${skill.borderColor} bg-white shadow-sm`}
        >
          {skill.label}
        </article>
      ))}
    </section>
  );
}
