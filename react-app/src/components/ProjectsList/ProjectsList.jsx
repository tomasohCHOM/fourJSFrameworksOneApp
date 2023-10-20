import React from "react";
import styles from "./ProjectsList.module.css";
import Project from "../Project/Project";

const projectsList = [
  {
    name: "Clubannounce",
    demoLink: "",
    githubLink: "https://github.com/acmcsufoss/clubannounce",
    imageSource: "/assets/projects/clubannounce.png",
    techStack: ["SvelteKit", "TypeScript", "Sass", "Figma", "API"],
    description:
      "A Web page aimed to speed the process of creating new announcements and events within ACM, the largest Computer Science club at Cal State Fullerton.",
  },
  {
    name: "Devdle",
    demoLink: "https://devdlegame.vercel.app",
    githubLink: "https://github.com/tomasohCHOM/Devdle",
    imageSource: "/assets/projects/devdle.png",
    techStack: ["SvelteKit", "TypeScript", "Sass", "Supabase", "OAuth"],
    description:
      "A Wordle clone based on Computer Science/Web Development concepts. Its goal is to entertain and educate users who want to get into the Software Engineering field.",
  },
  {
    name: "MatriXpert",
    demoLink: "https://matrixpert.netlify.app",
    githubLink: "https://github.com/tomasohCHOM/MatriXpert",
    imageSource: "/assets/projects/matrixpert.png",
    techStack: ["React", "React Router", "Sass", "Katex", "Vitest"],
    description:
      "A Matrix calculator website that supports operations such as Matrix multiplication, transpose, determinant, and REF/RREF.",
  },
  {
    name: "CanvasFindPeople",
    demoLink: "",
    githubLink: "https://github.com/tomasohCHOM/CanvasFindPeople",
    imageSource: "/assets/projects/canvas-find-people.png",
    techStack: ["Python", "SQLite", "Discord Bot", "Canvas API"],
    description:
      "A Discord bot made in Python that makes use of the Canvas API to search for users in Canvas courses.",
  },
];

export default function ProjectsList() {
  return (
    <section>
      <h2 id="projects" className="sectionTitle m-end">
        Projects
      </h2>
      <div className={styles.projectsListContainer}>
        {projectsList.map((project, key) => (
          <Project
            key={key}
            projectName={project.name}
            imageSource={project.imageSource}
            projectTechStack={project.techStack}
            projectDescription={project.description}
            demoLink={project.demoLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
}
