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
    <section className={styles.skillsSection}>
      <h2 id="skills" className="sectionTitle">
        Skills
      </h2>
      <div className={styles.skillsContainer}>
        <h3 className={styles.sectionSubtitle}>Programming</h3>
        <div>
          {programmingSkills.map((skill, key) => {
            return (
              <img
                key={key}
                src={`/assets/skills/${skill}-icon.png`}
                alt={skill + " icon"}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.skillsContainer}>
        <h3 className={styles.sectionSubtitle}>Frameworks</h3>
        <div>
          {frameworkSkills.map((skill, key) => {
            return (
              <img
                key={key}
                src={`/assets/skills/${skill}-icon.png`}
                alt={skill + " icon"}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
