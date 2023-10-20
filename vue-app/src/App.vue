<script>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import Skills from "./components/Skills.vue";
import ProjectsList from "./components/ProjectsList.vue";

export default {
  components: {
    Navbar,
    Hero,
    Skills,
    ProjectsList,
  },
};
</script>

<template>
  <Navbar />

  <main>
    <Hero />

    <Skills />

    <ProjectsList />
  </main>
</template>
