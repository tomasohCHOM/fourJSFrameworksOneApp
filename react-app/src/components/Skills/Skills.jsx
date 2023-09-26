import React from "react";
import styles from "./Skills.module.css";

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
      <h2 className={styles.subtitle}>Skills</h2>
      <div className={styles.programmingSkillsContainer}>
        <h3>Programming</h3>
        {programmingSkills.map((skill, key) => {
          // console.log(`../../assets/skills/${skill}-icon.png`);
          return (
            <img
              key={key}
              src={`/assets/skills/${skill}-icon.png`}
              alt={skill + " icon"}
            />
          );
        })}
      </div>
      <div className={styles.frameworkSkillsContainer}>
        <h3>Framework</h3>
        {frameworkSkills.map((skill, key) => {
          // console.log(`../../assets/skills/${skill}-icon.png`);
          return (
            <img
              key={key}
              src={`/assets/skills/${skill}-icon.png`}
              alt={skill + " icon"}
            />
          );
        })}
      </div>
    </section>
  );
}
