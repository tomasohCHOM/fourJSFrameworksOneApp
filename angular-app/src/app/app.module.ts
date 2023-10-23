import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./features/navbar/navbar.component";
import { HeroComponent } from "./features/hero/hero.component";
import { SkillsComponent } from "./features/skills/skills.component";
import { ProjectsListComponent } from "./features/projects-list/projects-list.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NavbarComponent,
    HeroComponent,
    SkillsComponent,
    ProjectsListComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
