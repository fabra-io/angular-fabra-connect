import { Injectable } from "@angular/core";
import { FabraConnectOptions } from "./types";

@Injectable({
  providedIn: "root",
})
export class FabraConnectService {
  constructor() {}

  private scriptLoaded = false;
  private initialized = false;

  async initialize(options?: FabraConnectOptions) {
    if (!this.scriptLoaded) {
      await this.loadLibraryScript(
        new URL("https://connect.fabra.io/initialize.js")
      );
      this.scriptLoaded = true;
    }
    if (!this.initialized) {
      await window.fabra.initialize(options);
      this.initialized = true;
    }
  }

  private loadLibraryScript(src: URL): Promise<void> {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://connect.fabra.io/initialize.js";
      script.onload = () => {
        resolve();
      };
      document.getElementsByTagName("head")[0].appendChild(script);
    });
  }

  open(linkToToken: string) {
    if (window.fabra) {
      window.fabra.open(linkToToken);
    } else {
      console.error(
        "Fabra Connect not initialized. Did you call FabraConnectService.initialize()?"
      );
    }
  }

  close() {
    if (window.fabra) {
      window.fabra.close();
    }
  }

  reattach(containerID: string) {
    if (window.fabra) {
      window.fabra.reattach(containerID);
    } else {
      console.error(
        "Fabra Connect not initialized. Did you call FabraConnectService.initialize()?"
      );
    }
  }

  destroy() {
    if (window.fabra) {
      window.fabra.destroy();
    }
  }
}
