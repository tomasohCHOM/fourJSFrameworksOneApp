import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import ProjectsList from "./components/ProjectsList/ProjectsList";

function App() {
  return (
    <>
      <Navbar />

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
