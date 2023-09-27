import { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import ProjectsList from "./components/ProjectsList/ProjectsList";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        {/* Displays my programming/framework skills */}
        <Skills />

        <ProjectsList />
      </main>
    </>
  );
}

export default App;
