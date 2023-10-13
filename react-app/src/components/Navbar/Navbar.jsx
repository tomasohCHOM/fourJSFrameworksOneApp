import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className={styles.container}>
        <div className={styles.container.left}>
          <span>Tomas Oh</span>
        </div>
        <div className={styles.right}>
          <div className={`${styles.sections} ${isOpen && styles.active}`}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={styles.closeNavbarBtn}
            >
              <RxCross2 />
            </button>
            {navbarItems.map((item, index) => (
              <span key={index} onClick={(e) => goTo(e, item.path)}>
                {item.title}
              </span>
            ))}
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={styles.openNavbarBtn}
          >
            <FaBars />
          </button>
        </div>
      </nav>

      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`${styles.darkCover} ${isOpen && styles.activeCover}`}
      />
    </>
  );
}
