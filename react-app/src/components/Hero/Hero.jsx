import React from "react";
import styles from "./Hero.module.css";
import headshot from "/assets/website/photo.jpg";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <h3>Hello! I'm</h3>
        <h1>
          <span className={styles.blue}>Tomas Oh</span>
        </h1>
        <h2>
          Full-Stack Software Engineer and Computer Science Student at
          California State University, Fullerton
        </h2>

        <p>
          Strong passion for developing curated sofware and learning new
          technologies every day. I believe in giving opportunities to try new
          things, working outside my comfort zone, and expanding my knowledge
          and perception of tomorrow's betterment.
        </p>
        <p>
          My other interests include watching Soccer, playing competitive Smash
          Bros, and drawing!
        </p>
      </div>
      <div className={styles.right}>
        <img src={headshot} alt="Headshot Photo" />
      </div>
    </section>
  );
}
