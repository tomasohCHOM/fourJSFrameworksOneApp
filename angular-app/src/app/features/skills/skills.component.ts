import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-skills",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.css"],
})
export class SkillsComponent {
  programmingSkills: string[] = [
    "cpp",
    "python",
    "typescript",
    "javascript",
    "html",
    "css",
    "java",
  ];

  frameworkSkills: string[] = [
    "react",
    "next",
    "node",
    "svelte",
    "sass",
    "tailwind",
  ];
}
