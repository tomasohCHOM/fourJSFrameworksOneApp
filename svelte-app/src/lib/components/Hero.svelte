<script>
  import headshot from "/assets/website/photo.jpg";
</script>

<section class="hero">
  <div class="left">
    <h3 id="about">Hello! I'm</h3>
    <h1>
      <span class="blue">Tomas Oh</span>
    </h1>
    <h2>
      Full-Stack Software Engineer and Computer Science Student at California
      State University, Fullerton
    </h2>

    <p>
      Strong passion for developing curated sofware and learning new
      technologies every day. I believe in giving opportunities to try new
      things, working outside my comfort zone, and expanding my knowledge and
      perception of tomorrow's betterment.
    </p>
    <p>
      My other interests include watching Soccer, playing competitive Smash
      Bros, and drawing!
    </p>
  </div>
  <div class="right">
    <img src={headshot} alt="Headshot" />
  </div>
</section>

<style>
  .hero {
    margin-block: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
  }

  .blue {
    color: var(--color-blue);
  }

  .left > p {
    margin-block-end: 1rem;
  }

  .right {
    display: flex;
    align-self: center;
    justify-content: center;
  }

  .right > img {
    border-radius: 50%;
    width: 20rem;
    height: auto;
  }

  @media only screen and (max-width: 60rem) {
    .hero {
      grid-template-columns: 1.25fr 1fr;
      column-gap: 1rem;
    }

    .right > img {
      width: min(100%, 20rem);
    }
  }

  @media only screen and (max-width: 40rem) {
    .hero {
      /* grid-auto-flow: column; */
      grid-template-columns: 1fr;
      row-gap: 2rem;
    }

    .left {
      order: 1;
    }

    .right > img {
      width: 15rem;
    }
  }
</style>
