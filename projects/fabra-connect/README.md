# AngularFabraConnect

## Getting Started

1. Run `npm install @fabra/angular-fabra-connect`

2. In your root `app.module.ts`, add:

```
import { FabraConnectModule } from "@fabra/angular-fabra-connect";


@NgModule({
  ...
  imports: [
    FabraConnectModule, ...
  ],
  ...
})
```

3. In the `<yourComponent>.component.ts` file of the component where you want to open Fabra Connect, add:

```
import { FabraConnectService } from "@fabra/angular-fabra-connect";

export class FabraComponent implements OnInit {
  linkToken: string = "";

  constructor(private fabraConnectService: FabraConnectService) { }

  ngOnInit() {
    this.fabraConnectService.initialize();
    this.linkToken = "YOUR_GENERATED_LINK_TOKEN";
  }

  onButtonClick() {
    this.fabraConnectService.open(this.linkToken);
  }
}
```

4. In the `<yourComponent>.component.html` file of the component where you want to open Fabra Connect:

```
<button (click)="onButtonClick()" class="button">Open Fabra Connect</button>
```

5. Import your component and use it to open Fabra Connect!

## Build

Run `ng build fabra-connect` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build fabra-connect`, go to the dist folder `cd dist/fabra-connect` and run `npm publish`.

## Running unit tests

Run `ng test fabra-connect` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
