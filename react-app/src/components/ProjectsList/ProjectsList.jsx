import React from "react";
import styles from "./ProjectsList.module.css";
import Project from "../Project/Project";

const projectsList = [
  {
    name: "Clubannounce",
    githubLink: "https://github.com/acmcsufoss/clubannounce",
    imageSource: "/assets/projects/clubannounce.png",
    techStack: ["SvelteKit", "TypeScript", "Sass", "Figma", "API"],
    description: "A nice little project",
  },
  {
    name: "Devdle",
    githubLink: "https://github.com/tomasohCHOM/Devdle",
    imageSource: "/assets/projects/devdle.png",
    techStack: ["SvelteKit", "TypeScript", "Sass", "Supabase", "OAuth"],
    description: "A nice little project",
  },
  {
    name: "MatriXpert",
    githubLink: "https://github.com/tomasohCHOM/MatriXpert",
    imageSource: "/assets/projects/matrixpert.png",
    techStack: ["React", "React Router", "Sass", "Katex", "Vitest"],
    description: "A nice little project",
  },
  {
    name: "CanvasFindPeople",
    githubLink: "https://github.com/tomasohCHOM/CanvasFindPeople",
    imageSource: "/assets/projects/canvas-find-people.png",
    techStack: ["Python", "SQLite", "Discord API", "Canvas API"],
    description: "A nice little project",
  },
];

export default function ProjectsList() {
  return (
    <section>
      <h2 className={styles.sectionTitle}>Projects</h2>
      <div className={styles.projectsListContainer}>
        {projectsList.map((project, key) => (
          <Project
            key={key}
            projectName={project.name}
            imageSource={project.imageSource}
            projectTechStack={project.techStack}
            projectDescription={project.description}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
}
