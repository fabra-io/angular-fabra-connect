import { Component } from "@angular/core";
import {
  FabraConnectOptions,
  FabraConnectService,
} from "@fabra/angular-fabra-connect";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(private fabraConnectService: FabraConnectService) {}

  title = "angular-fabra-connect";

  retriveLinkToken(): string {
    // Fetch link token from your backend
    return "";
  }

  async openFabraConnect(fabraConnectOptions: FabraConnectOptions) {
    await this.fabraConnectService.initialize(fabraConnectOptions);
    const linkToken = await this.retriveLinkToken();
    this.fabraConnectService.open(linkToken);
  }
}
