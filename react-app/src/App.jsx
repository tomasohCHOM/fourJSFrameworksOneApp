import { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <Skills />
      </main>
    </>
  );
}

export default App;
