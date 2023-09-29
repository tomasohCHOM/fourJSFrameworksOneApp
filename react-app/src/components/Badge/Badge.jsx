import React from "react";
import styles from "./Badge.module.css";

export default function Badge(props) {
  return <span className={styles.badge}>{props.text}</span>;
}
