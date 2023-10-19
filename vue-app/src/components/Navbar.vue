<script>
// import { IoCloseOutline } from "oh-vue-icons/icons";
// import { FaBars } from "oh-vue-icons/icons";
import OhVueIcons from "oh-vue-icons";

const navbarItems = [
  { title: "About", path: "#about" },
  { title: "Skills", path: "#skills" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

let isOpen = false;

const scrollToLocation = (event, path) => {
  event.preventDefault();
  const element = document.querySelector(path);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  }
  isOpen = !isOpen;
};

export default {
  name: "Navbar",
  data: () => {
    return {
      isOpen: false,
      navbarItems,
    };
  },
  methods: {
    scrollToLocation: scrollToLocation,
  },
  components: {
    "v-icons": OhVueIcons,
  },
};
</script>

<template>
  <nav class="container">
    <div class="left">
      <span>Tomas Oh</span>
    </div>
    <div class="right">
      <div class="sections" class:active="{isOpen}">
        <button @click="isOpen = !isOpen" class="closeNavbarBtn">
          <IoCloseOutline />
        </button>
        <span
          v-for="item in navbarItems"
          @click="(e) => scrollToLocation(e, item.path)"
        >
          {{ item.title }}
        </span>
      </div>
      <button @click="() => (isOpen = !isOpen)" class="openNavbarBtn">
        <v-icons name="fa-bars" />
      </button>
    </div>
  </nav>

  <div
    @click="() => (isOpen = !isOpen)"
    class="darkCover"
    :class="{ isOpen }"
  ></div>
</template>

<style scoped>
.container {
  z-index: 5;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  font-size: 1.25rem;
  background-color: rgb(255, 255, 255);
  /* border-bottom: 1px solid rgb(207, 207, 207); */
  box-shadow: var(--box-shadow);
}

.container > * {
  cursor: pointer;
}

.right > .sections > * {
  margin-inline: 0.5rem;
  transition: all 0.2s;
}

.right > .sections > span:hover {
  color: var(--color-blue);
}

.openNavbarBtn,
.closeNavbarBtn {
  display: none;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: var(--color-contrast);
  text-align: center;
  width: 1.5rem;
  font-size: 1.5rem;
  border-radius: 50%;
}

.closeNavbarBtn {
  position: absolute;
  top: 2rem;
  right: 1rem;
}

@media only screen and (max-width: 40rem) {
  .darkCover {
    display: none;
    position: fixed;
    width: 100vw;
    height: 100vh;
  }

  .darkCover.activeCover {
    display: block;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.2);
  }

  .sections {
    z-index: 10;
    position: fixed;
    top: 0;
    right: -15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: min(13rem, 60vw);
    height: 100vh;
    padding: 2rem;
    background-color: var(--color-primary);
    box-shadow: var(--box-shadow);
    transition: all 0.2s;
  }

  .sections.active {
    right: 0;
  }

  .sections > span {
    font-size: 1.5rem;
    font-weight: 500;
  }

  .right > .openNavbarBtn {
    display: flex;
    justify-content: center;
  }

  .closeNavbarBtn {
    display: block;
  }
}
</style>
