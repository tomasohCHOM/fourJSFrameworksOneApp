import React from "react";
import styles from "./Project.module.css";

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
        {props.projectTechStack.map((technology) => {
          return <Badge text={technology} />;
        })}
      </div>
      <p>{props.projectDescription}</p>
    </div>
  );
}
