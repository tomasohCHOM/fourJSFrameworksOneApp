import React from "react";
import styles from "./Navbar.module.css";

const headerItems = [
  { title: "About", path: "#about" },
  { title: "Skills", path: "#skills" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const goTo = (event, path) => {
  event.preventDefault();
  window.location.replace(path);
};

export default function NavBar() {
  return (
    <nav className={styles.container}>
      <div className={styles.container.left}>Tomas Oh</div>
      <div className={styles.right}>
        {headerItems.map((item, index) => (
          <span key={index} onClick={(e) => goTo(e, item.path)}>
            {item.title}
          </span>
        ))}
        {/* <button className={styles.button}>Dark Mode</button> */}
      </div>
    </nav>
  );
}
