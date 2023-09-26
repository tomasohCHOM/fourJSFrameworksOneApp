import React from "react";

export default function Skills() {
  const programmingSkills = [
    "cpp",
    "python",
    "typescript",
    "javascript",
    "html",
    "css",
    "java",
  ];

  const frameworkSkills = [
    "react",
    "next",
    "node",
    "svelte",
    "sass",
    "tailwind",
  ];

  return (
    <section>
      <h2>Skills</h2>
      <div>
        {programmingSkills.map((skill) => {
          console.log(skill);
          return (
            <img src={`assets/skills/${skill}.png`} alt={skill + " icon"} />
          );
        })}
      </div>
    </section>
  );
}
