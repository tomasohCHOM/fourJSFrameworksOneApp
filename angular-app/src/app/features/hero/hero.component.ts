import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
// import photo from "../../../assets/website/photo.jpg";

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.css"],
})
export class HeroComponent {
  // headshot = photo;
}
