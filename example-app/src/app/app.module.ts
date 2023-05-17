import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { FabraConnectModule } from "@fabra/angular-fabra-connect";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FabraConnectModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
