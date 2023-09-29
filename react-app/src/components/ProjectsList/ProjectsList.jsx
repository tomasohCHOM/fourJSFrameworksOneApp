import React from "react";
import styles from "./ProjectsList.module.css";
import Project from "../Project/Project";

const projectsList = [
  {
    projectName: "Clubannounce",
    projectImageSource: "/assets/projects/clubannounce.png",
    projectTechStack: ["SvelteKit", "TypeScript", "Sass", "Figma", "API"],
    projectDescription: "A nice little project",
  },
];

export default function ProjectsList() {
  return (
    <section>
      <h2>Projects</h2>
      <div className={styles.projectsListContainer}>
        {projectsList.map((project, key) => (
          <Project
            key={key}
            projectName={project.projectName}
            imageSource={project.projectImageSource}
            projectTechStack={project.projectTechStack}
            projectDescription={project.projectDescription}
          />
        ))}
      </div>
    </section>
  );
}
