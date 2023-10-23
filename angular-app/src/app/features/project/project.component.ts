import { Component, Input, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BadgeComponent } from "src/app/shared/badge/badge.component";
import { ButtonComponent } from "src/app/shared/button/button.component";

@Component({
  selector: "app-project",
  standalone: true,
  imports: [CommonModule, BadgeComponent, ButtonComponent],
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.css"],
})
export class ProjectComponent {
  @Input() project!: Project;
}

export interface Project {
  name: string;
  demoLink: string;
  githubLink: string;
  imageSource: string;
  techStack: string[];
  description: string;
}
