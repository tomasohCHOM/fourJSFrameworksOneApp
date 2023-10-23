import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent {
  isOpen: boolean = false;
  navbarItems: NavbarItem[] = [
    { title: "About", path: "#about" },
    { title: "Skills", path: "#skills" },
    { title: "Projects", path: "#projects" },
    { title: "Contact", path: "#contact" },
  ];

  scrollToLocation(event: Event, path: string) {
    event.preventDefault();
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
    this.isOpen = !this.isOpen;
  }
}

export interface NavbarItem {
  title: string;
  path: string;
}
