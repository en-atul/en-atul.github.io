import React from "react";
import { Companies } from "./Companies";
import { Development } from "./Development";
import { Skills } from "./Skills";

export function Experience() {
  return (
    <section className="container mx-auto">
      <h1 className="text-center">Work Experience</h1>
      <Companies />
      <h1 className="text-center">Development Experience</h1>
      <Development />
      <h1 className="text-center">Skills</h1>
      <Skills />
    </section>
  );
}
