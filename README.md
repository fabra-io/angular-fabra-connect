# angular-fabra-connect

## Files

* `./angular-fabra-connect/` - Source code for the `@fabra/angular-fabra-connect` npm package, including a hosting Angular app.
  * `./angular-fabra-connect/projects/fabra-connect/` - Actual source code of `@fabra/angular-fabra-connect`.
  * `./angular-fabra-connect/src/` - Hosing Angular app for testing purposes.
* `./example-app/` - A demo app importing the `@fabra/angular-fabra-connect` package, for testing the npm package.

## Build

To build the Fabra Connect package for Angular:

```
cd angular-fabra-connect
ng build fabra-connect // or npm run watch
```

The built package is in `./dist/fabra-connect`.

## Example app

Install the built `fabra-connect` package and run the example app:

```
cd example-app
npm install ../angular-fabra-connect/dist/fabra-connect
ng serve
```

## Use Fabra

See code in:

* `./example-app/src/app/app.module.ts` - Add `FabraConnectModule` to `imports` in `@NgModule`.
* `example-app/src/app/app.component.ts` - Inject `FabraConnectService` and call `FabraConnectService.initialize()`.
