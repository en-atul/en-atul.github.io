import React from "react";
import { Companies } from "./Companies";
import { Development } from "./Development";
import { Skills } from "./Skills";

export function Experience() {
  return (
    <section className="container mx-auto">
      <h2 className="text-center">Work Experience</h2>
      <Companies />
      <h2 className="text-center mt-8">Development Experience</h2>
      <Development />
      <h2 className="text-center mt-8">Skills</h2>
      <Skills />
    </section>
  );
}
