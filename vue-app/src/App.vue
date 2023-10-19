<script>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import Skills from "./components/Skills.vue";

export default {
  components: {
    Navbar,
    Hero,
    Skills,
  },
};
</script>

<template>
  <Navbar />

  <main>
    <Hero />

    <Skills />
  </main>
</template>
