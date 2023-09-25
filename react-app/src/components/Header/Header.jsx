import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.container.left}>Tomas Oh</div>
      <div className={styles.right}>
        <span>About</span>
        <span>Projects</span>
        <span>Contact</span>
        <button className={styles.button}>Dark Mode</button>
      </div>
    </header>
  );
}
