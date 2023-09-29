import React from "react";
import styles from "./Project.module.css";
import Badge from "../components/Badge";

export default function Project(props) {
  return (
    <div>
      <h3>{props.projectName}</h3>
      <img
        className={styles.image}
        src={props.imageSource}
        alt={"Image for Project " + props.projectName}
      />
      <div className={styles.techStackContainer}>
        {props.projectTechStack.map((technology, key) => (
          <Badge key={key} text={technology} />
        ))}
      </div>
      <p>{props.projectDescription}</p>
    </div>
  );
}
