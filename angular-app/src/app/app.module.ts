import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./features/navbar/navbar.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NavbarComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
