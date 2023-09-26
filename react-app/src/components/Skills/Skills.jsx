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
        {programmingSkills.map((skill, key) => {
          console.log(`../../assets/skills/${skill}-icon.png`);
          return (
            <img
              key={key}
              src={`../../assets/skills/${skill}-icon.png`}
              alt={skill + " icon"}
            />
          );
        })}
      </div>
    </section>
  );
}
