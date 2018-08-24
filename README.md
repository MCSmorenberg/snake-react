# React Starter

## Installation

```bash
npm install
npm start
open http://localhost:3000
```



# Grip Switch

## Introduction

This library includes the grip-switch.

## Setting up the NPM registry (skip this if you already done it in your machine)
To setup the Grip npm registry in your machine:
* Request an account from Max to the npm registry → https://npm.tools.onkpn.com
* Run these two commands in the terminal:
  * npm set registry https://npm.tools.onkpn.com
  * npm adduser --registry https://npm.tools.onkpn.com
* Go to your `.npmrc` (usually located in your system user root folder) file and change `//npm.tools.onkpn.com/:always-auth=false` to true (`//npm.tools.onkpn.com/:always-auth=true`)

## Installation

Just add the library to your `package.json`
```json
"@kpn-grip/switch": "^1.1.0"
```

## Usage
Import the module in your application module:
```typescript
import { GripFilterSearchModule } from '@kpn-grip/switch';
@NgModule({
  imports: [
    GripFilterSearchModule
  ]
})
export class AppModule { }
```

Add the switch to your component:
```html
<h3>Switch</h3>
<grip-switch [options]="demoSwitchOptions" (onSwitch)=switch($event)></grip-switch>

```

Define your own options and make sure that one of the options contain the `defaut` property and set that to `true`:
```js
public demoSwitchOptions: SwitchOption[] = [
    {
      label: 'Value A',
      value: 'valueA',
      default: true
    },
    {
      label: 'Value B',
      value: 'valueB'
    }
  ];
```

Finally get the selected value from your `switch` function:

```js
  public switch(optionValue: string): void {
    console.log('switch', optionValue);
  }
```

## Unit testing
Always make sure your functionalities are fully covered by unit tests. To run the unit tests once you can run:

```bash
npm test
```

Or if you want to watch the tests while you are creating/fixing them you can run:

```bash
npm run test:watch
```

# Contributing

Contributions are made by creating pull requests on the `develop` branch of the repository.

Always make sure that the following points are covered before creating the pull request:
* The new feature is fully covered in the demo application
* The way on how to use the feature is fully documented in the `README.md`
* The unit tests should be at least 80%

As the main owner of this library, at least one of the elements of the `Grip Core` team should always be involved the approval of pull requests.

# Publishing

To publish the app always use semantic versioning. So when creating the pull request for the new feature always including the new version in the library's `package.json` using semantic versioning.
These are the steps to publish a new version:

* Build the library by running `npm run build` in the main library folder
* The library is then bundled into the `dist` folder
* Open the terminal in the `dist` folder and run `npm publish`

The new version of the library should now be deployed to the npm registry and can be checked by logging into its website - https://npm.tools.onkpn.com


------------------

Simplified version of [react-transform-boilerplate](https://github.com/gaearon/react-transform-boilerplate) for the
traineeship program.
