import React from "react";

const skills = [
  {
    label: "Reactjs",
  },
  {
    label: "React Native",
  },
  {
    label: "ReduxToolkit",
  },
  {
    label: "TailwindCSS",
  },
  {
    label: "Storybook",
  },
  {
    label: "rxjs",
  },
  {
    label: "Nextjs",
  },
  {
    label: "Nestjs",
  },
  {
    label: "Nodejs",
  },
  {
    label: "Jest",
  },
  {
    label: "Reactjs",
  },
  {
    label: "React Testing Library",
  },
  {
    label: "Typescript",
  },
  {
    label: "Firebase",
  },
  {
    label: "MongoDB",
  },
  {
    label: "React Packages",
  },
];

export function Skills() {
  return (
    <section className="my-8 grid grid-cols-6 gap-4">
      {skills.map((skill, idx) => (
        <article key={idx} className="px-4 py-2 border-l-2 border-gray-200 bg-gradient-to-r from-gray-100 to-gray-200">{skill.label}</article>
      ))}
    </section>
  );
}
