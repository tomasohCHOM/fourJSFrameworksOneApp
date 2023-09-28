import React from "react";
import styles from "./ProjectsList.module.css";

export default function ProjectsList() {
  return (
    <section>
      <h2>Projects</h2>
      <div className={styles.projectsListContainer}></div>
    </section>
  );
}
