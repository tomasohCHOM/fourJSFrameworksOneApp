<template>
  <div class="projectContainer">
    <h3>{{ project.name }}</h3>
    <img
      class="image"
      :src="project.imageSource"
      :alt="'Image for Project ' + project.name"
    />
    <div class="techStackContainer">
      <Badge v-for="technology in project.techStack" :text="technology" />
    </div>
    <p>{{ project.description }}</p>
    <div class="links">
      <Button v-if="project.demoLink !== ''">
        <a class="link" :href="project.demoLink">Demo</a>
      </Button>
      <Button>
        <a class="link" :href="project.githubLink"> Github Repo </a>
      </Button>
    </div>
  </div>
</template>

<script>
import Badge from "./Badge.vue";
import Button from "./Button.vue";

export default {
  name: "Project",
  props: {
    project: Object,
  },
  components: {
    Badge,
    Button,
  },
};
</script>

<style scoped>
.projectContainer {
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  row-gap: 0.5rem;
  padding: 2rem;
  box-shadow: var(--box-shadow);
  border-radius: 1.5rem;
  width: auto;
}

.projectContainer > h3 {
  font-weight: 600;
}

.projectContainer > p {
  text-align: center;
  width: 80%;
}

.link {
  font-family: "DM Sans", sans-serif;
  font-size: 1rem;
  text-decoration: none;
  color: rgb(255, 255, 255);
}

.image {
  width: 80%;
  /* height: 15rem; */
}

.techStackContainer {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}

@media only screen and (max-width: 40rem) {
  .projectContainer {
    padding: 1.5rem 2rem;
  }

  .image {
    height: auto;
  }
}
</style>
