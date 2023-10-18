<script>
  import Badge from "./Badge.svelte";
  import Button from "./Button.svelte";

  export let project;
</script>

<div class="projectContainer">
  <h3>{project.projectName}</h3>
  <img
    class="image"
    src={project.imageSource}
    alt={"Image for Project " + project.projectName}
  />
  <div class="techStackContainer">
    {#each project.techStack as technology}
      <Badge text={technology} />
    {/each}
  </div>
  <p>{project.description}</p>
  <div class="links">
    {#if project.demoLink !== ""}
      <Button>
        <a class="link" href={project.demoLink}> Demo </a>
      </Button>
    {/if}
    <Button>
      <a class="link" href={project.githubLink}> Github Repo </a>
    </Button>
  </div>
</div>

<style>
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
