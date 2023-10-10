import React from "react";
import styles from "./Project.module.css";
import Badge from "../Badge/Badge";
import Button from "../Button/Button";

export default function Project(props) {
  return (
    <div className={styles.projectContainer}>
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
      <div>
        <Button>
          <a className={styles.link} href={props.demoLink}>
            Demo
          </a>
        </Button>
        <Button>
          <a className={styles.link} href={props.githubLink}>
            Github Repo
          </a>
        </Button>
      </div>
      <div className={styles.links}></div>
    </div>
  );
}
