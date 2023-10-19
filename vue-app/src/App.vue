<script>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";

export default {
  components: {
    Navbar,
    Hero,
  },
};
</script>

<template>
  <Navbar />

  <main>
    <Hero />
  </main>
</template>
