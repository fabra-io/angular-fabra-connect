import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { FabraConnectModule } from "../../projects/fabra-connect/src/lib/fabra-connect.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, HttpClientModule, FabraConnectModule],
})
export class AppModule {}
