<template>
  <section>
    <h2 id="projects" class="sectionTitle m-end">Projects</h2>
    <div class="projectsListContainer">
      <Project v-for="project in projectsList" :project="project" />
    </div>
  </section>
</template>

<script>
import Project from "./Project.vue";

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

export default {
  name: "ProjectsList",
  data: () => {
    return {
      projectsList,
    };
  },
  components: {
    Project,
  },
};
</script>

<style scoped>
.projectsListContainer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-block-end: 2rem;
}

@media only screen and (max-width: 60rem) {
  .projectsListContainer {
    grid-template-columns: 1fr;
  }
}
</style>
