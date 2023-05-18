# angular-fabra-connect

## Build

To build the Fabra Connect package for Angular:

```
ng build fabra-connect // or npm run build
```

The built package is in `./dist/fabra-connect`.

## Use Fabra

* Add `FabraConnectModule` to `imports` in `@NgModule`.
* Inject `FabraConnectService` and call `FabraConnectService.initialize()`.

