import React, { useState } from "react";
import styles from "./Navbar.module.css";

const navbarItems = [
  { title: "About", path: "#about" },
  { title: "Skills", path: "#skills" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const goTo = (event, path) => {
  event.preventDefault();
  window.location.replace(path);
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.container}>
      <div className={styles.container.left}>Tomas Oh</div>
      <div className={styles.right}>
        <div className={`${styles.sections} ${open && styles.active}`}>
          {navbarItems.map((item, index) => (
            <span key={index} onClick={(e) => goTo(e, item.path)}>
              {item.title}
            </span>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} className={styles.openNavbarBtn}>
          X
        </button>
      </div>
    </nav>
  );
}
