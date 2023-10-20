<template>
  <section class="skillsSection">
    <h2 id="skills" class="sectionTitle">Skills</h2>
    <div class="skillsContainer">
      <h3 class="sectionSubtitle">Programming</h3>
      <div>
        <img
          v-for="skill in programmingSkills"
          :src="'/assets/skills/' + skill + '-icon.png'"
          v-bind:alt="skill + ' icon'"
        />
      </div>
    </div>
    <div class="skillsContainer">
      <h3 class="sectionSubtitle">Frameworks</h3>
      <div>
        <img
          v-for="skill in frameworkSkills"
          :src="'/assets/skills/' + skill + '-icon.png'"
          v-bind:alt="skill + ' icon'"
        />
      </div>
    </div>
  </section>
</template>

<script>
const programmingSkills = [
  "cpp",
  "python",
  "typescript",
  "javascript",
  "html",
  "css",
  "java",
];

const frameworkSkills = ["react", "next", "node", "svelte", "sass", "tailwind"];

export default {
  name: "Skills",
  data: () => {
    return {
      programmingSkills,
      frameworkSkills,
    };
  },
};
</script>

<style scoped>
.sectionSubtitle {
  font-size: 1.75rem;
}

.skillsSection {
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  margin-block-end: 2rem;
}

.skillsContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1.5rem;
}

.skillsContainer > div {
  display: flex;
  row-gap: 1rem;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 1.5rem;
}

.skillsContainer > div > img {
  cursor: pointer;
  width: 5rem;
  aspect-ratio: 1;
}

@keyframes expand {
}

@media only screen and (max-width: 40rem) {
  .skillsContainer > div {
    column-gap: 1rem;
  }
  .skillsContainer > div > img {
    width: 3rem;
  }
}
</style>
